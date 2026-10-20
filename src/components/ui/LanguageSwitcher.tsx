'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { localeNames, routing } from '@/i18n/routing';
import { cn } from '@/lib/cn';

/**
 * he/en toggle that keeps the current path. A labelled group (not a landmark), since it
 * appears in both header and footer. Each link is announced by its full language name.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={t('label')}
      className={cn('flex items-center text-sm', className)}
    >
      <ul className="flex items-center gap-1 rounded-full border border-line p-1">
        {routing.locales.map((target) => {
          const active = target === locale;
          return (
            <li key={target}>
              <Link
                href={pathname}
                locale={target}
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
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
