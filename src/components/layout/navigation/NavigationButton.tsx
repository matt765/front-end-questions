import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import { ArrowRight } from "@/assets/icons/ArrowRightIcon";
import { Tech, useQuestionStore } from "@/store/questionStore";
import { questionIds } from "@/utils/openAll";
import { NavigationOption } from "./NavigationOption";
import useLayoutStore from "@/store/layoutStore";
import styles from "./styles/Navigation.module.scss";
import classNames from "classnames";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { firaSans } from "@/styles/fonts";

interface NavigationButtonProps {
  tech: Tech;
  href: string;
  isChange: boolean;
  setIsChange: (value: boolean) => void;
}

export const NavigationButton = ({
  tech,
  href,
  isChange,
  setIsChange,
}: NavigationButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isOpen, setIsOpen] = useState(false);
  const { toggleNavVisibility, toggleMobileNavVisibility } = useLayoutStore();
  const isMobile = useMediaQuery("(max-width: 1080px");
  const resetCheckboxes = useQuestionStore((state) => state.resetCheckboxes);
  const addAllQuestionIds = useQuestionStore(
    (state) => state.addAllQuestionIds
  );
  const removeAllQuestionIds = useQuestionStore(
    (state) => state.removeAllQuestionIds
  );

  const handleClick = (e: React.MouseEvent) => {
    if (isActive) {
      e.preventDefault();
    } else {
      router.push(href);
      if (isMobile) {
        toggleMobileNavVisibility();
      }
    }
  };

  return (
    <>
      <div className={styles.navigationButtonWrapper}>
        <Link
          href={href}
          style={{ textDecoration: "none", width: "100%" }}
          onClick={handleClick}
        >
          <button
            className={classNames(styles.techNameButton, {
              [styles.active]:
                isActive || (pathname === "/" && tech === "HTML"),
            })}
          >
            <div className={styles.techTextWrapper}>
              <div className={`${styles.techText} ${firaSans.className}`}>
                {tech}
              </div>
            </div>
          </button>
        </Link>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setIsChange(!isChange);
          }}
          className={styles.expandButton}
        >
          <div
            style={{
              transform: isOpen ? "rotate(90deg)" : "rotate(0)",
            }}
            className={styles.expandButtonArrow}
          >
            <ArrowRight />
          </div>
        </button>
      </div>
      {isOpen && (
        <div className={styles.optionsDropdown}>
          <NavigationOption
            title="Open all"
            onClick={() => addAllQuestionIds(tech, questionIds[tech])}
          />
          <NavigationOption
            title="Close all"
            onClick={() => removeAllQuestionIds(tech)}
          />
          <NavigationOption
            title="Reset checkboxes"
            onClick={() => resetCheckboxes(tech)}
          />
          <NavigationOption title="Export as PDF" tech={tech} />
        </div>
      )}
    </>
  );
};
