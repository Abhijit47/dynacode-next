import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Zap } from 'lucide-react';
import { ReactNode } from 'react';

export default function OptimizationFeatures() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Why Choose Our Ads Management?
          </h3>
          <p>
            Expand your reach and build engaged communities with strategic
            content, paid social, and creator partnerships.
          </p>
        </hgroup>

        <OptimizationFeaturesCard />
      </div>
    </section>
  );
}

function OptimizationFeaturesCard() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {optimizationFeatures.map((feature) => (
        <Card className='group shadow-zinc-950/5 gap-0' key={feature.id}>
          <CardHeader className='pb-3'>
            <CardDecorator>
              <Zap className='size-6' aria-hidden />
            </CardDecorator>

            <h3 className='mt-6 font-medium'>{feature.title}</h3>
          </CardHeader>

          <CardContent>
            <p className='text-sm'>{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function CardDecorator({ children }: { children: ReactNode }) {
  return (
    <div className='mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]'>
      <div
        aria-hidden
        className='absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50'
      />

      <div className='bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t'>
        {children}
      </div>
    </div>
  );
}

const optimizationFeatures = [
  {
    id: crypto.randomUUID(),
    title: 'Data-Driven Optimization',
    description:
      'Continuous testing and optimization based on performance data across all platforms.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Precision Targeting',
    description:
      'Advanced audience targeting to reach your ideal customers across Google and social platforms.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Budget Optimization',
    description:
      'Smart budget allocation and bid management to maximize your advertising ROI across all channels.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Multi-Platform Expertise',
    description:
      'Comprehensive management across Google, Facebook, Instagram, and other advertising platforms.',
  },
];
