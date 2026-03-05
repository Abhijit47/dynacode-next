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
  AppStore,
  CloudBackend,
  CloudSecurity,
  CrossPLatform,
  ECommerce,
  FullStack,
  MobileApp,
  OfflineArchitecture,
  PerimeterSecurity,
  // ThreatIntelligence,
  ThreatIntelligence1,
  VulnerabilityManagement,
  WebDev,
  Wordpress,
} from '@/assets/lotties';
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
  // {
  //   title: 'Product',
  //   links: [
  //     {
  //       title: 'Overview',
  //       href: '#',
  //     },
  //     {
  //       title: 'Features',
  //       href: '#',
  //     },
  //     {
  //       title: 'Solutions',
  //       href: '#',
  //     },
  //     {
  //       title: 'Sitemap',
  //       href: '/site-map',
  //     },
  //     {
  //       title: 'Pricing',
  //       href: '#',
  //     },
  //     {
  //       title: 'Releases',
  //       href: '#',
  //     },
  //   ],
  // },
  {
    title: 'Company',
    links: [
      {
        title: 'About us',
        href: '/about-us',
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
        href: '/contact-us',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Blogs',
        href: '/blogs',
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
        href: '/site-map',
      },
      {
        title: 'Support',
        href: '#',
      },
    ],
  },
  // {
  //   title: 'Social',
  //   links: [
  //     {
  //       title: 'Twitter',
  //       href: '#',
  //     },
  //     {
  //       title: 'LinkedIn',
  //       href: '#',
  //     },
  //     {
  //       title: 'Facebook',
  //       href: '#',
  //     },
  //     {
  //       title: 'GitHub',
  //       href: '#',
  //     },
  //     {
  //       title: 'AngelList',
  //       href: '#',
  //     },
  //     {
  //       title: 'Dribbble',
  //       href: '#',
  //     },
  //   ],
  // },
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
        href: '/contact-us',
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

export const webDevelopmentFeatures: WebDevelopmentFeatures = [
  {
    id: crypto.randomUUID(),
    category: 'Web Development',
    title: 'Web Development Services',
    details:
      "Welcome to DYNACODE, your premier web development partner. We specialize in creating stunning, responsive websites tailored to boost your online presence and drive business growth. Let's build your digital success together.",
    tutorialLink: '/contact-us',
    cover: WebDev,
  },
  {
    id: crypto.randomUUID(),
    category: 'E-commerce Platforms',
    title: 'E-commerce Website',
    details: `At Dynacode, we transform your e-commerce vision into a thriving online reality with cutting-edge solutions that propel digital success. Our adept team of professionals excels in crafting visually captivating and user-centric e-commerce websites that harmonize flawlessly with your brand identity and objectives. Whether you require a streamlined online store or a sophisticated e-commerce platform, we possess the expertise and ingenuity to bring your project to fruition. Partner with us to elevate your online presence with a bespoke e-commerce solution that distinguishes itself in the competitive digital arena.`,
    tutorialLink: '/contact-us',
    cover: ECommerce,
  },
  {
    id: crypto.randomUUID(),
    category: 'Content Management Systems',
    title: 'Wordpress Website',
    details: `At Dynacode, we excel in WordPress development, turning your online vision into a dynamic reality. Our proficient team of experts harnesses the robust capabilities of WordPress to craft visually stunning websites that seamlessly integrate with your brand and objectives. Whether you envision a sleek blog or a multifaceted e-commerce platform, we have the expertise and creativity to bring your project to life. Partner with us on your next WordPress endeavor, and let's illuminate your online presence with exceptional design and functionality.`,
    tutorialLink: '/contact-us',
    cover: Wordpress,
  },
  {
    id: crypto.randomUUID(),
    category: 'Full-Stack Development',
    title: 'Full-Stack Solutions',
    details: `Unlock the potential of full-stack technology with Dynacode. Our dedicated team of professionals excels in crafting innovative projects that leverage the power of full-stack development to enhance your digital presence. From seamless integrations to state-of-the-art solutions, we transform your vision into reality. Partner with us and elevate your project to new heights with our expertise and creativity in full-stack development.`,
    tutorialLink: '/contact-us',
    cover: FullStack,
  },
];

