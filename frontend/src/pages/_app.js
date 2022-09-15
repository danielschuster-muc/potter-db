import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#37474f" />
        <meta name="revisit-after" content="7 days" />
        <meta name="msapplication-TileColor" content="da532c" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default App;
