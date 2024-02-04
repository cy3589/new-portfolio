import { Works } from '@typings/works';
import { NextApiRequest, NextApiResponse } from 'next';

const works: Works[] = [
  {
    company: 'Glyde',
    period: '2024.1 ~ Present',
    work: [
      {
        title: 'React.js, Next.js',
        description: [
          '자사 커머스 서비스의 유지보수',
          'Java기반 MPA 서비스를 Next.js기반의 서비스로 점진적 전환',
          'Javascript 기반의 소스코드를 Typescript로 전환하고 API 응답의 강한 Typing을 적용하여 안정성 확보',
          '정적 Layout에 대해 ServerComponent 적용으로 FCP를 개선',
          '인터렉티브 UI의 css를 transform 적용으로 CLS를 개선(LightHouse CLS Score 44 -> 79)',
        ],
      },
    ],
  },
  {
    company: 'ClassU',
    period: '2022.11 ~ 2024.1',
    work: [
      {
        title: 'React.js, Next.js',
        description: [
          '자사 서비스의 자체 커뮤니티 개발',
          'B2B 사업 관리 솔루션 개발',
          '이벤트페이지 제작',
        ],
      },
      {
        title: 'Nest.js',
        description: [
          'B2B 솔루션 백엔드 API개발',
          '수동업무의 자동화',
          '무거운 쿼리와 분리된 DB의 테이블의 배치업데이트 적용',
          '인증토큰 관리 로직 cookie로 변경',
        ],
      },
      {
        title: 'CI/CD',
        description: [
          'github action을 연동하여 AWS EC2 환경 CI/CD 구축',
          'Amplify 환경에서의 프론트엔드 배포',
        ],
      },
    ],
  },
  {
    company: 'Treasurer',
    period: '2022.4 ~ 2022.10',
    work: [
      {
        title: 'React.js',
        description: [
          'Atomic 디자인패턴으로 리팩토링',
          '중복 컴포넌트와 훅의 공통화로 재사용성 및 유지보수성 개선​',
          'react-query의 도입으로 클라이언트 네트워크 자원 절약',
          'react-virtualized 라이브러리 도입으로 무한스크롤페이지 렌더링 최적화',
        ],
      },
      {
        title: 'Express.js',
        description: ['API개발', 'Swagger 문서화', '테스트코드 작성'],
      },
      { title: 'React-Native', description: ['화면개발 및 유지보수'] },
      {
        title: 'AWS-Lambda',
        description: ['타사 API 연동을 위한 Lambda 개발'],
      },
      {
        title: 'CI/CD',
        description: [
          'Github, AWS CodePipeline, AWS Elastic Beanstalk 연동하여 백엔드 CI/CD 구축',
        ],
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
