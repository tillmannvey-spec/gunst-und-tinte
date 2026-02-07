# Gunst & Tinte - "Das Fest der Schrift" Redesign

**Design Document**
Date: 2026-02-07
Designer: Claude + User Collaboration
Status: Ready for Implementation

---

## Executive Summary

A complete redesign of the Gunst & Tinte website as an opulent, playful one-page experience. The design embraces theatrical baroque aesthetics with modern web animations, creating a "Wow"-effect that celebrates calligraphy as a living art form.

**Design Philosophy:** Opulent & Playful with Baroque Influences
**Animation Style:** Playful & Surprising - Elements come alive on scroll
**User Experience:** Cinematic scroll-based storytelling with micro-interactions

---

## Design System

### Brand Colors (Existing - Preserved)
```css
--color-creme: #F7EDC2      /* Background, light sections */
--color-limette: #E0E793    /* Accents, highlights */
--color-orange: #EB5729     /* Primary CTA, important elements */
--color-burgund: #4F1B37    /* Dark sections, overlays */
--color-dunkelgruen: #203D36 /* Text, dark accents */
```

### Typography
- **Primary Font:** Casta (Variable Font)
  - Display/Headlines: Bold (700), SemiBold (600)
  - Body Text: Regular (400), Light (300)
  - Special: Use variable font for weight morphing animations
- **Secondary Font:** Space Mono
  - Used for: Section numbers, captions, metadata
  - Weights: Regular (400), Bold (700)

### Spacing System
```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
--spacing-3xl: 64px
--spacing-4xl: 80px
```

### Container System
- Max Width: 1440px
- Padding Desktop: 80px
- Padding Tablet: 40px
- Padding Mobile: 20px

---

## Technical Stack

### Core Technologies
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:**
  - GSAP 3 + ScrollTrigger (primary scroll animations)
  - Framer Motion (micro-interactions, component animations)
  - React Spring (physics-based animations for playful elements)

### Animation Strategy
- **GSAP ScrollTrigger:** Section reveals, parallax effects, scroll-based timeline
- **Framer Motion:** Hover effects, click interactions, component transitions
- **React Spring:** Bouncy animations for sun, rays, floating elements
- **CSS Transitions:** Simple state changes, color transitions

### Performance Considerations
- Lazy load images with Next.js Image component
- Use intersection observer for triggering animations only when in viewport
- Optimize GSAP animations with will-change CSS property
- WebP format for all images
- Variable fonts to reduce font file requests

---

## Section Structure: "Das Fest der Schrift"

### 1. OUVERTÜRE (Hero Section)

**Purpose:** Dramatic opening that sets the theatrical, opulent tone

**Visual Concept:**
- Full viewport height (100vh)
- Background: Rubens painting (rubens.webp) with dark burgundy overlay (40% opacity)
- Centered content with glassmorphism card effect
- Floating decorative elements (sun, rays)

**Layout Components:**
```
├── Fixed Navigation (top)
│   ├── Logo (left) - logo-short.svg
│   ├── Menu Links (right)
│   └── Mobile Burger Menu
│
├── Hero Content (center)
│   ├── Decorative Sun (top-right, animated)
│   ├── Main Logo - logo-start.svg
│   ├── Headline: "Gunst & Tinte"
│   ├── Subheadline: "Kalligrafie als Kunstform"
│   └── Scroll Indicator (bottom)
│
└── Animated Rays (background layer)
```

**Animations:**

1. **Page Load Sequence** (GSAP Timeline)
   - Sun fades in + scales (0.8 → 1.0, 1s ease-out)
   - Logo scales up (0.8 → 1.0, 1.5s ease-out, delay 0.3s)
   - Headline characters stagger in (each letter 0.05s delay)
   - Scroll indicator bounces in (delay 1.5s)

2. **Continuous Animations** (React Spring)
   - Sun rotates 360° every 60 seconds
   - Rays pulse subtly (scale 0.98 → 1.02, 3s loop)
   - Rays react to scroll velocity (faster scroll = faster pulse)

3. **Hover Interactions** (Framer Motion)
   - Logo: Font weight morphs 400 → 700 on hover
   - Scroll indicator: Bounce animation intensifies

4. **Scroll-Based** (GSAP ScrollTrigger)
   - Parallax: Background image moves slower than content (0.5x speed)
   - Sun moves to follow scroll (subtle y-axis translation)
   - Content fades out as user scrolls (opacity 1 → 0)

