import CTASection1 from '@/components/cta-section-01';

import Hero from './_components/home';
import OurProcess from './_components/process';
import SEOServices from './_components/seo-services';
import SMMServices from './_components/smm-services';

export default function SEOPage() {
  return (
    <main>
      <Hero />

      <SEOServices />

      <SMMServices />

      <OurProcess />

      <CTASection1 />
    </main>
  );
}
