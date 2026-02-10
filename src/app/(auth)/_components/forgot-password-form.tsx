'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordForm() {
  const router = useRouter();

  return (
    <form
      className='space-y-4'
      onSubmit={(e) => {
        e.preventDefault();
        setTimeout(() => {
          router.push('/reset-password');
        }, 1000);
      }}>
      {/* Email */}
      <div className='space-y-1'>
        <Label className='leading-5' htmlFor='userEmail'>
          Email address*
        </Label>
        <Input
          type='email'
          id='userEmail'
          placeholder='Enter your email address'
        />
      </div>

      <Button className='w-full' type='submit'>
        Send Reset Link
      </Button>
    </form>
  );
}
