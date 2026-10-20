import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { locale as rootLocale } from 'next/root-params';
import { AccessibilityStatement } from '@/features/accessibility/AccessibilityStatement';
import { routing } from '@/i18n/routing';
import { localeAlternates, openGraphFor } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const requested = await rootLocale();
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'Accessibility' });
  const alternates = localeAlternates(locale, '/accessibility');
  return {
    title: t('metaTitle'),
    alternates,
    openGraph: openGraphFor(locale, { title: t('metaTitle'), path: '/accessibility' }),
  };
}

export default function AccessibilityPage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <AccessibilityStatement />
    </main>
  );
}
