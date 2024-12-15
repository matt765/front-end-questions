import React from "react";

import styles from "./styles/SwitchRow.module.scss";
import { TimerSoundButton } from "./TimerSoundButton";

interface SwitchRowProps {
  title: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  showTimerSoundButton?: boolean;
}

export const SwitchRow: React.FC<SwitchRowProps> = ({
  title,
  checked,
  onChange,
  showTimerSoundButton = false,
}) => {
  return (
    <div className={styles.switchRow}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>{title}</span>
        {showTimerSoundButton && <TimerSoundButton />}
      </div>
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
