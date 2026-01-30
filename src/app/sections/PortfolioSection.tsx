'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';
import { staggerReveal } from '@/lib/gsap-utils';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  category: string;
  alt: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    src: '/images/portfolio/portfolio_1760692552322_92FBA9CE-082F-431D-BA3B-4407B95D315B.jpeg',
    title: 'Fine Line Portrait',
    category: 'Fine Line',
    alt: 'Feines Linien-Tattoo Porträt',
  },
  {
    id: 2,
    src: '/images/portfolio/portfolio_1760692614567_IMG_6564_VSCO.jpeg',
    title: 'Geometric Pattern',
    category: 'Geometric',
    alt: 'Geometrisches Muster Tattoo',
  },
  {
    id: 3,
    src: '/images/portfolio/portfolio_1761928776900_IMG_0551.jpeg',
    title: 'Botanical Leaves',
    category: 'Botanical',
    alt: 'Botanisches Blätter Tattoo',
  },
  {
    id: 4,
    src: '/images/portfolio/portfolio_1761928803466_8E8E9061-FB9C-4655-9D84-CA9983F18036.jpeg',
    title: 'Minimal Symbol',
    category: 'Minimal',
    alt: 'Minimales Symbol Tattoo',
  },
  {
    id: 5,
    src: '/images/portfolio/portfolio_1761928865399_IMG_0396.jpeg',
    title: 'Watercolor Art',
    category: 'Watercolor',
    alt: 'Aquarell Stil Tattoo',
  },
  {
    id: 6,
    src: '/images/portfolio/portfolio_1761928949302_1D97BB9B-64F9-4FF4-B0D6-AF766F6F810B.jpeg',
    title: 'Typography Quote',
    category: 'Typography',
    alt: 'Typografie Zitat Tattoo',
  },
  {
    id: 7,
    src: '/images/portfolio/portfolio_1761987445382_IMG_0371.jpeg',
    title: 'Fine Line Nature',
    category: 'Fine Line',
    alt: 'Feines Linien Natur Tattoo',
  },
  {
    id: 8,
    src: '/images/portfolio/portfolio_1761987462632_B664AD65-ACE0-4017-BFCA-8AE0CC3646D7.jpeg',
    title: 'Geometric Mandala',
    category: 'Geometric',
    alt: 'Geometrisches Mandala Tattoo',
  },
  {
    id: 9,
    src: '/images/portfolio/portfolio_1761987488366_IMG_0049.jpeg',
    title: 'Botanical Flower',
    category: 'Botanical',
    alt: 'Botanisches Blumen Tattoo',
  },
  {
    id: 10,
    src: '/images/portfolio/portfolio_1761987507999_IMG_0344.jpeg',
    title: 'Minimal Lines',
    category: 'Minimal',
    alt: 'Minimale Linien Tattoo',
  },
  {
    id: 11,
    src: '/images/portfolio/portfolio_1761987529550_E3A53ECB-C9C2-4B62-81D8-D6FF7E48825C.jpeg',
    title: 'Watercolor Blend',
    category: 'Watercolor',
    alt: 'Aquarell Verlauf Tattoo',
  },
];

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate headline
      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
          },
        });
      }

      // Animate description
      if (descriptionRef.current) {
        gsap.from(descriptionRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 85%',
          },
        });
      }

      // Stagger reveal for grid items
      if (itemRefs.current.length > 0) {
        const validItems = itemRefs.current.filter((item): item is HTMLDivElement => item !== null);
        if (validItems.length > 0) {
          staggerReveal(validItems, {
            direction: 'up',
            distance: 40,
            stagger: 0.08,
            duration: 0.6,
            start: 'top 85%',
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="w-full py-16 sm:py-20 md:py-24 lg:py-32"
      style={{ backgroundColor: '#F7EDC2' }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-6 md:mb-8"
            style={{
              color: '#203D36',
              fontFamily: 'var(--font-casta), "Casta", serif',
            }}
          >
            portfolio
          </h2>
          <p
            ref={descriptionRef}
            className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{
              color: '#203D36',
              fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
            }}
          >
            Eine Auswahl meiner Arbeiten – jedes Tattoo ist so einzigartig wie der Mensch, der es trägt.
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          ref={gridRef}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
              style={{ marginBottom: '24px' }}
            >
              {/* Image Container */}
              <div className="relative w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6"
                  style={{
                    background: 'linear-gradient(to top, rgba(32, 61, 54, 0.9) 0%, rgba(32, 61, 54, 0.6) 50%, transparent 100%)',
                  }}
                >
                  <span
                    className="text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-2"
                    style={{
                      color: '#E0E793',
                      fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                    }}
                  >
                    {item.category}
                  </span>
                  <h3
                    className="text-lg sm:text-xl md:text-2xl font-normal"
                    style={{
                      color: '#F7EDC2',
                      fontFamily: 'var(--font-casta), "Casta", serif',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
