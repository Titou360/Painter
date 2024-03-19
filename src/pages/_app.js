import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>test Painter</title>
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default App;
