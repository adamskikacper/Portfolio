export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description?: string;
  bulletPoints: string[];
  technologies: string[];
  logo?: string;
  link?: string;
}

export type ExperienceTypes = ExperienceItem[];
