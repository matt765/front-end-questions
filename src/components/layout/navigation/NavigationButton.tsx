import { ArrowRight } from "@/assets/icons/ArrowRightIcon";
import { firaSans } from "@/utils/fonts";
import { Button, Flex, Text, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavigationButtonProps {
  tech: string;
  href: string;
}

export const NavigationButton = ({ tech, href }: NavigationButtonProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <UnstyledButton
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          textDecoration: "none",
          borderStyle: "solid",
          borderColor: isActive ? "rgb(139,135,251, 0.8)" : "rgb(0,0,0,0)",
          borderWidth: "0 0 0 5px",
          "&:hover": {
            backgroundColor: "rgb(255,255,255, 0.04)",
          },
        }}
        bg="rgb(48,48,48, 0)"
        h="3.8rem"
        pr="1rem"
        pl="1.5rem"
      >
        <Flex h="100%" w="calc(100%-2rem)" align="center">
          <Text
            color="rgb(255,255,255,0.7)"
            sx={{
              fontWeight: 400,
              fontSize: "1.2rem",
            }}
            className={firaSans.className}
          >
            {tech}
          </Text>
        </Flex>
        <Flex
          w="2rem"
          h="100%"
          align="center"
          sx={{
            "& path": {
              fill: "rgb(139,135,251, 0.8)",
            },
          }}
        >
          <ArrowRight />
        </Flex>
      </UnstyledButton>
    </Link>
  );
};
