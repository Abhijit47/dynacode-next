import { Icons } from '@/components/card-6';
import CTASection1 from '@/components/cta-section-01';
import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { IconHandClick } from '@tabler/icons-react';
import Link from 'next/link';

export default function InfluencerMarketingPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  Influencer Marketing Services
                </h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Connect with your target audience through authentic
                  partnerships with influential content creators who align with
                  your brand values and goals.
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
              Why Influencer Marketing Works
            </h3>
            <p>
              Comprehensive marketing automation solutions to streamline your
              marketing and sales processes
            </p>
          </hgroup>

          <InfluencerStats />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Our Influencer Marketing Services
            </h3>
            <p>
              Comprehensive marketing automation solutions to streamline your
              marketing and sales processes
            </p>
          </hgroup>

          <InfluencerServices />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Influencer Tiers We Work With
            </h3>
            <p>
              Comprehensive marketing automation solutions to streamline your
              marketing and sales processes
            </p>
          </hgroup>

          <InfluencerTiers />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>Platforms We Master</h3>
            <p>
              Comprehensive marketing automation solutions to streamline your
              marketing and sales processes
            </p>
          </hgroup>

          <PlatformEngagement />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Our Influencer Marketing Process
            </h3>
            <p>
              Comprehensive marketing automation solutions to streamline your
              marketing and sales processes
            </p>
          </hgroup>

          <InfluencerProcess />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Campaign Types We Execute
            </h3>
            <p>
              Comprehensive marketing automation solutions to streamline your
              marketing and sales processes
            </p>
          </hgroup>

          <CampaignOutcomes />
        </div>
      </section>

      <CTASection1 />
    </main>
  );
}

