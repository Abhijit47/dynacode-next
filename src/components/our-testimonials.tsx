import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/constants';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import { BorderBeam } from './extends/border-beam';
import { Marquee } from './extends/marquee';

function Testimonials() {
  return (
    <div className='flex min-h-screen items-center justify-center pb-24'>
      <div className='h-full w-full'>
        <h2 className='text-pretty px-6 text-center font-semibold text-5xl tracking-[-0.03em]'>
          Success Stories
        </h2>
        <p className='mt-3 text-center text-muted-foreground text-xl'>
          Real stories from people who use and love our product every day
        </p>
        <div className='relative mt-14'>
          <div className='absolute inset-y-0 left-0 z-10 w-[15%] bg-linear-to-r from-background to-transparent' />
          <div className='absolute inset-y-0 right-0 z-10 w-[15%] bg-linear-to-l from-background to-transparent' />
          <Marquee className='[--duration:20s]' pauseOnHover>
            <TestimonialList />
          </Marquee>
          <Marquee className='mt-0 [--duration:20s]' pauseOnHover reverse>
            <TestimonialList />
          </Marquee>
        </div>
      </div>
    </div>
  );
}

function TestimonialList() {
  return testimonials.map((testimonial) => (
    <div
      className='min-w-96 max-w-sm rounded-xl bg-accent p-6 relative overflow-hidden'
      key={testimonial.id}>
      <BorderBeam
        duration={4}
        size={300}
        reverse
        className='from-transparent via-green-500 to-transparent'
      />
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Avatar className='size-10'>
            <AvatarFallback className='bg-primary font-medium text-primary-foreground text-xl'>
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className='font-semibold'>{testimonial.name}</p>
            <p className='text-gray-500 text-sm'>{testimonial.designation}</p>
          </div>
        </div>
        <Button asChild size='icon' variant='ghost'>
          <Link href='#' target='_blank'>
            <TwitterLogo className='h-4 w-4' />
          </Link>
        </Button>
      </div>
      <p className='mt-5 text-[17px]'>{testimonial.testimonial}</p>
    </div>
  ));
}

function TwitterLogo(props: ComponentProps<'svg'>) {
  return (
    <svg
      role='img'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <title>X</title>
      <path
        d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default Testimonials;
