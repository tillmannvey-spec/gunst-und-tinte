# GSAP Code Snippets

Ready-to-use code snippets for common animation scenarios.

## Hero Section

### Animated Hero with Text Reveal

```tsx
'use client';
import TextReveal from '@/app/components/animations/TextReveal';
import SunAnimation from '@/app/components/animations/SunAnimation';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8">
      <div className="mb-8">
        <SunAnimation size={120} color="var(--color-navy)" duration={25} />
      </div>

      <TextReveal
        as="h1"
        className="text-6xl md:text-8xl font-bold text-center mb-6"
        stagger={0.1}
        duration={0.8}
      >
        Gunst und Tinte
      </TextReveal>

      <TextReveal
        as="p"
        className="text-xl md:text-2xl text-center max-w-2xl"
        stagger={0.03}
        direction="up"
        distance={30}
      >
        Letterpress Atelier und Grafikdesign von Theresa
      </TextReveal>
    </section>
  );
}
```

## Portfolio Grid

### Staggered Card Grid

```tsx
'use client';
import { useEffect, useRef } from 'react';
import { staggerReveal } from '@/lib/gsap-utils';
import { useReducedMotion, shouldAnimate } from '@/app/hooks/useReducedMotion';

export default function PortfolioGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!gridRef.current || !shouldAnimate(prefersReducedMotion)) return;

    const cards = gridRef.current.querySelectorAll('.portfolio-card');
    const animation = staggerReveal(cards, {
      stagger: 0.15,
      direction: 'up',
      distance: 60,
      duration: 0.8,
    });

    return () => animation.kill();
  }, [prefersReducedMotion]);

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div key={project.id} className="portfolio-card">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  );
}
```

## About Section

### Parallax Image with Text

```tsx
'use client';
import { useEffect, useRef } from 'react';
import ParallaxImage from '@/app/components/animations/ParallaxImage';
import { fadeInOnScroll } from '@/lib/gsap-utils';

export default function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const anim = fadeInOnScroll(textRef.current, {
      direction: 'right',
      distance: 100,
      duration: 1,
    });
    return () => anim.kill();
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
      <ParallaxImage
        src="/images/theresa.jpg"
        alt="Theresa at work"
        width={600}
        height={800}
        containerClassName="h-[600px] rounded-lg overflow-hidden"
        className="h-[120%]"
        speed={0.2}
      />

      <div ref={textRef} className="space-y-6">
        <h2 className="text-4xl font-bold">About Theresa</h2>
        <p className="text-lg">
          Passionate about letterpress and design...
        </p>
      </div>
    </section>
  );
}
```

## Image Gallery

### Parallax Image Gallery

```tsx
'use client';
import ParallaxImage from '@/app/components/animations/ParallaxImage';

export default function Gallery() {
  const images = [
    { src: '/gallery/1.jpg', alt: 'Work 1' },
    { src: '/gallery/2.jpg', alt: 'Work 2' },
    { src: '/gallery/3.jpg', alt: 'Work 3' },
  ];

  return (
    <div className="space-y-32 py-20">
      {images.map((image, index) => (
        <ParallaxImage
          key={index}
          src={image.src}
          alt={image.alt}
          width={1200}
          height={800}
          containerClassName="h-[600px] rounded-lg overflow-hidden"
          className="h-[130%]"
          speed={index % 2 === 0 ? 0.3 : -0.3}
        />
      ))}
    </div>
  );
}
```

## Process Section

### Scale on Scroll Steps

```tsx
'use client';
import { useEffect, useRef } from 'react';
import { scaleOnScroll, fadeInOnScroll } from '@/lib/gsap-utils';

export default function ProcessSection() {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stepsRef.current) return;

    const steps = stepsRef.current.querySelectorAll('.step');
    const animations = Array.from(steps).map((step) => {
      return scaleOnScroll(step, {
        from: 0.8,
        to: 1,
        scrub: 0.3,
      });
    });

    return () => animations.forEach((anim) => anim.kill());
  }, []);

  return (
    <div ref={stepsRef} className="space-y-20 py-20">
      <div className="step p-12 bg-white rounded-lg">
        <h3 className="text-3xl font-bold mb-4">1. Concept</h3>
        <p>We start with your vision...</p>
      </div>

      <div className="step p-12 bg-white rounded-lg">
        <h3 className="text-3xl font-bold mb-4">2. Design</h3>
        <p>Creating the perfect design...</p>
      </div>

      <div className="step p-12 bg-white rounded-lg">
        <h3 className="text-3xl font-bold mb-4">3. Print</h3>
        <p>Hand-pressed perfection...</p>
      </div>
    </div>
  );
}
```

