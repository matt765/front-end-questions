import React, { useEffect } from "react";

import styles from "./styles/SettingsDrawer.module.scss";
import { SettingsRow } from "./SettingsRow";
import { useSettingsStore } from "@/store/settingsStore";
import { Select } from "../common/Select";
import { SwitchRow } from "./SettingsSwitchRow";
import { useTheme } from "next-themes";
import { ArrowDownLine } from "@/assets/icons/ArrowDownLine";
import { PaletteIcon } from "@/assets/icons/PaletteIcon";
import { OutlinedButton } from "../common/OutlinedButton";

export const SettingsDrawer = () => {
  const { theme, setTheme } = useTheme();
  const {
    toggleSetting,
    isTimerInTopBar,
    isTimerSoundEnabled,
    isTimerInfiniteEnabled,
    isDesktopArrowNavigationEnabled,
    isMobileArrowNavigationEnabled,
    isConsoleEnabled,
    isConsoleVisibleOnAllTabs,
    isAnswerBackgroundVisible,
    toggleSettingsDrawer,
  } = useSettingsStore();

  const themes = [
    "snowlight",
    "charcoal",  
    "obsidian",
    "nocturnal",
    "eclipse",
    "cyberpunk",
    "midnight",
  ];

  const handleCycleTheme = () => {
    const currentThemeIndex = themes.indexOf(theme as string);
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];

    document.documentElement.classList.remove(theme as string);

    setTheme(nextTheme);
  };

  useEffect(() => {
    document.documentElement.classList.remove(...themes);
    document.documentElement.classList.add(theme as string);
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    if (newTheme !== theme) {
      setTheme(newTheme);
    }
  };

  return (
    <div className={`${styles.settingsDrawerWrapper} ${"midnightBlur"}`}>
      <div className={styles.header}>
        <h2>Settings</h2>
        <button className={styles.closeButton} onClick={toggleSettingsDrawer}>
          ✕
        </button>
      </div>
      <SettingsRow title="THEME">
        <div className={styles.themeRow}>
          <Select
            options={themes}
            value={theme as string}
           onChange={handleThemeChange}
          />
          <div className={styles.themeRowArrow} onClick={handleCycleTheme}>
            <PaletteIcon />
          </div>
        </div>
      </SettingsRow>
      <SettingsRow title="TIMER">
        <SwitchRow
          title="Show in top bar"
          checked={isTimerInTopBar}
          onChange={() => toggleSetting("isTimerInTopBar")}
        />
        <SwitchRow
          title="Enable sound"
          checked={isTimerSoundEnabled}
          onChange={() => toggleSetting("isTimerSoundEnabled")}
        />
        <SwitchRow
          title="Infinite loop"
          checked={isTimerInfiniteEnabled}
          onChange={() => toggleSetting("isTimerInfiniteEnabled")}
        />
      </SettingsRow>
      <SettingsRow title="NAVIGATION">
        <SwitchRow
          title="Show arrows on desktop"
          checked={isDesktopArrowNavigationEnabled}
          onChange={() => toggleSetting("isDesktopArrowNavigationEnabled")}
        />
        <SwitchRow
          title="Show arrows on mobile"
          checked={isMobileArrowNavigationEnabled}
          onChange={() => toggleSetting("isMobileArrowNavigationEnabled")}
        />
      </SettingsRow>
      <SettingsRow title="JAVASCRIPT CONSOLE">
        <SwitchRow
          title="Enable console"
          checked={isConsoleEnabled}
          onChange={() => toggleSetting("isConsoleEnabled")}
        />
        <SwitchRow
          title="Keep it on all tabs"
          checked={isConsoleVisibleOnAllTabs}
          onChange={() => toggleSetting("isConsoleVisibleOnAllTabs")}
        />
      </SettingsRow>
      <SettingsRow title="QUESTIONS">
        <SwitchRow
          title="Show answer background"
          checked={isAnswerBackgroundVisible}
          onChange={() => toggleSetting("isAnswerBackgroundVisible")}
        />
      </SettingsRow>
      <SettingsRow title="APPLICATION DATA">
        <div className={styles.dataButtonsWrapper}>
          <OutlinedButton
            text="Statistics"
            onClick={() => {}}
            coloredBorder
            smallPadding
          />
          <OutlinedButton
            text="Clear all data"
            onClick={() => {}}
            coloredBorder
            smallPadding
          />
        </div>
      </SettingsRow>
    </div>
  );
};