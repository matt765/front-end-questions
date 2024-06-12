import dynamic from "next/dynamic";
import { useRef } from "react";

import { Tech } from "@/store/questionStore";
import { firaSans } from "@/utils/fonts";
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

const QuestionList = ({ questions, tech }: QuestionListProps) => {
  const questionListRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ArrowNavigation questionListRef={questionListRef} />
      <div ref={questionListRef} className={styles.questionListWrapper}>
        <ol className={`${firaSans.className} ${styles.questionList}`}>
          {questions.map((item, index) => (
            <Question key={index} item={item} tech={tech} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default QuestionList;

export const DynamicQuestionList = dynamic(
  () => import("@/components/questions/QuestionList"),
  { ssr: false }
);
