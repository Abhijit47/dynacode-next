// amplitude.ts
'use client';

import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';

function initAmplitude() {
  const amplitudeKey = process.env.NEXT_PUBLIC_AMPLITUDE_KEY;

  if (typeof window !== 'undefined') {
    if (!amplitudeKey) {
      console.warn('Amplitude API key is not defined — analytics disabled.');
      return;
    }
    amplitude.add(sessionReplayPlugin());
    amplitude.init(amplitudeKey, {
      autocapture: true,
    });
  }
}

initAmplitude();

export const Amplitude = () => null;
export default amplitude;
