import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>App Title</title>
        <meta name='description' content='Advanced Concepts' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
