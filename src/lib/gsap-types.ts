/**
 * GSAP Animation Types
 * Type definitions for animation utilities
 */

export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export type ParallaxDirection = 'vertical' | 'horizontal';

export type RotationDirection = 'clockwise' | 'counterclockwise';

export type ScrollTriggerStart = string; // e.g., 'top 80%', 'top center', 'bottom bottom'

export type ScrollTriggerEnd = string; // e.g., 'bottom top', '+=100%'

export interface FadeInOptions {
  direction?: AnimationDirection;
  distance?: number;
  duration?: number;
  delay?: number;
  start?: ScrollTriggerStart;
  end?: ScrollTriggerEnd;
  scrub?: boolean | number;
  markers?: boolean;
}

export interface StaggerRevealOptions {
  direction?: AnimationDirection;
  distance?: number;
  stagger?: number | {
    each?: number;
    from?: 'start' | 'end' | 'center' | 'edges' | 'random' | number;
  };
  duration?: number;
  start?: ScrollTriggerStart;
  markers?: boolean;
}

export interface ParallaxOptions {
  speed?: number;
  direction?: ParallaxDirection;
  start?: ScrollTriggerStart;
  end?: ScrollTriggerEnd;
  markers?: boolean;
}

export interface PinSectionOptions {
  start?: ScrollTriggerStart;
  end?: ScrollTriggerEnd;
  pinSpacing?: boolean;
  anticipatePin?: number;
  markers?: boolean;
}

export interface ScaleOnScrollOptions {
  from?: number;
  to?: number;
  start?: ScrollTriggerStart;
  end?: ScrollTriggerEnd;
  scrub?: boolean | number;
  markers?: boolean;
}

export interface RotateOnScrollOptions {
  from?: number;
  to?: number;
  start?: ScrollTriggerStart;
  end?: ScrollTriggerEnd;
  scrub?: boolean | number;
  markers?: boolean;
}

export interface TextRevealOptions {
  stagger?: number;
  duration?: number;
  direction?: 'up' | 'down';
  distance?: number;
  start?: ScrollTriggerStart;
  markers?: boolean;
}

export interface ContinuousRotationOptions {
  duration?: number;
  direction?: RotationDirection;
}
