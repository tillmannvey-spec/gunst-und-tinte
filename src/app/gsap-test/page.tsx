/**
 * GSAP Test Page
 * Comprehensive demonstration of all GSAP components and utilities
 */

'use client';

import { useEffect, useRef } from 'react';
import TextReveal from '@/app/components/animations/TextReveal';
import ParallaxImage from '@/app/components/animations/ParallaxImage';
import SunAnimation from '@/app/components/animations/SunAnimation';
import { useReducedMotion, shouldAnimate } from '@/app/hooks/useReducedMotion';
import {
  fadeInOnScroll,
  staggerReveal,
  scaleOnScroll,
  rotateOnScroll,
  pinSection,
} from '@/lib/gsap-utils';

export default function GSAPTestPage() {
  const fadeRef = useRef<HTMLDivElement>(null);
  const staggerRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const rotateRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!shouldAnimate(prefersReducedMotion)) {
      return;
    }

    // Fade in animation
    if (fadeRef.current) {
      fadeInOnScroll(fadeRef.current, {
        direction: 'up',
        distance: 100,
        duration: 1,
      });
    }

    // Stagger reveal
    if (staggerRef.current) {
      const items = staggerRef.current.querySelectorAll('.stagger-item');
      staggerReveal(items, {
        direction: 'up',
        distance: 50,
        stagger: 0.15,
      });
    }

    // Scale on scroll
    if (scaleRef.current) {
      scaleOnScroll(scaleRef.current, {
        from: 0.5,
        to: 1,
      });
    }

    // Rotate on scroll
    if (rotateRef.current) {
      rotateOnScroll(rotateRef.current, {
        from: -90,
        to: 0,
      });
    }

    // Pin section (commented out for test page to avoid UI issues)
    // if (pinRef.current) {
    //   pinSection(pinRef.current, {
    //     start: 'top top',
    //     end: '+=100%',
    //   });
    // }
  }, [prefersReducedMotion]);

  return (
    <div className="min-h-screen bg-[var(--color-sand)] text-[var(--color-navy)]">
      {/* Header */}
      <header className="py-20 px-8 text-center border-b border-[var(--color-navy)]">
        <div className="flex justify-center mb-8">
          <SunAnimation size={100} color="var(--color-navy)" duration={15} />
        </div>
        <TextReveal
          as="h1"
          className="text-5xl md:text-7xl font-bold mb-4"
          stagger={0.08}
          duration={0.8}
        >
          GSAP Test Suite
        </TextReveal>
        <TextReveal
          as="p"
          className="text-xl md:text-2xl max-w-2xl mx-auto"
          stagger={0.03}
          direction="up"
          distance={30}
        >
          Comprehensive testing of all GSAP animations and ScrollTrigger components
        </TextReveal>

        {/* Reduced Motion Indicator */}
        <div className="mt-8 p-4 bg-white/50 rounded-lg inline-block">
          <p className="text-sm font-medium">
            Reduced Motion: <span className={prefersReducedMotion ? 'text-red-600' : 'text-green-600'}>
              {prefersReducedMotion ? 'ENABLED' : 'DISABLED'}
            </span>
          </p>
          <p className="text-xs mt-2 text-gray-600">
            Change in System Preferences to test accessibility
          </p>
        </div>
      </header>

      {/* Spacer for scroll */}
      <div className="h-32" />

      {/* Test Section 1: Fade In on Scroll */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">1. Fade In on Scroll</h2>
          <div
            ref={fadeRef}
            className="p-12 bg-[var(--color-navy)] text-[var(--color-sand)] rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4">This box fades in from below</h3>
            <p>Direction: up, Distance: 100px, Duration: 1s</p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32" />

      {/* Test Section 2: Stagger Reveal */}
      <section className="py-20 px-8 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">2. Stagger Reveal</h2>
          <div ref={staggerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="stagger-item p-8 bg-[var(--color-navy)] text-[var(--color-sand)] rounded-lg text-center"
              >
                <div className="text-4xl font-bold mb-2">{item}</div>
                <p className="text-sm">Stagger Item</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32" />

      {/* Test Section 3: Text Reveal */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">3. Text Reveal</h2>
          <TextReveal
            as="p"
            className="text-2xl leading-relaxed text-center"
            stagger={0.05}
            duration={0.6}
          >
            This text reveals word by word as you scroll down creating a beautiful reading experience
          </TextReveal>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32" />

      {/* Test Section 4: Parallax Image */}
      <section className="py-20 px-8 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">4. Parallax Image</h2>
          <ParallaxImage
            src="/images/placeholder-portrait.jpg"
            alt="Parallax test image"
            width={800}
            height={600}
            containerClassName="h-[600px] rounded-lg"
            className="h-[120%]"
            speed={0.3}
          />
          <p className="text-center mt-4 text-sm text-gray-600">
            Image moves slower than scroll (speed: 0.3)
          </p>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32" />

      {/* Test Section 5: Scale on Scroll */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">5. Scale on Scroll</h2>
          <div
            ref={scaleRef}
            className="p-12 bg-[var(--color-navy)] text-[var(--color-sand)] rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4">This box scales from 0.5 to 1.0</h3>
            <p>Combined with opacity fade</p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32" />

      {/* Test Section 6: Rotate on Scroll */}
      <section className="py-20 px-8 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">6. Rotate on Scroll</h2>
          <div className="flex justify-center">
            <div
              ref={rotateRef}
              className="w-48 h-48 bg-[var(--color-navy)] rounded-lg flex items-center justify-center text-[var(--color-sand)] font-bold text-xl"
            >
              Rotates
            </div>
          </div>
          <p className="text-center mt-4 text-sm text-gray-600">
            Rotates from -90deg to 0deg
          </p>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32" />

      {/* Test Section 7: Continuous Sun Animation */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">7. Continuous Sun Animation</h2>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <SunAnimation size={150} color="var(--color-navy)" duration={10} direction="clockwise" />
              <p className="mt-4 text-sm">Clockwise (10s)</p>
            </div>
            <div className="text-center">
              <SunAnimation size={150} color="var(--color-navy)" duration={15} direction="counterclockwise" />
              <p className="mt-4 text-sm">Counter (15s)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32" />

      {/* Footer */}
      <footer className="py-12 px-8 text-center border-t border-[var(--color-navy)]">
        <p className="text-sm text-gray-600">
          All animations respect prefers-reduced-motion settings
        </p>
        <p className="text-xs text-gray-500 mt-2">
          GSAP {typeof window !== 'undefined' && (window as any).gsap?.version || '3.14+'} • ScrollTrigger
        </p>
      </footer>

      {/* Extra scroll space */}
      <div className="h-screen" />
    </div>
  );
}
