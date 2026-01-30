# IMPLEMENTATION PLAN: TASK-003

**Task ID:** TASK-003
**Priority:** P0 (Critical - Foundation)
**Assignee:** Frontend Builder Agent
**Estimated Duration:** 30 minutes

---

## Task Title

**Asset Organization & Optimization**

---

## Specifications

**Reference:**
- `design-plan.ts` → Lines 486-534 (Assets Overview)
- Available Assets: `../Website/Assets/`

**Objective:**
Organisiere alle Website-Assets (Logos, Bilder, Icons, Grafiken) in eine saubere Struktur und bereite sie für die Verwendung in den Components vor.

---

## Implementation Steps

### 1. Asset-Struktur in public/ erstellen
**Action:** Erstelle organisierte Verzeichnisstruktur
**Files:** `public/` Directory

**Struktur:**
```
public/
├── fonts/            # ✅ Bereits vorhanden (TASK-002)
├── images/
│   ├── hero/         # Hero-Bilder
│   ├── backgrounds/  # Background-Bilder
│   └── theresa/      # Portrait-Bilder
├── logos/            # Alle Logo-Varianten
├── icons/
│   ├── social/       # Social Media Icons
│   └── ui/           # UI Icons (Mail, Tel)
└── graphics/         # Dekorative Grafiken (Sonne, Strahlen)
```

### 2. Assets kopieren & umbenennen
**Action:** Kopiere Assets von `../Website/Assets/` nach `public/`
**Source:** `../Website/Assets/`

**Mapping:**

**Logos → `public/logos/`**
- `Logo_Start.svg` → `logo-start.svg`
- `Logo_Short.svg` → `logo-short.svg`
- `Logo_Short-long.svg` → `logo-long.svg`
- `Logo_Kontakt.svg` → `logo-contact.svg`

**Hero Images → `public/images/hero/`**
- `Bild_Start_Rubens.jpg` → `hero-rubens.jpg`

**Theresa Portrait → `public/images/theresa/`**
- `Bild_Theresa.png` → `theresa-portrait.png`

**Backgrounds → `public/images/backgrounds/`**
- `Bild_Background_Forest.jpg` → `bg-forest.jpg`
- `Bild_Background_green.jpg` → `bg-green.jpg`
- `Bild_Background_offwhite.jpg` → `bg-offwhite.jpg`
- `Bild_Background_red.jpg` → `bg-red.jpg`

**Graphics → `public/graphics/`**
- `Grafik_Sonne.svg` → `sun.svg`
- `Grafik_Strahlen.svg` → `rays.svg`

**Social Icons → `public/icons/social/`**
- `Icon_Instagram_offwhite.svg` → `instagram-light.svg`
- `Icon_Instagram_orange.svg` → `instagram-orange.svg`
- `Icon_TikTok_offwhite.svg` → `tiktok-light.svg`
- `Icon_TikTok_orange.svg` → `tiktok-orange.svg`

**UI Icons → `public/icons/ui/`**
- `Icon_Mail_orange.svg` → `mail.svg`
- `Icon_Tel_orange.svg` → `phone.svg`

**Naming Convention:**
- Lowercase mit Bindestrichen (kebab-case)
- Sprechende Namen
- Konsistente Suffixe (e.g., `-light` vs `-orange` für Varianten)

### 3. Asset-Konstanten Datei erstellen
**Action:** Erstelle zentrale Asset-Pfad-Verwaltung
**Files:** `src/lib/assets.ts` (neu erstellen)

**Content:**
```typescript
/**
 * Zentrale Asset-Verwaltung
 * Alle Pfade zu Bildern, Icons, Logos
 */

export const LOGOS = {
  start: '/logos/logo-start.svg',
  short: '/logos/logo-short.svg',
  long: '/logos/logo-long.svg',
  contact: '/logos/logo-contact.svg',
} as const;

export const IMAGES = {
  hero: {
    rubens: '/images/hero/hero-rubens.jpg',
  },
  theresa: {
    portrait: '/images/theresa/theresa-portrait.png',
  },
  backgrounds: {
    forest: '/images/backgrounds/bg-forest.jpg',
    green: '/images/backgrounds/bg-green.jpg',
    offwhite: '/images/backgrounds/bg-offwhite.jpg',
    red: '/images/backgrounds/bg-red.jpg',
  },
} as const;

export const GRAPHICS = {
  sun: '/graphics/sun.svg',
  rays: '/graphics/rays.svg',
} as const;

export const ICONS = {
  social: {
    instagram: {
      light: '/icons/social/instagram-light.svg',
      orange: '/icons/social/instagram-orange.svg',
    },
    tiktok: {
      light: '/icons/social/tiktok-light.svg',
      orange: '/icons/social/tiktok-orange.svg',
    },
  },
  ui: {
    mail: '/icons/ui/mail.svg',
    phone: '/icons/ui/phone.svg',
  },
} as const;

// Export für einfachen Import
export const assets = {
  logos: LOGOS,
  images: IMAGES,
  graphics: GRAPHICS,
  icons: ICONS,
} as const;
```

