import Head from 'next/head';

import './globals.css';

//i18n
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <Head>
          <title>Painter</title>

          {/* Facebook Meta Tags */}

          {/*Twitter Meta Tags */}
        </Head>

        <Component {...pageProps} />
      </div>
    </I18nextProvider>
  );
}

export default App;
