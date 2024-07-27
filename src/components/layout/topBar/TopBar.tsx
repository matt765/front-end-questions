import Link from "next/link";
import { useTheme } from "next-themes";

import { GithubIcon } from "@/assets/icons/GithubIcon";
import { SunIcon } from "@/assets/icons/SunIcon";
import useLayoutStore from "@/store/layoutStore";
import { MoonIcon } from "@/assets/icons/MoonIcon";
import styles from "./TopBar.module.scss";
import { firaSans, inter, roboto } from "@/styles/fonts";
import { useEffect, useState } from "react";
import { useTimerStore } from "@/store/timerStore";

export const TopBar = () => {
  const { toggleNavVisibility, toggleMobileNavVisibility } = useLayoutStore();
  const { theme, setTheme } = useTheme();
  const { setMobileFirstLoad } = useLayoutStore();

  const [hydrated, setHydrated] = useState(false);

  const { time, isTimerPinned, openPomodoroModal } = useTimerStore();

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    setHydrated(true);
    setShowMiniTimer(isTimerPinned);
  }, [isTimerPinned]);

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
    <div className={styles.topBarWrapper}>
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
            Front-End
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
        <div
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={styles.themeButton}
        >
          {hydrated && theme === "dark" ? <MoonIcon /> : ""}
          {hydrated && theme === "light" ? <SunIcon /> : ""}
        </div>
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
