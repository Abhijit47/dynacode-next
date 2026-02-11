import type { NextConfig } from 'next';

// Without Nonces
const isDev = process.env.NODE_ENV === 'development';
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  // Without Nonces
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ' ').trim(),
          },
        ],
      },
    ];
  },
  logging: {
    fetches: {
      fullUrl: isDev ? true : undefined,
      hmrRefreshes: isDev ? true : undefined,
    },
  },
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    typedEnv: true,
    optimizePackageImports: [
      '@hookform/resolvers',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-label',
      '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-slot',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-visually-hidden',
      '@tabler/icons-react',
      'better-auth',
      'class-variance-authority',
      'clsx',
      'cmdk',
      'cobe',
      'date-fns',
      'embla-carousel-react',
      'input-otp',
      'motion',
      'react-day-picker',
      'react-hook-form',
      'react-resizable-panels',
      'react-slot-counter',
      'react-use-measure',
      'sonner',
      'tailwind-merge',
      'vaul',
      'zod',
    ],
  },
  serverExternalPackages: [
    '@arcjet/inspect',
    '@arcjet/next',
    '@neondatabase/serverless',
    '@next/env',
    'drizzle-orm',
  ],
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
