import {
  BookCheck,
  CableIcon,
  ChartPie,
  Code2Icon,
  ContrastIcon,
  FolderSync,
  Goal,
  LucideIcon,
  MonitorSmartphoneIcon,
  SquareDashedMousePointerIcon,
  Users,
  Zap,
  ZapIcon,
} from 'lucide-react';
import { Route } from 'next';

import {
  Icon,
  IconBadgeAd,
  IconChartScatter,
  IconDeviceDesktopCog,
  IconDeviceMobile,
  IconDevicesPc,
  IconFileDescription,
  IconMailFast,
  IconPalette,
  IconRoute,
  IconRoute2,
  IconSeo,
  IconSettingsAi,
  IconShieldCheck,
  IconSparkles2,
  IconWorldWww,
} from '@tabler/icons-react';

type Navlinks = {
  id: string;
  title: string;
  href: Route;
}[];

export const navLinks: Navlinks = [
  {
    id: crypto.randomUUID(),
    title: 'Home',
    href: '/',
  },
  {
    id: crypto.randomUUID(),
    title: 'Blogs',
    href: '/blogs',
  },
  {
    id: crypto.randomUUID(),
    title: 'About',
    href: '/about-us',
  },
  {
    id: crypto.randomUUID(),
    title: 'Contact Us',
    href: '/contact-us',
  },
];

type Development = {
  id: string;
  title: string;
  description: string;
  icon: Icon | LucideIcon;
  href: Route;
}[];
export const developments: Development = [
  {
    id: crypto.randomUUID(),
    title: 'Web Development',
    icon: IconWorldWww,
    description: 'Building responsive and dynamic websites and applications.',
    href: '/services/developments/web-development',
  },
  {
    id: crypto.randomUUID(),
    title: 'UI/UX Design and Wireframing',
    icon: IconPalette,
    description: 'User interface and experience design for optimal usability.',
    href: '/services/developments/ui-ux-design',
  },
  {
    id: crypto.randomUUID(),
    title: 'Mobile Application',
    icon: IconDeviceMobile,
    description: 'Creating mobile applications for iOS and Android platforms.',
    href: '/services/developments/mobile-application',
  },
  {
    id: crypto.randomUUID(),
    title: 'Desktop Application',
    icon: IconDeviceDesktopCog,
    description:
      'Developing software applications for desktop operating systems.',
    href: '/services/developments/desktop-application',
  },
  {
    id: crypto.randomUUID(),
    title: 'ioT Solutions',
    icon: IconDevicesPc,
    description: 'Integrating Internet of Things devices and systems.',
    href: '/services/developments/iot-solutions',
  },
  {
    id: crypto.randomUUID(),
    title: 'AI Development',
    icon: IconSettingsAi,
    description:
      'Building artificial intelligence and machine learning solutions.',
    href: '/services/developments/ai-development',
  },
];

type DigitalMarketing = {
  id: string;
  title: string;
  description: string;
  icon: Icon;
  href: Route;
}[];
export const digitalMarketings: DigitalMarketing = [
  {
    id: crypto.randomUUID(),
    title: 'Search Engine Optimization (SEO)',
    icon: IconSeo,
    description: 'Improving website visibility and ranking on search engines.',
    href: '/services/marketings/seo',
  },
  {
    id: crypto.randomUUID(),
    title: 'Content Marketing',
    icon: IconFileDescription,
    description:
      'Creating and distributing valuable content to attract and engage audiences.',
    href: '/services/marketings/content-marketing',
  },
  {
    id: crypto.randomUUID(),
    title: 'Ads Management',
    icon: IconBadgeAd,
    description: 'Managing and optimizing online advertising campaigns.',
    href: '/services/marketings/ads-management',
  },
  {
    id: crypto.randomUUID(),
    title: 'Marketing Automation',
    icon: IconRoute2,
    description: 'Using software to automate marketing tasks and workflows.',
    href: '/services/marketings/marketing-automation',
  },
  {
    id: crypto.randomUUID(),
    title: 'Email Marketing',
    icon: IconMailFast,
    description:
      'Sending targeted email campaigns to nurture leads and customers.',
    href: '/services/marketings/email-marketing',
  },
  {
    id: crypto.randomUUID(),
    title: 'Influencer Marketing',
    icon: IconRoute,
    description:
      'Collaborating with influencers to promote products and services.',
    href: '/services/marketings/influencer-marketing',
  },
];
type OtherServices = {
  id: string;
  title: string;
  description: string;
  icon: Icon;
  href: Route;
}[];
export const otherServices: OtherServices = [
  {
    id: crypto.randomUUID(),
    title: 'Data Analysis and Visualization',
    icon: IconChartScatter,
    description:
      'Analyzing data to extract insights and create visual representations.',
    href: '/services/others/data-analytics',
  },
  {
    id: crypto.randomUUID(),
    title: 'Cybersecurity Services',
    icon: IconShieldCheck,
    description: 'Protecting systems and data from cyber threats and attacks.',
    href: '/services/others/cyber-security-services',
  },
  {
    id: crypto.randomUUID(),
    title: 'AI Automation Solutions',
    icon: IconSparkles2,
    description:
      'Implementing AI-driven automation to streamline business processes.',
    href: '/services/others/ai-automations',
  },
  {
    id: crypto.randomUUID(),
    title: 'Logos',
    icon: IconPalette,
    description: 'Improving website visibility and ranking on search engines.',
    href: '/services/others/icons',
  },
];

