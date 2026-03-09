import { IBM_Plex_Mono, Lato, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const lato = Lato({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--display-family',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--body-family',
});

export const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
});

export const flexingBold = localFont({
  src: './fonts/Flexing-Bold.woff2',
  display: 'swap',
  variable: '--flexing-bold',
});

export const markova = localFont({
  src: './fonts/markova.woff2',
  display: 'swap',
  variable: '--markova',
});
