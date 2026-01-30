# GSAP Setup Documentation

## Overview

Complete GSAP 3.14+ setup with ScrollTrigger plugin, fully configured for Next.js 16 with SSR support and accessibility features.

## File Structure

```
src/
├── lib/
│   ├── gsap.ts              # Core GSAP config & plugin registration
│   └── gsap-utils.ts        # Reusable animation utilities
├── app/
│   ├── hooks/
│   │   └── useReducedMotion.ts  # Accessibility hook
│   ├── components/
│   │   ├── ScrollTriggerRefresh.tsx  # Next.js route fix
│   │   └── animations/
│   │       ├── TextReveal.tsx        # Word-by-word text reveal
│   │       ├── ParallaxImage.tsx     # Image parallax effect
│   │       ├── SunAnimation.tsx      # Continuous rotation
│   │       └── index.ts              # Export barrel
│   └── gsap-test/
│       └── page.tsx         # Comprehensive test page
```

## Core Configuration

### GSAP Defaults (`src/lib/gsap.ts`)

- **Default Easing**: `power3.out`
- **Default Duration**: `1s`
- **ScrollTrigger Defaults**:
  - Start: `top 80%`
  - Toggle Actions: `play none none reverse`
  - Normalize Scroll: Enabled
  - Sync Interval: `150ms`

### Easings Export

```typescript
easings = {
  entrance: 'power3.out',
  exit: 'power3.in',
  transition: 'power2.inOut',
  bounce: 'back.out(1.7)',
  elastic: 'elastic.out(1, 0.5)',
  smooth: 'power1.inOut',
}
```

### Durations Export

```typescript
durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  verySlow: 1.5,
}
```

## Utility Functions

### 1. fadeInOnScroll

Fade in element with optional slide direction.

```typescript
fadeInOnScroll(element, {
  direction: 'up' | 'down' | 'left' | 'right' | 'none',
  distance: 50,
  duration: 0.6,
  delay: 0,
  start: 'top 80%',
  end: undefined,
  scrub: false,
  markers: false,
});
```

### 2. staggerReveal

Stagger animation for multiple elements.

```typescript
staggerReveal(elements, {
  direction: 'up' | 'down' | 'left' | 'right' | 'none',
  distance: 30,
  stagger: 0.1,
  duration: 0.6,
  start: 'top 80%',
  markers: false,
});
```

### 3. parallax

Smooth parallax scroll effect.

```typescript
parallax(element, {
  speed: 0.5,
  direction: 'vertical' | 'horizontal',
  start: 'top bottom',
  end: 'bottom top',
  markers: false,
});
```

### 4. pinSection

Pin element during scroll.

```typescript
pinSection(element, {
  start: 'top top',
  end: '+=100%',
  pinSpacing: true,
  anticipatePin: 1,
  markers: false,
});
```

### 5. scaleOnScroll

Scale animation on scroll.

```typescript
scaleOnScroll(element, {
  from: 0.8,
  to: 1,
  start: 'top bottom',
  end: 'top center',
  scrub: true,
  markers: false,
});
```

### 6. rotateOnScroll

Rotation on scroll.

```typescript
rotateOnScroll(element, {
  from: 0,
  to: 360,
  start: 'top bottom',
  end: 'bottom top',
  scrub: true,
  markers: false,
});
```

### 7. textReveal

Word-by-word text reveal.

```typescript
textReveal(words, {
  stagger: 0.05,
  duration: 0.6,
  direction: 'up' | 'down',
  distance: 20,
  start: 'top 80%',
  markers: false,
});
```

### 8. continuousRotation

Continuous rotation (no scroll dependency).

```typescript
continuousRotation(element, {
  duration: 20,
  direction: 'clockwise' | 'counterclockwise',
});
```

### 9. Cleanup Functions

```typescript
refreshScrollTriggers(); // Refresh all ScrollTriggers
killAllScrollTriggers(); // Kill all ScrollTriggers
```

