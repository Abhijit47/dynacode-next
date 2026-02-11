'use server';

import * as Sentry from '@sentry/nextjs';

export async function testSentryProfiling() {
  // All spans (unless those discarded by sampling) will have profiling data attached to them.
  Sentry.profiler.startProfiler();
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  } finally {
    Sentry.profiler.stopProfiler();
  }
}
