import { ChevronLeftIcon } from 'lucide-react';

import { Logo10 } from '@/components/shared/logos-svg';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import ResetPasswordForm from '../_components/reset-password-form';

export default function ResetPasswordPage() {
  return (
    <Card className='z-1 w-full border-none shadow-md sm:max-w-md'>
      <CardAction className={'flex items-center gap-3 px-6'}>
        <Link
          href={'/'}
          className={buttonVariants({
            variant: 'outline',
            size: 'icon-sm',
          })}
          aria-label='Go back to home'>
          <ChevronLeftIcon className='size-5' />
        </Link>
        <Link href='/' className={'block'}>
          <Logo10 className={'w-auto h-4 text-start'} />
        </Link>
      </CardAction>
      <CardHeader>
        <CardTitle className='text-2xl'>Reset Password</CardTitle>
        <CardDescription className='text-sm md:text-base'>
          Please enter your current password and choose a new password to update
          your account security.
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-4'>
        {/* ResetPassword Form */}
        <ResetPasswordForm />

        <Link
          href='/login'
          className='group mx-auto flex w-fit items-center gap-2'>
          <ChevronLeftIcon className='size-5 transition-transform duration-200 group-hover:-translate-x-0.5' />
          <span>Back to login</span>
        </Link>
      </CardContent>
    </Card>
  );
}
