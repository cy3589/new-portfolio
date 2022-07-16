import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC, ReactNode } from 'react';
interface TitleProps {
  children?: ReactNode | ReactNode[];
}
const Title: FC<TitleProps> = ({ children }) => (
  <Box>
    <NextLink href="/projects" passHref>
      <Link>Projects</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export default Title;
