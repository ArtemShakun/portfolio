export interface Experience {
  id: number;
  years: string;
  company_name: string;
  role: string;
}

export interface Education {
  id: number;
  years: string;
  name: string;
}

export interface About {
  title: string;
  name: string;
  description: string;
  experience: Experience[];
  education: Education[];
}
