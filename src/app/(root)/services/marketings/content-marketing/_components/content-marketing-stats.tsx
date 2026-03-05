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

export default function ContentMarketingStats() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Content Marketing Statistics
          </h3>
          <p>
            Fast, scalable websites and apps built with modern best practices
          </p>
        </hgroup>

        <MarketingStatistics />
      </div>
    </section>
  );
}

const contentMarketingStats = [
  {
    id: crypto.randomUUID(),
    title: 'More Leads',
    value: '3x',
    description: 'Content marketing generates 3x more leads than paid search',
    trend: 'Lead Growth',
    trendValue: '+200%',
    footer: 'Comparative lead generation performance',
  },
  {
    id: crypto.randomUUID(),
    title: 'Cost Reduction',
    value: '62%',
    description: 'Content marketing costs 62% less than traditional marketing',
    trend: 'Budget Efficiency',
    trendValue: '-62% Cost',
    footer: 'Cost-to-benefit ratio analysis',
  },
  {
    id: crypto.randomUUID(),
    title: 'Higher Conversion',
    value: '6x',
    description: 'Content marketing has 6x higher conversion rates',
    trend: 'Sales Velocity',
    trendValue: '600%',
    footer: 'Conversion rate optimization impact',
  },
  {
    id: crypto.randomUUID(),
    title: 'B2B Marketers',
    value: '97%',
    description: 'Use content marketing as part of their strategy',
    trend: 'Market Adoption',
    trendValue: 'High',
    footer: 'Industry standard implementation',
  },
];
const MarketingStatistics = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 gap-8'}>
      {contentMarketingStats.map((process) => (
        <div className='relative overflow-hidden rounded-xl' key={process.id}>
          <Card className='@container/card'>
            <CardHeader>
              <CardDescription>{process.trend}</CardDescription>
              <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
                {process.value}
              </CardTitle>
              <h4 className={'text-xl font-semibold'}>{process.title}</h4>
              <CardAction>
                <Badge variant='outline'>
                  <IconTrendingUp />
                  {process.trendValue}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className='flex-col items-start gap-1.5 text-sm'>
              <div className='line-clamp-1 flex gap-2 font-medium'>
                {process.footer} <IconTrendingUp className='size-4' />
              </div>
              <div className='text-muted-foreground'>{process.description}</div>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};
