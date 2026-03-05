import { Icons } from '@/components/card-6';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function InfluencerServices() {
  return (
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

        <InfluencerServicesCard />
      </div>
    </section>
  );
}

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
const InfluencerServicesCard = () => {
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
