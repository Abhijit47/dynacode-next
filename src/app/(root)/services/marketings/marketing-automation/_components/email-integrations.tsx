import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ArrowUpRightIcon, CheckIcon } from 'lucide-react';
import Image from 'next/image';

export default function EmailIntegrations() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>Platforms We Work With</h3>
          <p>
            Expert implementation across all major marketing automation
            platforms
          </p>
        </hgroup>

        <Integrations />
      </div>
    </section>
  );
}

const integrations = [
  {
    id: crypto.randomUUID(),
    name: 'HubSpot',
    url: 'https://www.hubspot.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://hubspot.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Mailchimp',
    url: 'https://mailchimp.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://mailchimp.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'ActiveCampaign',
    url: 'https://www.activecampaign.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://activecampaign.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Klaviyo',
    url: 'https://www.klaviyo.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://klaviyo.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Pardot',
    url: 'https://www.pardot.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://pardot.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Marketo',
    url: 'https://www.marketo.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://marketo.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'ConvertKit',
    url: 'https://convertkit.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://convertkit.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'GetResponse',
    url: 'https://www.getresponse.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://getresponse.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Drip',
    url: 'https://www.drip.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://drip.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Infusionsoft',
    url: 'https://www.keap.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://keap.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Constant Contact',
    url: 'https://www.constantcontact.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://constantcontact.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Campaign Monitor',
    url: 'https://www.campaignmonitor.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://campaignmonitor.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Zoho',
    url: 'https://www.zoho.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://zoho.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Braze',
    url: 'https://www.braze.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://braze.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Omnisend',
    url: 'https://www.omnisend.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://omnisend.com&sz=64',
  },
  {
    id: crypto.randomUUID(),
    name: 'Salesforce',
    url: 'https://www.salesforce.com',
    icon: 'https://www.google.com/s2/favicons?domain=https://salesforce.com&sz=64',
  },
];
const Integrations = () => {
  return (
    <div>
      <div className='mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {integrations.map((integration, idx) => (
          <div
            className='flex items-center gap-4 rounded-lg border bg-card pe-4'
            key={integration.id}>
            <div className='border-e border-dashed p-4'>
              <Image
                alt='PostHog'
                className='size-8 rounded'
                src={integration.icon}
                width={32}
                height={32}
              />
            </div>
            <h3 className='font-semibold text-lg'>{integration.name}</h3>
            <Badge
              variant={idx === 0 ? 'default' : 'outline'}
              className={cn(
                idx === 0
                  ? 'ms-auto px-2 py-0.5'
                  : 'border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 px-3 font-medium text-sm has-[&>svg]:px-2.5 ms-auto h-7.5',
              )}>
              {idx === 0 ? (
                <>
                  Connected <CheckIcon />
                </>
              ) : (
                <>
                  Connect <ArrowUpRightIcon />
                </>
              )}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};
