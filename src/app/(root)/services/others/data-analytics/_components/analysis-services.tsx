import { Icons } from '@/components/card-6';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AnalysisServices() {
  return (
    <section
      className={
        'container mx-auto max-w-(--breakpoint-xl) px-4 2xl:px-0 pb-24'
      }>
      <div className={'space-y-8'}>
        <hgroup className={'text-center space-y-4'}>
          <h3 className={'text-4xl font-semibold'}>
            Our Data & Business Analysis Services
          </h3>
          <p>
            Turn raw data into decisions with analytics, BI, and predictive
            modeling
          </p>
        </hgroup>

        <Services />
      </div>
    </section>
  );
}

const analysisServices = [
  {
    id: crypto.randomUUID(),
    title: 'Data Engineering',
    description:
      'Pipelines and models that keep data clean, reliable, and fresh',
    items: ['ETL/ELT', 'Data Lakes/Warehouses', 'dbt/Delta', 'Airflow/Prefect'],
  },
  {
    id: crypto.randomUUID(),
    title: 'Bi & Dashboards',
    description: 'Self-serve dashboards and KPI reporting for stakeholders',
    items: [
      'Power BI/Tableau',
      'Looker/Metabase',
      'Semantic Layer',
      'Data Governance',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Analytics & Insights',
    description: 'Descriptive, diagnostic, and prescriptive analysis',
    items: [
      'Cohort/Segmentation',
      'Funnel Analysis',
      'CLTV & Churn',
      'Marketing Mix Models',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Forecasting & Ml',
    description: 'Predictive models that drive strategy and revenue',
    items: [
      'Time Series',
      'Classification/Regression',
      'Recommendation',
      'A/B Experimentation',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Data Quality & Mdm',
    description: 'Trustworthy data with lineage, quality checks, and ownership',
    items: [
      'Great Expectations',
      'Data Catalog',
      'Master Data',
      'Data Contracts',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Analytics Ops',
    description: 'Productionize notebooks and models, monitor and improve',
    items: ['MLOps', 'Versioning', 'Model Monitoring', 'Cost Control'],
  },
];

const Services = () => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
      {analysisServices.map((service) => (
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
