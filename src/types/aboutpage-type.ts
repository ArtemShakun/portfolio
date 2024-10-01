export type AboutInterface = {
  name: string;
  mail: string;
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
  role: string;
  diploma: string;
  description: string;
};
