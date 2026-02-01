import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import { logos } from '@/components/shared/logos-svg';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';

export default function IconsPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-2 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>Company Assets</h2>
              </CardTitle>
              <CardDescription>
                <p className='text-center text-lg md:text-xl'>
                  Explore our collection of company logos and icons, designed to
                  represent our brand identity across various platforms.
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
        <div className={'flex flex-wrap items-center justify-center gap-6'}>
          {logos.map((logo, idx) => (
            <div
              className={'border-border border-2 p-6 relative'}
              key={logo.id}>
              <Badge className={'absolute top-0 right-0 rounded-none'}>
                {idx + 1}
              </Badge>
              {<logo.Component />}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
