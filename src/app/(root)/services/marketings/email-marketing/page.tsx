import { Icons } from '@/components/card-6';
import CTASection1 from '@/components/cta-section-01';
import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { IconHandClick } from '@tabler/icons-react';
import { ArrowUpRightIcon, CheckIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function EmailMarketingPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  Email Marketing Services
                </h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Drive revenue and build lasting relationships with strategic
                  email marketing campaigns that deliver personalized
                  experiences and measurable results.
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
              Why Email Marketing Works
            </h3>
            <p>
              Comprehensive marketing automation solutions to streamline your
              marketing and sales processes
            </p>
          </hgroup>

          <EmailMarketingStats />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Our Email Marketing Services
            </h3>
            <p>
              Comprehensive marketing automation solutions to streamline your
              marketing and sales processes
            </p>
          </hgroup>

          <EmailMarketingServices />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Campaign Types We Master
            </h3>
            <p>
              Comprehensive marketing automation solutions to streamline your
              marketing and sales processes
            </p>
          </hgroup>

          <EmailCampaignStats />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Our Email Marketing Process
            </h3>
            <p>
              Comprehensive marketing automation solutions to streamline your
              marketing and sales processes
            </p>
          </hgroup>

          <EmailMarketingProcess />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Professional Email Marketing Tools
            </h3>
            <p>
              We work with industry-leading platforms like Mailchimp, Klaviyo,
              HubSpot, and ConvertKit to deliver exceptional email marketing
              results.
            </p>
          </hgroup>

          <Integrations />
        </div>
      </section>

      <CTASection1 />
    </main>
  );
}

