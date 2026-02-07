/**
 * GSAP Core Configuration & Plugin Registration
 * SSR-safe setup for Next.js
 */

import { gsap as gsapCore } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins immediately (only runs once)
if (typeof window !== 'undefined') {
  gsapCore.registerPlugin(ScrollTrigger);

  // Default GSAP configuration
  gsapCore.defaults({
    ease: 'power3.out',
    duration: 1,
  });

  // ScrollTrigger defaults
  ScrollTrigger.defaults({
    start: 'top 80%',
    toggleActions: 'play none none reverse',
    markers: false, // Set to true for debugging
  });

  // Normalize scroll behavior
  ScrollTrigger.normalizeScroll(true);

  // Config
  ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: 150,
  });
}

// Export GSAP and plugins
export const gsap = gsapCore;
export { ScrollTrigger };

// Common easings export
export const easings = {
  entrance: 'power3.out',
  exit: 'power3.in',
  transition: 'power2.inOut',
  bounce: 'back.out(1.7)',
  elastic: 'elastic.out(1, 0.5)',
  smooth: 'power1.inOut',
} as const;

// Common durations
export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  verySlow: 1.5,
} as const;
