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

export interface BasicIntroData {
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