export const webDevelopmentServices = [
  {
    id: crypto.randomUUID(),
    title: 'E-COMMERCE WEBSITES',
    description: 'High-converting stores with secure checkout and integrations',
    items: [
      'Shopify/WooCommerce',
      'Payment Gateways',
      'Inventory & Orders',
      'Analytics & SEO',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'CUSTOM WORDPRESS',
    description: 'Custom themes, plugins, and CMS setups for flexibility',
    items: [
      'Theme Development',
      'Plugin Development',
      'Headless WP',
      'Speed Optimization',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'FULL-STACK APPS',
    description: 'MERN/Next.js apps with robust APIs and SSR/SSG',
    items: ['Next.js/React', 'Node.js/Express', 'REST/GraphQL', 'Auth & RBAC'],
  },
  {
    id: crypto.randomUUID(),
    title: 'PERFORMANCE & SEO',
    description: 'Improve Core Web Vitals and search visibility',
    items: [
      'CWV Optimization',
      'Lazy Loading',
      'Image Optimization',
      'Semantic HTML',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'MAINTENANCE & SUPPORT',
    description: 'Ongoing updates, backups, and security hardening',
    items: [
      'Uptime Monitoring',
      'Backup & Restore',
      'Patching',
      'Issue Resolution',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'INTEGRATIONS & APIS',
    description: 'Connect your site with CRMs, ERPs, and third-party tools',
    items: [
      'REST/GraphQL',
      'Webhook Flows',
      'OAuth2/SAML',
      'Custom Connectors',
    ],
  },
];

export const mobileDevelopmentFeatures: MobileDevelopmentFeatures = [
  {
    id: crypto.randomUUID(),
    category: 'Transform your ideas into powerful mobile applications!',
    title: 'Mobile apps development',
    details:
      'Unlock the potential of mobile technology with Dynacode. Our dedicated team of mobile developers excels in creating high-performance iOS and Android applications that engage users and drive business growth. From native development to cross-platform solutions, we transform your vision into seamless mobile experiences. Partner with us and elevate your project to new heights with our expertise and creativity in mobile development.',
    tutorialLink: '#',
    cover: MobileApp,
  },
  {
    id: crypto.randomUUID(),
    category: 'Cross-Platform Solutions',
    title: 'Reach more users with a single codebase',
    details:
      'Leverage powerful frameworks like React Native and Flutter to deploy high-quality apps on both iOS and Android simultaneously. Our cross-platform approach reduces development time and costs while maintaining native-level performance and a consistent look and feel across all devices.',
    tutorialLink: '#',
    cover: CrossPLatform,
  },
  {
    id: crypto.randomUUID(),
    category: 'Cloud Backend Integration',
    title: 'Scalable infrastructure for mobile growth',
    details:
      'Power your mobile apps with robust cloud architectures. We integrate secure RESTful APIs, real-time databases like Firebase, and serverless functions to ensure your app handles user growth effortlessly while keeping sensitive data protected with industry-standard encryption.',
    tutorialLink: '#',
    cover: CloudBackend,
  },
  {
    id: crypto.randomUUID(),
    category: 'Offline-First Architecture',
    title: 'Seamless functionality without connectivity',
    details:
      'Ensure your users stay productive even in dead zones. We implement local data persistence and smart synchronization logic that allows your app to function flawlessly offline and automatically sync changes once a network connection is re-established.',
    tutorialLink: '#',
    cover: OfflineArchitecture,
  },
  {
    id: crypto.randomUUID(),
    category: 'App Store Optimization (ASO)',
    title: 'Maximize visibility and organic downloads',
    details:
      'Launch with a competitive edge using our ASO strategies. Beyond development, we optimize your App Store and Play Store presence through keyword research, compelling descriptions, and high-conversion screenshots to ensure your product stands out in a crowded marketplace.',
    tutorialLink: '#',
    cover: AppStore,
  },
];

export const mobileDevelopmentServices = [
  {
    id: crypto.randomUUID(),
    title: 'IOS & ANDROID APPS',
    description: 'Native-feel apps with consistent performance',
    items: [
      'React Native',
      'Native Modules',
      'Offline-first',
      'Push Notifications',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'APP UI/UX',
    description: 'Mobile design systems and interaction patterns',
    items: ['Design Systems', 'Animations', 'Accessibility', 'Theming'],
  },
  {
    id: crypto.randomUUID(),
    title: 'APIS & BACKENDS',
    description: 'Secure, scalable backends for your mobile apps',
    items: ['Node.js/NestJS', 'Auth & Payments', 'File/Media', 'Analytics'],
  },
  {
    id: crypto.randomUUID(),
    title: 'TESTING & RELEASE',
    description: 'Reliable release pipelines and app health',
    items: [
      'Unit/E2E Tests',
      'Crash Reporting',
      'App Store/Play Console',
      'OTA Updates',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'INTEGRATIONS',
    description: 'Connect to payments, maps, social, and more',
    items: [
      'Stripe/PayPal',
      'Maps & Location',
      'Camera & Media',
      'Social SDKs',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'MAINTENANCE',
    description: 'Keep apps up-to-date and optimized over time',
    items: [
      'Performance Tuning',
      'Dependency Updates',
      'Security Patches',
      'Feature Roadmap',
    ],
  },
];

export const iotFeatures: IOTDevelopmentFeatures = [
  {
    id: crypto.randomUUID(),
    category: 'Hardware Integration',
    title: 'Bridge the gap between digital and physical',
    details:
      'Seamlessly connect sensors, actuators, and microcontrollers like Raspberry Pi and ESP32 to your software ecosystem. We build custom firmware that ensures reliable data collection and hardware control in any environment.',
    tutorialLink: '#',
    cover: MobileApp,
  },
  {
    id: crypto.randomUUID(),
    category: 'Real-time Telemetry',
    title: 'Monitor your assets in high definition',
    details:
      'Track device health and environmental data instantly using MQTT and WebSockets. Our systems provide low-latency updates and visual dashboards, allowing you to react to hardware changes the second they happen.',
    tutorialLink: '#',
    cover: MobileApp,
  },
  {
    id: crypto.randomUUID(),
    category: 'Edge Intelligence',
    title: 'Process data where it happens',
    details:
      'Reduce latency and bandwidth costs by implementing Edge Computing. We deploy TinyML and local logic to your IoT devices, enabling them to make critical decisions on-site without relying on a constant cloud connection.',
    tutorialLink: '#',
    cover: MobileApp,
  },
  {
    id: crypto.randomUUID(),
    category: 'OTA Updates & Security',
    title: 'Future-proof your hardware remotely',
    details:
      'Maintain your fleet with secure Over-The-Air (OTA) updates and end-to-end encryption. Push new features, security patches, and bug fixes to thousands of devices simultaneously without needing physical access.',
    tutorialLink: '#',
    cover: MobileApp,
  },
];

export const iotServices = [
  {
    id: crypto.randomUUID(),
    title: 'EMBEDDED SYSTEMS',
    description: 'Custom firmware and hardware integration for smart devices',
    items: [
      'Raspberry Pi / Arduino',
      'ESP32 & STM32 Firmware',
      'C++ / MicroPython',
      'Sensor Integration',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'CONNECTIVITY & PROTOCOLS',
    description: 'Reliable communication layers for distributed networks',
    items: [
      'MQTT & WebSockets',
      'LoRaWAN / Zigbee',
      'BLE (Bluetooth Low Energy)',
      'Cellular IoT (NB-IoT)',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'IOT CLOUD PLATFORMS',
    description: 'Centralized device management and data aggregation',
    items: [
      'AWS IoT Core',
      'Azure IoT Hub',
      'Google Cloud IoT',
      'ThingsBoard Dashboards',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'EDGE COMPUTING',
    description: 'Processing data locally for ultra-low latency actions',
    items: [
      'Edge Impulse (TinyML)',
      'Local Data Filtering',
      'Real-time Analytics',
      'Greengrass / K3s',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'SMART DASHBOARDS',
    description: 'Visual control centers for monitoring and automation',
    items: [
      'Real-time Telemetry',
      'Remote Device Control',
      'Grafana Visualization',
      'Custom Admin Panels',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'IOT SECURITY',
    description: 'End-to-end protection for connected hardware',
    items: [
      'Secure Boot & OTA',
      'End-to-End Encryption',
      'Identity Management',
      'Vulnerability Patching',
    ],
  },
];

export const designFeatures: UIUXDesignFeatures = [
  {
    id: crypto.randomUUID(),
    category: 'user experiences with design expertise!',
    title: 'UI/UX Design & Wireframing',
    details: `Unlock the potential of exceptional user interface and user experience design with Dynacode. Our dedicated team of UX/UI professionals excels in creating intuitive wireframes, user-centered designs, and engaging digital experiences that drive conversions. From comprehensive user research to interactive prototypes, we transform your vision into compelling digital solutions. Partner with us and elevate your project to new heights with our expertise and creativity in UI/UX design and wireframing.`,
    tutorialLink: '#',
    cover: MobileApp,
  },
  {
    id: crypto.randomUUID(),
    category: 'Design Systems',
    title: 'Scale your brand with consistency',
    details:
      'Establish a single source of truth with reusable UI components, typography scales, and design tokens. Our design systems ensure visual harmony across platforms while accelerating development through standardized documentation and asset libraries.',
    tutorialLink: '#',
    cover: MobileApp,
  },
  {
    id: crypto.randomUUID(),
    category: 'Motion Design',
    title: 'Bring interfaces to life with motion',
    details:
      'Enhance usability and delight users with functional micro-interactions and smooth transitions. We use motion to guide user focus, provide feedback, and create a sophisticated feel that sets your digital product apart from the competition.',
    tutorialLink: '#',
    cover: MobileApp,
  },
  {
    id: crypto.randomUUID(),
    category: 'Mobile-First Design',
    title: 'Optimized experiences for every screen',
    details:
      'Prioritize mobile users without sacrificing desktop functionality. We utilize responsive grids and touch-friendly patterns to ensure your application remains performant and intuitive, regardless of the device or screen size being used.',
    tutorialLink: '#',
    cover: MobileApp,
  },
];

export const designServices = [
  {
    id: crypto.randomUUID(),
    title: 'UX RESEARCH',
    description:
      'User interviews, personas, and journey maps to align with real needs',
    items: [
      'User Interviews',
      'Personas',
      'Journey Mapping',
      'Heuristic Review',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'WIREFRAMING',
    description:
      'Low/high-fidelity wireframes that set clear structure and flows',
    items: [
      'Low/High Fidelity',
      'User Flows',
      'IA & Sitemap',
      'Content Strategy',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'UI DESIGN',
    description: 'Pixel-perfect visual design with brand-consistent components',
    items: [
      'Design Systems',
      'Component Libraries',
      'Responsive Design',
      'Design Tokens',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'PROTOTYPING',
    description:
      'Interactive prototypes for stakeholder buy-in and usability tests',
    items: [
      'Clickable Prototypes',
      'Micro-interactions',
      'Animation Specs',
      'Dev Handoffs',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'USABILITY TESTING',
    description:
      'Validate design decisions and iterate with real user feedback',
    items: ['Test Plans', 'Moderated/Unmoderated', 'Reporting', 'Insights'],
  },
  {
    id: crypto.randomUUID(),
    title: 'ACCESSIBILITY (A11Y)',
    description: 'Inclusive design meeting WCAG standards across devices',
    items: [
      'WCAG 2.1',
      'Keyboard/Screen Reader',
      'Color Contrast',
      'Docs & Training',
    ],
  },
];

export const desktopFeatures: DesktopDevelopmentFeatures = [
  {
    id: crypto.randomUUID(),
    category: 'Cross-Platform Desktop Apps',
    title: 'Native power with web flexibility',
    details:
      'Build powerful, high-performance desktop applications for Windows, macOS, and Linux using Electron and Tauri. We combine the speed of web development with native system access, allowing your software to interact directly with hardware, file systems, and OS-level notifications.',
    tutorialLink: '#',
    cover: MobileApp,
  },
  {
    id: crypto.randomUUID(),
    category: 'Lightweight Executables',
    title: 'Optimized performance with Tauri',
    details:
      'Minimize your application’s footprint without sacrificing functionality. By utilizing Tauri, we create incredibly small and secure binaries that leverage the system’s native webview, resulting in faster startup times and lower memory consumption compared to traditional frameworks.',
    tutorialLink: '#',
    cover: MobileApp,
  },
  {
    id: crypto.randomUUID(),
    category: 'System Integration & Security',
    title: 'Deep OS-level capabilities',
    details:
      'Go beyond the browser with advanced features like global hotkeys, tray icons, and background processes. We implement robust security protocols to ensure your desktop software remains isolated from vulnerabilities while maintaining full access to necessary local APIs and system resources.',
    tutorialLink: '#',
    cover: MobileApp,
  },
  {
    id: crypto.randomUUID(),
    category: 'Auto-Updates & Distribution',
    title: 'Seamless software maintenance',
    details:
      'Keep your users on the latest version without manual intervention. We set up automated build pipelines and secure update servers that push patches and new features directly to your users, ensuring a consistent and bug-free experience across all desktop installations.',
    tutorialLink: '#',
    cover: MobileApp,
  },
];

export const desktopServices = [
  {
    id: crypto.randomUUID(),
    title: 'CROSS-PLATFORM DESKTOP',
    description: 'High-performance apps for Windows, macOS, and Linux',
    items: [
      'Electron Development',
      'Tauri Apps',
      'NW.js',
      'Native Installers (MSI/DMG)',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'SYSTEM INTEGRATION',
    description: 'Deep OS-level access and hardware communication',
    items: [
      'File System APIs',
      'Tray Notifications',
      'Global Hotkeys',
      'Native Shell Access',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'LIGHTWEIGHT NATIVE APPS',
    description: 'Resource-efficient binaries with small footprints',
    items: [
      'Rust & Tauri Backend',
      'C++ / Qt Integration',
      'Low Memory Usage',
      'Fast Startup Times',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'SECURITY & SANDBOXING',
    description: 'Robust protection for desktop environments',
    items: [
      'Code Signing',
      'Process Isolation',
      'Encrypted Local Storage',
      'Secure Auto-updates',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'DESKTOP UI/UX',
    description: 'Optimized interfaces for large screen productivity',
    items: [
      'Multi-window Support',
      'Native Context Menus',
      'Drag-and-Drop Flows',
      'Dark Mode/Theming',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'DEPLOYMENT & CI/CD',
    description: 'Automated distribution and update pipelines',
    items: [
      'GitHub Action Builders',
      'App Store/MS Store',
      'Differential Updates',
      'Crash Reporting',
    ],
  },
];

export const aiDevelopmentFeatures: AIDevelopmentFeatures = [
  {
    id: crypto.randomUUID(),
    category: 'Generative AI & LLMs',
    title: 'Harness the power of Large Language Models',
    details:
      'Integrate advanced AI capabilities using OpenAI’s GPT-4, Anthropic’s Claude, or open-source models like Llama. We build custom RAG (Retrieval-Augmented Generation) pipelines that allow AI to interact securely with your private business data for pinpoint accuracy.',
    tutorialLink: '#',
    cover: MobileApp,
  },
  {
    id: crypto.randomUUID(),
    category: 'Computer Vision',
    title: 'Extract insights from visual data',
    details:
      'Automate visual inspections, object detection, and facial recognition using PyTorch and TensorFlow. Our vision systems enable real-time image and video analysis, helping businesses automate quality control and enhance security monitoring.',
    tutorialLink: '#',
    cover: MobileApp,
  },
  {
    id: crypto.randomUUID(),
    category: 'Predictive Analytics',
    title: 'Turn historical data into future foresight',
    details:
      'Build machine learning models that forecast market trends, user behavior, and operational risks. By leveraging Scikit-learn and advanced regression techniques, we help you transition from reactive decision-making to proactive, data-driven strategies.',
    tutorialLink: '#',
    cover: MobileApp,
  },
  {
    id: crypto.randomUUID(),
    category: 'AI Agents & Automation',
    title: 'Autonomous workflows for complex tasks',
    details:
      'Deploy intelligent agents using LangChain or AutoGPT to handle multi-step processes without human intervention. These agents can research, summarize, and execute tasks across different software platforms, drastically increasing your team’s operational efficiency.',
    tutorialLink: '#',
    cover: MobileApp,
  },
];

export const aiDevelopmentServices = [
  {
    id: crypto.randomUUID(),
    title: 'GENERATIVE AI & LLMS',
    description: 'Custom language models and intelligent text generation',
    items: [
      'OpenAI GPT-4 / Claude 3',
      'RAG (Retrieval-Augmented Generation)',
      'Fine-tuning Open Source Models',
      'Prompt Engineering',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'COMPUTER VISION',
    description: 'Visual recognition and image processing solutions',
    items: [
      'Object Detection (YOLO)',
      'Facial Recognition',
      'OCR & Document Extraction',
      'Image Segmentation',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'NLP & SEMANTIC SEARCH',
    description: 'Understanding and processing human language',
    items: [
      'Sentiment Analysis',
      'Vector Databases (Pinecone/Weaviate)',
      'Multi-lingual Translation',
      'Chatbots & Virtual Assistants',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'PREDICTIVE ANALYTICS',
    description: 'Data-driven forecasting and behavior modeling',
    items: [
      'Time-series Forecasting',
      'Customer Churn Prediction',
      'Fraud Detection',
      'Scikit-learn / TensorFlow',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'AI AGENTS & AUTONOMY',
    description: 'Autonomous task execution and workflow agents',
    items: [
      'LangChain Workflows',
      'AutoGPT Integrations',
      'Multi-agent Systems',
      'Tool-calling & API Agents',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'MLOPS & DEPLOYMENT',
    description: 'Scaling and monitoring AI models in production',
    items: [
      'Model Quantization',
      'GPU Cloud Scaling (AWS/Lambda)',
      'Continuous Monitoring',
      'Model Governance',
    ],
  },
];

export const cyberSecurityfeatures: CyberSecurityFeatures = [
  {
    id: crypto.randomUUID(),
    category: 'Threat Intelligence',
    title: 'Proactive 24/7 monitoring and response',
    details:
      'Stay ahead of sophisticated attackers with AI-driven threat hunting and real-time security operations. We monitor your entire digital perimeter to detect anomalies and neutralize potential breaches before they can impact your core business operations.',
    tutorialLink: '#',
    cover: ThreatIntelligence1,
  },
  {
    id: crypto.randomUUID(),
    category: 'Zero Trust Architecture',
    title: 'Modernize your perimeter security',
    details:
      'Eliminate implicit trust with a robust Zero Trust framework tailored for 2026’s remote and hybrid work environments. We implement strict identity verification and micro-segmentation to ensure that only authorized users access sensitive data.',
    tutorialLink: '#',
    cover: PerimeterSecurity,
  },
  {
    id: crypto.randomUUID(),
    category: 'Vulnerability Management',
    title: 'Identify and patch critical weak points',
    details:
      'Our automated VAPT services conduct continuous penetration testing and scanning of your web apps and infrastructure. We prioritize risks based on exploitability and business impact, providing clear remediation paths to harden your systems.',
    tutorialLink: '#',
    cover: VulnerabilityManagement,
  },
  {
    id: crypto.randomUUID(),
    category: 'Cloud & API Security',
    title: 'Protect your modern application stack',
    details:
      'Secure your cloud-native workloads and microservices against the latest OWASP threats. We implement advanced API gateways, secrets management, and container security to ensure your data remains encrypted and protected across all cloud providers.',
    tutorialLink: '#',
    cover: CloudSecurity,
  },
];
