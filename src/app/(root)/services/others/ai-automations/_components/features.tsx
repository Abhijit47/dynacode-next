import { Button } from '@/components/ui/button';
import { ArrowRightCircleIcon } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';

export default function Features() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <FeaturesCard />
    </section>
  );
}

const features = [
  {
    id: crypto.randomUUID(),
    category: 'Intelligent Workflows',
    title: 'Self-optimizing business processes',
    details:
      'Leverage AI agents to monitor and refine your operational workflows in real-time. Our automation engines identify bottlenecks and autonomously adjust task priorities to ensure your team maintains peak efficiency without manual oversight.',
    tutorialLink: '#',
  },
  {
    id: crypto.randomUUID(),
    category: 'Customer Experience',
    title: 'Hyper-personalized user journeys',
    details:
      'Utilize advanced machine learning to deliver tailored content and product recommendations at scale. By analyzing user behavior across 2026’s top digital touchpoints, our AI automations ensure every customer interaction feels unique and relevant.',
    tutorialLink: '#',
  },
  {
    id: crypto.randomUUID(),
    category: 'Predictive Operations',
    title: 'Anticipate needs before they arise',
    details:
      'Move beyond reactive management with AI-driven predictive modeling. From inventory forecasting to resource allocation, our systems analyze historical data to predict future trends, allowing you to automate procurement and staffing ahead of demand.',
    tutorialLink: '#',
  },
  {
    id: crypto.randomUUID(),
    category: 'Data Intelligence',
    title: 'Automated insights and reporting',
    details:
      'Transform raw data into actionable business intelligence automatically. Our AI systems crawl your databases to generate natural language summaries and visual reports, providing stakeholders with instant clarity on KPIs without the need for manual data mining.',
    tutorialLink: '#',
  },
];

const FeaturesCard = () => {
  return (
    <div className=''>
      <div className=''>
        {/* <h2 className='text-pretty font-semibold text-4xl tracking-[-0.03em] sm:mx-auto sm:max-w-xl sm:text-center md:text-[2.75rem] md:leading-[1.2]'>
          Strengthen Your Strategy
        </h2>
        <p className='mt-2 text-lg text-muted-foreground sm:text-center sm:text-xl'>
          Enhance your strategy with intelligent tools designed for success.
        </p> */}
        <div className='w-full space-y-20'>
          {features.map((feature) => (
            <div
              className='flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse'
              key={feature.category}>
              <div className='aspect-4/3 w-full basis-1/2 rounded-xl border border-border/50 bg-muted' />
              <div className='shrink-0 basis-1/2'>
                <span className='font-medium text-muted-foreground text-sm uppercase'>
                  {feature.category}
                </span>
                <h4 className='my-3 font-semibold text-3xl tracking-[-0.02em]'>
                  {feature.title}
                </h4>
                <p className='text-muted-foreground'>{feature.details}</p>
                <Button asChild className='mt-6 gap-3 rounded-full' size='lg'>
                  <Link href={feature.tutorialLink as Route}>
                    Learn More <ArrowRightCircleIcon />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
