import { Icons } from '@/components/card-6';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SMMServices() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Social Media Marketing (SMM)
          </h3>
          <p>
            Expand your reach and build engaged communities with strategic
            content, paid social, and creator partnerships.
          </p>
        </hgroup>

        <SocialMediaServices />
      </div>
    </section>
  );
}

const socialMediaServices = [
  {
    id: crypto.randomUUID(),
    title: 'CONTENT STRATEGY',
    description:
      'Platform-specific content planning that aligns with brand voice and campaign goals.',
    items: [
      'Content Calendar',
      'Brand Tone & Messaging',
      'Creative Briefs',
      'Trends & Hooks',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'ACCOUNT MANAGEMENT',
    description:
      'Daily publishing, moderation, and profile optimization across key channels.',
    items: [
      'Post Scheduling',
      'Profile Optimization',
      'Community Replies',
      'Hashtag Strategy',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'PAID SOCIAL ADS',
    description:
      'Full-funnel social campaigns for reach, engagement, leads, and sales.',
    items: [
      'Campaign Setup',
      'Audience Targeting',
      'A/B Creative Tests',
      'ROAS Optimization',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'COMMUNITY & INFLUENCERS',
    description:
      'Grow brand advocacy with community building and creator partnerships.',
    items: [
      'Community Building',
      'Influencer Sourcing',
      'UGC Collaborations',
      'Contracting & Briefing',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'ANALYTICS & REPORTING',
    description:
      'Measure outcomes that matter: engagement, traffic, CPA, and LTV.',
    items: [
      'KPI Dashboards',
      'Attribution Setup',
      'Insights & Learnings',
      'Monthly Reporting',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'CREATIVE PRODUCTION',
    description:
      'Thumb-stopping creatives tailored for each platform and objective.',
    items: [
      'Short-form Video',
      'Motion Graphics',
      'Ad Variations',
      'Copy & Hooks',
    ],
  },
];

const SocialMediaServices = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {socialMediaServices.map((service) => (
        <Card
          key={service.id}
          className='relative rounded-none shadow-none border-double'>
          <Icons />
          <CardHeader>
            <CardTitle>
              <h4>{service.title}</h4>
            </CardTitle>
            <CardDescription>
              <p>{service.description}</p>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ul className='space-y-2'>
              {service.items.map((item, index) => (
                <li key={index} className='list-disc list-inside'>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
