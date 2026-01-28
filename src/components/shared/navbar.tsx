import { Logo } from '@/components/shared/logo';
import { NavMenu } from '@/components/shared/nav-menu';
import { NavigationSheet } from '@/components/shared/navigation-sheet';
import { Button } from '@/components/ui/button';
import ThemeModeToggler from './theme-toggler';

import {
  Backpack,
  CakeSlice,
  Coffee,
  Grape,
  Hotel,
  IceCream,
  MapPin,
  Package,
  Pizza,
  Plane,
  Sandwich,
  Smile,
} from 'lucide-react';

export const foods = [
  {
    title: 'Dessert',
    icon: CakeSlice,
    description: 'Sweet treats to satisfy your cravings.',
  },
  {
    title: 'Pizza',
    icon: Pizza,
    description: 'Delicious, cheesy slices of goodness.',
  },
  {
    title: 'Sandwich',
    icon: Sandwich,
    description: 'Classic and hearty fast food options.',
  },
  {
    title: 'Coffee',
    icon: Coffee,
    description: 'Your go-to boost of caffeine.',
  },
  {
    title: 'Ice Cream',
    icon: IceCream,
    description: 'Cold, creamy delights for any mood.',
  },
  {
    title: 'Fruit',
    icon: Grape,
    description: 'Fresh and healthy natural snacks.',
  },
];

export const travelMenuItems = [
  {
    title: 'Destinations',
    icon: MapPin,
    description: 'Discover amazing places to visit.',
  },
  {
    title: 'Hotels',
    icon: Hotel,
    description: 'Find the best stays for your trips.',
  },
  {
    title: 'Flights',
    icon: Plane,
    description: 'Get deals and tips on air travel.',
  },
  {
    title: 'Packing',
    icon: Package,
    description: 'Essential checklists for stress-free packing.',
  },
  {
    title: 'Activities',
    icon: Smile,
    description: 'Exciting things to do wherever you go.',
  },
  {
    title: 'Travel Tips',
    icon: Backpack,
    description: 'Make every trip smooth and memorable.',
  },
];

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
