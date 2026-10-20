import type { Metadata, Viewport } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
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
import { absoluteUrl, localeAlternates, localizedPath, ogLocales } from '@/lib/seo';
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
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      title: t('title'),
      description: t('description'),
      url: absoluteUrl(localizedPath(locale)),
      locale: ogLocales[locale],
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
    twitter: { card: 'summary_large_image', title: t('title'), description: t('description') },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export default async function LocaleLayout({ children }: LayoutProps<'/[locale]'>) {
  const locale = await rootLocale();
  if (!hasLocale(routing.locales, locale)) notFound();

  // Only ship the strings client components actually read; everything else renders on the server.
  const { LanguageSwitcher } = await getMessages();

  return (
    <html lang={locale} dir={localeDirection[locale]} className={fontVariables}>
      <body className="bg-bg text-fg">
        <NextIntlClientProvider messages={{ LanguageSwitcher }}>
          <MotionProvider>
            <SkipLink />
            <Header />
            {children}
            <Footer />
            <FloatingWhatsApp />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
