import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { NMark } from '@/components/ui/NMark';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { siteConfig } from '@/config/site';

/** Closing call to action on a bright brand gradient (dark text keeps contrast AA). */
export function FinalCta() {
  const t = useTranslations('FinalCta');
  const tw = useTranslations('WhatsApp');

  return (
    <section aria-labelledby="final-cta-title" className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-cta px-6 py-16 text-center text-bg shadow-[0_30px_100px_-30px_var(--glow-cyan)] sm:px-12 sm:py-24">
            <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40" />
            <NMark className="absolute -end-16 -bottom-16 -z-10 size-72 opacity-15 sm:size-96" />

            <h2
              id="final-cta-title"
              className="mx-auto max-w-3xl font-display text-3xl leading-tight font-extrabold text-balance sm:text-5xl"
            >
              {t('title')}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base font-medium sm:text-lg">
              {t('description')}
            </p>

            <div className="mt-10 flex flex-col items-center gap-5">
              <WhatsAppButton
                message={tw('messages.finalCta')}
                label={t('cta')}
                variant="inverse"
                size="lg"
                magnetic
              />
              <p className="text-sm font-medium">
                {t('or')}{' '}
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
        </Reveal>
      </Container>
    </section>
  );
}
