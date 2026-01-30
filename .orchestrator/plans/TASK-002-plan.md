# IMPLEMENTATION PLAN: TASK-002

**Task ID:** TASK-002
**Priority:** P0 (Critical - Foundation)
**Assignee:** Frontend Builder Agent
**Estimated Duration:** 30-45 minutes

---

## Task Title

**Font Setup (Casta + Space Mono)**

---

## Specifications

**Reference:**
- `design-plan.ts` → Lines 87-122 (Typography System)
- `design-plan.ts` → Lines 540-553 (Font Paths)

**Objective:**
Integriere die Casta Variable Font und Space Mono Fonts ins Projekt für optimale Performance und Typography.

---

## Implementation Steps

### 1. Fonts nach public/fonts kopieren
**Action:** Kopiere Font-Dateien von Corporate Design ins Projekt
**Files:**
- Source: `../Corporate Design/Fonts/`
- Target: `public/fonts/`

**Details:**
```bash
# Casta Variable Font (optimal für Web)
public/fonts/casta/Casta-Full-Variable-Font-FV.ttf

# Space Mono
public/fonts/space-mono/SpaceMono-Regular.ttf
public/fonts/space-mono/SpaceMono-Bold.ttf
public/fonts/space-mono/SpaceMono-Italic.ttf
public/fonts/space-mono/SpaceMono-BoldItalic.ttf
```

**Warum Variable Font:**
- Eine Datei statt mehrere = bessere Performance
- Unterstützt alle Weights (100-900)
- Unterstützt Width-Axis (Condensed, Regular, Expanded)

### 2. Font-Face Deklarationen in globals.css
**Action:** Füge @font-face Deklarationen hinzu
**Files:** `src/app/globals.css`

**Details:**
```css
/* Casta Variable Font */
@font-face {
  font-family: 'Casta';
  src: url('/fonts/casta/Casta-Full-Variable-Font-FV.ttf') format('truetype-variations');
  font-weight: 100 900;
  font-stretch: 75% 125%;
  font-style: normal;
  font-display: swap;
}

/* Space Mono Regular */
@font-face {
  font-family: 'Space Mono';
  src: url('/fonts/space-mono/SpaceMono-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Space Mono Bold */
@font-face {
  font-family: 'Space Mono';
  src: url('/fonts/space-mono/SpaceMono-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Space Mono Italic */
@font-face {
  font-family: 'Space Mono';
  src: url('/fonts/space-mono/SpaceMono-Italic.ttf') format('truetype');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

/* Space Mono Bold Italic */
@font-face {
  font-family: 'Space Mono';
  src: url('/fonts/space-mono/SpaceMono-BoldItalic.ttf') format('truetype');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}
```

**Wichtig:**
- `font-display: swap` für bessere Performance (zeigt Fallback sofort)
- Variable Font Format: `truetype-variations`
- Font-Weight Range: 100-900 (alle Gewichte verfügbar)
- Font-Stretch: 75% (Condensed) bis 125% (Expanded)

### 3. Tailwind Config aktualisieren
**Action:** Update font-family in `tailwind.config.ts`
**Files:** `tailwind.config.ts`

**Details:**
```typescript
fontFamily: {
  primary: ['Casta', 'serif'],
  secondary: ['Space Mono', 'monospace'],
  // Aliases für Convenience
  casta: ['Casta', 'serif'],
  mono: ['Space Mono', 'monospace'],
}
```

### 4. Test-Component erstellen
**Action:** Erstelle temporäre Test-Page für Font-Validation
**Files:** `src/app/page.tsx` (modify existing)

**Details:**
Füge temporär eine Test-Sektion hinzu:
```tsx
<div className="p-8 space-y-8">
  {/* Casta Tests */}
  <div className="font-primary space-y-4">
    <h1 className="text-hero-desktop">Casta Hero (120px)</h1>
    <h2 className="text-section">Casta Section (64px)</h2>
    <h3 className="text-h3">Casta H3 (32px)</h3>
    <p className="text-body">Casta Body (18px) - Regular Weight</p>
    <p className="text-body font-medium">Casta Body Medium (500)</p>
    <p className="text-body font-bold">Casta Body Bold (700)</p>
  </div>

  {/* Space Mono Tests */}
  <div className="font-secondary space-y-4">
    <p className="text-label">Space Mono Label (14px)</p>
    <p className="text-body">Space Mono Body</p>
    <p className="text-body font-bold">Space Mono Bold</p>
    <p className="text-body italic">Space Mono Italic</p>
  </div>
</div>
```

### 5. Visual Verification
**Action:** Starte Dev Server und prüfe Fonts
**Tests:**
- [ ] Fonts laden (kein Fallback zu System-Font)
- [ ] Keine Console Errors
- [ ] Variable Font funktioniert (verschiedene Weights)
- [ ] Space Mono alle Varianten sichtbar

---

## Validation Criteria

**Functional Tests:**
- [ ] Font-Dateien existieren in `public/fonts/`
- [ ] @font-face Deklarationen in globals.css
- [ ] Tailwind font-families aktualisiert
- [ ] Dev Server startet ohne Errors
- [ ] Fonts laden im Browser (Network Tab)

**Visual Tests:**
- [ ] Casta wird korrekt angezeigt (nicht Fallback)
- [ ] Space Mono wird korrekt angezeigt
- [ ] Verschiedene Weights funktionieren (100-900)
- [ ] Italic-Varianten funktionieren

**Performance Tests:**
- [ ] Nur 5 Font-Dateien geladen (1x Casta Variable, 4x Space Mono)
- [ ] font-display: swap funktioniert (kein FOUT)

---

## Definition of Done

- [ ] Fonts in public/fonts/ kopiert
- [ ] @font-face Deklarationen hinzugefügt
- [ ] Tailwind Config aktualisiert
- [ ] Test-Component zeigt Fonts korrekt
- [ ] Dev Server läuft ohne Errors
- [ ] Ready für Asset-Integration (TASK-003)

---

## Acceptance Criteria (für Design Review)

**NICHT ERFORDERLICH** - Font-Setup ist technisch, kein Design Review nötig.

Design Review wird ÜBERSPRUNGEN für dieses Task.

Test-Component kann nach Verification gelöscht werden.

---

## Dependencies

**Blocked By:** TASK-001 (Tailwind Config muss existieren)
**Blocks:** Alle Section-Tasks (brauchen Fonts)

---

## Notes

- **Performance:** Variable Font reduziert HTTP Requests von ~9 auf 1
- **Font Loading:** Next.js optimiert Fonts automatisch
- **Subsetting:** Wird später in TASK-019 (Performance) optimiert
- **Fallbacks:** serif/monospace als System-Fallbacks

---

## Rollback Plan

**If implementation fails:**
1. Prüfe Font-File Paths (case-sensitive auf Linux)
2. Teste mit einzelnem Static Font (Casta-Regular.otf) falls Variable Font Probleme macht
3. Nutze Next.js Font Optimization (`next/font/local`) als Alternative
4. Eskaliere zu User bei Font-Loading Issues

---

**Plan Created:** 2026-01-30
**Status:** Ready for Frontend Builder
