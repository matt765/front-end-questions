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
  closeOnClick?: boolean;
}

export const Dropdown = ({
  items,
  onClose,
  dropdownRef,
  closeOnClick = true,
}: DropdownProps) => {
  return (
    <div ref={dropdownRef} className={`${styles.dropdownWrapper} midnightBlur`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={styles.dropdownRow}
          onClick={(e) => {
            e.stopPropagation();
            item.handler();
            if (closeOnClick) {
              onClose();
            }
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
