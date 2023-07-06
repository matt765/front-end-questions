import {
  Box,
  Drawer,
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
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export const TopBar = () => {
  const { toggleNavVisibility } = useLayoutStore();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

  const { isMobileFirstLoad, setMobileFirstLoad } = useLayoutStore();

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
        "@media (max-width: 40em)": {
          paddingLeft: "0.7rem",
          paddingRight: "1rem",
        },
      }}
      top="0"
      left="0"
      w="100%"
      bg="bg.0"
      pl="1rem"
      pr="2rem"
    >
      <Drawer opened={opened} onClose={close} title="Authentication">
        234234
      </Drawer>
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

            "&:hover": {
              "& div": {
                backgroundColor: theme.colors.content[4],
              },
            },
            "& div": {
              transition: "0.2s",
              width: "1.4rem",
              height: "2px",
              backgroundColor: theme.colors.content[3],
            },
            "@media (max-width: 40em)": {
              marginRight: "0.6em",
            },
            "@media (max-width: 25em)": {
              justifyContent: "flex-start",
              marginTop: "3.1rem",
              "& div": {
                width: "1.2rem",
                height: "2px",
                backgroundColor: theme.colors.content[3],
              },
            },
          }}
          mr="1rem"
          pt="0.2rem"
          onClick={() => {
            toggleNavVisibility();
            setMobileFirstLoad(true);
          }}
        >
          <Box />
          <Box />
          <Box />
        </Flex>
        <Link href="/" style={{ textDecoration: "none", display: "flex" }}>
          <Text
            mr="0.6rem"
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "1.8rem",
              color: "white",
              "@media (max-width: 50em)": {
                fontSize: "1.5rem",
              },
              "@media (max-width: 40em)": {
                fontSize: "1.3rem",
              },
              "@media (max-width: 25em)": {
                fontSize: "1.1rem",
                marginRight: "0.4rem",
              },
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
              "@media (max-width: 50em)": {
                fontSize: "1.5rem",
              },
              "@media (max-width: 40em)": {
                fontSize: "1.3em",
              },
              "@media (max-width: 25em)": {
                fontSize: "1.1rem",
                marginRight: "0.4rem",
              },
            }}
          >
            Questions
          </Text>
        </Link>
      </Flex>
      <Flex
        gap="1.5rem"
        mr="0rem"
        sx={{
          "& svg": {
            "&:hover": {
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            },
          },
          "@media (max-width: 40em)": {
            gap: "0.8rem",
            "& svg": {
              maxWidth: "25px",
            },
          },
        }}
      >
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
              transition: "0.2s",
              "&:hover": {
                transform: "scale(1.15)"
              },
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
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.15)"
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
