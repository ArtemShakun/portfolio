export type AboutInterface = {
  title: string;
  description: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  tools: string[];
  language: string;
};

export type Experience = {
  id: number;
  years: string;
  role: string;
  company_name: string;
  description: string;
};

export type Education = {
  id: number;
  years: string;
  name: string;
  diploma: string;
  description: string;
};
