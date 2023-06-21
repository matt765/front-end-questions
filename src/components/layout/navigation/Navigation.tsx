import { Flex } from "@mantine/core";
import { NavigationButton } from "./NavigationButton";

export const Navigation = () => {
  return (
    <Flex
      h="calc(100vh - 4.5rem)"
      direction="column"
      w="100%"
      justify="flex-start"
      bg="rgb(48,48,48)"
      sx={{
        borderWidth: "0 0px 0 0px",
        borderColor: "rgb(255,255,255,0.02)",
        borderStyle: "solid",
        overflow: "overlay"
      }}
     
    >
      <NavigationButton tech="HTML" href="/html" />
      <NavigationButton tech="CSS" href="/css" />
      <NavigationButton tech="JavaScript" href="/javascript" />
      <NavigationButton tech="TypeScript" href="/typescript" />
      <NavigationButton tech="React" href="/react" />
      <NavigationButton tech="Git" href="/git" />
      <NavigationButton tech="Accessibility" href="/accessibility" />
      <NavigationButton tech="General" href="/general" />
    </Flex>
  );
};
