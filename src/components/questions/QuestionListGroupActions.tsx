import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import styles from "./styles/QuestionListGroupActions.module.scss";
import { OutlinedButton } from "../common/OutlinedButton";
import { ClockIcon } from "@/assets/icons/ClockIcon";

interface QuestionListGroupActionsProps {
  questionCategory: QuestionCategory;
}

export const QuestionListGroupActions = ({
  questionCategory,
}: QuestionListGroupActionsProps) => {
  const resetCheckboxes = useQuestionStore((state) => state.resetCheckboxes);
  const estimatedTime = estimatedTimes[questionCategory];

  return (
    <div className={styles.groupActionsWrapper}>
      <div className={styles.estimatedTimeWrapper}>
        <div className={styles.estimatedTimeIcon}>
          <ClockIcon />
        </div>
        Estimated time: {estimatedTime} hours
      </div>
      <div className={styles.groupActionsButtonsWrapper}>
        <div className={styles.groupActionsButtonWrapper}>
          <OutlinedButton
            text="Reset checkboxes"
            onClick={() => resetCheckboxes(questionCategory)}
          />
        </div>
        <div className={styles.groupActionsButtonWrapper}>
          <OutlinedButton text="Export selected to PDF" onClick={() => {}} />
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
