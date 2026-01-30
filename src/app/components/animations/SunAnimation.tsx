/**
 * SunAnimation Component
 * Continuously rotating sun graphic (logo animation)
 */

'use client';

import { useEffect, useRef } from 'react';
import { continuousRotation } from '@/lib/gsap-utils';
import { useReducedMotion, shouldAnimate } from '@/app/hooks/useReducedMotion';

interface SunAnimationProps {
  duration?: number;
  direction?: 'clockwise' | 'counterclockwise';
  className?: string;
  size?: number;
  color?: string;
}

export default function SunAnimation({
  duration = 20,
  direction = 'clockwise',
  className = '',
  size = 100,
  color = 'currentColor',
}: SunAnimationProps) {
  const sunRef = useRef<SVGSVGElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sunRef.current || !shouldAnimate(prefersReducedMotion)) {
      return;
    }

    const animation = continuousRotation(sunRef.current, {
      duration,
      direction,
    });

    return () => {
      animation.kill();
    };
  }, [prefersReducedMotion, duration, direction]);

  return (
    <svg
      ref={sunRef}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Decorative sun animation"
    >
      {/* Center circle */}
      <circle cx="50" cy="50" r="20" fill={color} />

      {/* Sun rays */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 50 + Math.cos(angle) * 25;
        const y1 = 50 + Math.sin(angle) * 25;
        const x2 = 50 + Math.cos(angle) * 40;
        const y2 = 50 + Math.sin(angle) * 40;

        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
