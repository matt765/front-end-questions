import { QuestionStore, Tech } from "@/store/questionStore";
import { firaSans } from "@/utils/fonts";
import { Flex, List } from "@mantine/core";
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
