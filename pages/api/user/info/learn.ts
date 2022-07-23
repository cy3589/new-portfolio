import { Learn } from '@typings/learn';
import { NextApiRequest, NextApiResponse } from 'next';

const learn: Learn = {
  traning: [{ company: '엘리스 코딩 부트캠프', period: '2021.10 ~ 2022.02' }],
  education: [
    {
      university: '단국대학교',
      major: '전자전기공학부 학사',
      period: '2016.03 ~ 2020.02',
    },
  ],
};

const learnHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!learn)
    return res.status(403).json({
      result: 'fail',
      message: '데이터가 없습니다',
    });
  return res.status(201).json({
    result: 'success',
    message: '성공',
    learn,
  });
};

export default learnHandler;
