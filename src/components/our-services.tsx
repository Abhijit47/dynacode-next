export default function OurServices() {
  return (
    <div>
      <div className='min-h-screen bg-background text-foreground'>
        <div className='mx-auto flex max-w-screen-7xl flex-col px-6 py-12 sm:py-14'>
          <h2 className='text-pretty text-center font-semibold text-4xl tracking-tight sm:text-5xl'>
            Powerful Features, Built for You
          </h2>
          <p className='mt-3 text-center text-muted-foreground text-xl sm:text-2xl'>
            Designed for speed, flexibility, and ease of use.
          </p>
          <div className='mt-16 grid grid-cols-1 gap-1.5 border bg-muted p-1.5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='relative -m-px border bg-card px-5 py-7'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-zap'
                  aria-hidden='true'>
                  <path d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'></path>
                </svg>
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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-square-dashed-mouse-pointer'
                  aria-hidden='true'>
                  <path d='M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z'></path>
                  <path d='M5 3a2 2 0 0 0-2 2'></path>
                  <path d='M19 3a2 2 0 0 1 2 2'></path>
                  <path d='M5 21a2 2 0 0 1-2-2'></path>
                  <path d='M9 3h1'></path>
                  <path d='M9 21h2'></path>
                  <path d='M14 3h1'></path>
                  <path d='M3 9v1'></path>
                  <path d='M21 9v2'></path>
                  <path d='M3 14v1'></path>
                </svg>
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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-code'
                  aria-hidden='true'>
                  <polyline points='16 18 22 12 16 6'></polyline>
                  <polyline points='8 6 2 12 8 18'></polyline>
                </svg>
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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-monitor-smartphone'
                  aria-hidden='true'>
                  <path d='M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8'></path>
                  <path d='M10 19v-3.96 3.15'></path>
                  <path d='M7 19h5'></path>
                  <rect width='6' height='10' x='16' y='12' rx='2'></rect>
                </svg>
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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-contrast'
                  aria-hidden='true'>
                  <circle cx='12' cy='12' r='10'></circle>
                  <path d='M12 18a6 6 0 0 0 0-12v12z'></path>
                </svg>
              </div>
              <h3 className='mt-5 font-semibold text-xl tracking-[-0.005em]'>
                Accessible for Everyone
              </h3>
              <p className='mt-2 text-base text-foreground/90'>
                Built with accessibility best practices in mind to ensure an
                inclusive experience for all users, regardless of ability.
              </p>
              <span
                className='inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap border px-2 py-0.5 font-medium text-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-0 right-0 rounded-none border-t-0 border-r-0 bg-muted/30 font-mono dark:border-foreground/15 dark:bg-background'
                data-slot='badge'>
                05
              </span>
            </div>
            <div className='relative -m-px border bg-card px-5 py-7'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-cable'
                  aria-hidden='true'>
                  <path d='M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1'></path>
                  <path d='M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9'></path>
                  <path d='M21 21v-2h-4'></path>
                  <path d='M3 5h4V3'></path>
                  <path d='M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3'></path>
                </svg>
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
    </div>
  );
}
