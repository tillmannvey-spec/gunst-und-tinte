# GSAP Animation Cheat Sheet

## Quick Reference

### Easings

```typescript
easings.entrance       // power3.out     - Smooth entrance
easings.exit           // power3.in      - Smooth exit
easings.transition     // power2.inOut   - Smooth transition
easings.bounce         // back.out(1.7)  - Bounce effect
easings.elastic        // elastic.out    - Elastic effect
easings.smooth         // power1.inOut   - Very smooth
```

### Durations

```typescript
durations.fast         // 0.3s
durations.normal       // 0.6s
durations.slow         // 1.0s
durations.verySlow     // 1.5s
```

### ScrollTrigger Positions

```
'top top'         // Element top hits viewport top
'top center'      // Element top hits viewport center
'top bottom'      // Element top hits viewport bottom
'center center'   // Element center hits viewport center
'bottom top'      // Element bottom hits viewport top
'top 80%'         // Element top hits 80% from top
'+=100%'          // Relative offset (100% of element height)
```

## Common Patterns

### 1. Fade In from Below (Default)

```typescript
fadeInOnScroll(element, {
  direction: 'up',     // Slides from below
  distance: 50,        // 50px movement
  duration: 0.6,       // 0.6s animation
});
```

### 2. Stagger Grid Items

```typescript
staggerReveal(items, {
  stagger: 0.1,        // 0.1s between items
  direction: 'up',
  distance: 30,
});
```

### 3. Slow Parallax

```typescript
parallax(image, {
  speed: 0.3,          // 30% of scroll speed
  direction: 'vertical',
});
```

### 4. Fast Parallax

```typescript
parallax(image, {
  speed: 0.8,          // 80% of scroll speed
  direction: 'vertical',
});
```

### 5. Scale Reveal

```typescript
scaleOnScroll(element, {
  from: 0.8,           // Start at 80% scale
  to: 1,               // End at 100% scale
  scrub: true,         // Tied to scroll position
});
```

### 6. Rotate on Scroll

```typescript
rotateOnScroll(element, {
  from: -90,           // Start at -90deg
  to: 0,               // End at 0deg
  scrub: true,
});
```

### 7. Pin Section

```typescript
pinSection(element, {
  start: 'top top',    // Pin when top hits top
  end: '+=100%',       // Unpin after 1 screen height
  pinSpacing: true,    // Add spacing
});
```

### 8. Continuous Spin

```typescript
continuousRotation(element, {
  duration: 20,        // 20 seconds per rotation
  direction: 'clockwise',
});
```

## Component Configurations

### TextReveal Variants

```tsx
// Heading - Fast, Big Movement
<TextReveal
  as="h1"
  stagger={0.08}
  duration={0.8}
  distance={30}
/>

// Paragraph - Slow, Subtle
<TextReveal
  as="p"
  stagger={0.03}
  duration={0.6}
  distance={15}
/>

// Quote - Down Direction
<TextReveal
  as="blockquote"
  stagger={0.05}
  direction="down"
  distance={20}
/>
```

### ParallaxImage Variants

```tsx
// Subtle Parallax
<ParallaxImage
  src="/image.jpg"
  alt="..."
  speed={0.2}
  containerClassName="h-[400px]"
  className="h-[110%]"
/>

// Strong Parallax
<ParallaxImage
  src="/image.jpg"
  alt="..."
  speed={0.5}
  containerClassName="h-[600px]"
  className="h-[130%]"
/>

// Horizontal Parallax
<ParallaxImage
  src="/image.jpg"
  alt="..."
  speed={0.3}
  direction="horizontal"
/>
```

### SunAnimation Variants

```tsx
// Logo - Slow
<SunAnimation
  size={80}
  duration={25}
  color="var(--color-navy)"
/>

// Decorative - Medium
<SunAnimation
  size={120}
  duration={15}
  color="currentColor"
/>

// Fast Spinner
<SunAnimation
  size={40}
  duration={5}
  direction="counterclockwise"
/>
```

## Animation Combinations

### Hero Section

```typescript
// Background parallax
parallax(background, { speed: 0.3 });

// Title reveal
fadeInOnScroll(title, {
  direction: 'up',
  distance: 100,
  duration: 1,
  delay: 0.2,
});

// Subtitle reveal
fadeInOnScroll(subtitle, {
  direction: 'up',
  distance: 50,
  duration: 0.8,
  delay: 0.4,
});
```

### Portfolio Grid

```typescript
// Cards stagger
staggerReveal(cards, {
  stagger: {
    each: 0.1,
    from: 'start',
  },
  direction: 'up',
  distance: 50,
});

// Individual image parallax
cards.forEach(card => {
  const img = card.querySelector('img');
  parallax(img, { speed: 0.2 });
});
```

### Section Transition

```typescript
// Scale in
scaleOnScroll(section, {
  from: 0.9,
  to: 1,
  scrub: 0.5,  // Smooth scrub
});

// Fade in
fadeInOnScroll(section, {
  direction: 'none',
  duration: 0.8,
});
```

## Performance Tips

### DO:
- Use `transform` and `opacity` only
- Set `will-change` on animated elements
- Use `scrub: true` for scroll-tied animations
- Kill animations on cleanup

### DON'T:
- Animate `width`, `height`, `top`, `left`
- Create too many ScrollTriggers (100+)
- Animate many elements at once
- Forget to cleanup

## Accessibility

All animations respect `prefers-reduced-motion`:

```tsx
const prefersReducedMotion = useReducedMotion();

if (!shouldAnimate(prefersReducedMotion)) {
  // Skip animation, show content immediately
  return;
}
```

## Debug Mode

Enable markers for development:

```typescript
fadeInOnScroll(element, {
  markers: true,  // Shows green start/end markers
});
```

Or globally:

```typescript
// src/lib/gsap.ts
ScrollTrigger.defaults({
  markers: true,
});
```

## Common Issues

### Animation doesn't trigger
- Check ScrollTrigger `start` position
- Enable `markers: true` to debug
- Ensure element is in viewport
- Check `z-index` and `overflow`

### Janky animation
- Use only `transform` and `opacity`
- Reduce number of animated elements
- Check browser performance tab
- Disable other heavy scripts

### SSR errors
- Wrap GSAP in `useEffect`
- Check `typeof window !== 'undefined'`
- Use `'use client'` directive

### Route change issues
- ScrollTriggerRefresh is in layout
- Call `refreshScrollTriggers()` manually if needed
- Check cleanup in `useEffect` return

## Next Steps

1. Visit `/gsap-test` to see all animations
2. Copy examples from this cheat sheet
3. Customize for Gunst & Tinte brand
4. Test with reduced motion enabled
5. Optimize for 60fps performance

Happy animating!
