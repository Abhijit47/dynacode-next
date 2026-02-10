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
import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ [key: string]: string }>;
  searchParams: Promise<{ email: string | undefined }>;
};

export default async function VerifyEmailPage({ searchParams }: PageProps) {
  const userEmail = (await searchParams).email;

  if (!userEmail) {
    return notFound();
  }

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
        <CardTitle className='text-2xl'>Verify your email</CardTitle>
        <CardDescription className='text-sm md:text-base'>
          An activation link has been sent to your email address:{' '}
          <span className={'underline underline-offset-2'}>{userEmail}.</span>{' '}
          Please check your inbox and click on the link to complete the
          activation process.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className='space-y-4'>
          <Button className='w-full' asChild>
            <Link href='/'>Skip for now</Link>
          </Button>

          <p className='text-muted-foreground text-center'>
            Didn&apos;t get the mail?{' '}
            <a href='#' className='text-card-foreground hover:underline'>
              Resend
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
