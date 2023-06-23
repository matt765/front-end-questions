import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "@/styles/globals.css";
import { Layout } from "@/components/layout/Layout";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          globalStyles: (theme) => ({
            "*, *::before, *::after": {
              boxSizing: "border-box",
              scrollbarWidth: "thin",
              scrollbarColor: "red",
              "&::-webkit-scrollbar": { width: "10px" },
              "&::-webkit-scrollbar-thumb": {
                background: "rgb(255,255,255,0.1)",
                "&:hover": { background: "rgb(255,255,255,0.1)" },
                borderRadius: "30px",
                border: "none",
              },
              "&::-webkit-scrollbar-track": { background: "transparent" },
            },
            ":root": {
              scrollbarColor: "rgb(255,255,255,0.1) rgb(255,255,255,0.05)",
              scrollbarWidth: "thin",
            },
            "::-webkit-scrollbar-corner": { background: "rgba(0,0,0,0)" },
            "::-webkit-input-placeholder": {
              color: "rgb(255,255,255,0.4) !important",
            },
            "option, optgroup": { "-webkit-appearance": "none !important" },
            body: {
              ...theme.fn.fontStyles(),
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[7]
                  : theme.white,
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.black,
              lineHeight: theme.lineHeight,
            },
            ".your-class": {
              backgroundColor: "red",
            },
            "#your-id > [data-active]": {
              backgroundColor: "pink",
            },
          }),
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
