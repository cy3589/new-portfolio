import styled from '@emotion/styled';
import ProfileImage from '@public/profile-image.jpg';
import Image from 'next/image';
import Link from 'next/link';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  & img {
    transition: 0.3s;
    border-radius: 10px;
  }
  &:hover img {
    transform: rotate(20deg);
    cursor: pointer;
  }
`;

const Logo = () => (
  <Link passHref href="/">
    <LogoBox>
      <Image src={ProfileImage} width={20} height={20} />
    </LogoBox>
  </Link>
);
export default Logo;
