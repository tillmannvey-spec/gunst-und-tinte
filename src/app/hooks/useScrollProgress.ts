'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position
 * Returns true when scrolled past the threshold
 *
 * @param threshold - Scroll position in pixels to trigger state change (default: 100)
 * @returns boolean indicating if scrolled past threshold
 */
export function useScrollProgress(threshold = 100): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check initial scroll position
    setIsScrolled(window.scrollY > threshold);

    const handleScroll = () => {
      const scrolled = window.scrollY > threshold;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, isScrolled]);

  return isScrolled;
}
