import { processes } from '@/constants';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export default function OurTimeline() {
  return (
    <section
      className={'container mx-auto max-w-(--breakpoint-md) px-4 2xl:px-0'}>
      <div className='px-4'>
        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute inset-y-0 left-0 border-l-2' />

          {processes.map((process, index) => (
            <TimelineItem key={index} {...process} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  title,
  description,
  completed,
  index,
}: Process & { index: number }) {
  return (
    <div className='relative pb-6 md:pb-8 lg:pb-10 pl-6 lg:pl-10 last:pb-0'>
      {/* Timeline Icon */}
      <div
        className={cn(
          'absolute left-px flex size-5 lg:size-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-muted-foreground/40 bg-accent ring-8 ring-background',
          {
            'border-primary bg-primary text-primary-foreground': completed,
          },
        )}>
        <span className='font-semibold text-sm md:text-base lg:text-lg'>
          {completed === true ? (
            <Check className='size-3 lg:size-5' />
          ) : (
            index + 1
          )}
        </span>
      </div>

      {/* Content */}
      <div className='space-y-2 pt-1'>
        <h3 className='font-semibold text-base md:text-lg lg:text-xl tracking-[-0.01em]'>
          {title}
        </h3>
        <p className='text-xs sm:text-sm lg:text-base text-muted-foreground'>
          {description}
        </p>
      </div>
    </div>
  );
}
