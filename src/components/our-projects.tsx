import { projects } from '@/constants';
import Image from 'next/image';
import { ShineBorder } from './extends/shine-border';

export default function OurProjects() {
  return (
    <section
      className={'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0'}>
      <div className=''>
        <div className=''>
          <h2 className='text-pretty text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight'>
            Powerful Features, Built for You
          </h2>
          <p className='mt-3 text-center text-muted-foreground text-xs sm:text-base md:text-lg lg:text-xl'>
            Designed for speed, flexibility, and ease of use.
          </p>
          <div className='mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
        {/* <ShineBorderDemo /> */}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, imageUrl }: Project) {
  return (
    <div className='rounded-lg border relative overflow-hidden'>
      <BorderBeam
        duration={6}
        size={400}
        className='from-transparent via-red-500 to-transparent'
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        borderWidth={2}
        className='from-transparent via-blue-500 to-transparent'
      />
      <div className='mask-b-from-50% dark:mask-b-from-40% aspect-square w-full rounded-t-lg'>
        <Image
          alt={title}
          className='size-full rounded-t-lg object-cover'
          src={imageUrl}
          width={512}
          height={512}
        />
      </div>
      <div className='p-6'>
        <h3 className='font-semibold text-base md:text-lg lg:text-xl tracking-[-0.005em]'>
          {title}
        </h3>
        <p className='mt-2 text-xs sm:text-sm lg:text-base text-foreground/90'>
          {description}
        </p>
      </div>
    </div>
  );
}

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BorderBeam } from './extends/border-beam';

export function ShineBorderDemo() {
  return (
    <Card className='relative w-full max-w-87.5 overflow-hidden'>
      <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='name@example.com' />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Sign In</Button>
      </CardFooter>
    </Card>
  );
}
