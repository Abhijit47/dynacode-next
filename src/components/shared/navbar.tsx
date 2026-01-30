import { Logo } from '@/components/shared/logo';
import { NavMenu } from '@/components/shared/nav-menu';
import { NavigationSheet } from '@/components/shared/navigation-sheet';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import ThemeModeToggler from './theme-toggler';

export default function Navbar() {
  return (
    <header className='sticky inset-x-4 top-6 mx-auto max-w-(--breakpoint-xl) z-50'>
      <nav className='h-16 rounded-full border backdrop-blur-2xl text-primary-foreground dark:text-primary bg-primary/50 dark:bg-primary/10 shadow-lg shadow-black/5 ring-1 ring-primary/5 dark:ring-primary/10'>
        <div className='mx-auto flex h-full items-center justify-between px-4'>
          <Link href='/'>
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <NavMenu className='hidden md:block' />

          <div className='flex items-center gap-3'>
            <ThemeModeToggler />
            <Link
              href={'/login'}
              className={buttonVariants({
                variant: 'outline',
                size: 'sm',
                className: 'hidden rounded-full! sm:inline-flex',
              })}>
              Sign In
            </Link>
            {/* <Button
              className='hidden rounded-full sm:inline-flex'
              variant='outline'>
              Sign In
            </Button> */}

            {/* Mobile Menu */}
            <div className='md:hidden'>
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
