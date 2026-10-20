import { Hero } from '@/features/hero/Hero';
import { CapabilitiesStrip } from '@/features/services/CapabilitiesStrip';
import { Services } from '@/features/services/Services';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <CapabilitiesStrip />
    </main>
  );
}
