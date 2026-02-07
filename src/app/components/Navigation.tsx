'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { LOGO_SHORT } from '@/lib/assets';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import MobileMenu from './MobileMenu';

// Navigation links configuration
const navLinks = [
  { label: 'portfolio', href: '#portfolio' },
  { label: 'atelier', href: '#atelier' },
  { label: 'über mich', href: '#about' },
  { label: 'anfahrt', href: '#contact' },
  { label: 'kontakt', href: '#contact' },
];

/**
 * Main Navigation Component
 * Features:
 * - Sticky positioning (fixed top)
 * - Morphing on scroll (transparent → solid with blur)
 * - Desktop: Horizontal navigation
 * - Mobile: Hamburger menu with fullscreen overlay
 * - Smooth scroll to section anchors
 */
export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollProgress(100);

  // Handle smooth scroll to section anchors
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Close mobile menu if open
    setIsMobileMenuOpen(false);

    // Smooth scroll to target
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? 'bg-dunkelgruen/95 backdrop-blur-lg shadow-lg py-4'
              : 'bg-transparent py-6'
          }
        `}
      >
        <div className="max-w-container mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              className={`
                relative transition-all duration-300 ease-in-out
                ${isScrolled ? 'scale-90' : 'scale-100'}
              `}
            >
              <Image
                src={LOGO_SHORT}
                alt="Gunst & Tinte"
                width={80}
                height={80}
                className="w-16 h-16 lg:w-20 lg:h-20"
                priority
              />
            </a>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-8">
              {/* ✓ FIXED: Changed space-x-8 to gap-8 for more reliable spacing */}
              {navLinks.map((link) => (
                <a
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    font-secondary text-lg lowercase tracking-[0.1em]
                    transition-colors duration-300
                    relative group whitespace-nowrap
                    ${isScrolled ? 'text-creme hover:text-limette' : 'text-creme hover:text-limette'}
                    ${!isScrolled && 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'}
                  `}
                  style={{
                    fontFamily: 'var(--font-space-mono), "Space Mono", monospace',
                  }}
                >
                  {link.label}
                  {/* Animated underline on hover */}
                  <span className={`absolute bottom-0 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 ${isScrolled ? 'bg-limette' : 'bg-orange'}`} />
                </a>
              ))}
            </div>

            {/* Mobile Hamburger Menu - Visible only on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`
                lg:hidden p-2 transition-colors duration-300
                ${isScrolled ? 'text-creme hover:text-limette' : 'text-creme hover:text-limette'}
                ${!isScrolled && 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'}
              `}
              aria-label="Open menu"
            >
              <Menu size={28} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
        onLinkClick={handleNavClick}
      />
    </>
  );
}
