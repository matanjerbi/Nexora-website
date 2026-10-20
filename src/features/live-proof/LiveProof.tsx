import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/Section';
import { medianPageWeight } from '@/content';
import { LiveMetricsPanel } from './LiveMetricsPanel';

/** "Don't trust us, measure it": this page's real performance, measured in the visitor's browser. */
export function LiveProof() {
  const t = useTranslations('Proof');

  return (
    <Section
      id="proof"
      index="01"
      eyebrow={t('eyebrow')}
      title={t('title')}
      description={t('description')}
    >
      <LiveMetricsPanel
        medianKb={medianPageWeight.kilobytes}
        sourceUrl={medianPageWeight.url}
        labels={{
          live: t('live'),
          measuring: t('measuring'),
          unavailable: t('unavailable'),
          paint: { label: t('paint.label'), hint: t('paint.hint'), unit: t('paint.unit') },
          weight: { label: t('weight.label'), hint: t('weight.hint'), unit: t('weight.unit') },
          requests: { label: t('requests.label'), hint: t('requests.hint') },
          cls: { label: t('cls.label'), hint: t('cls.hint') },
          compare: {
            title: t('compare.title'),
            thisPage: t('compare.thisPage'),
            average: t('compare.average'),
            lighter: t.raw('compare.lighter') as string,
            source: t('compare.source', { source: medianPageWeight.source }),
          },
        }}
      />
    </Section>
  );
}
