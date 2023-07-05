import { Flex, List, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import { Tech, useQuestionStore } from "@/store/questionStore";

interface QuestionProps {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  tech: Tech;
}

const Question = ({ item, tech }: QuestionProps) => {
  const techIds = useQuestionStore((state) => state[tech]);
  const addQuestionId = useQuestionStore((state) => state.addQuestionId);
  const removeQuestionId = useQuestionStore((state) => state.removeQuestionId);
  const techCheckboxes = useQuestionStore(
    (state) => state[`${tech}Checkboxes`]
  );
  const [isChecked, setIsChecked] = useState(techCheckboxes.includes(item.id));
  const addCheckbox = useQuestionStore((state) => state.addCheckbox);
  const removeCheckbox = useQuestionStore((state) => state.removeCheckbox);
  const [isAnswerVisible, setIsAnswerVisible] = useState(
    techIds.includes(item.id)
  );

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

  useEffect(() => {
    setIsChecked(techCheckboxes.includes(item.id));
  }, [techCheckboxes, tech, item.id]);

  useEffect(() => {
    if (isChecked) {
      addCheckbox(tech, item.id);
    } else {
      removeCheckbox(tech, item.id);
    }
  }, [isChecked, tech, item.id, addCheckbox, removeCheckbox]);

  const theme = useMantineTheme();

  return (
    <Flex
      direction="column"
      sx={{
        color: theme.colors.content[0],
        padding: "0rem",
        borderWidth: isAnswerVisible ? "0px" : " 0 0 0px 0",
        borderStyle: "solid",
        borderColor: theme.colors.content[8],
      }}
      w="100%"
    >
      <Flex
        sx={{
          border: "0px solid rgb(0,0,0,0.1)",
          borderWidth: "0 0 0px 0",
          height: "4rem",
          alignItems: "center",
          padding: "0rem",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
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
              borderColor: theme.colors.content[6],
              borderStyle: "solid",
              borderWidth: "1px",
              "&:hover": {
                borderColor: theme.colors.content[7],
              },
            }}
          />
          {isChecked && (
            <Flex
              sx={{
                color: theme.colors.content[0],
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
            marginLeft: "0rem",
            marginRight: "0rem",
            borderRadius: "6px",
            position: "relative",
            paddingRight: "1.4rem",
            borderColor: theme.colors.content[8],
            marginBottom: "1rem",
            backgroundColor: theme.colors.bg[7],
            background: theme.colorScheme === 'dark' ? "linear-gradient(177deg, rgba(65,65,65,0.7) 0%, rgba(96,96,96,0.4) 100%)" : "#F4F7FE"
          }}
        >
          <ReactMarkdown>{item.answer}</ReactMarkdown>
        </Flex>
      )}
    </Flex>
  );
};

export default Question;
