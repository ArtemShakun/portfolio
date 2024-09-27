export interface userData {
  name: string;
  role: string;
  sub_title: string;
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

export interface homepage {
  userData: userData;
  company_name: string[];
  more_about: blockInfo;
  projects: blockInfo;
  blog: blockInfo;
  specialization: blockInfo;
  profile: blockInfo;
  together: together;
}
