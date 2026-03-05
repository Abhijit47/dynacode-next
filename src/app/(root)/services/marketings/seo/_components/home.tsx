import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { IconHandClick } from '@tabler/icons-react';
import Link from 'next/link';

export default function Home() {
  return (
    <section className={''}>
      <WarpBackground className={'-top-16'}>
        <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
          <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
            <CardTitle>
              <h2 className={'text-4xl font-black'}>SEO Services</h2>
            </CardTitle>
            <CardDescription className={'max-w-4xl mx-auto'}>
              <p className='text-center text-lg md:text-xl'>
                Enhance your online visibility and drive organic traffic with
                our expert SEO services.
              </p>
            </CardDescription>
            <CoolMode
            // options={{
            //   particle:
            //     'https://pbs.twimg.com/profile_images/1782811051504885763/YR5-kWOI_400x400.jpg',
            // }}
            >
              <Link
                href='/contact-us'
                className={buttonVariants({
                  size: 'lg',
                  className: 'rounded-full!',
                })}>
                Get in touch <IconHandClick className={'size-5'} />
              </Link>
            </CoolMode>
          </CardContent>
        </Card>
      </WarpBackground>
    </section>
  );
}
