'use client';

import companyLogos from '@/constants/company-logos.json';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Marquee } from './extends/marquee';
import { Skeleton } from './ui/skeleton';

// Define types based on the JSON structure
type LogoVariant = string | { light: string; dark: string };

type CompanyLogo = {
  id: string;
  title: string;
  fallback: LogoVariant;
  variants?: LogoVariant;
};

// Helper function to get the appropriate image source based on theme
const getImageSrc = (
  logoVariant: LogoVariant | undefined,
  theme: string | undefined,
): string | null => {
  if (!logoVariant) return null;

  if (typeof logoVariant === 'string') {
    return logoVariant;
  }

  // It's an object with light/dark variants
  return theme === 'dark' ? logoVariant.dark : logoVariant.light;
};

// Component to render a single logo with theme support
const ThemeLogo = ({
  logo,
  useVariant = false,
}: {
  logo: CompanyLogo;
  useVariant?: boolean;
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className={'h-10 w-32'} />;
  }

  // Prefer variants if available and requested, otherwise use fallback
  const logoSource =
    useVariant && logo.variants ? logo.variants : logo.fallback;
  const imageSrc = getImageSrc(logoSource, resolvedTheme);

  if (!imageSrc) return null;

  return (
    <Image
      src={imageSrc}
      alt={`${logo.title} logo`}
      width={120}
      height={40}
      className='h-10 w-auto object-contain transition-all duration-300'
      priority={false}
      loading='lazy'
    />
  );
};

const LogoCloud = () => {
  // Select logos to display (adjust the slice or filter as needed)
  const displayedLogos = companyLogos.slice(0, 48);
  const midPoint = Math.ceil(displayedLogos.length / 2);

  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className='flex items-center justify-center'>
        <div className='overflow-hidden space-y-8'>
          <p className='text-center font-medium text-base md:text-lg lg:text-xl'>
            More than 2.2 million companies worldwide already trust us
          </p>

          <div className='space-y-8'>
            <Marquee
              className='mask-x-from-70% mask-x-to-90% [--duration:40s]'
              pauseOnHover>
              {displayedLogos.slice(0, midPoint).map((logo) => (
                <div key={`marquee-1-${logo.id}`} className='mr-10'>
                  <ThemeLogo logo={logo} useVariant={false} />
                </div>
              ))}
            </Marquee>
            <Marquee
              className='mask-x-from-70% mask-x-to-90% [--duration:40s]'
              pauseOnHover
              reverse>
              {displayedLogos.slice(midPoint).map((logo) => (
                <div key={`marquee-2-${logo.id}`} className='mr-10'>
                  <ThemeLogo logo={logo} useVariant={false} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