**Navigation Design:**
- Transparent background with backdrop-blur (glassmorphism)
- Background becomes solid creme when scrolled past hero
- Smooth color transition (0.3s ease)
- Mobile: Hamburger menu with full-screen overlay (burgundy background)

**Technical Notes:**
- Use next/image for rubens.webp with priority loading
- Implement scroll velocity tracking for ray animation
- Use GSAP matchMedia for responsive breakpoints

---

### 2. DAS HANDWERK (About + Philosophy Combined)

**Purpose:** Introduce Theresa and her artistic philosophy in one unified section

**Visual Concept:**
- Split-screen layout (desktop) / stacked (mobile)
- Left: Large portrait of Theresa (theresa-portrait.png)
- Right: Philosophy text with decorative elements
- Background: Alternating creme and limette gradient panels

**Layout Components:**
```
├── Section Header
│   ├── Section Number "01" (Space Mono)
│   └── Section Title "DAS HANDWERK"
│
├── Content Grid (2 columns desktop)
│   ├── Left Column
│   │   ├── Theresa Portrait (fixed position on scroll)
│   │   └── Decorative Ray Element
│   │
│   └── Right Column
│       ├── Introduction Text
│       ├── Philosophy Statements (3-4 key points)
│       │   └── Each with icon/decorative element
│       └── Signature Element (simulated calligraphy)
```

**Animations:**

1. **Scroll-In Reveal** (GSAP ScrollTrigger)
   - Section number slides in from left
   - Title reveals with mask animation (left to right)
   - Portrait scales in (0.9 → 1.0)
   - Text blocks stagger in from bottom (100px translate)

2. **Scroll Parallax**
   - Portrait has subtle parallax (moves slower than text)
   - Background gradient shifts as you scroll through section
   - Decorative ray rotates 45° through section scroll

3. **Interactive Elements** (Framer Motion)
   - Philosophy points highlight on hover (orange border appears)
   - Portrait: Slight zoom on hover (1.0 → 1.05)
   - Cursor changes to custom calligraphy brush on text area

4. **Signature Animation** (GSAP + Custom SVG)
   - Signature draws in as section comes into view
   - Uses SVG stroke-dasharray animation
   - Triggers when 50% of section is visible

**Typography Details:**
- Section Number: Space Mono Bold, 120px, orange
- Title: Casta Bold, 64px (desktop), 40px (mobile)
- Body Text: Casta Regular, 18px, line-height 1.8
- Philosophy Highlights: Casta SemiBold, 24px, orange

**Decorative Elements:**
- Use strahlen.svg as decorative accent (rotated, scaled)
- Custom calligraphy brush strokes as dividers
- Subtle texture overlay (paper texture at 5% opacity)

**Technical Notes:**
- Implement intersection observer for scroll trigger optimization
- Use CSS Grid with gap for responsive layout
- Portrait: object-fit cover with border-radius for soft edges

---

### 3. DIE WERKE (Portfolio Gallery)

**Purpose:** Showcase calligraphy work as an opulent, interactive gallery

**Visual Concept:**
- Masonry grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Images appear like emerging from darkness
- Hover reveals details overlay
- Background: Rich burgundy with subtle texture

**Layout Components:**
```
├── Section Header
│   ├── Section Number "02"
│   └── Section Title "DIE WERKE"
│   └── Filter Tabs (optional: "Alle", "Hochzeiten", "Events", "Logos")
│
├── Masonry Grid
│   └── Portfolio Items (12 images from public/images/portfolio/)
│       ├── Image Container
│       │   ├── Portfolio Image
│       │   └── Hover Overlay
│       │       ├── Project Title
│       │       ├── Category Tag
│       │       └── View Button
│       │
│       └── Decorative Frame (appears on hover)
```

**Animations:**

1. **Grid Reveal** (GSAP ScrollTrigger + Stagger)
   - Items fade in + scale (0.8 → 1.0)
   - Stagger: 0.1s delay between each item
   - Random rotation variation (-2° to +2°) for playful effect
   - Trigger: When 20% of section enters viewport

2. **Hover Interactions** (Framer Motion)
   - Image scales up (1.0 → 1.1)
   - Decorative golden frame appears from corners
   - Overlay slides up from bottom (0 → 100%)
   - Image saturation increases (100% → 120%)
   - Duration: 0.4s ease-out

3. **Scroll-Based Animation**
   - Images have subtle parallax (different speeds per row)
   - Background texture shifts as you scroll
   - Sun element (from hero) reappears floating in corner, rotating

