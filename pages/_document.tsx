import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import theme from '@utils/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Chad's portfolio" />
          <meta name="author" content="Chad" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta name="twitter:title" content="Chad" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Chad" />
          <meta name="og:title" content="Chad" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
