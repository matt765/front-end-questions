import { Flex, List } from "@mantine/core";
import dynamic from "next/dynamic";
import { useRef } from "react";

import { Tech } from "@/store/questionStore";
import { firaSans } from "@/utils/fonts";
import { ArrowNavigation } from "./ArrowNavigation";
import Question from "./Question";

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
      <Flex
        ref={questionListRef}
        w="100%"
        h="calc(100vh - 4.5rem)"
        justify="center"
        align="flex-start"
        sx={{
          overflow: "auto",
          paddingRight: "2rem",
          paddingLeft: "2rem",
        }}
      >
        <List
          type="ordered"
          mt="2rem"
          pb="2rem"
          w="100%"
          sx={{
            border: "0px solid rgb(0,0,0,0.1)",
          }}
          px="10rem"
          className={firaSans.className}
        >
          {questions.map((item, index) => (
            <Question key={index} item={item} tech={tech} />
          ))}
        </List>
      </Flex>
    </>
  );
};

export default QuestionList;

export const DynamicQuestionList = dynamic(
  () => import("@/components/questions/QuestionList"),
  { ssr: false }
);
