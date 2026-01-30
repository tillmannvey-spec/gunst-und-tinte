'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from '@/lib/gsap';
import { staggerReveal, parallax } from '@/lib/gsap-utils';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Parallax effect for image
      if (imageRef.current) {
        parallax(imageRef.current, {
          speed: 0.2,
          direction: 'vertical',
          start: 'top bottom',
          end: 'bottom top',
        });
      }

      // Image fade-in and scale animation
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          },
        });
      }

      // Stagger reveal for headline and text elements
      const elementsToAnimate: (HTMLElement | null)[] = [
        headlineRef.current,
        ...textRefs.current.filter(Boolean),
      ];

      if (elementsToAnimate.length > 0) {
        const validElements = elementsToAnimate.filter(
          (el): el is HTMLElement => el !== null
        );
        if (validElements.length > 0) {
          staggerReveal(validElements, {
            direction: 'up',
            distance: 30,
            stagger: 0.12,
            duration: 0.7,
            start: 'top 85%',
          });
        }
      }

      // CTA button animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const aboutText = [
    'Ich bin Theresa, Tätowiererin mit Herz und Stift. In meinem Studio in der schönen Stadt verwandle ich deine Ideen in einzigartige Kunstwerke auf Haut.',
    'Mein Fokus liegt auf feinen Linien, organischen Formen und individuellen Designs, die perfekt zu dir und deiner Geschichte passen. Jedes Tattoo ist eine Zusammenarbeit – ich höre zu, berate und erschaffe gemeinsam mit dir etwas wirklich Besonderes.',
    'Ob dein erstes Tattoo oder ein weiteres Meisterwerk – bei mir findest du einen sicheren Raum, in dem Kreativität und Professionalität Hand in Hand gehen.',
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: '#4F1B37' }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            ref={imageRef}
            className="relative w-full aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden"
            style={{ willChange: 'transform' }}
          >
            <Image
              src="/images/theresa/theresa-portrait.png"
              alt="Theresa von Gunst & Tinte"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 80vw, 50vw"
              priority
            />
            {/* Subtle gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to top, rgba(79, 27, 55, 0.3) 0%, transparent 40%)',
              }}
            />
          </div>

          {/* Content Column */}
          <div ref={contentRef} className="flex flex-col justify-center">
            {/* Headline */}
            <h2
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-8 md:mb-10 leading-[1.1]"
              style={{
                color: '#E0E793',
                fontFamily: 'var(--font-casta), "Casta", serif',
                opacity: prefersReducedMotion ? 1 : 0,
              }}
            >
              hey, ich bin theresa
            </h2>

            {/* Text paragraphs */}
            <div className="space-y-5 md:space-y-6 mb-10 md:mb-12">
              {aboutText.map((paragraph, index) => (
                <p
                  key={index}
                  ref={(el) => {
                    textRefs.current[index] = el;
                  }}
                  className="text-base sm:text-lg leading-relaxed"
                  style={{
                    color: '#F7EDC2',
                    fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                    opacity: prefersReducedMotion ? 1 : 0,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              ref={ctaRef}
              href="/about"
              className="group inline-flex items-center gap-3 text-base sm:text-lg font-medium transition-all duration-300 hover:gap-5 self-start"
              style={{
                color: '#E0E793',
                fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                opacity: prefersReducedMotion ? 1 : 0,
              }}
            >
              <span className="relative">
                Lern mich kennen
                <span
                  className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: '#E0E793' }}
                />
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
