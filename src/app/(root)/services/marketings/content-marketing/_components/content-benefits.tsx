export default function ContentBenefits() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Why Content Marketing Matters
          </h3>
          <p>
            Fast, scalable websites and apps built with modern best practices
          </p>
        </hgroup>

        <ContentBenefitsCard />
      </div>
    </section>
  );
}

const contentBenefits = [
  {
    id: crypto.randomUUID(),
    title: 'Increased Brand Awareness',
    description:
      'Quality content puts your brand in front of the right audience',
  },
  {
    id: crypto.randomUUID(),
    title: 'Better Search Rankings',
    description:
      'SEO-optimized content improves your visibility in search results',
  },
  {
    id: crypto.randomUUID(),
    title: 'Lead Generation',
    description: 'Valuable content attracts and converts prospects into leads',
  },
  {
    id: crypto.randomUUID(),
    title: 'Customer Education',
    description:
      'Educational content builds trust and positions you as an expert',
  },
  {
    id: crypto.randomUUID(),
    title: 'Cost-Effective Marketing',
    description: 'Content marketing costs 62% less than traditional marketing',
  },
  {
    id: crypto.randomUUID(),
    title: 'Long-Term Results',
    description:
      'Quality content continues to drive results long after publication',
  },
];
function ContentBenefitsCard() {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
      {contentBenefits.map((benefit) => (
        <div
          key={benefit.id}
          className='relative rounded-lg border border-dashed border-zinc-300 px-4 sm:px-6 md:px-8 dark:border-zinc-800'>
          <div className='absolute top-4 left-0 z-0 h-px w-full bg-zinc-400 sm:top-6 md:top-8 dark:bg-zinc-700' />
          <div className='absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 sm:bottom-6 md:bottom-8 dark:bg-zinc-700' />
          <div className='relative w-full border-x border-zinc-400 dark:border-zinc-700'>
            <div className='absolute z-0 grid h-full w-full items-center'>
              <section className='absolute z-0 grid h-full w-full grid-cols-2 place-content-between'>
                <div className='bg-primary my-4 size-1 -translate-x-[2.5px] rounded-full outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950' />
                <div className='bg-primary my-4 size-1 translate-x-[2.5px] place-self-end rounded-full outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950' />
                <div className='bg-primary my-4 size-1 -translate-x-[2.5px] rounded-full outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950' />
                <div className='bg-primary my-4 size-1 translate-x-[2.5px] place-self-end rounded-full outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950' />
              </section>
            </div>
            <div className='relative z-20 mx-auto py-8'>
              <div className='p-6'>
                <h3 className='mb-1 text-lg font-bold text-gray-900 dark:text-gray-100'>
                  {benefit.title}
                </h3>
                <p className='text-gray-700 dark:text-gray-300'>
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
