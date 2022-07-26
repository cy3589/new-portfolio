export interface Training {
  company: string;
  period: string;
}
export interface Education {
  university: string;
  major: string;
  period: string;
}
export interface Learn {
  training?: Training[];
  education?: Education[];
}

export interface GetLearnAxiosResult {
  result: 'success' | 'fail';
  message: '성공' | '데이터가 없습니다';
  learn?: Learn;
}
