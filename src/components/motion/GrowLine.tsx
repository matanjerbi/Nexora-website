'use client';

import { m } from 'framer-motion';
import { cn } from '@/lib/cn';

/**
 * A thin gradient line that grows from the inline-start (x) or top (y) edge when scrolled into view.
 * Animates `transform: scale` only.
 */
export function GrowLine({ axis = 'x', className }: { axis?: 'x' | 'y'; className?: string }) {
  const horizontal = axis === 'x';
  return (
    <m.div
      aria-hidden
      initial={horizontal ? { scaleX: 0 } : { scaleY: 0 }}
      whileInView={horizontal ? { scaleX: 1 } : { scaleY: 1 }}
      viewport={{ once: true, margin: '0px 0px -15% 0px' }}
      transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
      className={cn(
        horizontal
          ? 'h-px bg-gradient-to-r from-cyan via-blue to-deep-blue ltr:origin-left rtl:origin-right rtl:bg-gradient-to-l'
          : 'w-px origin-top bg-gradient-to-b from-cyan via-blue to-deep-blue',
        className,
      )}
    />
  );
}
