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

export default function DataAnalyticsPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  Data Analytics Services
                </h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Welcome to DYNACODE, your trusted data analysis partner. We
                  transform complex data into actionable insights, driving
                  informed decisions and business growth. Unlock the power of
                  your data with us.
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
              Our Data & Business Analysis Services
            </h3>
            <p>
              Turn raw data into decisions with analytics, BI, and predictive
              modeling
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
    category: 'Business Intelligence',
    title: 'Visualise your performance in real-time',
    details:
      'Transform complex data sets into intuitive, interactive dashboards using Power BI and Tableau. Our 2026 BI solutions provide a single source of truth for your KPIs, enabling stakeholders to spot trends and make data-driven decisions instantly.',
    tutorialLink: '#',
  },
  {
    id: crypto.randomUUID(),
    category: 'Predictive Analytics',
    title: 'Anticipate market shifts with ML',
    details:
      'Utilise advanced machine learning models to forecast demand, customer churn, and market volatility. We analyze your historical data to provide prescriptive insights, helping you stay proactive rather than reactive in a rapidly changing economy.',
    tutorialLink: '#',
  },
  {
    id: crypto.randomUUID(),
    category: 'Customer Insights',
    title: 'Deep-dive into user behavior',
    details:
      'Unlock the "why" behind your user actions with cohort analysis and multi-touch attribution. We segment your audience to identify high-value behaviors, allowing you to optimize marketing spend and personalize the customer journey for maximum LTV.',
    tutorialLink: '#',
  },
  {
    id: crypto.randomUUID(),
    category: 'Data Governance',
    title: 'Ensure accuracy and compliance',
    details:
      'Build trust in your data with robust quality checks and master data management. We implement data contracts and lineage tracking to ensure that your reports are always accurate, secure, and compliant with evolving global privacy standards.',
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

const analysisServices = [
  {
    id: crypto.randomUUID(),
    title: 'Data Engineering',
    description:
      'Pipelines and models that keep data clean, reliable, and fresh',
    items: ['ETL/ELT', 'Data Lakes/Warehouses', 'dbt/Delta', 'Airflow/Prefect'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Bi & Dashboards',
    description: 'Self-serve dashboards and KPI reporting for stakeholders',
    items: [
      'Power BI/Tableau',
      'Looker/Metabase',
      'Semantic Layer',
      'Data Governance',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Analytics & Insights',
    description: 'Descriptive, diagnostic, and prescriptive analysis',
    items: [
      'Cohort/Segmentation',
      'Funnel Analysis',
      'CLTV & Churn',
      'Marketing Mix Models',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Forecasting & Ml',
    description: 'Predictive models that drive strategy and revenue',
    items: [
      'Time Series',
      'Classification/Regression',
      'Recommendation',
      'A/B Experimentation',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Data Quality & Mdm',
    description: 'Trustworthy data with lineage, quality checks, and ownership',
    items: [
      'Great Expectations',
      'Data Catalog',
      'Master Data',
      'Data Contracts',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Analytics Ops',
    description: 'Productionize notebooks and models, monitor and improve',
    items: ['MLOps', 'Versioning', 'Model Monitoring', 'Cost Control'],
  },
];

const Services = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {analysisServices.map((service) => (
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
