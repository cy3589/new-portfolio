/* eslint-disable no-template-curly-in-string */
import { TSChallenge } from '@typings/ts-challenge';
import type { Project } from 'typings/project';

const myProjects: { [id: string]: Project } = {
  '1658051003913931': {
    title: 'ClassU-B2B',
    images: ['/classu-b2b/classu-b2b-thumbnail.jpg'],
    isTeam: false,
    isCompanyProject: true,
    useSkills: {
      front: ['NextJS', 'Typescript', 'emotion', 'MUI', 'AWS Amplify'],
      back: ['NestJS', 'Typescript', 'Prisma', 'mySQL', 'AWS EC2', 'Docker'],
    },
    // deploy: { link: 'https://event.classu.co.kr/awards' },
    gitLink: '',
    summary: 'B2B 서비스 관리를 위한 백오피스 입니다.',
    description:
      'NestJS, NextJS, Prisma, mySQL, Docker를 활용하여 만들어진 B2B 솔루션입니다.',
    whatILean: [
      'Docker의 사용법과 쓰는 이유를 알게되었습니다.',
      '얕게만 알고있던 SQL문법과 쿼리성능에 대해 더 자세히 알게되었습니다.',
      'NestJS에서 채택한 Module, Controller, Service 구조의 사용법을 알게되었습니다.',
    ],
  },
  '16580510039139': {
    title: 'ClassU-Awards',
    images: [
      '/classu-awards/classu-awards-image0.jpg',
      '/classu-awards/classu-awards-image1.jpg',
      '/classu-awards/classu-awards-image2.jpg',
      '/classu-awards/classu-awards-image3.jpg',
    ],
    isTeam: false,
    isCompanyProject: true,
    useSkills: {
      front: ['NextJS', 'Typescript', 'emotion', 'tailwindCSS', 'swiper'],
    },
    // deploy: { link: 'https://event.classu.co.kr/awards' },
    gitLink: '',
    summary: '연말 이벤트 페이지 입니다.',
    description:
      'NextJS를 기반으로 만들었으며 옆으로 흐르는 재밌는 효과와 디자인에 초점을 맞춘 이벤트페이지 입니다.',
    whatILean: [
      'tailwindCSS와  twin.macro의 사용법을 알게되었습니다.',
      'SSG를 이용하기 위해 NextJS의 getStaticPaths, getStaticProps의 사용법을 자세히 알게되었습니다.',
      '디자인이나 기획의 잦은 변화에 대응하기 쉬운 구조에 대해 생각해 볼 수 있었습니다.',
    ],
  },
  '16580510039129': {
    title: 'Treasurer-Watch',
    images: [
      '/watch-treasurer/watch-treasurer-thumbnail.png',
      '/watch-treasurer/watch-treasurer-image0.png',
      '/watch-treasurer/watch-treasurer-image1.png',
      '/watch-treasurer/watch-treasurer-image2.png',
      '/watch-treasurer/watch-treasurer-image3.png',
      '/watch-treasurer/watch-treasurer-image4.png',
      '/watch-treasurer/watch-treasurer-image5.png',
    ],
    isTeam: false,
    isCompanyProject: true,
    useSkills: {
      front: [
        'NextJS',
        'ReactJS',
        'Typescript',
        'react-query',
        'emotion',
        'framer-motion',
        'chakra-ui',
        'masonic',
      ],
      back: ['NodeJS', 'NestJS', 'mySQL', 'Prisma', 'Typescript'],
    },
    // deploy: { link: 'https://watch.treasurer.co.kr' },
    gitLink: '',
    summary: '시계 데이터를 보여주는 웹 서비스 입니다.',
    description:
      'NextJS를 기반으로 만들었으며 인터렉티브한 효과와 데이터 시각화에 초점을 맞추어 만든 웹 서비스 입니다.',
    whatILean: [
      'framer-motion을 이용한 React 환경에서의 다양한 애니메이션 효과를 구현하는 방법을 알게되었습니다',
      '디자인을 편하게 도와주는 Chakra-UI에 대한 사용방법과 tailwind와 같은 css프레임워크를 왜 쓰는지 알게되었습니다',
      'NextJS의 서버사이드 함수와 react-query와의 연동, 하이드레이션에 대해 더 잘 알게되었습니다',
      'NestJS와 Prisma를 경험하며 ORM의 연동, Typescript가 적용되면 안정성있는 서비스가 구현됨을 알게되었습니다',
    ],
  },
  '16580510039130': {
    title: 'NodeBird',
    images: [
      '/nodebird/nodebird-image0.png',
      '/nodebird/nodebird-thumbnail.png',
    ],
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
    // deploy: { link: 'https://nodebird.cy3589.com' },
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
    images: [
      '/sleact/sleact-thumbnail.png',
      '/sleact/sleact-image0.png',
      '/sleact/sleact-image1.png',
      '/sleact/sleact-image2.png',
      '/sleact/sleact-image3.png',
      '/sleact/sleact-image4.png',
      '/sleact/sleact-image5.png',
    ],
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
    // deploy: { link: 'https://sleact.cy3589.com' },
    gitLink: 'https://github.com/cy3589/sleact-react-query',
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
    images: [
      '/o-house/o-house-thumbnail.jpg',
      '/o-house/o-house-image0.png',
      '/o-house/o-house-image1.png',
      '/o-house/o-house-image2.jpg',
      '/o-house/o-house-image3.jpg',
    ],
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
    images: ['/dokteuk/dokteuk-thumbnail.png'],
    isTeam: true,
    myRole: [
      '게시글 무한스크롤 개발',
      'Full-Text-Search를 위해 Firebase와 Algolria 연결',
      'NextJS 프로젝트 초기 셋업',
      '서버사이드 렌더링과 서버사이드 동작 함수 세팅',
      '스크롤 복원 개발',
      '리덕스 세팅, 서버사이드 리덕스 데이터 주입 및 컴포넌트 랩핑 세팅',
      '가입 시 인증에 필요한 서류의 텍스트 파싱 기능 개발 서포트',
    ],
    useSkills: {
      front: [
        'NextJS',
        'ReactJS',
        'Typescript',
        'Redux',
        'Redux-Toolkit',
        'Emotion',
      ],
      back: ['Firebase'],
    },
    gitLink: 'https://github.com/cy3589/dokteuk',
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
    images: [
      '/show-me-the-feedback/show-me-the-feedback-thumbnail.png',
      '/show-me-the-feedback/show-me-the-feedback-image0.png',
      '/show-me-the-feedback/show-me-the-feedback-image1.png',
      '/show-me-the-feedback/show-me-the-feedback-image2.png',
    ],
    isTeam: true,
    myRole: [
      '백-프론트 연결 총괄',
      '프론트엔드 기능개발 리드',
      '게시글 작성, 수정 폼, 데이터페칭 개발',
      '랜딩화면 데이터페칭, 기능 개발',
    ],
    useSkills: {
      front: ['HTML', 'CSS', 'JAVASCRIPT'],
      back: ['NodeJS', 'Express', 'MongoDB', 'Mongoose'],
    },
    gitLink: 'https://github.com/cy3589/ShowMeTheFeedback',
    summary:
      'HTML, CSS, JAVASCRIPT 만으로 만든 토이프로젝트 피드백 서비스 입니다',
    description:
      '토이프로젝트를 업로드 하고 이에 대한 피드백을 주고받을 수 있는 웹 서비스 입니다.',
    whatILean: [
      '프레임워크 없이 순수 자바스크립트만으로 재사용성을 갖는 설계 방법을 간략히 알게 되었습니다.',
      'DOM객체를 직접 제어하여 자바스크립트만으로 페이지를 변화시키는 여러 방법을 알게 되었습니다.',
      'MongoDB의 구조와 사용법을 간략히 알게 되었습니다.',
    ],
  },
};

