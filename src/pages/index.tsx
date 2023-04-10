import Head from 'next/head';
import tw from 'tailwind-styled-components';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Portfolio de Tony Dugué" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Create Next App</title>
      </Head>
      <main>
        <Title>Hello !</Title>
      </main>
    </>
  );
}

const Title = tw.h1`bg-gradient-to-r from-red-500 to-blue-500`;
