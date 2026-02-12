import { findIp } from '@arcjet/ip';
import { toNextJsHandler } from 'better-auth/next-js';

import arcjet, {
  botSettings,
  detectBot,
  emailSettings,
  fixedWindow,
  laxRateLimitSettings,
  protectSignup,
  restrictiveRateLimitSettings,
  slidingWindow,
} from '@/lib/arcjet';

import { auth } from '@/lib/auth'; // path to your auth file

// Opt out of caching
export const dynamic = 'force-dynamic';

const aj = arcjet
  .withRule(
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
  )
  // You can chain multiple rules, so we'll include a rate limit
  .withRule(
    fixedWindow({
      characteristics: ['userIdOrIp'],
      mode: 'LIVE',
      max: 10,
      window: '60s',
    }),
  );

const authHandlers = toNextJsHandler(auth);

export const { GET } = authHandlers;

export async function POST(request: Request) {
  const clonedRequest = request.clone();
  const decision = await checkArcjet(clonedRequest);

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return new Response(null, { status: 429 });
    } else if (decision.reason.isEmail()) {
      let message: string;

      if (decision.reason.emailTypes.includes('INVALID')) {
        message = 'Email address format is invalid.';
      } else if (decision.reason.emailTypes.includes('DISPOSABLE')) {
        message = 'Disposable email addresses are not allowed.';
      } else if (decision.reason.emailTypes.includes('NO_MX_RECORDS')) {
        message = 'Email domain is not valid.';
      } else {
        message = 'Invalid email.';
      }

      return Response.json({ message }, { status: 400 });
    } else {
      return new Response(null, { status: 403 });
    }
  }

  return authHandlers.POST(clonedRequest);
}

async function checkArcjet(request: Request) {
  const body = (await request.json()) as unknown;
  const session = await auth.api.getSession({ headers: request.headers });
  const userIdOrIp = (session?.user.id ?? findIp(request)) || '127.0.0.1';

  if (request.url.endsWith('/auth/sign-up')) {
    if (
      body &&
      typeof body === 'object' &&
      'email' in body &&
      typeof body.email === 'string'
    ) {
      return aj
        .withRule(
          protectSignup({
            email: emailSettings,
            bots: botSettings,
            rateLimit: restrictiveRateLimitSettings,
          }),
        )
        .protect(request, { email: body.email, userIdOrIp });
    } else {
      return aj
        .withRule(detectBot(botSettings))
        .withRule(slidingWindow(restrictiveRateLimitSettings))
        .protect(request, { userIdOrIp });
    }
  }

  return aj
    .withRule(detectBot(botSettings))
    .withRule(slidingWindow(laxRateLimitSettings))
    .protect(request, { userIdOrIp });
}
