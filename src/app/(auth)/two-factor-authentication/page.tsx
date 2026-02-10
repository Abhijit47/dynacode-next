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
import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import TwoFactorAuthenticationForm from '../_components/two-factor-authentication-form';

export default function TwoFactorAuthenticationPage() {
  return (
    <Card className='z-1 w-full border-none shadow-md sm:max-w-md'>
      <CardAction className={'flex items-center gap-3 px-6'}>
        <Link
          href={'/'}
          aria-label='Go back'
          className={
            buttonVariants({
              variant: 'outline',
              size: 'icon-sm',
            }) + ' group'
          }>
          <ChevronLeftIcon className='size-5' />
        </Link>{' '}
        <Link href='/' className={'block'}>
          <Logo10 className={'w-auto h-4 text-start'} />
        </Link>
      </CardAction>
      <CardHeader>
        <CardTitle className='text-2xl'>Two Factor Authentication</CardTitle>
        <CardDescription className='text-base'>
          Please confirm access to your account by entering the code provided by
          your authenticator application
        </CardDescription>
      </CardHeader>

      <CardContent>
        <TwoFactorAuthenticationForm />
      </CardContent>
    </Card>
  );
}
