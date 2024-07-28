export interface TSChallenge {
  title: string;
  id: string;
  code: string;
  description: string;
  link: string;
}

export type TSChallengeItem = Pick<TSChallenge, 'title' | 'id'>;

export interface GetTSChallengeAxiosResult {
  result: 'success' | 'fail';
  message: '잘못된 접근' | '데이터가 없습니다' | '성공';
  tsChallenge: TSChallenge;
}

export interface GetTSChallengesAxiosResult {
  result: 'success' | 'fail';
  message: '잘못된 접근' | '데이터가 없습니다' | '성공';
  tsChallenges: TSChallengeItem[];
}
