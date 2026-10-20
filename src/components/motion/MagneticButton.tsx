'use client';

import { m, useMotionValue, useSpring } from 'framer-motion';
import type { PointerEvent, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { useEnhancedEffects } from './useEnhancedEffects';

const SPRING = { stiffness: 220, damping: 18, mass: 0.4 };

/** Pulls its child slightly toward the cursor. Inert on touch / low-power / reduced motion. */
export function MagneticButton({
  children,
  strength = 0.3,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const enabled = useEnhancedEffects();
  const x = useSpring(useMotionValue(0), SPRING);
  const y = useSpring(useMotionValue(0), SPRING);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (!enabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.div
      className={cn('inline-flex', className)}
      style={{ x, y }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </m.div>
  );
}
