import Link from "next/link";
import { useTheme } from "next-themes";

import { GithubIcon } from "@/assets/icons/GithubIcon";
import { SunIcon } from "@/assets/icons/SunIcon";
import useLayoutStore from "@/store/layoutStore";
import { MoonIcon } from "@/assets/icons/MoonIcon";
import styles from "./TopBar.module.scss";
import { firaSans, inter, roboto } from "@/styles/fonts";
import { useEffect, useState } from "react";

export const TopBar = () => {
  const { toggleNavVisibility,  toggleMobileNavVisibility } = useLayoutStore();
  const { theme, setTheme } = useTheme();
  const { setMobileFirstLoad } = useLayoutStore();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className={styles.topBarWrapper}>
      <div className={styles.leftSection}>
        <div
          onClick={() => {
            toggleNavVisibility();
            setMobileFirstLoad(true);
            toggleMobileNavVisibility()
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
