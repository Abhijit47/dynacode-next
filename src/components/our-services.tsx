import {
  LucideCable,
  LucideCode2,
  LucideContrast,
  LucideMonitorSmartphone,
  LucideSquareDashedMousePointer,
  LucideZap,
} from 'lucide-react';
import { Badge } from './ui/badge';

export default function OurServices() {
  return (
    <section
      className={'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0'}>
      <div className='bg-background text-foreground'>
        <div className=''>
          <h2 className='text-pretty text-center font-semibold text-4xl tracking-tight sm:text-5xl'>
            Powerful Features, Built for You
          </h2>
          <p className='mt-3 text-center text-muted-foreground text-xl sm:text-2xl'>
            Designed for speed, flexibility, and ease of use.
          </p>
          <div className='mt-16 grid grid-cols-1 gap-1.5 border bg-muted p-1.5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='relative -m-px border bg-card px-5 py-7'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15'>
                <LucideZap />
              </div>
              <h3 className='mt-5 font-semibold text-xl tracking-[-0.005em]'>
                Blazing Fast Performance
              </h3>
              <p className='mt-2 text-base text-foreground/90'>
                Optimized for speed with minimal loading times and instant
                interactions, ensuring a smooth experience across devices.
              </p>
              <span
                className='inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap border px-2 py-0.5 font-medium text-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-0 right-0 rounded-none border-t-0 border-r-0 bg-muted/30 font-mono dark:border-foreground/15 dark:bg-background'
                data-slot='badge'>
                01
              </span>
            </div>
            <div className='relative -m-px border bg-card px-5 py-7'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15'>
                <LucideSquareDashedMousePointer />
              </div>
              <h3 className='mt-5 font-semibold text-xl tracking-[-0.005em]'>
                Fully Customizable
              </h3>
              <p className='mt-2 text-base text-foreground/90'>
                Tailor every component to match your brand or workflow — with
                built-in support for themes, layouts, and configurations.
              </p>
              <span
                className='inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap border px-2 py-0.5 font-medium text-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-0 right-0 rounded-none border-t-0 border-r-0 bg-muted/30 font-mono dark:border-foreground/15 dark:bg-background'
                data-slot='badge'>
                02
              </span>
            </div>
            <div className='relative -m-px border bg-card px-5 py-7'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15'>
                <LucideCode2 />
              </div>
              <h3 className='mt-5 font-semibold text-xl tracking-[-0.005em]'>
                Developer-Friendly
              </h3>
              <p className='mt-2 text-base text-foreground/90'>
                Built with clean, modern code and best practices in mind, making
                it easy to integrate, extend, and scale.
              </p>
              <span
                className='inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap border px-2 py-0.5 font-medium text-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-0 right-0 rounded-none border-t-0 border-r-0 bg-muted/30 font-mono dark:border-foreground/15 dark:bg-background'
                data-slot='badge'>
                03
              </span>
            </div>
            <div className='relative -m-px border bg-card px-5 py-7'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15'>
                <LucideMonitorSmartphone />
              </div>
              <h3 className='mt-5 font-semibold text-xl tracking-[-0.005em]'>
                Responsive by Default
              </h3>
              <p className='mt-2 text-base text-foreground/90'>
                Every component is designed to look great on all screen sizes —
                no extra work needed to make things mobile-friendly.
              </p>
              <span
                className='inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap border px-2 py-0.5 font-medium text-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-0 right-0 rounded-none border-t-0 border-r-0 bg-muted/30 font-mono dark:border-foreground/15 dark:bg-background'
                data-slot='badge'>
                04
              </span>
            </div>
            <div className='relative -m-px border bg-card px-5 py-7'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15'>
                <LucideContrast />
              </div>
              <h3 className='mt-5 font-semibold text-xl tracking-[-0.005em]'>
                Accessible for Everyone
              </h3>
              <p className='mt-2 text-base text-foreground/90'>
                Built with accessibility best practices in mind to ensure an
                inclusive experience for all users, regardless of ability.
              </p>
              <Badge className='inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap border px-2 py-0.5 font-medium text-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-0 right-0 rounded-none border-t-0 border-r-0 bg-muted/30 font-mono dark:border-foreground/15 dark:bg-background'>
                05
              </Badge>
            </div>
            <div className='relative -m-px border bg-card px-5 py-7'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15'>
                <LucideCable />
              </div>
              <h3 className='mt-5 font-semibold text-xl tracking-[-0.005em]'>
                Seamless Integration
              </h3>
              <p className='mt-2 text-base text-foreground/90'>
                Easily connect with your favorite tools, APIs, and services —
                whether it&apos;s authentication, databases, or third-party
                libraries.
              </p>
              <span
                className='inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap border px-2 py-0.5 font-medium text-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-0 right-0 rounded-none border-t-0 border-r-0 bg-muted/30 font-mono dark:border-foreground/15 dark:bg-background'
                data-slot='badge'>
                06
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
