'use client';

import dynamic from 'next/dynamic';

export const LazyLottiePlayer = dynamic(() => import('./lottie-player'), {
  ssr: false,
  loading: () => (
    <div className='aspect-4/3 w-full rounded-xl bg-muted animate-pulse' />
  ),
});
