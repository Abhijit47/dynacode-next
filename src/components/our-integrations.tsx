import { cn } from '@/lib/utils';
import { ArrowUpRightIcon, CheckIcon } from 'lucide-react';
import Image from 'next/image';
import { Badge } from './ui/badge';

const integrations = [
  {
    id: crypto.randomUUID(),
    name: 'PostHog',
    url: 'https://posthog.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://posthog.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Mailchimp',
    url: 'https://mailchimp.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://mailchimp.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Notion',
    url: 'https://notion.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://notion.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Stripe',
    url: 'https://stripe.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://stripe.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Resend',
    url: 'https://resend.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://resend.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Zapier',
    url: 'https://zapier.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://zapier.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Cal.com',
    url: 'https://cal.com/',
    icon: 'https://www.google.com/s2/favicons?domain=https://cal.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Linear',
    url: 'https://linear.app/',
    icon: 'https://www.google.com/s2/favicons?domain=https://linear.app&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Plausible',
    url: 'https://plausible.io/',
    icon: 'https://www.google.com/s2/favicons?domain=https://plausible.io&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Webflow',
    url: 'https://webflow.com/',
    icon: 'https://www.google.com/s2/favicons?domain=https://webflow.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Sanity',
    url: 'https://sanity.io/',
    icon: 'https://www.google.com/s2/favicons?domain=https://sanity.io&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Clerk',
    url: 'https://clerk.com/',
    icon: 'https://www.google.com/s2/favicons?domain=https://clerk.com&sz=64',
  },
];

