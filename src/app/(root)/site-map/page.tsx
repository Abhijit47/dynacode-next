import { CoolMode } from '@/components/extends/cool-mode';
import { File, Folder, Tree } from '@/components/extends/file-tree';
import WarpBackground from '@/components/extends/warp-background';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { IconHandClick } from '@tabler/icons-react';
import { Route } from 'next';
import Link from 'next/link';

const paths: Route[] = [
  '/',
  '/about-us',
  '/blogs',
  '/contact-us',
  '/login',
  '/services/developments/ai-development',
  '/services/developments/desktop-application',
  '/services/developments/iot-solutions',
  '/services/developments/mobile-application',
  '/services/developments/ui-ux-design',
  '/services/developments/web-development',
  '/services/marketings/ads-management',
  '/services/marketings/content-marketing',
  '/services/marketings/email-marketing',
  '/services/marketings/influencer-marketing',
  '/services/marketings/marketing-automation',
  '/services/marketings/seo',
  '/services/others/ai-automations',
  '/services/others/cyber-security-services',
  '/services/others/data-analytics',
  '/services/others/icons',
];

function SiteMapTree() {
  const rootLinks = paths.filter((path) => !path.startsWith('/services/'));
  const developmentsLinks = paths
    .filter((path) => path.startsWith('/services/developments/'))
    .map((path) => path.replace('/services/developments/', ''));
  const marketingsLinks = paths
    .filter((path) => path.startsWith('/services/marketings/'))
    .map((path) => path.replace('/services/marketings/', ''));
  const othersLinks = paths
    .filter((path) => path.startsWith('/services/others/'))
    .map((path) => path.replace('/services/others/', ''));

  return (
    <div className='relative h-full w-full border-2 border-dashed rounded-md'>
      <Tree
        indicator={true}
        className='bg-background overflow-hidden rounded-md p-2'
        initialSelectedId='7'
        initialExpandedItems={[
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
        ]}
        // elements={ELEMENTS}
      >
        <Folder value='1' element='DynaCode'>
          <Folder value='2' element='root'>
            {rootLinks.map((link) => (
              <File key={link} value={link}>
                <Link href={link} className='capitalize'>
                  {link === '/' ? 'home' : link.replace('/', '')}
                </Link>
              </File>
            ))}
          </Folder>
          <Folder value='3' element='services'>
            <Folder value='4' element='developments'>
              {developmentsLinks.map((link) => (
                <File key={link} value={link}>
                  <Link
                    href={`/services/developments/${link}` as Route}
                    className='capitalize'>
                    {link.replace(/-/g, ' ')}
                  </Link>
                </File>
              ))}
            </Folder>
            <Folder value='5' element='marketings'>
              {marketingsLinks.map((link) => (
                <File key={link} value={link}>
                  <Link
                    href={`/services/marketings/${link}` as Route}
                    className='capitalize'>
                    {link.replace(/-/g, ' ')}
                  </Link>
                </File>
              ))}
            </Folder>
            <Folder value='6' element='others'>
              {othersLinks.map((link) => (
                <File key={link} value={link}>
                  <Link
                    href={`/services/others/${link}` as Route}
                    className='capitalize'>
                    {link.replace(/-/g, ' ')}
                  </Link>
                </File>
              ))}
            </Folder>

            {/* <Folder value='4' element='ui'>
              <File value='7'>
                <p>button.tsx</p>
              </File>
            </Folder>
            <File value='8'>
              <p>header.tsx</p>
            </File>
            <File value='9'>
              <p>footer.tsx</p>
            </File> */}
          </Folder>
          {/* <Folder value='10' element='lib'>
            <File value='11'>
              <p>utils.ts</p>
            </File>
          </Folder> */}
        </Folder>
      </Tree>
    </div>
  );
}

// const ELEMENTS = [
//   {
//     id: '1',
//     isSelectable: true,
//     name: 'DynaCode',
//     children: [
//       {
//         id: '2',
//         isSelectable: true,
//         name: 'app',
//         children: [
//           {
//             id: '3',
//             isSelectable: true,
//             name: 'layout.tsx',
//           },
//           {
//             id: '4',
//             isSelectable: true,
//             name: 'page.tsx',
//           },
//         ],
//       },
//       {
//         id: '5',
//         isSelectable: true,
//         name: 'components',
//         children: [
//           {
//             id: '6',
//             isSelectable: true,
//             name: 'header.tsx',
//           },
//           {
//             id: '7',
//             isSelectable: true,
//             name: 'footer.tsx',
//           },
//         ],
//       },
//       {
//         id: '8',
//         isSelectable: true,
//         name: 'lib',
//         children: [
//           {
//             id: '9',
//             isSelectable: true,
//             name: 'utils.ts',
//           },
//         ],
//       },
//     ],
//   },
// ];

export default function SitemapsPage() {
  // const developmentsLinks = paths
  //   .filter((path) => path.startsWith('/services/developments/'))
  //   .map((path) => path.replace('/services/developments/', ''));
  // const marketingsLinks = paths
  //   .filter((path) => path.startsWith('/services/marketings/'))
  //   .map((path) => path.replace('/services/marketings/', ''));
  // const othersLinks = paths
  //   .filter((path) => path.startsWith('/services/others/'))
  //   .map((path) => path.replace('/services/others/', ''));

  return (
    <main>
      <section>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>Sitemaps</h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  At DynaCode, we are passionate about empowering developers and
                  businesses with cutting-edge web solutions. Our mission is to
                  deliver high-quality, scalable, and innovative software that
                  drives success in the digital age. Explore our comprehensive
                  site structure and navigate to discover the services and
                  resources we offer.
                </p>
              </CardDescription>
              <CoolMode
              // options={{
              //   particle:
              //     'https://pbs.twimg.com/profile_images/1782811051504885763/YR5-kWOI_400x400.jpg',
              // }}
              >
                <Link
                  href='/contact-us'
                  className={buttonVariants({
                    size: 'lg',
                    className: 'rounded-full!',
                  })}>
                  Get in touch <IconHandClick className={'size-5'} />
                </Link>
              </CoolMode>
            </CardContent>
          </Card>
        </WarpBackground>
      </section>

      <section className={'pb-16'}>
        <SiteMapTree />
        {/* <div className='overflow-auto rounded-lg outline outline-white/5'>
          <div className='mx-auto flex items-center justify-center p-16 max-sm:p-6'>
            <ul className='list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg'>
              {paths.map((path) => {
                const developmentsLink = developmentsLinks
                  .find((link) => path.endsWith(link))
                  ?.replace(/-/g, ' ');
                const marketingsLink = marketingsLinks
                  .find((link) => path.endsWith(link))
                  ?.replace(/-/g, ' ');
                const othersLink = othersLinks
                  .find((link) => path.endsWith(link))
                  ?.replace(/-/g, ' ');

                return (
                  <li key={path}>
                    {path === '/' ? (
                      <Link
                        href={path}
                        className='text-blue-500 hover:underline capitalize'>
                        home
                      </Link>
                    ) : (
                      <Link
                        href={path}
                        className='text-blue-500 hover:underline capitalize'>
                        {developmentsLink ||
                          marketingsLink ||
                          othersLink ||
                          path.replace('/', '')}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div> */}
      </section>
    </main>
  );
}
