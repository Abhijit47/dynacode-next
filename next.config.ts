import type { NextConfig } from 'next';
// const isDev = process.env.NODE_ENV === 'development';
// const cspHeader = `
//     default-src 'self';
//     script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''};
//     style-src 'self' 'unsafe-inline';
//     img-src 'self' blob: data:;
//     font-src 'self';
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-ancestors 'none';
//     upgrade-insecure-requests;
// `;

// CSP configuration with SRI
const cspHeader = `
    default-src 'self';
    script-src 'self';
    style-src 'self';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  // without nonce
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: cspHeader.replace(/\n/g, ''),
  //         },
  //       ],
  //     },
  //   ];
  // },
  /* config options here */
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    typedEnv: true,
    sri: {
      algorithm: 'sha256',
    },
  },

  // CSP configuration with SRI
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        hostname: 'cdn.pixabay.com',
      },
      {
        hostname: 'tailwindcss.com',
      },
      {
        hostname: 'pro.shadcnui-blocks.com',
      },
      {
        hostname: 'www.google.com',
      },
    ],
  },
};

export default nextConfig;
