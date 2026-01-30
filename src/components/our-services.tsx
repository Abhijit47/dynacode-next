import { services } from '@/constants';
import { Badge } from './ui/badge';

export default function OurServices() {
  return (
    <section
      className={'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0'}>
      <div className='bg-background text-foreground'>
        <div className=''>
          <h2 className='text-pretty text-center font-semibold text-4xl tracking-tight sm:text-5xl'>
            Powerful Features, Built for You
          </h2>
          <p className='mt-3 text-center text-muted-foreground text-xl sm:text-2xl'>
            Comprehensive Solutions for Your Digital Growth
          </p>
          <div className='mt-16 grid grid-cols-1 gap-1.5 border bg-muted p-1.5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3'>
            {services.map((service, idx) => (
              <div
                className='relative -m-px border bg-card px-5 py-7'
                key={service.id}>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15'>
                  <service.icon />
                </div>
                <h3 className='mt-5 font-semibold text-xl tracking-[-0.005em]'>
                  {service.title}
                </h3>
                <p className='mt-2 text-base text-foreground/90'>
                  {service.description}
                </p>
                <Badge
                  variant={'outline'}
                  className={`rounded-none border-t-0 border-r-0 bg-muted/30 font-mono dark:border-foreground/15 dark:bg-background text-foreground absolute top-0 right-0`}>
                  {String(idx + 1).padStart(2, '0')}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
