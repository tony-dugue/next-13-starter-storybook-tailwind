import Head from 'next/head';
import Footer from '@/components/common/footer/Footer';
import Header from '@/components/common/header/Header';

export interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Main Layout</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center">
        <Header />
        <main>{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
