import { Text, useColorModeValue, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { FC } from 'react';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 8px;
  cursor: pointer;
  & img {
    transition: 0.3s;
    border-radius: 50%;
  }
  &:hover img {
    transform: rotate(-30deg);
    cursor: pointer;
  }
`;

const Logo: FC = () => (
  <NextLink href="/" scroll={false}>
    <LogoBox>
      <Image
        src="/profile-image.png"
        style={{ width: '24px', height: '24px' }}
        alt="logo"
        mr="4px"
      />
      <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontFamily='M PLUS Rounded 1c", sans-serif'
        fontWeight="bold"
        ml={3}
      >
        Chanyeong Jung
      </Text>
    </LogoBox>
  </NextLink>
);
export default Logo;
