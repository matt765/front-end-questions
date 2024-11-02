import React from "react";

import styles from "./styles/ContainedButton.module.scss";
import classNames from "classnames";

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
      className={classNames(styles.containedButton, {
        [styles.smallPadding]: smallPadding,
      })}
      disabled={disabled}
    >
      {children || text}
    </button>
  );
};
