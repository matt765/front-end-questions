import { Flex, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";
import { NavigationButton } from "./NavigationButton";

export const Navigation = () => {
  const [isChange, setIsChange] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const containerRef = useRef(null);

  const isMobile = useMediaQuery("(max-width: 67.5em)");

  useEffect(() => {
    const current = containerRef.current;

    const mutationObserver = new MutationObserver(() => {
      // @ts-ignore
      if (current.scrollHeight > current.clientHeight) {
        setIsOverflowing(true);
      } else {
        setIsOverflowing(false);
      }
    });

    if (current) {
      mutationObserver.observe(current, { childList: true, subtree: true });
    }

    return () => {
      if (current) {
        mutationObserver.disconnect();
      }
    };
  }, []);

  const theme = useMantineTheme();

  return (
    <Flex
      h="calc(100vh - 4.5rem)"
      direction="column"
      w="100%"
      justify="flex-start"
      bg="bg.8"
      sx={{
        overflow: "overlay",
        overflowX: "hidden",
        marginRight: isOverflowing && !isMobile ? "0" : "0.5rem",
        "@media (max-width: 27em)": {
          marginRight: "0",
        },
      }}
      ref={containerRef}
    >
      <NavigationButton
        tech="HTML"
        href="/html"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="CSS"
        href="/css"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="JavaScript"
        href="/javascript"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="TypeScript"
        href="/typescript"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="React"
        href="/react"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="Git"
        href="/git"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="Accessibility"
        href="/accessibility"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="General"
        href="/general"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <Flex
        w="100%"
        sx={{
          flexGrow: 1,
          borderColor: theme.colors.content[5],
          borderWidth: "0 1px 0 0",
          borderStyle: "solid",
        }}
      />
    </Flex>
  );
};
