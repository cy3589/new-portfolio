import { StaticImageData } from 'next/image';

export interface Skills {
  isHighlight: boolean;
  data: string;
}

export interface MainSkillImage {
  src: string | StaticImageData;
  alt?: string;
  title?: string;
}

export interface UserInfo {
  mainSimpleInfo: string;
  name: string;
  simpleInfo: string;
  phone: string;
  email: string;
  introduces?: string[];
  skill?: {
    skills: Skills[][];
    mainSkillImages?: MainSkillImage[];
  };
  projects?: any[];
}

export interface GetUserInfoAxiosResult {
  result: 'success' | 'fail';
  message: '잘못된 접근' | '데이터가 없습니다' | '성공';
  info?: UserInfo;
}
