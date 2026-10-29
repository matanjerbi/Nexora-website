import type { Locale, Service } from '@/domain';
import { siteConfig } from '@/config/site';
import { absoluteUrl, localizedPath, servicePath } from '@/lib/seo';

/** schema.org JSON-LD builders. Pure functions: content in, plain objects out. */

type QA = { question: string; answer: string };
type Crumb = { name: string; path: string };

const organizationId = () => `${absoluteUrl('/')}#organization`;
const telephone = () => siteConfig.phone.href.replace('tel:', '');

function areaServed(locale: Locale) {
  return [
    ...siteConfig.serviceArea.cities.map((city) => ({ '@type': 'City', name: city[locale] })),
    { '@type': 'Country', name: siteConfig.serviceArea.country[locale] },
  ];
}

/** The studio itself. Referenced from every page by its @id. */
export function organizationJsonLd(
  locale: Locale,
  { description, services }: { description: string; services: Service[] },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': organizationId(),
    name: siteConfig.name,
    alternateName: `${siteConfig.name} | ${siteConfig.tagline[locale]}`,
    description,
    url: absoluteUrl(localizedPath(locale)),
    logo: absoluteUrl('/apple-icon'),
    image: absoluteUrl(`${localizedPath(locale)}/opengraph-image`),
    telephone: telephone(),
    email: siteConfig.email,
    areaServed: areaServed(locale),
    knowsLanguage: ['he', 'en'],
    inLanguage: locale,
    ...(siteConfig.sameAs.length > 0 && { sameAs: siteConfig.sameAs }),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: telephone(),
      email: siteConfig.email,
      contactType: 'customer service',
      availableLanguage: ['Hebrew', 'English'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: siteConfig.tagline[locale],
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title[locale],
          description: service.shortDescription[locale],
          url: absoluteUrl(localizedPath(locale, servicePath(service.slug))),
        },
      })),
    },
  };
}

/** A single service, provided by the organization. */
export function serviceJsonLd(locale: Locale, service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.seo.title[locale],
    serviceType: service.title[locale],
    description: service.seo.description[locale],
    url: absoluteUrl(localizedPath(locale, servicePath(service.slug))),
    inLanguage: locale,
    provider: { '@type': 'ProfessionalService', '@id': organizationId(), name: siteConfig.name },
    areaServed: areaServed(locale),
  };
}

export function faqJsonLd(items: QA[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/** Breadcrumb trail. Paths are locale-less; the locale prefix is added here. */
export function breadcrumbJsonLd(locale: Locale, crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(localizedPath(locale, crumb.path)),
    })),
  };
}
