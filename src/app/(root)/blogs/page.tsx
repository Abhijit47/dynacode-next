import {
  AnimatedBeamDemo1,
  AnimatedBeamDemo2,
  AnimatedBeamDemo3,
  AnimatedBeamMultipleOutputDemo4,
  AnimatedBeamMultipleOutputDemo5,
  GlobeDemo,
  IconCloudDemo,
  OrbitingCirclesDemo,
} from '@/components/extends/animated-beam-demo';
import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Blog from './_components/blog';

export default function BlogsPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-2 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>Blogs</h2>
              </CardTitle>
              <CardDescription>
                <p className='text-center text-lg md:text-xl'>
                  Sharing thoughts, tutorials, and insights on web development,
                  programming, and technology trends.
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
      <Blog />

      <AnimatedBeamDemo1 />
      <AnimatedBeamDemo2 />
      <AnimatedBeamDemo3 />
      <AnimatedBeamMultipleOutputDemo4 />
      <AnimatedBeamMultipleOutputDemo5 />
      <IconCloudDemo />
      <OrbitingCirclesDemo />
      <GlobeDemo />
    </main>
  );
}
