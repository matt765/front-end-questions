import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";

import styles from "./styles/Question.module.scss";
import { Tech, useQuestionStore } from "@/store/questionStore";
import { DotsIcon } from "@/assets/icons/DotsIcon";
import { GithubIcon } from "@/assets/icons/GithubIcon";
import { GoogleIcon } from "@/assets/icons/GoogleIcon";
import { ChatGPTIcon } from "@/assets/icons/ChatGPTIcon";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import { MessageIcon } from "@/assets/icons/MessageIcon";
import { useDropdown } from "@/hooks/useDropdown";
import { breakLongLines } from "@/utils/breakLongLines";

interface QuestionProps {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  tech: Tech;
  index: number;
}

const Question = ({ item, tech, index }: QuestionProps) => {
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

  // Prevent hydration errors
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { isOpen, toggleDropdown, closeDropdown, dropdownRef, toggleRef } =
    useDropdown();

  const dropdownData = [
    {
      text: "Search in Google",
      icon: <GoogleIcon />,
      handler: () => {
        const searchQuery = encodeURIComponent(item.question);
        window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
      },
    },
    {
      text: "Ask ChatGPT",
      icon: <ChatGPTIcon />,
      handler: () => {
        const chatGPTQuery = encodeURIComponent(item.question);
        window.open(`https://chat.openai.com/chat?q=${chatGPTQuery}`, "_blank");
      },
    },
    {
      text: "Copy to clipboard",
      icon: <CopyIcon />,
      handler: () => navigator.clipboard.writeText(item.question),
    },
    {
      text: "Start a discussion",
      icon: <MessageIcon />,
      handler: () => {
        const issueTitle = encodeURIComponent(
          `[Question discussion] ${item.question}`
        );
        const formattedAnswer = `\`\`\`\n${breakLongLines(
          item.answer
        )}\n\`\`\``;
        const issueBody = encodeURIComponent(formattedAnswer);
        const url = `https://github.com/matt765/front-end-questions/issues/new?title=${issueTitle}&body=${issueBody}`;
        window.open(url, "_blank");
      },
    },
  ];

  return (
    <div
      onClick={toggleAnswerVisibility}
      className={classNames(styles.questionWrapper, {
        [styles.minHeightAnswerVisible]: isAnswerVisible,
        [styles.minHeightAnswerNotVisible]: !isAnswerVisible,
        [styles.paddingSmall]: index < 9,
        [styles.paddingMedium]: index >= 9 && index < 99,
        [styles.paddingLarge]: index >= 99,
      })}
      suppressHydrationWarning
    >
      <div className={styles.questionFirstRow}>
        <li className={styles.questionText}>{item.question}</li>
        <div className={styles.questionActions}>
          <div
            ref={toggleRef}
            className={styles.dotsIcon}
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown();
            }}
          >
            <DotsIcon />
          </div>
          {isOpen && (
            <div ref={dropdownRef} className={styles.questionDropdown}>
              {dropdownData.map((row, idx) => (
                <div
                  key={idx}
                  className={styles.questionDropdownRow}
                  onClick={(e) => {
                    e.stopPropagation();
                    row.handler();
                    closeDropdown();
                  }}
                >
                  <span className={styles.questionDropdownRowIcon}>
                    {row.icon}
                  </span>
                  <span className={styles.questionDropdownRowText}>
                    {row.text}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div
            style={{ position: "relative", display: "flex" }}
            onClick={(event) => {
              event.stopPropagation();
              setIsChecked(!isChecked);
            }}
          >
            <div className={styles.checkboxWrapper} />
            {isClient && isChecked && (
              <div className={styles.checkboxIcon}>✓</div>
            )}
          </div>
        </div>
      </div>
      {isClient && isAnswerVisible && (
        <div className={styles.answer}>
          <ReactMarkdown>{item.answer}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default Question;
