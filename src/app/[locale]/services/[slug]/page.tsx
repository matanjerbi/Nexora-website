import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { locale as rootLocale } from 'next/root-params';
import { services } from '@/content';
import { ServicePage } from '@/features/service-page/ServicePage';
import { routing } from '@/i18n/routing';
import { localeAlternates, openGraphFor, servicePath } from '@/lib/seo';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const findService = (slug: string) => services.find((service) => service.slug === slug);

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/services/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};

  const requested = await rootLocale();
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const path = servicePath(service.slug);
  const title = service.seo.title[locale];
  const description = service.seo.description[locale];

  return {
    title,
    description,
    alternates: localeAlternates(locale, path),
    openGraph: openGraphFor(locale, { title, description, path }),
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ServiceRoute({ params }: PageProps<'/[locale]/services/[slug]'>) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <ServicePage service={service} />
    </main>
  );
}
