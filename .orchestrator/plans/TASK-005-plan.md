# IMPLEMENTATION PLAN: TASK-005

**Task ID:** TASK-005
**Priority:** P1 (High - Foundation for Animations)
**Assignee:** Frontend Builder Agent
**Estimated Duration:** 45-60 minutes

---

## Task Title

**GSAP Setup & ScrollTrigger Configuration**

---

## Specifications

**Reference:**
- `design-plan.ts` → Lines 559-600 (GSAP Configuration)
- `redesign_plan.md` → Lines 322-345 (Animation Guidelines)

**Objective:**
Konfiguriere GSAP 3.12+ mit ScrollTrigger Plugin für alle scroll-basierten Animationen. Erstelle utility functions und helper components.

---

## Implementation Steps

### 1. GSAP Library Setup
**Action:** Erstelle zentrale GSAP-Konfigurationsdatei
**Files:** `src/lib/gsap.ts` (neu)

**Implementation:**
```typescript
'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register Plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Default GSAP Config
export const gsapConfig = {
  defaults: {
    ease: 'power3.out',
    duration: 0.8,
  },
  easings: {
    entrance: 'power3.out',
    exit: 'power2.in',
    transition: 'power2.inOut',
    bounce: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.5)',
    smooth: 'power1.out',
  },
  durations: {
    micro: 0.2,    // Hover, Focus
    short: 0.4,    // Quick transitions
    medium: 0.8,   // Element reveals
    long: 1.2,     // Section transitions
    hero: 1.5,     // Hero animations
  },
} as const;

// ScrollTrigger Defaults
export const scrollTriggerDefaults = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
} as const;

// Set GSAP defaults
gsap.defaults(gsapConfig.defaults);

// Export for use
export { gsap, ScrollTrigger, useGSAP };
```

### 2. useReducedMotion Hook
**Action:** Respektiere prefers-reduced-motion
**Files:** `src/app/hooks/useReducedMotion.ts` (neu)

**Implementation:**
```typescript
'use client';

import { useState, useEffect } from 'react';

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}
```

### 3. ScrollTrigger Utility Functions
**Action:** Helper für häufige ScrollTrigger-Patterns
**Files:** `src/lib/gsap-utils.ts` (neu)

**Functions:**
```typescript
import { gsap, ScrollTrigger } from './gsap';
import { scrollTriggerDefaults } from './gsap';

/**
 * Fade In on Scroll
 */
export function fadeInOnScroll(
  element: string | Element,
  options?: gsap.TweenVars & ScrollTrigger.Vars
) {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    scrollTrigger: {
      trigger: element,
      ...scrollTriggerDefaults,
      ...options?.scrollTrigger,
    },
    ...options,
  });
}

/**
 * Stagger Reveal on Scroll
 */
export function staggerReveal(
  elements: string | Element[],
  staggerAmount = 0.1,
  options?: gsap.TweenVars & ScrollTrigger.Vars
) {
  return gsap.from(elements, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: staggerAmount,
    scrollTrigger: {
      trigger: elements,
      ...scrollTriggerDefaults,
      ...options?.scrollTrigger,
    },
    ...options,
  });
}

/**
 * Parallax Effect
 */
export function parallax(
  element: string | Element,
  speed = 0.5,
  options?: ScrollTrigger.Vars
) {
  gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      ...options,
    },
  });
}

/**
 * Pin Section
 */
export function pinSection(
  element: string | Element,
  options?: ScrollTrigger.Vars
) {
  ScrollTrigger.create({
    trigger: element,
    pin: true,
    start: 'top top',
    end: '+=100%',
    ...options,
  });
}
```

### 4. Animation Components

#### 4.1 TextReveal Component
**Files:** `src/app/components/animations/TextReveal.tsx` (neu)

**Purpose:** Word-by-word oder Character-by-character Text Reveal

**Implementation:**
```typescript
'use client';

import { useRef, useEffect } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

interface TextRevealProps {
  children: string;
  type?: 'words' | 'chars' | 'lines';
  stagger?: number;
  delay?: number;
  className?: string;
}

export default function TextReveal({
  children,
  type = 'words',
  stagger = 0.05,
  delay = 0,
  className = '',
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (!containerRef.current || prefersReducedMotion) return;

    const elements = containerRef.current.querySelectorAll('.reveal-item');

    gsap.from(elements, {
      opacity: 0,
      y: 20,
      stagger,
      delay,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, [stagger, delay, prefersReducedMotion]);

  const splitText = () => {
    if (type === 'words') {
      return children.split(' ').map((word, i) => (
        <span key={i} className="reveal-item inline-block mr-1">
          {word}
        </span>
      ));
    } else if (type === 'chars') {
      return children.split('').map((char, i) => (
        <span key={i} className="reveal-item inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }
    return children;
  };

  return (
    <div ref={containerRef} className={className}>
      {splitText()}
    </div>
  );
}
```

