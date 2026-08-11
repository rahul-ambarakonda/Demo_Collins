
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