type FooterSections = {
  title: string;
  links: { title: string; href: Route }[];
}[];
export const footerSections: FooterSections = [
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
        title: 'Sitemap',
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
        title: 'Sitemap',
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

export const stats = [
  {
    id: crypto.randomUUID(),
    title: 'Global styles + variables',
    description:
      'Super smart global color, typography and effects styles + variables!',
    stat: '900',
    prefix: '+',
  },
  {
    id: crypto.randomUUID(),
    title: 'Components and variants',
    description: "We've thought of everything you need so you don't have to.",
    stat: '10,000',
    prefix: '+',
  },
  {
    id: crypto.randomUUID(),
    title: 'Page design examples',
    description:
      'A whopping 420+ ready-to-go desktop and mobile page examples.',
    stat: '420',
    prefix: '+',
  },
  {
    id: crypto.randomUUID(),
    title: 'Icons and logos',
    description:
      "All the icons you'll need, including country flags and payments.",
    stat: '2,000',
    prefix: '+',
  },
];

export const whyChooseUs = [
  {
    icon: Goal,
    title: 'Identify Opportunities',
    description:
      'Easily uncover untapped areas to explore and expand your reach effortlessly and effectively.',
    image: '/assets/feat-1.webp',
  },
  {
    icon: BookCheck,
    title: 'Build Authority',
    description:
      'Create valuable content that resonates, inspires trust, and positions you as an expert.',
    image: '/assets/feat-2.webp',
  },
  {
    icon: ChartPie,
    title: 'Instant Insights',
    description:
      'Gain immediate, actionable insights with a quick glance, enabling fast decision-making.',
    image: '/assets/feat-3.webp',
  },
  {
    icon: Users,
    title: 'Engage with Your Audience',
    description:
      'Boost audience engagement with interactive features like polls, quizzes, and forms.',
    image: '/assets/feat-4.webp',
  },
  {
    icon: FolderSync,
    title: 'Automate Your Workflow',
    description:
      'Streamline your processes by automating repetitive tasks, saving time and reducing effort.',
    image: '/assets/feat-5.webp',
  },
  {
    icon: Zap,
    title: 'Accelerate Growth',
    description:
      'Supercharge your growth by implementing strategies that drive results quickly and efficiently.',
    image: '/assets/feat-6.webp',
  },
];

export const features = [
  {
    category: 'Marketing and Sales',
    title: 'Collect and enrich leads your way',
    details:
      'Take control over how and when to follow up with your leads. Store and reference leads in multiple tables and, from there, automatically send them personalized emails.',
    tutorialLink: '#',
    image: '/assets/feat-1.webp',
  },
  {
    category: 'Project Management',
    title: 'Streamline your workflows effortlessly',
    details:
      'Organize tasks, deadlines, and team collaboration in one place. Use customizable boards to manage projects efficiently and automate routine updates.',
    tutorialLink: '#',
    image: '/assets/feat-2.webp',
  },
  {
    category: 'Customer Support',
    title: 'Deliver seamless customer experiences',
    details:
      'Track and resolve customer queries faster with an integrated ticketing system. Set priorities, automate follow-ups, and enhance satisfaction with personalized responses.',
    tutorialLink: '#',
    image: '/assets/feat-3.webp',
  },
  {
    category: 'Team Collaboration',
    title: 'Stay connected with your team',
    details:
      'Simplify communication and align team efforts with shared boards and real-time updates. Enable transparent goal tracking and instant feedback for better results.',
    tutorialLink: '#',
    image: '/assets/feat-4.webp',
  },
  {
    category: 'Product Development',
    title: 'Accelerate innovation with ease',
    details:
      'Bring your product ideas to life by managing prototypes, feedback, and iterations in one place. Collaborate with your team to refine features and release with confidence.',
    tutorialLink: '#',
    image: '/assets/feat-5.webp',
  },
];

export const processes = [
  {
    title: 'Research',
    description:
      'Gather information and analyze requirements to understand the problem and define objectives.',
    completed: true,
  },
  {
    title: 'Planning',
    description:
      'Create a roadmap, define the scope, and outline the necessary steps to achieve the goal.',
    completed: true,
  },
  {
    title: 'Design',
    description:
      'Develop wireframes, mockups, and prototypes to visualize the structure and user experience.',
    completed: true,
  },
  {
    title: 'Development',
    description:
      'Write code, integrate features, and build the core functionality of the application.',
    completed: false,
  },
  {
    title: 'Testing',
    description:
      'Perform quality assurance, fix bugs, and optimize performance before release.',
    completed: false,
  },
  {
    title: 'Deployment',
    description:
      'Launch the project in a live environment and ensure smooth deployment.',
    completed: false,
  },
  {
    title: 'Maintenance',
    description:
      'Monitor performance, update features, and provide ongoing support and improvements.',
    completed: false,
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

export const projects = [
  {
    id: crypto.randomUUID(),
    title: 'Blazing Fast Performance',
    description:
      'Optimized for speed with minimal loading times and instant interactions, ensuring a smooth experience across devices.',
    imageUrl: '/projects/dddepth-028.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Fully Customizable',
    description:
      'Tailor every component to match your brand or workflow — with built-in support for themes, layouts, and configurations.',
    imageUrl: '/projects/dddepth-051.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Developer-Friendly',
    description:
      'Built with clean, modern code and best practices in mind, making it easy to integrate, extend, and scale.',
    imageUrl: '/projects/dddepth-248.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Responsive by Default',
    description:
      'Every component is designed to look great on all screen sizes — no extra work needed to make things mobile-friendly.',
    imageUrl: '/projects/dddepth-045.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Accessible for Everyone',
    description:
      'Built with accessibility best practices in mind to ensure an inclusive experience for all users, regardless of ability.',
    imageUrl: '/projects/dddepth-034.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Seamless Integration',
    description:
      'Easily connect with your favorite tools, APIs, and services — whether it&apos;s authentication, databases, or third-party libraries.',
    imageUrl: '/projects/dddepth-012.jpg',
  },
];

export const blogs = [
  {
    id: 'f050d161-177a-471e-9128-babd2e50c4df',
    title: 'Understanding React Server Components',
    description: '',
    imageUrl:
      'https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg',
    tags: ['React', 'Server Components', 'Performance'],
    createdAt: '2026-01-28T03:51:53.595Z',
    author: {
      name: 'Jane Doe',
      profileUrl: '',
    },
  },
  {
    id: '2975d200-c847-4bed-8df3-09b763ed890b',
    title: '10 Useful Shadcn UI Components You Should Know',
    description: '',
    imageUrl:
      'https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_1280.jpg',
    tags: ['Shadcn UI', 'Components', 'UI Design'],
    createdAt: '2026-01-28T03:51:53.595Z',
    author: {
      name: 'Jane Doe',
      profileUrl: '',
    },
  },
  {
    id: '57bef61c-973d-4d91-8302-4280dc5ee088',
    title: 'Building a Personal Blog with Next.js and Contentlayer',
    description: '',
    imageUrl:
      'https://cdn.pixabay.com/photo/2021/08/13/12/51/sea-6543041_1280.jpg',
    tags: ['Next.js', 'Contentlayer', 'Blogging'],
    createdAt: '2026-01-28T03:51:53.595Z',
    author: {
      name: 'Jane Doe',
      profileUrl: '',
    },
  },
  {
    id: '177bcf48-9090-46b9-8984-fbcc33dbcb90',
    title: 'The Complete Guide to TypeScript for Beginners',
    description: '',
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/06/22/20/24/dewdrops-2432391_1280.jpg',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    createdAt: '2026-01-28T03:51:53.595Z',
    author: {
      name: 'Jane Doe',
      profileUrl: '',
    },
  },
  {
    id: '713f8c58-01f2-45b4-82ba-d3b691caab9a',
    title: 'Optimizing Web Performance with Next.js',
    description: '',
    imageUrl:
      'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg',
    tags: ['Web Performance', 'Next.js', 'Optimization'],
    createdAt: '2026-01-28T03:51:53.595Z',
    author: {
      name: 'Jane Doe',
      profileUrl: '',
    },
  },
  {
    id: '3d8720bf-6141-42ab-8186-3b7ea8a222c6',
    title: 'Deploying Full-Stack Apps on Vercel with Supabase',
    description: '',
    imageUrl:
      'https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_1280.jpg',
    tags: ['Vercel', 'Supabase', 'Deployment'],
    createdAt: '2026-01-28T03:51:53.595Z',
    author: {
      name: 'Jane Doe',
      profileUrl: '',
    },
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    company: 'TechCorp',
    testimonial:
      'This product has completely transformed the way we work. The efficiency and ease of use are unmatched!',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Sophia Lee',
    designation: 'Data Analyst',
    company: 'InsightTech',
    testimonial:
      'This tool has saved me hours of work! The analytics and reporting features are incredibly powerful.',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    designation: 'UX Designer',
    company: 'DesignPro',
    testimonial:
      'An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry.',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'Marketing Specialist',
    company: 'BrandBoost',
    testimonial:
      "I've seen a significant improvement in our team's productivity since we started using this service.",
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 5,
    name: 'Daniel Martinez',
    designation: 'Full-Stack Developer',
    company: 'CodeCrafters',
    testimonial:
      "The best investment we've made! The support team is also super responsive and helpful.",
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 6,
    name: 'Jane Smith',
    designation: 'Product Manager',
    company: 'InnovateX',
    testimonial:
      'The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
];
