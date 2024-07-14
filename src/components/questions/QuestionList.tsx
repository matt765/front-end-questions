"use client";

import { useRef } from "react";

import { QuestionCategory } from "@/store/questionStore";
import { ArrowNavigation } from "../layout/navigation/ArrowNavigation";
import Question from "./Question";
import styles from "./styles/QuestionList.module.scss";
import { QuestionListGroupActions } from "./QuestionListGroupActions";

export interface question {
  id: number;
  question: string;
  answer: string;
}
interface QuestionListProps {
  questions: question[];
  questionCategory: QuestionCategory;
}

export const QuestionList = ({ questions, questionCategory }: QuestionListProps) => {
  const questionListRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ArrowNavigation questionListRef={questionListRef} />
      <div ref={questionListRef} className={styles.questionListWrapper}>
        <ol className={`${styles.questionList}`}>
          {questions.map((item, index) => (
            <Question key={index} item={item} questionCategory={questionCategory} index={index} />
          ))}
        </ol>
        <QuestionListGroupActions questionCategory={questionCategory} />
      </div>
    </>
  );
};
