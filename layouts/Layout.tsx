import { FC, ReactNode } from 'react';
import { motion, Transition } from 'framer-motion';
import { NextSeo } from 'next-seo';

interface LayoutProps {
  children?: ReactNode | ReactNode[];
  title?: string;
  duration?: number;
}
const Layout: FC<LayoutProps & Transition> = ({
  children,
  title,
  duration = 0.4,
  ...transitionProps
}) => {
  const myTitle = title ? `${title} - Chad` : "Chad's Portfolio";
  return (
    <motion.article
      initial={{ opacity: 0, x: 0, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 0, y: -20 }}
      // @ts-ignore
      transition={{ ...transitionProps, duration, delay: 0 }}
      style={{ position: 'relative' }}
    >
      <>
        {title && <NextSeo openGraph={{ title: myTitle }} />}
        {children}
      </>
    </motion.article>
  );
};

export default Layout;