4. **Click/Lightbox** (Framer Motion)
   - Clicked image expands to full screen
   - Background blurs (backdrop-filter)
   - Close button (X) appears top-right
   - Navigation arrows for next/prev image
   - Exit animation reverses expand

**Masonry Grid Implementation:**
- Use CSS Grid with `grid-auto-flow: dense`
- Responsive column count: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- Gap: 24px (desktop), 16px (mobile)

**Image Treatment:**
- All images from: `public/images/portfolio/portfolio_*.jpeg`
- Use next/image with blur placeholder
- Aspect ratio: preserve original, but min-height 300px
- Border radius: 8px for soft edges

**Technical Notes:**
- Implement virtual scrolling for performance with 12+ images
- Use Intersection Observer to lazy load images
- Lightbox: Use Framer Motion AnimatePresence for smooth transitions
- Consider using react-masonry-css library

---

### 4. DAS ATELIER (Workshop/Studio Section)

**Purpose:** Show the magical place where ink becomes art

**Visual Concept:**
- Full-width immersive section
- Split into 3 sub-sections that reveal on scroll
- Background: Forest.jpg with parallax effect
- Foreground: Glassmorphism cards with content

**Layout Components:**
```
├── Section Header
│   ├── Section Number "03"
│   └── Section Title "DAS ATELIER"
│
├── Atelier Story (3 Cards)
│   ├── Card 1: "Der Raum" (The Space)
│   │   ├── Description text
│   │   └── Background icon (workspace illustration)
│   │
│   ├── Card 2: "Die Werkzeuge" (The Tools)
│   │   ├── Description text
│   │   └── Background icon (pen/ink illustration)
│   │
│   └── Card 3: "Der Prozess" (The Process)
│       ├── Description text
│       └── Background icon (creation illustration)
│
└── Full-width Background Image (forest.jpg, parallax)
```

**Animations:**

1. **Parallax Background** (GSAP ScrollTrigger)
   - Forest.jpg moves at 0.3x scroll speed
   - Slight zoom-in effect as you scroll through section (1.0 → 1.1)
   - Overlay darkness increases at edges (vignette effect)

2. **Card Reveals** (GSAP ScrollTrigger Batch)
   - Cards slide in from alternating sides:
     - Card 1: from left (-100px)
     - Card 2: from right (100px)
     - Card 3: from left (-100px)
   - Each card triggers independently when 30% visible
   - Opacity 0 → 1 during slide
   - Stagger: 0.2s between cards

3. **Card Interactions** (Framer Motion)
   - Hover: Card lifts up (translateY -10px)
   - Hover: Shadow intensifies
   - Hover: Background blur increases
   - Background icon rotates subtly on hover (5°)

4. **Floating Elements** (React Spring)
   - Small decorative elements (mini suns, sparkles) float across section
   - Physics-based movement, bounce on edges
   - Appear/disappear randomly

**Glassmorphism Card Styling:**
```css
background: rgba(247, 237, 194, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 16px;
padding: 40px;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
```

**Typography:**
- Card Title: Casta Bold, 32px
- Body Text: Casta Regular, 16px, line-height 1.8
- Background Icons: Large, 200px, 5% opacity

**Technical Notes:**
- Use GSAP ScrollTrigger scrub for smooth parallax
- Cards: CSS Grid, gap 32px, max 3 columns
- Mobile: Stack cards vertically
- Ensure text contrast with background (add text shadow if needed)

---

### 5. DEINE ZEREMONIE (Contact Section)

**Purpose:** Invite visitors to collaborate, framed as a ceremonial invitation

**Visual Concept:**
- Centered content on rich background (red.jpg or green.jpg)
- Ornate border frame around contact form
- Decorative elements make it feel like an invitation card
- Background: Subtle animated rays/shimmer

**Layout Components:**
```
├── Section Header
│   ├── Section Number "04"
│   ├── Section Title "DEINE ZEREMONIE"
│   └── Subheadline "Lass uns gemeinsam Kunst erschaffen"
│
├── Invitation Card (centered, max-width 600px)
│   ├── Decorative Border (animated)
│   ├── Contact Form
│   │   ├── Name Input
│   │   ├── Email Input
│   │   ├── Message Textarea
│   │   └── Submit Button (styled as wax seal)
│   │
│   └── Alternative Contact Methods
│       ├── Email Link (mail-orange.svg icon)
│       ├── Phone Link (tel-orange.svg icon)
│       ├── Instagram (instagram-orange.svg)
│       └── TikTok (tiktok-orange.svg)
│
└── Background Image (red.jpg or green.jpg, parallax)
```

