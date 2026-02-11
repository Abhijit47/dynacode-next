'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { whyChooseUs } from '@/constants';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type WhyChooseUsData = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
};

export default function WhyChooseUs() {
  const [selectedFeature, setSelectedFeature] = useState<WhyChooseUsData>(
    whyChooseUs[0],
  );

  return (
    <section
      className={'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0'}>
      <div className=''>
        <div className=''>
          <h2 className='max-w-lg font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[-0.03em] md:leading-14'>
            Boost Your Strategy with Smart Features
          </h2>
          <div className='mx-auto mt-6 grid w-full gap-12 md:mt-10 md:grid-cols-2'>
            <div>
              <Accordion
                className='w-full'
                type='single'
                value={
                  selectedFeature
                    ? `item-${whyChooseUs.indexOf(selectedFeature)}`
                    : undefined
                }
                onValueChange={(value) => {
                  const index = parseInt(value?.split('-')[1] || '0', 10);
                  setSelectedFeature(whyChooseUs[index]);
                }}>
                {whyChooseUs.map(
                  ({ title, description, icon: Icon }, index) => (
                    <AccordionItem
                      className='group/accordion-item data-[state=open]:border-primary data-[state=open]:border-b-2'
                      key={index}
                      value={`item-${index}`}>
                      <AccordionTrigger className='text-sm md:text-base lg:text-lg group-first/accordion-item:pt-0 [&>svg]:hidden'>
                        <div className='flex items-center gap-4'>
                          <Icon />
                          {title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='text-xs sm:text-sm lg:text-[17px] text-muted-foreground leading-relaxed'>
                        {description}
                        <div className='mt-6 mb-2 aspect-video w-full rounded-xl md:hidden'>
                          <Image
                            alt={title}
                            className='h-full w-full rounded-xl object-cover'
                            height={500}
                            src={whyChooseUs[index].image}
                            width={500}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ),
                )}
              </Accordion>
            </div>

            {/* Media */}
            <div className='hidden h-full w-full aspect-square rounded-xl md:block'>
              <Image
                alt={selectedFeature.title}
                className='h-full w-full rounded-xl object-cover'
                height={500}
                src={selectedFeature.image}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
