// components/common/Select.tsx
import React, { useEffect, useState } from "react";
import { useSelect } from "../../hooks/useSelect";
import styles from "./styles/Select.module.scss";
import { ArrowDown } from "@/assets/icons/ArrowDownIcon";
import { ArrowUp } from "@/assets/icons/ArrowUpIcon";

interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const Select = ({ options, value, onChange }: SelectProps) => {
  const { isSelectOpen, toggleSelect, closeSelect, selectRef, toggleRef } =
    useSelect();
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    // Setting the initial render complete after mounting to avoid SSR/client-side mismatch that causes hydration errors
    setInitialRenderComplete(true);
  }, []);

  useEffect(() => {
    if (options.length && !options.includes(value)) {
      onChange(options[0]);
    }
  }, [options, value, onChange]);

  if (!initialRenderComplete) {
    return null;
  }

  return (
    <div className={styles.selectWrapper}>
      <div
        className={styles.selectDisplay}
        onClick={toggleSelect}
        ref={toggleRef}
        tabIndex={0}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isSelectOpen}
        aria-label="Select option"
      >
        {value && value.charAt(0).toUpperCase() + value.slice(1)}
        <div className={styles.selectDisplayArrow}>
          {isSelectOpen ? (
            <ArrowUp width="24px" height="24px" />
          ) : (
            <ArrowDown width="24px" height="24px" />
          )}
        </div>
      </div>
      {isSelectOpen && (
        <div
          ref={selectRef}
          className={`${styles.selectDropdownWrapper} midnightBlur`}
          role="listbox"
        >
          {options.map((option, index) => (
            <div
              key={index}
              className={styles.selectDropdownRow}
              role="option"
              onClick={() => {
                onChange(option);
                closeSelect();
              }}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
