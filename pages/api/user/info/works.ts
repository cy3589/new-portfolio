import { Works } from '@typings/works';
import { NextApiRequest, NextApiResponse } from 'next';

const works: Works[] = [
  {
    company: 'Treasurer',
    period: '2022.04.25 ~ 2022.11',
    work: [
      {
        title: 'React',
        description: [
          '기존 코드의 리팩토링',
          '신규 기능 개발',
          '테스트코드 작성',
        ],
      },
      {
        title: 'Node.js',
        description: ['API개발', 'Swagger 문서화', '테스트코드 작성'],
      },
      { title: 'React-Native', description: ['화면개발'] },
      { title: 'AWS', description: ['타사 API 연동을 위한 Lambda 개발'] },
    ],
  },
  {
    company: 'ClassU',
    period: '2022.11.21 ~ Present',
    work: [
      {
        title: 'Next.js',
        description: ['앱 내 웹뷰 페이지 개발', '신규 이벤트페이지 개발'],
      },
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
