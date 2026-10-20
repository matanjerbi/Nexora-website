import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['he', 'en'],
  defaultLocale: 'he',
  localePrefix: 'always',
});

export const localeDirection = { he: 'rtl', en: 'ltr' } as const;

/** Locale names, always shown in their own language. */
export const localeNames = {
  he: { short: 'עב', full: 'עברית' },
  en: { short: 'EN', full: 'English' },
} as const;
