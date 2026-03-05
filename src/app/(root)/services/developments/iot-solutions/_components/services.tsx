import { Icons } from '@/components/card-6';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { iotServices } from '@/constants';

export default function Services() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Intelligent IoT & Connected Ecosystems
          </h3>
          <p>
            Bring your hardware to life with seamless connectivity and real-time
            data. We develop robust <strong>embedded systems</strong> and{' '}
            <strong>smart dashboards</strong> using <strong>MQTT</strong>,
            <strong>LoRaWAN</strong>, and <strong>Edge Computing</strong> to
            turn raw sensor data into actionable business intelligence.
          </p>
        </hgroup>

        <ServicesCard />
      </div>
    </section>
  );
}

function ServicesCard() {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {iotServices.map((service) => (
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
}
