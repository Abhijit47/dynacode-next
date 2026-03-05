const seoProcess = [
  {
    id: 1,
    title: 'SEO AUDIT',
    description:
      "Comprehensive analysis of your website's current SEO performance and opportunities.",
  },
  {
    id: 2,
    title: 'STRATEGY DEVELOPMENT',
    description:
      'Custom SEO strategy based on your business goals and target audience.',
  },
  {
    id: 3,
    title: 'IMPLEMENTATION',
    description:
      'Technical improvements, content optimization, and link building execution.',
  },
  {
    id: 4,
    title: 'MONITORING & REPORTING',
    description:
      'Continuous tracking, analysis, and monthly performance reports.',
  },
];

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OurProcess() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-12'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>Our SEO Process</h3>
          <p>
            A systematic approach to search engine optimization that delivers
            consistent results
          </p>
        </hgroup>

        <div
          className={
            'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-16 sm:gap-x-8'
          }>
          {seoProcess.map((step) => (
            <div className='relative' key={step.id}>
              <div
                className='bg-muted/20 absolute size-full rounded-xl border scale-y-[1.16] scale-x-90 -top-4 border-border/50'
                style={{
                  transformOrigin: 'top center',
                }}
              />
              <Card className={'gap-4 py-4 h-full z-10 isolate'}>
                <CardHeader className={'space-y-4'}>
                  <p
                    className={
                      'flex items-center justify-center rounded-full text-4xl font-bold size-16 mx-auto p-4 bg-primary-foreground'
                    }>
                    {step.id}
                  </p>
                  <CardTitle>
                    <h4 className='text-xl text-center font-semibold mb-2'>
                      {step.title}
                    </h4>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={'text-sm font-medium'}>{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
