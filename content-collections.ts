import { defineCollection, defineConfig } from '@content-collections/core';
// import { exec } from 'node:child_process/promises';

import { exec as execCallback } from 'node:child_process';
import { promisify } from 'node:util';
import { z } from 'zod';

const exec = promisify(execCallback);

// const cyberSecurityFeatures = defineCollection({
//   name: 'cyberSecurityServices',
//   directory: 'src/contents/cyber-security/',
//   include: ['**/*.md', '**/*.mdx'],
//   exclude: ['services.md'],
//   schema: z.object({
//     title: z.string(),
//     summary: z.string(),
//     content: z.string(),
//   }),
//   transform: async (doc, { cache }) => {
//     const lastModified = await cache(doc._meta.filePath, async (filePath) => {
//       const { stdout } = await exec(`git log -1 --format=%ai -- ${filePath}`);
//       if (stdout) {
//         return new Date(stdout.trim()).toISOString();
//       }
//       return new Date().toISOString();
//     });

//     return {
//       ...doc,
//       lastModified,
//     };
//   },
// });

const cyberSecurityServices = defineCollection({
  name: 'cyberSecurityServices',
  directory: 'src/contents/cyber-security/',
  include: ['**/*.md', '**/*.mdx'],
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    content: z.string(),
  }),
  transform: async (doc, { cache }) => {
    const lastModified = await cache(doc._meta.filePath, async (filePath) => {
      const { stdout } = await exec(`git log -1 --format=%ai -- ${filePath}`);
      if (stdout) {
        return new Date(stdout.trim()).toISOString();
      }
      return new Date().toISOString();
    });

    return {
      ...doc,
      lastModified,
    };
  },
});

const aiDevelopmentServices = defineCollection({
  name: 'aiDevelopmentServices',
  directory: 'src/contents/ai-development/',
  include: ['**/*.md', '**/*.mdx'],
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    content: z.string(),
  }),
  transform: async (doc, { cache }) => {
    const lastModified = await cache(doc._meta.filePath, async (filePath) => {
      const { stdout } = await exec(`git log -1 --format=%ai -- ${filePath}`);
      if (stdout) {
        return new Date(stdout.trim()).toISOString();
      }
      return new Date().toISOString();
    });

    return {
      ...doc,
      lastModified,
    };
  },
});

export default defineConfig({
  content: [
    // cyberSecurityFeatures,
    cyberSecurityServices,
    aiDevelopmentServices,
  ],
});
