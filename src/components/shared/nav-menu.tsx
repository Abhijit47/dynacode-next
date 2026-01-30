'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { foods, navLinks, travelMenuItems } from '@/constants';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { forwardRef, type ComponentProps } from 'react';

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className='space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start'>
      {navLinks.map((link) => (
        <NavigationMenuItem key={link.id}>
          <NavigationMenuLink
            asChild
            // className={navigationMenuTriggerStyle()}
            className={cn(
              'group relative inline-flex h-9 w-max items-center justify-center px-0.5 py-2 font-medium text-sm',
              'before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:scale-x-0 before:bg-primary before:transition-transform',
              'hover:text-accent-foreground hover:before:scale-x-100',
              'focus:text-accent-foreground focus:outline-hidden focus:before:scale-x-100',
              'disabled:pointer-events-none disabled:opacity-50',
              'data-[state=open]:before:scale-x-100 data-active:before:scale-x-100',
              'hover:bg-transparent focus:bg-transparent active:bg-transparent',
            )}>
            <Link href={link.href}>{link.title}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}

      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={cn(
            'group relative inline-flex h-9 w-max items-center justify-center px-0.5 py-2 font-medium text-sm',
            'before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:scale-x-0 before:bg-primary before:transition-transform',
            'hover:text-accent-foreground hover:before:scale-x-100',
            'focus:text-accent-foreground focus:outline-hidden focus:before:scale-x-100',
            'disabled:pointer-events-none disabled:opacity-50',
            'data-[state=open]:before:scale-x-100 data-active:before:scale-x-100',
            'hover:bg-transparent focus:bg-transparent active:bg-transparent',
            'bg-transparent!',
            'data-[state=open]:bg-transparent!',
          )}>
          Food
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className='grid w-100 gap-3 p-1 md:w-125 md:grid-cols-2 lg:w-150'>
            {foods.map((food) => (
              <ListItem
                href='#'
                icon={food.icon}
                key={food.title}
                title={food.title}>
                {food.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={cn(
            'group relative inline-flex h-9 w-max items-center justify-center px-0.5 py-2 font-medium text-sm',
            'before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:scale-x-0 before:bg-primary before:transition-transform',
            'hover:text-accent-foreground hover:before:scale-x-100',
            'focus:text-accent-foreground focus:outline-hidden focus:before:scale-x-100',
            'disabled:pointer-events-none disabled:opacity-50',
            'data-[state=open]:before:scale-x-100 data-active:before:scale-x-100',
            'hover:bg-transparent focus:bg-transparent active:bg-transparent',
            'bg-transparent!',
            'data-[state=open]:bg-transparent!',
          )}>
          Travel
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className='grid w-100 gap-3 p-1 md:w-125 md:grid-cols-2 lg:w-150'>
            {travelMenuItems.map((menuItem) => (
              <ListItem
                href='#'
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

const ListItem = forwardRef<
  React.ComponentRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon: LucideIcon }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            'block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
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
