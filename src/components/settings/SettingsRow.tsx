import React, { ReactNode } from 'react';
import styles from './styles/SettingsRow.module.scss';

interface SettingsRowProps {
  title: string;
  children: ReactNode;
}

export const SettingsRow = ({ title, children }: SettingsRowProps) => {
  return (
    <div className={styles.settingRow}>
      <h3 className={styles.rowTitle}>{title}</h3>
      <div className={styles.rowContent}>{children}</div>
    </div>
  );
};
