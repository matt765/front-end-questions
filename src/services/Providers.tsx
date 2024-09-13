"use client";

import { ThemeProvider } from "next-themes";

import { Layout } from "@/components/layout/Layout";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme="charcoal"
      disableTransitionOnChange
    >
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};
