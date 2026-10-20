import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';

type SectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'title'> & {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  /** Decorative background layer (grid, glow, parallax), rendered behind the content. */
  background?: ReactNode;
};

/** Page section with a consistent header (eyebrow, title, description) and an accessible name. */
export function Section({
  id,
  eyebrow,
  title,
  description,
  background,
  className,
  children,
  ...props
}: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={cn('relative isolate py-20 sm:py-28', className)}
      {...props}
    >
      {background && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {background}
        </div>
      )}
      <Container>
        {(eyebrow || title || description) && (
          <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            {eyebrow && <p className="mb-4 eyebrow">{eyebrow}</p>}
            {title && (
              <h2
                id={headingId}
                className="font-display text-3xl leading-tight font-bold text-balance sm:text-4xl en:text-2xl en:font-normal en:uppercase en:sm:text-3xl"
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-base leading-relaxed text-pretty text-muted sm:text-lg">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
