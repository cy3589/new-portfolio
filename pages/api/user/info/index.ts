import { UserInfo } from '@typings/info';
import { NextApiRequest, NextApiResponse } from 'next';

const info: { [_ in string]: UserInfo } = {
  '1': {
    mainSimpleInfo: "Hi, I'm FrontEnd Developer",
    name: 'Chad',
    phone: '010-2102-3589',
    email: 'jcy3589@gmail.com',
    simpleInfo: '반갑습니다. 프론트 엔드 개발자 정찬영 입니다',
    introduces: [],
    skill: {
      skills: [
        [
          { isHighlight: true, data: 'React' },
          { isHighlight: false, data: '를 이용한 SPA 제작이 가능합니다.' },
        ],
        [
          { isHighlight: true, data: 'Next' },
          {
            isHighlight: false,
            data: '를 이용한 SPA 제작과 서버사이드 데이터페칭이 가능합니다.',
          },
        ],
        [
          { isHighlight: true, data: 'Redux' },
          {
            isHighlight: false,
            data: '를 이용하여 전역 상태를 관리할 수 있습니다.',
          },
        ],
        [
          { isHighlight: true, data: 'React-Query' },
          {
            isHighlight: false,
            data: '를 이용하여 서버와의 연결상태를 관리하고 상태에 따라 다른 화면을 보여줄 수 있습니다.',
          },
        ],
        [
          { isHighlight: true, data: 'Emotion' },
          {
            isHighlight: false,
            data: '을 이용하여 컴포넌트 별 스타일을 관리할 수 있습니다.',
          },
        ],
        [
          { isHighlight: true, data: 'JavaScript' },
          {
            isHighlight: false,
            data: ' 내장 메서드를 이용한 연산과 DOM 객체의 제어가 가능합니다.',
          },
        ],
        [
          { isHighlight: true, data: 'Typescript' },
          {
            isHighlight: false,
            data: '를 이용하여 개발 시 타입을 적용할 수 있습니다.',
          },
        ],
        [
          { isHighlight: true, data: 'NodeJS' },
          {
            isHighlight: false,
            data: '와 ',
          },
          { isHighlight: true, data: 'Express' },
          {
            isHighlight: false,
            data: '를 이용하여 간단한 백엔드 서버를 구축할 수 있습니다.',
          },
        ],
        [
          { isHighlight: true, data: 'Git' },
          {
            isHighlight: false,
            data: '을 이용하여 버전관리, 협업이 가능합니다.',
          },
        ],
      ],
      mainSkillImages: [
        { src: '/reactjs-logo.png', alt: 'reactjs-logo.png', title: 'react' },
        { src: '/nextjs-logo.png', alt: 'nextjs-logo.png', title: 'next' },
        { src: '/redux-logo.jpg', alt: 'redux-logo.jpg', title: 'redux' },
        {
          src: '/react-query-logo.svg',
          alt: 'react-query-logo.svg',
          title: 'react-query',
        },
        {
          src: '/javascript-logo.svg',
          alt: 'javascript-logo.svg',
          title: 'javascript',
        },
        {
          src: '/typescript-logo.svg',
          alt: 'typescript-logo.svg',
          title: 'typescript',
        },
        { src: '/emotion-logo.png', alt: 'emotion-logo.png', title: 'emotion' },
        { src: '/git-logo.svg', alt: 'git-logo.svg', title: 'git' },
      ],
    },
  },
};

const infoHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const userId = '1';
    if (!info[userId])
      return res
        .status(401)
        .json({ result: 'fail', message: '데이터가 없습니다' });
    return res
      .status(201)
      .json({ result: 'success', message: '성공', info: info[userId] });
  } catch (error) {
    return res.status(500).send('에러발생');
  }
};

export default infoHandler;
