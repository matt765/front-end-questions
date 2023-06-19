import { firaSans, inter } from "@/utils/fonts";
import { Checkbox, Flex, List } from "@mantine/core";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface QuestionProps {
  item: {
    question: string;
    answer: string;
  };
}

const Question = ({ item }: QuestionProps) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setIsChecked(!isChecked);
  };

  return (
    <Flex
      direction="column"
      sx={{
        color: "white",
        backgroundColor: isAnswerVisible
          ? "rgb(255,255,255, 0.04)"
          : "rgb(0,0,0,0)",
      }}
      w="100%"
    >
      <Flex
        sx={{
          border: "0px solid rgb(0,0,0,0.1)",
          borderWidth: "0 0 0px 0",
          height: "4rem",
          alignItems: "center",
          padding: "1rem",
          cursor: "pointer",
          justifyContent: "space-between",
          transition: "0.1s",
          "&:hover": {
            backgroundColor: "rgb(255, 255, 255, 0.03)",
          },
        }}
        onClick={toggleAnswerVisibility}
      >
        <List.Item
          sx={{
            fontSize: "1.2rem",
            letterSpacing: "0.2px",
          }}
        >
          {item.question}
        </List.Item>
        <Flex
          sx={{
            cursor: "pointer !important",
          }}
        >
          <Checkbox
            color="gray"
            checked={isChecked}
            onChange={handleCheckboxChange}
            onClick={(event) => event.stopPropagation()}
          />
        </Flex>
      </Flex>
      {isAnswerVisible && (
        <Flex
          sx={{
            border: "0px solid rgb(0,0,0,0.1)",
            borderWidth: "0 0 0px 0",
            alignItems: "flex-start",
            paddingLeft: "1rem",
            paddingTop: "1.2rem",
            paddingBottom: "1.4rem",
          }}
        >
          <ReactMarkdown>{item.answer}</ReactMarkdown>
        </Flex>
      )}
    </Flex>
  );
};

export default Question;
