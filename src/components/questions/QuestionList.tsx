import { firaSans } from "@/utils/fonts";
import { Flex, List } from "@mantine/core";
import Question from "./Question";

interface QuestionListProps {
  questions: {
    question: string;
    answer: string;
  }[];
}

const QuestionList = ({ questions }: QuestionListProps) => {
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
          <Question key={index} item={item} />
        ))}
      </List>
    </Flex>
  );
};

export default QuestionList;
