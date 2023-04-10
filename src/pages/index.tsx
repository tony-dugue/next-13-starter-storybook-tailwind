import MainLayout from '@/components/layouts/main-layout/MainLayout';
import { NextPageWithLayout } from '@/libs/types/page';


const Home: NextPageWithLayout = () => {
  return (
    <p>content example</p>
  );
}

export default Home;

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}
