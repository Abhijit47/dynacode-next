import { IconPhoneCalling } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

export default function CTASection3() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className=''>
        <div className=''>
          <div className='relative mx-auto flex flex-col justify-between gap-0 overflow-hidden bg-linear-to-r from-muted px-10 ring-2 ring-border sm:rounded-xl sm:shadow-lg md:flex-row md:gap-8'>
            <div className='pt-14 pb-0 md:pb-14 space-y-6'>
              <h2 className='font-semibold text-4xl tracking-tight lg:text-5xl'>
                Build Beautiful UIs, Faster
              </h2>
              <p className='mt-4 text-muted-foreground text-xl lg:text-2xl'>
                Grab this exclusive deal before it&apos;s gone.
              </p>
              <Link
                href={'/contact-us'}
                className={buttonVariants({
                  variant: 'default',
                  size: 'lg',
                  className: 'rounded-full!',
                })}>
                Schedule a free call
                <IconPhoneCalling className={'size-6'} />
              </Link>
            </div>
            <Image
              src='https://pro.shadcnui-blocks.com/images/cta-mobile.png'
              className='mt-auto aspect-square w-full max-w-xs md:h-72 md:w-auto md:max-w-none'
              alt='cta-cover'
              width={1920}
              height={1920}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
