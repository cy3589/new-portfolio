export interface Works {
  company: string;
  period: string;
  work?: string[];
}

export interface GetWorksAxiosResult {
  result: 'success' | 'fail';
  message: '성공' | '데이터가 없습니다';
  works?: Works[];
}
