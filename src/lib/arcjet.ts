import arcjet, {
  BotOptions,
  detectBot,
  EmailOptions,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
  SlidingWindowRateLimitOptions,
  tokenBucket,
} from '@arcjet/next';

// Re-export the rules to simplify imports inside handlers
export {
  detectBot,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
  tokenBucket,
};

// Create a base Arcjet instance for use by each handler
export default arcjet({
  key: process.env.ARCJET_KEY!,
  // characteristics: ['userIdOrIp'],
  rules: [
    // Shield protects your app from common attacks e.g. SQL injection, XSS, etc.
    shield({ mode: 'LIVE' }),
  ],
});

export const botSettings = {
  mode: 'LIVE',
  allow: [
    'STRIPE_WEBHOOK',
    'CATEGORY:SEARCH_ENGINE', // Google, Bing, etc
    // Uncomment to allow these other common bot categories
    // See the full list at https://arcjet.com/bot-list
    //"CATEGORY:MONITOR", // Uptime monitoring services
    'CATEGORY:PREVIEW', // Link previews e.g. Slack, Discord
  ],
} satisfies BotOptions;

export const restrictiveRateLimitSettings = {
  mode: 'LIVE',
  max: 10,
  interval: '10m',
} satisfies SlidingWindowRateLimitOptions<[]>;

export const laxRateLimitSettings = {
  mode: 'LIVE',
  max: 60,
  interval: '1m',
} satisfies SlidingWindowRateLimitOptions<[]>;

export const emailSettings = {
  mode: 'LIVE',
  deny: ['DISPOSABLE', 'INVALID', 'NO_MX_RECORDS', 'FREE'],
} satisfies EmailOptions;
