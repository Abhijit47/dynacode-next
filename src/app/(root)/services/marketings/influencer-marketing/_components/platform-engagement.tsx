import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function PlatformEngagement() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>Platforms We Master</h3>
          <p>
            Comprehensive marketing automation solutions to streamline your
            marketing and sales processes
          </p>
        </hgroup>

        <PlatformEngagementCard />
      </div>
    </section>
  );
}

const platformEngagement = [
  {
    id: crypto.randomUUID(),
    title: 'Instagram',
    description:
      'The premier hub for visual storytelling and aesthetic-driven lifestyle brands.',
    avgEngagement: '1.22%',
  },
  {
    id: crypto.randomUUID(),
    title: 'TikTok',
    description:
      'A viral powerhouse dominating the Gen Z market with immersive short-form video.',
    avgEngagement: '5.96%',
  },
  {
    id: crypto.randomUUID(),
    title: 'Youtube',
    description:
      'The definitive platform for high-authority, long-form educational and entertaining content.',
    avgEngagement: '1.63%',
  },
  {
    id: crypto.randomUUID(),
    title: 'Twitter',
    description:
      'The real-time pulse of global news, trending discussions, and fast-paced brand interactions.',
    avgEngagement: '0.048%',
  },
  {
    id: crypto.randomUUID(),
    title: 'Linkedin',
    description:
      'The essential network for professional networking, B2B leadership, and industry insights.',
    avgEngagement: '2.05%',
  },
  {
    id: crypto.randomUUID(),
    title: 'Twitch',
    description:
      'A high-engagement live streaming community built around gaming and authentic creator-fan bonds.',
    avgEngagement: '3.8%',
  },
];
const PlatformEngagementCard = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
      {platformEngagement.map((platform) => (
        <Card key={platform.id}>
          <CardHeader>
            <CardTitle>
              <h4>{platform.title}</h4>
            </CardTitle>
            <CardDescription>
              <p>{platform.description}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Avg Engagement:</p>
            <div className='text-3xl font-bold'>{platform.avgEngagement}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
