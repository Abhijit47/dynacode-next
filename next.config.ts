import { withContentCollections } from '@content-collections/next';
import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

const externalOrigins = {
  images: [
    'cdn.pixabay.com',
    'tailwindcss.com',
    'pro.shadcnui-blocks.com',
    'www.google.com',
    'res.cloudinary.com',
    'html.tailus.io',
  ],
  scripts: ['https://cdn.amplitude.com'],
  connect: ['https://api.amplitude.com', 'https://sr-client-cfp.amplitude.com'],
};

// Without Nonces
const isDev = process.env.NODE_ENV === 'development';
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
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' ${externalOrigins.scripts.join(' ')}${isDev ? " 'unsafe-eval'" : ''};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: ${externalOrigins.images.map((h) => `https://${h}`).join(' ')};
    font-src 'self' data:;
    connect-src 'self' ${externalOrigins.connect.join(' ')};
    worker-src 'self' blob:;
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
      {
        source: '/:path*',
        headers: [
          {
            key: 'Document-Policy',
            value: 'js-profiling',
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
      { hostname: 'html.tailus.io' }, // Add this
    ],
  },
};

export default withContentCollections(
  withSentryConfig(nextConfig, {
    // For all available options, see:
    // https://www.npmjs.com/package/@sentry/webpack-plugin#options

    org: 'dynacode-rm',

    project: 'dynacode-webapp',

    authToken: process.env.SENTRY_AUTH_TOKEN,

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: '/monitoring',

    webpack: {
      // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
      // See the following for more information:
      // https://docs.sentry.io/product/crons/
      // https://vercel.com/docs/cron-jobs
      automaticVercelMonitors: true,

      // Tree-shaking options for reducing bundle size
      treeshake: {
        // Automatically tree-shake Sentry logger statements to reduce bundle size
        removeDebugLogging: true,
      },
    },
  }),
);
