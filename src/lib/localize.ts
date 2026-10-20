import type { Locale, Localized } from '@/domain';

/** Pick the current locale's value from a localized field. */
export function localize<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
