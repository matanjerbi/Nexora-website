import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';

type SectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'title'> & {
  id: string;
  /** Section number shown before the eyebrow, e.g. "01". */
  index?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  /** Decorative background layer (grid, glow, parallax), rendered behind the content. */
  background?: ReactNode;
};

/**
 * Page section with an editorial, start-aligned header: numbered mono label and title on one
 * side, description on the other (stacked on mobile). Gives every section an accessible name.
 */
export function Section({
  id,
  index,
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
          <header className="mb-12 grid gap-5 border-b border-line pb-10 sm:mb-16 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
            <div>
              {eyebrow && (
                <p className="mb-5 flex items-center gap-3 eyebrow">
                  {index && (
                    <span aria-hidden className="font-mono text-muted">
                      {index}
                    </span>
                  )}
                  <span aria-hidden className="h-px w-8 bg-line-strong" />
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2
                  id={headingId}
                  className="font-display text-3xl leading-[1.15] font-bold tracking-tight text-balance sm:text-[2.6rem]"
                >
                  {title}
                </h2>
              )}
            </div>
            {description && (
              <p className="text-base leading-relaxed text-pretty text-muted sm:text-lg lg:pb-1.5">
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
