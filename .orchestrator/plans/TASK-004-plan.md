# IMPLEMENTATION PLAN: TASK-004

**Task ID:** TASK-004
**Priority:** P1 (High - Core Component)
**Assignee:** Frontend Builder Agent
**Estimated Duration:** 60-90 minutes

---

## Task Title

**Navigation Component (Desktop + Mobile)**

---

## Specifications

**Reference:**
- `redesign_plan.md` → Lines 119-139 (Navigation Section)
- `design-plan.ts` → Lines 191-205 (Navigation Content)
- `design-plan.ts` → Lines 604-633 (Navigation Animations)

**Objective:**
Implementiere eine sticky Navigation mit morphing Scroll-Behavior (Desktop) und Full-Screen Mobile Menu mit smooth Animationen.

---

## Implementation Steps

### 1. Navigation Component erstellen
**Action:** Erstelle Haupt-Navigation-Komponente
**Files:** `src/app/components/Navigation.tsx` (neu)

**Features:**
- Sticky Positioning (bleibt beim Scrollen oben)
- Morphing on Scroll:
  - Initial: Transparent, Logo groß
  - After 100px scroll: Semi-transparent mit Blur, Logo klein
- Desktop: Horizontale Links rechts, Logo links
- Mobile: Hamburger Menu

**Component Structure:**
```tsx
'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_SHORT } from '@/lib/assets';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll Detection für morphing effect
  // Mobile Menu Toggle Logic
  // Links aus design-plan.ts

  return (
    <nav className={/* sticky + conditional styles */}>
      {/* Desktop Navigation */}
      {/* Mobile Navigation */}
      {/* Mobile Menu Overlay */}
    </nav>
  );
}
```

### 2. useScrollProgress Hook erstellen
**Action:** Custom Hook für Scroll-Tracking
**Files:** `src/app/hooks/useScrollProgress.ts` (neu)

**Purpose:**
- Trackt Scroll-Position
- Debounced für Performance
- Gibt isScrolled-State zurück

**Implementation:**
```typescript
'use client';

import { useState, useEffect } from 'react';

export function useScrollProgress(threshold = 100) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
```

### 3. Mobile Menu Component
**Action:** Full-Screen Overlay für Mobile
**Files:** `src/app/components/MobileMenu.tsx` (neu)

**Features:**
- Full-Screen Overlay (100vh)
- Stagger Animation beim Öffnen
- Background Wipe Transition
- Navigation Links zentriert
- Close Button (X)

**Animation Specs (GSAP):**
```javascript
// Open Animation
- Background: opacity 0 → 1 (0.3s)
- Menu Items: stagger reveal from right (0.1s each)
- Duration: 0.5s total

// Close Animation
- Reverse of open (0.3s)
```

### 4. Navigation Styles
**Action:** Tailwind Classes + Custom CSS für Morphing
**Files:** Navigation.tsx (inline) + globals.css (backdrop-blur)

**Desktop Styles (Initial):**
```css
- Position: fixed top-0 w-full z-50
- Background: transparent
- Padding: py-6 px-20
- Logo: scale-100
- Links: opacity-100
```

**Desktop Styles (Scrolled):**
```css
- Background: rgba(32, 61, 54, 0.95) with backdrop-blur-lg
- Padding: py-4 px-20
- Logo: scale-90
- Shadow: shadow-lg
- Transition: all 0.3s ease
```

**Mobile Styles:**
```css
- Hamburger Icon: top-right
- Logo: centered or left
- Background: always solid dunkelgruen
```

### 5. Navigation Links
**Action:** Implementiere Links aus design-plan.ts
**Data:** Lines 191-205

**Links:**
```typescript
const navLinks = [
  { label: 'portfolio', href: '#portfolio' },
  { label: 'atelier', href: '#atelier' },
  { label: 'über mich', href: '#about' },
  { label: 'anfahrt', href: '#contact' },
  { label: 'kontakt', href: '#contact' },
];
```

