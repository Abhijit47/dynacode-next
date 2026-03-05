import CTASection1 from '@/components/cta-section-01';

import EmailCampaignStats from './_components/email-campaign-stats';
import EmailIntegrations from './_components/email-integrations';
import EmailMarketingProcess from './_components/email-marketing-process';
import EmailMarketingServices from './_components/email-marketing-services';
import EmailMarketingStats from './_components/email-marketing-stats';
import Hero from './_components/hero';

export default function EmailMarketingPage() {
  return (
    <main>
      <Hero />

      <EmailMarketingStats />

      <EmailMarketingServices />

      <EmailCampaignStats />

      <EmailMarketingProcess />

      <EmailIntegrations />

      <CTASection1 />
    </main>
  );
}
