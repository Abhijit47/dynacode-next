import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function EfficiencyStats() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Benefits of Marketing Automation
          </h3>
          <p>
            Comprehensive advertising management across Google, Facebook,
            Instagram, and other key platforms
          </p>
        </hgroup>

        <EfficiencyStatsCard />
      </div>
    </section>
  );
}

const efficiencyStats = [
  {
    id: crypto.randomUUID(),
    title: 'Increased Efficiency',
    description:
      'Automate repetitive tasks and focus your team on high-value activities.',
    icon: 'Zap',
  },
  {
    id: crypto.randomUUID(),
    title: 'Better Personalization',
    description:
      'Deliver the right message to the right person at the right time, automatically.',
    icon: 'Target',
  },
  {
    id: crypto.randomUUID(),
    title: 'Scalable Growth',
    description:
      'Scale your marketing efforts without proportionally increasing your team size.',
    icon: 'TrendingUp',
  },
];
const EfficiencyStatsCard = () => {
  // load the icons dynamically

  return (
    <div className={'grid grid-cols-1 sm:grid-cols-3 gap-6'}>
      {efficiencyStats.map((stat) => (
        <div className='border rounded-xl border-border/70 p-1' key={stat.id}>
          <Card className='rounded-lg bg-muted/20'>
            <CardContent>
              <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary'>
                {/* Load the icons from lucide */}
                {stat.icon}
              </div>
            </CardContent>
            <CardHeader>
              <CardTitle>
                <h4>{stat.title}</h4>
              </CardTitle>
              <CardDescription>
                <p>{stat.description}</p>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
};
