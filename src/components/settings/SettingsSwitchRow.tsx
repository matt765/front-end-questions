import React from "react";

import styles from "./styles/SwitchRow.module.scss";

interface SwitchRowProps {
  title: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const SwitchRow: React.FC<SwitchRowProps> = ({
  title,
  checked,
  onChange,
}) => {
  return (
    <div className={styles.switchRow}>
      <span className={styles.title}>{title}</span>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
