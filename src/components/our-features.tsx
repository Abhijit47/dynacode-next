import { ArrowRight } from 'lucide-react';
import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { features } from '@/constants';

export default function OurFeatures() {
  return (
    <section
      className={'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0'}>
      <div className=''>
        <div className=''>
          <h2 className='text-pretty font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[-0.03em] sm:mx-auto sm:max-w-xl sm:text-center md:text-[2.75rem] md:leading-[1.2]'>
            About Us
          </h2>
          <p className='mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground sm:text-center'>
            We Transform Your Business Through Strategic Marketing Excellence
          </p>
          <div className='mx-auto mt-4 lg:mt-8 w-full space-y-20 md:mt-16'>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard(props: OurFeature) {
  const { category, title, details, tutorialLink, image } = props;
  return (
    <div
      className='flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse'
      key={category}>
      <div className='aspect-4/3 w-full basis-1/2 rounded-xl'>
        {/* Image placeholder */}
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className='w-full h-full object-cover rounded-xl mask-[url(/assets/scribble.png)] mask-x-from-70% mask-x-to-90% mask-center mask-no-repeat'
          priority={false}
        />
      </div>
      <div className='shrink-0 basis-1/2'>
        <span className='text-muted-foreground text-xs font-semibold md:font-medium md:text-sm uppercase'>
          {category}
        </span>
        <h4 className='my-3 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[-0.02em]'>
          {title}
        </h4>
        <p className='text-muted-foreground text-sm md:text-base'>{details}</p>
        <Button asChild className='mt-6 gap-3 rounded-full'>
          <Link href={tutorialLink as Route}>
            Learn More <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