**Style:**
- Font: Space Mono (secondary)
- Size: 14px / text-label
- Letter-Spacing: 0.1em
- Transform: lowercase
- Hover: Underline animation + color change to limette

### 6. Smooth Scroll Integration
**Action:** Implementiere smooth scrolling zu Anchors
**Files:** Navigation.tsx

**Logic:**
```typescript
const handleNavClick = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close menu on mobile
  }
};
```

### 7. Layout Integration
**Action:** Füge Navigation zum Root Layout hinzu
**Files:** `src/app/layout.tsx`

**Modification:**
```tsx
import Navigation from './components/Navigation';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
```

---

## Validation Criteria

**Functional Tests:**
- [ ] Navigation ist sticky (bleibt beim Scrollen oben)
- [ ] Morphing funktioniert ab 100px Scroll
- [ ] Desktop: Horizontale Links sichtbar
- [ ] Mobile: Hamburger Menu öffnet/schließt
- [ ] Smooth Scroll zu Sektionen funktioniert
- [ ] Mobile Menu schließt nach Link-Klick

**Visual Tests (Desktop):**
- [ ] Logo wechselt von transparent → semi-transparent + blur
- [ ] Logo verkleinert sich smooth
- [ ] Links haben Hover-Underline Animation
- [ ] Backdrop-Blur funktioniert

**Visual Tests (Mobile):**
- [ ] Hamburger Icon visible (top-right)
- [ ] Menu öffnet als Fullscreen Overlay
- [ ] Hamburger morphs zu X
- [ ] Links stagger reveal animation
- [ ] Menu schließt smooth

**Performance Tests:**
- [ ] Scroll-Listener nutzt passive: true
- [ ] Keine Scroll-Jank
- [ ] Transitions sind smooth (60fps)

---

## Definition of Done

- [ ] Navigation Component implementiert
- [ ] Desktop & Mobile Variants funktionieren
- [ ] Scroll Morphing funktioniert
- [ ] Smooth Scrolling zu Anchors
- [ ] useScrollProgress Hook erstellt
- [ ] MobileMenu Component mit Animationen
- [ ] Integration in Layout
- [ ] Responsive auf allen Breakpoints

---

## Acceptance Criteria (für Design Review)

**Design Review ERFORDERLICH** ✅

**Review Focus:**
- Navigation Morphing (transparent → solid)
- Logo Scale Animation
- Mobile Menu Open/Close Animation
- Link Hover Effects
- Typography & Spacing
- z-index layering (über allen Sections)

**Screenshots needed:**
- Desktop: Initial State (transparent)
- Desktop: Scrolled State (solid + blur)
- Mobile: Closed State
- Mobile: Open Menu
- Hover States (Links)

---

## Dependencies

**Blocked By:**
- TASK-001 (Tailwind Config) ✅
- TASK-002 (Fonts) ✅
- TASK-003 (Assets - Logo) ✅

**Blocks:**
- Alle Section-Tasks (Navigation muss vorhanden sein)

---

## Notes

- **GSAP:** Noch NICHT für Navigation (nur CSS Transitions)
- **GSAP Integration:** Kommt in TASK-005 (dann für Mobile Menu)
- **z-index:** 50 für Navigation (über Content, unter Modals)
- **Accessibility:** Keyboard-Navigation für Menu
- **Mobile Menu Close:** Click outside oder ESC-Key

---

## Technical Decisions

**Mobile Breakpoint:** 1024px (lg)
- < 1024px: Hamburger Menu
- >= 1024px: Horizontal Navigation

**Scroll Threshold:** 100px
- Morphing triggert ab 100px Y-Scroll

**Backdrop Blur:**
- Safari-Support prüfen (fallback: solid background)

---

## Rollback Plan

**If implementation fails after 3 iterations:**
1. Vereinfache zu Basic Sticky Nav ohne Morphing
2. Mobile Menu: Simple Slide-In statt Fullscreen
3. Skip Animationen, nur Functionality
4. Eskaliere zu User für Design-Feedback

---

**Plan Created:** 2026-01-30
**Status:** Ready for Frontend Builder
**Design Review:** Required after implementation
