import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function InfluencerStats() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Why Influencer Marketing Works
          </h3>
          <p>
            Comprehensive marketing automation solutions to streamline your
            marketing and sales processes
          </p>
        </hgroup>

        <InfluencerStatsCard />
      </div>
    </section>
  );
}

const influencerStats = [
  {
    id: crypto.randomUUID(),
    title: 'Higher Roi',
    description:
      'Influencer marketing significantly outperforms traditional advertising channels',
    trend: 'Revenue Performance',
    trendValue: '11x',
    footer: 'Comparative ROI vs Traditional Ads',
  },
  {
    id: crypto.randomUUID(),
    title: 'Trust Factor',
    description:
      'Consumers show a high level of confidence in creator-led recommendations',
    trend: 'Consumer Trust',
    trendValue: '89%',
    footer: 'Global consumer sentiment report',
  },
  {
    id: crypto.randomUUID(),
    title: 'Budget Increase',
    description:
      'Marketers are shifting larger portions of their spend toward influencer partnerships',
    trend: 'Market Investment',
    trendValue: '37%',
    footer: 'Annual marketing budget forecast',
  },
  {
    id: crypto.randomUUID(),
    title: 'Engagement Rate',
    description:
      'Creators maintain strong interaction levels across diverse social platforms',
    trend: 'Social Interaction',
    trendValue: '4.87%',
    footer: 'Average cross-platform engagement',
  },
];
const InfluencerStatsCard = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'}>
      {influencerStats.map((stat) => (
        <Card key={stat.id}>
          <CardContent>
            <div className='text-3xl font-bold'>{stat.trendValue}</div>
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
      ))}
    </div>
  );
};
