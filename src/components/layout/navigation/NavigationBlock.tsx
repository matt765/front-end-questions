import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import { ArrowRight } from "@/assets/icons/ArrowRightIcon";
import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import { questionIds } from "@/utils/questionIds";
import { NavigationOption } from "./NavigationOption";
import useLayoutStore from "@/store/layoutStore";
import styles from "./styles/Navigation.module.scss";
import classNames from "classnames";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { firaSans } from "@/assets/fonts/fonts";

interface NavigationBlockProps {
  questionCategory: QuestionCategory;
  onSourcesClick: () => void;
}

export const NavigationBlock = ({
  questionCategory,
  onSourcesClick,
}: NavigationBlockProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [isOptionsDropdownOpen, setIsOptionsDropdownOpen] = useState(false);
  const { toggleMobileNavVisibility } = useLayoutStore();
  const isMobile = useMediaQuery("(max-width: 1080px");
  const openAllQuestions = useQuestionStore((state) => state.openAllQuestions);
  const closeAllQuestions = useQuestionStore(
    (state) => state.closeAllQuestions
  );

  const selectedCodeExerciseTab = useQuestionStore(
    (state) => state.selectedCodeExerciseTab
  );

  const handleOpenAll = () => {
    if (questionCategory === "Algorithms") {
      const categoryToOpen =
        selectedCodeExerciseTab === "algorithms" ? "Algorithms" : "Components";
      openAllQuestions(categoryToOpen, questionIds[categoryToOpen]);
    } else {
      openAllQuestions(questionCategory, questionIds[questionCategory]);
    }
  };

  const handleCloseAll = () => {
    if (questionCategory === "Algorithms") {
      const categoryToClose =
        selectedCodeExerciseTab === "algorithms" ? "Algorithms" : "Components";
      closeAllQuestions(categoryToClose);
    } else {
      closeAllQuestions(questionCategory);
    }
  };

  if (questionCategory === "Components") {
    return null;
  }

  const getCategoryHref = (category: QuestionCategory): string => {
    switch (category) {
      case "Algorithms":
      case "Components":
        return "/code-exercises";
      default:
        return `/${category.toLowerCase()}`;
    }
  };

  const href = getCategoryHref(questionCategory);

  const isActive = pathname === href;

  const handleNavigationBlockClick = (e: React.MouseEvent) => {
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
    if (category === "Algorithms") {
      return "Code exercises";
    }
    return category;
  };
  console.log(questionCategory);
  const isCodeExercisesPage = (): boolean => {
    return true;
  };

  return (
    <>
      <div className={styles.navigationButtonWrapper}>
        <Link
          href={href}
          style={{ textDecoration: "none", width: "100%" }}
          onClick={handleNavigationBlockClick}
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
          {questionCategory !== "Algorithms" && (
            <NavigationOption
              title="Export as PDF"
              questionCategory={questionCategory}
            />
          )}
          {questionCategory === "Algorithms" && (
            <NavigationOption
              title="Toggle solutions"
              questionCategory={
                selectedCodeExerciseTab === "algorithms"
                  ? "Algorithms"
                  : "Components"
              }
            />
          )}
          <NavigationOption title="Sources" onClick={onSourcesClick} />
        </div>
      )}
    </>
  );
};
