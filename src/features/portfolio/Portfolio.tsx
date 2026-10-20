import { useTranslations } from 'next-intl';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { NMark } from '@/components/ui/NMark';
import { Section } from '@/components/ui/Section';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { projects } from '@/content';
import { ProjectCard } from './ProjectCard';

export function Portfolio() {
  const t = useTranslations('Portfolio');
  const tw = useTranslations('WhatsApp');

  return (
    <Section
      id="portfolio"
      index="06"
      eyebrow={t('eyebrow')}
      title={t('title')}
      description={t('description')}
    >
      <Stagger as="ul" className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem as="li" key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}

        {/* Closing tile: invites the next project. Not part of the data. */}
        <StaggerItem as="li">
          <div className="flex h-full min-h-72 flex-col items-center justify-center gap-6 rounded-2xl border border-dashed border-line-strong p-8 text-center">
            <NMark className="size-14 opacity-80" />
            <p className="font-display text-xl font-bold">{t('cta')}</p>
            <WhatsAppButton message={tw('messages.portfolio')} label={tw('cta')} />
          </div>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
