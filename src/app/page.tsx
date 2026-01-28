import Blog from '@/components/blog';
import Hero from '@/components/hero';
import LogoCloud from '@/components/logo-cloud';
import OurBlogs from '@/components/our-blogs';
import OurServices from '@/components/our-services';
import Stats from '@/components/stats';
import Timeline from '@/components/timeline';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Stats />
      <OurServices />
      <Timeline />
      <Blog />
      <OurBlogs />
    </>
  );
}
