import { useEffect, useRef, useState } from "react";

import { NavigationButton } from "./NavigationButton";
import styles from "./styles/Navigation.module.scss";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const Navigation = () => {
  const [isChange, setIsChange] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const containerRef = useRef(null);

  const isMobile = useMediaQuery("(max-width: 67.5em)");

  useEffect(() => {
    const current = containerRef.current;

    const mutationObserver = new MutationObserver(() => {
      // @ts-ignore
      if (current.scrollHeight > current.clientHeight) {
        setIsOverflowing(true);
      } else {
        setIsOverflowing(false);
      }
    });

    if (current) {
      mutationObserver.observe(current, { childList: true, subtree: true });
    }

    return () => {
      if (current) {
        mutationObserver.disconnect();
      }
    };
  }, []);

  return (
    <div
      style={{
        marginRight: isOverflowing && !isMobile ? "0" : "0.5rem",
      }}
      ref={containerRef}
      className={styles.navigationWrapper}
    >
      <NavigationButton
        tech="HTML"
        href="/html"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="CSS"
        href="/css"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="JavaScript"
        href="/javascript"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="TypeScript"
        href="/typescript"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="React"
        href="/react"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="Git"
        href="/git"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="Optimization"
        href="/optimization"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <NavigationButton
        tech="General"
        href="/general"
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <div className={styles.navigationSpaceFiller}></div>
    </div>
  );
};
