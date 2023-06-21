import { QuestionStore, Tech, useQuestionStore } from "@/store/questionStore";
import { firaSans } from "@/utils/fonts";
import { Flex, List, Loader } from "@mantine/core";
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
  const { isLoading, loadQuestions } = useQuestionStore();

  useEffect(() => {
    loadQuestions();
  }, []);

  if (isLoading)
    return (
      <Flex
        w="100%"
        h="100%"
        justify="center"
        align="center"
        pb="5rem"
        pr="3rem"
      >
        <Loader />
      </Flex>
    );
  return (
    <Flex
      w="100%"
      h="calc(100vh - 4.5rem)"
      justify="center"
      align="flex-start"
      sx={{
        overflow: "auto",
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
