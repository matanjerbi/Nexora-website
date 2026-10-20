'use client';

import { useRef, type ComponentPropsWithoutRef, type PointerEvent } from 'react';
import { cn } from '@/lib/cn';
import { useEnhancedEffects } from './useEnhancedEffects';

/**
 * Card whose soft cyan glow follows the cursor (desktop only).
 * The glow is moved with `transform` directly on the DOM node: no React re-renders.
 */
export function SpotlightCard({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
  const enabled = useEnhancedEffects();
  const glowRef = useRef<HTMLDivElement>(null);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const glow = glowRef.current;
    if (!enabled || !glow) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - glow.offsetWidth / 2;
    const y = event.clientY - rect.top - glow.offsetHeight / 2;
    glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  return (
    <div
      className={cn('group relative overflow-hidden rounded-2xl card-glass', className)}
      onPointerMove={handleMove}
      {...props}
    >
      {enabled && (
        <div
          ref={glowRef}
          aria-hidden
          // Physical top/left: the glow is positioned from pointer coordinates, not text direction.
          className="pointer-events-none absolute top-0 left-0 -z-10 size-96 rounded-full bg-[radial-gradient(circle,var(--glow-cyan),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-50"
        />
      )}
      {children}
    </div>
  );
}
