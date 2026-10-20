import { useId } from 'react';
import { cn } from '@/lib/cn';
import { N_MARK } from './nmark-geometry';

const {
  leftLeg: LEFT_LEG,
  diagonal: DIAGONAL,
  rightLeg: RIGHT_LEG,
  badge: BADGE,
  glyph: GLYPH,
} = N_MARK;

type NMarkProps = {
  className?: string;
  /** Hero mode: strokes draw themselves in, then the fill fades in and a shimmer sweeps across. */
  animated?: boolean;
  title?: string;
};

/**
 * The Nexora "N" mark with its ‹|› code-bracket badge, as an inline SVG so it can animate.
 * Decorative by default; pass `title` to expose it to assistive tech.
 */
export function NMark({ className, animated = false, title }: NMarkProps) {
  const id = useId().replace(/:/g, '');
  const brand = `${id}-brand`;
  const fold = `${id}-fold`;
  const clip = `${id}-clip`;
  const ribbon = [LEFT_LEG, RIGHT_LEG, DIAGONAL];

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('overflow-visible', className)}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <linearGradient id={brand} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cyan)" />
          <stop offset="55%" stopColor="var(--blue)" />
          <stop offset="100%" stopColor="var(--deep-blue)" />
        </linearGradient>
        <linearGradient id={fold} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--deep-blue)" />
          <stop offset="100%" stopColor="var(--cyan)" />
        </linearGradient>
        <clipPath id={clip}>
          {ribbon.map((d) => (
            <path key={d} d={d} />
          ))}
        </clipPath>
      </defs>

      {/* Fill: the legs read as the back of the ribbon, the diagonal as its face. */}
      <g className={cn(animated && 'animate-fill-in')}>
        <path d={LEFT_LEG} fill={`url(#${fold})`} />
        <path d={RIGHT_LEG} fill={`url(#${brand})`} />
        <path d={DIAGONAL} fill={`url(#${brand})`} />
        <path d={BADGE} fill="var(--bg)" stroke={`url(#${brand})`} strokeWidth="3" />
        <path
          d={GLYPH}
          fill="none"
          stroke="var(--cyan)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {animated && (
        <>
          {/* Outline draw-in. */}
          <g
            fill="none"
            stroke="var(--cyan)"
            strokeWidth="0.8"
            strokeLinejoin="round"
            className="animate-outline-out [&>path]:animate-draw [&>path]:[stroke-dasharray:1] [&>path]:[stroke-dashoffset:1]"
          >
            {[...ribbon, BADGE].map((d, i) => (
              <path key={d} d={d} pathLength={1} style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </g>
          {/* Shimmer: a light band sweeping across the ribbon (transform-only). */}
          <g clipPath={`url(#${clip})`}>
            <rect
              x="0"
              y="-10"
              width="28"
              height="120"
              fill="var(--text)"
              opacity="0.18"
              className="animate-shimmer [transform-box:fill-box]"
            />
          </g>
        </>
      )}
    </svg>
  );
}
