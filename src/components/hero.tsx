// import { BackgroundPattern } from '@/components/extends/background-pattern';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
// import BackgroundLetterGlitch from './extends/background-letter-glitch';
import { FlickeringGrid } from './extends/flickering-grid';

export default function Hero() {
  return (
    <section className={'bg-background relative h-full md:h-dvh w-full'}>
      <FlickeringGrid
        className='relative w-full h-full inset-0 z-0 mask-[radial-gradient(450px_circle_at_center,white,transparent)]'
        squareSize={6}
        gridGap={6}
        color='oklch(0.4999999999999999 0.09119999999999999 181.912)'
        maxOpacity={0.5}
        flickerChance={0.1}
      />

      <div className={'absolute top-0 lg:top-0 left-0 h-full w-full'}>
        <div className={'container mx-auto z-10 max-w-(--breakpoint-xl)'}>
          <div className='flex h-dvh items-center justify-center z-50'>
            {/* <BackgroundPattern /> */}

            <div className='relative z-10 max-w-5xl text-center px-4'>
              <Badge
                asChild
                className='rounded-full border-border py-1'
                variant='secondary'>
                <Link href='#'>
                  Introducing DynaCode v1.0.0{' '}
                  <ArrowUpRight className='ml-1 size-4' />
                </Link>
              </Badge>
              <h1 className='mt-6 font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tighter md:leading-[1.2] lg:text-7xl'>
                Elevate Your Digital Presence & Scale Faster With DynaCode
              </h1>
              <p className='mt-6 text-foreground/80 md:text-lg'>
                Explore a collection of Shadcn UI blocks and components, ready
                to preview and copy. Streamline your development workflow with
                easy-to-implement examples.
              </p>
              <div className='mt-12 flex flex-wrap items-center justify-center gap-4'>
                <Button className='rounded-full text-base' size='default'>
                  Get Started <ArrowUpRight className='h-5! w-5!' />
                </Button>
                {/* <Button
                  className='rounded-full text-base shadow-none'
                  size='lg'
                  variant='outline'>
                  <CirclePlay className='h-5! w-5!' /> Watch Demo
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <BackgroundLetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={true}
        smooth={true}>
      </BackgroundLetterGlitch> */}
    </section>
  );
}
