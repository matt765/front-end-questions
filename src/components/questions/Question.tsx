import React, { useEffect, useState, useCallback, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";

import styles from "./styles/Question.module.scss";
import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import { DotsIcon } from "@/assets/icons/DotsIcon";
import { GoogleIcon } from "@/assets/icons/GoogleIcon";
import { ChatGPTIcon } from "@/assets/icons/ChatGPTIcon";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import { MessageIcon } from "@/assets/icons/MessageIcon";
import { useDropdown } from "@/hooks/useDropdown";
import { breakLongLines } from "@/utils/breakLongLines";
import { Dropdown } from "../common/Dropdown";
import { LanguageIcon } from "@/assets/icons/LanguageIcon";

interface QuestionProps {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  questionCategory: QuestionCategory;
  originalIndex: number;
}

export const Question = ({
  item,
  questionCategory,
  originalIndex,
}: QuestionProps) => {
  const questionStore = useQuestionStore();

  const openedQuestionsInCategory = questionStore[questionCategory];
  const selectedQuestionsInCategory =
    questionStore[`${questionCategory}Checkboxes`];
  const { openQuestion, closeQuestion, selectQuestion, unselectQuestion } =
    questionStore;

  const isQuestionSelected = selectedQuestionsInCategory.includes(item.id);
  const isAnswerVisible = openedQuestionsInCategory.includes(item.id);

  // Prevent hydration errors
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    isDropdownOpen,
    toggleDropdown,
    closeDropdown,
    dropdownRef,
    toggleRef,
  } = useDropdown();

  const handleCheckboxClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isQuestionSelected) {
      unselectQuestion(questionCategory, item.id);
    } else {
      selectQuestion(questionCategory, item.id);
    }
  };

  const handleAnswerVisibility = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isAnswerVisible) {
      closeQuestion(questionCategory, item.id);
    } else {
      openQuestion(questionCategory, item.id);
    }
  };

  const dropdownData = useMemo(
    () => [
      {
        text: "Search in Google",
        icon: <GoogleIcon />,
        handler: () => {
          const searchQuery = encodeURIComponent(item.question);
          window.open(
            `https://www.google.com/search?q=${searchQuery}`,
            "_blank"
          );
        },
      },
      {
        text: "Ask ChatGPT",
        icon: <ChatGPTIcon />,
        handler: () => {
          const chatGPTQuery = encodeURIComponent(item.question);
          window.open(
            `https://chat.openai.com/chat?q=${chatGPTQuery}`,
            "_blank"
          );
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
      {
        text: "Translate",
        icon: <LanguageIcon />,
        handler: () => {
          const textToTranslate = encodeURIComponent(`Question: ${item.question}\n\nAnswer: ${item.answer}`);
          const url = `https://translate.google.com/?sl=auto&tl=en&text=${textToTranslate}&op=translate`;
          window.open(url, "_blank");
        },
      },
    ],
    [item.question, item.answer]
  );

  return (
    <div
      onClick={handleAnswerVisibility}
      className={classNames(styles.questionWrapper, {
        [styles.minHeightAnswerVisible]: isAnswerVisible,
        [styles.minHeightAnswerNotVisible]: !isAnswerVisible,
        // Dynamic padding to adjust for double digits and triple digits in ordered list numbers
        [styles.paddingSmall]: originalIndex < 10,
        [styles.paddingMedium]: originalIndex >= 10 && originalIndex < 100,
        [styles.paddingLarge]: originalIndex > 99,
      })}
      suppressHydrationWarning
    >
      <div className={styles.questionFirstRow}>
        <li className={styles.questionText} value={originalIndex}>
          {item.question}
        </li>
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
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              <Dropdown
                items={dropdownData}
                onClose={closeDropdown}
                dropdownRef={dropdownRef}
              />
            </div>
          )}
          <div
            style={{ position: "relative", display: "flex" }}
            onClick={handleCheckboxClick}
          >
            <div className={styles.checkboxWrapper} />
            {isClient && isQuestionSelected && (
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
