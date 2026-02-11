import Link from 'next/link';
import Ripple from './extends/ripple';
import { buttonVariants } from './ui/button';

export default function CTASection() {
  return (
    <section className={'w-full h-full'}>
      <div className='aspect-square sm:aspect-video md:aspect-18/9 lg:aspect-26/9 relative'>
        <Ripple className={'bg-background'}>
          <div
            className={
              'container max-w-(--breakpoint-xl) w-full h-full mx-auto'
            }>
            <div
              className={
                'px-4 2xl:px-0 h-full w-full flex flex-col justify-center'
              }>
              <hgroup className='mb-8 max-w-2xl space-y-4'>
                <h2 className='font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:leading-4 md:leading-6 lg:leading-10'>
                  Unlock Your Potential, Reach Out and Transform Your Business!
                </h2>
                <p className='text-sm md:text-base lg:text-lg'>
                  Elevate your business with our innovative solutions tailored
                  to your needs.
                </p>
              </hgroup>

              <div className='flex flex-wrap gap-4'>
                <Link
                  href={'#'}
                  className={buttonVariants({
                    size: 'default',
                  })}>
                  Get Started
                </Link>
                <Link
                  href={'/'}
                  className={buttonVariants({
                    variant: 'secondary',
                    size: 'default',
                  })}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Ripple>
        {/* <div className="rounded-2xl bg-linear-to-r bg-[url('https://images.unsplash.com/photo-1739785890803-7a2191a37ef5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-bottom px-8 py-10 md:px-16 md:py-20">
          <header className='mb-8 max-w-2xl space-y-4'>
            <h2 className='font-heading text-4xl leading-10 text-black lg:text-4xl'>
              Unlock Your Potential, Reach Out and Transform Your Business!
            </h2>
            <p className='text-lg text-black/60'>
              Elevate your business with our innovative solutions tailored to
              your needs.
            </p>
          </header>

          <div className='flex flex-wrap gap-4'>
            <Button size='lg'>Get Started</Button>
            <Button size='lg' variant='secondary'>
              Contact
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