**Animations:**

1. **Border Animation** (GSAP + CSS)
   - Ornate border draws in on scroll reveal
   - Use SVG stroke-dasharray animation
   - Golden shimmer travels along border (continuous)
   - Inspired by baroque picture frames

2. **Form Reveal** (GSAP ScrollTrigger)
   - Card scales in (0.9 → 1.0)
   - Form fields stagger in from bottom
   - Submit button pulses gently (attention grabber)

3. **Form Interactions** (Framer Motion)
   - Input focus: Border glows orange, slight scale (1.0 → 1.02)
   - Label floats up when input has value
   - Submit button hover: Wax seal cracks/melts effect
   - Success: Confetti animation (react-confetti)

4. **Background** (GSAP ScrollTrigger)
   - Parallax: Background image at 0.5x speed
   - Rays rotate slowly in background (subtle)
   - Color overlay shifts between red and burgundy

**Form Styling:**
- Inputs: Creme background, burgundy text
- Borders: Orange on focus, burgundy default
- Submit Button: Circular "wax seal" design
  - Background: Orange
  - Icon: Stylized G&T monogram
  - Hover: Crack effect (CSS clip-path animation)

**Contact Icons:**
- Display below form in a row
- Icons: 40px size, orange color
- Hover: Scale 1.2, rotate 10°
- Link to actual social media / contact info

**Technical Notes:**
- Form validation with react-hook-form
- Success message: Framer Motion toast notification
- Accessibility: Proper labels, ARIA attributes
- Email integration: Consider Formspree or similar service

---

### 6. FOOTER

**Purpose:** Clean closure with legal info and final branding

**Visual Concept:**
- Full-width, minimal design
- Background: Dunkelgrün (dark green)
- Logo and copyright info
- Simple, elegant

**Layout Components:**
```
├── Footer Content (centered, max-width 1440px)
│   ├── Logo (logo-kontakt.svg) - centered or left
│   ├── Footer Navigation Links
│   │   ├── Impressum
│   │   ├── Datenschutz
│   │   └── AGB (if applicable)
│   │
│   ├── Social Media Icons (repeat from contact)
│   │   ├── Instagram (instagram-offwhite.svg)
│   │   └── TikTok (tiktok-offwhite.svg)
│   │
│   └── Copyright Text
│       └── "© 2026 Gunst & Tinte. Alle Rechte vorbehalten."
```

**Animations:**
- Minimal, subtle only
- Logo: Slight glow on hover
- Links: Underline slides in on hover (left to right)
- Social icons: Scale 1.1 on hover

**Styling:**
- Background: var(--color-dunkelgruen)
- Text: Creme color for contrast
- Padding: 60px vertical, responsive horizontal
- Typography: Space Mono for all text (monospace aesthetic)

**Technical Notes:**
- Links: Next.js Link component for routing
- Responsive: Stack vertically on mobile
- ARIA landmark: role="contentinfo"

---

## Navigation System

### Desktop Navigation
**Position:** Fixed top, z-index 1000

