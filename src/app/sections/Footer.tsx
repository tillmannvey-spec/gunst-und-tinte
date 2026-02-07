'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backToTopRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Fade in footer content
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
          },
        });
      }

      // Back to top button animation
      if (backToTopRef.current) {
        gsap.from(backToTopRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          delay: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
          },
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="relative w-full py-8 md:py-12"
      style={{ backgroundColor: '#203D36' }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        <div
          ref={contentRef}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ opacity: prefersReducedMotion ? 1 : 0 }}
        >
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
            <Link
              href="/impressum"
              className="text-sm transition-all duration-300 hover:opacity-100 relative group"
              style={{
                color: '#F7EDC2',
                fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                opacity: 0.7,
              }}
            >
              Impressum
              <span
                className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#F7EDC2' }}
              />
            </Link>
            <span
              className="hidden md:inline"
              style={{ color: '#F7EDC2', opacity: 0.3 }}
            >
              |
            </span>
            <Link
              href="/datenschutz"
              className="text-sm transition-all duration-300 hover:opacity-100 relative group"
              style={{
                color: '#F7EDC2',
                fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                opacity: 0.7,
              }}
            >
              Datenschutz
              <span
                className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#F7EDC2' }}
              />
            </Link>
            <span
              className="hidden md:inline"
              style={{ color: '#F7EDC2', opacity: 0.3 }}
            >
              |
            </span>
            <span
              className="text-sm"
              style={{
                color: '#F7EDC2',
                fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                opacity: 0.5,
              }}
            >
              © {currentYear} Gunst & Tinte
            </span>
          </div>

          {/* Back to Top Button */}
          <button
            ref={backToTopRef}
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm transition-all duration-300 hover:opacity-100"
            style={{
              color: '#F7EDC2',
              fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
              // ✓ FIXED: Always visible, GSAP handles animation
            }}
            aria-label="Zurück zum Seitenanfang"
          >
            <span className="relative">
              Nach oben
              <span
                className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#F7EDC2' }}
              />
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:-translate-y-1"
            >
              <path
                d="M12 19V5M12 5L5 12M12 5L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
