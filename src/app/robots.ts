import type { MetadataRoute } from 'next';

const isDev = process.env.NODE_ENV === 'development';
const BASE_URL = isDev
  ? 'http://localhost:3000'
  : process.env.NEXT_PUBLIC_BASE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api', '/admin', '/private'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
