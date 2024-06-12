import NextApp, { AppProps, AppContext } from "next/app";
import Head from "next/head";
import { getCookie } from "cookies-next";
import { ThemeProvider } from "next-themes";

import { Layout } from "@/components/layout/Layout";
import "../styles/globals.scss";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};
