import Stats08 from '@/components/stats-08';

export default function ContentTypes() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Content Types That Drive Results
          </h3>
          <p>
            Fast, scalable websites and apps built with modern best practices
          </p>
        </hgroup>

        <Stats08 />
      </div>
    </section>
  );
}
