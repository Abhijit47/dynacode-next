import { Icons } from '@/components/card-6';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { aiDevelopmentServices } from '@/constants';

export default function Services() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Next-Gen AI & Machine Learning Solutions
          </h3>
          <p>
            Supercharge your business with the power of{' '}
            <strong>Artificial Intelligence</strong>. From custom{' '}
            <strong>LLM integrations</strong> and <strong>RAG pipelines</strong>{' '}
            to autonomous <strong>AI agents</strong>, we build intelligent
            systems that automate complex workflows and turn your data into a
            competitive advantage.
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
      {aiDevelopmentServices.map((service) => (
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
