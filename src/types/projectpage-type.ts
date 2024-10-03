export interface ProjectItem {
  id: number;
  photo: string;
  title: string;
  sub_title: string;
}

export interface Project {
  title: string;
  last_project: ProjectItem[];
  all_project: ProjectItem[];
}

export interface ProjectData {
  project: Project;
}
