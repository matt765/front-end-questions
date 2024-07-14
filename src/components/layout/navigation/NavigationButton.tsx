import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import { ArrowRight } from "@/assets/icons/ArrowRightIcon";
import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import { questionIds } from "@/utils/openAll";
import { NavigationOption } from "./NavigationOption";
import useLayoutStore from "@/store/layoutStore";
import styles from "./styles/Navigation.module.scss";
import classNames from "classnames";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { firaSans } from "@/styles/fonts";

interface NavigationButtonProps {
  questionCategory: QuestionCategory;
  isChange: boolean;
  setIsChange: (value: boolean) => void;
  onSourcesClick: () => void;
}

export const NavigationButton = ({
  questionCategory,
  isChange,
  setIsChange,
  onSourcesClick,
}: NavigationButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const href = `/${questionCategory.toLowerCase()}`;
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
            className={classNames(styles.questionCategoryNameButton, {
              [styles.active]:
                isActive || (pathname === "/" && questionCategory === "HTML"),
            })}
          >
            <div className={styles.questionCategoryTextWrapper}>
              <div className={`${styles.questionCategoryText} ${firaSans.className}`}>
                {questionCategory}
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
            onClick={() => addAllQuestionIds(questionCategory, questionIds[questionCategory])}
          />
          <NavigationOption
            title="Close all"
            onClick={() => removeAllQuestionIds(questionCategory)}
          />
          <NavigationOption title="Sources" onClick={onSourcesClick} />
          <NavigationOption title="Export as PDF" questionCategory={questionCategory} />
        </div>
      )}
    </>
  );
};
