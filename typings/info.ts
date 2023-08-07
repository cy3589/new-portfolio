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

export interface GetSolvedAxiosResult {
  handle: string;
  bio: string;
  badgeId: string;
  backgroundId: string;
  profileImageUrl: null | string;
  solvedCount: number;
  voteCount: number;
  class: number;
  classDecoration: string;
  rivalCount: number;
  reverseRivalCount: number;
  tier: number;
  rating: number;
  ratingByProblemsSum: number;
  ratingByClass: number;
  ratingBySolvedCount: number;
  ratingByVoteCount: number;
  arenaTier: number;
  arenaRating: number;
  arenaMaxTier: number;
  arenaMaxRating: number;
  arenaCompetedRoundCount: number;
  maxStreak: number;
  coins: number;
  stardusts: number;
  joinedAt: string;
  bannedUntil: string;
  proUntil: string;
  rank: number;
  isRival: boolean;
  isReverseRival: boolean;
}
export interface GetSolvedACResult {
  userId: string;
  tier: string;
  tierIndex: number;
  rank: number;
  solvedCount: number;
  profileImageUrl: null | string;
}
