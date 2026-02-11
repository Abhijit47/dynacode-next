import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/providers/theme-provider';
import type { Metadata } from 'next';
import { IBM_Plex_Mono, Lato, Montserrat } from 'next/font/google';

import ScrollProgress from '@/components/extends/scroll-progress';
import { Amplitude } from '@/lib/amplitude';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--display-family',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--body-family',
});
const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
});

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Dynacode | Your Technology Partner',
  description: `Empowering Your Business with Innovative Tech Solutions.
  Transforming Ideas into Reality with Cutting-Edge Development and Marketing Services.
  Explore Our Expertise in AI, Web & Mobile Development, SEO, and More.
  Let's Build the Future Together!
  `,
  keywords: [
    'Dynacode',
    'Technology Solutions',
    'AI Development',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'SEO Services',
    'Content Marketing',
    'Email Marketing',
    'Influencer Marketing',
    'Marketing Automation',
    'Cyber Security',
    'Data Analytics',
    'IoT Solutions',
    'Desktop Applications',
    'Tech Innovations',
  ],
  applicationName: 'Dynacode',
  authors: [
    { name: 'Abhijit Karmakar', url: 'https://dynacode.tech' },
    { name: 'Shivam Sharma', url: 'https://dynacode.tech' },
  ],
  generator: 'Next.js',
  creator: 'Abhijit Karmakar & Shivam Sharma',
  publisher: 'Dynacode',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://dynacode.tech',
    languages: {
      'en-US': 'https://dynacode.tech/en-US',
    },
  },
  manifest: 'https://dynacode.tech/manifest.json',
  category: 'technology',
  classification: 'business',
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${lato.variable} ${montserrat.variable} ${ibm_plex_mono.variable}`}
      suppressHydrationWarning>
      <Amplitude />
      <body className={`font-body antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
          <ScrollProgress />
          <Toaster richColors closeButton position='top-center' />
        </ThemeProvider>
      </body>
    </html>
  );
}
