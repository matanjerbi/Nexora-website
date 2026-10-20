import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import type { Project } from '@/domain';
import { cn } from '@/lib/cn';

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations('Portfolio');
  const tw = useTranslations('WhatsApp');
  const locale = useLocale();
  const headingId = `project-${project.id}`;

  return (
    <SpotlightCard className="h-full">
      <article aria-labelledby={headingId} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
          <Image
            src={project.image.src}
            alt={project.image.alt[locale]}
            fill
            sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
            unoptimized={project.image.src.endsWith('.svg')}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span
            className={cn(
              'absolute start-4 top-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm',
              project.status === 'live'
                ? 'border-cyan/40 bg-bg/70 text-cyan'
                : 'border-line-strong bg-bg/70 text-muted',
            )}
          >
            {t(`status.${project.status}`)}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="mb-3 eyebrow">{project.category[locale]}</p>
          <h3 id={headingId} className="font-brand text-xl tracking-wider">
            <bdi>{project.title}</bdi>
          </h3>
          <p className="mt-3 leading-relaxed text-muted">{project.description[locale]}</p>

          <h4 className="sr-only">{t('tech')}</h4>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line bg-bg-elevated px-3 py-1 text-xs text-muted"
              >
                <bdi>{tech}</bdi>
              </li>
            ))}
          </ul>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-cyan hover:underline"
            >
              {t('visit')}
              <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-4 rtl:-scale-x-100" />
              <span className="sr-only">{tw('newTab')}</span>
            </a>
          )}
        </div>
      </article>
    </SpotlightCard>
  );
}
