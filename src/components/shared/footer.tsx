import { Separator } from '@/components/ui/separator';
import { footerSections } from '@/constants';
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Logo } from './logo';

export default function Footer() {
  return (
    <div className='flex flex-col'>
      <div className='grow bg-muted' />
      <footer className='border-t'>
        <div className='mx-auto max-w-(--breakpoint-xl)'>
          <div className='grid grid-cols-2 gap-x-8 gap-y-10 px-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 xl:px-0'>
            <div className='col-span-full xl:col-span-2'>
              {/* Logo */}
              <Logo />

              <p className='mt-4 text-muted-foreground'>
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>

            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className='font-medium'>{title}</h6>
                <ul className='mt-6 space-y-4'>
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        className='text-muted-foreground hover:text-foreground'
                        href={href}>
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <div className='flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0'>
            {/* Copyright */}
            <span className='text-muted-foreground'>
              &copy; {new Date().getFullYear()}{' '}
              <Link href='/' target='_blank'>
                DynaCode
              </Link>
              . All rights reserved.
            </span>

            <div className='flex items-center gap-5 text-muted-foreground'>
              <Link href='#' target='_blank'>
                <TwitterIcon className='h-5 w-5' />
              </Link>
              <Link href='#' target='_blank'>
                <DribbbleIcon className='h-5 w-5' />
              </Link>
              <Link href='#' target='_blank'>
                <TwitchIcon className='h-5 w-5' />
              </Link>
              <Link href='#' target='_blank'>
                <GithubIcon className='h-5 w-5' />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
