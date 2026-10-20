import { Check } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { Icon } from '@/components/ui/Icon';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import type { Service } from '@/domain';

export function ServiceCard({ service }: { service: Service }) {
  const t = useTranslations('Services');
  const locale = useLocale();
  const headingId = `service-${service.id}`;

  return (
    <SpotlightCard className="flex h-full flex-col p-7 sm:p-8">
      <article aria-labelledby={headingId} className="flex h-full flex-col">
        <div className="mb-6 inline-flex size-14 items-center justify-center rounded-xl border border-line bg-bg-elevated shadow-[0_0_30px_-8px_var(--glow-cyan)]">
          <Icon name={service.icon} className="size-7" />
        </div>

        <h3
          id={headingId}
          className="font-display text-2xl font-bold en:text-lg en:font-normal en:uppercase"
        >
          {service.title[locale]}
        </h3>
        <p className="mt-3 font-medium text-fg">{service.shortDescription[locale]}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.description[locale]}</p>

        <h4 className="mt-7 mb-4 eyebrow">{t('included')}</h4>
        <ul className="flex flex-col gap-2.5 text-sm">
          {service.features[locale].map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check aria-hidden strokeWidth={1.5} className="mt-0.5 size-4 shrink-0 text-cyan" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 rounded-xl border border-line bg-bg-elevated/60 p-4 text-sm">
          <p className="mb-1 font-semibold text-cyan">{t('idealFor')}</p>
          <p className="leading-relaxed text-muted">{service.idealFor[locale]}</p>
        </div>

        <div className="mt-auto pt-8">
          <WhatsAppButton
            message={service.whatsappMessage[locale]}
            label={t('cta')}
            variant="secondary"
            className="w-full"
          />
        </div>
      </article>
    </SpotlightCard>
  );
}
