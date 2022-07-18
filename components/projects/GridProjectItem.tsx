import { Box, Code, Link, LinkBox } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { GridProjectItemProps } from '@typings/project';
import Image from 'next/image';
import NextLink from 'next/link';
import { FC } from 'react';

const SkillImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 100%;
  height: 100%;
  position: relative;
`;

const GridProjectItem: FC<GridProjectItemProps> = ({
  thumbNailSrc,
  thumbNailAlt,
  title,
  id,
}: GridProjectItemProps) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/projects/${id}`}>
      <Link href={`/projects/${id}`}>
        <LinkBox _hover={{ transform: 'scale(1.1)' }} transition="0.3s ease">
          <SkillImageWrapper>
            <Image
              src={thumbNailSrc}
              alt={thumbNailAlt ?? title ?? thumbNailSrc}
              style={{ borderRadius: '12px' }}
              loading="lazy"
              objectFit="cover"
              layout="fill"
              unoptimized
            />
          </SkillImageWrapper>
          <Code fontSize={14} mt={4}>
            {title}
          </Code>
        </LinkBox>
      </Link>
    </NextLink>
  </Box>
);

export default GridProjectItem;