const emailMarketingStats = [
  {
    id: crypto.randomUUID(),
    title: 'Average ROI',
    value: '4200%',
    description:
      'Email marketing delivers exceptional returns on every dollar spent',
    trend: 'Revenue Impact',
    trendValue: '42x',
    footer: 'Return on investment performance',
  },
  {
    id: crypto.randomUUID(),
    title: 'Daily Engagement',
    value: '99%',
    description:
      'Nearly all email users check their inbox at least once per day',
    trend: 'User Activity',
    trendValue: 'High',
    footer: 'Daily active user behavior',
  },
  {
    id: crypto.randomUUID(),
    title: 'Purchase Influence',
    value: '50%',
    description:
      'Half of consumers make purchases from marketing emails monthly',
    trend: 'Sales Conversion',
    trendValue: 'Steady',
    footer: 'Consumer buying habits',
  },
  {
    id: crypto.randomUUID(),
    title: 'Global Reach',
    value: '4.7B+',
    description:
      'Total email users worldwide based on current 2026 projections',
    trend: 'Market Growth',
    trendValue: 'Expanding',
    footer: 'Global connectivity metrics',
  },
];
const EmailMarketingStats = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'}>
      {emailMarketingStats.map((stat) => (
        <Card key={stat.id}>
          <CardContent>
            <p className={'text-3xl font-semibold'}>{stat.value}</p>
          </CardContent>
          <CardHeader>
            <CardTitle>
              <h4 className={''}>{stat.title}</h4>
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

const emailMarketingServices = [
  {
    id: crypto.randomUUID(),
    title: 'Campaign Strategy',
    description: 'Comprehensive email marketing strategy and planning.',
    items: [
      'Audience Segmentation',
      'Campaign Planning',
      'A/B Testing Strategy',
      'Automation Workflows',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Email Design',
    description: 'Beautiful, responsive email templates that convert.',
    items: [
      'Custom Templates',
      'Mobile Optimization',
      'Brand Consistency',
      'Interactive Elements',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'List Management',
    description: 'Build and maintain high-quality subscriber lists.',
    items: [
      'List Building',
      'Segmentation',
      'Data Hygiene',
      'Compliance Management',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Automation Setup',
    description: 'Automated email sequences for maximum engagement.',
    items: [
      'Welcome Series',
      'Drip Campaigns',
      'Behavioral Triggers',
      'Lead Nurturing',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Performance Analytics',
    description: 'Detailed tracking and optimization of email campaigns.',
    items: [
      'Open Rate Tracking',
      'Click Analytics',
      'Conversion Tracking',
      'ROI Reporting',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Deliverability Optimization',
    description: 'Ensure your emails reach the inbox, not spam.',
    items: [
      'Spam Testing',
      'Sender Reputation',
      'Domain Authentication',
      'List Hygiene',
    ],
  },
];
const EmailMarketingServices = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {emailMarketingServices.map((service) => (
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

const emailCampaignStats = [
  {
    id: crypto.randomUUID(),
    title: 'Welcome Series',
    description: 'Onboard new subscribers effectively',
    statValue: '25%',
    statText: 'Higher Engagement',
  },
  {
    id: crypto.randomUUID(),
    title: 'Newsletter',
    description: 'Regular updates and valuable content',
    statValue: '18%',
    statText: 'Better Retention',
  },
  {
    id: crypto.randomUUID(),
    title: 'Promotional',
    description: 'Product launches and special offers',
    statValue: '32%',
    statText: 'Higher Sales',
  },
  {
    id: crypto.randomUUID(),
    title: 'Abandoned Cart',
    description: 'Recover lost sales automatically',
    statValue: '15%',
    statText: 'Cart Recovery',
  },
  {
    id: crypto.randomUUID(),
    title: 'Re-engagement',
    description: 'Win back inactive subscribers',
    statValue: '12%',
    statText: 'Reactivation Rate',
  },
  {
    id: crypto.randomUUID(),
    title: 'Post-purchase',
    description: 'Enhance customer experience',
    statValue: '28%',
    statText: 'Repeat Purchases',
  },
];
const EmailCampaignStats = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {emailCampaignStats.map((campaign) => (
        <Card key={campaign.id}>
          <CardHeader>
            <CardTitle>
              <h4>{campaign.title}</h4>
            </CardTitle>
            <CardDescription>
              <p>{campaign.description}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className={'text-3xl font-semibold'}>{campaign.statValue}</p>
            <p>{campaign.statText}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const emailMarketingProcess = [
  {
    id: crypto.randomUUID(),
    title: 'Strategy & Planning',
    description: 'Define goals and audience segments',
  },
  {
    id: crypto.randomUUID(),
    title: 'List Building',
    description: 'Grow your subscriber base organically',
  },
  {
    id: crypto.randomUUID(),
    title: 'Design & Content',
    description: 'Create compelling emails that convert',
  },
  {
    id: crypto.randomUUID(),
    title: 'Testing & Launch',
    description: 'Optimize before sending to your list',
  },
  {
    id: crypto.randomUUID(),
    title: 'Analyze & Optimize',
    description: 'Track performance and improve results',
  },
];
const EmailMarketingProcess = () => {
  return (
    <div
      className={
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'
      }>
      {emailMarketingProcess.map((step, idx) => (
        <Card key={step.id}>
          <CardContent>
            <div className='h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold'>
              0{idx + 1}
            </div>
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

const integrations = [
  {
    id: crypto.randomUUID(),
    name: 'HubSpot',
    url: 'https://www.hubspot.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://hubspot.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Mailchimp',
    url: 'https://mailchimp.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://mailchimp.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'ActiveCampaign',
    url: 'https://www.activecampaign.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://activecampaign.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Klaviyo',
    url: 'https://www.klaviyo.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://klaviyo.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Pardot',
    url: 'https://www.pardot.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://pardot.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Marketo',
    url: 'https://www.marketo.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://marketo.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'ConvertKit',
    url: 'https://convertkit.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://convertkit.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'GetResponse',
    url: 'https://www.getresponse.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://getresponse.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Drip',
    url: 'https://www.drip.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://drip.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Infusionsoft',
    url: 'https://www.keap.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://keap.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Constant Contact',
    url: 'https://www.constantcontact.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://constantcontact.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Campaign Monitor',
    url: 'https://www.campaignmonitor.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://campaignmonitor.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Zoho',
    url: 'https://www.zoho.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://zoho.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Braze',
    url: 'https://www.braze.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://braze.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Omnisend',
    url: 'https://www.omnisend.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://omnisend.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Salesforce',
    url: 'https://www.salesforce.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://salesforce.com&sz=64',
  },
];
const Integrations = () => {
  return (
    <div>
      <div className='mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {integrations.map((integration, idx) => (
          <div
            className='flex items-center gap-4 rounded-lg border bg-card pe-4'
            key={integration.id}>
            <div className='border-e border-dashed p-4'>
              <Image
                alt='PostHog'
                className='size-8 rounded'
                src={integration.icon}
                width={32}
                height={32}
              />
            </div>
            <h3 className='font-semibold text-lg'>{integration.name}</h3>
            <Badge
              variant={idx === 0 ? 'default' : 'outline'}
              className={cn(
                idx === 0
                  ? 'ms-auto px-2 py-0.5'
                  : 'border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&>svg]:px-2.5 ms-auto h-7.5',
              )}>
              {idx === 0 ? (
                <>
                  Connected <CheckIcon />
                </>
              ) : (
                <>
                  Connect <ArrowUpRightIcon />
                </>
              )}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};