**States:**
1. **Transparent (Hero Section)**
   - Background: rgba(79, 27, 55, 0.3) with backdrop-blur(10px)
   - Text: Creme (#F7EDC2)
   - Logo: White version

2. **Solid (Scrolled Past Hero)**
   - Background: var(--color-creme)
   - Text: Dunkelgrün
   - Logo: Standard color version
   - Transition: 0.3s ease all properties

**Links:**
- Das Handwerk
- Die Werke
- Das Atelier
- Kontakt

**Interactions:**
- Smooth scroll to sections (GSAP ScrollTo plugin)
- Active link highlighted with orange underline
- Hover: Orange color

### Mobile Navigation
**Trigger:** Hamburger icon (< 768px)

**Menu Design:**
- Full-screen overlay
- Background: Burgundy with 95% opacity
- Links: Large Casta Bold, centered
- Animated entrance: Slide from right + fade
- Close button: X in top-right corner

**Animation:**
- Menu items stagger in (top to bottom)
- Background: Backdrop blur effect
- Exit animation reverses entrance

**Technical Implementation:**
- Use Framer Motion AnimatePresence
- Lock body scroll when menu open
- Close on link click + ESC key

---

## Responsive Design Strategy

### Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Mobile landscape, small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1440px /* Max container width */
```

### Section Adaptations

**OUVERTÜRE:**
- Mobile: Reduce logo size, stack text vertically
- Hide decorative sun on mobile (performance)
- Simplify animations (respect prefers-reduced-motion)

**DAS HANDWERK:**
- Mobile: Stack portrait above text (not side-by-side)
- Portrait: 100% width, reduced height
- Remove parallax on mobile

**DIE WERKE:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column (full width images)

**DAS ATELIER:**
- Desktop: 3 cards horizontal
- Tablet: 2 cards, wrap third to new row
- Mobile: Stack all cards vertically

**DEINE ZEREMONIE:**
- All breakpoints: Keep form centered
- Mobile: Reduce padding, smaller text

### Typography Scale
```css
/* Responsive font sizes (fluid typography) */
h1: clamp(40px, 8vw, 80px)
h2: clamp(32px, 6vw, 64px)
h3: clamp(24px, 4vw, 48px)
body: clamp(16px, 2vw, 18px)
```

### Performance on Mobile
- Lazy load all images
- Disable complex animations on mobile (check performance)
- Reduce GSAP ScrollTrigger frequency on slower devices
- Use CSS transforms for animations (GPU accelerated)

---

## Animation Performance Guidelines

### Optimization Rules
1. **Use CSS Transforms:** translateX/Y, scale, rotate (not top/left/width/height)
2. **Will-Change Property:** Apply to animated elements
   ```css
   will-change: transform, opacity;
   ```
3. **RequestAnimationFrame:** For custom animations
4. **GSAP Performance:**
   - Use `force3D: true` for hardware acceleration
   - Batch DOM reads/writes
   - Kill animations when off-screen

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- Disable GSAP ScrollTrigger scrub animations
- Use instant state changes instead of transitions
- Keep essential UI animations only

### Loading Strategy
1. **Critical CSS:** Inline above-the-fold styles
2. **Font Loading:** Use font-display: swap
3. **Images:** Progressive JPEG/WebP with blur placeholders
4. **JavaScript:** Code-split by section
5. **GSAP:** Import only needed plugins (ScrollTrigger, ScrollTo)

---

## Asset Optimization Checklist

### Images
- [ ] Convert all JPEGs to WebP format
- [ ] Optimize hero image (rubens.webp) - max 1920px width
- [ ] Create responsive variants (mobile, tablet, desktop)
- [ ] Generate blur placeholders for lazy loading
- [ ] Portfolio images: max 800px width (masonry grid)
- [ ] Compress all images (target: < 200KB per image)

### SVGs
- [ ] Minify all SVG files (remove unnecessary attributes)
- [ ] Inline critical SVGs (logo, icons)
- [ ] Ensure SVGs are responsive (viewBox attribute)
- [ ] Add ARIA labels for accessibility

### Fonts
- [ ] Use variable font (Casta-Full-Variable-Font-FV.ttf) to reduce requests
- [ ] Subset fonts (only include needed characters)
- [ ] Preload critical fonts in <head>
- [ ] Font-display: swap for faster perceived load

---

## Accessibility Considerations

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- ARIA landmarks: <nav>, <main>, <footer>
- ARIA labels for decorative elements
- Skip to content link for keyboard users

### Keyboard Navigation
- All interactive elements focusable via Tab
- Focus indicators visible (orange outline)
- Modal/Menu: Trap focus, close with ESC
- Smooth scroll respects reduced motion

### Screen Readers
- Alt text for all images (descriptive)
- ARIA live regions for dynamic content (form submission)
- Skip decorative animations (aria-hidden="true")
- Form labels properly associated with inputs

### Color Contrast
- Text on creme background: WCAG AA compliant
- Links: Orange (#EB5729) passes contrast check
- Form inputs: Clear visual states (focus, error)

### Testing Tools
- Lighthouse (Accessibility score > 90)
- axe DevTools
- NVDA/JAWS screen readers
- Keyboard-only navigation test

---

## Implementation Roadmap

### Phase 1: Foundation Setup (Day 1-2)
- [ ] Set up Next.js 15 project with App Router
- [ ] Install dependencies (GSAP, Framer Motion, Tailwind)
- [ ] Configure Tailwind with custom theme (colors, fonts)
- [ ] Set up design tokens in CSS variables
- [ ] Create component folder structure
- [ ] Optimize and convert all assets

### Phase 2: Core Components (Day 3-5)
- [ ] Navigation component (desktop + mobile)
- [ ] Section wrapper component (reusable)
- [ ] GSAP utility hooks (useGSAP, useScrollTrigger)
- [ ] Image component wrapper (with lazy loading)
- [ ] Button components (primary, secondary)
- [ ] Form components (Input, Textarea, Select)

### Phase 3: Section Implementation (Day 6-12)
- [ ] OUVERTÜRE (Hero) - Day 6-7
- [ ] DAS HANDWERK (About + Philosophy) - Day 8
- [ ] DIE WERKE (Portfolio) - Day 9-10
- [ ] DAS ATELIER (Workshop) - Day 11
- [ ] DEINE ZEREMONIE (Contact) - Day 12
- [ ] FOOTER - Day 12

### Phase 4: Animations & Polish (Day 13-15)
- [ ] Implement all GSAP ScrollTrigger animations
- [ ] Add Framer Motion hover interactions
- [ ] React Spring physics animations
- [ ] Test animation performance on devices
- [ ] Optimize animation triggers

### Phase 5: Responsive & Testing (Day 16-18)
- [ ] Responsive design for all breakpoints
- [ ] Mobile menu functionality
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Accessibility audit
- [ ] Performance optimization (Lighthouse)

### Phase 6: Deployment (Day 19-20)
- [ ] Setup Vercel deployment
- [ ] Configure custom domain
- [ ] Add analytics
- [ ] Final QA testing
- [ ] Launch! 🎉

---

## Success Metrics

### User Experience
- [ ] Scroll depth: > 80% of users reach contact section
- [ ] Time on site: Average > 2 minutes
- [ ] Bounce rate: < 40%
- [ ] Contact form submissions: Track conversion rate

### Technical Performance
- [ ] Lighthouse Performance Score: > 90
- [ ] Lighthouse Accessibility Score: > 95
- [ ] First Contentful Paint: < 1.5s
- [ ] Time to Interactive: < 3.5s
- [ ] Cumulative Layout Shift: < 0.1

### Design Quality
- [ ] "Wow" factor achieved (user feedback)
- [ ] Brand consistency maintained
- [ ] All animations smooth (60fps)
- [ ] No janky scroll experiences
- [ ] Responsive design flawless across devices

---

## Files to Delete from Old Project

The following files are not needed for the new design and can be deleted:

```
/.orchestrator/                    # Old project management files
/Gunst---Tinte-Website/           # Old website folder
/public/images/hero/rubens.jpg    # Replaced by .webp version
/*.png, /*.mjs, /*.log            # Debug/test files
/tailwind.config.ts               # Will be regenerated
/.agents/                         # Old agent files
/src/app/gsap-test/              # Test page, not needed
```

**Keep:**
- All files in /public/ (except mentioned above)
- All component files in /src/app/
- Corporate Design folder (reference only)
- package.json, next.config.js, tsconfig.json

---

## Additional Notes for Implementation with /superdesign

### Component Architecture
Each section should be a self-contained component with:
- Clear props interface (TypeScript)
- Isolated animations (GSAP context)
- Responsive styles (Tailwind utility classes)
- Accessibility attributes

### Animation Best Practices
- Use GSAP Context for component-scoped animations
- ScrollTrigger should clean up on unmount
- Test animations with React Strict Mode
- Provide fallbacks for reduced motion

### Design Tokens
All colors, spacing, fonts should reference CSS variables for consistency and easy theming in the future.

### Code Quality
- Use TypeScript for type safety
- ESLint + Prettier for code formatting
- Component comments for complex logic
- Meaningful variable names

---

## Questions for Implementation

Before starting implementation, confirm:
1. **Form Backend:** What service for contact form? (Formspree, custom API, email only?)
2. **Analytics:** Which service? (Google Analytics, Plausible, none?)
3. **Legal Pages:** Content for Impressum, Datenschutz ready?
4. **Social Media Links:** Actual URLs for Instagram, TikTok?
5. **Domain:** What is the final domain name for deployment?

---

## Conclusion

This design document provides a complete blueprint for the "Das Fest der Schrift" redesign. The website will be a stunning, opulent, playful experience that celebrates calligraphy as a living art form. Every scroll, every hover, every click will delight the user while maintaining brand consistency and accessibility.

**Next Steps:**
1. Review and approve this design document
2. Answer implementation questions above
3. Begin Phase 1: Foundation Setup
4. Use /superdesign skill to implement each section iteratively

---

**Design Document Version:** 1.0
**Last Updated:** 2026-02-07
**Status:** ✅ Ready for Implementation
