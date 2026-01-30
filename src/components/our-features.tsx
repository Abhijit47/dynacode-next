import { Button } from '@/components/ui/button';
import { features } from '@/constants';
import { ArrowRight } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';

export default function OurFeatures() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className=''>
        <div className=''>
          <h2 className='text-pretty font-semibold text-4xl tracking-[-0.03em] sm:mx-auto sm:max-w-xl sm:text-center md:text-[2.75rem] md:leading-[1.2]'>
            About Us
          </h2>
          <p className='mt-2 text-lg text-muted-foreground sm:text-center sm:text-xl'>
            We Transform Your Business Through Strategic Marketing Excellence
          </p>
          <div className='mx-auto mt-8 w-full space-y-20 md:mt-16'>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ category, title, details, tutorialLink }: Feature) {
  return (
    <div
      className='flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse'
      key={category}>
      <div className='aspect-4/3 w-full basis-1/2 rounded-xl border border-border/50 bg-muted' />
      <div className='shrink-0 basis-1/2'>
        <span className='font-medium text-muted-foreground text-sm uppercase'>
          {category}
        </span>
        <h4 className='my-3 font-semibold text-3xl tracking-[-0.02em]'>
          {title}
        </h4>
        <p className='text-muted-foreground'>{details}</p>
        <Button asChild className='mt-6 gap-3 rounded-full' size='lg'>
          <Link href={tutorialLink as Route}>
            Learn More <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
