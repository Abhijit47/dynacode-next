import { Icons } from '@/components/card-6';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function CyberSecurityServices() {
  return (
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
            Protect your business with proactive security across infrastructure,
            applications, and cloud
          </p>
        </hgroup>

        <Services />
      </div>
    </section>
  );
}

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
