'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  developments,
  digitalMarketings,
  navLinks,
  otherServices,
} from '@/constants';
import { cn } from '@/lib/utils';
import { Icon } from '@tabler/icons-react';
import type { LucideIcon } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef, type ComponentProps } from 'react';

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
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

  const dataState =
    'data-[state=open]:before:scale-x-100 data-active:before:scale-x-100';

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className='space-x-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start'>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.id}>
            <NavigationMenuLink
              asChild
              // className={navigationMenuTriggerStyle()}
              className={cn(
                commonState,
                beforeState,
                hoverState,
                focusState,
                disabledState,
                // 'rounded-none',
                // 'group relative inline-flex h-fit w-max items-center justify-center px-0 py-0 font-medium text-sm rounded-none',
                // 'before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:scale-x-0 before:bg-primary before:transition-transform',
                // 'hover:text-accent-foreground hover:before:scale-x-100',
                // 'focus:text-accent-foreground focus:outline-hidden focus:before:scale-x-100',
                // 'disabled:pointer-events-none disabled:opacity-50',
                // 'data-[state=open]:before:scale-x-100 data-active:before:scale-x-100',
                // 'hover:bg-transparent hover:text-primary hover:no-underline focus:bg-transparent active:bg-transparent',
                link.href === pathname && 'before:scale-x-100',
              )}>
              <Link href={link.href}>{link.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem className={'hidden lg:block'}>
          <NavigationMenuTrigger
            className={cn(
              commonState,
              beforeState,
              hoverState,
              focusState,
              disabledState,
              dataState,
              // 'group relative inline-flex h-fit w-max items-center justify-center px-0.5 py-0 font-medium text-sm',
              // 'before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:scale-x-0 before:bg-primary before:transition-transform',
              // 'hover:text-accent-foreground hover:before:scale-x-100',
              // 'focus:text-accent-foreground focus:outline-hidden focus:before:scale-x-100',
              // 'disabled:pointer-events-none disabled:opacity-50',
              // 'data-[state=open]:before:scale-x-100 data-active:before:scale-x-100',
              // 'hover:bg-transparent focus:bg-transparent active:bg-transparent',
              // 'bg-transparent!',
              // 'data-[state=open]:bg-transparent!',
            )}>
            Development
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-100 gap-3 p-1 md:w-125 md:grid-cols-2 lg:w-150'>
              {developments.map((development) => (
                <ListItem
                  href={development.href}
                  key={development.id}
                  icon={development.icon}
                  title={development.title}>
                  {development.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className={'hidden lg:block'}>
          <NavigationMenuTrigger
            className={cn(
              commonState,
              beforeState,
              hoverState,
              focusState,
              disabledState,
              dataState,
              // 'group relative inline-flex h-fit w-max items-center justify-center px-0.5 py-0 font-medium text-sm',
              // 'before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:scale-x-0 before:bg-primary before:transition-transform',
              // 'hover:text-accent-foreground hover:before:scale-x-100',
              // 'focus:text-accent-foreground focus:outline-hidden focus:before:scale-x-100',
              // 'disabled:pointer-events-none disabled:opacity-50',
              // 'data-[state=open]:before:scale-x-100 data-active:before:scale-x-100',
              // 'hover:bg-transparent focus:bg-transparent active:bg-transparent',
              // 'bg-transparent!',
              // 'data-[state=open]:bg-transparent!',
            )}>
            Digital Marketings
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-100 gap-3 p-1 md:w-125 md:grid-cols-2 lg:w-150'>
              {digitalMarketings.map((digitalMarketing) => (
                <ListItem
                  key={digitalMarketing.id}
                  href={digitalMarketing.href}
                  icon={digitalMarketing.icon}
                  title={digitalMarketing.title}>
                  {digitalMarketing.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className={'hidden lg:block'}>
          <NavigationMenuTrigger
            className={cn(
              commonState,
              beforeState,
              hoverState,
              focusState,
              disabledState,
              dataState,
              // 'group relative inline-flex h-fit w-max items-center justify-center px-0.5 py-0 font-medium text-sm',
              // 'before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:scale-x-0 before:bg-primary before:transition-transform',
              // 'hover:text-accent-foreground hover:before:scale-x-100',
              // 'focus:text-accent-foreground focus:outline-hidden focus:before:scale-x-100',
              // 'disabled:pointer-events-none disabled:opacity-50',
              // 'data-[state=open]:before:scale-x-100 data-active:before:scale-x-100',
              // 'hover:bg-transparent focus:bg-transparent active:bg-transparent',
              // 'bg-transparent!',
              // 'data-[state=open]:bg-transparent!',
            )}>
            Other Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-100 gap-3 p-1 md:w-125 md:grid-cols-2 lg:w-150'>
              {otherServices.map((menuItem) => (
                <ListItem
                  href={menuItem.href}
                  icon={menuItem.icon}
                  key={menuItem.title}
                  title={menuItem.title}>
                  {menuItem.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = forwardRef<
  React.ComponentRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon: LucideIcon | Icon }
>(({ className, title, children, ...props }, ref) => {
  const pathname = usePathname() as Route;

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            'block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
            pathname === props.href && 'bg-accent no-underline',
          )}
          ref={ref}
          {...props}>
          <props.icon className='mb-4 size-6' />
          <div className='font-semibold text-sm leading-none'>{title}</div>
          <p className='line-clamp-2 text-muted-foreground text-sm leading-snug'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
