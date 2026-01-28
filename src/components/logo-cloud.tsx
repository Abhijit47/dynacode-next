import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from '@/components/logos';
import { Marquee } from './extends/marquee';

const LogoCloud = () => {
  return (
    <section
      className={'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0'}>
      <div className='flex items-center justify-center'>
        <div className='overflow-hidden'>
          <p className='text-center font-medium text-xl'>
            More than 2.2 million companies worldwide already trust us
          </p>

          <div className='space-y-8'>
            <Marquee
              className='mask-x-from-70% mask-x-to-90% [--duration:40s] [&_svg]:mr-10'
              pauseOnHover>
              <Logo01 />
              <Logo02 />
              <Logo03 />
              <Logo04 />
              <Logo05 />
              <Logo06 />
              <Logo07 />
              <Logo08 />
            </Marquee>
            <Marquee
              className='mask-x-from-70% mask-x-to-90% [--duration:40s] [&_svg]:mr-10'
              pauseOnHover
              reverse>
              <Logo01 />
              <Logo02 />
              <Logo03 />
              <Logo04 />
              <Logo05 />
              <Logo06 />
              <Logo07 />
              <Logo08 />
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
