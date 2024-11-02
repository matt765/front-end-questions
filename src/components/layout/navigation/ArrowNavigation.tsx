import { RefObject } from "react";

import { ArrowDownDouble } from "@/assets/icons/ArrowDownDouble";
import { ArrowUpDouble } from "@/assets/icons/ArrowUpDouble";
import { ArrowUp } from "@/assets/icons/ArrowUpIcon";
import { ArrowDown } from "@/assets/icons/ArrowDownIcon";
import styles from "./styles/ArrowNavigation.module.scss";

interface ArrowNavigationProps {
  questionListRef: RefObject<HTMLDivElement>;
}

export const ArrowNavigation = ({ questionListRef }: ArrowNavigationProps) => {
  const scrollUp = () => {
    if (questionListRef.current) {
      questionListRef.current.scrollBy(0, -window.innerHeight * 0.9);
    }
  };

  const scrollDown = () => {
    if (questionListRef.current) {
      questionListRef.current.scrollBy(0, window.innerHeight * 0.9);
    }
  };
  const scrollTop = () => {
    if (questionListRef.current) {
      questionListRef.current.scrollTo(0, 0);
    }
  };

  const scrollBottom = () => {
    if (questionListRef.current) {
      questionListRef.current.scrollTo(0, questionListRef.current.scrollHeight);
    }
  };

  return (
    <>
      <div className={`${styles.arrowNavigation} arrowNavigationDesktop`}>
        <button onClick={scrollTop}>
          <ArrowUpDouble />
        </button>
        <button onClick={scrollUp}>
          <ArrowUp />
        </button>
        <button onClick={scrollDown}>
          <ArrowDown />
        </button>
        <button onClick={scrollBottom}>
          <ArrowDownDouble />
        </button>
      </div>
      <div className={`${styles.arrowNavigationMobile} midnightBlur`}>
        <button onClick={scrollTop}>
          <ArrowUpDouble />
        </button>
        <button onClick={scrollUp}>
          <ArrowUp />
        </button>
        <button onClick={scrollDown}>
          <ArrowDown />
        </button>
        <button onClick={scrollBottom}>
          <ArrowDownDouble />
        </button>
      </div>
    </>
  );
};
