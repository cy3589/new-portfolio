import type { NextPage } from 'next';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Button,
  Text,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import Layout from '@layouts/Layout';
import Paragraph from '@components/styled/P';
import Highlight from '@components/styled/Highlight';
import Image from 'next/image';
import { useMemo } from 'react';
import MainSimpleInfo from '@components/Main/MainSimpleInfo';
import PersonalInfo from '@components/Main/PersonalInfo';
import Introduce from '@components/Main/Introduce';
import Skill from '@components/Main/Skill';

export interface Skills {
  isHighlight: boolean;
  data: string;
}
interface BasicIntroData {
  mainSimpleInfo: string;
  name: string;
  simpleInfo: string;
  phone: string;
  email: string;
  introduces?: string[];
  skill?: {
    skills: Skills[][];
    mainSkillImages?: string[];
  };
}
const myIntroData: BasicIntroData = {
  mainSimpleInfo: "Hi, I'm Junior FrontEnd Developer",
  name: 'Chad',
  phone: '010-2102-3589',
  email: 'jcy3589@gmail.com',
  simpleInfo: '안녕하세요! 저는 웹 프론트 엔드 개발자입니다',
  introduces: [
    `평소에 무언가 만드는 것을 좋아하며 "왜?" 라는 질문을 자주
  던집니다. 방대한 자료가 존재하며 질문과 답변이 활발한 IT 분야에
  매력를 느껴 공부하기 시작했습니다.`,
    `최신 기술에 관심이 많습니다. 최신 기술이 나오면 기존 기술과 무엇이
다르며, 어떤 문제를 해결하기 위해 나온 것인지 답을 찾고 적용해
보는 것을 좋아합니다.`,
    `질문과 답변, 협업을 좋아합니다. 질문을 통해 문제를 해결할 수 있고,
답변을 통해 내가 알고있는 지식의 깊이를 재확인 할 수 있다고
생각합니다. 질문과 답변으로 서로 성장하고, 협업으로 하나의
프로젝트를 완성해 나가는 과정이 개발의 재미라고 생각합니다.`,
    `항상 배우는 자세로 어제보다 더 나은 개발자가 되겠습니다.`,
  ],
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
          data: '를 이용하여 서버와의 연결상태를 관리하고 상태에 렌더를 구현할 수 있습니다.',
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
    ],
  },
};

const Home: NextPage = () => {
  const { mainSimpleInfo, name, phone, email, simpleInfo, introduces, skill } =
    useMemo(() => myIntroData, []);
  return (
    <Layout>
      <Container>
        <MainSimpleInfo mainSimpleInfo={mainSimpleInfo} />
        <Layout>
          <PersonalInfo name={name} phone={phone} email={email} />
          <Introduce simpleInfo={simpleInfo} introduces={introduces} />
          <Skill skill={skill} />
          <Box>
            <Heading as="h3" variant="section-title">
              Work
            </Heading>
            <Box alignItems="center" my={4}>
              <Text>Hello World</Text>
            </Box>
            <Paragraph>
              Takuya is a freelance and a full-stack developer based in Osaka
              with a passion for building digital services/stuff he wants.
              Takuya is a freelance and a full-stack developer based in Osaka
              with a passion for building digital services/stuff he wants.
              Takuya is a freelance and a full-stack developer based in Osaka
              with a passion for building digital services/stuff he wants.
              Takuya is a freelance and a full-stack developer based in Osaka
              with a passion for building digital services/stuff he wants.
              Takuya is a freelance and a full-stack developer based in Osaka
              with a passion for building digital services/stuff he wants.
            </Paragraph>
            <Box textAlign="center" justifyContent="center" my={4}>
              <NextLink href="/projects" passHref scroll={false}>
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  PortFolio
                </Button>
              </NextLink>
            </Box>
          </Box>
          <Box>
            <Heading as="h3" variant="section-title">
              Work
            </Heading>
            <Box alignItems="center" my={4}>
              <Text>Hello World</Text>
            </Box>
            <Paragraph>
              Takuya is a freelance and a full-stack developer based in Osaka
              with a passion for building digital services/stuff he wants.
              Takuya is a freelance and a full-stack developer based in Osaka
              with a passion for building digital services/stuff he wants.
              Takuya is a freelance and a full-stack developer based in Osaka
              with a passion for building digital services/stuff he wants.
              Takuya is a freelance and a full-stack developer based in Osaka
              with a passion for building digital services/stuff he wants.
              Takuya is a freelance and a full-stack developer based in Osaka
              with a passion for building digital services/stuff he wants.
            </Paragraph>
            <Box textAlign="center" justifyContent="center" my={4}>
              <NextLink href="/projects" passHref scroll={false}>
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My PortFolio
                </Button>
              </NextLink>
            </Box>
          </Box>
        </Layout>
      </Container>
    </Layout>
  );
};

export default Home;
