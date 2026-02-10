import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';

import { db } from '@/drizzle/db';
import * as schema from '@/drizzle/schema';

const githubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
if (!githubClientId || !githubClientSecret) {
  throw new Error('GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET must be set');
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
