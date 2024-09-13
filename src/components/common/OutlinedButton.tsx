import React from "react";

import { firaSans } from "@/styles/fonts";
import styles from "./styles/OutlinedButton.module.scss";
import classNames from "classnames";

interface OutlinedButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  text: string;
  coloredBorder?: boolean;
  smallPadding?: boolean;
}

export const OutlinedButton = ({
  onClick,
  text,
  coloredBorder = false,
  smallPadding = false
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
      {text}
    </button>
  );
};
