import { NextApiRequest, NextApiResponse } from 'next';
import type { Project } from '@typings/project';

const dummyProjects: { [id: string]: Project } = {
  '16580510039130': {
    title: 'NodeBird',
    isTeam: false,
    useSkills: {
      front: [
        'NextJS',
        'ReactJS',
        'Typescript',
        'Redux',
        'Redux-Saga',
        'react-slick',
        'emotion',
      ],
      back: ['NodeJS', 'mySQL', 'sequelize', 'passport', 'bcrypt'],
    },
    deploy: { link: 'nodebird.cy3589.com' },
    gitLink: 'https://github.com/cy3589/NodeBird__',
    summary:
      'NextJS를 기반으로 만든 트위터와 비슷한 기능을 하는 SNS 웹 서비스 입니다.',
    description:
      'NextJS를 기반으로 만든 트위터와 비슷한 기능을 하는 SNS 웹 서비스 입니다.',
    whatILean: [
      '전역 상태를 관리하는 리덕스를 적용하여 리덕스 사용법과 흐름을 알게 되었습니다.',
      '최초 자바스크립트로 만든 프로젝트를 타입스크립트로 리팩토링 하며 타입스크립트를 왜 쓰는지 알게되었습니다',
      '백엔드도 같이 만들면서 프론트와 백엔드가 어떻게 소통하고, 데이터가 어떻게 흘러가는지 알게되었습니다.',
      'NextJS의 서버사이드 동작 함수의 동작 흐름과 리덕스와의 연동법을 알게되었습니다.',
    ],
  },

  '16580510039131': {
    title: 'Sleact',
    isTeam: false,
    useSkills: {
      front: [
        'NextJS',
        'ReactJS',
        'Typescript',
        'react-query',
        'Redux-Saga',
        'react-slick',
        'emotion',
        'socket',
      ],
    },
    deploy: { link: 'sleact.cy3589.com' },
    gitLink: 'github.com/cy3589/sleact-react-query',
    summary: 'NextJS를 기반으로 만든 슬랙의 클론코딩 입니다',
    whatILean: [
      'React-Query를 프로젝트에 적용해보며 비슷한 구조임에도 짧아지는 코드량을 경험하였습니다.',
      'Socket.io를 이용한 실시간 통신과 데이터페칭을 구현하며 웹소켓의 동작 흐름을 간략히 알게되었습니다.',
      '일반적인 게시글과 달리 역으로 동작해야하는 채팅의 무한스크롤을 구현하며 React-Query의 역방향 데이터 업데이트 방법을 알게되었습니다.',
      'Emotion에 Type을 적용하여 정확한 type과 prop을 적용한 Emotion 사용법을 알게 되었습니다.',
    ],
  },

  '16580510039132': {
    title: 'O-House-Clone',
    isTeam: false,
    deploy: { link: 'https://o-house-clone.cy3589.com/store' },
    useSkills: { front: ['NextJS'], back: ['오늘의집 API'] },
    gitLink: 'https://github.com/cy3589/o-house-clone',
    summary:
      '오늘의집의 클론 프로젝트이며 무한스크롤이 적용되어있는 store 페이지만 진행하였습니다.',
    description:
      '오늘의집 사이트의 네트워크 요청을 기반으로 분석해보니 API가 오픈되어 있는 것을 확인하여 진행한 웹사이트 클론 프로젝트 입니다.',
    whatILean: [
      'NextJS의 api라우팅 기능을 이용하여 CORS에러 회피를 구현하며 api라우팅 사용법을 알게 되었습니다.',
      'masonic 라이브러리를 이용한 돔 가상화의 구현, 라이브러리 사용법, 성능상 이점 등을 알게 되었습니다.',
    ],
  },

  '16580510039133': {
    title: 'Dokteuk',
    isTeam: true,
    useSkills: {
      front: [
        'NextJS',
        'ReactJS',
        'Typescript',
        'Redux',
        'Redux-Toolkit',
        'emotion',
      ],
      back: ['firebase'],
    },
    gitLink: '',
    summary: 'NextJS를 기반으로 만든 커뮤니티 입니다',
    description:
      '블라인드를 벤치마킹 하여 자영업자, 비정규직 등의 블라인드 가입이 어려운 유저를 위한 익명 커뮤니티 입니다.',
    whatILean: [
      'NextJS에서 제공하는 서버사이드 동작 함수인 getServerSideProps, getInitialProps에 대한 흐름을 알게 되었습니다.',
      'NextJS에서 제공하는 API라우팅 기능을 이용하여 프론트 서버단에서 실행 불가능한 라이브러리의 사용, CORS 회피를 구현해보며 사용법을 알게 되었습니다.',
      '협업을 하며 재사용이 쉽게 가능한 컴포넌트와 함수의 설계, Redux의 초기 구조 설계의 중요성을 알게 되었습니다.',
      'Git으로 협업을 하며 Merge, Conflict, Revert, Branch분리 등 Git의 여러 기능과 에러를 경험해보았습니다.',
      'ReduxToolKit과 같이 사용한 Redux의 HYDRATE 액션이 어떻게 동작하는지 간략하게 알게 되었습니다.',
    ],
  },

  '16580510039134': {
    title: 'ShowMeTheFeedback',
    isTeam: true,
    useSkills: {
      front: ['HTML', 'CSS', 'JAVASCRIPT'],
      back: ['NodeJS', 'Express', 'MongoDB', 'Mongoose'],
    },
    gitLink: 'github.com/cy3589/ShowMeTheFeedback',
    summary:
      'HTML,CSS,JAVASCRIPT 만으로 만든 토이프로젝트 피드백 서비스 입니다',
    description:
      '토이프로젝트를 업로드 하고 이에 대한 피드백을 주고받을 수 있는 웹 서비스 입니다.',
    whatILean: [
      '프레임워크 없이 순수 자바스크립트만으로 재사용성을 갖는 설계 방법을 간략히 알게 되었습니다.',
      'DOM객체를 직접 제어하여 자바스크립트만으로 페이지를 변화시키는 여러 방법을 알게 되었습니다.',
      'MongoDB의 구조와 사용법을 간략히 알게 되었습니다.',
    ],
  },
};

const project = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const projectId = (req.query as { projectId: string })?.projectId;
      if (!projectId)
        return res.status(401).json({ result: 'fail', message: '잘못된 접근' });
      if (!dummyProjects[projectId])
        return res
          .status(401)
          .json({ result: 'fail', message: '데이터가 없습니다' });
      return res.status(201).json({
        result: 'success',
        message: '성공',
        project: dummyProjects[projectId],
      });
    } catch (error) {
      // if (axios.isAxiosError(error)) console.error(error.response?.data);
      return res.status(500).send('에러발생');
    }
  } else return res.status(401).send('잘못된 접근');
};

export default project;
