import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AutomationFlow() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            How Automation Workflows Work
          </h3>
          <p>
            Understanding the four key components of effective marketing
            automation
          </p>
        </hgroup>

        <AutomationFlowCard />
      </div>
    </section>
  );
}

const automationFlow = [
  {
    id: crypto.randomUUID(),
    title: 'Trigger',
    description: 'Define what actions or behaviors will start the automation',
    items: ['Form submission', 'Website visit', 'Email click', 'Purchase'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Conditions',
    description: 'Set rules to segment and personalize the automation flow',
    items: ['Demographics', 'Behavior', 'Purchase history', 'Engagement level'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Actions',
    description: 'Specify what happens when conditions are met',
    items: ['Send email', 'Add to list', 'Update contact', 'Notify sales'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Optimization',
    description: 'Continuously improve performance with testing and analytics',
    items: [
      'A/B testing',
      'Performance tracking',
      'ROI analysis',
      'Refinements',
    ],
  },
];
const AutomationFlowCard = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 gap-6'}>
      {automationFlow.map((step) => (
        <div className='relative overflow-hidden rounded-xl' key={step.id}>
          <div
            className='absolute inset-2 z-0 rounded-lg opacity-75'
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)',
              backgroundSize: '10px 10px',
            }}
          />
          <Card className='z-10 isolate bg-transparent border-border border-dotted border-[3px] gap-4'>
            <CardHeader>
              <CardTitle>
                <h4>{step.title}</h4>
              </CardTitle>
              <CardDescription>
                <p>{step.description}</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2'>
                {step.items.map((item, index) => (
                  <li key={index} className='list-disc list-inside'>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};