### 4. SVG-Optimierung (Optional, Quick Check)
**Action:** Prüfe SVGs auf Inline-Nutzung
**Tool:** Visual Studio Code / Text Editor

**Quick Check:**
- Öffne einige SVGs (Logo_Start.svg, Grafik_Sonne.svg)
- Prüfe auf unnötige Metadaten
- **Für TASK-003:** KEINE Optimierung, nur Kopieren
- **Later:** Optimierung in TASK-019 (Performance)

### 5. README für Assets erstellen
**Action:** Dokumentiere Asset-Struktur
**Files:** `public/README.md` (neu erstellen)

**Content:**
```markdown
# Public Assets

Alle statischen Assets für die Gunst & Tinte Website.

## Struktur

- `/fonts/` - Casta Variable Font + Space Mono
- `/images/` - Alle Bilder (Hero, Portrait, Backgrounds)
- `/logos/` - Logo-Varianten (Start, Short, Long, Contact)
- `/icons/` - Social Media + UI Icons
- `/graphics/` - Dekorative SVG-Grafiken (Sonne, Strahlen)

## Verwendung in Components

```tsx
import { assets } from '@/lib/assets';
import Image from 'next/image';

// Bild verwenden
<Image src={assets.images.hero.rubens} alt="Hero" />

// Logo verwenden
<img src={assets.logos.start} alt="Gunst & Tinte" />

// Icon verwenden
<img src={assets.icons.social.instagram.orange} alt="Instagram" />
```

## Naming Convention

- **kebab-case** (lowercase-mit-bindestrichen)
- **Sprechende Namen** (hero-rubens statt bild1.jpg)
- **Konsistente Suffixe** (-light, -orange für Varianten)

## Optimierung

- Bilder: Next.js Image Component (automatische Optimierung)
- SVGs: Inline oder als <img> je nach Use-Case
- Icons: Prüfe auf Lucide-Alternativen vor Custom-Icons
```

---

## Validation Criteria

**Functional Tests:**
- [ ] Alle Verzeichnisse in `public/` existieren
- [ ] Alle Assets korrekt kopiert (25 Dateien)
- [ ] Naming Convention konsistent (kebab-case)
- [ ] `src/lib/assets.ts` exportiert alle Pfade
- [ ] Assets erreichbar über `/logos/logo-start.svg` etc.

**File Count Check:**
- Logos: 4 SVGs
- Images Hero: 1 JPG
- Images Theresa: 1 PNG
- Images Backgrounds: 4 JPGs
- Graphics: 2 SVGs
- Icons Social: 4 SVGs
- Icons UI: 2 SVGs
- **Total:** 18 Asset-Dateien

---

## Definition of Done

- [ ] Asset-Struktur in public/ erstellt
- [ ] Alle Assets kopiert & korrekt benannt
- [ ] `src/lib/assets.ts` erstellt mit TypeScript-Konstanten
- [ ] `public/README.md` dokumentiert Struktur
- [ ] Assets im Browser erreichbar (z.B. http://localhost:3001/logos/logo-start.svg)

---

## Acceptance Criteria (für Design Review)

**NICHT ERFORDERLICH** - Asset-Organisation ist technisch.

Design Review wird ÜBERSPRUNGEN für dieses Task.

---

## Dependencies

**Blocked By:** None (kann parallel zu TASK-001/002 laufen)
**Blocks:** Alle Section-Tasks (brauchen Assets)

---

## Notes

- **Keine Bild-Optimierung jetzt:** Next.js optimiert automatisch
- **SVG Inline vs External:** Entscheidung in jeweiligem Component-Task
- **Portfolio-Bilder:** Werden später hinzugefügt (TASK-010)
- **Favicon:** Wird in TASK-020 (SEO) hinzugefügt

---

## Rollback Plan

**If implementation fails:**
1. Assets sind nur kopiert, kein Code-Dependency
2. Bei Naming-Fehlern: Batch-Rename mit Script
3. Bei fehlenden Assets: Prüfe Source-Verzeichnis
4. Keine kritischen Blocker

---

**Plan Created:** 2026-01-30
**Status:** Ready for Frontend Builder
