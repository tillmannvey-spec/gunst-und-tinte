'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ label: string; href: string }>;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

/**
 * Full-screen mobile menu overlay
 * Features:
 * - Fullscreen overlay with backdrop
 * - Stagger animation on menu items
 * - Close on ESC key
 * - Close on link click
 */
export default function MobileMenu({
  isOpen,
  onClose,
  links,
  onLinkClick,
}: MobileMenuProps) {
  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-dunkelgruen"
      style={{
        animation: 'fadeIn 0.3s ease-out',
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-creme hover:text-limette transition-colors duration-300"
        aria-label="Close menu"
      >
        <X size={32} strokeWidth={1.5} />
      </button>

      {/* Menu Links */}
      <nav className="flex flex-col items-center justify-center h-full space-y-8">
        {links.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => onLinkClick(e, link.href)}
            className="font-secondary text-2xl lowercase tracking-[0.1em] text-creme hover:text-limette transition-colors duration-300 relative group"
            style={{
              animation: `slideInRight 0.5s ease-out ${index * 0.1}s backwards`,
            }}
          >
            {link.label}
            {/* Underline animation */}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-limette group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </nav>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
