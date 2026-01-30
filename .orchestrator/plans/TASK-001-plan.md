# IMPLEMENTATION PLAN: TASK-001

**Task ID:** TASK-001
**Priority:** P0 (Critical - Foundation)
**Assignee:** Frontend Builder Agent
**Estimated Duration:** 30-45 minutes

---

## Task Title

**Tailwind Configuration & Design System Setup**

---

## Specifications

**Reference:**
- `redesign_plan.md` → Section "Design System"
- `design-plan.ts` → Lines 54-163 (colors, typography, layout)

**Objective:**
Konfiguriere Tailwind CSS v4 mit dem kompletten Corporate Design System von Gunst & Tinte.

---

## Implementation Steps

### 1. Tailwind Config erweitern
**Action:** Erweitere `tailwind.config.ts` mit Custom Theme
**Files:** `tailwind.config.ts` (create/modify)
**Agent:** Frontend Builder

**Details:**
```typescript
// Farben aus Corporate Design
colors: {
  creme: '#F7EDC2',
  limette: '#E0E793',
  orange: '#EB5729',
  burgund: '#4F1B37',
  dunkelgruen: '#203D36',
}

// Typography Scale
fontSize: {
  'hero': ['120px', { lineHeight: '1', letterSpacing: '-0.02em' }],
  'hero-mobile': ['48px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
  'section': ['64px', { lineHeight: '1.1' }],
  'section-mobile': ['36px', { lineHeight: '1.2' }],
  'h3': ['32px', { lineHeight: '1.3' }],
  'h3-mobile': ['24px', { lineHeight: '1.3' }],
  'body': ['18px', { lineHeight: '1.6' }],
  'body-mobile': ['16px', { lineHeight: '1.5' }],
  'label': ['14px', { lineHeight: '1.4', letterSpacing: '0.1em' }],
  'small': ['12px', { lineHeight: '1.4' }],
}

// Font Families (Platzhalter - Fonts werden in TASK-002 geladen)
fontFamily: {
  casta: ['Casta', 'serif'],
  mono: ['Space Mono', 'monospace'],
}

// Custom Animations
animation: {
  'spin-slow': 'spin 60s linear infinite',
  'bounce-slow': 'bounce 2s infinite',
}
```

### 2. globals.css mit CSS Variables
**Action:** Erweitere `src/app/globals.css`
**Files:** `src/app/globals.css`
**Agent:** Frontend Builder

**Details:**
```css
@layer base {
  :root {
    /* Corporate Colors */
    --color-creme: #F7EDC2;
    --color-limette: #E0E793;
    --color-orange: #EB5729;
    --color-burgund: #4F1B37;
    --color-dunkelgruen: #203D36;

    /* Spacing System */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-2xl: 48px;
    --spacing-3xl: 64px;
    --spacing-4xl: 80px;

    /* Layout */
    --container-max-width: 1440px;
    --container-padding-desktop: 80px;
    --container-padding-tablet: 40px;
    --container-padding-mobile: 20px;
  }

  /* Smooth Scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Reduced Motion Support */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

### 3. PostCSS Config prüfen
**Action:** Verifiziere dass Tailwind v4 korrekt konfiguriert ist
**Files:** `postcss.config.mjs`
**Agent:** Frontend Builder

**Expected:**
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

---

## Validation Criteria

**Functional Tests:**
- [ ] Tailwind config kompiliert ohne Errors
- [ ] Alle Custom Colors sind verfügbar (z.B. `bg-creme`, `text-dunkelgruen`)
- [ ] Typography Scale funktioniert (`text-hero`, `text-section`)
- [ ] CSS Variables sind in DevTools sichtbar
- [ ] Smooth Scrolling aktiviert
- [ ] Reduced Motion Support funktioniert

**Technical Tests:**
- [ ] `npm run dev` startet ohne Errors
- [ ] TypeScript Errors: 0
- [ ] Tailwind IntelliSense zeigt Custom Colors

---

## Definition of Done

- [ ] Tailwind config mit allen Corporate Design Werten
- [ ] globals.css mit CSS Variables & A11y Support
- [ ] Dev Server läuft stabil
- [ ] Keine Console Errors
- [ ] Ready für Font-Integration (TASK-002)

---

## Acceptance Criteria (für Design Review)

**NICHT ERFORDERLICH** - Kein visueller Output, nur Config.

Design Review wird ÜBERSPRUNGEN für dieses Task.

---

## Dependencies

**Blocked By:** None (Foundation Task)
**Blocks:** TASK-002 (Fonts), TASK-003 (Assets), alle weiteren Tasks

---

## Notes

- Tailwind v4 nutzt `@tailwindcss/postcss` statt v3 config
- Fonts werden in TASK-002 als Font-Face deklariert
- Assets (SVGs, Bilder) werden in TASK-003 organisiert

---

## Rollback Plan

**If implementation fails after 3 iterations:**
1. Prüfe Tailwind v4 Dokumentation
2. Falle zurück auf Tailwind v3 Config-Syntax falls nötig
3. Eskaliere zu User für manuelle Config-Prüfung

---

**Plan Created:** 2026-01-30
**Status:** Ready for Frontend Builder
