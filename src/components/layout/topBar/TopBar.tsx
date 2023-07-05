import {
  Box,
  Flex,
  Text,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";

import { GithubIcon } from "@/assets/icons/GithubIcon";
import { SunIcon } from "@/assets/icons/SunIcon";
import useLayoutStore from "@/store/layoutStore";
import { MoonIcon } from "@/assets/icons/MoonIcon";

export const TopBar = () => {
  const { toggleNavVisibility } = useLayoutStore();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <Flex
      justify="space-between"
      align="center"
      h="4.5rem"
      sx={{
        color: "white",
        position: "fixed",
        zIndex: 2,
        borderWidth: "0 0 1px 0",
        borderColor: theme.colors.content[8],
        borderStyle: "solid",
      }}
      top="0"
      left="0"
      w="100%"
      bg="bg.0"
      pl="1rem"
      pr="2rem"
    >
      <Flex h="100%" align="center" justify="center">
        <Flex
          direction="column"
          w="2rem"
          h="100%"
          gap="0.3rem"
          align="center"
          justify="center"
          sx={{
            cursor: "pointer",
          }}
          mr="1rem"
          pt="0.2rem"
          onClick={toggleNavVisibility}
        >
          <Box
            sx={{
              width: "1.4rem",
              height: "2px",
              backgroundColor: theme.colors.content[3],
            }}
          />
          <Box
            sx={{
              width: "1.4rem",
              height: "2px",
              backgroundColor: theme.colors.content[3],
            }}
          />
          <Box
            sx={{
              width: "1.4rem",
              height: "2px",
              backgroundColor: theme.colors.content[3],
            }}
          />
        </Flex>
        <Link href="/" style={{ textDecoration: "none", display: "flex" }}>
          <Text
            mr="0.6rem"
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "1.8rem",
              color: "white",
            }}
          >
            Front-End
          </Text>
          <Text
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "1.8rem",
              color: theme.colors.content[2],
            }}
          >
            Questions
          </Text>
        </Link>
      </Flex>
      <Flex gap="1.5rem" mr="0rem">
        <Tooltip
          label="Switch color mode"
          sx={{
            marginTop: "0.5rem",
            marginLeft: "-2rem",
            backgroundColor: theme.colors.bg[1],
            color: theme.colors.content[0],
          }}
        >
          <Flex
            sx={{
              "& path": {
                fill: "white",
              },
              cursor: "pointer",
            }}
            onClick={() => toggleColorScheme()}
          >
            {colorScheme === "dark" ? <MoonIcon /> : <SunIcon />}
          </Flex>
        </Tooltip>

        <Tooltip
          label="Github Repository"
          sx={{
            marginTop: "0.5rem",
            marginLeft: "-2rem",
            backgroundColor: theme.colors.bg[2],
            color: theme.colors.content[0],
          }}
        >
          <Link
            href="https://github.com/matt765/front-end-questions"
            target="_blank"
          >
            <Flex
              sx={{
                "& svg": {
                  fill: "white",
                },
              }}
            >
              <GithubIcon />
            </Flex>
          </Link>
        </Tooltip>
      </Flex>
    </Flex>
  );
};
