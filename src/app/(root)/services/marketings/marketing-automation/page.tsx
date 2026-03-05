import CTASection1 from '@/components/cta-section-01';
import AutomationFlow from './_components/automation-flow';
import AutomationServices from './_components/automation-services';
import AutomationStats from './_components/automation-stats';
import EfficiencyStats from './_components/efficiency-stats';
import EmailIntegrations from './_components/email-integrations';
import Hero from './_components/hero';

export default function MarketingAutomationPage() {
  return (
    <main>
      <Hero />

      <AutomationServices />

      <AutomationStats />

      <AutomationFlow />

      <EmailIntegrations />

      <EfficiencyStats />

      <CTASection1 />
    </main>
  );
}
