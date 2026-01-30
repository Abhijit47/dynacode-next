import {
  CableIcon,
  Code2Icon,
  ContrastIcon,
  MonitorSmartphoneIcon,
  SquareDashedMousePointerIcon,
  ZapIcon,
} from 'lucide-react';
import { Route } from 'next';

export const footerSections: {
  title: string;
  links: { title: string; href: Route }[];
}[] = [
  {
    title: 'Product',
    links: [
      {
        title: 'Overview',
        href: '#',
      },
      {
        title: 'Features',
        href: '#',
      },
      {
        title: 'Solutions',
        href: '#',
      },
      {
        title: 'Tutorials',
        href: '#',
      },
      {
        title: 'Pricing',
        href: '#',
      },
      {
        title: 'Releases',
        href: '#',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        title: 'About us',
        href: '#',
      },
      {
        title: 'Careers',
        href: '#',
      },
      {
        title: 'Press',
        href: '#',
      },
      {
        title: 'News',
        href: '#',
      },
      {
        title: 'Media kit',
        href: '#',
      },
      {
        title: 'Contact',
        href: '#',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Blog',
        href: '#',
      },
      {
        title: 'Newsletter',
        href: '#',
      },
      {
        title: 'Events',
        href: '#',
      },
      {
        title: 'Help centre',
        href: '#',
      },
      {
        title: 'Tutorials',
        href: '#',
      },
      {
        title: 'Support',
        href: '#',
      },
    ],
  },
  {
    title: 'Social',
    links: [
      {
        title: 'Twitter',
        href: '#',
      },
      {
        title: 'LinkedIn',
        href: '#',
      },
      {
        title: 'Facebook',
        href: '#',
      },
      {
        title: 'GitHub',
        href: '#',
      },
      {
        title: 'AngelList',
        href: '#',
      },
      {
        title: 'Dribbble',
        href: '#',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        title: 'Terms',
        href: '#',
      },
      {
        title: 'Privacy',
        href: '#',
      },
      {
        title: 'Cookies',
        href: '#',
      },
      {
        title: 'Licenses',
        href: '#',
      },
      {
        title: 'Settings',
        href: '#',
      },
      {
        title: 'Contact',
        href: '#',
      },
    ],
  },
];

export const services = [
  {
    id: crypto.randomUUID(),
    title: 'Blazing Fast Performance',
    description:
      'Optimized for speed with minimal loading times and instant interactions, ensuring a smooth experience across devices.',
    icon: ZapIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Fully Customizable',
    description:
      'Tailor every component to match your brand or workflow — with built-in support for themes, layouts, and configurations.',
    icon: SquareDashedMousePointerIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Developer-Friendly',
    description:
      'Built with clean, modern code and best practices in mind, making it easy to integrate, extend, and scale.',
    icon: Code2Icon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Responsive by Default',
    description:
      'Every component is designed to look great on all screen sizes — no extra work needed to make things mobile-friendly.',
    icon: MonitorSmartphoneIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Accessible for Everyone',
    description:
      'Built with accessibility best practices in mind to ensure an inclusive experience for all users, regardless of ability.',
    icon: ContrastIcon,
  },
  {
    id: crypto.randomUUID(),
    title: 'Seamless Integration',
    description:
      "Easily connect with your favorite tools, APIs, and services — whether it's authentication, databases, or third-party libraries.",
    icon: CableIcon,
  },
];
