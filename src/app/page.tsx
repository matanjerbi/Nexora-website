import { Reveal } from '@/components/motion/Reveal';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';
import { NMark } from '@/components/ui/NMark';
import { Section } from '@/components/ui/Section';

/** Temporary design-system preview; replaced by the localized home page. */
export default function Home() {
  return (
    <main>
      <Section
        id="preview"
        eyebrow="Design system"
        title="Nexora"
        background={<div className="absolute inset-0 bg-grid" />}
      >
        <div className="flex flex-col items-center gap-10">
          <NMark animated className="size-40" />
          <Logo />
          <MagneticButton>
            <Button href="#preview" size="lg">
              <Icon name="rocket" className="text-bg" /> CTA
            </Button>
          </MagneticButton>
          <Reveal>
            <SpotlightCard className="p-8">
              <Icon name="shield-check" />
            </SpotlightCard>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
