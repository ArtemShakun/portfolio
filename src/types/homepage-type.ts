export interface userData {
  name: string;
  title: string;
  role: string;
  description: string;
  link: string;
}

export interface blockInfo {
  title: string;
  sub_title: string;
  link: string;
}

export interface together {
  title: string;
  link: string;
}

export interface experience {
  id: number;
  years: string;
  company_name: string;
  role: string;
}

export interface education {
  id: number;
  years: string;
  name: string;
}

export interface homepage {
  userData: userData;
  experience: experience[];
  education: education[];
  company_name: string[];
  more_about: blockInfo;
  projects: blockInfo;
  blog: blockInfo;
  specialization: blockInfo;
  profile: blockInfo;
  together: together;
}
