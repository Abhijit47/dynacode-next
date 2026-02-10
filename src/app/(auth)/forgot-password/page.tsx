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
import ForgotPasswordForm from '../_components/forgot-password-form';

export default function ForgotPasswordPage() {
  return (
    <Card className='z-1 w-full border-none shadow-md sm:max-w-md'>
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
        <CardTitle className='text-2xl'>Forgot Password?</CardTitle>
        <CardDescription className='text-sm md:text-base'>
          Enter your email and we&apos;ll send you instructions to reset your
          password
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-4'>
        <ForgotPasswordForm />

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
