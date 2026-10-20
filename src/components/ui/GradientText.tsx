import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

export function GradientText({ className, ...props }: ComponentPropsWithoutRef<'span'>) {
  return <span className={cn('text-gradient', className)} {...props} />;
}
