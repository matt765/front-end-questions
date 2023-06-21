import { ReactNode } from "react";
import { Flex, Loader } from "@mantine/core";

import { Navigation } from "./navigation/Navigation";
import { TopBar } from "./topBar/TopBar";
import useLayoutStore from "@/store/layoutStore";
import useLayout from "@/hooks/useLayout";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isNavVisible } = useLayoutStore();
  const { isRouteChanging } = useLayout();

  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      justify="flex-start"
      align="center"
      pb="2rem"
      sx={{
        // backgroundImage: "url(/bg.jpg)",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      <TopBar />
      <Flex
        mt="4.5rem"
        sx={{
          overflow: "hidden",
        }}
        w="100%"
      >
        <Flex w={isNavVisible ? "280px" : "0"} sx={{ transition: "0.2s" }}>
          <Navigation />
        </Flex>
        <Flex
          w={isNavVisible ? "87%" : "100%"}
          bg="#3B3B3B"
          sx={{
            "& main": {
              width: "100%",
            },
            transition: "0.2s",
          }}
          h="100vh"
        >
          <main>
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
    </Flex>
  );
};
