import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';

export default function CyberSecurityServicesPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-2 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  Cyber Security Services
                </h2>
              </CardTitle>
              <CardDescription>
                <p className='text-center text-lg md:text-xl'>
                  Protect your digital assets with our comprehensive cyber
                  security services, tailored to safeguard your business from
                  evolving threats.
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
      CyberSecurityServicesPage
    </main>
  );
}
