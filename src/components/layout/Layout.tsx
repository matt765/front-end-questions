import { ReactNode } from "react";
import { Flex, Loader, useMantineTheme } from "@mantine/core";

import { Navigation } from "./navigation/Navigation";
import { TopBar } from "./topBar/TopBar";
import useLayoutStore from "@/store/layoutStore";
import { useLayout } from "@/hooks/useLayout";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isNavVisible } = useLayoutStore();
  const { isRouteChanging } = useLayout();
  const theme = useMantineTheme();

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
          bg="bg.3"
          sx={{
            borderColor: theme.colors.content[8],
            borderWidth: "0 0 0 1px",
            borderStyle: "solid",
            "& main": {
              width: "100%",
            },
            transition: "0.2s width",
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
