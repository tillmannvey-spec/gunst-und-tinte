'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';
import { parallax } from '@/lib/gsap-utils';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Logo fade-in animation on load
      if (logoRef.current) {
        gsap.from(logoRef.current, {
          opacity: 0,
          y: 30,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.2,
        });
      }

      // Background parallax effect
      if (backgroundRef.current) {
        parallax(backgroundRef.current, {
          speed: 0.3,
          direction: 'vertical',
          start: 'top bottom',
          end: 'bottom top',
        });
      }

      // Scroll indicator bounce animation
      if (scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          y: 10,
          duration: 0.8,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const handleScrollClick = () => {
    const philosophySection = document.getElementById('philosophy');
    if (philosophySection) {
      philosophySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="h-screen relative overflow-hidden"
      style={{ backgroundColor: '#F7EDC2' }}
    >
      {/* Background Image with Parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ willChange: 'transform' }}
      >
        <Image
          src="/images/hero/rubens.jpg"
          alt="Künstlerischer Hintergrund - Rubens inspiriert"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle overlay for better logo contrast */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(247, 237, 194, 0.1) 0%, rgba(247, 237, 194, 0.3) 100%)',
          }}
        />
      </div>

      {/* Centered Logo */}
      <div
        ref={logoRef}
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="relative w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] xl:w-[600px] aspect-[3/2]">
          <Image
            src="/logos/logo-start.svg"
            alt="Gunst & Tinte - Letterpress Atelier"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, (max-width: 1024px) 440px, (max-width: 1280px) 520px, 600px"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={handleScrollClick}
        style={{ willChange: 'transform' }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleScrollClick();
          }
        }}
        aria-label="Zur nächsten Sektion scrollen"
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-xs sm:text-sm tracking-[0.15em] uppercase font-secondary"
            style={{ color: '#203D36' }}
          >
            Scroll
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: '#203D36' }}
            aria-hidden="true"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