const myTSChallenges: TSChallenge[] = [
  {
    title: 'Dynamic Route',
    id: '33345',
    code: [
      "type InverseString<T extends string, U extends string = ''> =T['length'] extends 0 ? U : T extends `${infer First}${infer Rest}` ? InverseString<Rest, `${First}${U}`> : U;",
      'type RemoveFirst<T extends string> = T extends `${infer First}${infer Rest}` ? Rest : T;',
      'type RemoveLastSlash<T extends string> = InverseString<T> extends `/${infer Rest}` ? RemoveLastSlash<InverseString<RemoveFirst<InverseString<T>>>> : T;',
      "type SlashSplitted<T extends string, U extends string[]=[]> = T['length']extends 0?U: T extends `/${infer First}/${infer Rest}` ? SlashSplitted<`/${Rest}`, [...U, First]> : T extends `/${infer Rest}` ? [...U, Rest] : U;",
      'type AddFirstSlash<T extends string> = T extends `/${infer Rest}` ? T : `/${T}`',
      '',
      'type IsNever<T> = [T] extends [never] ? true : false;',
      '',
      'type Clear<T extends string> = T extends `[[...${infer Key}]]` ? NullableRecord<Record<Key,string[]>> :',
      "T extends `[...${infer Key}]` ? Key extends '' ?  Record<'...',string> :  Record<Key,string[]> :",
      'T extends `[${infer Key}]` ? Record<Key,string> :',
      'never;',
      '',
      "type CanSlugArrayFilter<T extends string[], U extends string[]=[]> = T['length'] extends 0 ? U :",
      'T extends [infer First extends string, ...infer Rest extends string[]] ? CanSlugArrayFilter<Rest, [...U, CanSlug<First>]> : U;',
      'type CanSlug<T extends string> =',
      'T extends `[[...${infer Key}]]` ? T:',
      'T extends `[...${infer Key}]` ? T :',
      "T extends `[${infer Key}]` ? Key extends '' ? never : T",
      ': never;',
      '',
      "type NeverFilter<T extends any[],U extends any[]=[]> = T['length'] extends 0 ? U :",
      'T extends [infer First, ...infer Rest] ? IsNever<First> extends true ? NeverFilter<Rest, U> : NeverFilter<Rest,[...U, First]> : U;',
      '',
      "type ApplySlugTypes<T extends string[], X extends {[key in string]?:string|string[]}={}> = T['length'] extends 0 ? X :",
      'T extends [infer First extends string, ...infer Rest extends string[]] ? ApplySlugTypes<Rest, Clear<First> & X> : X',
      '',
      'type NullableRecord<T extends object>={[Key in keyof T]?:T[Key]};',
      '',
      'type IsValidSlugRoute<T extends string>= ',
      "T['length'] extends 0 ? true :",
      'T extends `[${`[...${infer F}]`|`...${infer F}`}]/[${`[...${infer L}]`|`...${infer L}`}]${infer Rest}` ',
      '  ? `${F}${L}` extends `${F|L}`',
      '    ? T extends `${infer First}${infer Rest}` ? IsValidSlugRoute<Rest> : true',
      '    : false',
      '  : T extends `[${`[...${infer F}]`|`...${infer F}`}]/[${infer M}]/[${`[...${infer L}]`|`...${infer L}`}]${infer Rest}`',
      '    ? `${F}${M}${L}` extends `${F}${L}` |`${M}${L}` |`${F}${M}`',
      '      ? T extends `${infer First}${infer Rest}` ? IsValidSlugRoute<Rest> : true',
      '      : false ',
      '    : T extends `${infer First}${infer Rest}` ? IsValidSlugRoute<Rest> : true;',
      '',
      '',
      'type Calibrate<T extends string> = RemoveLastSlash<AddFirstSlash<T>>',
      'type RecordToObject<T extends {}>={[Key in keyof T]:T[Key]}',
      '',
      'type DynamicRoute<T extends string> =',
      '  IsValidSlugRoute<T> extends true',
      '    ? RecordToObject<ApplySlugTypes<NeverFilter<CanSlugArrayFilter<SlashSplitted<Calibrate<T>>>>>>',
      '    : never',
    ].join('\n'),
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/33345-extreme-dynamic-route/README.md',
  },
  {
    title: 'Pop',
    id: '00016',
    code: [
      "type ReverseImplements<T extends any[], U extends any[] = []> = T['length'] extends 0 ? U :",
      '      T extends [infer First, ...infer Rest] ? ReverseImplements<Rest, [First, ...U]> : never;',
      'type Reverse<T extends any[]> = ReverseImplements<T>',
      '',
      'type Pop<T extends any[]> = Reverse<Reverse<T> extends [infer First, ...infer Rest] ? Rest : T>',
    ].join('\n'),
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md',
  },
  {
    title: 'CamelCase',
    id: '00114',
    code: [
      "type Alphabet = 'a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'|'i'|'j'|'k'|'l'|'m'|'n'|'o'|'p'|'q'|'r'|'s'|'t'|'u'|'v'|'w'|'x'|'y'|'z';",
      'type CanTransToCamel = `_${Alphabet | Uppercase<Alphabet>}`',
      '',
      'type IsCanTransToCamel<S extends string> = S extends `_${infer First}${infer Rest}` ? `_${First}` extends CanTransToCamel ? true : false : false;',
      'type TransToToCamel<S extends string>=IsCanTransToCamel<S> extends true ? S extends `_${infer First}${infer Rest}` ?  `${Uppercase<First>}${Rest}` : never : S;',
      "type CamelCaseImplement<S extends string, U extends string = ''> = S['length'] extends 0 ? U:",
      'IsCanTransToCamel<S> extends true ? TransToToCamel<S> extends `${infer First}${infer Rest}` ? CamelCaseImplement<Rest, `${U}${First}`> : U',
      ': S extends `${infer First}${infer Rest}` ?  CamelCaseImplement<Rest, `${U}${Lowercase<First>}`> : U',
      '',
      'type CamelCase<S extends string> = CamelCaseImplement<S>',
    ].join('\n'),
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/00114-hard-camelcase/README.md',
  },
  {
    title: 'PercentageParser',
    id: '01978',
    code: [
      "type ReverseString<S extends string, L extends string = ''> = S extends `${infer First}${infer Rest}` ? ReverseString<Rest,`${First}${L}`> : L;",
      'type FirstChar<S extends string> = S extends `${infer First}${infer Rest}` ? First : S;',
      'type LastChar<S extends string> = FirstChar<ReverseString<S>>;',
      'type CurFirst<S extends string> = S extends `${infer First}${infer Rest}` ? Rest : S;',
      'type CurLast<S extends string> = ReverseString<CurFirst<ReverseString<S>>>;',
      '',
      'type PercentageParser<A extends string> =',
      '  FirstChar<A> extends "+"|"-"',
      '    ? LastChar<A> extends "%"',
      '      ? [FirstChar<A>,CurLast<CurFirst<A>>,LastChar<A>]',
      "      : [FirstChar<A>,CurFirst<A>, '']",
      '    : LastChar<A> extends "%"',
      "      ? ['', CurLast<A>,LastChar<A>]",
      "      : ['',A,'']",
    ].join('\n'),
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/01978-medium-percentage-parser/README.ko.md',
  },
  {
    title: 'ReturnType',
    id: '00002',
    code: 'MyReturnType<T extends (...args:any[])=>any> = T extends (...args:any[])=> infer U ? U : never;',
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.ko.md',
  },
  {
    title: 'Reverse',
    id: '03192',
    code: [
      "type ReverseImplements<T extends any[], U extends any[] = []> = T['length'] extends 0 ? U :",
      'T extends [infer First, ...infer Rest] ? ReverseImplements<Rest, [First, ...U]> : never;',
      'type Reverse<T extends any[]> = ReverseImplements<T>',
    ].join('\n'),
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/03192-medium-reverse/README.md',
  },
  {
    title: 'ValidBracket',
    id: 'custom-1',
    code: [
      "type LengthOfString<S extends Readonly<string>, L extends string[] = []> = S extends '' ? L['length'] : S extends `${infer First}${infer Last}` ? LengthOfString<Last, [First,...L]> : never;",
      'type ReverseString<T extends string> = T extends `${infer First}${infer Rest}` ? `${ReverseString<Rest>}${First}` : T;',
      "type CurFirst<T extends string> = T extends `${infer First}${infer Rest}` ? Rest : '';",
      'type CurLast<T extends string> = ReverseString<CurFirst<ReverseString<T>>>;',
      '',
      'type FirstChar<T extends string> = T extends `${infer First}${infer Rest}` ?  First : T;',
      'type LastChar<T extends string> = FirstChar<ReverseString<T>>;',
      '',
      "type ValidBracketImplement<T extends string, U extends string = ''> =",
      '  LengthOfString<T> extends 0',
      '    ? LengthOfString<U> extends 0',
      '      ? true',
      '      : false',
      "    : FirstChar<T> extends ')'",
      "      ? LastChar<U> extends '('",
      '        ? ValidBracketImplement<CurFirst<T>,CurLast<U>>',
      '        : false',
      '      :ValidBracketImplement<CurFirst<T>, `${FirstChar<T>}${U}`>;',
    ].join('\n'),
    description:
      '프로그래머스 문제 중 "올바른 괄호" 문제를 타입스크립트 만으로 풀어본 문제입니다.',
    link: '',
  },
  {
    title: 'MinusOne',
    id: '02257',
    code: [
      'type MinusOne<T extends number> = T extends 0 ? -1 : ParsInt<RemoveLeadingZero<ReverseString<StringIntegerMinusOne<ReverseString<`${T}`>>>>>',
      'type StringIntegerMinusOne<T extends string> = T extends `${infer First extends number}${infer Rest}` ?',
      'First extends 0 ? `9${StringIntegerMinusOne<Rest>}` : `${[9,0,1,2,3,4,5,6,7,8][First]}${Rest}`',
      ': never;',
      'type ReverseString<S extends string> = S extends `${infer First}${infer Rest}` ? `${ReverseString<Rest>}${First}` : S;',
      'type RemoveLeadingZero<S extends string> = S extends "0" ? S : S extends `0${infer Rest}` ? RemoveLeadingZero<Rest> : S;',
      'type ParsInt<S extends string> = S extends `${infer Digit extends number}` ? Digit : never;',
    ].join('\n'),
    description: [
      '해답을 봤다.',
      '배열의 인덱스와 순서는 1 차이가 나는 점을 이용하여',
      '계산을 하는 방식이며,',
      '연산을 위해 문자열로 변환, 순서뒤집기 등의 과정이 포함되었다.',
    ].join('\n'),
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/02257-medium-minusone/README.md',
  },
  {
    title: 'Merge',
    id: '00599',
    code: [
      'type Merge<F, S> = {',
      '  [K in (keyof F)|(keyof S)] : K extends keyof F ? K extends keyof S ? S[K]: F[K] : K extends keyof S ? S[K] : never',
      '}',
    ].join('\n'),
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.ko.md',
  },
  {
    title: 'LengthOfString',
    id: '00298',
    code: "type LengthOfString<S extends Readonly<string>, L extends string[] = []> = S extends '' ? L['length'] : S extends `${infer First}${infer Last}` ? LengthOfString<Last, [First,...L]> : never;",
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.ko.md',
  },
  {
    title: 'LastOfArray',
    id: '00015',
    code: "type Last<T extends any[]> = T['length'] extends 0 ? never : T extends [infer First,...infer Rest] ? Rest['length'] extends 0 ? First : Last<Rest> : never;",
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.ko.md',
  },
  {
    title: 'Flatten',
    id: '00459',
    code: 'type Flatten<T extends any[]> = T extends [infer First, ...infer Rest] ? First extends any[] ? [...Flatten<First>, ...Flatten<Rest>]:[First, ...Flatten<Rest>]:T;',
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.ko.md',
  },
  {
    title: 'EndsWith',
    id: '02693',
    code: 'type EndsWith<T extends string, U extends string> = T extends `${infer First}${U}` ? true : false;',
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.md',
  },
  {
    title: 'Diff',
    id: '00645',
    code: [
      'type Diff<O, O1> = {',
      '  [K in Exclude<(keyof O)|(keyof O1),((keyof O)&(keyof O1))>] : K extends keyof O ? O[K] : K extends keyof O1 ?  O1[K] : never;',
      '}',
    ].join('\n'),
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.ko.md',
  },
  {
    title: 'DeepReadonly',
    id: '00009',
    code: [
      'type IsFunction<T> = T extends (..._:any[])=>any ? true : false;',
      'type DeepReadonly<T extends object> = Readonly<{[K in keyof T]: T[K] extends string|boolean ? T[K] : IsFunction<T[K]> extends true ? T[K]: DeepReadonly<Readonly<T[K]>> }>',
    ].join('\n'),
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.ko.md',
  },
  {
    title: 'Capitalize',
    id: '00110',
    code: 'type MyCapitalize<S extends string> = S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : Uppercase<S>',
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.ko.md',
  },
  {
    title: 'BEM',
    id: '03326',
    code: [
      'type BEM<B extends string, E extends string[], M extends string[]> =',
      " E['length'] extends 0",
      "   ? M['length'] extends 0",
      '     ? `${B}`',
      '     :`${B}--${M[number]}`',
      " : M['length'] extends 0",
      '   ? `${B}__${E[number]}`',
      '   : `${B}__${E[number]}--${M[number]}`;',
    ].join('\n'),
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/03326-medium-bem-style-string/README.md',
  },
  {
    title: 'AppendArgument',
    id: '00191',
    code: 'type AppendArgument<Fn extends (...args:any[])=>any, A> = Fn extends ((...args:(infer Args extends any[]))=>infer R) ? (..._:[...Args,A])=>R : never;',
    description: '',
    link: 'https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.ko.md',
  },
].map(({ code, ...rest }) => ({ ...rest, code: code.trim() }));

export { myTSChallenges };

export default myProjects;
