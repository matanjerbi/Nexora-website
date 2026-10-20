import { useLocale, useTranslations } from 'next-intl';
import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { Divider } from '@/components/ui/Divider';
import { Icon } from '@/components/ui/Icon';
import { capabilities } from '@/content';
import { cn } from '@/lib/cn';

/** The four brand pillars, laid out like the logo's bottom row with thin cyan dividers. */
export function CapabilitiesStrip() {
  const t = useTranslations('Capabilities');
  const locale = useLocale();

  return (
    <section
      aria-labelledby="capabilities-title"
      className="border-y border-line bg-bg-elevated/50"
    >
      <h2 id="capabilities-title" className="sr-only">
        {t('title')}
      </h2>
      <Container>
        <Reveal>
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <li
                key={capability.id}
                className="relative flex flex-col items-center gap-4 px-3 py-10 text-center"
              >
                {index > 0 && (
                  <Divider
                    className={cn(
                      'absolute inset-y-8 start-0',
                      // 2x2 on mobile: only the second column gets a divider.
                      index % 2 === 0 && 'hidden lg:block',
                    )}
                  />
                )}
                <Icon name={capability.icon} className="size-10" />
                <div>
                  <h3 className="font-mono text-xs font-medium tracking-[0.14em] text-fg uppercase he:text-sm he:tracking-normal">
                    {capability.title[locale]}
                  </h3>
                  <p className="mt-2 text-xs text-muted sm:text-sm">
                    {capability.description[locale]}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
