import { Icons } from '@/components/card-6';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ContentMarketingServices() {
  return (
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
