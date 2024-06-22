import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";

import styles from "./styles/Question.module.scss";
import { Tech, useQuestionStore } from "@/store/questionStore";

interface QuestionProps {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  tech: Tech;
  index: number;
}

const Question = ({ item, tech, index }: QuestionProps) => {
  const techIds = useQuestionStore((state) => state[tech]);
  const addQuestionId = useQuestionStore((state) => state.addQuestionId);
  const removeQuestionId = useQuestionStore((state) => state.removeQuestionId);
  const techCheckboxes = useQuestionStore(
    (state) => state[`${tech}Checkboxes`]
  );
  const [isChecked, setIsChecked] = useState(techCheckboxes.includes(item.id));
  const addCheckbox = useQuestionStore((state) => state.addCheckbox);
  const removeCheckbox = useQuestionStore((state) => state.removeCheckbox);
  const [isAnswerVisible, setIsAnswerVisible] = useState(
    techIds.includes(item.id)
  );

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  useEffect(() => {
    setIsAnswerVisible(techIds.includes(item.id));
  }, [techIds, item.id]);

  useEffect(() => {
    if (isAnswerVisible) {
      addQuestionId(tech, item.id);
    } else {
      removeQuestionId(tech, item.id);
    }
  }, [isAnswerVisible, tech, item.id, addQuestionId, removeQuestionId]);

  useEffect(() => {
    setIsChecked(techCheckboxes.includes(item.id));
  }, [techCheckboxes, tech, item.id]);

  useEffect(() => {
    if (isChecked) {
      addCheckbox(tech, item.id);
    } else {
      removeCheckbox(tech, item.id);
    }
  }, [isChecked, tech, item.id, addCheckbox, removeCheckbox]);

  // Prevent hydration errors
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      onClick={toggleAnswerVisibility}
      className={classNames(styles.questionWrapper, {
        [styles.minHeightAnswerVisible]: isAnswerVisible,
        [styles.minHeightAnswerNotVisible]: !isAnswerVisible,
        [styles.paddingSmall]: index < 9,
        [styles.paddingMedium]: index >= 9 && index < 99,
        [styles.paddingLarge]: index >= 99,
      })}
      suppressHydrationWarning
    >
      <div className={styles.questionFirstRow}>
        <li className={styles.questionText}>{item.question}</li>
        <div
          style={{ position: "relative", display: "flex" }}
          onClick={(event) => {
            event.stopPropagation();
            setIsChecked(!isChecked);
          }}
        >
          <div className={styles.checkboxWrapper} />
          {isClient && isChecked && (
            <div className={styles.checkboxIcon}>✓</div>
          )}
        </div>
      </div>
      {isClient && isAnswerVisible && (
        <div className={styles.answer}>
          <ReactMarkdown>{item.answer}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default Question;
