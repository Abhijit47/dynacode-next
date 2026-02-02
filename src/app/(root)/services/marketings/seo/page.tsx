import { Icons } from '@/components/card-6';
import CTASection1 from '@/components/cta-section-01';
import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IconHandClick } from '@tabler/icons-react';
import Link from 'next/link';

export default function SEOPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>SEO Services</h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Enhance your online visibility and drive organic traffic with
                  our expert SEO services.
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
            <h3 className={'text-4xl font-semibold'}>Our SEO Services</h3>
            <p>
              Comprehensive SEO solutions to improve your search rankings and
              drive organic growth
            </p>
          </hgroup>

          <SeoServices />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Social Media Marketing (SMM)
            </h3>
            <p>
              Expand your reach and build engaged communities with strategic
              content, paid social, and creator partnerships.
            </p>
          </hgroup>

          <SocialMediaServices />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-12'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>Our SEO Process</h3>
            <p>
              A systematic approach to search engine optimization that delivers
              consistent results
            </p>
          </hgroup>

          <div
            className={
              'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-16 sm:gap-x-8'
            }>
            {seoProcess.map((step) => (
              <div className='relative' key={step.id}>
                <div
                  className='bg-muted/20 absolute size-full rounded-xl border scale-y-[1.16] scale-x-90 -top-4 border-border/50'
                  style={{
                    transformOrigin: 'top center',
                  }}
                />
                <Card className={'gap-4 py-4 h-full z-10 isolate'}>
                  <CardHeader className={'space-y-4'}>
                    <p
                      className={
                        'flex items-center justify-center rounded-full text-4xl font-bold size-16 mx-auto p-4 bg-primary-foreground'
                      }>
                      {step.id}
                    </p>
                    <CardTitle>
                      <h4 className='text-xl text-center font-semibold mb-2'>
                        {step.title}
                      </h4>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={'text-sm font-medium'}>{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection1 />
    </main>
  );
}

const seoServices = [
  {
    id: crypto.randomUUID(),
    title: 'TECHNICAL SEO',
    description:
      'Website optimization, speed enhancement, and technical fixes for better search engine crawling.',
    items: [
      'Site Speed Optimization',
      'Mobile Responsiveness',
      'Schema Markup',
      'XML Sitemaps',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'ON-PAGE SEO',
    description:
      'Content optimization, keyword research, and meta tag optimization for individual pages.',
    items: [
      'Keyword Research',
      'Meta Optimization',
      'Content Optimization',
      'Internal Linking',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'OFF-PAGE SEO',
    description:
      'Link building, brand mentions, and external authority building strategies.',
    items: [
      'Quality Backlinks',
      'Brand Mentions',
      'Social Signals',
      'Directory Submissions',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'LOCAL SEO',
    description:
      'Location-based optimization for businesses targeting local customers and markets.',
    items: [
      'Google My Business',
      'Local Citations',
      'Local Keywords',
      'Review Management',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'E-COMMERCE SEO',
    description:
      'Product page optimization, category structure, and conversion-focused SEO strategies.',
    items: [
      'Product Optimization',
      'Category Structure',
      'Shopping Feed',
      'Conversion Tracking',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'SEO ANALYTICS',
    description:
      'Performance tracking, ranking monitoring, and comprehensive SEO reporting.',
    items: [
      'Rank Tracking',
      'Traffic Analysis',
      'Conversion Metrics',
      'Competitor Analysis',
    ],
  },
];

const SeoServices = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {seoServices.map((service) => (
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

const socialMediaServices = [
  {
    id: crypto.randomUUID(),
    title: 'CONTENT STRATEGY',
    description:
      'Platform-specific content planning that aligns with brand voice and campaign goals.',
    items: [
      'Content Calendar',
      'Brand Tone & Messaging',
      'Creative Briefs',
      'Trends & Hooks',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'ACCOUNT MANAGEMENT',
    description:
      'Daily publishing, moderation, and profile optimization across key channels.',
    items: [
      'Post Scheduling',
      'Profile Optimization',
      'Community Replies',
      'Hashtag Strategy',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'PAID SOCIAL ADS',
    description:
      'Full-funnel social campaigns for reach, engagement, leads, and sales.',
    items: [
      'Campaign Setup',
      'Audience Targeting',
      'A/B Creative Tests',
      'ROAS Optimization',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'COMMUNITY & INFLUENCERS',
    description:
      'Grow brand advocacy with community building and creator partnerships.',
    items: [
      'Community Building',
      'Influencer Sourcing',
      'UGC Collaborations',
      'Contracting & Briefing',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'ANALYTICS & REPORTING',
    description:
      'Measure outcomes that matter: engagement, traffic, CPA, and LTV.',
    items: [
      'KPI Dashboards',
      'Attribution Setup',
      'Insights & Learnings',
      'Monthly Reporting',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'CREATIVE PRODUCTION',
    description:
      'Thumb-stopping creatives tailored for each platform and objective.',
    items: [
      'Short-form Video',
      'Motion Graphics',
      'Ad Variations',
      'Copy & Hooks',
    ],
  },
];

const SocialMediaServices = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {socialMediaServices.map((service) => (
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

const seoProcess = [
  {
    id: 1,
    title: 'SEO AUDIT',
    description:
      "Comprehensive analysis of your website's current SEO performance and opportunities.",
  },
  {
    id: 2,
    title: 'STRATEGY DEVELOPMENT',
    description:
      'Custom SEO strategy based on your business goals and target audience.',
  },
  {
    id: 3,
    title: 'IMPLEMENTATION',
    description:
      'Technical improvements, content optimization, and link building execution.',
  },
  {
    id: 4,
    title: 'MONITORING & REPORTING',
    description:
      'Continuous tracking, analysis, and monthly performance reports.',
  },
];
