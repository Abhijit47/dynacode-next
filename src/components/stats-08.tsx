'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { type ChartConfig, ChartContainer } from '@/components/ui/chart';
import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts';

const data = [
  {
    name: 'Blog Posts',
    progress: 67,
    budget: '67% More Leads',
    current: 'Organic Traffic',
    href: '#',
    fill: 'var(--chart-1)',
  },
  {
    name: 'Video Content',
    progress: 85, // Representative value for high engagement
    budget: '1200% More Shares',
    current: 'Boost Engagement',
    href: '#',
    fill: 'var(--chart-2)',
  },
  {
    name: 'Infographics',
    progress: 90, // Representative value for high readability
    budget: '30x More Read',
    current: 'Visual Data',
    href: '#',
    fill: 'var(--chart-3)',
  },
  {
    name: 'Case Studies',
    progress: 73,
    budget: '73% Influence',
    current: 'Success Stories',
    href: '#',
    fill: 'var(--chart-4)',
  },
  {
    name: 'Whitepapers',
    progress: 79,
    budget: '79% Share Contact',
    current: 'Industry Insights',
    href: '#',
    fill: 'var(--chart-5)',
  },
  {
    name: 'Podcasts',
    progress: 80, // Representative value for high growth
    budget: '320% Faster Growth',
    current: 'Audio Consumption',
    href: '#',
    fill: 'var(--chart-1)',
  },
];

const chartConfig = {
  progress: {
    label: 'Progress',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

export default function Stats08() {
  return (
    <dl className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {data.map((item) => (
        <Card key={item.name} className='p-0 gap-0'>
          <CardContent className='p-4'>
            <div className='flex items-center space-x-3'>
              <div className='relative flex items-center justify-center'>
                <ChartContainer config={chartConfig} className='h-20 w-20'>
                  <RadialBarChart
                    data={[item]}
                    innerRadius={30}
                    outerRadius={60}
                    barSize={6}
                    startAngle={90}
                    endAngle={-270}>
                    <PolarAngleAxis
                      type='number'
                      domain={[0, 100]}
                      angleAxisId={0}
                      tick={false}
                      axisLine={false}
                    />
                    <RadialBar
                      dataKey='progress'
                      background
                      cornerRadius={10}
                      fill={item.fill}
                      angleAxisId={0}
                    />
                  </RadialBarChart>
                </ChartContainer>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <span className='text-base font-medium text-foreground'>
                    {item.progress}%
                  </span>
                </div>
              </div>
              <div>
                <dd className='text-base font-medium text-foreground'>
                  {item.current} / {item.budget}
                </dd>
                <dt className='text-sm text-muted-foreground'>
                  Budget {item.name}
                </dt>
              </div>
            </div>
          </CardContent>
          <CardFooter className='flex items-center justify-end border-t border-border p-0!'>
            <a
              href={item.href}
              className='text-sm font-medium text-primary px-6 py-3 hover:text-primary/90'>
              View more &#8594;
            </a>
          </CardFooter>
        </Card>
      ))}
    </dl>
  );
}
