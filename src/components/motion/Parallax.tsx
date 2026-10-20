'use client';

import { m, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { useEnhancedEffects } from './useEnhancedEffects';

/** Subtle vertical parallax for decorative section backgrounds (desktop only). */
export function Parallax({
  children,
  offset = 60,
  className,
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useEnhancedEffects();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], enabled ? [-offset, offset] : [0, 0]);

  return (
    <m.div ref={ref} aria-hidden style={{ y }} className={cn('absolute inset-0', className)}>
      {children}
    </m.div>
  );
}
