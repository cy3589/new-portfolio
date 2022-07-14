import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const variants: Variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};
interface LayoutProps {
  children?: ReactNode | ReactNode[];
  title?: string;
}
const Layout: FC<LayoutProps> = ({ children, title }) => {
  const myTitle = `${title} - Chad`;
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
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
