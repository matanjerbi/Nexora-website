import { ArrowDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { NMark } from '@/components/ui/NMark';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

/** One line of the headline, revealed by sliding up inside a clipping mask. */
function RevealLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <span className="block animate-reveal-up" style={{ animationDelay: `${delay}ms` }}>
        {children}
      </span>
    </span>
  );
}

export function Hero() {
  const t = useTranslations('Hero');
  const tw = useTranslations('WhatsApp');

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* Background: technical grid + two slowly drifting brand glows (transform-only). */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute end-[-10%] -top-1/4 size-[42rem] animate-glow-drift rounded-full bg-[radial-gradient(circle,var(--glow-blue),transparent_62%)]" />
        <div className="absolute start-[-15%] bottom-[-30%] size-[36rem] animate-glow-drift rounded-full bg-[radial-gradient(circle,var(--glow-deep),transparent_62%)] [animation-delay:-7s]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <Container className="grid min-h-[calc(100svh-4.5rem)] items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.25fr_1fr] lg:py-24">
        <div className="order-2 lg:order-1">
          <p className="mb-6 flex animate-rise items-center gap-3 eyebrow">
            <span aria-hidden className="h-px w-8 bg-cyan" />
            {t('eyebrow')}
          </p>

          <h1
            id="hero-title"
            className="font-display text-[2.6rem] leading-[1.08] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-[4.1rem] en:text-[1.4rem] en:leading-[1.25] en:font-normal en:tracking-normal en:uppercase en:sm:text-4xl en:lg:text-[2.6rem]"
          >
            <RevealLine delay={80}>{t('titleLine1')}</RevealLine>
            <RevealLine delay={220}>
              <span className="text-gradient">{t('titleLine2')}</span>
            </RevealLine>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-muted sm:text-xl">
            {t('subtitle')}
          </p>

          <div
            className="mt-10 flex animate-rise flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '350ms' }}
          >
            <WhatsAppButton
              message={tw('messages.hero')}
              label={t('primaryCta')}
              size="lg"
              magnetic
              className="w-full sm:w-auto"
            />
            <Button href="#services" variant="secondary" size="lg" className="w-full sm:w-auto">
              {t('secondaryCta')}
              <ArrowDown aria-hidden strokeWidth={1.5} className="size-4" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted">{t('note')}</p>
        </div>

        <div className="relative order-1 mx-auto lg:order-2">
          <div
            aria-hidden
            className="absolute inset-[-25%] -z-10 rounded-full bg-[radial-gradient(circle,var(--glow-cyan),transparent_60%)] opacity-50"
          />
          <NMark animated className="size-28 sm:size-48 lg:size-80" />
        </div>
      </Container>
    </section>
  );
}
