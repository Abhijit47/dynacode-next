import type { MetadataRoute, Route } from 'next';

const isDev = process.env.NODE_ENV === 'development';
const BASE_URL = isDev
  ? 'http://localhost:3000'
  : process.env.NEXT_PUBLIC_BASE_URL;

const paths: Route[] = [
  '/',
  '/about-us',
  '/blogs',
  '/contact-us',
  '/login',
  '/services/developments/ai-development',
  '/services/developments/desktop-application',
  '/services/developments/iot-solutions',
  '/services/developments/mobile-application',
  '/services/developments/ui-ux-design',
  '/services/developments/web-development',
  '/services/marketings/ads-management',
  '/services/marketings/content-marketing',
  '/services/marketings/email-marketing',
  '/services/marketings/influencer-marketing',
  '/services/marketings/marketing-automation',
  '/services/marketings/seo',
  '/services/others/ai-automations',
  '/services/others/cyber-security-services',
  '/services/others/data-analytics',
  '/services/others/icons',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [...paths],
      disallow: ['/api', '/admin', '/private'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
