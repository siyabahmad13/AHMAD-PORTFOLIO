
export type Theme = 'light' | 'dark';

export interface Skill {
  name: string;
  level: number;
  iconName?: string;
  category: string;
  note?: string;
  experienceYears?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: Skill[];
}

export type ProjectCategory = 'All' | 'Frontend' | 'Full Stack' | 'UI Design' | 'Open Source';

export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  fullOverview?: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  category: ProjectCategory;
  featured?: boolean;
  metrics?: string;
  highlights?: string[];
  architecture?: string[];
  initialStars?: number;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  skillsCovered: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

