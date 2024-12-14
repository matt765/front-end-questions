import React from "react";
import classNames from "classnames";

import styles from "./styles/ContainedButton.module.scss";
import { firaSans } from "@/assets/fonts/fonts";

interface ContainedButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  text?: string;
  smallPadding?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const ContainedButton = ({
  onClick,
  text,
  smallPadding = false,
  children,
  disabled,
}: ContainedButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.containedButton, firaSans.className, {
        [styles.smallPadding]: smallPadding,
      })}
      disabled={disabled}
    >
      {children || text}
    </button>
  );
};
