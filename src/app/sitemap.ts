import type { MetadataRoute } from 'next';
import { Route } from 'next';

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

const isDev = process.env.NODE_ENV === 'development';
const BASE_URL = isDev
  ? 'http://localhost:3000'
  : process.env.NEXT_PUBLIC_BASE_URL;

const lastModified = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...paths
      .filter((path) => path !== '/')
      .filter((path) => path !== '/about-us')
      .filter((path) => path !== '/blogs')
      .map((path) => {
        return {
          url: `${BASE_URL}${path}`,
          lastModified,
          changeFrequency: 'weekly',
          priority: 0.7,
        } as MetadataRoute.Sitemap[0];
      }),
  ];
}
