import { Icons } from '@/components/card-6';
import CTASection1 from '@/components/cta-section-01';
import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import Stats08 from '@/components/stats-08';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IconHandClick, IconTrendingUp } from '@tabler/icons-react';
import Link from 'next/link';

export default function ContentMarketingPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  Content Marketing Services
                </h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Create valuable, engaging content that attracts your ideal
                  customers, builds trust, and drives profitable customer action
                  across all digital channels.
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
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Why Content Marketing Matters
            </h3>
            <p>
              Fast, scalable websites and apps built with modern best practices
            </p>
          </hgroup>

          <ContentBenefits />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Our Content Marketing Services
            </h3>
            <p>
              Fast, scalable websites and apps built with modern best practices
            </p>
          </hgroup>

          <ContentMarketings />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Content Types That Drive Results
            </h3>
            <p>
              Fast, scalable websites and apps built with modern best practices
            </p>
          </hgroup>

          <Stats08 />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Our Content Marketing Process
            </h3>
            <p>
              Fast, scalable websites and apps built with modern best practices
            </p>
          </hgroup>

          <ContentProcesses />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Content Marketing Statistics
            </h3>
            <p>
              Fast, scalable websites and apps built with modern best practices
            </p>
          </hgroup>

          <MarketingStatistics />
        </div>
      </section>

      <CTASection1 />
    </main>
  );
}

