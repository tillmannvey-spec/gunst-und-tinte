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
      // Text reveal animation for headline (word by word)
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        if (words.length > 0) {
          textReveal(words, {
            stagger: 0.08,
            duration: 0.6,
            direction: 'up',
            distance: 30,
            start: 'top 80%',
          });
        }
      }

      // Fade in animation for description
      if (descriptionRef.current) {
        gsap.from(descriptionRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 85%',
          },
        });
      }

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

  // Split headline into words for animation
  const headlineText = 'come as you are';
  const headlineWords = headlineText.split(' ').map((word, index) => (
    <span
      key={index}
      className="word inline-block"
      style={{ opacity: prefersReducedMotion ? 1 : 0 }}
    >
      {word}
      {index < headlineText.split(' ').length - 1 && '\u00A0'}
    </span>
  ));

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
          {/* Headline with text reveal */}
          <h2
            ref={headlineRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal mb-8 md:mb-12 leading-[0.95] tracking-tight"
            style={{
              color: '#203D36',
              fontFamily: 'var(--font-casta), "Casta", serif',
            }}
          >
            {headlineWords}
          </h2>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl leading-relaxed"
            style={{
              color: '#203D36',
              fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
              opacity: prefersReducedMotion ? 1 : 0,
            }}
          >
            Bei mir bist du genau richtig – mit allen Ideen, Wünschen und Vorstellungen, die du mitbringst.
          </p>
        </div>
      </div>
    </section>
  );
}
