'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { localeNames, routing } from '@/i18n/routing';
import { cn } from '@/lib/cn';

/** he/en toggle that keeps the current path. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav aria-label={t('label')} className={cn('flex items-center text-sm', className)}>
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
                aria-label={active ? localeNames[target].full : t('switchTo')}
                className={cn(
                  'inline-flex h-8 min-w-10 items-center justify-center rounded-full px-3 font-medium transition-colors',
                  active ? 'bg-surface text-cyan' : 'text-muted hover:text-fg',
                )}
              >
                {localeNames[target].short}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
