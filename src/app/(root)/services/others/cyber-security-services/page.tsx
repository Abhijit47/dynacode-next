import { Icons } from '@/components/card-6';
import CTASection1 from '@/components/cta-section-01';
import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import TechnologyPartners from '@/components/shared/technology-partners';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IconHandClick } from '@tabler/icons-react';
import { ArrowRightCircleIcon } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';

export default function CyberSecurityServicesPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>
                  Cyber Security Services
                </h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Welcome to DYNACODE, your cybersecurity partner. We safeguard
                  your digital assets with advanced security solutions, ensuring
                  protection against cyber threats. Trust us to keep your
                  business secure and resilient.
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
          'container mx-auto w-full max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <div className={'space-y-8'}>
          <hgroup className={'text-center space-y-4'}>
            <h3 className={'text-4xl font-semibold'}>
              Our Technology Partners
            </h3>
            <p>
              We collaborate with industry-leading technology partners to
              deliver cutting-edge data analytics solutions that drive business
              success.
            </p>
          </hgroup>

          <TechnologyPartners />
        </div>
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
              Our Cyber Security Services
            </h3>
            <p>
              Protect your business with proactive security across
              infrastructure, applications, and cloud
            </p>
          </hgroup>

          <Services />
        </div>
      </section>

      <CTASection1 />
    </main>
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

const Features = () => {
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

const cyberSecurityServices = [
  {
    id: crypto.randomUUID(),
    title: 'Network Security',
    description:
      'Secure your network perimeter and internal traffic with layered defenses.',
    items: [
      'Next-Gen Firewall',
      'IDS/IPS',
      'Zero Trust Segmentation',
      'VPN & Remote Access',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Endpoint Protection',
    description:
      'Advanced EDR/XDR to stop malware, ransomware, and fileless attacks.',
    items: [
      'EDR/XDR',
      'Device Hardening',
      'Policy Enforcement',
      'Patch Management',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Cloud Security',
    description: 'Secure workloads and data across AWS, Azure, and GCP.',
    items: ['CSPM', 'CIEM', 'Container/K8s Security', 'Secrets Management'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Vapt (Pentesting)',
    description: 'Identify and exploit vulnerabilities before attackers do.',
    items: [
      'Network Pentest',
      'Web/App Pentest',
      'API Security Testing',
      'Remediation Guidance',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Soc & Siem',
    description:
      '24/7 monitoring, detection, and response with expert analysts.',
    items: [
      'SIEM Tuning',
      'Use Case Development',
      'Threat Hunting',
      'Incident Triage',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Identity & Access (Iam)',
    description:
      'Enforce least-privilege and secure access to critical systems.',
    items: [
      'SSO & MFA',
      'RBAC/ABAC',
      'Provisioning/Deprovisioning',
      'Privileged Access',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Incident Response',
    description:
      'Rapid containment, forensics, and recovery when incidents occur.',
    items: [
      'IR Playbooks',
      'Forensic Analysis',
      'Containment & Eradication',
      'Post-incident Report',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Compliance & Risk',
    description: 'Meet regulatory standards and reduce organizational risk.',
    items: ['ISO 27001', 'SOC 2', 'GDPR', 'Risk Assessments'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Application Security',
    description: 'Shift-left security to build and ship secure software.',
    items: ['SAST/DAST', 'Threat Modeling', 'Secure SDLC', 'Code Reviews'],
  },
];

const Services = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {cyberSecurityServices.map((service) => (
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
