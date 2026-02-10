'use client';

import { useState } from 'react';

import { EyeIcon, EyeOffIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { signIn } from '@/lib/auth-client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

const loginSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  rememberMe: z.boolean(),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSignInPending, setIsSignInPending] = useState(false);
  const router = useRouter();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onChange',
  });

  const onError: SubmitErrorHandler<LoginValues> = (errors) => {
    // console.log('Form validation errors:', errors);
    Object.entries(errors).forEach(([fieldName, error]) => {
      toast.error(`${fieldName}: ${error.message}`, {
        description: 'Please fix the errors and try again.',
        id: `sign-in-error-${fieldName}`,
      });
    });
  };

  const onSubmit: SubmitHandler<LoginValues> = (values) => {
    // console.log('Form submitted successfully with data:', data);
    setIsSignInPending(true);
    toast.promise(
      signIn.email({
        email: values.email,
        password: values.password,
        rememberMe: values.rememberMe,
      }),
      {
        loading: 'Loading...',
        success: ({ data }) => {
          form.reset();
          router.push('/');
          return `${data?.user?.name ?? 'User'} logged in successfully!`;
        },
        error: (err) =>
          err instanceof Error
            ? err.message
            : 'Sign-in failed. Please try again.',
        description: 'Please wait while we log you in.',
        descriptionClassName: 'text-[10px]',
        finally() {
          setIsSignInPending(false);
        },
      },
    );
  };

  return (
    <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit, onError)}>
      {/* Email */}
      <Controller
        name='email'
        control={form.control}
        render={({ field, fieldState }) => (
          <Field
            data-invalid={fieldState.invalid}
            aria-invalid={fieldState.invalid}>
            <FieldLabel htmlFor='userEmail'>Email address*</FieldLabel>
            <Input
              type='email'
              id='userEmail'
              placeholder='Enter your email address'
              {...field}
              aria-invalid={fieldState.invalid}
            />
            {fieldState.error ? (
              <FieldError role='alert' errors={[fieldState.error]} />
            ) : (
              <FieldDescription>Enter your valid email</FieldDescription>
            )}
          </Field>
        )}
      />

      {/* Password */}
      <Controller
        name='password'
        control={form.control}
        render={({ field, fieldState }) => (
          <Field
            data-invalid={fieldState.invalid}
            aria-invalid={fieldState.invalid}>
            <div className={'flex items-center justify-between'}>
              <FieldLabel htmlFor='password'>Password</FieldLabel>
              <Link href='/forgot-password' className='hover:underline'>
                Forgot Password?
              </Link>
            </div>
            <div className='relative'>
              <Input
                id='password'
                type={isVisible ? 'text' : 'password'}
                placeholder='••••••••••••••••'
                className='pr-9'
                {...field}
                aria-invalid={fieldState.invalid}
              />
              <Button
                type='button'
                variant='ghost'
                size='icon'
                aria-invalid={fieldState.invalid}
                onClick={() => setIsVisible((prevState) => !prevState)}
                className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'>
                {isVisible ? <EyeOffIcon /> : <EyeIcon />}
                <span className='sr-only'>
                  {isVisible ? 'Hide password' : 'Show password'}
                </span>
              </Button>
            </div>
            {fieldState.error ? (
              <FieldError role='alert' errors={[fieldState.error]} />
            ) : (
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            )}
          </Field>
        )}
      />

      {/* Remember Me and Forgot Password */}
      <Controller
        name='rememberMe'
        control={form.control}
        render={({ field, fieldState }) => (
          <FieldGroup>
            <Field
              orientation='horizontal'
              data-invalid={fieldState.invalid}
              aria-invalid={fieldState.invalid}>
              <Checkbox
                id='rememberMe'
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked)}
                aria-invalid={fieldState.invalid}
              />
              <FieldLabel htmlFor='rememberMe' className='font-normal'>
                Remember Me
              </FieldLabel>
            </Field>
            {fieldState.error && (
              <FieldError role='alert' errors={[fieldState.error]} />
            )}
          </FieldGroup>
        )}
      />

      <Button className='w-full' type='submit' disabled={isSignInPending}>
        {isSignInPending ? (
          <span className={'inline-flex items-center gap-2'}>
            Logging in...
            <Spinner className={'size-4'} />
          </span>
        ) : (
          <span>Sign in to DynaCode Studio</span>
        )}
      </Button>
    </form>
  );
}
