import { useQuestionStore } from "@/store/questionStore";
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
  const [isChecked, setIsChecked] = useState(false);
  const tech = "html";
  const isOpen = useQuestionStore((state) =>
    state[tech].includes(item.question)
  );
  const [isAnswerVisible, setIsAnswerVisible] = useState(isOpen);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <Flex
      direction="column"
      sx={{
        color: "white",
        padding: "0rem",
      }}
      w="100%"
    >
      <Flex
        sx={{
          border: "0px solid rgb(0,0,0,0.1)",
          borderWidth: "0 0 0px 0",
          height: "4rem",
          alignItems: "center",
          padding: "2rem",
          paddingTop: "2.5rem",
          cursor: "pointer",
          justifyContent: "space-between",
          transition: "0.1s",
          backgroundColor: isAnswerVisible
            ? "rgb(255, 255, 255, 0)"
            : "rgb(0,0,0,0)",
          "&:hover": {
            backgroundColor: "rgb(255, 255, 255, 0)",
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
            position: "relative",
          }}
          onClick={(event) => {
            event.stopPropagation();
            setIsChecked(!isChecked);
          }}
        >
          <Flex
            sx={{
              cursor: "pointer",
              width: "1.4rem",
              height: "1.4rem",
              borderColor: "rgb(255,255,255,0.2)",
              borderStyle: "solid",
              borderWidth: "1px",
              "&:hover": {
                borderColor: "rgb(255,255,255,0.4)",
              },
            }}
          />
          {isChecked && (
            <Flex
              sx={{
                color: "rgb(255,255,255,0.8)",
                fontSize: "1rem",
                position: "absolute",
                left: "0.35rem",
                top: "-0.05rem",
              }}
            >
              ✓
            </Flex>
          )}
        </Flex>
      </Flex>
      {isAnswerVisible && (
        <Flex
          sx={{
            border: "1px solid rgb(255,255,255,0.1)",
            alignItems: "flex-start",
            paddingLeft: "1.5rem",
            paddingTop: "1.4rem",
            paddingBottom: "1.4rem",
            backgroundColor: "rgb(255, 255, 255, 0.03)",
            marginLeft: "2rem",
            marginRight: "2rem",
            borderRadius: "6px",
          }}
        >
          <ReactMarkdown>{item.answer}</ReactMarkdown>
        </Flex>
      )}
    </Flex>
  );
};

export default Question;
