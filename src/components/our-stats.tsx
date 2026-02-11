import { stats } from '@/constants';
import SlotCounter from 'react-slot-counter';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function OurStats() {
  return (
    <section
      className={'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0'}>
      <div className='flex items-center justify-center'>
        <div className=''>
          <h2 className='font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter'>
            The perfect starting point for any project
          </h2>
          <p className='mt-4 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground'>
            The world&apos;s most advanced UI kit for Figma. Meticulously
            crafted with 100% Auto Layout 5.0, variables, smart variants, and
            WCAG accessibility.
          </p>

          <div className='mt-8 md:mt-12 lg:mt-16 grid justify-center gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-8 md:gap-y-12 lg:gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {stats.map((item) => (
              <StatCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, description, stat, prefix }: Stat) {
  return (
    <div className='relative overflow-hidden rounded-xl'>
      <div
        className='absolute inset-1 z-0 rounded-lg'
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--border) 2px, var(--border) 4px)',
          opacity: 0.5, // Adjust this value (0.0 to 1.0) to change opacity
        }}
      />
      <Card className='z-10 isolate h-full bg-transparent border-border border-2 gap-2 md:gap-4'>
        <CardHeader>
          <CardTitle>
            <span className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight'>
              <SlotCounter
                value={stat}
                duration={3}
                dummyCharacterCount={10}
                direction='top-down'
                useMonospaceWidth
                animateOnVisible={{
                  triggerOnce: false,
                  rootMargin: '0px 0px -100px 0px',
                }}
              />
              <sup>{prefix}</sup>
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='font-medium text-lg'>{title}</p>
          <p className='mt-2 text-sm text-muted-foreground'>{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
