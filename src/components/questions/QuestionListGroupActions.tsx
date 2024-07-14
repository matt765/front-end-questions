import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import styles from "./styles/QuestionList.module.scss";
import { OutlinedButton } from "../common/OutlinedButton";

interface QuestionListGroupActionsProps {
  questionCategory: QuestionCategory;
}

export const QuestionListGroupActions = ({
  questionCategory,
}: QuestionListGroupActionsProps) => {
  const resetCheckboxes = useQuestionStore((state) => state.resetCheckboxes);

  return (
    <div className={styles.questionListGroupActionsWrapper}>
      <div className={styles.questionListGroupActionsButtonWrapper}>
        <OutlinedButton
          text="Reset checkboxes"
          onClick={() => resetCheckboxes(questionCategory)}
        />
      </div>
      <div className={styles.questionListGroupActionsButtonWrapper}>
        <OutlinedButton text="Export selected to PDF" onClick={() => {}} />
      </div>
    </div>
  );
};
