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
import SignUpForm from '../_components/sign-up-form';

export default function SignUpPage() {
  return (
    <Card className='z-1 w-full border-none shadow-md sm:max-w-lg'>
      <CardAction className={'flex items-center gap-3 px-6'}>
        <Link
          href={'/'}
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
        <CardTitle className='text-sm md:text-2xl'>
          Sign Up to DynaCode Studio
        </CardTitle>
        <CardDescription className='text-base'>
          Ship Faster and Focus on Growth.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Register Form */}
        <div className='space-y-4'>
          <SignUpForm />

          <p className='text-muted-foreground text-center'>
            Already have an account?{' '}
            <Link
              href='/login'
              className='text-card-foreground hover:underline'>
              Sign in instead
            </Link>
          </p>

          <div className='flex items-center gap-4'>
            <Separator className='flex-1' />
            <p>or</p>
            <Separator className='flex-1' />
          </div>

          <Button variant='ghost' className='w-full' asChild>
            <a href='#'>Sign in with google</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
