type Feature = {
  category: string;
  title: string;
  details: string;
  tutorialLink: string;
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
