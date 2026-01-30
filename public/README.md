# Public Assets Structure

This directory contains all static assets for the Gunst & Tinte website.

## Directory Organization

```
public/
├── logos/               # Brand logos in various formats
│   ├── logo-start.svg
│   ├── logo-short.svg
│   ├── logo-short-long.svg
│   ├── logo-short-long.png
│   ├── logo-short-long-2.svg
│   └── logo-kontakt.svg
│
├── images/
│   ├── hero/           # Hero section images
│   │   └── rubens.jpg
│   │
│   ├── backgrounds/    # Background images for sections
│   │   ├── forest.jpg
│   │   ├── green.jpg
│   │   ├── offwhite.jpg
│   │   └── red.jpg
│   │
│   └── theresa/        # Theresa's portrait images
│       └── theresa-portrait.png
│
├── graphics/           # Decorative graphics and illustrations
│   ├── sonne.svg
│   └── strahlen.svg
│
└── icons/
    ├── social/         # Social media icons
    │   ├── instagram-offwhite.svg
    │   ├── instagram-orange.svg
    │   ├── tiktok-offwhite.svg
    │   └── tiktok-orange.svg
    │
    └── ui/             # UI/Contact icons
        ├── mail-orange.svg
        └── tel-orange.svg
```

## Naming Convention

All assets follow kebab-case naming convention for consistency:
- `logo-start.svg` instead of `Logo_Start.svg`
- `theresa-portrait.png` instead of `Bild_Theresa.png`
- `instagram-offwhite.svg` instead of `Icon_Instagram_offwhite.svg`

## Usage in Code

Import asset paths from `src/lib/assets.ts`:

```typescript
import { LOGO_START, BG_FOREST, THERESA_PORTRAIT } from '@/lib/assets';
// or use grouped exports
import { logos, backgrounds, socialIcons } from '@/lib/assets';
```

## Asset Access

All assets in this directory are publicly accessible via URL:
- Development: `http://localhost:3001/[path]`
- Production: `https://gunst-tinte.de/[path]`

Example: `/logos/logo-start.svg`

## Total Assets

- 6 Logos
- 6 Images (1 hero, 4 backgrounds, 1 portrait)
- 2 Graphics
- 6 Icons (4 social, 2 UI)

**Total: 20 asset files** (plus fonts and default Next.js files)
