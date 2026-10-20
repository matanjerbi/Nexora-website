import { useLocale, useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';
import { founder, services } from '@/content';
import { absoluteUrl, localizedPath } from '@/lib/seo';

/** ProfessionalService structured data for the home page. */
export function JsonLd() {
  const t = useTranslations('Metadata');
  const locale = useLocale();
  const url = absoluteUrl(localizedPath(locale));

  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${absoluteUrl('/')}#organization`,
    name: siteConfig.name,
    alternateName: `${siteConfig.name} | ${siteConfig.tagline[locale]}`,
    description: t('description'),
    url,
    logo: absoluteUrl('/apple-icon'),
    image: absoluteUrl(`${localizedPath(locale)}/opengraph-image`),
    telephone: siteConfig.phone.href.replace('tel:', ''),
    email: siteConfig.email,
    founder: {
      '@type': 'Person',
      name: founder.name[locale],
      jobTitle: founder.role[locale],
      image: absoluteUrl(founder.photo.src),
    },
    areaServed: { '@type': 'Country', name: 'Israel' },
    knowsLanguage: ['he', 'en'],
    inLanguage: locale,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone.href.replace('tel:', ''),
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
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values are our own static content. Escape `<` defensively.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
