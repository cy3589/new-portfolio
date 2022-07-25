export interface GridProjectItemProps {
  thumbNailSrc: string;
  thumbNailAlt?: string;
  title: string;
  id: string;
}
export interface ProjectsPreview {
  thumbNailSrc: string;
  title: string;
  id: string;
}

export interface Project {
  title: string;
  isTeam: boolean;
  myRole?: string[];
  useSkills?: { front: string[]; back?: string[] };
  deploy?: { link: string };
  gitLink?: string;
  summary: string;
  whatILean: string[];
  description?: string;
  images?: string[];
}

export interface GetProjectAxiosResult {
  result: 'success' | 'fail';
  message: '잘못된 접근' | '데이터가 없습니다' | '성공';
  project: Project;
}

export interface GetProjectsAxiosResult {
  result: 'success' | 'fail';
  message: '잘못된 접근' | '데이터가 없습니다' | '성공';
  projects: GridProjectItemProps[];
}
