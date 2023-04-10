import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from '@/libs/types/page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default App;
