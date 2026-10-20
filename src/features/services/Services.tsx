import { useTranslations } from 'next-intl';
import { Parallax } from '@/components/motion/Parallax';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { Section } from '@/components/ui/Section';
import { services } from '@/content';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const t = useTranslations('Services');

  return (
    <Section
      id="services"
      index="02"
      eyebrow={t('eyebrow')}
      title={t('title')}
      description={t('description')}
      background={
        <Parallax>
          <div className="absolute inset-x-0 top-1/3 mx-auto size-[40rem] rounded-full bg-[radial-gradient(circle,var(--glow-deep),transparent_65%)] opacity-60" />
        </Parallax>
      }
    >
      <Stagger as="ul" className="grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <StaggerItem as="li" key={service.id}>
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
