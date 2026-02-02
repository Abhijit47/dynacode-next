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
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { IconHandClick, IconTrendingUp } from '@tabler/icons-react';
import { ArrowUpRightIcon, CheckIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MarketingAutomationPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  Marketing Automation Services
                </h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Scale your marketing efforts with intelligent automation. Our
                  expert team designs and implements sophisticated workflows
                  that nurture leads, increase conversions, and grow your
                  business 24/7.
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
            <h3 className={'text-4xl font-semibold'}>Automation Services</h3>
            <p>
              Comprehensive marketing automation solutions to streamline your
              marketing and sales processes
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
              Popular Automation Workflows
            </h3>
            <p>
              Proven automation strategies that drive results for businesses of
              all sizes
            </p>
          </hgroup>

          <AutomationStats />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              How Automation Workflows Work
            </h3>
            <p>
              Understanding the four key components of effective marketing
              automation
            </p>
          </hgroup>

          <AutomationFlow />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>Platforms We Work With</h3>
            <p>
              Expert implementation across all major marketing automation
              platforms
            </p>
          </hgroup>

          <Integrations />
        </div>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Benefits of Marketing Automation
            </h3>
            <p>
              Comprehensive advertising management across Google, Facebook,
              Instagram, and other key platforms
            </p>
          </hgroup>

          <EfficiencyStats />
        </div>
      </section>

      <CTASection1 />
    </main>
  );
}

const automationServices = [
  {
    id: crypto.randomUUID(),
    title: 'Email Automation',
    description:
      'Automated email sequences that nurture leads and drive conversions throughout the customer journey.',
    items: [
      'Drip Campaigns',
      'Welcome Series',
      'Abandoned Cart Recovery',
      'Re-engagement Campaigns',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Lead Nurturing',
    description:
      'Sophisticated workflows that guide prospects through your sales funnel automatically.',
    items: [
      'Lead Scoring',
      'Behavioral Triggers',
      'Content Personalization',
      'Sales Handoff',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Social Media Automation',
    description:
      'Streamline your social media presence with automated posting and engagement strategies.',
    items: [
      'Content Scheduling',
      'Social Listening',
      'Auto-responses',
      'Hashtag Optimization',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'CRM Integration',
    description:
      'Connect all your marketing tools and data for a unified view of your customer relationships.',
    items: [
      'Data Synchronization',
      'Contact Management',
      'Pipeline Automation',
      'Activity Tracking',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Personalization Engine',
    description:
      'Deliver personalized experiences at scale based on user behavior and preferences.',
    items: [
      'Dynamic Content',
      'Product Recommendations',
      'Behavioral Targeting',
      'Custom Journeys',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Analytics & Reporting',
    description:
      'Comprehensive tracking and reporting to measure the success of your automation campaigns.',
    items: [
      'Performance Metrics',
      'ROI Tracking',
      'A/B Testing',
      'Custom Dashboards',
    ],
  },
];
const Services = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {automationServices.map((service) => (
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

const automationStats = [
  {
    id: crypto.randomUUID(),
    title: 'Welcome Series',
    description:
      'Onboard new subscribers with a series of engaging welcome emails',
    statValue: '300%',
    statText: 'Higher Engagement',
  },
  {
    id: crypto.randomUUID(),
    title: 'Abandoned Cart Recovery',
    description: 'Recover lost sales with automated cart abandonment sequences',
    statValue: '35%',
    statText: 'Recovery Rate',
  },
  {
    id: crypto.randomUUID(),
    title: 'Lead Scoring',
    description:
      'Automatically score and qualify leads based on behavior and engagement',
    statValue: '50%',
    statText: 'More Qualified Leads',
  },
  {
    id: crypto.randomUUID(),
    title: 'Customer Retention',
    description: 'Automated campaigns to retain and upsell existing customers',
    statValue: '25%',
    statText: 'Increase in LTV',
  },
];
const AutomationStats = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 gap-8'}>
      {automationStats.map((stat) => (
        <div className='relative overflow-hidden rounded-xl' key={stat.id}>
          <Card className='@container/card'>
            <CardHeader>
              <CardDescription>{stat.statText}</CardDescription>
              <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
                {stat.statValue}
              </CardTitle>
              <h4 className={'text-xl font-semibold'}>{stat.title}</h4>
              <CardAction>
                <Badge variant='outline'>
                  <IconTrendingUp />
                  Learn More
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className='flex-col items-start gap-1.5 text-sm'>
              <p className='text-muted-foreground'>{stat.description}</p>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

const automationFlow = [
  {
    id: crypto.randomUUID(),
    title: 'Trigger',
    description: 'Define what actions or behaviors will start the automation',
    items: ['Form submission', 'Website visit', 'Email click', 'Purchase'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Conditions',
    description: 'Set rules to segment and personalize the automation flow',
    items: ['Demographics', 'Behavior', 'Purchase history', 'Engagement level'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Actions',
    description: 'Specify what happens when conditions are met',
    items: ['Send email', 'Add to list', 'Update contact', 'Notify sales'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Optimization',
    description: 'Continuously improve performance with testing and analytics',
    items: [
      'A/B testing',
      'Performance tracking',
      'ROI analysis',
      'Refinements',
    ],
  },
];
const AutomationFlow = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 gap-6'}>
      {automationFlow.map((step) => (
        <div className='relative overflow-hidden rounded-xl' key={step.id}>
          <div
            className='absolute inset-2 z-0 rounded-lg opacity-75'
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)',
              backgroundSize: '10px 10px',
            }}
          />
          <Card className='z-10 isolate bg-transparent border-border border-dotted border-[3px] gap-4'>
            <CardHeader>
              <CardTitle>
                <h4>{step.title}</h4>
              </CardTitle>
              <CardDescription>
                <p>{step.description}</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2'>
                {step.items.map((item, index) => (
                  <li key={index} className='list-disc list-inside'>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
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

const efficiencyStats = [
  {
    id: crypto.randomUUID(),
    title: 'Increased Efficiency',
    description:
      'Automate repetitive tasks and focus your team on high-value activities.',
    icon: 'Zap',
  },
  {
    id: crypto.randomUUID(),
    title: 'Better Personalization',
    description:
      'Deliver the right message to the right person at the right time, automatically.',
    icon: 'Target',
  },
  {
    id: crypto.randomUUID(),
    title: 'Scalable Growth',
    description:
      'Scale your marketing efforts without proportionally increasing your team size.',
    icon: 'TrendingUp',
  },
];
const EfficiencyStats = () => {
  // load the icons dynamically

  return (
    <div className={'grid grid-cols-1 sm:grid-cols-3 gap-6'}>
      {efficiencyStats.map((stat) => (
        <div className='border rounded-xl border-border/70 p-1' key={stat.id}>
          <Card className='rounded-lg bg-muted/20'>
            <CardContent>
              <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary'>
                {/* Load the icons from lucide */}
                {stat.icon}
              </div>
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
        </div>
      ))}
    </div>
  );
};
