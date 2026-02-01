'use client';

// import { Logo } from '@/components/shared/logo';
import { NavMenu } from '@/components/shared/nav-menu';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { developments, digitalMarketings, otherServices } from '@/constants';
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { Logo10 } from './navbar';

export default function NavigationSheet() {
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const pathname = usePathname() as Route;

  const commonState =
    'group relative inline-flex h-fit w-max items-center justify-center px-0 py-0 font-medium text-sm rounded-none bg-transparent!';

  const beforeState =
    'before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:scale-x-0 before:bg-primary before:transition-transform';

  const hoverState =
    'hover:text-accent-foreground hover:before:scale-x-100 hover:bg-transparent hover:text-primary hover:no-underline focus:bg-transparent active:bg-transparent';

  const focusState =
    'focus:text-accent-foreground focus:outline-hidden focus:before:scale-x-100';

  const disabledState = 'disabled:pointer-events-none disabled:opacity-50';

  return (
    <Sheet open={isOpenSheet} onOpenChange={setIsOpenSheet}>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button className='rounded-full' size='icon' variant='outline'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className='pl-6'>
        <ScrollArea className='h-full'>
          <Logo10 />

          <nav className={'space-y-8'}>
            <NavMenu className='[&>div]:h-full' orientation='vertical' />

            <div>
              <div className='font-bold'>Developments</div>
              <ul className='mt-2 ml-1 space-y-3 border-l pl-4'>
                {developments.map((development) => (
                  <li key={development.title}>
                    <Link
                      className={cn(
                        commonState,
                        beforeState,
                        hoverState,
                        focusState,
                        disabledState,
                        pathname === development.href && 'before:scale-x-100',
                      )}
                      href={development.href}
                      onClick={() => setIsOpenSheet(false)}>
                      <development.icon className='mr-2 h-5 w-5 text-muted-foreground' />
                      {development.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className='font-bold'>Marketings</div>
              <ul className='mt-2 ml-1 space-y-3 border-l pl-4'>
                {digitalMarketings.map((item) => (
                  <li key={item.title}>
                    <Link
                      className={cn(
                        commonState,
                        beforeState,
                        hoverState,
                        focusState,
                        disabledState,
                        pathname === item.href && 'before:scale-x-100',
                      )}
                      href={item.href}
                      onClick={() => setIsOpenSheet(false)}>
                      <item.icon className='mr-2 h-5 w-5 text-muted-foreground' />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className='font-bold'>Others</div>
              <ul className='mt-2 ml-1 space-y-3 border-l pl-4'>
                {otherServices.map((item) => (
                  <li key={item.title}>
                    <Link
                      className={cn(
                        commonState,
                        beforeState,
                        hoverState,
                        focusState,
                        disabledState,
                        pathname === item.href && 'before:scale-x-100',
                      )}
                      href={item.href}
                      onClick={() => setIsOpenSheet(false)}>
                      <item.icon className='mr-2 h-5 w-5 text-muted-foreground' />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <Separator className={'mt-4'} />
          <SheetFooter>
            <SheetClose asChild>
              <Button variant='outline'>Close</Button>
            </SheetClose>
          </SheetFooter>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
