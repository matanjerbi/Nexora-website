import { Hero } from '@/features/hero/Hero';
import { Portfolio } from '@/features/portfolio/Portfolio';
import { Process } from '@/features/process/Process';
import { WhyNexora } from '@/features/why-nexora/WhyNexora';
import { CapabilitiesStrip } from '@/features/services/CapabilitiesStrip';
import { Services } from '@/features/services/Services';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <CapabilitiesStrip />
      <WhyNexora />
      <Process />
      <Portfolio />
    </main>
  );
}
