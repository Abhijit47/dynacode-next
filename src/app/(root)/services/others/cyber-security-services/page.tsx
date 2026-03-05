import CTASection1 from '@/components/cta-section-01';
import CyberSecurityServices from './_components/cyber-security-services';
import Features from './_components/features';
import Hero from './_components/hero';
import Tools from './_components/tools';

export default function CyberSecurityServicesPage() {
  return (
    <main>
      <Hero />

      <Tools />

      <Features />

      <CyberSecurityServices />

      <CTASection1 />
    </main>
  );
}
