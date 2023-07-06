import { Flex, UnstyledButton, useMantineTheme } from "@mantine/core";
import { RefObject } from "react";

import { ArrowDownDouble } from "@/assets/icons/ArrowDownDouble";
import { ArrowRight } from "@/assets/icons/ArrowRightIcon";
import { ArrowUpDuble } from "@/assets/icons/ArrowUpDouble";
import { ArrowUp } from "@/assets/icons/ArrowUpIcon";
import { ArrowDown } from "@/assets/icons/ArrowDownIcon";

interface ArrowNavigationProps {
  questionListRef: RefObject<HTMLDivElement>;
}

export const ArrowNavigation = ({ questionListRef }: ArrowNavigationProps) => {
  const scrollUp = () => {
    if (questionListRef.current) {
      questionListRef.current.scrollBy(0, -window.innerHeight * 0.9);
    }
  };

  const scrollDown = () => {
    if (questionListRef.current) {
      questionListRef.current.scrollBy(0, window.innerHeight * 0.9);
    }
  };
  const scrollTop = () => {
    if (questionListRef.current) {
      questionListRef.current.scrollTo(0, 0);
    }
  };

  const scrollBottom = () => {
    if (questionListRef.current) {
      questionListRef.current.scrollTo(0, questionListRef.current.scrollHeight);
    }
  };

  const theme = useMantineTheme();

  return (
    <Flex
      sx={{
        position: "fixed",
        right: "2rem",
        top: "0",
        height: "100%",
        justifyContent: "center",
        gap: "0rem",
        transition: "0.2s",
        "& svg": {
          fill: theme.colors.icons[0],
          height: "60px !important",
          width: "60px !important",
          transition: "0.2s",
          "&:hover": {
            fill: theme.colors.icons[1],
          },
        },
        "@media (max-width: 110em)": {
          right: "1rem",
        },
        "@media (max-width: 80em)": {
          right: "0.6rem",
        },
        "@media (max-width: 67.5em)": {
          display: "none"
        },
      }}
      direction="column"
    >
      <UnstyledButton onClick={scrollTop}>
        <ArrowUpDuble />
      </UnstyledButton>
      <UnstyledButton onClick={scrollUp}>
        <ArrowUp />
      </UnstyledButton>
      <UnstyledButton onClick={scrollDown}>
        <ArrowDown />
      </UnstyledButton>
      <UnstyledButton onClick={scrollBottom}>
        <ArrowDownDouble />
      </UnstyledButton>
    </Flex>
  );
};
