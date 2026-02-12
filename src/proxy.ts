import { createMiddleware } from '@arcjet/next';
import * as Sentry from '@sentry/nextjs';
import { getSessionCookie } from 'better-auth/cookies';
import { NextRequest, NextResponse, ProxyConfig } from 'next/server';

import arcjet, { detectBot } from './lib/arcjet';

// const aj = arcjet({
//   key: process.env.ARCJET_KEY!, // Get your site key from https://app.arcjet.com
//   rules: [
//     detectBot({
//       mode: 'LIVE', // will block requests. Use "DRY_RUN" to log only
//       // Block all bots except the following
//       allow: [
//         'CATEGORY:SEARCH_ENGINE', // Google, Bing, etc
//         // Uncomment to allow these other common bot categories
//         // See the full list at https://arcjet.com/bot-list
//         //"CATEGORY:MONITOR", // Uptime monitoring services
//         'CATEGORY:PREVIEW', // Link previews e.g. Slack, Discord
//       ],
//     }),
//   ],
// });

const aj =
  // You can chain multiple rules, so we'll include a rate limit
  arcjet.withRule(
    detectBot({
      mode: 'LIVE', // will block requests. Use "DRY_RUN" to log only
      // Block all bots except the following
      allow: [
        'CATEGORY:SEARCH_ENGINE', // Google, Bing, etc
        // Uncomment to allow these other common bot categories
        // See the full list at https://arcjet.com/bot-list
        //"CATEGORY:MONITOR", // Uptime monitoring services
        'CATEGORY:PREVIEW', // Link previews e.g. Slack, Discord
      ],
    }),
  );

async function proxy(request: NextRequest) {
  Sentry.metrics.count('requests', 1, {
    attributes: {
      path: request.nextUrl.pathname,
      method: request.method,
    },
  });

  const decision = await aj.protect(request);

  if (
    // If the decision is deny because the request is from a bot and the bot IP
    // address is from a known hosting provider, then block the request
    decision.isDenied() &&
    decision.reason.isBot() &&
    decision.ip.isHosting()
  ) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const sessionCookie = getSessionCookie(request);
  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!sessionCookie) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

// Pass any existing middleware with the optional existingMiddleware prop
export default createMiddleware(aj, proxy);

export const config: ProxyConfig = {
  matcher: [
    '/admin/:path*',

    // matcher tells Next.js which routes to run the middleware on.
    // This runs the middleware on all routes except for static assets.
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