export default function OurIntegrations() {
  return (
    <section
      className={
        'bg-muted/50 text-foreground px-4 2xl:px-0 py-12 sm:py-16 lg:py-24'
      }>
      <div className='mx-auto max-w-(--breakpoint-xl)'>
        <div className='relative flex h-full w-full'>
          <div className='relative z-10 grow'>
            <div className=''>
              <h2 className='text-center font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-tight'>
                Our Integrations
              </h2>
              <p className='mt-3 text-pretty text-center text-muted-foreground text-xs sm:text-base md:text-lg lg:text-xl'>
                Connect your favorite tools and services to your account.
              </p>
              <div className='mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                {integrations.map((integration, idx) => (
                  <div
                    className='flex items-center gap-4 rounded-lg border bg-card pe-4'
                    key={integration.id}>
                    <div className='border-e border-dashed p-4'>
                      <Image
                        alt='PostHog'
                        className='size-8 rounded'
                        src={integration.icon}
                        width={32}
                        height={32}
                      />
                    </div>
                    <h3 className='font-semibold text-xs sm:text-sm md:text-base lg:text-lg'>
                      {integration.name}
                    </h3>
                    <Badge
                      variant={idx === 0 ? 'default' : 'outline'}
                      className={cn(
                        idx === 0
                          ? 'ms-auto px-2 py-0.5'
                          : 'border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&>svg]:px-2.5 ms-auto h-7.5',
                      )}>
                      {idx === 0 ? (
                        <>
                          Connected <CheckIcon />
                        </>
                      ) : (
                        <>
                          Connect <ArrowUpRightIcon />
                        </>
                      )}
                    </Badge>
                    {/* <span
                      className='inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full border px-2 py-0.5 font-medium text-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 border-transparent bg-primary text-primary-foreground [a&amp;]:hover:bg-primary/90 ms-auto'
                      data-slot='badge'>
                      Connected{' '}
                    </span> */}
                  </div>
                ))}
                {/* <div className='flex items-center gap-4 rounded-lg border bg-card pe-4'>
                  <div className='border-e border-dashed p-4'>
                    <img
                      alt='PostHog'
                      className='size-8 rounded'
                      src='https://www.google.com/s2/favicons?domain=https%3A%2F%2Fposthog.com%2F&amp;sz=64'
                    />
                  </div>
                  <h3 className='font-semibold text-lg'>PostHog</h3>
                  <span
                    className='inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full border px-2 py-0.5 font-medium text-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 border-transparent bg-primary text-primary-foreground [a&amp;]:hover:bg-primary/90 ms-auto'
                    data-slot='badge'>
                    Connected{' '}
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
                      className='lucide lucide-check'
                      aria-hidden='true'>
                      <path d='M20 6 9 17l-5-5'></path>
                    </svg>
                  </span>
                </div>
                <div className='flex items-center gap-4 rounded-lg border bg-card pe-4'>
                  <div className='border-e border-dashed p-4'>
                    <img
                      alt='Mailchimp'
                      className='size-8 rounded'
                      src='https://www.google.com/s2/favicons?domain=https%3A%2F%2Fmailchimp.com&amp;sz=64'
                    />
                  </div>
                  <h3 className='font-semibold text-lg'>Mailchimp</h3>
                  <button
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full outline-none transition-all focus-visible:border-primary/70 focus-visible:ring-[3px] focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&gt;svg]:px-2.5 ms-auto h-7.5"
                    data-slot='button'>
                    Connect{' '}
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
                      className='lucide lucide-arrow-up-right'
                      aria-hidden='true'>
                      <path d='M7 7h10v10'></path>
                      <path d='M7 17 17 7'></path>
                    </svg>
                  </button>
                </div>
                <div className='flex items-center gap-4 rounded-lg border bg-card pe-4'>
                  <div className='border-e border-dashed p-4'>
                    <img
                      alt='Notion'
                      className='size-8 rounded'
                      src='https://www.google.com/s2/favicons?domain=https%3A%2F%2Fnotion.com&amp;sz=64'
                    />
                  </div>
                  <h3 className='font-semibold text-lg'>Notion</h3>
                  <button
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full outline-none transition-all focus-visible:border-primary/70 focus-visible:ring-[3px] focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&gt;svg]:px-2.5 ms-auto h-7.5"
                    data-slot='button'>
                    Connect{' '}
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
                      className='lucide lucide-arrow-up-right'
                      aria-hidden='true'>
                      <path d='M7 7h10v10'></path>
                      <path d='M7 17 17 7'></path>
                    </svg>
                  </button>
                </div>
                <div className='flex items-center gap-4 rounded-lg border bg-card pe-4'>
                  <div className='border-e border-dashed p-4'>
                    <img
                      alt='Stripe'
                      className='size-8 rounded'
                      src='https://www.google.com/s2/favicons?domain=https%3A%2F%2Fstripe.com&amp;sz=64'
                    />
                  </div>
                  <h3 className='font-semibold text-lg'>Stripe</h3>
                  <button
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full outline-none transition-all focus-visible:border-primary/70 focus-visible:ring-[3px] focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&gt;svg]:px-2.5 ms-auto h-7.5"
                    data-slot='button'>
                    Connect{' '}
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
                      className='lucide lucide-arrow-up-right'
                      aria-hidden='true'>
                      <path d='M7 7h10v10'></path>
                      <path d='M7 17 17 7'></path>
                    </svg>
                  </button>
                </div>
                <div className='flex items-center gap-4 rounded-lg border bg-card pe-4'>
                  <div className='border-e border-dashed p-4'>
                    <img
                      alt='Resend'
                      className='size-8 rounded'
                      src='https://www.google.com/s2/favicons?domain=https%3A%2F%2Fresend.com&amp;sz=64'
                    />
                  </div>
                  <h3 className='font-semibold text-lg'>Resend</h3>
                  <button
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full outline-none transition-all focus-visible:border-primary/70 focus-visible:ring-[3px] focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&gt;svg]:px-2.5 ms-auto h-7.5"
                    data-slot='button'>
                    Connect{' '}
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
                      className='lucide lucide-arrow-up-right'
                      aria-hidden='true'>
                      <path d='M7 7h10v10'></path>
                      <path d='M7 17 17 7'></path>
                    </svg>
                  </button>
                </div>
                <div className='flex items-center gap-4 rounded-lg border bg-card pe-4'>
                  <div className='border-e border-dashed p-4'>
                    <img
                      alt='Zapier'
                      className='size-8 rounded'
                      src='https://www.google.com/s2/favicons?domain=https%3A%2F%2Fzapier.com&amp;sz=64'
                    />
                  </div>
                  <h3 className='font-semibold text-lg'>Zapier</h3>
                  <button
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full outline-none transition-all focus-visible:border-primary/70 focus-visible:ring-[3px] focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&gt;svg]:px-2.5 ms-auto h-7.5"
                    data-slot='button'>
                    Connect{' '}
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
                      className='lucide lucide-arrow-up-right'
                      aria-hidden='true'>
                      <path d='M7 7h10v10'></path>
                      <path d='M7 17 17 7'></path>
                    </svg>
                  </button>
                </div>
                <div className='flex items-center gap-4 rounded-lg border bg-card pe-4'>
                  <div className='border-e border-dashed p-4'>
                    <img
                      alt='Cal.com'
                      className='size-8 rounded'
                      src='https://www.google.com/s2/favicons?domain=https%3A%2F%2Fcal.com%2F&amp;sz=64'
                    />
                  </div>
                  <h3 className='font-semibold text-lg'>Cal.com</h3>
                  <button
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full outline-none transition-all focus-visible:border-primary/70 focus-visible:ring-[3px] focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&gt;svg]:px-2.5 ms-auto h-7.5"
                    data-slot='button'>
                    Connect{' '}
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
                      className='lucide lucide-arrow-up-right'
                      aria-hidden='true'>
                      <path d='M7 7h10v10'></path>
                      <path d='M7 17 17 7'></path>
                    </svg>
                  </button>
                </div>
                <div className='flex items-center gap-4 rounded-lg border bg-card pe-4'>
                  <div className='border-e border-dashed p-4'>
                    <img
                      alt='Linear'
                      className='size-8 rounded'
                      src='https://www.google.com/s2/favicons?domain=https%3A%2F%2Flinear.app%2F&amp;sz=64'
                    />
                  </div>
                  <h3 className='font-semibold text-lg'>Linear</h3>
                  <button
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full outline-none transition-all focus-visible:border-primary/70 focus-visible:ring-[3px] focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&gt;svg]:px-2.5 ms-auto h-7.5"
                    data-slot='button'>
                    Connect{' '}
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
                      className='lucide lucide-arrow-up-right'
                      aria-hidden='true'>
                      <path d='M7 7h10v10'></path>
                      <path d='M7 17 17 7'></path>
                    </svg>
                  </button>
                </div>
                <div className='flex items-center gap-4 rounded-lg border bg-card pe-4'>
                  <div className='border-e border-dashed p-4'>
                    <img
                      alt='Plausible'
                      className='size-8 rounded'
                      src='https://www.google.com/s2/favicons?domain=https%3A%2F%2Fplausible.io%2F&amp;sz=64'
                    />
                  </div>
                  <h3 className='font-semibold text-lg'>Plausible</h3>
                  <button
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full outline-none transition-all focus-visible:border-primary/70 focus-visible:ring-[3px] focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&gt;svg]:px-2.5 ms-auto h-7.5"
                    data-slot='button'>
                    Connect{' '}
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
                      className='lucide lucide-arrow-up-right'
                      aria-hidden='true'>
                      <path d='M7 7h10v10'></path>
                      <path d='M7 17 17 7'></path>
                    </svg>
                  </button>
                </div>
                <div className='flex items-center gap-4 rounded-lg border bg-card pe-4'>
                  <div className='border-e border-dashed p-4'>
                    <img
                      alt='Webflow'
                      className='size-8 rounded'
                      src='https://www.google.com/s2/favicons?domain=https%3A%2F%2Fwebflow.com%2F&amp;sz=64'
                    />
                  </div>
                  <h3 className='font-semibold text-lg'>Webflow</h3>
                  <button
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full outline-none transition-all focus-visible:border-primary/70 focus-visible:ring-[3px] focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&gt;svg]:px-2.5 ms-auto h-7.5"
                    data-slot='button'>
                    Connect{' '}
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
                      className='lucide lucide-arrow-up-right'
                      aria-hidden='true'>
                      <path d='M7 7h10v10'></path>
                      <path d='M7 17 17 7'></path>
                    </svg>
                  </button>
                </div>
                <div className='flex items-center gap-4 rounded-lg border bg-card pe-4'>
                  <div className='border-e border-dashed p-4'>
                    <img
                      alt='Sanity'
                      className='size-8 rounded'
                      src='https://www.google.com/s2/favicons?domain=https%3A%2F%2Fsanity.io%2F&amp;sz=64'
                    />
                  </div>
                  <h3 className='font-semibold text-lg'>Sanity</h3>
                  <button
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full outline-none transition-all focus-visible:border-primary/70 focus-visible:ring-[3px] focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&gt;svg]:px-2.5 ms-auto h-7.5"
                    data-slot='button'>
                    Connect{' '}
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
                      className='lucide lucide-arrow-up-right'
                      aria-hidden='true'>
                      <path d='M7 7h10v10'></path>
                      <path d='M7 17 17 7'></path>
                    </svg>
                  </button>
                </div>
                <div className='flex items-center gap-4 rounded-lg border bg-card pe-4'>
                  <div className='border-e border-dashed p-4'>
                    <img
                      alt='Clerk'
                      className='size-8 rounded'
                      src='https://www.google.com/s2/favicons?domain=https%3A%2F%2Fclerk.com%2F&amp;sz=64'
                    />
                  </div>
                  <h3 className='font-semibold text-lg'>Clerk</h3>
                  <button
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full outline-none transition-all focus-visible:border-primary/70 focus-visible:ring-[3px] focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&gt;svg]:px-2.5 ms-auto h-7.5"
                    data-slot='button'>
                    Connect{' '}
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
                      className='lucide lucide-arrow-up-right'
                      aria-hidden='true'>
                      <path d='M7 7h10v10'></path>
                      <path d='M7 17 17 7'></path>
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
