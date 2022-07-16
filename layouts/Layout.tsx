import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { motion, Transition, Variants } from 'framer-motion';

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
  const myTitle = `${title} - Chad`;
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
        {title && (
          <Head>
            <title>{myTitle}</title>
            <meta name="twitter:title" content={myTitle} />
            <meta property="og:title" content={myTitle} />
          </Head>
        )}
        {children}
      </>
    </motion.article>
  );
};

export default Layout;
