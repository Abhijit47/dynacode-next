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
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { signUp } from '@/lib/auth-client';
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

const signUpSchema = z
  .object({
    name: z.string().min(1, 'Fullname is required'),
    email: z.email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z
      .string()
      .min(8, 'Confirm Password must be at least 8 characters long'),
    privacyPolicy: z.boolean().refine((value) => value === true, {
      error: 'You must agree to the privacy policy and terms',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignUpValues = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isSignUpPending, setIsSignUpPending] = useState(false);
  const router = useRouter();

  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      privacyPolicy: false,
    },
    mode: 'onChange',
  });

  const onError: SubmitErrorHandler<SignUpValues> = (errors) => {
    // console.log('Form validation errors:', errors);
    Object.entries(errors).forEach(([fieldName, error]) => {
      toast.error(`${fieldName}: ${error.message}`, {
        description: 'Please fix the errors and try again.',
        id: `sign-up-error-${fieldName}`,
      });
    });
  };

  const onSubmit: SubmitHandler<SignUpValues> = (values) => {
    // console.log('Form submitted successfully with data:', data);
    setIsSignUpPending(true);
    toast.promise(
      signUp.email({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
      {
        loading: 'Loading...',
        success: ({ data }) => {
          form.reset();
          router.push('/login');
          return `${data?.user?.name ?? 'User'} signed up successfully!`;
        },
        error: (err) =>
          err instanceof Error
            ? err.message
            : 'Sign-up failed. Please try again.',
        description: 'Please wait while we create your account.',
        descriptionClassName: 'text-[10px]',
        finally() {
          setIsSignUpPending(false);
        },
      },
    );
  };

  return (
    <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit, onError)}>
      <FieldSet disabled={isSignUpPending}>
        <Controller
          name='name'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              aria-invalid={fieldState.invalid}>
              <FieldLabel htmlFor='name'>Full Name*</FieldLabel>
              <Input
                type='text'
                id='name'
                placeholder='Enter your full name'
                {...field}
                aria-invalid={fieldState.invalid}
              />
              {fieldState.error ? (
                <FieldError role='alert' errors={[fieldState.error]} />
              ) : (
                <FieldDescription>Enter your full name</FieldDescription>
              )}
            </Field>
          )}
        />

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
              <FieldLabel htmlFor='password'>Password</FieldLabel>
              <div className='relative'>
                <Input
                  id='password'
                  type={isPasswordVisible ? 'text' : 'password'}
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
                  onClick={() =>
                    setIsPasswordVisible((prevState) => !prevState)
                  }
                  className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'>
                  {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
                  <span className='sr-only'>
                    {isPasswordVisible ? 'Hide password' : 'Show password'}
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

        {/* Confirm Password */}
        <Controller
          name='confirmPassword'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              aria-invalid={fieldState.invalid}>
              <FieldLabel htmlFor='confirmPassword'>
                Confirm Password*
              </FieldLabel>
              <div className='relative'>
                <Input
                  id='confirmPassword'
                  type={isConfirmPasswordVisible ? 'text' : 'password'}
                  placeholder='••••••••••••••••'
                  className='pr-9'
                  {...field}
                  aria-invalid={fieldState.invalid}
                />
                <Button
                  type='button'
                  variant='ghost'
                  aria-invalid={fieldState.invalid}
                  size='icon'
                  onClick={() =>
                    setIsConfirmPasswordVisible((prevState) => !prevState)
                  }
                  className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'>
                  {isConfirmPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
                  <span className='sr-only'>
                    {isConfirmPasswordVisible
                      ? 'Hide password'
                      : 'Show password'}
                  </span>
                </Button>
              </div>

              {fieldState.error ? (
                <FieldError role='alert' errors={[fieldState.error]} />
              ) : (
                <FieldDescription>Must match the password.</FieldDescription>
              )}
            </Field>
          )}
        />

        {/* Privacy policy */}
        <Controller
          name='privacyPolicy'
          control={form.control}
          render={({ field, fieldState }) => (
            <FieldGroup className={'gap-2'}>
              <Field
                orientation='horizontal'
                data-invalid={fieldState.invalid}
                aria-invalid={fieldState.invalid}>
                <Checkbox
                  id='privacyPolicy'
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked);
                  }}
                  aria-invalid={fieldState.invalid}
                />
                <FieldLabel htmlFor='privacyPolicy' className='font-normal'>
                  <span className='text-muted-foreground'>I agree to</span>{' '}
                  <Link href='#' className={'underline underline-offset-2'}>
                    privacy policy & terms
                  </Link>
                </FieldLabel>
              </Field>
              {fieldState.error && (
                <FieldError role='alert' errors={[fieldState.error]} />
              )}
            </FieldGroup>
          )}
        />

        <Button className='w-full' type='submit' disabled={isSignUpPending}>
          {isSignUpPending ? (
            <span className={'inline-flex items-center gap-2'}>
              Signing up...
              <Spinner className={'size-4'} />
            </span>
          ) : (
            <span>Sign Up to DynaCode Studio</span>
          )}
        </Button>
      </FieldSet>
    </form>
  );
}
