import { FC, ReactNode } from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface TitleProps {
  children?: ReactNode | ReactNode[];
  title: string;
  url: string;
}
const Title: FC<TitleProps> = ({ children, title, url }) => (
  <Box>
    <NextLink href={url} passHref>
      <Link href={url}>{title}</Link>
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
