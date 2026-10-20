'use client';

import { usePathname } from 'next/navigation';
import type { Locale } from '@/domain';
import { localeNames, routing } from '@/i18n/routing';
import { cn } from '@/lib/cn';

type LanguageSwitcherProps = {
  locale: Locale;
  /** Accessible group label, already localized. */
  label: string;
  className?: string;
};

/** Same path in another locale: /he/accessibility → /en/accessibility. */
function swapLocale(pathname: string, target: Locale) {
  const [, , ...rest] = pathname.split('/');
  return `/${[target, ...rest].join('/')}`.replace(/\/$/, '');
}

/**
 * he/en toggle that keeps the current path. A labelled group (not a landmark), since it
 * appears in both header and footer. Each link is announced by its full language name.
 * Plain links: switching locale changes <html lang dir>, so a full page load is intended.
 * Props come from the server, so no i18n runtime ships to the client.
 */
export function LanguageSwitcher({ locale, label, className }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div role="group" aria-label={label} className={cn('flex items-center text-sm', className)}>
      <ul className="flex items-center gap-1 rounded-full border border-line p-1">
        {routing.locales.map((target) => {
          const active = target === locale;
          return (
            <li key={target}>
              <a
                href={swapLocale(pathname, target)}
                lang={target}
                hrefLang={target}
                aria-current={active ? 'true' : undefined}
                className={cn(
                  'inline-flex h-8 min-w-10 items-center justify-center rounded-full px-3 font-medium transition-colors',
                  active ? 'bg-surface text-cyan' : 'text-muted hover:text-fg',
                )}
              >
                <span aria-hidden>{localeNames[target].short}</span>
                <span className="sr-only">{localeNames[target].full}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
