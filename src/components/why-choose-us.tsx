import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { whyChooseUs } from '@/constants';

export default function WhyChooseUs() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className=''>
        <div className=''>
          <h2 className='max-w-lg font-semibold text-4xl tracking-[-0.03em] md:text-5xl md:leading-14'>
            Boost Your Strategy with Smart Features
          </h2>
          <div className='mx-auto mt-6 grid w-full gap-12 md:mt-10 md:grid-cols-2'>
            <div>
              <Accordion className='w-full' defaultValue='item-0' type='single'>
                {whyChooseUs.map(
                  ({ title, description, icon: Icon }, index) => (
                    <AccordionItem
                      className='group/accordion-item data-[state=open]:border-primary data-[state=open]:border-b-2'
                      key={index}
                      value={`item-${index}`}>
                      <AccordionTrigger className='text-lg group-first/accordion-item:pt-0 [&>svg]:hidden'>
                        <div className='flex items-center gap-4'>
                          <Icon />
                          {title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='text-[17px] text-muted-foreground leading-relaxed'>
                        {description}
                        <div className='mt-6 mb-2 aspect-video w-full rounded-xl bg-muted md:hidden' />
                      </AccordionContent>
                    </AccordionItem>
                  ),
                )}
              </Accordion>
            </div>

            {/* Media */}
            <div className='hidden h-full w-full rounded-xl bg-muted md:block' />
          </div>
        </div>
      </div>
    </section>
  );
}
