import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Reveal } from '@/components/motion/Reveal';
import { Section } from '@/components/ui/Section';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { founder } from '@/content';

/** The founder, in first person: a real face and a real background behind the brand. */
export function About() {
  const t = useTranslations('About');
  const tw = useTranslations('WhatsApp');
  const locale = useLocale();

  return (
    <Section id="about" index="04" eyebrow={t('eyebrow')} title={t('title')}>
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal>
          <figure className="relative mx-auto max-w-md">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,var(--glow-cyan),transparent_60%)] opacity-40"
            />
            <div className="overflow-hidden rounded-3xl p-1.5 card-glass">
              <Image
                src={founder.photo.src}
                width={founder.photo.width}
                height={founder.photo.height}
                alt={founder.photo.alt[locale]}
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 28rem, 100vw"
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 px-1">
              <span className="font-bold">{founder.name[locale]}</span>
              <span className="font-mono text-xs tracking-[0.14em] text-cyan uppercase he:font-sans he:text-sm he:tracking-normal">
                {founder.role[locale]}
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-pretty">
            {founder.bio.map((paragraph, index) => (
              <p key={paragraph.en} className={index === 0 ? 'text-fg' : 'text-muted'}>
                {paragraph[locale]}
              </p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {founder.facts.map((fact) => (
              <div key={fact.label.en} className="flex flex-col gap-1.5 bg-bg-elevated p-5">
                <dt className="order-last text-sm text-muted">{fact.label[locale]}</dt>
                <dd className="font-mono text-2xl font-medium text-cyan">
                  <bdi>{fact.value[locale]}</bdi>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <WhatsAppButton
              message={tw('messages.about')}
              label={t('cta')}
              size="lg"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
