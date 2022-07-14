import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import ProfileImage from '@public/profile-image.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
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
  <Link href="/" scroll={false}>
    <LogoBox>
      <Image src={ProfileImage} width={36} height={36} alt="logo" />
      <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontFamily='M PLUS Rounded 1c", sans-serif'
        fontWeight="bold"
        ml={3}
      >
        Chanyeong Jung
      </Text>
    </LogoBox>
  </Link>
);
export default Logo;
