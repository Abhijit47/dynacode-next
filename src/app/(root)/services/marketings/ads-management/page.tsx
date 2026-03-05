import CTASection1 from '@/components/cta-section-01';

import AdFormatServices from './_components/ad-format-services';
import AdvertisingServices from './_components/advertising-services';
import CampaignTypes from './_components/campaign-types';
import Hero from './_components/hero';
import OptimizationFeatures from './_components/optimization-features';

export default function ADSManagementPage() {
  return (
    <main>
      <Hero />

      <AdvertisingServices />

      <CampaignTypes />

      <AdFormatServices />

      <OptimizationFeatures />

      <CTASection1 />
    </main>
  );
}