const influencerStats = [
  {
    id: crypto.randomUUID(),
    title: 'Higher Roi',
    description:
      'Influencer marketing significantly outperforms traditional advertising channels',
    trend: 'Revenue Performance',
    trendValue: '11x',
    footer: 'Comparative ROI vs Traditional Ads',
  },
  {
    id: crypto.randomUUID(),
    title: 'Trust Factor',
    description:
      'Consumers show a high level of confidence in creator-led recommendations',
    trend: 'Consumer Trust',
    trendValue: '89%',
    footer: 'Global consumer sentiment report',
  },
  {
    id: crypto.randomUUID(),
    title: 'Budget Increase',
    description:
      'Marketers are shifting larger portions of their spend toward influencer partnerships',
    trend: 'Market Investment',
    trendValue: '37%',
    footer: 'Annual marketing budget forecast',
  },
  {
    id: crypto.randomUUID(),
    title: 'Engagement Rate',
    description:
      'Creators maintain strong interaction levels across diverse social platforms',
    trend: 'Social Interaction',
    trendValue: '4.87%',
    footer: 'Average cross-platform engagement',
  },
];
const InfluencerStats = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'}>
      {influencerStats.map((stat) => (
        <Card key={stat.id}>
          <CardContent>
            <div className='text-3xl font-bold'>{stat.trendValue}</div>
          </CardContent>
          <CardHeader>
            <CardTitle>
              <h4>{stat.title}</h4>
            </CardTitle>
            <CardDescription>
              <p>{stat.description}</p>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

const influencerServices = [
  {
    id: crypto.randomUUID(),
    title: 'Influencer Discovery',
    description:
      'Find the perfect influencers for your brand and campaign goals.',
    items: [
      'Audience Analysis',
      'Engagement Rate Review',
      'Brand Alignment Check',
      'Authenticity Verification',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Campaign Strategy',
    description: 'Develop comprehensive influencer marketing strategies.',
    items: [
      'Goal Setting',
      'Target Audience Definition',
      'Content Guidelines',
      'KPI Development',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Influencer Outreach',
    description: 'Professional outreach and relationship building.',
    items: [
      'Initial Contact',
      'Negotiation Support',
      'Contract Management',
      'Relationship Building',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Content Collaboration',
    description: 'Work with influencers to create authentic, engaging content.',
    items: [
      'Content Planning',
      'Creative Direction',
      'Brand Guidelines',
      'Approval Process',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Campaign Management',
    description: 'End-to-end campaign execution and monitoring.',
    items: [
      'Timeline Management',
      'Content Scheduling',
      'Performance Tracking',
      'Quality Assurance',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Analytics & ROI',
    description: 'Comprehensive performance measurement and reporting.',
    items: [
      'Engagement Metrics',
      'Reach Analysis',
      'Conversion Tracking',
      'ROI Calculation',
    ],
  },
];
const InfluencerServices = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {influencerServices.map((service) => (
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

const influencerTiers = [
  {
    id: crypto.randomUUID(),
    title: 'Nano-Influencers',
    followers: '1K-10K',
    avgEngagement: '8-10%',
    strength: 'High trust & authenticity',
    bestFor: 'Niche products, local businesses',
  },
  {
    id: crypto.randomUUID(),
    title: 'Micro-Influencers',
    followers: '10K-100K',
    avgEngagement: '5-8%',
    strength: 'Strong community connection',
    bestFor: 'Targeted campaigns, emerging brands',
  },
  {
    id: crypto.randomUUID(),
    title: 'Mid-Tier Influencers',
    followers: '100K-1M',
    avgEngagement: '3-5%',
    strength: 'Good reach & engagement balance',
    bestFor: 'Brand awareness, product launches',
  },
  {
    id: crypto.randomUUID(),
    title: 'Macro-Influencers',
    followers: '1M-10M',
    avgEngagement: '2-3%',
    strength: 'Massive reach potential',
    bestFor: 'Large campaigns, mainstream brands',
  },
  {
    id: crypto.randomUUID(),
    title: 'Celebrity Influencers',
    followers: '10M+',
    avgEngagement: '1-2%',
    strength: 'Maximum brand exposure',
    bestFor: 'Major brand campaigns, viral potential',
  },
];
const InfluencerTiers = () => {
  return (
    <div className={'grid grid-cols-1 gap-4'}>
      {influencerTiers.map((tier) => (
        <Card key={tier.id}>
          <Item>
            <ItemMedia variant='default'>{tier.title}</ItemMedia>
            <ItemContent>
              <ItemTitle>Followers</ItemTitle>
              <ItemDescription>{tier.followers}</ItemDescription>
              <ItemTitle>Avg. Engagement</ItemTitle>
              <ItemDescription>{tier.avgEngagement}</ItemDescription>
              <ItemTitle>Strength</ItemTitle>
              <ItemDescription>{tier.strength}</ItemDescription>
              <ItemTitle>Best For</ItemTitle>
              <ItemDescription>{tier.bestFor}</ItemDescription>
            </ItemContent>

            <ItemActions>
              <Button>Action</Button>
            </ItemActions>
          </Item>
        </Card>
      ))}
    </div>
  );
};

const platformEngagement = [
  {
    id: crypto.randomUUID(),
    title: 'Instagram',
    description:
      'The premier hub for visual storytelling and aesthetic-driven lifestyle brands.',
    avgEngagement: '1.22%',
  },
  {
    id: crypto.randomUUID(),
    title: 'TikTok',
    description:
      'A viral powerhouse dominating the Gen Z market with immersive short-form video.',
    avgEngagement: '5.96%',
  },
  {
    id: crypto.randomUUID(),
    title: 'Youtube',
    description:
      'The definitive platform for high-authority, long-form educational and entertaining content.',
    avgEngagement: '1.63%',
  },
  {
    id: crypto.randomUUID(),
    title: 'Twitter',
    description:
      'The real-time pulse of global news, trending discussions, and fast-paced brand interactions.',
    avgEngagement: '0.048%',
  },
  {
    id: crypto.randomUUID(),
    title: 'Linkedin',
    description:
      'The essential network for professional networking, B2B leadership, and industry insights.',
    avgEngagement: '2.05%',
  },
  {
    id: crypto.randomUUID(),
    title: 'Twitch',
    description:
      'A high-engagement live streaming community built around gaming and authentic creator-fan bonds.',
    avgEngagement: '3.8%',
  },
];
const PlatformEngagement = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
      {platformEngagement.map((platform) => (
        <Card key={platform.id}>
          <CardHeader>
            <CardTitle>
              <h4>{platform.title}</h4>
            </CardTitle>
            <CardDescription>
              <p>{platform.description}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Avg Engagement:</p>
            <div className='text-3xl font-bold'>{platform.avgEngagement}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const influencerProcess = [
  {
    id: crypto.randomUUID(),
    title: 'Strategy',
    description: 'Define goals and target audience',
  },
  {
    id: crypto.randomUUID(),
    title: 'Discovery',
    description: 'Find perfect influencer matches',
  },
  {
    id: crypto.randomUUID(),
    title: 'Outreach',
    description: 'Connect and negotiate partnerships',
  },
  {
    id: crypto.randomUUID(),
    title: 'Content',
    description: 'Collaborate on authentic content',
  },
  {
    id: crypto.randomUUID(),
    title: 'Campaign',
    description: 'Execute and monitor performance',
  },
  {
    id: crypto.randomUUID(),
    title: 'Analysis',
    description: 'Measure results and optimize',
  },
];
const InfluencerProcess = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
      {influencerProcess.map((step, idx) => (
        <Card key={step.id}>
          <CardContent>
            <div className='text-3xl font-bold'>{`Step ${idx + 1}`}</div>
          </CardContent>
          <CardHeader>
            <CardTitle>
              <h4>{step.title}</h4>
            </CardTitle>
            <CardDescription>
              <p>{step.description}</p>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

const campaignOutcomes = [
  {
    id: crypto.randomUUID(),
    title: 'Product Launches',
    description: 'Generate buzz for new products',
    statValue: '40%',
    statText: 'Increase in Awareness',
  },
  {
    id: crypto.randomUUID(),
    title: 'Brand Awareness',
    description: 'Build recognition and recall',
    statValue: '60%',
    statText: 'Reach Improvement',
  },
  {
    id: crypto.randomUUID(),
    title: 'Event Promotion',
    description: 'Drive attendance and engagement',
    statValue: '35%',
    statText: 'More Registrations',
  },
  {
    id: crypto.randomUUID(),
    title: 'App Downloads',
    description: 'Increase mobile app installations',
    statValue: '50%',
    statText: 'Higher Install Rates',
  },
  {
    id: crypto.randomUUID(),
    title: 'Lead Generation',
    description: 'Capture qualified prospects',
    statValue: '25%',
    statText: 'More Leads',
  },
  {
    id: crypto.randomUUID(),
    title: 'Sales Campaigns',
    description: 'Drive direct purchase conversions',
    statValue: '30%',
    statText: 'Sales Increase',
  },
];
const CampaignOutcomes = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
      {campaignOutcomes.map((platform) => (
        <Card key={platform.id}>
          <CardHeader>
            <CardTitle>
              <h4>{platform.title}</h4>
            </CardTitle>
            <CardDescription>
              <p>{platform.description}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{platform.statText}:</p>
            <div className='text-3xl font-bold'>{platform.statValue}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
