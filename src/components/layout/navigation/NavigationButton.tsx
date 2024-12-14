import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import { ArrowRight } from "@/assets/icons/ArrowRightIcon";
import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import { questionIds } from "@/utils/openAll";
import { NavigationOption } from "./NavigationOption";
import useLayoutStore from "@/store/layoutStore";
import styles from "./styles/Navigation.module.scss";
import classNames from "classnames";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { firaSans } from "@/assets/fonts/fonts";

interface NavigationButtonProps {
  questionCategory: QuestionCategory;
  onSourcesClick: () => void;
}

export const NavigationButton = ({
  questionCategory,
  onSourcesClick,
}: NavigationButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [isOptionsDropdownOpen, setIsOptionsDropdownOpen] = useState(false);
  const { toggleMobileNavVisibility } = useLayoutStore();
  const isMobile = useMediaQuery("(max-width: 1080px");
  const openAllQuestions = useQuestionStore((state) => state.openAllQuestions);
  const closeAllQuestions = useQuestionStore(
    (state) => state.closeAllQuestions
  );

  const handleOpenAll = () => {
    openAllQuestions(questionCategory, questionIds[questionCategory]);
  };

  const handleCloseAll = () => {
    closeAllQuestions(questionCategory);
  };

  const getCategoryHref = (category: QuestionCategory): string => {
    return category === "CodeExercises"
      ? "/code-exercises"
      : `/${category.toLowerCase()}`;
  };

  const href = getCategoryHref(questionCategory);

  const isActive = pathname === href;

  const handleNavigationButtonClick = (e: React.MouseEvent) => {
    if (isActive) {
      e.preventDefault();
    } else {
      router.push(href);
      if (isMobile) {
        toggleMobileNavVisibility();
      }
    }
  };

  const getCategoryDisplayName = (category: QuestionCategory): string => {
    return category === "CodeExercises" ? "Code exercises" : category;
  };

  return (
    <>
      <div className={styles.navigationButtonWrapper}>
        <Link
          href={href}
          style={{ textDecoration: "none", width: "100%" }}
          onClick={handleNavigationButtonClick}
        >
          <button
            className={classNames(styles.questionCategoryNameButton, {
              [styles.active]:
                isActive || (pathname === "/" && questionCategory === "HTML"),
            })}
          >
            <div className={styles.questionCategoryTextWrapper}>
              <div
                className={`${styles.questionCategoryText} ${firaSans.className}`}
              >
                {getCategoryDisplayName(questionCategory)}
              </div>
            </div>
          </button>
        </Link>
        <button
          onClick={() => {
            setIsOptionsDropdownOpen(!isOptionsDropdownOpen);
          }}
          className={styles.expandButton}
        >
          <div
            style={{
              transform: isOptionsDropdownOpen ? "rotate(90deg)" : "rotate(0)",
            }}
            className={styles.expandButtonArrow}
          >
            <ArrowRight />
          </div>
        </button>
      </div>
      {isOptionsDropdownOpen && (
        <div className={styles.optionsDropdown}>
          <NavigationOption title="Open all" onClick={handleOpenAll} />
          <NavigationOption title="Close all" onClick={handleCloseAll} />
          <NavigationOption
            title="Export as PDF"
            questionCategory={questionCategory}
          />
          <NavigationOption title="Sources" onClick={onSourcesClick} />
        </div>
      )}
    </>
  );
};
