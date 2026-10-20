import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'inverse' | 'ghost';
type Size = 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary:
    'bg-cta text-bg shadow-[0_0_0_1px_var(--border-strong),0_10px_40px_-10px_var(--glow-cyan)] hover:shadow-[0_0_0_1px_var(--cyan),0_14px_50px_-8px_var(--glow-cyan)]',
  secondary: 'card-glass text-fg hover:border-line-strong hover:text-cyan',
  /** Dark button for use on bright gradient surfaces. */
  inverse:
    'bg-bg text-fg shadow-[0_12px_40px_-12px_var(--bg)] hover:text-cyan hover:shadow-[0_16px_50px_-10px_var(--bg)]',
  ghost: 'text-muted hover:text-fg',
};

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-base',
};

export type ButtonProps = ComponentPropsWithoutRef<'a'> & { variant?: Variant; size?: Size };

/** All CTAs are links (WhatsApp, tel:, in-page anchors), so Button renders an <a>. */
export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[box-shadow,color,transform] duration-300 select-none active:scale-[0.98]',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
