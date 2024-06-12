import Link from "next/link";
import { useTheme } from "next-themes";

import { GithubIcon } from "@/assets/icons/GithubIcon";
import { SunIcon } from "@/assets/icons/SunIcon";
import useLayoutStore from "@/store/layoutStore";
import { MoonIcon } from "@/assets/icons/MoonIcon";
import styles from "./TopBar.module.scss";

export const TopBar = () => {
  const { toggleNavVisibility } = useLayoutStore();
  const { theme, setTheme } = useTheme();
  const { setMobileFirstLoad } = useLayoutStore();

  return (
    <div className={styles.topBarWrapper}>
      <div className={styles.leftSection}>
        <div
          onClick={() => {
            toggleNavVisibility();
            setMobileFirstLoad(true);
          }}
          className={styles.hamburger}
        >
          <div className={styles.hamburgerLine} />
          <div className={styles.hamburgerLine} />
          <div className={styles.hamburgerLine} />
        </div>
        <Link href="/" style={{ textDecoration: "none", display: "flex" }}>
          <h1 className={styles.titleFirstPart}>Front-End</h1>
          <h1 className={styles.titleSecondPart}>Questions</h1>
        </Link>
      </div>
      <div className={styles.buttonsWrapper}>
        <div
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={styles.themeButton}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
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
