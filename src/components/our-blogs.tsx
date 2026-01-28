import {
  ArrowRight,
  CalendarDays,
  LucideDot,
  LucideMails,
  User,
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function OurBlogs() {
  return (
    <section
      className={'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0'}>
      <div className=''>
        <div className='flex items-end justify-between gap-4'>
          <div>
            <h2 className='text-balance font-semibold text-4xl tracking-tight'>
              Welcome to our blog!
            </h2>
            <p className='mt-2 text-balance text-lg text-muted-foreground tracking-normal sm:text-xl'>
              Stay updated with the latest news and insights.
            </p>
          </div>
          <Button className="rounded-full font-medium outline-none transition-all focus-visible:border-primary/70 focus-visible:ring-[3px] focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-12 px-6 text-base leading-[0.1] has-[&gt;svg]:px-6 [&amp;_svg:not([class*='size-'])]:size-4.5 hidden gap-3 sm:inline-flex">
            <LucideMails />
            <span className='hidden lg:inline'>
              Subscribe to our newsletter
            </span>
            <span className='hidden md:inline lg:hidden'>Subscribe</span>
          </Button>
        </div>
        <div
          data-orientation='horizontal'
          role='none'
          className='shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px mt-7 mb-10'
          data-slot='separator-root'></div>

        <div className='grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3'>
          {blogs.map((blog) => (
            <BlogCard2 key={blog.id} {...blog} />
          ))}
        </div>

        <button
          className="shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium outline-none transition-all focus-visible:border-primary/70 focus-visible:ring-[3px] focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-12 px-6 text-base leading-[0.1] has-[&gt;svg]:px-6 [&amp;_svg:not([class*='size-'])]:size-4.5 mx-auto mt-16 flex w-full max-w-xs"
          data-slot='button'>
          Load More
        </button>
      </div>
    </section>
  );
}

const blogs = [
  {
    id: 'f050d161-177a-471e-9128-babd2e50c4df',
    title: 'Understanding React Server Components',
    description: '',
    imageUrl:
      'https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg',
    tags: ['React', 'Server Components', 'Performance'],
    createdAt: '2026-01-28T03:51:53.595Z',
    author: {
      name: 'Jane Doe',
      profileUrl: '',
    },
  },
  {
    id: '2975d200-c847-4bed-8df3-09b763ed890b',
    title: '10 Useful Shadcn UI Components You Should Know',
    description: '',
    imageUrl:
      'https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_1280.jpg',
    tags: ['Shadcn UI', 'Components', 'UI Design'],
    createdAt: '2026-01-28T03:51:53.595Z',
    author: {
      name: 'Jane Doe',
      profileUrl: '',
    },
  },
  {
    id: '57bef61c-973d-4d91-8302-4280dc5ee088',
    title: 'Building a Personal Blog with Next.js and Contentlayer',
    description: '',
    imageUrl:
      'https://cdn.pixabay.com/photo/2021/08/13/12/51/sea-6543041_1280.jpg',
    tags: ['Next.js', 'Contentlayer', 'Blogging'],
    createdAt: '2026-01-28T03:51:53.595Z',
    author: {
      name: 'Jane Doe',
      profileUrl: '',
    },
  },
  {
    id: '177bcf48-9090-46b9-8984-fbcc33dbcb90',
    title: 'The Complete Guide to TypeScript for Beginners',
    description: '',
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/06/22/20/24/dewdrops-2432391_1280.jpg',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    createdAt: '2026-01-28T03:51:53.595Z',
    author: {
      name: 'Jane Doe',
      profileUrl: '',
    },
  },
  {
    id: '713f8c58-01f2-45b4-82ba-d3b691caab9a',
    title: 'Optimizing Web Performance with Next.js',
    description: '',
    imageUrl:
      'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg',
    tags: ['Web Performance', 'Next.js', 'Optimization'],
    createdAt: '2026-01-28T03:51:53.595Z',
    author: {
      name: 'Jane Doe',
      profileUrl: '',
    },
  },
  {
    id: '3d8720bf-6141-42ab-8186-3b7ea8a222c6',
    title: 'Deploying Full-Stack Apps on Vercel with Supabase',
    description: '',
    imageUrl:
      'https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_1280.jpg',
    tags: ['Vercel', 'Supabase', 'Deployment'],
    createdAt: '2026-01-28T03:51:53.595Z',
    author: {
      name: 'Jane Doe',
      profileUrl: '',
    },
  },
];

function BlogCard2({
  title,
  imageUrl,
  tags,
  createdAt,
  author,
}: (typeof blogs)[0]) {
  return (
    <a href='https://example.com/blog/react-server-components'>
      <div className='overflow-hidden rounded-lg bg-muted p-3 pb-6'>
        <div className='relative isolate'>
          <img
            alt={title}
            className='aspect-[14/9] rounded bg-muted'
            src={imageUrl}
          />
          <img
            alt={title}
            className='absolute inset-0 -z-10 aspect-[17/9] scale-y-110 rounded bg-muted blur-2xl'
            src={imageUrl}
          />
        </div>

        <div className='px-2 py-1'>
          <div className='mt-4 flex flex-wrap items-center gap-2'>
            {tags.map((tag) => (
              <Badge key={tag} variant={'secondary'}>
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className='mt-4 font-semibold text-xl'>{title}</h3>

          <div className='mt-4 flex items-center gap-1'>
            <div className='flex items-center gap-1.5 text-muted-foreground text-sm'>
              <CalendarDays /> {new Date(createdAt).toLocaleDateString()}
            </div>
            <LucideDot />
            <div className='flex items-center gap-1.5 text-muted-foreground text-sm'>
              <User /> {author.name}
            </div>
          </div>
          <Button className={'rounded-full!'}>
            Read Article
            <ArrowRight />
          </Button>
        </div>
      </div>
    </a>
  );
}
