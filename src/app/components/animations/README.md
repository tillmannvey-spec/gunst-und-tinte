# Animation Components

Reusable GSAP-powered animation components for the Gunst & Tinte website.

## Components

### TextReveal

Word-by-word text reveal animation with ScrollTrigger.

**Props:**
- `children`: string - Text to reveal
- `className?`: string - CSS classes
- `as?`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' - HTML element
- `stagger?`: number - Delay between words (default: 0.05)
- `duration?`: number - Animation duration (default: 0.6)
- `direction?`: 'up' | 'down' - Slide direction (default: 'up')
- `distance?`: number - Slide distance in px (default: 20)
- `start?`: string - ScrollTrigger start position (default: 'top 80%')
- `markers?`: boolean - Show ScrollTrigger markers (default: false)

**Example:**
```tsx
<TextReveal
  as="h1"
  className="text-5xl font-bold"
  stagger={0.08}
>
  Welcome to Gunst and Tinte
</TextReveal>
```

### ParallaxImage

Image component with smooth parallax scroll effect.

**Props:**
- `src`: string - Image source
- `alt`: string - Image alt text
- `width?`: number - Image width
- `height?`: number - Image height
- `className?`: string - Image wrapper CSS classes
- `containerClassName?`: string - Container CSS classes
- `speed?`: number - Parallax speed multiplier (default: 0.5)
- `direction?`: 'vertical' | 'horizontal' - Parallax direction (default: 'vertical')
- `priority?`: boolean - Next.js image priority (default: false)
- `fill?`: boolean - Use Next.js Image fill mode (default: false)
- `objectFit?`: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' - Object fit (default: 'cover')
- `start?`: string - ScrollTrigger start (default: 'top bottom')
- `end?`: string - ScrollTrigger end (default: 'bottom top')
- `markers?`: boolean - Show markers (default: false)

**Example:**
```tsx
<ParallaxImage
  src="/images/portrait.jpg"
  alt="Portrait"
  width={800}
  height={600}
  containerClassName="h-[600px] rounded-lg overflow-hidden"
  className="h-[120%]"
  speed={0.3}
/>
```

### SunAnimation

Continuously rotating sun graphic (perfect for logo/decorative elements).

**Props:**
- `duration?`: number - Rotation duration in seconds (default: 20)
- `direction?`: 'clockwise' | 'counterclockwise' - Rotation direction (default: 'clockwise')
- `className?`: string - SVG CSS classes
- `size?`: number - SVG size in pixels (default: 100)
- `color?`: string - Sun color (default: 'currentColor')

**Example:**
```tsx
<SunAnimation
  size={150}
  color="var(--color-navy)"
  duration={15}
  direction="clockwise"
/>
```

## Accessibility

All components automatically respect the `prefers-reduced-motion` setting:
- When enabled, animations have near-zero duration
- Elements appear instantly without motion
- Continuous animations (like SunAnimation) are paused

## SSR Safety

All components are client-side only (`'use client'` directive) and wrap GSAP code in `useEffect` hooks to ensure Next.js SSR compatibility.

## Performance

All animations are optimized for 60fps by:
- Using hardware-accelerated properties (transform, opacity)
- Leveraging GSAP's requestAnimationFrame engine
- Cleaning up animations on unmount
- Minimal re-renders

## Import

```tsx
// Individual imports
import TextReveal from '@/app/components/animations/TextReveal';
import ParallaxImage from '@/app/components/animations/ParallaxImage';
import SunAnimation from '@/app/components/animations/SunAnimation';

// Or barrel import
import { TextReveal, ParallaxImage, SunAnimation } from '@/app/components/animations';
```

## Testing

Visit `/gsap-test` to see all components in action with various configurations.
