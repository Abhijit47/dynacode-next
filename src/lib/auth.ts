import * as Sentry from '@sentry/nextjs';
import { APIError, betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';

import { db } from '@/drizzle/db';
import * as schema from '@/drizzle/schema';
import { createAuthMiddleware } from 'better-auth/api';

const githubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
if (!githubClientId || !githubClientSecret) {
  throw new Error('GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET must be set');
}

const emails = process.env.ADMIN_EMAILS;
if (!emails) {
  throw new Error('ADMIN_EMAILS must be set');
}

export const auth = betterAuth({
  advanced: {
    database: {
      generateId: 'uuid',
    },
  },
  database: drizzleAdapter(db, {
    provider: 'pg', // or "mysql", "sqlite"
    schema,
    transaction: true,
  }),

  emailAndPassword: {
    enabled: true,
    autoSignIn: false, //defaults to true
  },
  experimental: {
    joins: true,
  },

  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      // Only enforce admin-email check on sign-in/sign-up
      if (!ctx.body?.email) {
        return ctx;
      }

      const adminEmails = emails?.split(',').map((email) => email.trim());
      const isAdmin = adminEmails.includes(ctx.body?.email);
      // ctx.user = {
      //   ...ctx.user,
      //   role: isAdmin ? 'admin' : 'user',
      // };
      if (!isAdmin) {
        Sentry.captureMessage('Unauthorized access attempt', {
          level: 'warning',
          extra: {
            email: ctx.body?.email,
            endpoint: ctx.path,
          },
        });
        throw new APIError('FORBIDDEN', {
          message: 'You do not have permission to log in.',
        });
      }

      return ctx;
    }),
  },

  socialProviders: {
    github: {
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    },
  },

  session: {
    storeSessionInDatabase: true,
    preserveSessionInDatabase: true,
    cookieCache: {
      maxAge: 60 * 60 * 24, // 1 day
      enabled: true,
      // refreshCache: true,
    },
  },

  plugins: [
    // adminPlugin({
    //   ac,
    //   roles: {
    //     admin,
    //     user,
    //   },
    // }),
    nextCookies(),
  ], // make sure this is the last plugin in the array
});

export type ServerSession = (typeof auth.$Infer)['Session'];
