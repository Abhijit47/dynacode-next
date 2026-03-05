import CTASection1 from '@/components/cta-section-01';
import CampaignOutcomes from './_components/campaign-outcomes';
import Hero from './_components/hero';
import InfluencerProcess from './_components/influencer-process';
import InfluencerServices from './_components/influencer-services';
import InfluencerStats from './_components/influencer-stats';
import InfluencerTiers from './_components/influencer-tiers';
import PlatformEngagement from './_components/platform-engagement';

export default function InfluencerMarketingPage() {
  return (
    <main>
      <Hero />

      <InfluencerStats />

      <InfluencerServices />

      <InfluencerTiers />

      <PlatformEngagement />

      <InfluencerProcess />

      <CampaignOutcomes />

      <CTASection1 />
    </main>
  );
}
