import React from "react";

import { firaSans } from "@/styles/fonts";
import styles from "./styles/OutlinedButton.module.scss";

interface OutlinedButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  text: string;
}

export const OutlinedButton = ({ onClick, text }: OutlinedButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.outlinedButton} ${firaSans.className}`}
    >
      {text}
    </div>
  );
};
