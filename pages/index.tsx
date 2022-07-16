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

const Home: NextPage = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        bg="#a0a0a0"
        p={3}
        mb={6}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        Hi, I'm Junior FrontEnd Developer
      </Box>
      <Layout>
        <Box display="-ms-flexbox">
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Chad
            </Heading>
            <Box>Phone: 010-2102-3589</Box>
            <Box>Email: jcy3589@gmail.com</Box>
          </Box>
        </Box>
        <Box>
          <Heading as="h3" variant="section-title">
            Introduce
          </Heading>
          <Box alignItems="center" my={4}>
            <Text>안녕하세요! 저는 웹 프론트 엔드 개발자입니다</Text>
          </Box>
          <UnorderedList ml={4} my={4}>
            <ListItem>
              평소에 무언가 만드는 것을 좋아하며 "왜?" 라는 질문을 자주
              던집니다. 방대한 자료가 존재하며 질문과 답변이 활발한 IT 분야에
              매력를 느껴 공부하기 시작했습니다.
            </ListItem>
            <ListItem>
              최신 기술에 관심이 많습니다. 최신 기술이 나오면 기존 기술과 무엇이
              다르며, 어떤 문제를 해결하기 위해 나온 것인지 답을 찾고 적용해
              보는 것을 좋아합니다.
            </ListItem>
            <ListItem>
              질문과 답변, 협업을 좋아합니다. 질문을 통해 문제를 해결할 수 있고,
              답변을 통해 내가 알고있는 지식의 깊이를 재확인 할 수 있다고
              생각합니다. 질문과 답변으로 서로 성장하고, 협업으로 하나의
              프로젝트를 완성해 나가는 과정이 아름답다고 생각하고 있습니다.
            </ListItem>
            <ListItem>
              항상 배우는 자세로 어제보다 더 나은 개발자가 되겠습니다.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <UnorderedList ml={4} my={4}>
            <ListItem>
              <Highlight value="React" />를 이용한 SPA 제작이 가능합니다.
            </ListItem>
            <ListItem>
              <Highlight value="spotlight" />를 이용한 SPA 제작과 서버사이드
              데이터페칭이 가능합니다.
            </ListItem>
            <ListItem>
              <Highlight value="Redux" />를 이용하여 전역 상태를 관리할 수
              있습니다.
            </ListItem>
            <ListItem>
              <Highlight value="React-Query" />를 이용하여 서버와의 연결상태를
              관리하고 상태에 렌더를 구현할 수 있습니다.
            </ListItem>
            <ListItem>
              <Highlight value="Emotion" />을 이용하여 컴포넌트 별 스타일을
              관리할 수 있습니다.
            </ListItem>
            <ListItem>
              <Highlight value="JavaScript" /> 내장 메서드를 이용한 연산과 DOM
              객체의 제어가 가능합니다.
            </ListItem>
            <ListItem>
              <Highlight value="Typescript" />를 이용하여 개발 시 타입을 적용할
              수 있습니다.
            </ListItem>
            <ListItem>
              <Highlight value="NodeJS" />와 <Highlight value="Express" />를
              이용하여 간단한 백엔드 서버를 구축할 수 있습니다.
            </ListItem>
          </UnorderedList>
          <Heading as="h3" variant="secondary-title" boxShadow="2xl">
            <Text>Main Skills</Text>
          </Heading>
          <Box>{/* <Image /> */}</Box>
        </Box>
        <Box>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Box alignItems="center" my={4}>
            <Text>Hello World</Text>
          </Box>
          <Paragraph>
            Takuya is a freelance and a full-stack developer based in Osaka with
            a passion for building digital services/stuff he wants. Takuya is a
            freelance and a full-stack developer based in Osaka with a passion
            for building digital services/stuff he wants. Takuya is a freelance
            and a full-stack developer based in Osaka with a passion for
            building digital services/stuff he wants. Takuya is a freelance and
            a full-stack developer based in Osaka with a passion for building
            digital services/stuff he wants. Takuya is a freelance and a
            full-stack developer based in Osaka with a passion for building
            digital services/stuff he wants.
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
            Takuya is a freelance and a full-stack developer based in Osaka with
            a passion for building digital services/stuff he wants. Takuya is a
            freelance and a full-stack developer based in Osaka with a passion
            for building digital services/stuff he wants. Takuya is a freelance
            and a full-stack developer based in Osaka with a passion for
            building digital services/stuff he wants. Takuya is a freelance and
            a full-stack developer based in Osaka with a passion for building
            digital services/stuff he wants. Takuya is a freelance and a
            full-stack developer based in Osaka with a passion for building
            digital services/stuff he wants.
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

export default Home;
