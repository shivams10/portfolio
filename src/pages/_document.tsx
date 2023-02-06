import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=DM+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gradient-to-r from-indigo-500 via-indigo-500 to-purple-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
