"use client";

import { useMemo, useRef } from "react";

import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import { ArrowNavigation } from "../layout/navigation/ArrowNavigation";
import { Question } from "./Question";
import styles from "./styles/QuestionList.module.scss";
import { QuestionListGroupActions } from "./QuestionListGroupActions";
import { Question as QuestionType, AnswerContent } from "./types";

interface QuestionListProps {
  questions: QuestionType[];
  questionCategory: QuestionCategory;
}

export const QuestionList = ({
  questions,
  questionCategory,
}: QuestionListProps) => {
  const questionListRef = useRef<HTMLDivElement>(null);
  const showOnlySelected = useQuestionStore(
    (state) => state.showOnlySelected[questionCategory]
  );
  const selectedQuestions = useQuestionStore(
    (state) => state[`${questionCategory}Checkboxes`]
  );

  const filteredQuestions = useMemo(() => {
    return showOnlySelected
      ? questions.filter((q) => selectedQuestions.includes(q.id))
      : questions;
  }, [questions, showOnlySelected, selectedQuestions]);

  return (
    <>
      <ArrowNavigation questionListRef={questionListRef} />
      <div ref={questionListRef} className={styles.questionListWrapper}>       
        <ol className={`${styles.questionList}`}>
          {filteredQuestions.map((item, index) => (
            <Question
              key={item.id}
              item={item}
              questionCategory={questionCategory}
              // Original index instead of just index to prevent reordering after selection filter
              originalIndex={questions.findIndex((q) => q.id === item.id) + 1}
            />
          ))}
        </ol>
        <QuestionListGroupActions
          questionCategory={questionCategory}
          totalQuestions={questions.length}
        />
      </div>
    </>
  );
};
