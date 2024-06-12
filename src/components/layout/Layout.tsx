import { ReactNode } from "react";
import classNames from "classnames";

import { Navigation } from "./navigation/Navigation";
import { TopBar } from "./topBar/TopBar";
import useLayoutStore from "@/store/layoutStore";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isNavVisible, isMobileFirstLoad, setMobileFirstLoad } =
    useLayoutStore();

  return (
    <div className={styles.layoutWrapper}>
      <TopBar />
      <div className={styles.layoutContent}>
        <div
          className={classNames(styles.navigation, {
            [styles.navigationVisible]: isNavVisible,
            [styles.navigationHidden]: !isNavVisible,
            [styles.navigationMobileVisible]:
              !isNavVisible && isMobileFirstLoad,
            [styles.navigationMobileHidden]:
              !isNavVisible && !isMobileFirstLoad,
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
            {!isNavVisible && <div className={styles.overlay} />}
            {children}
          </main>
        </div>
      </div>
      {/* <Flex
        sx={{
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
        <Flex
          sx={{
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
            borderColor: "rgb(255,255,255,0.1)",
          }}
        >
          This application is currently in maintenance mode.
          <Flex sx={{ fontSize: "1.4rem", marginTop: "2rem" }}>
            Both questions and answers need to be refactored and restructured.
            There will be also new functionalities soon
          </Flex>
        </Flex>
      </Flex> */}
    </div>
  );
};
