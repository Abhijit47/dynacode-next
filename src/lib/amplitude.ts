// amplitude.ts
'use client';

import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';

function initAmplitude() {
  const amplitudeKey = process.env.NEXT_PUBLIC_AMPLITUDE_KEY;

  if (!amplitudeKey) {
    throw new Error(
      'Amplitude API key is not defined in environment variables',
    );
  }

  if (typeof window !== 'undefined') {
    amplitude.add(sessionReplayPlugin());
    amplitude.init(amplitudeKey, {
      autocapture: true,
    });
  }
}

initAmplitude();

export const Amplitude = () => null;
export default amplitude;
