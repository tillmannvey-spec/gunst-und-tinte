# IMPLEMENTATION PLAN: TASK-007

**Task ID:** TASK-007
**Priority:** P0 (Critical - First Section)
**Assignee:** Frontend Builder Agent
**Estimated Duration:** 60-90 minutes
**Design Review:** REQUIRED ✅

---

## Task Title

**Hero Section - Fullscreen with Rubens Background**

---

## Specifications

**Reference:**
- `redesign_plan.md` → Lines 95-116 (Hero Section)
- `design-plan.ts` → Lines 208-237 (heroContent)
- `design-plan.ts` → Lines 640-658 (Hero Animations)

**Objective:**
Implementiere die dramatische Hero Section mit Rubens-Gemälde als Hintergrund, großem Logo und Scroll-Indikator.

---

## Visual Specifications

### Layout
- **Height:** 100vh (Fullscreen)
- **Background:** Rubens-Bild (`hero-rubens.jpg`) mit Parallax
- **Logo:** Logo_Start.svg zentriert
- **Scroll Indicator:** Unten zentriert mit Bounce-Animation

### Content Structure
```
┌─────────────────────────────────────┐
│         Navigation (sticky)         │ <- From TASK-004
├─────────────────────────────────────┤
│                                     │
│                                     │
│          [Logo_Start.svg]           │ <- Zentriert, groß
│                                     │
│                                     │
│                                     │
│              ↓ scroll               │ <- Bounce-Animation
└─────────────────────────────────────┘
```

