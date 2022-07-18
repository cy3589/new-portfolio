import { StaticImageData } from 'next/image';

export interface GridProjectItemProps {
  thumbNailSrc: string | StaticImageData;
  thumbNailAlt?: string;
  title: string;
  id: string;
}
export interface ProjectsPre {
  thumbNailSrc: string | StaticImageData;
  title: string;
  id: string;
}

export interface Project {
  title: string;
  isTeam: boolean;
  useSkills?: { front: string[]; back?: string[] };
  deploy?: { link: string };
  gitLink?: string;
  summary: string;
  whatILean: string[];
  description?: string;
}

export interface GetProjectAxiosResult {
  result: 'success' | 'fail';
  message: '잘못된 접근' | '데이터가 없습니다' | '성공';
  project: Project;
}
