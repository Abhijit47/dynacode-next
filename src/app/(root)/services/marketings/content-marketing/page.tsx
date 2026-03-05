import CTASection1 from '@/components/cta-section-01';

import ContentBenefits from './_components/content-benefits';
import ContentMarketingServices from './_components/content-marketing-services';
import ContentMarketingStats from './_components/content-marketing-stats';
import ContentProcess from './_components/content-process';
import ContentTypes from './_components/content-types';
import Hero from './_components/hero';

export default function ContentMarketingPage() {
  return (
    <main>
      <Hero />

      <ContentBenefits />

      <ContentMarketingServices />

      <ContentTypes />

      <ContentProcess />

      <ContentMarketingStats />

      <CTASection1 />
    </main>
  );
}