### Colors
- Background Image: `Bild_Start_Rubens.jpg`
- Logo: Original Farben (aus SVG)
- Scroll Text: creme (#F7EDC2)

---

## Implementation Steps

### 1. Hero Section Component erstellen
**Action:** Erstelle Section-Component
**Files:** `src/app/sections/Hero.tsx` (neu)

**Component Structure:**
```tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap, useGSAP } from '@/lib/gsap';
import { parallax } from '@/lib/gsap-utils';
import { LOGO_START, IMAGES } from '@/lib/assets';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Animations (siehe Step 2)

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background with Parallax */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero.rubens}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay (optional) */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Logo */}
      <div ref={logoRef} className="relative z-20 h-full flex items-center justify-center">
        <Image
          src={LOGO_START}
          alt="Gunst & Tinte"
          width={600}
          height={600}
          className="w-[600px] h-auto max-w-[80vw]"
          priority
        />
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollRef} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={handleScrollDown}>
          <span className="font-secondary text-label-desktop text-creme uppercase tracking-wider">
            scroll
          </span>
          <ChevronDown className="w-6 h-6 text-creme" />
        </div>
      </div>
    </section>
  );
}
```

### 2. GSAP Animationen implementieren
**Action:** Load-Animationen mit GSAP
**Files:** Hero.tsx (useGSAP hook)

**Animation Sequence:**
```typescript
useGSAP(() => {
  if (!logoRef.current || !bgRef.current || !scrollRef.current) return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // 1. Background: Zoom in (scale 1.1 → 1)
  tl.from(bgRef.current, {
    scale: 1.1,
    duration: 2,
    ease: 'power2.out',
  }, 0);

  // 2. Logo: Fade in + Scale (0.8 → 1)
  tl.from(logoRef.current, {
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    delay: 0.3,
  }, 0.3);

  // 3. Scroll Indicator: Fade in
  tl.from(scrollRef.current, {
    opacity: 0,
    y: 20,
    duration: 0.8,
  }, 1);

  // Continuous bounce animation for scroll indicator
  gsap.to(scrollRef.current, {
    y: 10,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });

}, []);

// Parallax for background
useGSAP(() => {
  if (!bgRef.current) return;
  parallax(bgRef.current, 0.5);
}, []);
```

**Timing:**
- Background Zoom: 0s - 2s
- Logo Fade: 0.3s - 1.5s
- Scroll Indicator: 1s - 1.8s
- Scroll Bounce: Infinite (starts after load)

### 3. Scroll Down Funktion
**Action:** Smooth Scroll zu nächster Section
**Files:** Hero.tsx

**Implementation:**
```typescript
const handleScrollDown = () => {
  const nextSection = document.querySelector('#philosophy');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
};
```

### 4. Responsive Anpassungen
**Action:** Mobile-optimierte Styles
**Files:** Hero.tsx (Tailwind classes)

**Responsive Specs:**
```tsx
// Logo
className="w-[600px] h-auto max-w-[80vw] md:max-w-[70vw] sm:max-w-[90vw]"

// Scroll Text
className="text-label-desktop md:text-label-mobile"

// Bottom Spacing
className="bottom-12 md:bottom-8 sm:bottom-6"
```

### 5. Integration in Main Page
**Action:** Füge Hero zu page.tsx hinzu
**Files:** `src/app/page.tsx`

**Modification:**
```tsx
import Hero from './sections/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Weitere Sections folgen */}
    </main>
  );
}
```

### 6. Performance Optimierungen
**Action:** Next.js Image Optimization
**Files:** Hero.tsx

**Details:**
- `priority` auf Hero-Bild (LCP)
- Logo als `priority`
- `object-cover` für Background
- WebP auto-conversion durch Next.js

---

## Validation Criteria

**Functional Tests:**
- [ ] Hero ist 100vh hoch
- [ ] Background-Bild lädt und zeigt Rubens
- [ ] Logo ist zentriert
- [ ] Scroll Indicator funktioniert (Click scrollt runter)
- [ ] Parallax-Effekt auf Background
- [ ] Animationen laufen beim Page Load

**Visual Tests (Desktop):**
- [ ] Background-Bild füllt gesamten Viewport
- [ ] Logo ist groß und zentriert
- [ ] Scroll Indicator bounced smooth
- [ ] Dark Overlay (20% opacity) lesbar
- [ ] Keine Layout-Shifts

**Visual Tests (Mobile):**
- [ ] Logo skaliert korrekt (max-w-90vw)
- [ ] Scroll Indicator sichtbar
- [ ] Background-Bild richtig cropped
- [ ] Text lesbar

**Animation Tests:**
- [ ] Background Zoom (1.1 → 1) smooth
- [ ] Logo Fade + Scale smooth
- [ ] Scroll Indicator Bounce läuft endlos
- [ ] Kein Jank, 60fps
- [ ] Reduced Motion: Animationen deaktiviert

**Performance Tests:**
- [ ] LCP < 2.5s (Largest Contentful Paint)
- [ ] Hero-Bild optimiert (WebP)
- [ ] Keine Console Errors

---

## Definition of Done

- [ ] Hero Section Component implementiert
- [ ] Rubens-Bild als Background
- [ ] Logo zentriert und animiert
- [ ] Scroll Indicator mit Bounce
- [ ] Parallax funktioniert
- [ ] Responsive auf allen Breakpoints
- [ ] Load-Animationen laufen smooth
- [ ] Integration in page.tsx
- [ ] Ready for Design Review

---

## Acceptance Criteria (für Design Review)

**Design Review ERFORDERLICH** ✅

**Review Focus:**
1. **Layout:**
   - Hero ist exakt 100vh
   - Logo perfekt zentriert (horizontal + vertikal)
   - Scroll Indicator korrekt positioniert (bottom-12)

2. **Imagery:**
   - Rubens-Bild zeigt korrekt
   - Keine Verzerrungen
   - Dark Overlay Opacity korrekt (20%)

3. **Animations:**
   - Background Zoom smooth (1.1 → 1, 2s)
   - Logo Fade + Scale timing (0.3s delay, 1.2s duration)
   - Scroll Bounce smooth und endlos
   - Kein Jank

4. **Typography:**
   - "scroll" Text: Space Mono, 14px, uppercase, creme
   - Letter-spacing korrekt (0.1em)

5. **Responsive:**
   - Mobile: Logo kleiner, Texte skaliert
   - Tablet: Medium-Sizing
   - Desktop: Full-Size

**Screenshots needed:**
- Desktop: Initial Load (before animation)
- Desktop: After Animation (1.5s)
- Desktop: Scroll Indicator Bounce (mid-animation)
- Mobile: Portrait
- Tablet: Landscape

**Pass Criteria:**
- Logo animation smooth und elegant
- Background parallax funktioniert
- Scroll Indicator lädt user ein zum Scrollen
- Gesamteindruck: Dramatisch, künstlerisch, hochwertig

---

## Dependencies

**Blocked By:**
- TASK-003 (Assets - Rubens Bild, Logo) ✅
- TASK-005 (GSAP - Animationen) ✅

**Blocks:**
- TASK-008 (Philosophy Section - braucht Hero als Referenz)

---

## Notes

- **LCP Optimization:** Hero-Bild ist Largest Contentful Paint → Muss `priority` haben
- **Dark Overlay:** Optional, kann entfernt werden falls Bild dunkel genug
- **Parallax:** Subtil (speed: 0.5), nicht zu stark
- **Logo Größe:** 600px Desktop, responsive kleiner
- **Next Section:** Erstelle #philosophy Anchor für Scroll Target

---

## Technical Decisions

**Background Image Handling:**
- Next.js Image Component für Auto-Optimization
- `fill` + `object-cover` für Responsive
- `priority` für LCP

**Animation Library:**
- GSAP für Load Animations
- CSS für Scroll Bounce (optional)
- Timeline für Sequencing

**Scroll Behavior:**
- Smooth Scroll Native API
- Fallback: GSAP ScrollTo Plugin

---

## Rollback Plan

**If implementation fails after 3 iterations:**
1. Vereinfache Animationen (nur Fade, kein Scale/Zoom)
2. Statisches Background-Bild ohne Parallax
3. Logo ohne Load-Animation
4. Scroll Indicator ohne Bounce
5. Eskaliere zu User für Design-Feedback

---

**Plan Created:** 2026-01-30
**Status:** Ready for Frontend Builder
**Critical:** First visual section - Sets tone for entire site
**Design Review:** MANDATORY after implementation
