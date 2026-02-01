import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply this policy to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;",
          },
          // You can explicitly disable the old header if desired
          {
            key: 'X-XSS-Protection',
            value: '0',
          },
          // Recommended: Add other modern security headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
  /* config options here */
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    typedEnv: true,
  },

  images: {
    remotePatterns: [
      {
        hostname: 'cdn.pixabay.com',
      },
      {
        hostname: 'tailwindcss.com',
      },
    ],
  },
};

export default nextConfig;
