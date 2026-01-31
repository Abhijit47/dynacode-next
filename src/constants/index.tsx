import {
  BookCheck,
  CableIcon,
  ChartPie,
  Code2Icon,
  ContrastIcon,
  FolderSync,
  Goal,
  MonitorSmartphoneIcon,
  SquareDashedMousePointerIcon,
  Users,
  Zap,
  ZapIcon,
} from 'lucide-react';
import { Route } from 'next';

import {
  Backpack,
  CakeSlice,
  Coffee,
  Grape,
  Hotel,
  IceCream,
  MapPin,
  Package,
  Pizza,
  Plane,
  Sandwich,
  Smile,
} from 'lucide-react';

export const navLinks: {
  id: string;
  title: string;
  href: Route;
}[] = [
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
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    title: 'Contact Us',
    href: '#',
  },
];

export const foods = [
  {
    title: 'Dessert',
    icon: CakeSlice,
    description: 'Sweet treats to satisfy your cravings.',
  },
  {
    title: 'Pizza',
    icon: Pizza,
    description: 'Delicious, cheesy slices of goodness.',
  },
  {
    title: 'Sandwich',
    icon: Sandwich,
    description: 'Classic and hearty fast food options.',
  },
  {
    title: 'Coffee',
    icon: Coffee,
    description: 'Your go-to boost of caffeine.',
  },
  {
    title: 'Ice Cream',
    icon: IceCream,
    description: 'Cold, creamy delights for any mood.',
  },
  {
    title: 'Fruit',
    icon: Grape,
    description: 'Fresh and healthy natural snacks.',
  },
];

export const travelMenuItems = [
  {
    title: 'Destinations',
    icon: MapPin,
    description: 'Discover amazing places to visit.',
  },
  {
    title: 'Hotels',
    icon: Hotel,
    description: 'Find the best stays for your trips.',
  },
  {
    title: 'Flights',
    icon: Plane,
    description: 'Get deals and tips on air travel.',
  },
  {
    title: 'Packing',
    icon: Package,
    description: 'Essential checklists for stress-free packing.',
  },
  {
    title: 'Activities',
    icon: Smile,
    description: 'Exciting things to do wherever you go.',
  },
  {
    title: 'Travel Tips',
    icon: Backpack,
    description: 'Make every trip smooth and memorable.',
  },
];

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
