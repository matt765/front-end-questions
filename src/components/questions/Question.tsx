import { QuestionStore, Tech, useQuestionStore } from "@/store/questionStore";
import { firaSans, inter } from "@/utils/fonts";
import { Checkbox, Flex, List } from "@mantine/core";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface QuestionProps {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  tech: Tech;
}

const Question = ({ item, tech }: QuestionProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const techIds = useQuestionStore((state) => state[tech]);
  const addQuestionId = useQuestionStore((state) => state.addQuestionId);
  const removeQuestionId = useQuestionStore((state) => state.removeQuestionId);

  const [isAnswerVisible, setIsAnswerVisible] = useState(
    techIds.includes(item.id)
  );
  console.log(techIds);
  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };
  useEffect(() => {
    setIsAnswerVisible(techIds.includes(item.id));
}, [techIds, item.id]);
  useEffect(() => {
    if (isAnswerVisible) {
      addQuestionId(tech, item.id);
    } else {
      removeQuestionId(tech, item.id);
    }
  }, [isAnswerVisible, tech, item.id, addQuestionId, removeQuestionId]);

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
