import React from "react";
import styles from "./styles/Dropdown.module.scss";

interface DropdownBaseItem {
  text: string;
  icon?: React.ReactNode;
}

interface DropdownHandlerItem extends DropdownBaseItem {
  handler: () => void;
  component?: never;
}

interface DropdownComponentItem extends DropdownBaseItem {
  component: React.ReactNode;
  handler?: never;
}

type DropdownItem = DropdownHandlerItem | DropdownComponentItem;

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
            if (item.handler) {
              item.handler();
              if (closeOnClick) {
                onClose();
              }
            }
          }}
        >
          {item.icon && (
            <span className={styles.dropdownRowIcon}>{item.icon}</span>
          )}
          {item.component ? (
            item.component
          ) : (
            <span className={styles.dropdownRowText}>{item.text}</span>
          )}
        </div>
      ))}
    </div>
  );
};
