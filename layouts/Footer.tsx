import { Box, Text, Link, Code } from '@chakra-ui/react';
import NextLink from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';

const Footer = () => (
  <Box
    textAlign="center"
    justifyContent="center"
    fontSize="lg"
    mt="24"
    pt="8"
    borderTop="1px"
    pb="8"
  >
    <Text>본 페이지는 상업적 목적이 아닌</Text>
    <Text> 개인 포트폴리오 공개용이며</Text>
    <Text>코드는 깃허브에 모두 공개되어 있습니다.</Text>
    <Text>
      <Code pt="1" pb="0.5">
        NextJS
      </Code>{' '}
      <Code pt="1" pb="0.5">
        Typescript
      </Code>{' '}
      <Code pt="1" pb="0.5">
        @chakra-ui
      </Code>{' '}
      로 제작되었습니다.
    </Text>
    <NextLink
      href="https://github.com/cy3589/new-port-folio"
      passHref
      scroll={false}
      target="_blank"
    >
      <Link
        href="https://github.com/cy3589/new-port-folio"
        justifyContent="center"
        target="_blank"
        p={1}
      >
        <Box position="relative">
          <IoLogoGithub
            size={48}
            style={{
              top: '50%',
              left: '50%',
              position: 'absolute',
              transform: 'translate(-50%,-50%)',
              marginTop: 12,
            }}
          />
        </Box>
      </Link>
    </NextLink>
  </Box>
);

export default Footer;
