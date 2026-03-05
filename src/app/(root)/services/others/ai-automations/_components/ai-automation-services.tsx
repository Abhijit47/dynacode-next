import { Icons } from '@/components/card-6';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AiAutomationServices() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Our AI Automation Services
          </h3>
          <p>
            Automate workflows and decisions with AI that scales with your
            business
          </p>
        </hgroup>

        <ServicesCard />
      </div>
    </section>
  );
}

const aiAutomationServices = [
  {
    id: crypto.randomUUID(),
    title: 'Process Automation',
    description: 'Automate repetitive tasks and approvals',
    items: ['RPA', 'Workflow Engines', 'Form Automation', 'Doc Processing'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Ai Assistants',
    description: 'Chatbots and copilots that help teams move faster',
    items: ['LLMs', 'Retrieval (RAG)', 'Multi-channel Chat', 'Analytics'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Predictive Models',
    description: 'Forecast demand, churn, and risk using ML',
    items: [
      'Time Series',
      'Propensity Models',
      'Anomaly Detection',
      'Optimization',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Marketing Automation',
    description: 'Personalize journeys and optimize campaigns',
    items: ['Segmentation', 'Scoring', 'Journey Builder', 'Attribution'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Data Pipelines',
    description: 'Reliable data flows for ML/AI systems',
    items: ['ETL/ELT', 'Vector Stores', 'Feature Stores', 'Monitoring'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Mlops & Governance',
    description: 'Ship models reliably with controls and visibility',
    items: [
      'Model Registry',
      'CI/CD for ML',
      'Drift Monitoring',
      'Cost Control',
    ],
  },
];

const ServicesCard = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {aiAutomationServices.map((service) => (
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
