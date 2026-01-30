import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  typedRoutes: true,

  images: {
    remotePatterns: [
      {
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
};

export default nextConfig;
