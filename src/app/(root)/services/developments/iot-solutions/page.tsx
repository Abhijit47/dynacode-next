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

export default function IOTSolutionsPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-2 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  IoT Solutions Development
                </h2>
              </CardTitle>
              <CardDescription>
                <p className='text-center text-lg md:text-xl'>
                  Explore our IoT solutions development services, delivering
                  innovative and connected devices that enhance efficiency and
                  productivity across various industries.
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
              Intelligent IoT & Connected Ecosystems
            </h3>
            <p>
              Bring your hardware to life with seamless connectivity and
              real-time data. We develop robust{' '}
              <strong>embedded systems</strong> and{' '}
              <strong>smart dashboards</strong> using <strong>MQTT</strong>,
              <strong>LoRaWAN</strong>, and <strong>Edge Computing</strong> to
              turn raw sensor data into actionable business intelligence.
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
    category: 'Hardware Integration',
    title: 'Bridge the gap between digital and physical',
    details:
      'Seamlessly connect sensors, actuators, and microcontrollers like Raspberry Pi and ESP32 to your software ecosystem. We build custom firmware that ensures reliable data collection and hardware control in any environment.',
    tutorialLink: '#',
  },
  {
    category: 'Real-time Telemetry',
    title: 'Monitor your assets in high definition',
    details:
      'Track device health and environmental data instantly using MQTT and WebSockets. Our systems provide low-latency updates and visual dashboards, allowing you to react to hardware changes the second they happen.',
    tutorialLink: '#',
  },
  {
    category: 'Edge Intelligence',
    title: 'Process data where it happens',
    details:
      'Reduce latency and bandwidth costs by implementing Edge Computing. We deploy TinyML and local logic to your IoT devices, enabling them to make critical decisions on-site without relying on a constant cloud connection.',
    tutorialLink: '#',
  },
  {
    category: 'OTA Updates & Security',
    title: 'Future-proof your hardware remotely',
    details:
      'Maintain your fleet with secure Over-The-Air (OTA) updates and end-to-end encryption. Push new features, security patches, and bug fixes to thousands of devices simultaneously without needing physical access.',
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

const iotServices = [
  {
    id: crypto.randomUUID(),
    title: 'EMBEDDED SYSTEMS',
    description: 'Custom firmware and hardware integration for smart devices',
    items: [
      'Raspberry Pi / Arduino',
      'ESP32 & STM32 Firmware',
      'C++ / MicroPython',
      'Sensor Integration',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'CONNECTIVITY & PROTOCOLS',
    description: 'Reliable communication layers for distributed networks',
    items: [
      'MQTT & WebSockets',
      'LoRaWAN / Zigbee',
      'BLE (Bluetooth Low Energy)',
      'Cellular IoT (NB-IoT)',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'IOT CLOUD PLATFORMS',
    description: 'Centralized device management and data aggregation',
    items: [
      'AWS IoT Core',
      'Azure IoT Hub',
      'Google Cloud IoT',
      'ThingsBoard Dashboards',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'EDGE COMPUTING',
    description: 'Processing data locally for ultra-low latency actions',
    items: [
      'Edge Impulse (TinyML)',
      'Local Data Filtering',
      'Real-time Analytics',
      'Greengrass / K3s',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'SMART DASHBOARDS',
    description: 'Visual control centers for monitoring and automation',
    items: [
      'Real-time Telemetry',
      'Remote Device Control',
      'Grafana Visualization',
      'Custom Admin Panels',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'IOT SECURITY',
    description: 'End-to-end protection for connected hardware',
    items: [
      'Secure Boot & OTA',
      'End-to-End Encryption',
      'Identity Management',
      'Vulnerability Patching',
    ],
  },
];

const Services = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {iotServices.map((service) => (
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
