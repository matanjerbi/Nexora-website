import { Plus } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { faqs } from '@/content';

/**
 * FAQ accordion on native <details>/<summary>: keyboard and screen-reader support
 * with zero JavaScript. The answer reveal animates transform/opacity only.
 */
export function Faq() {
  const t = useTranslations('Faq');
  const tw = useTranslations('WhatsApp');
  const locale = useLocale();

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 eyebrow">{t('eyebrow')}</p>
          <h2
            id="faq-title"
            className="font-display text-3xl leading-tight font-bold text-balance sm:text-4xl"
          >
            {t('title')}
          </h2>
          <p className="mt-5 text-muted sm:text-lg">{t('description')}</p>
          <div className="mt-8 hidden lg:block">
            <p className="mb-4 text-sm font-semibold">{t('more')}</p>
            <WhatsAppButton message={tw('messages.faq')} label={t('ask')} variant="secondary" />
          </div>
        </div>

        <Reveal>
          <ul className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <li key={faq.id}>
                <details className="group rounded-2xl transition-colors card-glass open:border-line-strong">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-2xl p-5 text-start font-semibold sm:p-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                    {faq.question[locale]}
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-cyan transition-transform duration-300 group-open:rotate-45">
                      <Plus aria-hidden strokeWidth={1.5} className="size-4" />
                    </span>
                  </summary>
                  <p className="px-5 pb-6 leading-relaxed text-muted group-open:animate-rise sm:px-6">
                    {faq.answer[locale]}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="lg:hidden">
          <p className="mb-4 text-sm font-semibold">{t('more')}</p>
          <WhatsAppButton
            message={tw('messages.faq')}
            label={t('ask')}
            variant="secondary"
            className="w-full"
          />
        </div>
      </Container>
    </section>
  );
}
