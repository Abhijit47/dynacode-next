// import { BackgroundPattern } from '@/components/extends/background-pattern';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CirclePlay } from 'lucide-react';
import Link from 'next/link';
import BackgroundLetterGlitch from './extends/background-letter-glitch';

export default function Hero() {
  return (
    <section className={'w-full h-full'}>
      <BackgroundLetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={true}
        smooth={true}>
        <div className={'container mx-auto max-w-(--breakpoint-xl) px-4'}>
          <div className='flex h-dvh items-center justify-center z-50'>
            {/* <BackgroundPattern /> */}

            <div className='relative z-10 max-w-5xl text-center'>
              <Badge
                asChild
                className='rounded-full border-border py-1'
                variant='secondary'>
                <Link href='#'>
                  Introducing DynaCode v1.0.0{' '}
                  <ArrowUpRight className='ml-1 size-4' />
                </Link>
              </Badge>
              <h1 className='mt-6 font-semibold text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-7xl'>
                Elevate Your Digital Presence & Scale Faster With DynaCode
              </h1>
              <p className='mt-6 text-foreground/80 md:text-lg'>
                Explore a collection of Shadcn UI blocks and components, ready
                to preview and copy. Streamline your development workflow with
                easy-to-implement examples.
              </p>
              <div className='mt-12 flex items-center justify-center gap-4'>
                <Button className='rounded-full text-base' size='lg'>
                  Get Started <ArrowUpRight className='h-5! w-5!' />
                </Button>
                <Button
                  className='rounded-full text-base shadow-none'
                  size='lg'
                  variant='outline'>
                  <CirclePlay className='h-5! w-5!' /> Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </BackgroundLetterGlitch>
    </section>
  );
}
