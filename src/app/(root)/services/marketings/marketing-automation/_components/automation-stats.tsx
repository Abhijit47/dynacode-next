import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IconTrendingUp } from '@tabler/icons-react';

export default function AutomationStats() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Popular Automation Workflows
          </h3>
          <p>
            Proven automation strategies that drive results for businesses of
            all sizes
          </p>
        </hgroup>

        <AutomationStatsCard />
      </div>
    </section>
  );
}

const automationStats = [
  {
    id: crypto.randomUUID(),
    title: 'Welcome Series',
    description:
      'Onboard new subscribers with a series of engaging welcome emails',
    statValue: '300%',
    statText: 'Higher Engagement',
  },
  {
    id: crypto.randomUUID(),
    title: 'Abandoned Cart Recovery',
    description: 'Recover lost sales with automated cart abandonment sequences',
    statValue: '35%',
    statText: 'Recovery Rate',
  },
  {
    id: crypto.randomUUID(),
    title: 'Lead Scoring',
    description:
      'Automatically score and qualify leads based on behavior and engagement',
    statValue: '50%',
    statText: 'More Qualified Leads',
  },
  {
    id: crypto.randomUUID(),
    title: 'Customer Retention',
    description: 'Automated campaigns to retain and upsell existing customers',
    statValue: '25%',
    statText: 'Increase in LTV',
  },
];
const AutomationStatsCard = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 gap-8'}>
      {automationStats.map((stat) => (
        <div className='relative overflow-hidden rounded-xl' key={stat.id}>
          <Card className='@container/card'>
            <CardHeader>
              <CardDescription>{stat.statText}</CardDescription>
              <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
                {stat.statValue}
              </CardTitle>
              <h4 className={'text-xl font-semibold'}>{stat.title}</h4>
              <CardAction>
                <Badge variant='outline'>
                  <IconTrendingUp />
                  Learn More
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className='flex-col items-start gap-1.5 text-sm'>
              <p className='text-muted-foreground'>{stat.description}</p>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};
