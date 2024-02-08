import { ReactNode, useEffect, useState } from "react";
import { Flex, Loader, useMantineTheme } from "@mantine/core";

import { Navigation } from "./navigation/Navigation";
import { TopBar } from "./topBar/TopBar";
import useLayoutStore from "@/store/layoutStore";
import { useLayout } from "@/hooks/useLayout";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isRouteChanging } = useLayout();
  const theme = useMantineTheme();
  const { isNavVisible, isMobileFirstLoad, setMobileFirstLoad } =
    useLayoutStore();

  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      justify="flex-start"
      align="center"
      pb="2rem"
      sx={{
        overflow: "hidden",
        backgroundColor: theme.colors.bg[3],
      }}
    >
      <TopBar />
      <Flex
        mt="4.5rem"
        sx={{
          overflow: "hidden",
          "@media (max-width: 50em)": {
            marginTop: "3rem",
          },
        }}
        w="100%"
      >
        <Flex
          w={isNavVisible ? "280px" : "0"}
          style={{ zIndex: 9999 }}
          sx={{
            transition: "0.2s",
            "@media (max-width: 67.5em)": {
              position: "fixed",
              top: "4.5rem",
              left: "0",
              width: !isNavVisible && isMobileFirstLoad ? "280px" : "0",
            },
            "@media (max-width: 26em)": {
              width: !isNavVisible && isMobileFirstLoad ? "100vw" : "0",
            },
          }}
        >
          <Navigation />
        </Flex>
        <Flex
          w={isNavVisible ? "87%" : "100%"}
          bg="bg.3"
          sx={{
            borderColor: theme.colors.content[8],
            borderWidth: "0 0 0 0px",
            borderStyle: "solid",
            "& main": {
              width: "100%",
            },
            transition: "0.2s width",
            "@media (max-width: 67.5em)": {
              width: "100%",
            },
            overflowX: "hidden",
          }}
          h="100vh"
        >
          <main>
            {!isNavVisible && (
              <Flex
                style={{ zIndex: 99 }}
                sx={{
                  position: "fixed",
                  top: "4.5rem",
                  width: "100%",
                  backgroundColor: "rgba(49, 48, 48, 0.58)",
                  height: "100%",
                  "@media (min-width: 67.5em)": {
                    display: "none",
                  },
                  "@media (max-width: 26em)": {
                    display: "none",
                  },
                }}
              />
            )}
            {isRouteChanging ? (
              <Flex w="95%" h="90%" justify="center" align="center">
                <Loader />
              </Flex>
            ) : (
              children
            )}
          </main>
        </Flex>
      </Flex>
      <Flex
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex
          sx={{
            width: "50rem",
            height: "25rem",
            backgroundColor: "rgba(49, 48, 48)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "2rem",
            flexDirection: "column",
            padding: "5%",
            borderRadius: "10px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgb(255,255,255,0.1)",
          }}
        >
          This application is currently in maintenance mode.
          <Flex sx={{ fontSize: "1.4rem", marginTop: "2rem" }}>
            Both questions and answers need to be refactored and restructured.
            There will be also new functionalities soon
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
