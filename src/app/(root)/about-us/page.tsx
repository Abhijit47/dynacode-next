import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-2 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>About Us</h2>
              </CardTitle>
              <CardDescription>
                <p className='text-center text-lg md:text-xl'>
                  At DynaCode, we are passionate about empowering developers and
                  businesses with cutting-edge web solutions. Our mission is to
                  deliver high-quality, scalable, and innovative software that
                  drives success in the digital age.
                </p>
              </CardDescription>
              <CoolMode
              // options={{
              //   particle:
              //     'https://pbs.twimg.com/profile_images/1782811051504885763/YR5-kWOI_400x400.jpg',
              // }}
              >
                <Button>Click Me!</Button>
              </CoolMode>
            </CardContent>
          </Card>
        </WarpBackground>
      </section>

      <section>
        <div className='overflow-auto rounded-lg outline outline-white/5'>
          <div className='mx-auto flex items-center p-16 max-sm:p-6'>
            <Image
              className='aspect-square max-h-72 w-full mask-radial-[100%_200%] mask-radial-from-transparent mask-radial-from-15% mask-radial-to-black mask-radial-to-60% mask-radial-at-right object-cover object-top-left dark:hidden'
              alt=''
              width={1282}
              height={532}
              src='https://tailwindcss.com/_next/static/media/keyboard-light.fbe8285c.png'
            />
            <Image
              className='hidden aspect-square max-h-72 w-full mask-radial-[100%_200%] mask-radial-from-transparent mask-radial-from-15% mask-radial-to-black mask-radial-to-60% mask-radial-at-right object-cover object-top-left dark:block'
              alt=''
              width={1282}
              height={532}
              src='https://tailwindcss.com/_next/static/media/keyboard-dark.8bd29bbf.png'
            />
            <div className='font-medium max-sm:-mx-3'>
              <p className='font-mono text-xs text-blue-500 uppercase dark:text-blue-400'>
                Speed
              </p>
              <p className='mt-2 text-base whitespace-nowrap text-gray-700 dark:text-gray-300'>
                Built for power users
              </p>
              <p className='mt-1 text-sm leading-relaxed text-balance text-gray-500'>
                Work faster than ever with our keyboard shortcuts
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
