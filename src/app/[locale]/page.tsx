import { Faq } from '@/features/faq/Faq';
import { FinalCta } from '@/features/final-cta/FinalCta';
import { Hero } from '@/features/hero/Hero';
import { LiveProof } from '@/features/live-proof/LiveProof';
import { Portfolio } from '@/features/portfolio/Portfolio';
import { Process } from '@/features/process/Process';
import { JsonLd } from '@/features/seo/JsonLd';
import { WhyNexora } from '@/features/why-nexora/WhyNexora';
import { CapabilitiesStrip } from '@/features/services/CapabilitiesStrip';
import { Services } from '@/features/services/Services';

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <JsonLd />
      <Hero />
      <LiveProof />
      <Services />
      <CapabilitiesStrip />
      <WhyNexora />
      <Process />
      <Portfolio />
      <Faq />
      <FinalCta />
    </main>
  );
}
