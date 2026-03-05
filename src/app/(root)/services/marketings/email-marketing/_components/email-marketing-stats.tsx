import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function EmailMarketingStats() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Why Email Marketing Works
          </h3>
          <p>
            Comprehensive marketing automation solutions to streamline your
            marketing and sales processes
          </p>
        </hgroup>

        <EmailMarketingStatsCard />
      </div>
    </section>
  );
}

const emailMarketingStats = [
  {
    id: crypto.randomUUID(),
    title: 'Average ROI',
    value: '4200%',
    description:
      'Email marketing delivers exceptional returns on every dollar spent',
    trend: 'Revenue Impact',
    trendValue: '42x',
    footer: 'Return on investment performance',
  },
  {
    id: crypto.randomUUID(),
    title: 'Daily Engagement',
    value: '99%',
    description:
      'Nearly all email users check their inbox at least once per day',
    trend: 'User Activity',
    trendValue: 'High',
    footer: 'Daily active user behavior',
  },
  {
    id: crypto.randomUUID(),
    title: 'Purchase Influence',
    value: '50%',
    description:
      'Half of consumers make purchases from marketing emails monthly',
    trend: 'Sales Conversion',
    trendValue: 'Steady',
    footer: 'Consumer buying habits',
  },
  {
    id: crypto.randomUUID(),
    title: 'Global Reach',
    value: '4.7B+',
    description:
      'Total email users worldwide based on current 2026 projections',
    trend: 'Market Growth',
    trendValue: 'Expanding',
    footer: 'Global connectivity metrics',
  },
];
const EmailMarketingStatsCard = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'}>
      {emailMarketingStats.map((stat) => (
        <Card key={stat.id}>
          <CardContent>
            <p className={'text-3xl font-semibold'}>{stat.value}</p>
          </CardContent>
          <CardHeader>
            <CardTitle>
              <h4 className={''}>{stat.title}</h4>
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
