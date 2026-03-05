import CTASection3 from '@/components/cta-section-03';
import Features from './_components/features';
import WebDevHero from './_components/hero';
import Services from './_components/services';

export default function WebDevelopmentPage() {
  return (
    <main>
      <WebDevHero />

      <Features />

      <Services />

      <CTASection3 />
    </main>
  );
}
