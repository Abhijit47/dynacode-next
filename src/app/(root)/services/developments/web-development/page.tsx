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

export default function WebDevelopmentPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  Web Development Services
                </h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Discover our web development services, delivering robust and
                  scalable websites tailored to your business needs.
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
              Our Web Development Services
            </h3>
            <p>
              Fast, scalable websites and apps built with modern best practices
            </p>
          </hgroup>

          <Services />
        </div>
      </section>

      <CTASection3 />
    </main>
  );
}

type WebDevelopmentFeatures = {
  id: string;
  category: string;
  title: string;
  details: string;
  tutorialLink: Route;
}[];
const webDevelopmentFeatures: WebDevelopmentFeatures = [
  {
    id: crypto.randomUUID(),
    category: 'Web Development',
    title: 'Web Development Services',
    details:
      "Welcome to DYNACODE, your premier web development partner. We specialize in creating stunning, responsive websites tailored to boost your online presence and drive business growth. Let's build your digital success together.",
    tutorialLink: '/contact-us',
  },
  {
    id: crypto.randomUUID(),
    category: 'E-commerce Platforms',
    title: 'E-commerce Website',
    details: `At Dynacode, we transform your e-commerce vision into a thriving online reality with cutting-edge solutions that propel digital success. Our adept team of professionals excels in crafting visually captivating and user-centric e-commerce websites that harmonize flawlessly with your brand identity and objectives. Whether you require a streamlined online store or a sophisticated e-commerce platform, we possess the expertise and ingenuity to bring your project to fruition. Partner with us to elevate your online presence with a bespoke e-commerce solution that distinguishes itself in the competitive digital arena.`,
    tutorialLink: '/contact-us',
  },
  {
    id: crypto.randomUUID(),
    category: 'Content Management Systems',
    title: 'Wordpress Website',
    details: `At Dynacode, we excel in WordPress development, turning your online vision into a dynamic reality. Our proficient team of experts harnesses the robust capabilities of WordPress to craft visually stunning websites that seamlessly integrate with your brand and objectives. Whether you envision a sleek blog or a multifaceted e-commerce platform, we have the expertise and creativity to bring your project to life. Partner with us on your next WordPress endeavor, and let's illuminate your online presence with exceptional design and functionality.`,
    tutorialLink: '/contact-us',
  },
  {
    id: crypto.randomUUID(),
    category: 'Full-Stack Development',
    title: 'Full-Stack Solutions',
    details: `Unlock the potential of full-stack technology with Dynacode. Our dedicated team of professionals excels in crafting innovative projects that leverage the power of full-stack development to enhance your digital presence. From seamless integrations to state-of-the-art solutions, we transform your vision into reality. Partner with us and elevate your project to new heights with our expertise and creativity in full-stack development.`,
    tutorialLink: '/contact-us',
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
          {webDevelopmentFeatures.map((feature) => (
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

/*
can you convert this data into this shape
const data = {
  id: crypto.randomUUID(),
  title: '',
  description:  ' ',
  items: [' '],
};

*/

const webDevelopmentServices = [
  {
    id: crypto.randomUUID(),
    title: 'E-COMMERCE WEBSITES',
    description: 'High-converting stores with secure checkout and integrations',
    items: [
      'Shopify/WooCommerce',
      'Payment Gateways',
      'Inventory & Orders',
      'Analytics & SEO',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'CUSTOM WORDPRESS',
    description: 'Custom themes, plugins, and CMS setups for flexibility',
    items: [
      'Theme Development',
      'Plugin Development',
      'Headless WP',
      'Speed Optimization',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'FULL-STACK APPS',
    description: 'MERN/Next.js apps with robust APIs and SSR/SSG',
    items: ['Next.js/React', 'Node.js/Express', 'REST/GraphQL', 'Auth & RBAC'],
  },
  {
    id: crypto.randomUUID(),
    title: 'PERFORMANCE & SEO',
    description: 'Improve Core Web Vitals and search visibility',
    items: [
      'CWV Optimization',
      'Lazy Loading',
      'Image Optimization',
      'Semantic HTML',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'MAINTENANCE & SUPPORT',
    description: 'Ongoing updates, backups, and security hardening',
    items: [
      'Uptime Monitoring',
      'Backup & Restore',
      'Patching',
      'Issue Resolution',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'INTEGRATIONS & APIS',
    description: 'Connect your site with CRMs, ERPs, and third-party tools',
    items: [
      'REST/GraphQL',
      'Webhook Flows',
      'OAuth2/SAML',
      'Custom Connectors',
    ],
  },
];

const Services = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {webDevelopmentServices.map((service) => (
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
