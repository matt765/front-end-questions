import { GithubIcon } from "@/assets/icons/GithubIcon";
import { SunIcon } from "@/assets/icons/SunIcon";
import useLayoutStore from "@/store/layoutStore";
import { Box, Flex, Text } from "@mantine/core";
import Link from "next/link";

export const TopBar = () => {
  const { toggleNavVisibility } = useLayoutStore();

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
        borderColor: "rgb(255,255,255,0.1)",
        borderStyle: "solid",
      }}
      top="0"
      left="0"
      w="100%"
      bg="rgb(48,48,48)"
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
              backgroundColor: "rgb(255,255,255,0.5)",
            }}
          />
          <Box
            sx={{
              width: "1.4rem",
              height: "2px",
              backgroundColor: "rgb(255,255,255,0.5)",
            }}
          />
          <Box
            sx={{
              width: "1.4rem",
              height: "2px",
              backgroundColor: "rgb(255,255,255,0.5)",
            }}
          />
        </Flex>
        <Text
          mr="0.6rem"
          sx={{
            textTransform: "uppercase",
            fontWeight: 600,
            fontSize: "1.8rem",
          }}
        >
          Front-End
        </Text>
        <Text
          sx={{
            textTransform: "uppercase",
            fontWeight: 600,
            fontSize: "1.8rem",
            color: "rgb(139,135,251)",
          }}
        >
          Questions
        </Text>
      </Flex>
      <Flex gap="1rem">
        <Flex
          sx={{
            "& path": {
              fill: "white",
            },
          }}
        >
          <SunIcon />
        </Flex>
        <Link
          href="https://github.com/matt765/front-end-questions"
          target="_blank"
        >
          {" "}
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
      </Flex>
    </Flex>
  );
};
