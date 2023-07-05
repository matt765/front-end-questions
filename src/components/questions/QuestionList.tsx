import { QuestionStore, Tech, useQuestionStore } from "@/store/questionStore";
import { firaSans } from "@/utils/fonts";
import { Flex, List, Loader } from "@mantine/core";
import dynamic from "next/dynamic";
import { useEffect } from "react";
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
  return (
    <Flex
      w="100%"
      h="calc(100vh - 4.5rem)"
      justify="center"
      align="flex-start"
      sx={{
        overflow: "auto",
        paddingRight: "2rem",
        paddingLeft: "2rem"
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
  );
};

export default QuestionList;

export const DynamicQuestionList = dynamic(
  () => import("@/components/questions/QuestionList"),
  { ssr: false }
);