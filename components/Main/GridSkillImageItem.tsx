import { Badge, Box, LinkBox } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { MainSkillImage } from '@typings/skill';

const SkillImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 100%;
  height: 100%;
  position: relative;
`;

const GridSkillImageItem = ({ src, title }: MainSkillImage) => (
  <Box w="100%" textAlign="center">
    <LinkBox _hover={{ transform: 'scale(1.1)' }} transition="0.3s ease">
      <SkillImageWrapper>
        <Image
          src={src}
          alt={title ?? 'skill-image'}
          style={{ borderRadius: '12px' }}
          loading="lazy"
          objectFit="cover"
          layout="fill"
          unoptimized
        />
      </SkillImageWrapper>
      <Badge fontSize={14} mt={4}>
        {title}
      </Badge>
    </LinkBox>
  </Box>
);
export default GridSkillImageItem;
