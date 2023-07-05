import NextApp, { AppProps, AppContext } from "next/app";
import Head from "next/head";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { getCookie, setCookie } from "cookies-next";
import { useState } from "react";

import { Layout } from "@/components/layout/Layout";
import { globalStyles } from "@/theme/globalStyles";
import {
  darkBgColors,
  darkContentColors,
  darkIconColors,
} from "@/theme/darkTheme";
import {
  lightBgColors,
  lightContentColors,
  lightIconColors,
} from "@/theme/lightTheme";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    // @ts-ignore
    props.colorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            globalStyles: globalStyles,
            colors: {
              // @ts-ignore
              bg: colorScheme === "dark" ? darkBgColors : lightBgColors,
              // @ts-ignore
              content:
                colorScheme === "dark" ? darkContentColors : lightContentColors,
              // @ts-ignore
              icons: colorScheme === "dark" ? darkIconColors : lightIconColors,
            },
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie("mantine-color-scheme", appContext.ctx) || "dark",
  };
};
