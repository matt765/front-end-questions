import { Metadata } from "next";
import type { Viewport } from "next";

import "../styles/globals.scss";
import { Providers } from "@/services/Providers";
import { firaSans } from "@/assets/fonts/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaSans.className}`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Front-End Questions",
  description: "Open source base of front-end related interview questions.",
};
