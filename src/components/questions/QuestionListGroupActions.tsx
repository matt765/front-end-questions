import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import styles from "./styles/QuestionListGroupActions.module.scss";

import { ClockIcon } from "@/assets/icons/ClockIcon";
import { OutlinedButton } from "../common/OutlinedButton";
import { Checkbox } from "../common/Checkbox";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDropdown } from "@/hooks/useDropdown";
import { ChatGPTIcon } from "@/assets/icons/ChatGPTIcon";
import { questionIds } from "@/utils/openAll";
import { Dropdown } from "../common/Dropdown";

interface QuestionListGroupActionsProps {
  questionCategory: QuestionCategory;
  totalQuestions: number;
}

export const QuestionListGroupActions = ({
  questionCategory,
  totalQuestions,
}: QuestionListGroupActionsProps) => {
  const {
    selectAllQuestions,
    unselectAllQuestions,
    showOnlySelected,
    setShowOnlySelected,
    openSelectedQuestions,
    closeSelectedQuestions,
    selectedQuestions,
  } = useQuestionStore((state) => ({
    selectAllQuestions: state.selectAllQuestions,
    unselectAllQuestions: state.unselectAllQuestions,
    showOnlySelected: state.showOnlySelected[questionCategory],
    setShowOnlySelected: state.setShowOnlySelected,
    openSelectedQuestions: state.openSelectedQuestions,
    closeSelectedQuestions: state.closeSelectedQuestions,
    selectedQuestions: state[`${questionCategory}Checkboxes`],
  }));

  const estimatedTime = estimatedTimes[questionCategory];

  const {
    isDropdownOpen,
    toggleDropdown,
    closeDropdown,
    dropdownRef,
    toggleRef,
  } = useDropdown();

  const handleShowOnlySelected = useCallback(
    (checked: boolean) => {
      setShowOnlySelected(questionCategory, checked);
    },
    [questionCategory, setShowOnlySelected]
  );

  const dropdownData = useMemo(
    () => [
      {
        text: "Select all",
        handler: () =>
          selectAllQuestions(questionCategory, questionIds[questionCategory]),
      },
      {
        text: "Unselect all",
        handler: () => unselectAllQuestions(questionCategory),
      },
      {
        text: "Open selected",
        handler: () => openSelectedQuestions(questionCategory),
      },
      {
        text: "Close selected",
        handler: () => closeSelectedQuestions(questionCategory),
      },
    ],
    [
      questionCategory,
      selectAllQuestions,
      unselectAllQuestions,
      openSelectedQuestions,
      closeSelectedQuestions,
    ]
  );

  // Prevent hydration errors
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.groupActionsWrapper}>
      <div className={styles.estimatedTimeWrapper}>
        <div className={styles.estimatedTimeIcon}>
          <ClockIcon />
        </div>
        Estimated time: {estimatedTime} hours
      </div>
      <div className={styles.groupActionsButtonsWrapper}>
        <div className={styles.showOnlySelectedWrapperDesktop}>
        <Checkbox
            id={`show-selected-${questionCategory}`}
            checked={showOnlySelected}
            onChange={handleShowOnlySelected}
            label={isClient ? `Show only selected (${selectedQuestions.length}/${totalQuestions})` : 'Show only selected'}
          />
        </div>
        <div className={styles.groupActionsButtonWrapper} ref={toggleRef}>
          <OutlinedButton text="Group actions" onClick={toggleDropdown} />
          {isDropdownOpen && (
            <div className={styles.groupActionsDropdownWrapper}>
              <Dropdown
                items={dropdownData}
                onClose={closeDropdown}
                dropdownRef={dropdownRef}
              />
            </div>
          )}
        </div>
        <div className={styles.showOnlySelectedWrapperMobile}>
        <Checkbox
            id={`show-selected-${questionCategory}`}
            checked={showOnlySelected}
            onChange={handleShowOnlySelected}
            label={isClient ? `Show only selected (${selectedQuestions.length}/${totalQuestions})` : 'Show only selected'}
          />
        </div>
      </div>
    </div>
  );
};

export const estimatedTimes: Record<QuestionCategory, number> = {
  HTML: 15,
  CSS: 20,
  JavaScript: 45,
  TypeScript: 12,
  React: 20,
  Git: 8,
  Optimization: 5,
  General: 15,
};
