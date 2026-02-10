'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function MagicLinkForm() {
  return (
    <form
      className='space-y-4'
      onSubmit={async (e) => {
        e.preventDefault();
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
        />
      </div>

      <Button className='w-full' type='submit'>
        Send Magic Link
      </Button>
    </form>
  );
}
