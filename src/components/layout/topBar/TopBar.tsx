import Link from "next/link";

import { GithubIcon } from "@/assets/icons/GithubIcon";

import useLayoutStore from "@/store/layoutStore";

import styles from "./TopBar.module.scss";
import { roboto } from "@/assets/fonts/fonts";
import { useEffect, useState } from "react";
import { useTimerStore } from "@/store/timerStore";
import { useSettingsStore } from "@/store/settingsStore";
import { SettingsIcon } from "@/assets/icons/SettingsIcon";

export const TopBar = () => {
  const { toggleNavVisibility, toggleMobileNavVisibility, isMobileNavVisible } =
    useLayoutStore();
  const { setMobileFirstLoad } = useLayoutStore();
  const { toggleSettingsDrawer } = useSettingsStore();

  const [hydrated, setHydrated] = useState(false);

  const { time, openPomodoroModal } = useTimerStore();
  const { isTimerInTopBar, toggleSetting } = useSettingsStore();

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    setHydrated(true);
    setShowMiniTimer(isTimerInTopBar);
  }, [isTimerInTopBar]);

  const handleSettingsClick = () => {
    toggleSettingsDrawer();
    if (isMobileNavVisible) {
      toggleMobileNavVisibility();
    }
  };

  const [showMiniTimer, setShowMiniTimer] = useState(false);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return { minutes, seconds };
  };

  const handleMiniTimerClick = () => {
    openPomodoroModal();
  };

  return (
    <div
      className={`${styles.topBarWrapper} ${"midnightBlur"} ${"topBarWrapper"}`}
    >
      <div className={styles.leftSection}>
        <div
          onClick={() => {
            toggleNavVisibility();
            setMobileFirstLoad(true);
            toggleMobileNavVisibility();
          }}
          className={styles.hamburger}
        >
          <div className={styles.hamburgerLine} />
          <div className={styles.hamburgerLine} />
          <div className={styles.hamburgerLine} />
        </div>
        <Link href="/" style={{ textDecoration: "none", display: "flex" }}>
          <div className={`${styles.titleFirstPart} ${roboto.className}`}>
            Front-end
          </div>
          <h1 className={`${styles.titleSecondPart} ${roboto.className}`}>
            Questions
          </h1>
        </Link>
      </div>
      <div className={styles.buttonsWrapper}>
        {hydrated && showMiniTimer && (
          <div className={styles.miniTimer} onClick={handleMiniTimerClick}>
            <div className={styles.timerDisplay}>
              <div className={styles.minutes}>{formatTime(time).minutes}</div>
              <div className={styles.colon}>:</div>
              <div className={styles.seconds}>{formatTime(time).seconds}</div>
            </div>
          </div>
        )}
        <button onClick={handleSettingsClick} className={styles.settingsButton}>
          <SettingsIcon />
        </button>
        <Link
          href="https://github.com/matt765/front-end-questions"
          target="_blank"
        >
          <div className={styles.githubButton}>
            <GithubIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};
