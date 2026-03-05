import { Icons } from '@/components/card-6';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AutomationServices() {
  return (
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