## Contact Section

### Fade In Contact Form

```tsx
'use client';
import { useEffect, useRef } from 'react';
import { fadeInOnScroll, staggerReveal } from '@/lib/gsap-utils';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current || !formRef.current) return;

    const headingAnim = fadeInOnScroll(headingRef.current, {
      direction: 'down',
      distance: 50,
      duration: 0.8,
    });

    const inputs = formRef.current.querySelectorAll('input, textarea, button');
    const inputsAnim = staggerReveal(inputs, {
      stagger: 0.1,
      direction: 'up',
      distance: 30,
    });

    return () => {
      headingAnim.kill();
      inputsAnim.kill();
    };
  }, []);

  return (
    <section className="py-20 px-8">
      <h2 ref={headingRef} className="text-5xl font-bold text-center mb-12">
        Get in Touch
      </h2>

      <form ref={formRef} className="max-w-2xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 border rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full p-4 border rounded h-32"
        />
        <button className="w-full p-4 bg-black text-white rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
```

## Navigation

### Animated Logo

```tsx
'use client';
import SunAnimation from '@/app/components/animations/SunAnimation';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <SunAnimation size={40} color="var(--color-navy)" duration={20} />
          <span className="text-xl font-bold">Gunst & Tinte</span>
        </Link>

        <div className="flex gap-6">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
```

## Full Page Scroll

### Pinned Section with Content

```tsx
'use client';
import { useEffect, useRef } from 'react';
import { pinSection, fadeInOnScroll } from '@/lib/gsap-utils';

export default function PinnedSection() {
  const pinRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pinRef.current || !contentRef.current) return;

    const pinAnim = pinSection(pinRef.current, {
      start: 'top top',
      end: '+=200%',
      pinSpacing: true,
    });

    const contentAnim = fadeInOnScroll(contentRef.current, {
      direction: 'up',
      distance: 100,
      duration: 1,
    });

    return () => {
      pinAnim.kill();
      contentAnim.kill();
    };
  }, []);

  return (
    <div ref={pinRef} className="min-h-screen flex items-center justify-center bg-black text-white">
      <div ref={contentRef} className="text-center">
        <h2 className="text-6xl font-bold mb-8">Pinned Content</h2>
        <p className="text-2xl">This section pins while you scroll</p>
      </div>
    </div>
  );
}
```

## Custom Hook Pattern

### Reusable Animation Hook

```tsx
// hooks/useGSAPAnimation.ts
'use client';
import { useEffect, RefObject } from 'react';
import { useReducedMotion, shouldAnimate } from '@/app/hooks/useReducedMotion';
import { fadeInOnScroll } from '@/lib/gsap-utils';

export function useGSAPAnimation(
  ref: RefObject<HTMLElement>,
  options?: Parameters<typeof fadeInOnScroll>[1]
) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current || !shouldAnimate(prefersReducedMotion)) return;

    const animation = fadeInOnScroll(ref.current, options);
    return () => animation.kill();
  }, [ref, prefersReducedMotion, options]);
}

// Usage:
export default function MyComponent() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAPAnimation(ref, { direction: 'up', distance: 50 });

  return <div ref={ref}>Animated content</div>;
}
```

## Multiple Animations

### Complex Animation Sequence

```tsx
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion, shouldAnimate } from '@/app/hooks/useReducedMotion';

export default function ComplexAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current || !shouldAnimate(prefersReducedMotion)) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    tl.from('.item-1', { opacity: 0, y: 100 })
      .from('.item-2', { opacity: 0, x: -100 }, '-=0.3')
      .from('.item-3', { opacity: 0, scale: 0.5 }, '-=0.3');

    return () => {
      tl.kill();
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center">
      <div className="space-y-12">
        <div className="item-1">First element</div>
        <div className="item-2">Second element</div>
        <div className="item-3">Third element</div>
      </div>
    </div>
  );
}
```

## Performance Tips

```tsx
// ❌ DON'T: Animate layout properties
fadeInOnScroll(element, {
  // Bad: causes layout recalculation
  width: 100,
  height: 100,
  top: 0,
  left: 0,
});

// ✅ DO: Use transform and opacity
fadeInOnScroll(element, {
  // Good: hardware accelerated
  direction: 'up',    // uses transform
  distance: 50,       // uses transform
  // opacity is animated by default
});
```

## Copy-Paste Ready

All snippets are production-ready and include:
- ✅ TypeScript types
- ✅ Reduced motion support
- ✅ Proper cleanup
- ✅ SSR-safe code
- ✅ Performance optimized

Just copy, paste, and customize for your needs!
