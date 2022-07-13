import NextLlink from 'next/link';
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
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '@components/Logo';
import ThemeToggleButton from '@components/ThemeToggleButton';

const StyledLink = styled(NextLlink)`
  &:hover {
    cursor: pointer;
  }
`;
interface LinkItemProps {
  href: string;
  path: string;
  children: ReactNode | ReactNode[];
}
const LinkItem: FC<LinkItemProps> = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'white');
  return (
    <StyledLink href={href}>
      <Link
        p={2}
        bg={active ? 'red' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </StyledLink>
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
      style={{ backdropFilter: 'blur(100px)' }}
      zIndex={1}
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
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tight">
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
          <LinkItem href="/posts" path={path}>
            About
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Algorithm
          </LinkItem>
        </Stack>
        <Menu>
          <Box>
            <ThemeToggleButton />
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} />
              <MenuList>
                <StyledLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </StyledLink>
                <StyledLink href="/Projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </StyledLink>
                <StyledLink href="/Algorithm" passHref>
                  <MenuItem as={Link}>Algorithm</MenuItem>
                </StyledLink>
              </MenuList>
            </Box>
          </Box>
        </Menu>
      </Container>
    </Box>
  );
};

export default Navbar;
