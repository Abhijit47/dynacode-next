import SlotCounter from 'react-slot-counter';

const stats = [
  {
    id: crypto.randomUUID(),
    title: 'Global styles + variables',
    description:
      'Super smart global color, typography and effects styles + variables!',
    stat: '900',
    prefix: '+',
  },
  {
    id: crypto.randomUUID(),
    title: 'Components and variants',
    description: "We've thought of everything you need so you don't have to.",
    stat: '10,000',
    prefix: '+',
  },
  {
    id: crypto.randomUUID(),
    title: 'Page design examples',
    description:
      'A whopping 420+ ready-to-go desktop and mobile page examples.',
    stat: '420',
    prefix: '+',
  },
  {
    id: crypto.randomUUID(),
    title: 'Icons and logos',
    description:
      "All the icons you'll need, including country flags and payments.",
    stat: '2,000',
    prefix: '+',
  },
];

export default function OurStats() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 py-24'
      }>
      <div className='flex items-center justify-center'>
        <div className=''>
          <h2 className='font-semibold text-4xl tracking-tighter md:text-5xl'>
            The perfect starting point for any project
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-muted-foreground'>
            The world&apos;s most advanced UI kit for Figma. Meticulously
            crafted with 100% Auto Layout 5.0, variables, smart variants, and
            WCAG accessibility.
          </p>

          <div className='mt-16 grid justify-center gap-x-10 gap-y-16 sm:mt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {stats.map((item) => (
              <div key={item.id}>
                <span className='font-semibold text-5xl tracking-tight md:text-6xl'>
                  <SlotCounter
                    value={item.stat}
                    duration={3}
                    dummyCharacterCount={10}
                    direction='top-down'
                    useMonospaceWidth
                    animateOnVisible={{
                      triggerOnce: false,
                      rootMargin: '0px 0px -100px 0px',
                    }}
                  />
                  <sup>{item.prefix}</sup>
                </span>
                <p className='mt-6 font-medium text-xl'>{item.title}</p>
                <p className='mt-2 text-muted-foreground'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
