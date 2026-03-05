import { Icons } from '@/components/card-6';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SEOServices() {
  return (
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
