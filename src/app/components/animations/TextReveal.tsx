/**
 * TextReveal Component
 * Word-by-word reveal animation with ScrollTrigger
 */

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { textReveal } from '@/lib/gsap-utils';
import { useReducedMotion, shouldAnimate } from '@/app/hooks/useReducedMotion';

interface TextRevealProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  stagger?: number;
  duration?: number;
  direction?: 'up' | 'down';
  distance?: number;
  start?: string;
  markers?: boolean;
}

export default function TextReveal({
  children,
  className = '',
  as: Component = 'p',
  stagger = 0.05,
  duration = 0.6,
  direction = 'up',
  distance = 20,
  start = 'top 80%',
  markers = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current || !shouldAnimate(prefersReducedMotion)) {
      // If reduced motion is preferred, make all words visible immediately
      if (containerRef.current) {
        const words = containerRef.current.querySelectorAll('.word');
        gsap.set(words, { opacity: 1, y: 0 });
      }
      return;
    }

    const words = containerRef.current.querySelectorAll('.word');

    const animation = textReveal(words, {
      stagger,
      duration,
      direction,
      distance,
      start,
      markers,
    });

    return () => {
      animation.kill();
    };
  }, [prefersReducedMotion, stagger, duration, direction, distance, start, markers]);

  // Split text into words and wrap each in a span
  const words = children.split(' ').map((word, index) => (
    <span
      key={index}
      className="word inline-block"
      style={{ opacity: prefersReducedMotion ? 1 : 0 }}
    >
      {word}
      {index < children.split(' ').length - 1 && '\u00A0'}
    </span>
  ));

  return (
    <Component ref={containerRef as any} className={className}>
      {words}
    </Component>
  );
}
