import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className={'h-dvh w-full flex items-center justify-center'}>
      <section className='container mx-auto text-center px-4'>
        <div className={'space-y-6'}>
          <h1 className='text-center text-7xl font-extrabold font-serif'>
            404
          </h1>
          <div className='space-y-4'>
            <h3 className='text-3xl font-bold'>Look like you&apos;re lost</h3>

            <p>the page you are looking for not avaible!</p>

            <Link
              href='/'
              className={buttonVariants({
                variant: 'outline',
                size: 'lg',
              })}>
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
