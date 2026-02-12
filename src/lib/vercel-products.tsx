'use client';

import { Analytics, BeforeSendEvent } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function VercelProducts() {
  return (
    <>
      <Analytics
        beforeSend={(event: BeforeSendEvent) => {
          if (event.url.includes('/admin')) {
            return null;
          }
          return event;
        }}
      />
      <SpeedInsights
        beforeSend={(event) => {
          if (event.url.includes('/admin')) {
            return null;
          }
          return event;
        }}
      />
    </>
  );
}
