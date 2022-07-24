export interface Work {
  title: string;
  description: string[];
}

export interface Works {
  company: string;
  period: string;
  work?: Work[];
}

export interface GetWorksAxiosResult {
  result: 'success' | 'fail';
  message: '성공' | '데이터가 없습니다';
  works?: Works[];
}
