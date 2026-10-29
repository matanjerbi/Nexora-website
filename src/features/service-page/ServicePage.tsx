import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { siteConfig } from '@/config/site';
import { services } from '@/content';
import type { Service } from '@/domain';
import { localeDirection } from '@/i18n/routing';
import { localizedPath, servicePath } from '@/lib/seo';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/structured-data';
import { JsonLdScript } from '@/features/seo/JsonLd';

/** Full page for a single service: intro, what's included, long-form sections, FAQ, CTA. */
export function ServicePage({ service }: { service: Service }) {
  const t = useTranslations('ServicePage');
  const tc = useTranslations('FinalCta');
  const locale = useLocale();
  const rtl = localeDirection[locale] === 'rtl';
  const Chevron = rtl ? ChevronLeft : ChevronRight;
  const Forward = rtl ? ArrowLeft : ArrowRight;
  const home = localizedPath(locale);
  const others = services.filter((s) => s.id !== service.id);
  const faqItems = service.faqs.map((faq) => ({
    question: faq.question[locale],
    answer: faq.answer[locale],
  }));

  const structuredData = [
    serviceJsonLd(locale, service),
    breadcrumbJsonLd(locale, [
      { name: t('home'), path: '' },
      { name: service.title[locale], path: servicePath(service.slug) },
    ]),
    ...(faqItems.length > 0 ? [faqJsonLd(faqItems)] : []),
  ];

  return (
    <>
      <JsonLdScript data={structuredData} />

      {/* Intro */}
      <section aria-labelledby="service-title" className="relative isolate overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="absolute end-[-10%] -top-1/3 size-[36rem] rounded-full bg-[radial-gradient(circle,var(--glow-blue),transparent_62%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
        </div>

        <Container className="py-14 sm:py-20">
          <nav aria-label={t('breadcrumbLabel')} className="mb-10 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <a href={home} className="transition-colors hover:text-cyan">
                  {t('home')}
                </a>
              </li>
              <li aria-hidden>
                <Chevron strokeWidth={1.5} className="size-4" />
              </li>
              <li>
                <a href={`${home}#services`} className="transition-colors hover:text-cyan">
                  {t('services')}
                </a>
              </li>
              <li aria-hidden>
                <Chevron strokeWidth={1.5} className="size-4" />
              </li>
              <li aria-current="page" className="text-fg">
                {service.title[locale]}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-xl border border-line bg-bg-elevated shadow-[0_0_30px_-8px_var(--glow-cyan)]">
              <Icon name={service.icon} className="size-7" />
            </div>
            <h1
              id="service-title"
              className="font-display text-4xl leading-tight font-extrabold text-balance sm:text-5xl en:text-2xl en:font-normal en:uppercase en:sm:text-4xl"
            >
              {service.seo.title[locale]}
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty sm:text-xl">
              {service.shortDescription[locale]}
            </p>
            <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">
              {service.description[locale]}
            </p>
            <div className="mt-9">
              <WhatsAppButton
                message={service.whatsappMessage[locale]}
                label={t('cta')}
                size="lg"
                magnetic
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* What's included + who it's for */}
      <section aria-labelledby="service-included" className="py-12 sm:py-16">
        <Container className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="rounded-2xl p-7 card-glass sm:p-9">
            <h2 id="service-included" className="mb-6 eyebrow">
              {t('included')}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.features[locale].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    aria-hidden
                    strokeWidth={1.5}
                    className="mt-0.5 size-5 shrink-0 text-cyan"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-2xl border border-line bg-bg-elevated/60 p-7 sm:p-9">
            <h2 className="mb-4 eyebrow">{t('idealFor')}</h2>
            <p className="text-lg leading-relaxed text-pretty">{service.idealFor[locale]}</p>
          </Reveal>
        </Container>
      </section>

      {/* Long-form content */}
      <section className="py-12 sm:py-16">
        <Container className="flex max-w-3xl flex-col gap-12">
          {service.sections.map((section, index) => (
            <Reveal key={section.heading.en}>
              <article aria-labelledby={`service-section-${index}`}>
                <h2
                  id={`service-section-${index}`}
                  className="mb-4 font-display text-2xl leading-snug font-bold text-balance sm:text-3xl en:text-xl en:font-normal en:uppercase en:sm:text-2xl"
                >
                  {section.heading[locale]}
                </h2>
                <p className="text-base leading-relaxed text-pretty text-muted sm:text-lg">
                  {section.body[locale]}
                </p>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Service FAQ */}
      {faqItems.length > 0 && (
        <section aria-labelledby="service-faq" className="py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2
              id="service-faq"
              className="mb-8 font-display text-2xl font-bold sm:text-3xl en:text-xl en:font-normal en:uppercase en:sm:text-2xl"
            >
              {t('faqTitle')}
            </h2>
            <ul className="flex flex-col gap-3">
              {faqItems.map((faq) => (
                <li key={faq.question}>
                  <details className="group rounded-2xl transition-colors card-glass open:border-line-strong">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-2xl p-5 text-start font-semibold sm:p-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-cyan transition-transform duration-300 group-open:rotate-45">
                        <Plus aria-hidden strokeWidth={1.5} className="size-4" />
                      </span>
                    </summary>
                    <p className="px-5 pb-6 leading-relaxed text-muted group-open:animate-rise sm:px-6">
                      {faq.answer}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Other services (internal links) */}
      <section aria-labelledby="other-services" className="py-12 sm:py-16">
        <Container>
          <h2 id="other-services" className="mb-6 eyebrow">
            {t('otherServices')}
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {others.map((other) => (
              <li key={other.id}>
                <a
                  href={localizedPath(locale, servicePath(other.slug))}
                  className="group flex h-full items-start gap-4 rounded-2xl p-6 transition-colors card-glass hover:border-line-strong"
                >
                  <Icon name={other.icon} className="size-6 shrink-0" />
                  <span className="flex flex-col gap-1">
                    <span className="font-semibold group-hover:text-cyan">
                      {other.title[locale]}
                    </span>
                    <span className="text-sm text-muted">{other.shortDescription[locale]}</span>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-cyan">
                      {t('learnMore')}
                      <Forward aria-hidden strokeWidth={1.5} className="size-4" />
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Closing CTA */}
      <section aria-labelledby="service-cta" className="pt-6 pb-24 sm:pb-32">
        <Container>
          <div className="relative isolate overflow-hidden rounded-3xl bg-cta px-6 py-14 text-center text-bg sm:px-12 sm:py-20">
            <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40" />
            <h2
              id="service-cta"
              className="mx-auto max-w-2xl font-display text-2xl leading-tight font-extrabold text-balance sm:text-4xl en:text-xl en:font-normal en:uppercase en:sm:text-3xl"
            >
              {tc('title')}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base font-medium sm:text-lg">
              {tc('description')}
            </p>
            <div className="mt-9 flex flex-col items-center gap-5">
              <WhatsAppButton
                message={service.whatsappMessage[locale]}
                label={t('cta')}
                variant="inverse"
                size="lg"
              />
              <p className="text-sm font-medium">
                {t('callOr')}{' '}
                <a
                  href={siteConfig.phone.href}
                  dir="ltr"
                  className="font-bold underline decoration-bg/40 underline-offset-4 hover:decoration-bg"
                >
                  {siteConfig.phone.display}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
