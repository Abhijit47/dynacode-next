import CTASection1 from '@/components/cta-section-01';
import AnalysisServices from './_components/analysis-services';
import Features from './_components/features';
import Hero from './_components/hero';
import Tools from './_components/tools';

export default function DataAnalyticsPage() {
  return (
    <main>
      <Hero />

      <Tools />

      <Features />

      <AnalysisServices />

      <CTASection1 />
    </main>
  );
}
