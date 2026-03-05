import { Icons5 } from '@/components/card-5';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AdFormatServices() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>Social Media Ad Formats</h3>
          <p>
            From single images to immersive experiences, we create compelling
            ads for every social media format
          </p>
        </hgroup>

        <Services2 />
      </div>
    </section>
  );
}

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
