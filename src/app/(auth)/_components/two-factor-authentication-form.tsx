'use client';

import { Button } from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function TwoFactorAuthenticationForm() {
  const [otp, setOtp] = useState('');
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement 2FA verification logic
    console.log('Submitting OTP:', otp);
  };

  return (
    <form className='space-y-4' onSubmit={handleSubmit}>
      <div className='flex items-center justify-between gap-1'>
        <Label htmlFor='recoveryCode' className='text-base'>
          Code*
        </Label>
        <span className='text-base font-medium'>Use a recovery code</span>
      </div>

      <InputOTP id='recoveryCode' maxLength={6} value={otp} onChange={setOtp}>
        <InputOTPGroup className='w-full justify-center gap-4 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border'>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <Button className='w-full' type='submit'>
        Sign in to DynaCode Studio
      </Button>
    </form>
  );
}
