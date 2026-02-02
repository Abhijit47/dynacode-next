import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Shapes1 } from './shapes';
import { buttonVariants } from './ui/button';

export default function CTASection1() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className='bg-background text-foreground'>
        <div className=''>
          <div className='relative overflow-hidden border-y px-10 py-14 text-center shadow-muted sm:rounded-xl sm:border-x sm:shadow-lg space-y-8'>
            <h2 className='text-balance font-semibold text-4xl tracking-tight md:leading-tight lg:text-5xl'>
              Build Beautiful UIs, Faster
            </h2>
            <p className='mt-3 text-2xl text-muted-foreground'>
              Discover powerful tools designed to supercharge your workflow.
            </p>
            <Link
              href={'/contact-us'}
              className={buttonVariants({
                size: 'lg',
                variant: 'default',
                className:
                  'rounded-full! z-2! h-12 px-6! text-base leading-[0.1]',
              })}>
              Get Started <ArrowUpRightIcon className='size-4' />
            </Link>
            <Shapes1 />
          </div>
        </div>
      </div>
    </section>
  );
}
