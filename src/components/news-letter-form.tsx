'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import z from 'zod';
import { Field, FieldError, FieldLabel } from './ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from './ui/input-group';

const newsLetterSchema = z.object({
  email: z.email().min(1, 'Email is required'),
});

type NewsLetterValues = z.infer<typeof newsLetterSchema>;

export default function NewsLetterForm() {
  const form = useForm<NewsLetterValues>({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const onError: SubmitErrorHandler<NewsLetterValues> = (errors) => {
    console.log(errors);
  };

  const onSubmit: SubmitHandler<NewsLetterValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit, onError)}>
      <Controller
        control={form.control}
        name='email'
        render={({ field, fieldState }) => (
          <Field
            data-invalid={fieldState.invalid}
            aria-invalid={fieldState.invalid}>
            <FieldLabel htmlFor='newsletter'>
              Subscribe to our newsletter
            </FieldLabel>
            <InputGroup className='rounded-full!'>
              <InputGroupInput
                placeholder='Enter your mail...'
                id='newsletter'
                type='email'
                autoComplete='email'
                {...field}
                aria-invalid={fieldState.invalid}
              />
              <InputGroupAddon align='inline-end'>
                <InputGroupButton
                  type='submit'
                  variant='secondary'
                  className={'rounded-full'}>
                  Subscribe
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>

            {fieldState.error && (
              <FieldError role='alert' errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />
    </form>
  );
}
