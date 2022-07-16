import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  useColorModeValue,
  MenuList,
  LinkProps,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5';

import Logo from '@components/Logo';
import ThemeToggleButton from '@components/ThemeToggleButton';

const StyledLink = styled(NextLink)`
  &:hover {
    cursor: pointer;
  }
`;
interface LinkItemProps {
  href: string;
  path: string;
  children: ReactNode | ReactNode[];
}
const LinkItem: FC<LinkItemProps & LinkProps> = ({
  href,
  path,
  target,
  children,
  ...props
}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        _focus={{ boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6);' }}
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props: any) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#FFFFFF40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex mr={5} alignItems="center">
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/algorithm" path={path}>
            Algorithm
          </LinkItem>
          <LinkItem
            href="https://github.com/cy3589"
            target="_blank"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            rel="noreferrer"
          >
            <IoLogoGithub />
            Git
          </LinkItem>
        </Stack>
        <Menu>
          <Box>
            <ThemeToggleButton />
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <NextLink href="/" passHref>
                    <MenuItem as={Link}>About</MenuItem>
                  </NextLink>
                  <StyledLink href="/projects" passHref>
                    <MenuItem as={Link}>Projects</MenuItem>
                  </StyledLink>
                  <StyledLink href="/algorithm" passHref>
                    <MenuItem as={Link}>Algorithm</MenuItem>
                  </StyledLink>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Menu>
      </Container>
    </Box>
  );
};

export default Navbar;
