import { blogs } from '@/constants';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  CalendarDays,
  LucideDot,
  LucideMails,
  User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BorderBeam } from './extends/border-beam';
import SpotlightCard from './extends/spotlight-card';
import { Badge } from './ui/badge';
import { Button, buttonVariants } from './ui/button';

export default function OurBlogs() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 mb-12 sm:mb-16 md:mb-20 lg:mb-24'
      }>
      <div className=''>
        <div className='flex items-end justify-between gap-4'>
          <div>
            <h2 className='text-balance font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight'>
              Welcome to our blog!
            </h2>
            <p className='mt-2 text-balance text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground tracking-normal'>
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

        <div className='grid grid-cols-1 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-14 md:grid-cols-2 lg:grid-cols-3'>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        <Link
          href={'/blogs'}
          className={cn(
            buttonVariants({
              variant: 'secondary',
              className:
                'rounded-full! max-w-xs! mx-auto mt-16 flex w-full h-12 font-medium text-base leading-[0.1] relative overflow-hidden',
            }),
          )}>
          Load more
          <BorderBeam
            size={40}
            initialOffset={20}
            className='from-transparent via-primary to-transparent'
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 50,
            }}
          />
        </Link>
      </div>
    </section>
  );
}

function BlogCard({ title, imageUrl, tags, createdAt, author }: Blog) {
  return (
    <SpotlightCard
      className='custom-spotlight-card'
      spotlightColor='rgba(0, 229, 255, 0.2)'>
      <Link href='#'>
        <div className='overflow-hidden rounded-lg bg-muted p-3 pb-6'>
          <div className='relative isolate'>
            <Image
              alt={title}
              className='aspect-14/9 rounded bg-muted w-full'
              src={imageUrl}
              width={400}
              height={260}
            />
            <Image
              alt={title}
              className='absolute inset-0 -z-10 aspect-17/9 scale-y-110 rounded bg-muted blur-2xl'
              src={imageUrl}
              fill
            />
          </div>

          <div className='px-2 py-1 space-y-4 mt-4'>
            <div className='flex flex-wrap items-center gap-2'>
              {tags.map((tag) => (
                <Badge key={tag} variant={'outline'}>
                  {tag}
                </Badge>
              ))}
            </div>

            <h3 className='font-semibold text-base md:text-lg lg:text-xl'>
              {title}
            </h3>

            <div className='flex items-center gap-1'>
              <div className='flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm'>
                <CalendarDays className={'size-4 md:size-6'} />{' '}
                {new Date(createdAt).toLocaleDateString()}
              </div>
              <LucideDot />
              <div className='flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm'>
                <User className={'size-4 md:size-6'} /> {author.name}
              </div>
            </div>
            <Button className={'rounded-full!'}>
              Read Article
              <ArrowRight />
            </Button>
          </div>
        </div>
      </Link>
    </SpotlightCard>
  );
}
