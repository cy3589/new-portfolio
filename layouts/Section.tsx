import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface SectionProps {
  children?: ReactNode | ReactNode[];
  delay?: number;
  duration?: number;
}
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === 'transition',
});

const Section: FC<SectionProps> = ({ children, duration = 0.8, delay = 0 }) => (
  <ChakraBox
    // @ts-ignore no problem in operation, although type error appears.
    transition={{
      duration,
      // repeat: Infinity,
      repeatType: 'loop',
      delay,
    }}
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 10, opacity: 0 }}
    mb={6}
  >
    {children}
  </ChakraBox>
);

export default Section;
