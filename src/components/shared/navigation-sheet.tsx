import { Logo } from '@/components/shared/logo';
import { NavMenu } from '@/components/shared/nav-menu';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { foods, travelMenuItems } from '@/constants';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button className='rounded-full' size='icon' variant='outline'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className='px-6 py-3'>
        <Logo />
        <NavMenu className='mt-6 [&>div]:h-full' orientation='vertical' />

        <Link className='inline-block' href='#'>
          Home
        </Link>

        <div>
          <div className='font-bold'>Food</div>
          <ul className='mt-2 ml-1 space-y-3 border-l pl-4'>
            {foods.map((foodItem) => (
              <li key={foodItem.title}>
                <Link className='flex items-center gap-2' href='#'>
                  <foodItem.icon className='mr-2 h-5 w-5 text-muted-foreground' />
                  {foodItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className='font-bold'>Travel</div>
          <ul className='mt-2 ml-1 space-y-3 border-l pl-4'>
            {travelMenuItems.map((item) => (
              <li key={item.title}>
                <Link className='flex items-center gap-2' href='#'>
                  <item.icon className='mr-2 h-5 w-5 text-muted-foreground' />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};
