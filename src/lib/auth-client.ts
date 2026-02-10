import { inferAdditionalFields } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';
import { auth } from './auth';

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: 'http://localhost:3000',
  plugins: [
    // adminClient({
    //   ac,
    //   roles: {
    //     admin,
    //     user,
    //     // myCustomRole,
    //   },
    // }),
    inferAdditionalFields<typeof auth>(),
  ],
});

// Tip: You can also export specific methods if you prefer:
export const { signIn, signUp, useSession, signOut } = createAuthClient({
  baseURL: 'http://localhost:3000',
  plugins: [
    // adminClient({
    //   ac,
    //   roles: {
    //     admin,
    //     user,
    //     // myCustomRole,
    //   },
    // }),
    inferAdditionalFields<typeof auth>(),
  ],
});

export type ClientSession = (typeof authClient.$Infer)['Session'];
