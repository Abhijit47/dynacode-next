'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form
      className='space-y-4'
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
          // TODO: Replace with actual API call
          // await sendPasswordResetEmail(email);
          setTimeout(() => {
            //  router.push('/reset-password');
            router.push(`/reset-password?email=${encodeURIComponent(email)}`);
          }, 1000);
        } catch (error) {
          // Handle error
          console.error('Failed to send reset link:', error);
          setIsLoading(false);
        }
      }}>
      {/* Email */}
      <div className='space-y-1'>
        <Label className='leading-5' htmlFor='userEmail'>
          Email address*
        </Label>
        <Input
          type='email'
          id='userEmail'
          name='email'
          placeholder='Enter your email address'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <Button className='w-full' type='submit' disabled={isLoading}>
        Send Reset Link
      </Button>
    </form>
  );
}
