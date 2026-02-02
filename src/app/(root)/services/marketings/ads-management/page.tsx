import { Icons5 } from '@/components/card-5';
import { Icons } from '@/components/card-6';
import CTASection1 from '@/components/cta-section-01';
import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { IconHandClick } from '@tabler/icons-react';
import { Zap } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function ADSManagementPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  Professional Ads Management
                </h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Maximize your ROI with expertly managed advertising campaigns
                  across Google, Facebook, Instagram, and more. Our certified
                  specialists create, optimize, and manage campaigns that drive
                  qualified traffic and conversions.
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
              Our Advertising Services
            </h3>
            <p>
              Comprehensive advertising management across Google, Facebook,
              Instagram, and other key platforms
            </p>
          </hgroup>

          <Services />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Campaign Types We Manage
            </h3>
            <p>
              Expert management across Google Ads, Facebook Ads, Instagram Ads,
              and other platforms for maximum reach and ROI
            </p>
          </hgroup>

          <CampaignTypes />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Social Media Ad Formats
            </h3>
            <p>
              From single images to immersive experiences, we create compelling
              ads for every social media format
            </p>
          </hgroup>

          <Services2 />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Why Choose Our Ads Management?
            </h3>
            <p>
              Expand your reach and build engaged communities with strategic
              content, paid social, and creator partnerships.
            </p>
          </hgroup>

          <OptimizationFeatures />
        </div>
      </section>

      <CTASection1 />
    </main>
  );
}

const advertisingServices = [
  {
    id: crypto.randomUUID(),
    title: 'Google Search Ads',
    description:
      'Target customers actively searching for your products or services with strategic keyword campaigns.',
    items: [
      'Keyword Research',
      'Ad Copy Creation',
      'Bid Management',
      'Landing Page Optimization',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Google Display Ads',
    description:
      'Reach your audience across millions of websites with visually compelling banner advertisements.',
    items: [
      'Creative Design',
      'Audience Targeting',
      'Remarketing Campaigns',
      'Performance Tracking',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Facebook & Instagram Ads',
    description:
      'Engage your ideal customers on social media with high-converting ad campaigns that build brand awareness.',
    items: [
      'Image & Video Ads',
      'Story Ads',
      'Carousel Ads',
      'Lead Generation',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Google Shopping Ads',
    description:
      'Showcase your products directly in Google search results with product images and pricing.',
    items: [
      'Product Feed Setup',
      'Merchant Center',
      'Shopping Campaigns',
      'Product Optimization',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Youtube Ads',
    description:
      "Engage viewers with video advertisements on YouTube and across Google's video network.",
    items: [
      'Video Ad Creation',
      'Audience Targeting',
      'In-Stream Ads',
      'Video Performance',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Social Media Advertising',
    description:
      'Comprehensive social media advertising across Facebook, Instagram, and other platforms.',
    items: [
      'Multi-Platform Campaigns',
      'Audience Insights',
      'Creative Testing',
      'Social Commerce',
    ],
  },
];

const Services = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {advertisingServices.map((service) => (
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

const campaignTypes = [
  {
    id: crypto.randomUUID(),
    title: 'Google Search Campaigns',
    description:
      'Text ads that appear when people search for your products or services',
    stat: '400%+ ROI',
  },
  {
    id: crypto.randomUUID(),
    title: 'Google Display Campaigns',
    description: 'Visual ads that reach people on websites and apps they visit',
    stat: '250%+ ROI',
  },
  {
    id: crypto.randomUUID(),
    title: 'Facebook & Instagram Campaigns',
    description: 'Social media ads that reach 3.2B+ monthly active users',
    stat: '425%+ ROI',
  },
  {
    id: crypto.randomUUID(),
    title: 'Youtube Video Campaigns',
    description: 'Engaging video ads on YouTube and across the web',
    stat: '300%+ ROI',
  },
  {
    id: crypto.randomUUID(),
    title: 'Google Shopping Campaigns',
    description: 'Product ads that show your inventory with images and prices',
    stat: '500%+ ROI',
  },
];
const CampaignTypes = () => {
  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 gap-6'}>
      {campaignTypes.map((campaign) => (
        <div className='p-2 border-[0.5px] rounded-xs' key={campaign.id}>
          <Card
            className={cn(
              'border-[1.5px] bg-linear-to-br rounded-xs shadow-none h-full',
              // light mode
              'from-background to-muted/60 shadow-[2px_0_8px_rgba(0,0,0,0.15)]',
              // dark mode
              'dark:from-background dark:via-foreground/5 dark:to-background dark:shadow-inner',
            )}>
            <CardHeader>
              <CardTitle>
                <h4>{campaign.title}</h4>
              </CardTitle>
              <CardDescription>
                <p>{campaign.description}</p>
              </CardDescription>
              <CardAction>
                <Badge>
                  <strong>{campaign.stat}</strong>
                </Badge>
              </CardAction>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
};

const adFormatServices = [
  {
    id: crypto.randomUUID(),
    title: 'Image Ads',
    description:
      'High-impact single image advertisements that capture attention and drive engagement.',
    items: ['Facebook Feed', 'Instagram Feed', 'Stories', 'Reels'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Video Ads',
    description:
      'Engaging video content that tells your story and showcases your products or services.',
    items: ['Facebook Video', 'Instagram Reels', 'IGTV', 'Stories'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Carousel Ads',
    description:
      'Multiple images or videos in a single ad, perfect for showcasing product catalogs.',
    items: ['Facebook Carousel', 'Instagram Carousel', 'Collection Ads'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Story Ads',
    description:
      'Full-screen vertical ads that appear between user stories for maximum impact.',
    items: ['Facebook Stories', 'Instagram Stories', 'Messenger Stories'],
  },
];
const Services2 = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 gap-8'}>
      {adFormatServices.map((service) => (
        <Card
          key={service.id}
          className='relative rounded-none shadow-none border-double'>
          <Icons5 />
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

const optimizationFeatures = [
  {
    id: crypto.randomUUID(),
    title: 'Data-Driven Optimization',
    description:
      'Continuous testing and optimization based on performance data across all platforms.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Precision Targeting',
    description:
      'Advanced audience targeting to reach your ideal customers across Google and social platforms.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Budget Optimization',
    description:
      'Smart budget allocation and bid management to maximize your advertising ROI across all channels.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Multi-Platform Expertise',
    description:
      'Comprehensive management across Google, Facebook, Instagram, and other advertising platforms.',
  },
];
function OptimizationFeatures() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {optimizationFeatures.map((feature) => (
        <Card className='group shadow-zinc-950/5 gap-0' key={feature.id}>
          <CardHeader className='pb-3'>
            <CardDecorator>
              <Zap className='size-6' aria-hidden />
            </CardDecorator>

            <h3 className='mt-6 font-medium'>{feature.title}</h3>
          </CardHeader>

          <CardContent>
            <p className='text-sm'>{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function CardDecorator({ children }: { children: ReactNode }) {
  return (
    <div className='mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]'>
      <div
        aria-hidden
        className='absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50'
      />

      <div className='bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t'>
        {children}
      </div>
    </div>
  );
}
