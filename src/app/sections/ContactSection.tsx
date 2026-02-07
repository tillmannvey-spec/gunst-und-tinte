'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';
import { staggerReveal } from '@/lib/gsap-utils';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

const contactInfos: ContactInfo[] = [
  {
    icon: '/icons/ui/tel-orange.svg',
    label: 'Telefon',
    value: '+49 123 456789',
    href: 'tel:+49123456789',
  },
  {
    icon: '/icons/ui/mail-orange.svg',
    label: 'E-Mail',
    value: 'hello@gunst-tinte.de',
    href: 'mailto:hello@gunst-tinte.de',
  },
];

const openingHours = [
  { day: 'Montag – Freitag', hours: '10:00 – 18:00 Uhr' },
  { day: 'Samstag & Sonntag', hours: 'Nach Vereinbarung' },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const contactItemsRef = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);
  const hoursRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const socialItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Vielen Dank für deine Nachricht! Ich melde mich bald bei dir.');
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Stagger reveal for headline and subtext
      const introElements: (HTMLElement | null)[] = [
        headlineRef.current,
        subtextRef.current,
      ];

      if (introElements.length > 0) {
        const validElements = introElements.filter(
          (el): el is HTMLElement => el !== null
        );
        if (validElements.length > 0) {
          staggerReveal(validElements, {
            direction: 'up',
            distance: 30,
            stagger: 0.15,
            duration: 0.7,
            start: 'top 85%',
          });
        }
      }

      // Logo animation
      if (logoRef.current) {
        gsap.from(logoRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: logoRef.current,
            start: 'top 85%',
          },
        });
      }

      // Stagger reveal for contact items
      if (contactItemsRef.current.length > 0) {
        const validItems = contactItemsRef.current.filter(
          (item): item is HTMLAnchorElement | HTMLDivElement => item !== null
        );
        if (validItems.length > 0) {
          staggerReveal(validItems, {
            direction: 'up',
            distance: 20,
            stagger: 0.1,
            duration: 0.6,
            start: 'top 85%',
          });
        }
      }

      // Hours section fade in
      if (hoursRef.current) {
        gsap.from(hoursRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hoursRef.current,
            start: 'top 85%',
          },
        });
      }

      // Social icons animation
      if (socialItemsRef.current.length > 0) {
        const validSocials = socialItemsRef.current.filter(
          (item): item is HTMLAnchorElement => item !== null
        );
        if (validSocials.length > 0) {
          staggerReveal(validSocials, {
            direction: 'up',
            distance: 15,
            stagger: 0.1,
            duration: 0.5,
            start: 'top 90%',
          });
        }
      }

      // Form animation
      if (formRef.current) {
        gsap.from(formRef.current, {
          opacity: 0,
          x: 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: '#F7EDC2' }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4 md:mb-6 leading-[1.1]"
            style={{
              color: '#203D36',
              fontFamily: 'var(--font-casta), "Casta", serif',
              // ✓ FIXED: Always visible, GSAP handles animation
            }}
          >
            termin vereinbaren
          </h2>
          <p
            ref={subtextRef}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              color: '#203D36',
              fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
              // ✓ FIXED: Always visible, GSAP handles animation
            }}
          >
            Lass uns gemeinsam dein perfektes Tattoo kreieren
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col">
            {/* Logo */}
            <div
              ref={logoRef}
              className="relative w-full max-w-[280px] h-[80px] mb-10 md:mb-12"
              style={{ opacity: prefersReducedMotion ? 1 : 0 }}
            >
              <Image
                src="/logos/logo-kontakt.svg"
                alt="Gunst & Tinte Logo"
                fill
                className="object-contain object-left"
              />
            </div>

            {/* Address */}
            <div
              ref={(el) => {
                contactItemsRef.current[0] = el;
              }}
              className="mb-8"
              style={{ opacity: prefersReducedMotion ? 1 : 0 }}
            >
              <h3
                className="text-sm uppercase tracking-wider mb-2"
                style={{
                  color: '#EB5729',
                  fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                }}
              >
                Adresse
              </h3>
              <p
                className="text-lg sm:text-xl"
                style={{
                  color: '#203D36',
                  fontFamily: 'var(--font-casta), "Casta", serif',
                }}
              >
                Gunst & Tinte
                <br />
                Musterstraße 42
                <br />
                12345 Berlin
              </p>
            </div>

            {/* Contact Details */}
            <div ref={contactInfoRef} className="space-y-4 mb-8">
              {contactInfos.map((info, index) => (
                <a
                  key={index}
                  ref={(el) => {
                    contactItemsRef.current[index + 1] = el;
                  }}
                  href={info.href}
                  className="flex items-center gap-4 group transition-all duration-300"
                  style={{ opacity: prefersReducedMotion ? 1 : 0 }}
                >
                  <div className="relative w-6 h-6 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={info.icon}
                      alt={info.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span
                    className="text-base sm:text-lg transition-colors duration-300 group-hover:text-orange"
                    style={{
                      color: '#203D36',
                      fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                    }}
                  >
                    {info.value}
                  </span>
                </a>
              ))}
            </div>

            {/* Opening Hours */}
            <div
              ref={hoursRef}
              className="mb-10 md:mb-12"
              style={{ opacity: prefersReducedMotion ? 1 : 0 }}
            >
              <h3
                className="text-sm uppercase tracking-wider mb-3"
                style={{
                  color: '#EB5729',
                  fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                }}
              >
                Öffnungszeiten
              </h3>
              <div className="space-y-2">
                {openingHours.map((item, index) => (
                  <div key={index} className="flex justify-between max-w-xs">
                    <span
                      className="text-base"
                      style={{
                        color: '#203D36',
                        fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                      }}
                    >
                      {item.day}
                    </span>
                    <span
                      className="text-base"
                      style={{
                        color: '#203D36',
                        fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                        fontWeight: 700,
                      }}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div ref={socialsRef} className="flex items-center gap-4">
              <a
                ref={(el) => {
                  socialItemsRef.current[0] = el;
                }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-10 h-10 transition-all duration-300 hover:scale-110"
                style={{ opacity: prefersReducedMotion ? 1 : 0 }}
                aria-label="Instagram"
              >
                <Image
                  src="/icons/social/instagram-orange.svg"
                  alt="Instagram"
                  fill
                  className="object-contain transition-opacity duration-300 hover:opacity-80"
                />
              </a>
              <a
                ref={(el) => {
                  socialItemsRef.current[1] = el;
                }}
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-10 h-10 transition-all duration-300 hover:scale-110"
                style={{ opacity: prefersReducedMotion ? 1 : 0 }}
                aria-label="TikTok"
              >
                <Image
                  src="/icons/social/tiktok-orange.svg"
                  alt="TikTok"
                  fill
                  className="object-contain transition-opacity duration-300 hover:opacity-80"
                />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex flex-col justify-center">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 p-6 sm:p-8 rounded-2xl"
              style={{
                backgroundColor: 'rgba(32, 61, 54, 0.05)',
                // ✓ FIXED: Always visible, GSAP handles animation
              }}
            >
              <h3
                className="text-xl sm:text-2xl font-normal mb-6"
                style={{
                  color: '#203D36',
                  fontFamily: 'var(--font-casta), "Casta", serif',
                }}
              >
                Schreib mir
              </h3>

              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2"
                  style={{
                    color: '#203D36',
                    fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: '#F7EDC2',
                    borderColor: 'rgba(32, 61, 54, 0.2)',
                    color: '#203D36',
                    fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                  }}
                  placeholder="Dein Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2"
                  style={{
                    color: '#203D36',
                    fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                  }}
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: '#F7EDC2',
                    borderColor: 'rgba(32, 61, 54, 0.2)',
                    color: '#203D36',
                    fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                  }}
                  placeholder="deine@email.de"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2"
                  style={{
                    color: '#203D36',
                    fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                  }}
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                  style={{
                    backgroundColor: '#F7EDC2',
                    borderColor: 'rgba(32, 61, 54, 0.2)',
                    color: '#203D36',
                    fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                  }}
                  placeholder="Erzähl mir von deinem Tattoo-Wunsch..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg font-medium text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  backgroundColor: '#EB5729',
                  color: '#F7EDC2',
                  fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                }}
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
