import React from "react";

import styles from "./styles/Dropdown.module.scss";

interface DropdownItem {
  text: string;
  icon?: React.ReactNode;
  handler: () => void;
}

interface DropdownProps {
  items: DropdownItem[];
  onClose: () => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
}

export const Dropdown = ({ items, onClose, dropdownRef }: DropdownProps) => {
  return (
    <div ref={dropdownRef} className={styles.dropdownWrapper}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={styles.dropdownRow}
          onClick={(e) => {
            e.stopPropagation();
            item.handler();
            onClose();
          }}
        >
          {item.icon && (
            <span className={styles.dropdownRowIcon}>{item.icon}</span>
          )}
          <span className={styles.dropdownRowText}>{item.text}</span>
        </div>
      ))}
    </div>
  );
};
