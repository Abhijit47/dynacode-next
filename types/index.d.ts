type OurFeature = {
  category: string;
  title: string;
  details: string;
  tutorialLink: string;
  image: string;
};

type Stat = {
  id: string;
  title: string;
  description: string;
  stat: string;
  prefix: string;
};

type Process = {
  title: string;
  description: string;
  completed: boolean;
};

type Blog = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  createdAt: string;
  author: {
    name: string;
    profileUrl: string;
  };
};

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

type Testimonial = {
  id: number;
  name: string;
  designation: string;
  company: string;
  testimonial: string;
  avatar: string;
};

declare type FeatureCover = {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: unknown[];
  markers?: unknown[];
  [key: string]: unknown;
};

declare type DevelopmentFeature = {
  id: string;
  category: string;
  title: string;
  details: string;
  tutorialLink: Route;
  cover: FeatureCover;
};

declare type WebDevelopmentFeatures = DevelopmentFeature[];
declare type MobileDevelopmentFeatures = DevelopmentFeature[];
declare type IOTDevelopmentFeatures = DevelopmentFeature[];
declare type UIUXDesignFeatures = DevelopmentFeature[];
declare type DesktopDevelopmentFeatures = DevelopmentFeature[];
declare type AIDevelopmentFeatures = DevelopmentFeature[];
