import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

/** Glassy elevated card with a gradient hairline border. */
export function Card({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('relative rounded-2xl p-6 card-glass sm:p-8', className)} {...props} />;
}
