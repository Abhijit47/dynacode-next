import { Logo } from '@/components/logo';
import { NavMenu } from '@/components/nav-menu';
import { NavigationSheet } from '@/components/navigation-sheet';
import { Button } from '@/components/ui/button';
import ThemeModeToggler from './theme-toggler';

const Navbar = () => {
  return (
    <nav className='fixed inset-x-4 top-6 mx-auto h-16 max-w-(--breakpoint-xl) rounded-full border backdrop-blur-2xl bg-white/10 dark:bg-black/60'>
      <div className='mx-auto flex h-full items-center justify-between px-4'>
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className='hidden md:block' />

        <div className='flex items-center gap-3'>
          <ThemeModeToggler />
          <Button
            className='hidden rounded-full sm:inline-flex'
            variant='outline'>
            Sign In
          </Button>

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
