import CTASection from '@/components/cta-sections-04';
import Hero from '@/components/hero';
import LogoCloud from '@/components/logo-cloud';
import OurBlogs from '@/components/our-blogs';
import OurFeatures from '@/components/our-features';
import OurIntegrations from '@/components/our-integrations';
import OurProjects from '@/components/our-projects';
import OurServices from '@/components/our-services';
// import Projects from '@/components/projects';
import OurStats from '@/components/our-stats';
import OurTestimonials from '@/components/our-testimonials';
import OurTimeline from '@/components/our-timeline';
import WhyChooseUs from '@/components/why-choose-us';
// import { connection } from 'next/server';

export default function Home() {
  // wait for an incoming request to render this page
  // await connection();

  return (
    <main className={''}>
      <Hero />
      <LogoCloud />
      <OurFeatures />
      <OurServices />
      <OurStats />
      <OurTimeline />
      <OurIntegrations />
      <WhyChooseUs />
      {/* <Projects /> */}
      <OurProjects />
      <OurTestimonials />
      <CTASection />
      <OurBlogs />
    </main>
  );
}