## React Components

### TextReveal

Word-by-word reveal animation with ScrollTrigger.

```tsx
<TextReveal
  as="h1"
  className="text-5xl"
  stagger={0.05}
  duration={0.6}
  direction="up"
  distance={20}
>
  This text reveals word by word
</TextReveal>
```

### ParallaxImage

Image with smooth parallax scroll effect.

```tsx
<ParallaxImage
  src="/images/portrait.jpg"
  alt="Portrait"
  width={800}
  height={600}
  containerClassName="h-[600px]"
  className="h-[120%]"
  speed={0.3}
  direction="vertical"
/>
```

### SunAnimation

Continuously rotating sun graphic.

```tsx
<SunAnimation
  size={100}
  color="var(--color-navy)"
  duration={20}
  direction="clockwise"
/>
```

### ScrollTriggerRefresh

Automatically refreshes ScrollTrigger on route changes. Add to root layout:

```tsx
// src/app/layout.tsx
import ScrollTriggerRefresh from './components/ScrollTriggerRefresh';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ScrollTriggerRefresh />
        {children}
      </body>
    </html>
  );
}
```

## Accessibility

### useReducedMotion Hook

Respects user's motion preferences.

```tsx
const prefersReducedMotion = useReducedMotion();

if (!shouldAnimate(prefersReducedMotion)) {
  // Skip animations
  return;
}
```

All components automatically respect `prefers-reduced-motion` setting. When enabled:
- Animations have near-zero duration (0.01s)
- Elements appear instantly
- Continuous animations are disabled

## SSR Safety

All GSAP code is wrapped in:
- `typeof window !== 'undefined'` checks
- `useEffect` hooks in components
- Client-side only execution

## Testing

Visit `/gsap-test` to see all animations in action:
- Fade In on Scroll
- Stagger Reveal
- Text Reveal
- Parallax Image
- Scale on Scroll
- Rotate on Scroll
- Continuous Sun Animation
- Reduced Motion indicator

## Performance

All animations target 60fps through:
- Hardware-accelerated properties (transform, opacity)
- RequestAnimationFrame-based rendering
- ScrollTrigger optimization
- Limit callbacks enabled
- Sync interval optimization

## Usage Examples

### Basic Fade In

```tsx
'use client';
import { useEffect, useRef } from 'react';
import { fadeInOnScroll } from '@/lib/gsap-utils';

export default function MyComponent() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const animation = fadeInOnScroll(ref.current);
    return () => animation.kill();
  }, []);

  return <div ref={ref}>Content</div>;
}
```

### Stagger Cards

```tsx
'use client';
import { useEffect, useRef } from 'react';
import { staggerReveal } from '@/lib/gsap-utils';

export default function CardGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.card');
    const animation = staggerReveal(cards, { stagger: 0.1 });
    return () => animation.kill();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
    </div>
  );
}
```

## Debugging

Enable ScrollTrigger markers in development:

```typescript
// src/lib/gsap.ts
ScrollTrigger.defaults({
  markers: process.env.NODE_ENV === 'development' ? true : false,
});
```

Or per-animation:

```typescript
fadeInOnScroll(element, {
  markers: true,
});
```

## Best Practices

1. **Always cleanup**: Kill animations in useEffect return
2. **Check refs**: Ensure refs exist before animating
3. **Respect reduced motion**: Use `useReducedMotion` hook
4. **SSR-safe**: Wrap GSAP in `useEffect` or check `typeof window`
5. **Performance**: Use transform/opacity, avoid layout properties
6. **Route changes**: ScrollTriggerRefresh handles this automatically

## Next Steps

Use these components and utilities to build:
- Hero section animations
- Portfolio grid reveals
- Image galleries with parallax
- Smooth scroll experiences
- Interactive section transitions

All animations are production-ready and optimized for the Gunst & Tinte website aesthetic.
