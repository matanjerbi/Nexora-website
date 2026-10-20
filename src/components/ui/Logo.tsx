import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';
import { NMark } from './NMark';

/** Mark + wide uppercase wordmark. The wordmark is the brand name, so it's always Latin/Michroma. */
export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)} dir="ltr">
      <NMark className={cn('size-8', markClassName)} />
      <span className="font-brand text-base tracking-[0.18em] text-fg uppercase">
        {siteConfig.name}
      </span>
    </span>
  );
}
