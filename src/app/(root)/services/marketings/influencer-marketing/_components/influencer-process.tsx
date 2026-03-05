import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function InfluencerProcess() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Our Influencer Marketing Process
          </h3>
          <p>
            Comprehensive marketing automation solutions to streamline your
            marketing and sales processes
          </p>
        </hgroup>

        <InfluencerProcessCard />
      </div>
    </section>
  );
}

const influencerProcess = [
  {
    id: crypto.randomUUID(),
    title: 'Strategy',
    description: 'Define goals and target audience',
  },
  {
    id: crypto.randomUUID(),
    title: 'Discovery',
    description: 'Find perfect influencer matches',
  },
  {
    id: crypto.randomUUID(),
    title: 'Outreach',
    description: 'Connect and negotiate partnerships',
  },
  {
    id: crypto.randomUUID(),
    title: 'Content',
    description: 'Collaborate on authentic content',
  },
  {
    id: crypto.randomUUID(),
    title: 'Campaign',
    description: 'Execute and monitor performance',
  },
  {
    id: crypto.randomUUID(),
    title: 'Analysis',
    description: 'Measure results and optimize',
  },
];
const InfluencerProcessCard = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
      {influencerProcess.map((step, idx) => (
        <Card key={step.id}>
          <CardContent>
            <div className='text-3xl font-bold'>{`Step ${idx + 1}`}</div>
          </CardContent>
          <CardHeader>
            <CardTitle>
              <h4>{step.title}</h4>
            </CardTitle>
            <CardDescription>
              <p>{step.description}</p>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};
