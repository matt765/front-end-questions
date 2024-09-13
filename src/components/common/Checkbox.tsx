import React from "react";
import classNames from "classnames";

import styles from "./styles/Checkbox.module.scss";
import { useHydrated } from "@/hooks/useHydrated";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  transparent?: boolean;
}

export const Checkbox = ({
  id,
  checked,
  onChange,
  label,
  transparent = false,
}: CheckboxProps) => {
  const isHydrated = useHydrated();

  return (
    <div className={styles.checkboxContainer}>
      <div
        className={classNames(styles.checkboxWrapper, {
          [styles.transparent]: transparent,
        })}
        onClick={() => onChange(!checked)}
      >
        {isHydrated && checked && (
          <div
            className={classNames(styles.checkboxIcon, {
              [styles.transparentIcon]: transparent,
            })}
          >
            ✓
          </div>
        )}
      </div>
      {label && (
        <label
          htmlFor={id}
          className={styles.checkboxLabel}
          onClick={() => onChange(!checked)}
        >
          {label}
        </label>
      )}
    </div>
  );
};
