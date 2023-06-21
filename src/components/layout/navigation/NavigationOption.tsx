import { Flex, Text } from "@mantine/core";

interface NavigationOptionProps {
  title: string;
  onClick: () => void;
}

export const NavigationOption: React.FC<NavigationOptionProps> = ({
  title,
  onClick,
}) => (
  <Flex
    sx={{
      width: "100%",
      height: "4rem",
      backgroundColor: "rgba(200,200,200,0.1)",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingLeft: "1rem",
      cursor: "pointer",

      "&:hover": {
        backgroundColor: "rgba(200,200,200,0.13)",
      },
    }}
    onClick={onClick}
  >
    <Flex
      pl="1rem"
      h="100%"
      align="center"
      sx={{
        borderWidth: "0 0 0 0px",
        borderColor: "rgb(255,255,255,0.3)",
        borderStyle: "solid",
      }}
    >
      <Text
        color="rgb(255,255,255,0.7)"
        sx={{ fontWeight: 400, fontSize: "1.2rem", whiteSpace: "nowrap" }}
      >
        {title}
      </Text>
    </Flex>
  </Flex>
);
