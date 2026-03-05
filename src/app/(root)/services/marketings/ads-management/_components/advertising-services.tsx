import { Icons } from '@/components/card-6';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AdvertisingServices() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>Our Advertising Services</h3>
          <p>
            Comprehensive advertising management across Google, Facebook,
            Instagram, and other key platforms
          </p>
        </hgroup>

        <Services />
      </div>
    </section>
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
