import { Button } from '@/components/ui/button';
// import { cyberSecurityfeatures } from '@/constants';
import jsonData from '@/constants/cyberSecurityfeatures.json';
import {
  allAiDevelopmentServices,
  allCyberSecurityServices,
} from 'content-collections';
import fs from 'fs/promises';
import json2md from 'json2md';
import path from 'path';

async function makeMDFile(src: string) {
  // const filePath = path.join(process.cwd(), 'src/constants', src);

  const markdownContent = json2md(jsonData);

  const saveDir = path.join(process.cwd(), 'src/constants');
  try {
    await fs.mkdir(saveDir, { recursive: true });
    console.log(`Directory ${saveDir} created successfully.`);
  } catch (error) {
    console.error(`Error creating directory ${saveDir}:`, error);
  }

  try {
    await fs.writeFile(path.join(saveDir, src), markdownContent);
    console.log(`Markdown content written to ${src}`);
  } catch (error) {
    console.error(
      'Error writing cyberSecurityfeatures data to JSON file:',
      error,
    );
  }
}

export default async function Page() {
  const generatedFileName = '/cyberSecurityfeatures.md';

  // write the cyberSecurityfeatures data to a JSON file for debugging
  // fs.writeFile(filePath, JSON.stringify(cyberSecurityfeatures, null, 2))
  //   .then(() => {
  //     console.log(
  //       'cyberSecurityfeatures data written to cyberSecurityfeatures.json',
  //     );
  //   })
  //   .catch((error) => {
  //     console.error(
  //       'Error writing cyberSecurityfeatures data to JSON file:',
  //       error,
  //     );
  //   });

  return (
    <div>
      <div className={'mt-16'}>
        <form
          action={async () => {
            'use server';
            await makeMDFile(generatedFileName);
          }}>
          <Button type='submit'>Generate MD File</Button>
        </form>
      </div>

      <ul>
        {allCyberSecurityServices.map((post) => (
          <li key={post._meta.path}>
            <a href={`/posts/${post._meta.path}`}>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <p>
                <strong>Content:</strong> {post.content}
              </p>
              <small>
                Last Modified: {new Date(post.lastModified).toLocaleString()}
              </small>
            </a>
          </li>
        ))}
      </ul>
      <ul>
        {allAiDevelopmentServices.map((post) => (
          <li key={post._meta.path}>
            <a href={`/posts/${post._meta.path}`}>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <p>
                <strong>Content:</strong> {post.content}
              </p>
              <small>
                Last Modified: {new Date(post.lastModified).toLocaleString()}
              </small>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
