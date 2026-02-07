'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';
import { staggerReveal, parallax } from '@/lib/gsap-utils';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

interface FeatureHighlight {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureHighlight[] = [
  {
    icon: '✦',
    title: 'Höchste Hygienestandards',
    description: 'Sterile Arbeitsweise & zertifizierte Materialien',
  },
  {
    icon: '☼',
    title: 'Warme Atmosphäre',
    description: 'Entspannter Raum für deine Tattoo-Erfahrung',
  },
  {
    icon: '◈',
    title: 'Persönliche Beratung',
    description: 'Individuelle Betreuung von der Idee bis zur Nachsorge',
  },
];

export function AtelierSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const featuresRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Stagger reveal for headline, subtitle and text
      const textElements: (HTMLElement | null)[] = [
        headlineRef.current,
        subtitleRef.current,
        ...textRefs.current.filter(Boolean),
      ];

      if (textElements.length > 0) {
        const validElements = textElements.filter(
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

      // Parallax for first image (slower)
      if (image1Ref.current) {
        parallax(image1Ref.current, {
          speed: 0.15,
          direction: 'vertical',
          start: 'top bottom',
          end: 'bottom top',
        });
      }

      // Parallax for second image (faster, opposite direction)
      if (image2Ref.current) {
        gsap.fromTo(
          image2Ref.current,
          { y: 50 },
          {
            y: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: image2Ref.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      // Scale and fade in for images
      [image1Ref, image2Ref].forEach((ref, index) => {
        if (ref.current) {
          gsap.from(ref.current, {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
            },
          });
        }
      });

      // Stagger reveal for feature highlights with floating animation
      if (featureItemsRef.current.length > 0) {
        const validFeatures = featureItemsRef.current.filter(
          (item): item is HTMLDivElement => item !== null
        );
        if (validFeatures.length > 0) {
          staggerReveal(validFeatures, {
            direction: 'up',
            distance: 25,
            stagger: 0.15,
            duration: 0.6,
            start: 'top 85%',
          });

          // Subtle floating animation for each feature
          validFeatures.forEach((feature, index) => {
            gsap.to(feature, {
              y: -8,
              duration: 2 + index * 0.3,
              ease: 'power1.inOut',
              repeat: -1,
              yoyo: true,
              delay: index * 0.5,
            });
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const atelierTexts = [
    'Mein Atelier ist mehr als nur ein Arbeitsplatz – es ist ein Rückzugsort, in dem Kreativität fließen kann. Hier treffen professionelle Tattootechnik auf eine warme, einladende Atmosphäre.',
    'Im Herzen der Stadt habe ich einen Raum geschaffen, der Geborgenheit ausstrahlt. Sanftes Licht, entspannende Musik und liebevolle Details sorgen dafür, dass du dich vom ersten Moment an wohlfühlst.',
  ];

  return (
    <section
      ref={sectionRef}
      id="atelier"
      className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: '#203D36' }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content Column */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Headline */}
            <h2
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-[1.1]"
              style={{
                color: '#F7EDC2',
                fontFamily: 'var(--font-casta), "Casta", serif',
                // ✓ FIXED: Changed to #F7EDC2 for better contrast (WCAG compliant)
              }}
            >
              mein atelier
            </h2>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 leading-relaxed opacity-95"
              style={{
                color: '#F7EDC2',
                fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                // ✓ FIXED: Added opacity-95 for better readability
              }}
            >
              Ein Ort für Kreativität, Ruhe und Transformation
            </p>

            {/* Text paragraphs */}
            <div className="space-y-5 md:space-y-6 mb-12 md:mb-16">
              {atelierTexts.map((paragraph, index) => (
                <p
                  key={index}
                  ref={(el) => {
                    textRefs.current[index] = el;
                  }}
                  className="text-base sm:text-lg leading-relaxed opacity-95"
                  style={{
                    color: '#F7EDC2',
                    fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                    // ✓ FIXED: Added opacity-95 for better readability on dark background
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Feature Highlights */}
            <div
              ref={featuresRef}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    featureItemsRef.current[index] = el;
                  }}
                  className="text-center sm:text-left p-4 rounded-lg"
                  style={{
                    backgroundColor: 'rgba(224, 231, 147, 0.08)',
                    // ✓ FIXED: Always visible, GSAP handles animation
                  }}
                >
                  <span
                    className="block text-2xl mb-2"
                    style={{ color: '#E0E793' }}
                  >
                    {feature.icon}
                  </span>
                  <h3
                    className="text-sm sm:text-base font-normal mb-1"
                    style={{
                      color: '#E0E793',
                      fontFamily: 'var(--font-casta), "Casta", serif',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm"
                    style={{
                      color: '#F7EDC2',
                      fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                      opacity: 0.8,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Images Column - Parallax Gallery */}
          <div className="relative order-1 lg:order-2 h-[500px] sm:h-[600px] lg:h-[700px]">
            {/* First Image - Forest Background */}
            <div
              ref={image1Ref}
              className="absolute left-0 top-0 w-[65%] sm:w-[60%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
              style={{ willChange: 'transform' }}
            >
              <Image
                src="/images/backgrounds/forest.jpg"
                alt="Atelier Ambiente mit natürlicher Ausstrahlung"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 35vw"
              />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 60%, rgba(32, 61, 54, 0.4) 100%)',
                }}
              />
            </div>

            {/* Second Image - Green Background */}
            <div
              ref={image2Ref}
              className="absolute right-0 bottom-0 w-[55%] sm:w-[50%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              style={{ willChange: 'transform' }}
            >
              <Image
                src="/images/backgrounds/green.jpg"
                alt="Atelier Details in Grüntönen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, transparent 60%, rgba(32, 61, 54, 0.3) 100%)',
                }}
              />
            </div>

            {/* Decorative element */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full opacity-20 blur-2xl pointer-events-none"
              style={{ backgroundColor: '#E0E793' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
