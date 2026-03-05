import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function CampaignOutcomes() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Campaign Types We Execute
          </h3>
          <p>
            Comprehensive marketing automation solutions to streamline your
            marketing and sales processes
          </p>
        </hgroup>

        <CampaignOutcomesCard />
      </div>
    </section>
  );
}

const campaignOutcomes = [
  {
    id: crypto.randomUUID(),
    title: 'Product Launches',
    description: 'Generate buzz for new products',
    statValue: '40%',
    statText: 'Increase in Awareness',
  },
  {
    id: crypto.randomUUID(),
    title: 'Brand Awareness',
    description: 'Build recognition and recall',
    statValue: '60%',
    statText: 'Reach Improvement',
  },
  {
    id: crypto.randomUUID(),
    title: 'Event Promotion',
    description: 'Drive attendance and engagement',
    statValue: '35%',
    statText: 'More Registrations',
  },
  {
    id: crypto.randomUUID(),
    title: 'App Downloads',
    description: 'Increase mobile app installations',
    statValue: '50%',
    statText: 'Higher Install Rates',
  },
  {
    id: crypto.randomUUID(),
    title: 'Lead Generation',
    description: 'Capture qualified prospects',
    statValue: '25%',
    statText: 'More Leads',
  },
  {
    id: crypto.randomUUID(),
    title: 'Sales Campaigns',
    description: 'Drive direct purchase conversions',
    statValue: '30%',
    statText: 'Sales Increase',
  },
];
const CampaignOutcomesCard = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
      {campaignOutcomes.map((platform) => (
        <Card key={platform.id}>
          <CardHeader>
            <CardTitle>
              <h4>{platform.title}</h4>
            </CardTitle>
            <CardDescription>
              <p>{platform.description}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{platform.statText}:</p>
            <div className='text-3xl font-bold'>{platform.statValue}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
