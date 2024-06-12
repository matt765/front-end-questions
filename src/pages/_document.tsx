import { firaSans, inter } from "@/utils/fonts";

import Document, { Head, Html, Main, NextScript } from "next/document";

export default class _Document extends Document {
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
