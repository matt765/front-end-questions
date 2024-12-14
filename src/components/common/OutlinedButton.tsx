import React from "react";

import { firaSans } from "@/assets/fonts/fonts";
import styles from "./styles/OutlinedButton.module.scss";
import classNames from "classnames";

interface OutlinedButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  text: string;
  coloredBorder?: boolean;
  smallPadding?: boolean;
  children?: React.ReactNode;
}

export const OutlinedButton = ({
  onClick,
  text,
  coloredBorder = false,
  smallPadding = false,
  children
}: OutlinedButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.outlinedButton,
        firaSans.className,
        { [styles.coloredBorder]: coloredBorder },
        { [styles.smallPadding]: smallPadding }
      )}
    >
      {children || text}
    </button>
  );
};
