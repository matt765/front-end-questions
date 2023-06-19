import { firaSans, inter } from "@/utils/fonts";
import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <body className={inter.className}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
