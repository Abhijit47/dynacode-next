import { Button } from '@/components/ui/button';
import { ArrowRightCircleIcon } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';

export default function Features() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <FeaturesCard />
    </section>
  );
}

const features = [
  {
    id: crypto.randomUUID(),
    category: 'Threat Intelligence',
    title: 'Proactive 24/7 monitoring and response',
    details:
      'Stay ahead of sophisticated attackers with AI-driven threat hunting and real-time security operations. We monitor your entire digital perimeter to detect anomalies and neutralize potential breaches before they can impact your core business operations.',
    tutorialLink: '#',
  },
  {
    id: crypto.randomUUID(),
    category: 'Zero Trust Architecture',
    title: 'Modernize your perimeter security',
    details:
      'Eliminate implicit trust with a robust Zero Trust framework tailored for 2026’s remote and hybrid work environments. We implement strict identity verification and micro-segmentation to ensure that only authorized users access sensitive data.',
    tutorialLink: '#',
  },
  {
    id: crypto.randomUUID(),
    category: 'Vulnerability Management',
    title: 'Identify and patch critical weak points',
    details:
      'Our automated VAPT services conduct continuous penetration testing and scanning of your web apps and infrastructure. We prioritize risks based on exploitability and business impact, providing clear remediation paths to harden your systems.',
    tutorialLink: '#',
  },
  {
    id: crypto.randomUUID(),
    category: 'Cloud & API Security',
    title: 'Protect your modern application stack',
    details:
      'Secure your cloud-native workloads and microservices against the latest OWASP threats. We implement advanced API gateways, secrets management, and container security to ensure your data remains encrypted and protected across all cloud providers.',
    tutorialLink: '#',
  },
];

const FeaturesCard = () => {
  return (
    <div className=''>
      <div className=''>
        {/* <h2 className='text-pretty font-semibold text-4xl tracking-[-0.03em] sm:mx-auto sm:max-w-xl sm:text-center md:text-[2.75rem] md:leading-[1.2]'>
          Strengthen Your Strategy
        </h2>
        <p className='mt-2 text-lg text-muted-foreground sm:text-center sm:text-xl'>
          Enhance your strategy with intelligent tools designed for success.
        </p> */}
        <div className='w-full space-y-20'>
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
                    Learn More <ArrowRightCircleIcon />
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
