// import { headers } from 'next/headers';
import { getCookieCache } from 'better-auth/cookies';
import { NextRequest, NextResponse, ProxyConfig } from 'next/server';

// import { auth } from '@/lib/auth';

export async function proxy(request: NextRequest) {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  const session = await getCookieCache(request);

  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!session) {
    // console.log('session not found, redirecting to sign-in', session);
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config: ProxyConfig = {
  matcher: [
    '/admin/:path*',
    // '/chat/:path*',
    // '/messages',
    // '/my-listings',
    // '/my-orders',
    // '/marketplace',
    // '/new-listing',
  ],
};
