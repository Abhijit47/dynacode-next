import { Icons } from '@/components/card-6';
import CTASection3 from '@/components/cta-section-03';
import { CoolMode } from '@/components/extends/cool-mode';
import WarpBackground from '@/components/extends/warp-background';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IconHandClick } from '@tabler/icons-react';

import { ArrowRightCircle } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';

export default function AIDevelopmentPage() {
  return (
    <main>
      <section className={''}>
        <WarpBackground className={'-top-16'}>
          <Card className='aspect-square sm:aspect-video md:aspect-24/9 lg:aspect-30/9 backdrop-blur-xl border-none shadow-none bg-background/60'>
            <CardContent className='flex flex-col h-full w-full items-center justify-center gap-4 p-4'>
              <CardTitle>
                <h2 className={'text-4xl font-black'}>AI Development</h2>
              </CardTitle>
              <CardDescription className={'max-w-4xl mx-auto'}>
                <p className='text-center text-lg md:text-xl'>
                  Explore our AI development services, from custom AI solutions
                  to integration and consulting. Harness the power of artificial
                  intelligence to transform your business.
                </p>
              </CardDescription>
              <CoolMode
              // options={{
              //   particle:
              //     'https://pbs.twimg.com/profile_images/1782811051504885763/YR5-kWOI_400x400.jpg',
              // }}
              >
                <Link
                  href='/contact-us'
                  className={buttonVariants({
                    size: 'lg',
                    className: 'rounded-full!',
                  })}>
                  Get in touch <IconHandClick className={'size-5'} />
                </Link>
              </CoolMode>
            </CardContent>
          </Card>
        </WarpBackground>
      </section>

      <section
        className={
          'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
        }>
        <Features />
      </section>

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
              <strong>LLM integrations</strong> and{' '}
              <strong>RAG pipelines</strong> to autonomous{' '}
              <strong>AI agents</strong>, we build intelligent systems that
              automate complex workflows and turn your data into a competitive
              advantage.
            </p>
          </hgroup>

          <Services />
        </div>
      </section>

      <CTASection3 />
    </main>
  );
}

const features = [
  {
    category: 'Generative AI & LLMs',
    title: 'Harness the power of Large Language Models',
    details:
      'Integrate advanced AI capabilities using OpenAI’s GPT-4, Anthropic’s Claude, or open-source models like Llama. We build custom RAG (Retrieval-Augmented Generation) pipelines that allow AI to interact securely with your private business data for pinpoint accuracy.',
    tutorialLink: '#',
  },
  {
    category: 'Computer Vision',
    title: 'Extract insights from visual data',
    details:
      'Automate visual inspections, object detection, and facial recognition using PyTorch and TensorFlow. Our vision systems enable real-time image and video analysis, helping businesses automate quality control and enhance security monitoring.',
    tutorialLink: '#',
  },
  {
    category: 'Predictive Analytics',
    title: 'Turn historical data into future foresight',
    details:
      'Build machine learning models that forecast market trends, user behavior, and operational risks. By leveraging Scikit-learn and advanced regression techniques, we help you transition from reactive decision-making to proactive, data-driven strategies.',
    tutorialLink: '#',
  },
  {
    category: 'AI Agents & Automation',
    title: 'Autonomous workflows for complex tasks',
    details:
      'Deploy intelligent agents using LangChain or AutoGPT to handle multi-step processes without human intervention. These agents can research, summarize, and execute tasks across different software platforms, drastically increasing your team’s operational efficiency.',
    tutorialLink: '#',
  },
];

const Features = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className=''>
        {/* <h2 className='text-pretty font-semibold text-4xl tracking-[-0.03em] sm:mx-auto sm:max-w-xl sm:text-center md:text-[2.75rem] md:leading-[1.2]'>
          Strengthen Your Strategy
        </h2>
        <p className='mt-2 text-lg text-muted-foreground sm:text-center sm:text-xl'>
          Enhance your strategy with intelligent tools designed for success.
        </p> */}
        <div className='mx-auto mt-8 w-full space-y-20 md:mt-16'>
          {features.map((feature) => (
            <div
              className='flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse'
              key={feature.category}>
              <div className='aspect-4/3 w-full basis-1/2 rounded-xl border border-border/50 bg-muted' />
              <div className='shrink-0 basis-1/2'>
                <span className='font-medium text-muted-foreground text-sm uppercase'>
                  {feature.category}
                </span>
                <h4 className='my-3 font-semibold text-3xl tracking-[-0.02em]'>
                  {feature.title}
                </h4>
                <p className='text-muted-foreground'>{feature.details}</p>
                <Button asChild className='mt-6 gap-3 rounded-full' size='lg'>
                  <Link href={feature.tutorialLink as Route}>
                    Learn More <ArrowRightCircle />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const aiServices = [
  {
    id: crypto.randomUUID(),
    title: 'GENERATIVE AI & LLMS',
    description: 'Custom language models and intelligent text generation',
    items: [
      'OpenAI GPT-4 / Claude 3',
      'RAG (Retrieval-Augmented Generation)',
      'Fine-tuning Open Source Models',
      'Prompt Engineering',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'COMPUTER VISION',
    description: 'Visual recognition and image processing solutions',
    items: [
      'Object Detection (YOLO)',
      'Facial Recognition',
      'OCR & Document Extraction',
      'Image Segmentation',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'NLP & SEMANTIC SEARCH',
    description: 'Understanding and processing human language',
    items: [
      'Sentiment Analysis',
      'Vector Databases (Pinecone/Weaviate)',
      'Multi-lingual Translation',
      'Chatbots & Virtual Assistants',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'PREDICTIVE ANALYTICS',
    description: 'Data-driven forecasting and behavior modeling',
    items: [
      'Time-series Forecasting',
      'Customer Churn Prediction',
      'Fraud Detection',
      'Scikit-learn / TensorFlow',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'AI AGENTS & AUTONOMY',
    description: 'Autonomous task execution and workflow agents',
    items: [
      'LangChain Workflows',
      'AutoGPT Integrations',
      'Multi-agent Systems',
      'Tool-calling & API Agents',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'MLOPS & DEPLOYMENT',
    description: 'Scaling and monitoring AI models in production',
    items: [
      'Model Quantization',
      'GPU Cloud Scaling (AWS/Lambda)',
      'Continuous Monitoring',
      'Model Governance',
    ],
  },
];

const Services = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {aiServices.map((service) => (
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
};
