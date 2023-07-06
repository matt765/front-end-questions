import { MantineTheme } from "@mantine/core";

export const globalStyles = (theme: MantineTheme) =>
  // Mainly scrollbar styles for different browsers
  ({
    "*, *::before, *::after": {
      boxSizing: "border-box",
      padding: 0,
      margin: 0,
      scrollbarWidth: "thin",
      scrollbarColor: "red",
      "&::-webkit-scrollbar": { width: "10px" },
      "&::-webkit-scrollbar-thumb": {
        background: theme.colors.icons[2],
        "&:hover": { background: "rgb(255,255,255,0.1)" },
        borderRadius: "30px",
        border: "none",
      },
      "&::-webkit-scrollbar-track": { background: "transparent" },
    },
    "html, body": {
      maxWidth: "100vw",
      overflow: "hidden",
    },
    ":root": {
      scrollbarColor: `${theme.colors.icons[2]} rgb(255,255,255,0.05)`,
      scrollbarWidth: "thin",
    },
    "::-webkit-scrollbar-corner": { background: "rgba(0,0,0,0)" },
    "::-webkit-input-placeholder": {
      color: "rgb(255,255,255,0.4) !important",
    },
    "&::-webkit-scrollbar": { width: "10px" },
    "&::-webkit-scrollbar-thumb": {
      background: theme.colors.icons[2],
      "&:hover": { background: theme.colors.icons[2] },
      borderRadius: "30px",
      border: "none",
    },
    "&::-webkit-scrollbar-track": { background: "transparent" },
    "option, optgroup": { "-webkit-appearance": "none !important" },
    body: {
      ...theme.fn.fontStyles(),
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      lineHeight: theme.lineHeight,
    },
  } as any);
