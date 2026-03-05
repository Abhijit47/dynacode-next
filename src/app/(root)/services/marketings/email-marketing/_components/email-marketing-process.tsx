import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function EmailMarketingProcess() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Our Email Marketing Process
          </h3>
          <p>
            Comprehensive marketing automation solutions to streamline your
            marketing and sales processes
          </p>
        </hgroup>

        <EmailMarketingProcessCard />
      </div>
    </section>
  );
}

const emailMarketingProcess = [
  {
    id: crypto.randomUUID(),
    title: 'Strategy & Planning',
    description: 'Define goals and audience segments',
  },
  {
    id: crypto.randomUUID(),
    title: 'List Building',
    description: 'Grow your subscriber base organically',
  },
  {
    id: crypto.randomUUID(),
    title: 'Design & Content',
    description: 'Create compelling emails that convert',
  },
  {
    id: crypto.randomUUID(),
    title: 'Testing & Launch',
    description: 'Optimize before sending to your list',
  },
  {
    id: crypto.randomUUID(),
    title: 'Analyze & Optimize',
    description: 'Track performance and improve results',
  },
];
const EmailMarketingProcessCard = () => {
  return (
    <div
      className={
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'
      }>
      {emailMarketingProcess.map((step, idx) => (
        <Card key={step.id}>
          <CardContent>
            <div className='h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold'>
              0{idx + 1}
            </div>
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
