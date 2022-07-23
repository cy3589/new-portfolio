import { Works } from '@typings/works';
import { NextApiRequest, NextApiResponse } from 'next';

const works: Works[] = [
  {
    company: 'Treasurer',
    period: '2022.04.25 ~ Present',
    work: [
      'React FrontEnd 리팩토링, 기능개발',
      'Node.js BackEnd RestAPI추가, 파트너사 API 연동작업',
      '파트너사 API 연동기능의 재사용을 위한 AWS 람다개발',
      'ReactNative FrontEnd 페이지개발',
    ],
  },
];

const learnHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!works)
    return res.status(403).json({
      result: 'fail',
      message: '데이터가 없습니다',
    });
  return res.status(201).json({
    result: 'success',
    message: '성공',
    works,
  });
};

export default learnHandler;
