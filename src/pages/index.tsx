import MainLayout from '@/components/layouts/main-layout/MainLayout';
import { NextPageWithLayout } from '@/libs/types/page';

import styled from 'styled-components';
import tw from 'twin.macro';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Text>Exemple 1</Text>
      <TextSecond>Exemple 2</TextSecond>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

const Text = tw.div`text-sky-500`;

const TextSecond = styled.p`
  color: yellow;
  ${tw`bg-red-300`}
`;
