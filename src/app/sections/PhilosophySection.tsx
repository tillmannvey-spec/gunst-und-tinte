'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';
import { textReveal, continuousRotation } from '@/lib/gsap-utils';
import { useReducedMotion, shouldAnimate } from '@/app/hooks/useReducedMotion';

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // ✓ SIMPLIFIED: Just make everything visible immediately
      // Remove problematic ScrollTrigger animations

      // Continuous rotation for sun (60s per rotation)
      if (sunRef.current && shouldAnimate(prefersReducedMotion)) {
        continuousRotation(sunRef.current, {
          duration: 60,
          direction: 'clockwise',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Headline text - NO animation wrapping for now
  const headlineText = 'come as you are';

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-32"
      style={{ backgroundColor: '#F7EDC2' }}
    >
      {/* Decorative rotating sun */}
      <div
        ref={sunRef}
        className="absolute right-[-100px] md:right-[-50px] lg:right-[5%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] opacity-80 pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <Image
          src="/graphics/sonne.svg"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 w-full">
        <div className="max-w-3xl">
          {/* Headline - Simple, no animation */}
          <h2
            ref={headlineRef}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4"
            style={{
              color: '#203D36',
              fontFamily: 'var(--font-casta), "Casta", serif',
              fontWeight: 900,
              fontStretch: '75%',
              lineHeight: '0.95',
              letterSpacing: '-0.02em',
              whiteSpace: 'normal',
              wordBreak: 'normal',
            }}
          >
            {headlineText}
          </h2>

          {/* Orange Subheadline - TATTOOKUNST BY THERESA */}
          <p
            className="text-sm sm:text-base uppercase mb-8 md:mb-12"
            style={{
              color: '#EB5729',
              fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
              letterSpacing: '0.2em',
              whiteSpace: 'normal',
              wordBreak: 'normal',
            }}
          >
            TATTOOKUNST BY THERESA
          </p>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl font-medium"
            style={{
              color: '#203D36',
              fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
              lineHeight: '1.8',
              whiteSpace: 'normal',
              wordBreak: 'normal',
              wordWrap: 'normal',
            }}
          >
            Bei mir bist du genau richtig – mit allen Ideen, Wünschen und Vorstellungen, die du mitbringst.
          </p>
        </div>
      </div>
    </section>
  );
}
