import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
interface Section {
  children?: ReactNode | ReactNode[];
  delay?: number;
  duration?: number;
}
const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === 'transition',
});

const Section: FC<Section> = ({ children, duration = 0.8, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transitionDuration={`${duration}s`}
    transitionDelay={`${delay}s`}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
