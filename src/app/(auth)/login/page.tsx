import { Logo10 } from '@/components/shared/logos-svg';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import LoginForm from '../_components/login-form';

export default function LoginPage() {
  return (
    <Card className='z-1 w-full border-none shadow-md sm:max-w-lg'>
      <CardAction className={'flex items-center gap-3 px-6'}>
        <Link
          href={'/'}
          aria-label='Go back'
          className={buttonVariants({
            variant: 'outline',
            size: 'icon-sm',
          })}>
          <ChevronLeftIcon className='size-5 transition-transform duration-200 group-hover:-translate-x-0.5' />
        </Link>
        <Link href='/' className={'block'}>
          <Logo10 className={'w-auto h-4 text-start'} />
        </Link>
      </CardAction>
      <CardHeader>
        <CardTitle className='mb-1.5 text-2xl'>
          Sign in to DynaCode Studio
        </CardTitle>
        <CardDescription className='text-base'>
          Ship Faster and Focus on Growth.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className='text-muted-foreground mb-6'>
          Login with{' '}
          <a href='#' className='text-card-foreground hover:underline'>
            Magic Link
          </a>
        </p>

        {/* Quick Login Buttons */}
        <div className='mb-6 flex flex-wrap gap-4 sm:gap-6'>
          <Button variant='outline' className='grow'>
            Login as User
          </Button>
          <Button variant='outline' className='grow'>
            Login as Admin
          </Button>
        </div>

        {/* Login Form */}
        <div className='space-y-4'>
          <LoginForm />

          <p className='text-muted-foreground text-center'>
            New on our platform?{' '}
            <Link
              href='/sign-up'
              className='text-card-foreground hover:underline'>
              Create an account
            </Link>
          </p>

          <div className='flex items-center gap-4'>
            <Separator className='flex-1' />
            <p>or</p>
            <Separator className='flex-1' />
          </div>

          <Button variant='ghost' className='w-full' asChild>
            <a href='#'>Sign in with Google</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
