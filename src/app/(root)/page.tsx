import CTASection from '@/components/cta-sections-04';
import Hero from '@/components/hero';
import LogoCloud from '@/components/logo-cloud';
import OurBlogs from '@/components/our-blogs';
import OurFeatures from '@/components/our-features';
import OurProjects from '@/components/our-projects';
import OurServices from '@/components/our-services';
// import Projects from '@/components/projects';
import OurStats from '@/components/our-stats';
import OurTestimonials from '@/components/our-testimonials';
import OurTimeline from '@/components/our-timeline';
import WhyChooseUs from '@/components/why-choose-us';

export default function Home() {
  return (
    <main className={''}>
      <Hero />
      <LogoCloud />
      <OurFeatures />
      <OurServices />
      <OurStats />
      <OurTimeline />
      <WhyChooseUs />
      {/* <Projects /> */}
      <OurProjects />
      <OurTestimonials />
      <CTASection />
      <OurBlogs />
    </main>
  );
}
