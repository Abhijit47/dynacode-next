import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function CampaignTypes() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>Campaign Types We Manage</h3>
          <p>
            Expert management across Google Ads, Facebook Ads, Instagram Ads,
            and other platforms for maximum reach and ROI
          </p>
        </hgroup>

        <CampaignTypesCard />
      </div>
    </section>
  );
}

const campaignTypes = [
  {
    id: crypto.randomUUID(),
    title: 'Google Search Campaigns',
    description:
      'Text ads that appear when people search for your products or services',
    stat: '400%+ ROI',
  },
  {
    id: crypto.randomUUID(),
    title: 'Google Display Campaigns',
    description: 'Visual ads that reach people on websites and apps they visit',
    stat: '250%+ ROI',
  },
  {
    id: crypto.randomUUID(),
    title: 'Facebook & Instagram Campaigns',
    description: 'Social media ads that reach 3.2B+ monthly active users',
    stat: '425%+ ROI',
  },
  {
    id: crypto.randomUUID(),
    title: 'Youtube Video Campaigns',
    description: 'Engaging video ads on YouTube and across the web',
    stat: '300%+ ROI',
  },
  {
    id: crypto.randomUUID(),
    title: 'Google Shopping Campaigns',
    description: 'Product ads that show your inventory with images and prices',
    stat: '500%+ ROI',
  },
];
const CampaignTypesCard = () => {
  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 gap-6'}>
      {campaignTypes.map((campaign) => (
        <div className='p-2 border-[0.5px] rounded-xs' key={campaign.id}>
          <Card
            className={cn(
              'border-[1.5px] bg-linear-to-br rounded-xs shadow-none h-full',
              // light mode
              'from-background to-muted/60 shadow-[2px_0_8px_rgba(0,0,0,0.15)]',
              // dark mode
              'dark:from-background dark:via-foreground/5 dark:to-background dark:shadow-inner',
            )}>
            <CardHeader>
              <CardTitle>
                <h4>{campaign.title}</h4>
              </CardTitle>
              <CardDescription>
                <p>{campaign.description}</p>
              </CardDescription>
              <CardAction>
                <Badge>
                  <strong>{campaign.stat}</strong>
                </Badge>
              </CardAction>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
};
