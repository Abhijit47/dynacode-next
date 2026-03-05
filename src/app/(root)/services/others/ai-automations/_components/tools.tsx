import TechnologyPartners from '@/components/shared/technology-partners';

export default function Tools() {
  return (
    <section
      className={
        'container mx-auto w-full max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>Our Technology Partners</h3>
          <p>
            We collaborate with industry-leading technology partners to deliver
            cutting-edge data analytics solutions that drive business success.
          </p>
        </hgroup>

        <TechnologyPartners />
      </div>
    </section>
  );
}
