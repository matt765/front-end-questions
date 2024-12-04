"use client";

import { ReactNode, useEffect, useState } from "react";
import classNames from "classnames";

import { Navigation } from "./navigation/Navigation";
import { TopBar } from "./topBar/TopBar";
import useLayoutStore from "@/store/layoutStore";
import styles from "./Layout.module.scss";
import { useSettingsStore } from "@/store/settingsStore";
import { SettingsDrawer } from "../settings/SettingsDrawer";

import { JavaScriptConsole } from "./console/Console";
import { CodeIcon } from "@/assets/icons/CodeIcon";
import { usePathname } from "next/navigation";
import useConsoleStore from "@/store/consoleStore";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isNavVisible, isMobileNavVisible, toggleMobileNavVisibility } =
    useLayoutStore();
  const { isConsoleOpen, toggleConsole } = useConsoleStore();
  const pathname = usePathname();
  const { isSettingsDrawerOpen, toggleSettingsDrawer } = useSettingsStore();

  // const [hydrated, setHydrated] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setHydrated(true);
  //   }, 0); // Set to a half second to simulate delayed render
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className={styles.layoutWrapper}>
      {/* {!hydrated && <Loader />} */}
      <TopBar />
      <div className={styles.layoutContent}>
        <div
          className={classNames(styles.navigation, {
            [styles.navigationVisible]: isNavVisible,
            [styles.navigationHidden]: !isNavVisible,
          })}
          id="navigation"
        >
          <Navigation />
        </div>
        <div
          className={classNames(styles.mobileNavigation, {
            [styles.mobileNavigationVisible]: isMobileNavVisible,
            [styles.mobileNavigationHidden]: !isMobileNavVisible,
          })}
        >
          <Navigation />
        </div>
        <div
          className={classNames(styles.questionListWrapper, {
            [styles.questionListWrapperWithNav]: isNavVisible,
            [styles.questionListWrapperFullWidth]: !isNavVisible,
          })}
        >
          <main>
            {isMobileNavVisible && (
              <div
                className={styles.overlay}
                onClick={toggleMobileNavVisibility}
              />
            )}
            {/* {hydrated ? children : <Loader />} */}
            {isSettingsDrawerOpen && (
              <div
                className={styles.settingsOverlay}
                onClick={toggleSettingsDrawer}
              />
            )}
            {children}
          </main>
        </div>
        <div
          className={classNames(styles.settingsDrawer, {
            [styles.settingsDrawerOpen]: isSettingsDrawerOpen,
            [styles.settingsDrawerClosed]: !isSettingsDrawerOpen,
          })}
        >
          <SettingsDrawer />
        </div>
      </div>
      {(pathname === "/javascript" || pathname === "/code-exercises") && (
        <JavaScriptConsole />
      )}
      {(pathname === "/javascript" || pathname === "/code-exercises") && (
        <button className={styles.consoleToggle} onClick={toggleConsole}>
          <CodeIcon />
        </button>
      )}
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50rem",
            height: "25rem",
            backgroundColor: "rgba(49, 48, 48)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "2rem",
            flexDirection: "column",
            padding: "5%",
            borderRadius: "10px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgba(255, 255, 255, 0.1)",
            color: "white",
          }}
        >
          This application is currently in maintenance mode.
          <div style={{ fontSize: "1.4rem", marginTop: "2rem" }}>
            Both questions and answers need to be refactored and restructured.
            There will be also new functionalities soon
          </div>
        </div>
      </div>
    </div>
  );
};
