import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta name="description" content="Portfolio de Tony Dugué" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon assets */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
