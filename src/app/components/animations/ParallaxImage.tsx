/**
 * ParallaxImage Component
 * Image with smooth parallax scroll effect
 */

'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { parallax } from '@/lib/gsap-utils';
import { useReducedMotion, shouldAnimate } from '@/app/hooks/useReducedMotion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  priority?: boolean;
  fill?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  start?: string;
  end?: string;
  markers?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  className = '',
  containerClassName = '',
  speed = 0.5,
  direction = 'vertical',
  priority = false,
  fill = false,
  objectFit = 'cover',
  start = 'top bottom',
  end = 'bottom top',
  markers = false,
}: ParallaxImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!imageRef.current || !shouldAnimate(prefersReducedMotion)) {
      return;
    }

    const animation = parallax(imageRef.current, {
      speed,
      direction,
      start,
      end,
      markers,
    });

    return () => {
      animation.kill();
    };
  }, [prefersReducedMotion, speed, direction, start, end, markers]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${containerClassName}`}>
      <div ref={imageRef} className={`relative ${className}`}>
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            style={{ objectFit }}
            sizes="100vw"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            style={{ objectFit }}
          />
        )}
      </div>
    </div>
  );
}
