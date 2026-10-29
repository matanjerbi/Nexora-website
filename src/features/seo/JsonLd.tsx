import { useLocale, useTranslations } from 'next-intl';
import { faqs, services } from '@/content';
import { faqJsonLd, organizationJsonLd } from '@/lib/structured-data';

/** Renders one or more JSON-LD blocks. */
export function JsonLdScript({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values are our own static content. Escape `<` defensively.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

/** Home page structured data: the organization and the general FAQ. */
export function JsonLd() {
  const t = useTranslations('Metadata');
  const locale = useLocale();

  return (
    <JsonLdScript
      data={[
        organizationJsonLd(locale, { description: t('description'), services }),
        faqJsonLd(
          faqs.map((faq) => ({ question: faq.question[locale], answer: faq.answer[locale] })),
        ),
      ]}
    />
  );
}