#### 4.2 ParallaxImage Component
**Files:** `src/app/components/animations/ParallaxImage.tsx` (neu)

**Purpose:** Image mit Parallax-Scroll-Effekt

**Implementation:**
```typescript
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@/lib/gsap';
import { parallax } from '@/lib/gsap-utils';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number; // -1 to 1 (negative = moves up, positive = moves down)
  className?: string;
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  className = '',
  priority = false,
}: ParallaxImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (!imageRef.current || prefersReducedMotion) return;
    parallax(imageRef.current, speed);
  }, [speed, prefersReducedMotion]);

  return (
    <div ref={imageRef} className={`overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
```

#### 4.3 SunAnimation Component
**Files:** `src/app/components/animations/SunAnimation.tsx` (neu)

**Purpose:** Kontinuierlich rotierende Sonne (Grafik_Sonne.svg)

**Implementation:**
```typescript
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap, useGSAP } from '@/lib/gsap';
import { GRAPHIC_SUN } from '@/lib/assets';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

interface SunAnimationProps {
  size?: number;
  speed?: number; // rotation duration in seconds (default: 60)
  className?: string;
}

export default function SunAnimation({
  size = 400,
  speed = 60,
  className = '',
}: SunAnimationProps) {
  const sunRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (!sunRef.current || prefersReducedMotion) return;

    gsap.to(sunRef.current, {
      rotation: 360,
      duration: speed,
      repeat: -1,
      ease: 'none',
    });
  }, [speed, prefersReducedMotion]);

  return (
    <div
      ref={sunRef}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={GRAPHIC_SUN}
        alt="Sonne"
        fill
        className="object-contain"
      />
    </div>
  );
}
```

### 5. ScrollTrigger Refresh on Route Change
**Action:** Refresh ScrollTrigger bei Navigation
**Files:** `src/app/components/ScrollTriggerRefresh.tsx` (neu)

**Purpose:** Fix für Next.js App Router

**Implementation:**
```typescript
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from '@/lib/gsap';

export default function ScrollTriggerRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}
```

### 6. Testing Page
**Action:** Erstelle Test-Page für alle GSAP-Components
**Files:** `src/app/gsap-test/page.tsx` (neu)

**Content:**
- TextReveal Beispiele (words, chars)
- ParallaxImage Demo
- SunAnimation Demo
- ScrollTrigger Utilities Demo
- Reduced Motion Testing

---

## Validation Criteria

**Functional Tests:**
- [ ] GSAP & ScrollTrigger importieren ohne Errors
- [ ] useGSAP Hook funktioniert
- [ ] ScrollTrigger registriert
- [ ] Default Config gesetzt

**Component Tests:**
- [ ] TextReveal: Words splitting korrekt
- [ ] TextReveal: Animation läuft smooth
- [ ] ParallaxImage: Parallax-Effekt funktioniert
- [ ] SunAnimation: Rotation smooth und endlos
- [ ] Reduced Motion respektiert (keine Animationen)

**Performance Tests:**
- [ ] Keine Memory Leaks
- [ ] ScrollTrigger refresht korrekt
- [ ] Animationen laufen mit 60fps

---

## Definition of Done

- [ ] `src/lib/gsap.ts` mit Konfiguration
- [ ] `src/lib/gsap-utils.ts` mit Helper-Functions
- [ ] `src/app/hooks/useReducedMotion.ts`
- [ ] TextReveal Component
- [ ] ParallaxImage Component
- [ ] SunAnimation Component
- [ ] ScrollTriggerRefresh Component
- [ ] Test-Page funktioniert
- [ ] Reduced Motion Support

---

## Acceptance Criteria (für Design Review)

**Design Review OPTIONAL** (Technisches Setup)

Visueller Test erst bei Section-Implementierung nötig.

---

## Dependencies

**Blocked By:**
- TASK-001 (Tailwind Config) ✅
- GSAP ist bereits installiert (package.json) ✅

**Blocks:**
- Alle Section-Tasks (brauchen GSAP Animations)

---

## Notes

- **SSR Safe:** Alle GSAP-Calls in useEffect/useGSAP
- **Tree Shaking:** Nur benötigte Plugins importieren
- **Performance:** ScrollTrigger scrub: true für smooth parallax
- **A11y:** useReducedMotion respektieren ist KRITISCH

---

## Rollback Plan

**If implementation fails:**
1. GSAP ohne ScrollTrigger (nur Tweens)
2. CSS Animations als Fallback
3. Reduced Motion: Skip Animationen komplett
4. Eskalation bei Performance-Issues

---

**Plan Created:** 2026-01-30
**Status:** Ready for Frontend Builder
