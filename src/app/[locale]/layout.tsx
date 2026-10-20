import type { Metadata, Viewport } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locale as rootLocale } from 'next/root-params';
import { MotionProvider } from '@/components/motion/MotionProvider';
import { FloatingWhatsApp } from '@/features/layout/FloatingWhatsApp';
import { Footer } from '@/features/layout/Footer';
import { Header } from '@/features/layout/Header';
import { SkipLink } from '@/features/layout/SkipLink';
import { brandColors } from '@/config/brand';
import { siteConfig } from '@/config/site';
import { localeDirection, routing } from '@/i18n/routing';
import { localeAlternates, openGraphFor } from '@/lib/seo';
import { fontVariables } from '../fonts';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: brandColors.bg,
  colorScheme: 'dark',
};

export async function generateMetadata(): Promise<Metadata> {
  const requested = await rootLocale();
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: { default: t('title'), template: t('titleTemplate') },
    description: t('description'),
    applicationName: siteConfig.name,
    alternates: localeAlternates(locale),
    openGraph: openGraphFor(locale, { title: t('title'), description: t('description') }),
    twitter: { card: 'summary_large_image', title: t('title'), description: t('description') },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export default async function LocaleLayout({ children }: LayoutProps<'/[locale]'>) {
  const locale = await rootLocale();
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale} dir={localeDirection[locale]} className={fontVariables}>
      <body className="bg-bg text-fg">
        {/* No NextIntlClientProvider: all copy renders on the server; client islands get props. */}
        <MotionProvider>
          <SkipLink />
          <Header />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </MotionProvider>
      </body>
    </html>
  );
}
