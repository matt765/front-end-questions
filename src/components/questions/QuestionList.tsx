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
          overflowX: "hidden",
          paddingRight: "2rem",
          paddingLeft: "2rem",
          '@media (max-width: 50em)': {
            paddingRight: "1rem",
            paddingLeft: "1rem",
            height: "calc(100vh - 3rem)"
          },
          '@media (max-width: 40em)': {
            paddingRight: "0rem",
            paddingLeft: "0rem",
            paddingBottom: "2rem"
          },
        }}
      >
        <List
          type="ordered"
          mt="2rem"
          pb="2rem"
          w="100%"         
          px="10rem"
          className={firaSans.className}
          sx={{
            border: "0px solid rgb(0,0,0,0.1)",
            '@media (max-width: 110em)': {
              paddingRight: "6rem",
              paddingLeft: "6rem",
            },
            '@media (max-width: 90em)': {
              paddingRight: "4rem",
              paddingLeft: "4rem",
            },
            '@media (max-width: 75em)': {
              paddingRight: "2.5rem",
              paddingLeft: "1.5rem",
            },
            '@media (max-width: 67.5em)': {
              paddingRight: "2.5rem",
              paddingLeft: "2.5rem",
            },
            '@media (max-width: 50em)': {
              paddingRight: "0rem",
              paddingLeft: "0rem",
            },
          }}
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
