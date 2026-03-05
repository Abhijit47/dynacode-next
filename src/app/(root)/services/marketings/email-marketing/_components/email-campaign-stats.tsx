import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function EmailCampaignStats() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>Campaign Types We Master</h3>
          <p>
            Comprehensive marketing automation solutions to streamline your
            marketing and sales processes
          </p>
        </hgroup>

        <EmailCampaignStatsCards />
      </div>
    </section>
  );
}

const emailCampaignStats = [
  {
    id: crypto.randomUUID(),
    title: 'Welcome Series',
    description: 'Onboard new subscribers effectively',
    statValue: '25%',
    statText: 'Higher Engagement',
  },
  {
    id: crypto.randomUUID(),
    title: 'Newsletter',
    description: 'Regular updates and valuable content',
    statValue: '18%',
    statText: 'Better Retention',
  },
  {
    id: crypto.randomUUID(),
    title: 'Promotional',
    description: 'Product launches and special offers',
    statValue: '32%',
    statText: 'Higher Sales',
  },
  {
    id: crypto.randomUUID(),
    title: 'Abandoned Cart',
    description: 'Recover lost sales automatically',
    statValue: '15%',
    statText: 'Cart Recovery',
  },
  {
    id: crypto.randomUUID(),
    title: 'Re-engagement',
    description: 'Win back inactive subscribers',
    statValue: '12%',
    statText: 'Reactivation Rate',
  },
  {
    id: crypto.randomUUID(),
    title: 'Post-purchase',
    description: 'Enhance customer experience',
    statValue: '28%',
    statText: 'Repeat Purchases',
  },
];
const EmailCampaignStatsCards = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {emailCampaignStats.map((campaign) => (
        <Card key={campaign.id}>
          <CardHeader>
            <CardTitle>
              <h4>{campaign.title}</h4>
            </CardTitle>
            <CardDescription>
              <p>{campaign.description}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className={'text-3xl font-semibold'}>{campaign.statValue}</p>
            <p>{campaign.statText}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
