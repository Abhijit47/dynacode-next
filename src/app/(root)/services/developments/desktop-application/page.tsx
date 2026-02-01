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

export default function DesktopApplicationPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  Desktop Application Development
                </h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Discover our desktop application development services,
                  offering tailored solutions for Windows, macOS, and Linux
                  platforms. Enhance your business with robust and user-friendly
                  desktop applications.
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
              Powerful Native & Desktop Solutions
            </h3>
            <p>
              Bridge the gap between web flexibility and OS-level performance.
              We build high-performance, secure applications using{' '}
              <strong>Electron</strong> and <strong>Tauri</strong> to deliver
              seamless experiences directly to your user&apos;s desktops.
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
    category: 'Cross-Platform Desktop Apps',
    title: 'Native power with web flexibility',
    details:
      'Build powerful, high-performance desktop applications for Windows, macOS, and Linux using Electron and Tauri. We combine the speed of web development with native system access, allowing your software to interact directly with hardware, file systems, and OS-level notifications.',
    tutorialLink: '#',
  },
  {
    category: 'Lightweight Executables',
    title: 'Optimized performance with Tauri',
    details:
      'Minimize your application’s footprint without sacrificing functionality. By utilizing Tauri, we create incredibly small and secure binaries that leverage the system’s native webview, resulting in faster startup times and lower memory consumption compared to traditional frameworks.',
    tutorialLink: '#',
  },
  {
    category: 'System Integration & Security',
    title: 'Deep OS-level capabilities',
    details:
      'Go beyond the browser with advanced features like global hotkeys, tray icons, and background processes. We implement robust security protocols to ensure your desktop software remains isolated from vulnerabilities while maintaining full access to necessary local APIs and system resources.',
    tutorialLink: '#',
  },
  {
    category: 'Auto-Updates & Distribution',
    title: 'Seamless software maintenance',
    details:
      'Keep your users on the latest version without manual intervention. We set up automated build pipelines and secure update servers that push patches and new features directly to your users, ensuring a consistent and bug-free experience across all desktop installations.',
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

const desktopServices = [
  {
    id: crypto.randomUUID(),
    title: 'CROSS-PLATFORM DESKTOP',
    description: 'High-performance apps for Windows, macOS, and Linux',
    items: [
      'Electron Development',
      'Tauri Apps',
      'NW.js',
      'Native Installers (MSI/DMG)',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'SYSTEM INTEGRATION',
    description: 'Deep OS-level access and hardware communication',
    items: [
      'File System APIs',
      'Tray Notifications',
      'Global Hotkeys',
      'Native Shell Access',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'LIGHTWEIGHT NATIVE APPS',
    description: 'Resource-efficient binaries with small footprints',
    items: [
      'Rust & Tauri Backend',
      'C++ / Qt Integration',
      'Low Memory Usage',
      'Fast Startup Times',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'SECURITY & SANDBOXING',
    description: 'Robust protection for desktop environments',
    items: [
      'Code Signing',
      'Process Isolation',
      'Encrypted Local Storage',
      'Secure Auto-updates',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'DESKTOP UI/UX',
    description: 'Optimized interfaces for large screen productivity',
    items: [
      'Multi-window Support',
      'Native Context Menus',
      'Drag-and-Drop Flows',
      'Dark Mode/Theming',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'DEPLOYMENT & CI/CD',
    description: 'Automated distribution and update pipelines',
    items: [
      'GitHub Action Builders',
      'App Store/MS Store',
      'Differential Updates',
      'Crash Reporting',
    ],
  },
];

const Services = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {desktopServices.map((service) => (
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
