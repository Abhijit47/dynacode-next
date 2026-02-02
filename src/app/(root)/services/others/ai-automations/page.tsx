import { Icons } from '@/components/card-6';
import CTASection1 from '@/components/cta-section-01';
import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import TechnologyPartners from '@/components/shared/technology-partners';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IconHandClick } from '@tabler/icons-react';
import { ArrowRightCircleIcon } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';

export default function AIAutomationsPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  AI Automations Services
                </h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Welcome to DYNACODE, your AI automation partner. We streamline
                  operations with cutting-edge AI solutions, enhancing
                  efficiency and productivity. Experience the future of
                  automation with our innovative technologies.
                </p>
              </CardDescription>
              <CoolMode
              // options={{
              //   particle:
              //     'https://pbs.twimg.com/profile_images/1782811051504885763/YR5-kWOI_400x400.jpg',
              // }}
              >
                <Link
                  href='/contact-us'
                  className={buttonVariants({
                    size: 'lg',
                    className: 'rounded-full!',
                  })}>
                  Get in touch <IconHandClick className={'size-5'} />
                </Link>
              </CoolMode>
            </CardContent>
          </Card>
        </WarpBackground>
      </section>

      <section
        className={
          'container mx-auto w-full max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Our Technology Partners
            </h3>
            <p>
              We collaborate with industry-leading technology partners to
              deliver cutting-edge data analytics solutions that drive business
              success.
            </p>
          </hgroup>

          <TechnologyPartners />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <Features />
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Our AI Automation Services
            </h3>
            <p>
              Automate workflows and decisions with AI that scales with your
              business
            </p>
          </hgroup>

          <Services />
        </div>
      </section>

      <CTASection1 />
    </main>
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

const Features = () => {
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

const aiAutomationServices = [
  {
    id: crypto.randomUUID(),
    title: 'Process Automation',
    description: 'Automate repetitive tasks and approvals',
    items: ['RPA', 'Workflow Engines', 'Form Automation', 'Doc Processing'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Ai Assistants',
    description: 'Chatbots and copilots that help teams move faster',
    items: ['LLMs', 'Retrieval (RAG)', 'Multi-channel Chat', 'Analytics'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Predictive Models',
    description: 'Forecast demand, churn, and risk using ML',
    items: [
      'Time Series',
      'Propensity Models',
      'Anomaly Detection',
      'Optimization',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Marketing Automation',
    description: 'Personalize journeys and optimize campaigns',
    items: ['Segmentation', 'Scoring', 'Journey Builder', 'Attribution'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Data Pipelines',
    description: 'Reliable data flows for ML/AI systems',
    items: ['ETL/ELT', 'Vector Stores', 'Feature Stores', 'Monitoring'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Mlops & Governance',
    description: 'Ship models reliably with controls and visibility',
    items: [
      'Model Registry',
      'CI/CD for ML',
      'Drift Monitoring',
      'Cost Control',
    ],
  },
];

const Services = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {aiAutomationServices.map((service) => (
        <Card
          key={service.id}
          className='relative rounded-none shadow-none border-double'>
          <Icons />
          <CardHeader>
            <CardTitle>
              <h4>{service.title}</h4>
            </CardTitle>
            <CardDescription>
              <p>{service.description}</p>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ul className='space-y-2'>
              {service.items.map((item, index) => (
                <li key={index} className='list-disc list-inside'>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
