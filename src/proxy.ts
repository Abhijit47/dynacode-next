// import { headers } from 'next/headers';
import { getSessionCookie } from 'better-auth/cookies';
import { NextRequest, NextResponse, ProxyConfig } from 'next/server';
// import { auth } from '@/lib/auth';
import * as Sentry from '@sentry/nextjs';

export async function proxy(request: NextRequest) {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  // const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  // const isDev = process.env.NODE_ENV === 'development';

  // const cspHeader = `
  //     default-src 'self';
  //     script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${isDev ? "'unsafe-eval'" : ''};
  //     style-src 'self' ${isDev ? "'unsafe-inline'" : `'nonce-${nonce}'`};
  //     img-src 'self' blob: data:;
  //     font-src 'self';
  //     object-src 'none';
  //     base-uri 'self';
  //     form-action 'self';
  //     frame-ancestors 'none';
  //     upgrade-insecure-requests;
  // `;

  // Replace newline characters and spaces
  // const contentSecurityPolicyHeaderValue = cspHeader
  //   .replace(/\s{2,}/g, ' ')
  //   .trim();
  // const requestHeaders = new Headers(request.headers);
  // requestHeaders.set('x-nonce', nonce);
  // requestHeaders.set(
  //   'Content-Security-Policy',
  //   contentSecurityPolicyHeaderValue,
  // );

  // Check if this is a protected route that needs auth
  // const pathname = request.nextUrl.pathname;
  // const protectedRoutes = ['/admin'];
  // const isProtectedRoute = protectedRoutes.some((route) =>
  //   pathname.startsWith(route),
  // );

  // // Only check session for protected routes
  // if (isProtectedRoute) {
  //   const session = await getCookieCache(request);

  //   if (!session) {
  //     const redirectResponse = NextResponse.redirect(
  //       new URL('/login', request.url),
  //     );
  //     redirectResponse.headers.set(
  //       'Content-Security-Policy',
  //       contentSecurityPolicyHeaderValue,
  //     );
  //     return redirectResponse;
  //   }
  // }

  // const response = NextResponse.next({
  //   request: {
  //     headers: requestHeaders,
  //   },
  // });
  // response.headers.set(
  //   'Content-Security-Policy',
  //   contentSecurityPolicyHeaderValue,
  // );

  // return response;

  Sentry.metrics.count('requests', 1, {
    attributes: {
      path: request.nextUrl.pathname,
      method: request.method,
    },
  });

  const sessionCookie = getSessionCookie(request);
  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!sessionCookie) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config: ProxyConfig = {
  // matcher: [
  //   '/admin/:path*',
  //   // '/chat/:path*',
  //   // '/messages',
  //   // '/my-listings',
  //   // '/my-orders',
  //   // '/marketplace',
  //   // '/new-listing',
  // ],
  matcher: [
    '/admin/:path*',
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // {
    //   source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
    //   missing: [
    //     { type: 'header', key: 'next-router-prefetch' },
    //     { type: 'header', key: 'purpose', value: 'prefetch' },
    //   ],
    // },
  ],
};
