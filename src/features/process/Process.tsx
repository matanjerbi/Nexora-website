import { useLocale, useTranslations } from 'next-intl';
import { GrowLine } from '@/components/motion/GrowLine';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { processSteps } from '@/content';

export function Process() {
  const t = useTranslations('Process');
  const locale = useLocale();

  return (
    <Section
      id="process"
      index="05"
      eyebrow={t('eyebrow')}
      title={t('title')}
      description={t('description')}
    >
      <div className="relative">
        {/* Connector: vertical along the nodes on mobile, horizontal through them on desktop. */}
        <GrowLine axis="y" className="absolute inset-y-7 start-7 lg:hidden" />
        <GrowLine axis="x" className="absolute inset-x-[10%] top-7 hidden lg:block" />

        <Stagger as="ol" stagger={0.15} className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step, index) => (
            <StaggerItem
              as="li"
              key={step.id}
              className="flex gap-5 lg:flex-col lg:items-center lg:text-center"
            >
              <span className="relative inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-bg shadow-[0_0_30px_-6px_var(--glow-cyan)] card-glass">
                <Icon name={step.icon} />
              </span>
              <div className="pt-1 lg:pt-0">
                <p className="mb-2 eyebrow">
                  {t('step', { number: String(index + 1).padStart(2, '0') })}
                </p>
                <h3 className="text-lg font-semibold">{step.title[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description[locale]}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
