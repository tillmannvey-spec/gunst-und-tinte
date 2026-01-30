# Gunst & Tinte Website - Implementation Roadmap

**Project:** Modern Onepage Website for Tattoo Studio
**Tech Stack:** Next.js 14+ | TypeScript | Tailwind CSS v4 | GSAP
**Goal:** Animierte, responsive Website mit exzellenter UX

---

## 🎯 PROJECT OBJECTIVES

1. **Künstlerisch & Modern:** Hochwertige Animationen, die die Marke unterstützen
2. **Performance:** Lighthouse Score >90 in allen Kategorien
3. **Responsive:** Perfekte Darstellung auf allen Devices
4. **Accessibility:** WCAG AA Compliance

---

## 📅 IMPLEMENTATION TIMELINE

### PHASE 1: Foundation (Tasks 001-003)
**Duration:** Est. 1-2 hours
**Agent:** Frontend Builder

**Deliverables:**
- Tailwind v4 config mit Corporate Design Farben
- Font-Face Deklarationen (Casta + Space Mono)
- Asset-Struktur in public/ (images, icons, fonts)
- globals.css mit CSS-Variablen

**Dependencies:** None
**Risk:** Low

---

### PHASE 2: Core Components (Tasks 004-006)
**Duration:** Est. 2-3 hours
**Agent:** Frontend Builder

**Deliverables:**
- Navigation (Desktop: Horizontal, Mobile: Fullscreen Menu)
- GSAP lib/gsap.ts mit ScrollTrigger Setup
- Reusable Components:
  - `<TextReveal />` (word-by-word animation)
  - `<ParallaxImage />` (scroll-based parallax)
  - `<SunAnimation />` (rotating sun graphic)

**Dependencies:** Phase 1 complete
**Risk:** Medium (GSAP integration)

---

### PHASE 3: Sections (Tasks 007-013)
**Duration:** Est. 6-8 hours
**Agent:** Frontend Builder → Design Reviewer Loop

**Iteration Strategy:**
- Build → Review → Fix → Review → Complete
- Max 3 iterations per section before escalation

#### TASK-007: Hero Section
- Fullscreen (100vh)
- Rubens background image (parallax)
- Centered logo (Logo_Start.svg)
- Scroll indicator animation
- **Review Criteria:** Layout, Typography, Animation smoothness

#### TASK-008: Philosophy Section
- "come as you are" headline
- Rotating sun animation (Grafik_Sonne.svg)
- Text reveal animation
- Creme background (#F7EDC2)
- **Review Criteria:** Sun rotation, Text timing, Color accuracy

#### TASK-009: About Section
- Burgund background (#4F1B37)
- Theresa portrait with reveal animation
- Text blocks with slide-in
- Parallax image effect
- **Review Criteria:** Image reveal, Contrast, Typography

#### TASK-010: Portfolio Section
- Masonry grid (3 col desktop, 2 tablet, 1 mobile)
- Hover overlay with project titles
- Lazy loading
- Stagger reveal animation
- **Review Criteria:** Grid layout, Hover effects, Responsive

#### TASK-011: Atelier Section
- Dunkelgrün background (#203D36)
- Multiple parallax image layers
- Studio description text
- **Review Criteria:** Parallax smoothness, Readability

#### TASK-012: Contact Section
- Logo_Kontakt.svg centered
- Contact info with icons
- Social media links (Instagram, TikTok)
- Magnetic button effects
- **Review Criteria:** Icon animations, Link functionality

#### TASK-013: Footer Section
- Impressum content
- Navigation links
- Dark background
- Link hover animations
- **Review Criteria:** Legal content, Link hover

**Dependencies:** Phase 2 complete
**Risk:** Medium (Section interdependencies)

---

### PHASE 4: Animations & Interactions (Tasks 014-017)
**Duration:** Est. 3-4 hours
**Agent:** Frontend Builder

**Deliverables:**
- Hero load sequence (logo fade + background zoom)
- ScrollTrigger animations for all sections
- Hover effects on all interactive elements
- Mobile menu open/close animations
- prefers-reduced-motion support

**Dependencies:** Phase 3 complete
**Risk:** Low

---

### PHASE 5: Polish & Optimization (Tasks 018-020)
**Duration:** Est. 2-3 hours
**Agent:** Frontend Builder → Design Reviewer (Final Review)

**Deliverables:**
- Responsive fixes for all breakpoints
- Image optimization (WebP, lazy loading)
- Accessibility audit (ARIA labels, keyboard nav)
- SEO meta tags
- Production build test

**Dependencies:** Phase 4 complete
**Risk:** Low

---

## 🔄 WORKFLOW RULES

### Agent Coordination
1. **Frontend Builder** implements features
2. **Design Reviewer** validates implementation
3. **Orchestrator** manages iteration loop

### Iteration Limit
- **3 iterations max** per task
- On 3rd failure → Escalate to user

### Review Gates
- Every section requires Design Review PASS
- Final validation before project completion

---

## 📊 SUCCESS CRITERIA

### Technical
- [x] TypeScript strict mode (no errors)
- [ ] All sections implemented
- [ ] Smooth animations (60fps)
- [ ] No console errors
- [ ] Production build successful

### Design
- [ ] All Corporate Design colors used correctly
- [ ] Casta font loaded and applied
- [ ] Responsive on mobile, tablet, desktop
- [ ] Animations match specifications

### Performance
- [ ] Lighthouse Performance >90
- [ ] Lighthouse Accessibility >95
- [ ] LCP < 2.5s
- [ ] CLS < 0.1

---

## 🚨 ESCALATION TRIGGERS

**Escalate to User if:**
- Task fails after 3 iterations
- Missing assets (images, fonts)
- Ambiguous requirements in specs
- GSAP/Technical limitations
- Timeline slippage >50%

---

**Roadmap Created:** 2026-01-30
**Next Update:** After Phase 1 completion
