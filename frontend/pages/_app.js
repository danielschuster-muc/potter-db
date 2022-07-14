import Head from "next/head";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#37474f" />
        <meta name="revisit-after" content="7 days" />
        <meta name="msapplication-TileColor" content="da532c" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
