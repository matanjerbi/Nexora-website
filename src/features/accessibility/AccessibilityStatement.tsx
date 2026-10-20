import { Mail, Phone } from 'lucide-react';
import { useFormatter, useLocale, useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { siteConfig } from '@/config/site';
import { accessibilityStatement as statement } from '@/content';
import { whatsappLink } from '@/lib/whatsapp';

export function AccessibilityStatement() {
  const t = useTranslations('Accessibility');
  const tf = useTranslations('Footer');
  const tw = useTranslations('WhatsApp');
  const locale = useLocale();
  const format = useFormatter();

  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <article aria-labelledby="statement-title">
        <header className="mb-12 border-b border-line pb-10">
          <h1 id="statement-title" className="font-display text-4xl font-extrabold">
            {t('title')}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {t('updated', {
              date: format.dateTime(new Date(statement.updated), { dateStyle: 'long' }),
            })}
          </p>
          <p className="mt-6 text-lg leading-relaxed">{statement.intro[locale]}</p>
        </header>

        <div className="flex flex-col gap-10">
          {statement.sections.map((section) => (
            <section key={section.id} aria-labelledby={`statement-${section.id}`}>
              <h2 id={`statement-${section.id}`} className="mb-4 text-xl font-bold text-cyan">
                {section.heading[locale]}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.en} className="leading-relaxed text-muted">
                  {paragraph[locale]}
                </p>
              ))}
              {section.items && (
                <ul className="flex list-disc flex-col gap-2 ps-5 leading-relaxed text-muted marker:text-cyan">
                  {section.items[locale].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section
            aria-labelledby="statement-contact"
            className="rounded-2xl p-6 card-glass sm:p-8"
          >
            <h2 id="statement-contact" className="mb-4 text-xl font-bold text-cyan">
              {t('contactTitle')}
            </h2>
            <p className="leading-relaxed text-muted">{statement.contactIntro[locale]}</p>
            <ul className="mt-6 flex flex-col gap-3">
              <li>
                <a
                  href={siteConfig.phone.href}
                  className="inline-flex items-center gap-3 hover:text-cyan"
                >
                  <Phone aria-hidden strokeWidth={1.5} className="size-5 text-cyan" />
                  <span className="sr-only">{tf('phone')}: </span>
                  <span dir="ltr">{siteConfig.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-3 hover:text-cyan"
                >
                  <Mail aria-hidden strokeWidth={1.5} className="size-5 text-cyan" />
                  <span className="sr-only">{tf('email')}: </span>
                  <span dir="ltr">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(tw('messages.accessibility'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-cyan"
                >
                  <WhatsAppIcon className="size-5 text-cyan" />
                  {tw('short')}
                  <span className="sr-only">{tw('newTab')}</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </Container>
  );
}
