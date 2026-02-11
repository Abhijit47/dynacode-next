'use server';

import * as Sentry from '@sentry/nextjs';

export async function testSentryProfiling() {
  // All spans (unless those discarded by sampling) will have profiling data attached to them.
  Sentry.profiler.startProfiler();
  // Code executed between these two calls will be profiled

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));

  Sentry.profiler.stopProfiler();
}
