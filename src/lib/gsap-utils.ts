/**
 * GSAP Utility Functions
 * Reusable animation helpers with ScrollTrigger integration
 */

import { gsap } from './gsap';
import { ScrollTrigger } from './gsap';
import { easings, durations } from './gsap';

/**
 * Fade in element on scroll with optional slide direction
 */
export function fadeInOnScroll(
  element: gsap.TweenTarget,
  options?: {
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    duration?: number;
    delay?: number;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
  }
) {
  const {
    direction = 'up',
    distance = 50,
    duration = durations.normal,
    delay = 0,
    start = 'top 80%',
    end,
    scrub = false,
    markers = false,
  } = options || {};

  const fromVars: gsap.TweenVars = {
    opacity: 0,
    duration,
    delay,
    ease: easings.entrance,
  };

  // Add direction-based transform
  if (direction !== 'none') {
    switch (direction) {
      case 'up':
        fromVars.y = distance;
        break;
      case 'down':
        fromVars.y = -distance;
        break;
      case 'left':
        fromVars.x = distance;
        break;
      case 'right':
        fromVars.x = -distance;
        break;
    }
  }

  return gsap.from(element, {
    ...fromVars,
    immediateRender: false,
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start,
      end,
      scrub,
      markers,
      once: false,
    },
  });
}

/**
 * Stagger reveal animation for multiple elements
 */
export function staggerReveal(
  elements: gsap.TweenTarget,
  options?: {
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    stagger?: number | { each?: number; from?: 'start' | 'end' | 'center' | 'edges' | 'random' | number };
    duration?: number;
    start?: string;
    markers?: boolean;
  }
) {
  const {
    direction = 'up',
    distance = 30,
    stagger = 0.1,
    duration = durations.normal,
    start = 'top 80%',
    markers = false,
  } = options || {};

  const fromVars: gsap.TweenVars = {
    opacity: 0,
    duration,
    ease: easings.entrance,
    stagger,
  };

  if (direction !== 'none') {
    switch (direction) {
      case 'up':
        fromVars.y = distance;
        break;
      case 'down':
        fromVars.y = -distance;
        break;
      case 'left':
        fromVars.x = distance;
        break;
      case 'right':
        fromVars.x = -distance;
        break;
    }
  }

  return gsap.from(elements, {
    ...fromVars,
    immediateRender: false,
    scrollTrigger: {
      trigger: elements as gsap.DOMTarget,
      start,
      markers,
      once: false,
    },
  });
}

/**
 * Parallax effect on scroll
 */
export function parallax(
  element: gsap.TweenTarget,
  options?: {
    speed?: number;
    direction?: 'vertical' | 'horizontal';
    start?: string;
    end?: string;
    markers?: boolean;
  }
) {
  const {
    speed = 0.5,
    direction = 'vertical',
    start = 'top bottom',
    end = 'bottom top',
    markers = false,
  } = options || {};

  const distance = 100 * speed;

  return gsap.fromTo(
    element,
    {
      [direction === 'vertical' ? 'y' : 'x']: -distance,
    },
    {
      [direction === 'vertical' ? 'y' : 'x']: distance,
      ease: 'none',
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start,
        end,
        scrub: true,
        markers,
      },
    }
  );
}

/**
 * Pin section during scroll
 */
export function pinSection(
  element: gsap.TweenTarget,
  options?: {
    start?: string;
    end?: string;
    pinSpacing?: boolean;
    anticipatePin?: number;
    markers?: boolean;
  }
) {
  const {
    start = 'top top',
    end = '+=100%',
    pinSpacing = true,
    anticipatePin = 1,
    markers = false,
  } = options || {};

  return ScrollTrigger.create({
    trigger: element as gsap.DOMTarget,
    start,
    end,
    pin: true,
    pinSpacing,
    anticipatePin,
    markers,
  });
}

/**
 * Scale on scroll animation
 */
export function scaleOnScroll(
  element: gsap.TweenTarget,
  options?: {
    from?: number;
    to?: number;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
  }
) {
  const {
    from = 0.8,
    to = 1,
    start = 'top bottom',
    end = 'top center',
    scrub = true,
    markers = false,
  } = options || {};

  return gsap.fromTo(
    element,
    {
      scale: from,
      opacity: 0,
    },
    {
      scale: to,
      opacity: 1,
      ease: easings.entrance,
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start,
        end,
        scrub,
        markers,
      },
    }
  );
}

/**
 * Rotate on scroll animation
 */
export function rotateOnScroll(
  element: gsap.TweenTarget,
  options?: {
    from?: number;
    to?: number;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
  }
) {
  const {
    from = 0,
    to = 360,
    start = 'top bottom',
    end = 'bottom top',
    scrub = true,
    markers = false,
  } = options || {};

  return gsap.fromTo(
    element,
    {
      rotation: from,
    },
    {
      rotation: to,
      ease: 'none',
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start,
        end,
        scrub,
        markers,
      },
    }
  );
}

/**
 * Text reveal animation (word by word)
 */
export function textReveal(
  words: gsap.TweenTarget,
  options?: {
    stagger?: number;
    duration?: number;
    direction?: 'up' | 'down';
    distance?: number;
    start?: string;
    markers?: boolean;
  }
) {
  const {
    stagger = 0.05,
    duration = durations.normal,
    direction = 'up',
    distance = 20,
    start = 'top 80%',
    markers = false,
  } = options || {};

  return gsap.from(words, {
    opacity: 0,
    y: direction === 'up' ? distance : -distance,
    duration,
    ease: easings.entrance,
    stagger,
    immediateRender: false,
    scrollTrigger: {
      trigger: words as gsap.DOMTarget,
      start,
      markers,
      once: false,
    },
  });
}

/**
 * Continuous rotation animation (no scroll dependency)
 */
export function continuousRotation(
  element: gsap.TweenTarget,
  options?: {
    duration?: number;
    direction?: 'clockwise' | 'counterclockwise';
  }
) {
  const { duration = 20, direction = 'clockwise' } = options || {};

  const rotation = direction === 'clockwise' ? 360 : -360;

  return gsap.to(element, {
    rotation,
    duration,
    ease: 'none',
    repeat: -1,
  });
}

/**
 * Refresh all ScrollTriggers (useful after route changes)
 */
export function refreshScrollTriggers() {
  if (typeof window !== 'undefined') {
    ScrollTrigger.refresh();
  }
}

/**
 * Kill all ScrollTriggers (cleanup)
 */
export function killAllScrollTriggers() {
  if (typeof window !== 'undefined') {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
}
