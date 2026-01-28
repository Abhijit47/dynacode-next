import CTASection from '@/components/cta-sections-04';
import Hero from '@/components/hero';
import LogoCloud from '@/components/logo-cloud';
import OurBlogs from '@/components/our-blogs';
import OurFeatures from '@/components/our-features';
import OurServices from '@/components/our-services';
import Project1 from '@/components/project-1';
import Projects from '@/components/projects';
import Stats from '@/components/stats';
import Testimonials from '@/components/testimonials';
import Timeline from '@/components/timeline';
import WhyChooseUs from '@/components/why-choose-us';

export default function Home() {
  return (
    <main className={''}>
      <Hero />
      <LogoCloud />
      <OurFeatures />
      <OurServices />
      <Stats />
      <Timeline />
      <WhyChooseUs />
      <Projects />
      <Project1 />
      <Testimonials />
      <CTASection />
      <OurBlogs />
    </main>
  );
}