const contentBenefits = [
  {
    id: crypto.randomUUID(),
    title: 'Increased Brand Awareness',
    description:
      'Quality content puts your brand in front of the right audience',
  },
  {
    id: crypto.randomUUID(),
    title: 'Better Search Rankings',
    description:
      'SEO-optimized content improves your visibility in search results',
  },
  {
    id: crypto.randomUUID(),
    title: 'Lead Generation',
    description: 'Valuable content attracts and converts prospects into leads',
  },
  {
    id: crypto.randomUUID(),
    title: 'Customer Education',
    description:
      'Educational content builds trust and positions you as an expert',
  },
  {
    id: crypto.randomUUID(),
    title: 'Cost-Effective Marketing',
    description: 'Content marketing costs 62% less than traditional marketing',
  },
  {
    id: crypto.randomUUID(),
    title: 'Long-Term Results',
    description:
      'Quality content continues to drive results long after publication',
  },
];
function ContentBenefits() {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
      {contentBenefits.map((benefit) => (
        <div
          key={benefit.id}
          className='relative rounded-lg border border-dashed border-zinc-300 px-4 sm:px-6 md:px-8 dark:border-zinc-800'>
          <div className='absolute top-4 left-0 z-0 h-px w-full bg-zinc-400 sm:top-6 md:top-8 dark:bg-zinc-700' />
          <div className='absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 sm:bottom-6 md:bottom-8 dark:bg-zinc-700' />
          <div className='relative w-full border-x border-zinc-400 dark:border-zinc-700'>
            <div className='absolute z-0 grid h-full w-full items-center'>
              <section className='absolute z-0 grid h-full w-full grid-cols-2 place-content-between'>
                <div className='bg-primary my-4 size-1 -translate-x-[2.5px] rounded-full outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950' />
                <div className='bg-primary my-4 size-1 translate-x-[2.5px] place-self-end rounded-full outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950' />
                <div className='bg-primary my-4 size-1 -translate-x-[2.5px] rounded-full outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950' />
                <div className='bg-primary my-4 size-1 translate-x-[2.5px] place-self-end rounded-full outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950' />
              </section>
            </div>
            <div className='relative z-20 mx-auto py-8'>
              <div className='p-6'>
                <h3 className='mb-1 text-lg font-bold text-gray-900 dark:text-gray-100'>
                  {benefit.title}
                </h3>
                <p className='text-gray-700 dark:text-gray-300'>
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const contentMarketingServices = [
  {
    id: crypto.randomUUID(),
    title: 'Content Strategy',
    description: 'Comprehensive content planning aligned with business goals.',
    items: [
      'Content Audit',
      'Competitor Analysis',
      'Editorial Calendar',
      'Brand Voice Development',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Blog Writing',
    description: 'SEO-optimized blog posts that drive traffic and engagement.',
    items: [
      'Keyword Research',
      'Long-form Articles',
      'Guest Posting',
      'Content Series',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Video Content',
    description: 'Engaging video content for multiple platforms.',
    items: ['Explainer Videos', 'Product Demos', 'Social Videos', 'Video SEO'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Social Media Content',
    description: 'Platform-specific content that builds communities.',
    items: [
      'Post Creation',
      'Story Content',
      'Live Streaming',
      'User-Generated Content',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Infographics & Visual Content',
    description: 'Compelling visual content that simplifies complex ideas.',
    items: [
      'Data Visualization',
      'Custom Graphics',
      'Interactive Content',
      'Brand Templates',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Content Distribution',
    description: 'Strategic content promotion across multiple channels.',
    items: [
      'Multi-Channel Publishing',
      'Influencer Outreach',
      'Content Syndication',
      'Paid Promotion',
    ],
  },
];
const ContentMarketings = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {contentMarketingServices.map((service) => (
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

const contentProcess = [
  {
    id: 1,
    title: 'Strategy',
    description: 'Define goals and target audience',
  },
  {
    id: 2,
    title: 'Research',
    description: 'Analyze competitors and keywords',
  },
  {
    id: 3,
    title: 'Planning',
    description: 'Create editorial calendar',
  },
  {
    id: 4,
    title: 'Creation',
    description: 'Produce high-quality content',
  },
  {
    id: 5,
    title: 'Distribution',
    description: 'Publish across channels',
  },
  {
    id: 6,
    title: 'Optimization',
    description: 'Analyze and improve performance',
  },
];
const ContentProcesses = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {contentProcess.map((process) => (
        <div className='relative overflow-hidden rounded-xl' key={process.id}>
          <div
            className='absolute inset-0 -z-1 rounded-lg opacity-50'
            style={{
              backgroundImage: `
              linear-gradient(45deg, transparent 49%, var(--border) 49%, var(--border) 51%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, var(--border) 49%, var(--border) 51%, transparent 51%)
            `,
              backgroundSize: '22px 22px',
            }}
          />
          <Card className='z-10 isolate bg-transparent border-border'>
            <CardContent>
              <p>{process.id}</p>
            </CardContent>
            <CardHeader>
              <CardTitle>
                <h4 className={'text-xl font-semibold'}>{process.title}</h4>
              </CardTitle>
              <CardDescription>
                <p>{process.description}</p>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
};

const contentMarketingStats = [
  {
    id: crypto.randomUUID(),
    title: 'More Leads',
    value: '3x',
    description: 'Content marketing generates 3x more leads than paid search',
    trend: 'Lead Growth',
    trendValue: '+200%',
    footer: 'Comparative lead generation performance',
  },
  {
    id: crypto.randomUUID(),
    title: 'Cost Reduction',
    value: '62%',
    description: 'Content marketing costs 62% less than traditional marketing',
    trend: 'Budget Efficiency',
    trendValue: '-62% Cost',
    footer: 'Cost-to-benefit ratio analysis',
  },
  {
    id: crypto.randomUUID(),
    title: 'Higher Conversion',
    value: '6x',
    description: 'Content marketing has 6x higher conversion rates',
    trend: 'Sales Velocity',
    trendValue: '600%',
    footer: 'Conversion rate optimization impact',
  },
  {
    id: crypto.randomUUID(),
    title: 'B2B Marketers',
    value: '97%',
    description: 'Use content marketing as part of their strategy',
    trend: 'Market Adoption',
    trendValue: 'High',
    footer: 'Industry standard implementation',
  },
];
const MarketingStatistics = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 gap-8'}>
      {contentMarketingStats.map((process) => (
        <div className='relative overflow-hidden rounded-xl' key={process.id}>
          <Card className='@container/card'>
            <CardHeader>
              <CardDescription>{process.trend}</CardDescription>
              <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
                {process.value}
              </CardTitle>
              <h4 className={'text-xl font-semibold'}>{process.title}</h4>
              <CardAction>
                <Badge variant='outline'>
                  <IconTrendingUp />
                  {process.trendValue}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className='flex-col items-start gap-1.5 text-sm'>
              <div className='line-clamp-1 flex gap-2 font-medium'>
                {process.footer} <IconTrendingUp className='size-4' />
              </div>
              <div className='text-muted-foreground'>{process.description}</div>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};
