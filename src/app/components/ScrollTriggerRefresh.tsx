/**
 * ScrollTriggerRefresh Component
 * Fixes ScrollTrigger issues after Next.js route changes
 * Place in root layout
 */

'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { refreshScrollTriggers } from '@/lib/gsap-utils';

export default function ScrollTriggerRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      refreshScrollTriggers();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
