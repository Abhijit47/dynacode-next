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

export default function UIAndUXAndDesignPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  UI & UX Design Services
                </h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Welcome to DYNACODE, your premier UI/UX design partner. We
                  specialize in creating intuitive user interfaces,
                  comprehensive wireframes, and engaging user experiences that
                  drive conversions and user satisfaction. Let&apos;s design
                  your digital success together.
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
              Our UI/UX & Wireframing Services
            </h3>
            <p>
              Design systems and experiences that are beautiful, usable, and
              conversion-focused
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
    category: 'user experiences with design expertise!',
    title: 'UI/UX Design & Wireframing',
    details: `Unlock the potential of exceptional user interface and user experience design with Dynacode. Our dedicated team of UX/UI professionals excels in creating intuitive wireframes, user-centered designs, and engaging digital experiences that drive conversions. From comprehensive user research to interactive prototypes, we transform your vision into compelling digital solutions. Partner with us and elevate your project to new heights with our expertise and creativity in UI/UX design and wireframing.`,
    tutorialLink: '#',
  },
  {
    category: 'Design Systems',
    title: 'Scale your brand with consistency',
    details:
      'Establish a single source of truth with reusable UI components, typography scales, and design tokens. Our design systems ensure visual harmony across platforms while accelerating development through standardized documentation and asset libraries.',
    tutorialLink: '#',
  },
  {
    category: 'Motion Design',
    title: 'Bring interfaces to life with motion',
    details:
      'Enhance usability and delight users with functional micro-interactions and smooth transitions. We use motion to guide user focus, provide feedback, and create a sophisticated feel that sets your digital product apart from the competition.',
    tutorialLink: '#',
  },
  {
    category: 'Mobile-First Design',
    title: 'Optimized experiences for every screen',
    details:
      'Prioritize mobile users without sacrificing desktop functionality. We utilize responsive grids and touch-friendly patterns to ensure your application remains performant and intuitive, regardless of the device or screen size being used.',
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

const designServices = [
  {
    id: crypto.randomUUID(),
    title: 'UX RESEARCH',
    description:
      'User interviews, personas, and journey maps to align with real needs',
    items: [
      'User Interviews',
      'Personas',
      'Journey Mapping',
      'Heuristic Review',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'WIREFRAMING',
    description:
      'Low/high-fidelity wireframes that set clear structure and flows',
    items: [
      'Low/High Fidelity',
      'User Flows',
      'IA & Sitemap',
      'Content Strategy',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'UI DESIGN',
    description: 'Pixel-perfect visual design with brand-consistent components',
    items: [
      'Design Systems',
      'Component Libraries',
      'Responsive Design',
      'Design Tokens',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'PROTOTYPING',
    description:
      'Interactive prototypes for stakeholder buy-in and usability tests',
    items: [
      'Clickable Prototypes',
      'Micro-interactions',
      'Animation Specs',
      'Dev Handoffs',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'USABILITY TESTING',
    description:
      'Validate design decisions and iterate with real user feedback',
    items: ['Test Plans', 'Moderated/Unmoderated', 'Reporting', 'Insights'],
  },
  {
    id: crypto.randomUUID(),
    title: 'ACCESSIBILITY (A11Y)',
    description: 'Inclusive design meeting WCAG standards across devices',
    items: [
      'WCAG 2.1',
      'Keyboard/Screen Reader',
      'Color Contrast',
      'Docs & Training',
    ],
  },
];

const Services = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {designServices.map((service) => (
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
