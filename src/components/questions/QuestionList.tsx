"use client";

import { useRef } from "react";

import { Tech } from "@/store/questionStore";
import { ArrowNavigation } from "../layout/navigation/ArrowNavigation";
import Question from "./Question";
import styles from "./styles/QuestionList.module.scss";

export interface question {
  id: number;
  question: string;
  answer: string;
}
interface QuestionListProps {
  questions: question[];
  tech: Tech;
}

export const QuestionList = ({ questions, tech }: QuestionListProps) => {
  const questionListRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ArrowNavigation questionListRef={questionListRef} />
      <div ref={questionListRef} className={styles.questionListWrapper}>
        <ol className={`${styles.questionList}`}>
          {questions.map((item, index) => (
            <Question key={index} item={item} tech={tech}  index={index} />
          ))}
        </ol>
      </div>
    </>
  );
};
