import Image from 'next/image';

const projects = [
  {
    id: crypto.randomUUID(),
    title: 'Blazing Fast Performance',
    description:
      'Optimized for speed with minimal loading times and instant interactions, ensuring a smooth experience across devices.',
    imageUrl: '/projects/dddepth-028.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Fully Customizable',
    description:
      'Tailor every component to match your brand or workflow — with built-in support for themes, layouts, and configurations.',
    imageUrl: '/projects/dddepth-051.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Developer-Friendly',
    description:
      'Built with clean, modern code and best practices in mind, making it easy to integrate, extend, and scale.',
    imageUrl: '/projects/dddepth-248.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Responsive by Default',
    description:
      'Every component is designed to look great on all screen sizes — no extra work needed to make things mobile-friendly.',
    imageUrl: '/projects/dddepth-045.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Accessible for Everyone',
    description:
      'Built with accessibility best practices in mind to ensure an inclusive experience for all users, regardless of ability.',
    imageUrl: '/projects/dddepth-034.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Seamless Integration',
    description:
      'Easily connect with your favorite tools, APIs, and services — whether it&apos;s authentication, databases, or third-party libraries.',
    imageUrl: '/projects/dddepth-012.jpg',
  },
];

export default function OurProjects() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className=''>
        <div className=''>
          <h2 className='text-pretty text-center font-semibold text-4xl tracking-tight sm:text-5xl'>
            Powerful Features, Built for You
          </h2>
          <p className='mt-3 text-center text-muted-foreground text-xl sm:text-2xl'>
            Designed for speed, flexibility, and ease of use.
          </p>
          <div className='mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project) => (
              <div className='rounded-lg border' key={project.id}>
                <div className='mask-b-from-50% dark:mask-b-from-40% aspect-square w-full rounded-t-lg'>
                  <Image
                    alt={project.title}
                    className='size-full rounded-t-lg object-cover'
                    src={project.imageUrl}
                    width={512}
                    height={512}
                  />
                </div>
                <div className='p-6'>
                  <h3 className='font-semibold text-xl tracking-[-0.005em]'>
                    {project.title}
                  </h3>
                  <p className='mt-2 text-base text-foreground/90'>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
