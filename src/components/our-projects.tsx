import { projects } from '@/constants';
import Image from 'next/image';

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
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, imageUrl }: Project) {
  return (
    <div className='rounded-lg border'>
      <div className='mask-b-from-50% dark:mask-b-from-40% aspect-square w-full rounded-t-lg'>
        <Image
          alt={title}
          className='size-full rounded-t-lg object-cover'
          src={imageUrl}
          width={512}
          height={512}
        />
      </div>
      <div className='p-6'>
        <h3 className='font-semibold text-xl tracking-[-0.005em]'>{title}</h3>
        <p className='mt-2 text-base text-foreground/90'>{description}</p>
      </div>
    </div>
  );
}
