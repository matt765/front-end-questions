import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { ArrowRight } from "@/assets/icons/ArrowRightIcon";
import { Tech, useQuestionStore } from "@/store/questionStore";
import { firaSans } from "@/utils/fonts";
import { questionIds } from "@/utils/openAll";
import { Flex, Text, UnstyledButton, useMantineTheme } from "@mantine/core";
import { NavigationOption } from "./NavigationOption";

interface NavigationButtonProps {
  tech: Tech;
  href: string;
}

export const NavigationButton = ({ tech, href }: NavigationButtonProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  const [isOpen, setIsOpen] = useState(false);
  const theme = useMantineTheme();
  const resetCheckboxes = useQuestionStore((state) => state.resetCheckboxes);
  const addAllQuestionIds = useQuestionStore(
    (state) => state.addAllQuestionIds
  );
  const removeAllQuestionIds = useQuestionStore(
    (state) => state.removeAllQuestionIds
  );

  const handleClick = (e: React.MouseEvent) => {
    if (isActive) {
      e.preventDefault();
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <Flex
        w="100%"
        sx={{
          borderColor: theme.colors.content[5],
          borderWidth: "0 0 1px 0",
          borderStyle: "solid",
          "&:hover": {
            backgroundColor: theme.colors.bg[1],
          },
        }}
      >
        <Link
          href={href}
          style={{ textDecoration: "none", width: "100%" }}
          onClick={handleClick}
        >
          <UnstyledButton
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              textDecoration: "none",
              borderStyle: "solid",
              borderColor:
                isActive || (router.pathname === "/" && tech === "HTML")
                  ? theme.colors.content[9]
                  : "rgb(0,0,0,0)",
              borderWidth: "0 0 0 5px",
            }}
            bg="rgb(48,48,48, 0)"
            h="3.8rem"
            pr="1rem"
            pl="1.5rem"
            w="calc(100%-4.5rem)"
          >
            <Flex h="100%" w="calc(100%-2rem)" align="center">
              <Text
                color="content.1"
                sx={{
                  fontWeight: 400,
                  fontSize: "1.2rem",
                }}
                className={firaSans.className}
              >
                {tech}
              </Text>
            </Flex>
          </UnstyledButton>{" "}
        </Link>
        <UnstyledButton
          onClick={() => setIsOpen(!isOpen)}
          w="4.5rem"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            "&:hover": {
              backgroundColor: theme.colors.bg[2],
            },
          }}
          bg="rgb(48,48,48, 0)"
        >
          <Flex
            w="2rem"
            h="100%"
            align="center"
            sx={{
              "& path": {
                fill: theme.colors.content[9],
              },
            }}
          >
            <ArrowRight />
          </Flex>
        </UnstyledButton>
      </Flex>
      {isOpen && (
        <Flex
          direction="column"
          sx={{
            position: "relative",
          }}
        >
          <NavigationOption
            title="Open all"
            onClick={() => addAllQuestionIds(tech, questionIds[tech])}
          />
          <NavigationOption
            title="Close All"
            onClick={() => removeAllQuestionIds(tech)}
          />
          <NavigationOption
            title="Reset checkboxes"
            onClick={() => resetCheckboxes(tech)}
          />
          <NavigationOption title="Export as PDF" tech={tech} />
        </Flex>
      )}
    </>
  );
};
