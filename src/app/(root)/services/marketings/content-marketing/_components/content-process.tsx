import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ContentProcess() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Our Content Marketing Process
          </h3>
          <p>
            Fast, scalable websites and apps built with modern best practices
          </p>
        </hgroup>

        <ContentProcessCard />
      </div>
    </section>
  );
}

const contentProcess = [
  {
    id: 1,
    title: 'Strategy',
    description: 'Define goals and target audience',
  },
  {
    id: 2,
    title: 'Research',
    description: 'Analyze competitors and keywords',
  },
  {
    id: 3,
    title: 'Planning',
    description: 'Create editorial calendar',
  },
  {
    id: 4,
    title: 'Creation',
    description: 'Produce high-quality content',
  },
  {
    id: 5,
    title: 'Distribution',
    description: 'Publish across channels',
  },
  {
    id: 6,
    title: 'Optimization',
    description: 'Analyze and improve performance',
  },
];
const ContentProcessCard = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {contentProcess.map((process) => (
        <div className='relative overflow-hidden rounded-xl' key={process.id}>
          <div
            className='absolute inset-0 -z-1 rounded-lg opacity-50'
            style={{
              backgroundImage: `
              linear-gradient(45deg, transparent 49%, var(--border) 49%, var(--border) 51%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, var(--border) 49%, var(--border) 51%, transparent 51%)
            `,
              backgroundSize: '22px 22px',
            }}
          />
          <Card className='z-10 isolate bg-transparent border-border'>
            <CardContent>
              <p>{process.id}</p>
            </CardContent>
            <CardHeader>
              <CardTitle>
                <h4 className={'text-xl font-semibold'}>{process.title}</h4>
              </CardTitle>
              <CardDescription>
                <p>{process.description}</p>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
};
