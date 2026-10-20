import { useLocale, useTranslations } from 'next-intl';
import { Parallax } from '@/components/motion/Parallax';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { Card } from '@/components/ui/Card';
import { GradientText } from '@/components/ui/GradientText';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { benefits, differentiators } from '@/content';
import { cn } from '@/lib/cn';

export function WhyNexora() {
  const t = useTranslations('Why');
  const locale = useLocale();

  return (
    <Section
      id="why"
      eyebrow={t('eyebrow')}
      title={
        <>
          {t('title')} <GradientText className="block">{t('titleAccent')}</GradientText>
        </>
      }
      description={t('description')}
      background={
        <Parallax offset={80}>
          <div className="absolute inset-0 bg-grid opacity-50" />
        </Parallax>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <h3 className="mb-6 eyebrow">{t('backgroundTitle')}</h3>
          <Stagger as="ul" className="flex flex-col">
            {differentiators.map((item) => (
              <StaggerItem
                as="li"
                key={item.id}
                className="flex gap-5 border-b border-line py-6 first:pt-0 last:border-b-0"
              >
                <span className="relative mt-1 inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-line bg-bg-elevated">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold">{item.title[locale]}</h4>
                  <p className="mt-2 leading-relaxed text-muted">{item.description[locale]}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <h3 className="mb-6 eyebrow">{t('benefitsTitle')}</h3>
          <Stagger as="ul" className="grid gap-4 sm:grid-cols-2" stagger={0.08}>
            {benefits.map((item, index) => (
              <StaggerItem
                as="li"
                key={item.id}
                className={cn(index === benefits.length - 1 && 'sm:col-span-2')}
              >
                <Card className="h-full p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <Icon name={item.icon} className="size-5" />
                    <h4 className="font-semibold">{item.title[locale]}</h4>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description[locale]}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
