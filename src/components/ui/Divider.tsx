import { cn } from '@/lib/cn';

/** Thin vertical cyan line, as in the logo's bottom row. */
export function Divider({ className }: { className?: string }) {
  return <span aria-hidden className={cn('divider-v', className)} />;
}
