import { Icons } from '@/components/card-6';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function EmailMarketingServices() {
  return (
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

        <EmailMarketingServicesCard />
      </div>
    </section>
  );
}

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
const EmailMarketingServicesCard = () => {
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
