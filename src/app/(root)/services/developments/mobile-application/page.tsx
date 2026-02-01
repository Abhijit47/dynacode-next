import { Icons } from '@/components/card-6';
import CTASection3 from '@/components/cta-section-03';
import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IconHandClick } from '@tabler/icons-react';
import { ArrowRightCircle } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';

export default function MobileApplicationPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  Mobile Application Development
                </h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Welcome to DYNACODE, your premier mobile development partner.
                  We specialize in creating powerful iOS and Android
                  applications that deliver exceptional user experiences and
                  drive business growth. Let&apos;s build your mobile success
                  together.
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

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <Features />
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Mobile App Development Services
            </h3>
            <p>
              Launch performant mobile apps with great UX and maintainability
            </p>
          </hgroup>

          <Services />
        </div>
      </section>

      <CTASection3 />
    </main>
  );
}

const features = [
  {
    category: 'Transform your ideas into powerful mobile applications!',
    title: 'Mobile apps development',
    details:
      'Unlock the potential of mobile technology with Dynacode. Our dedicated team of mobile developers excels in creating high-performance iOS and Android applications that engage users and drive business growth. From native development to cross-platform solutions, we transform your vision into seamless mobile experiences. Partner with us and elevate your project to new heights with our expertise and creativity in mobile development.',
    tutorialLink: '#',
  },
  {
    category: 'Cross-Platform Solutions',
    title: 'Reach more users with a single codebase',
    details:
      'Leverage powerful frameworks like React Native and Flutter to deploy high-quality apps on both iOS and Android simultaneously. Our cross-platform approach reduces development time and costs while maintaining native-level performance and a consistent look and feel across all devices.',
    tutorialLink: '#',
  },
  {
    category: 'Cloud Backend Integration',
    title: 'Scalable infrastructure for mobile growth',
    details:
      'Power your mobile apps with robust cloud architectures. We integrate secure RESTful APIs, real-time databases like Firebase, and serverless functions to ensure your app handles user growth effortlessly while keeping sensitive data protected with industry-standard encryption.',
    tutorialLink: '#',
  },
  {
    category: 'Offline-First Architecture',
    title: 'Seamless functionality without connectivity',
    details:
      'Ensure your users stay productive even in dead zones. We implement local data persistence and smart synchronization logic that allows your app to function flawlessly offline and automatically sync changes once a network connection is re-established.',
    tutorialLink: '#',
  },
  {
    category: 'App Store Optimization (ASO)',
    title: 'Maximize visibility and organic downloads',
    details:
      'Launch with a competitive edge using our ASO strategies. Beyond development, we optimize your App Store and Play Store presence through keyword research, compelling descriptions, and high-conversion screenshots to ensure your product stands out in a crowded marketplace.',
    tutorialLink: '#',
  },
];

const Features = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className=''>
        {/* <h2 className='text-pretty font-semibold text-4xl tracking-[-0.03em] sm:mx-auto sm:max-w-xl sm:text-center md:text-[2.75rem] md:leading-[1.2]'>
          Strengthen Your Strategy
        </h2>
        <p className='mt-2 text-lg text-muted-foreground sm:text-center sm:text-xl'>
          Enhance your strategy with intelligent tools designed for success.
        </p> */}
        <div className='mx-auto mt-8 w-full space-y-20 md:mt-16'>
          {features.map((feature) => (
            <div
              className='flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse'
              key={feature.category}>
              <div className='aspect-4/3 w-full basis-1/2 rounded-xl border border-border/50 bg-muted' />
              <div className='shrink-0 basis-1/2'>
                <span className='font-medium text-muted-foreground text-sm uppercase'>
                  {feature.category}
                </span>
                <h4 className='my-3 font-semibold text-3xl tracking-[-0.02em]'>
                  {feature.title}
                </h4>
                <p className='text-muted-foreground'>{feature.details}</p>
                <Button asChild className='mt-6 gap-3 rounded-full' size='lg'>
                  <Link href={feature.tutorialLink as Route}>
                    Learn More <ArrowRightCircle />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mobileServices = [
  {
    id: crypto.randomUUID(),
    title: 'IOS & ANDROID APPS',
    description: 'Native-feel apps with consistent performance',
    items: [
      'React Native',
      'Native Modules',
      'Offline-first',
      'Push Notifications',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'APP UI/UX',
    description: 'Mobile design systems and interaction patterns',
    items: ['Design Systems', 'Animations', 'Accessibility', 'Theming'],
  },
  {
    id: crypto.randomUUID(),
    title: 'APIS & BACKENDS',
    description: 'Secure, scalable backends for your mobile apps',
    items: ['Node.js/NestJS', 'Auth & Payments', 'File/Media', 'Analytics'],
  },
  {
    id: crypto.randomUUID(),
    title: 'TESTING & RELEASE',
    description: 'Reliable release pipelines and app health',
    items: [
      'Unit/E2E Tests',
      'Crash Reporting',
      'App Store/Play Console',
      'OTA Updates',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'INTEGRATIONS',
    description: 'Connect to payments, maps, social, and more',
    items: [
      'Stripe/PayPal',
      'Maps & Location',
      'Camera & Media',
      'Social SDKs',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'MAINTENANCE',
    description: 'Keep apps up-to-date and optimized over time',
    items: [
      'Performance Tuning',
      'Dependency Updates',
      'Security Patches',
      'Feature Roadmap',
    ],
  },
];

const Services = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {mobileServices.map((service) => (
        <Card
          key={service.id}
          className='relative rounded-none shadow-none border-double'>
          <Icons />
          <CardHeader>
            <CardTitle>
              <h4>{service.title}</h4>
            </CardTitle>
            <CardDescription>
              <p>{service.description}</p>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ul className='space-y-2'>
              {service.items.map((item, index) => (
                <li key={index} className='list-disc list-inside'>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
