import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';

export default function InfluencerTiers() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Influencer Tiers We Work With
          </h3>
          <p>
            Comprehensive marketing automation solutions to streamline your
            marketing and sales processes
          </p>
        </hgroup>

        <InfluencerTiersCard />
      </div>
    </section>
  );
}

const influencerTiers = [
  {
    id: crypto.randomUUID(),
    title: 'Nano-Influencers',
    followers: '1K-10K',
    avgEngagement: '8-10%',
    strength: 'High trust & authenticity',
    bestFor: 'Niche products, local businesses',
  },
  {
    id: crypto.randomUUID(),
    title: 'Micro-Influencers',
    followers: '10K-100K',
    avgEngagement: '5-8%',
    strength: 'Strong community connection',
    bestFor: 'Targeted campaigns, emerging brands',
  },
  {
    id: crypto.randomUUID(),
    title: 'Mid-Tier Influencers',
    followers: '100K-1M',
    avgEngagement: '3-5%',
    strength: 'Good reach & engagement balance',
    bestFor: 'Brand awareness, product launches',
  },
  {
    id: crypto.randomUUID(),
    title: 'Macro-Influencers',
    followers: '1M-10M',
    avgEngagement: '2-3%',
    strength: 'Massive reach potential',
    bestFor: 'Large campaigns, mainstream brands',
  },
  {
    id: crypto.randomUUID(),
    title: 'Celebrity Influencers',
    followers: '10M+',
    avgEngagement: '1-2%',
    strength: 'Maximum brand exposure',
    bestFor: 'Major brand campaigns, viral potential',
  },
];
const InfluencerTiersCard = () => {
  return (
    <div className={'grid grid-cols-1 gap-4'}>
      {influencerTiers.map((tier) => (
        <Card key={tier.id}>
          <Item>
            <ItemMedia variant='default'>{tier.title}</ItemMedia>
            <ItemContent>
              <ItemTitle>Followers</ItemTitle>
              <ItemDescription>{tier.followers}</ItemDescription>
              <ItemTitle>Avg. Engagement</ItemTitle>
              <ItemDescription>{tier.avgEngagement}</ItemDescription>
              <ItemTitle>Strength</ItemTitle>
              <ItemDescription>{tier.strength}</ItemDescription>
              <ItemTitle>Best For</ItemTitle>
              <ItemDescription>{tier.bestFor}</ItemDescription>
            </ItemContent>

            <ItemActions>
              <Button>Action</Button>
            </ItemActions>
          </Item>
        </Card>
      ))}
    </div>
  );
};
