import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import classNames from "classnames";
import html2canvas from "html2canvas";

import "highlight.js/styles/vs2015.css";
// import 'highlight.js/styles/androidstudio.css';
// import 'highlight.js/styles/agate.css';
// import 'highlight.js/styles/hybrid.css';

import hljs from "highlight.js";

import styles from "./styles/Question.module.scss";
import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import { DotsIcon } from "@/assets/icons/DotsIcon";
import { GoogleIcon } from "@/assets/icons/GoogleIcon";
import { ChatGPTIcon } from "@/assets/icons/ChatGPTIcon";
import { MessageIcon } from "@/assets/icons/MessageIcon";
import { useDropdown } from "@/hooks/useDropdown";
import { breakLongLines } from "@/utils/breakLongLines";
import { Dropdown } from "../common/Dropdown";
import { LanguageIcon } from "@/assets/icons/LanguageIcon";
import { AnswerContent } from "./types";
import { PictureIcon } from "@/assets/icons/PictureIcon";

interface QuestionProps {
  item: {
    id: number;
    question: string;
    answer: string | AnswerContent[];
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

  // Solution necessary to avoid spam of hightlighting console errors when answers are visible
  const codeBlocksRef = useRef<HTMLDivElement>(null);
  const [shouldHighlight, setShouldHighlight] = useState(false);

  useEffect(() => {
    if (isAnswerVisible) {
      // Delay setting shouldHighlight to true to ensure the answer content is rendered
      setTimeout(() => setShouldHighlight(true), 0);
    } else {
      setShouldHighlight(false);
    }
  }, [isAnswerVisible]);

  useEffect(() => {
    if (codeBlocksRef.current && shouldHighlight) {
      codeBlocksRef.current.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    }
  }, [shouldHighlight]);

  const getLanguageForHighlighting = (
    category: QuestionCategory,
    specifiedLanguage?: string
  ): string => {
    if (specifiedLanguage) return specifiedLanguage;

    switch (category) {
      case "HTML":
        return "html";
      case "CSS":
        return "css";
      case "JavaScript":
        return "javascript";
      case "TypeScript":
        return "typescript";
      case "React":
        return "jsx";
      case "Git":
        return "git";
      case "Optimization":
        return "javascript";
      case "General":
        return "javascript";
      default:
        return "javascript";
    }
  };

  const renderStyledText = (text: string) => {
    const parts = text.split(/(\{\{.*?\}\})/);
    return parts.map((part, index) => {
      if (part.startsWith("{{") && part.endsWith("}}")) {
        const [content, className] = part.slice(2, -2).split(":");
        return (
          <span key={index} className={styles[className]}>
            {content}
          </span>
        );
      }
      return part;
    });
  };

  const renderAnswer = (answer: string | AnswerContent[]) => {
    if (typeof answer === "string") {
      return <p>{renderStyledText(answer)}</p>;
    }

    return answer.map((content, index) => {
      switch (content.type) {
        case "text":
          return <p key={index}>{renderStyledText(content.content)}</p>;
        case "unordered-list":
          return (
            <ul key={index}>
              {content.content.split("\n").map((item, i) => (
                <li key={i}>{renderStyledText(item)}</li>
              ))}
            </ul>
          );
        case "ordered-list":
          return (
            <ol key={index}>
              {content.content.split("\n").map((item, i) => (
                <li key={i}>{renderStyledText(item)}</li>
              ))}
            </ol>
          );
        case "code":
          return (
            <pre key={index} className={styles.codeSnippetContainer}>
              <code
                className={getLanguageForHighlighting(
                  questionCategory,
                  content.language
                )}
                style={{ paddingTop: "0.7rem" }}
              >
                {content.content}
              </code>
            </pre>
          );
        default:
          return null;
      }
    });
  };

  const {
    isDropdownOpen,
    toggleDropdown,
    closeDropdown,
    dropdownRef,
    toggleRef,
  } = useDropdown();

  const [isDropdownTop, setIsDropdownTop] = useState(true);

  const dotsIconRef = useRef<HTMLDivElement | null>(null);

  // Solution necessary to avoid dropdown overflowing when it's close to the bottom of the screen
  const calculateDropdownPosition = useCallback(() => {
    if (dotsIconRef.current) {
      const rect = dotsIconRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      setIsDropdownTop(rect.top < viewportHeight * 0.7);
    }
  }, []);

  const handleDropdown = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      calculateDropdownPosition();
      toggleDropdown();
    },
    [calculateDropdownPosition, toggleDropdown]
  );

  const handleCheckboxClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isQuestionSelected) {
      unselectQuestion(questionCategory, item.id);
    } else {
      selectQuestion(questionCategory, item.id);
    }
  };

  const handleAnswerVisibility = useCallback(
    (event: React.MouseEvent) => {
      const selectedText = window.getSelection()?.toString();

      // If there is selected text, prevent toggling the visibility
      if (selectedText) {
        return;
      }

      event.stopPropagation();
      if (isAnswerVisible) {
        closeQuestion(questionCategory, item.id);
      } else {
        openQuestion(questionCategory, item.id);
      }
    },
    [isAnswerVisible, closeQuestion, openQuestion, questionCategory, item.id]
  );

  const handleMouseUp = useCallback(
    (event: React.MouseEvent) => {
      handleAnswerVisibility(event);
    },
    [handleAnswerVisibility]
  );

  const generateImage = useCallback(async () => {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.style.background = "rgb(65,65,65)";
    wrapperDiv.style.padding = "10px";

    // Create a temporary div to hold the content
    const tempDiv = document.createElement("div");
    tempDiv.style.padding = "2rem";
    tempDiv.style.background = "rgb(65,65,65)";
    tempDiv.style.maxWidth = "800px";
    tempDiv.style.wordWrap = "break-word";
    tempDiv.style.color = "white";
    tempDiv.style.lineHeight = "1.5";
    tempDiv.style.fontSize = "12px";

    // Add question
    const questionEl = document.createElement("h2");
    questionEl.textContent = item.question;
    questionEl.style.marginBottom = "10px";
    tempDiv.appendChild(questionEl);

    // Add answer
    const answerEl = document.createElement("div");
    answerEl.style.display = "flex";
    answerEl.style.flexDirection = "column";
    answerEl.style.gap = "0.3rem";

    if (typeof item.answer === "string") {
      answerEl.innerHTML = renderStyledTextToHTML(item.answer);
    } else {
      item.answer.forEach((part) => {
        switch (part.type) {
          case "text":
            const p = document.createElement("p");
            p.innerHTML = renderStyledTextToHTML(part.content);
            answerEl.appendChild(p);
            break;
          case "unordered-list":
          case "ordered-list":
            const list = document.createElement(
              part.type === "unordered-list" ? "ul" : "ol"
            );
            list.style.paddingLeft = "20px";
            list.style.paddingRight = "20px";
            part.content.split("\n").forEach((item) => {
              const li = document.createElement("li");
              li.innerHTML = renderStyledTextToHTML(item);
              li.style.marginBottom = "5px";
              list.appendChild(li);
            });
            answerEl.appendChild(list);
            break;
          case "code":
            const pre = document.createElement("pre");
            pre.style.marginTop = "10px";
            pre.style.marginBottom = "10px";
            pre.style.padding = "15px";
            pre.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            pre.style.borderRadius = "4px";
            pre.style.maxWidth = "100%";
            const code = document.createElement("code");
            code.textContent = part.content;
            if (part.language) {
              code.className = `language-${part.language}`;
            }
            pre.appendChild(code);
            answerEl.appendChild(pre);
            break;
        }
      });
    }
    tempDiv.appendChild(answerEl);

    // Append tempDiv to wrapperDiv
    wrapperDiv.appendChild(tempDiv);

    // Temporarily add wrapperDiv to document
    document.body.appendChild(wrapperDiv);

    // Apply syntax highlighting
    wrapperDiv.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });

    // Wait for any async operations to complete
    await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay to ensure content is fully rendered

    try {
      const canvas = await html2canvas(tempDiv, {
        backgroundColor: "white",
        scale: 2,
        logging: false,
        useCORS: true,
      });
      const imageDataUrl = canvas.toDataURL("image/png");

      // Create a temporary anchor to trigger the download
      const a = document.createElement("a");
      a.href = imageDataUrl;
      a.download = `question-${item.id}.png`;
      a.click();
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to generate image. Please try again.");
    } finally {
      // Clean up
      document.body.removeChild(tempDiv);
    }
  }, [item]);

  // I abandoned keyword highlighting because it feels like it does not make much sense
  // that some questions have words highlighted, and some not. I'm keeping it here for the future
  const renderStyledTextToHTML = (text: string) => {
    const parts = text.split(/(\{\{.*?\}\})/);
    return parts
      .map((part) => {
        if (part.startsWith("{{") && part.endsWith("}}")) {
          const [content, className] = part.slice(2, -2).split(":");
          return `<span style="${getStyleForClass(
            className
          )}">${content}</span>`;
        }
        return part;
      })
      .join("");
  };

  const getStyleForClass = (className: string) => {
    switch (className) {
      case "keyword":
        return "color: #569CD6; font-weight: bold;";
      default:
        return "";
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
        text: "Export as image",
        icon: <PictureIcon />,
        handler: generateImage,
      },
      {
        text: "Start a discussion",
        icon: <MessageIcon />,
        handler: () => {
          const issueTitle = encodeURIComponent(
            `[Question discussion] ${item.question}`
          );
          let formattedAnswer = "";
          if (typeof item.answer === "string") {
            formattedAnswer = `\`\`\`\n${breakLongLines(item.answer)}\n\`\`\``;
          } else {
            formattedAnswer = item.answer
              .map((content) => {
                switch (content.type) {
                  case "text":
                    return content.content;
                  case "unordered-list":
                  case "ordered-list":
                    return content.content
                      .split("\n")
                      .map((item) => `- ${item}`)
                      .join("\n");
                  case "code":
                    return `\`\`\`${content.language || ""}\n${breakLongLines(
                      content.content
                    )}\n\`\`\``;
                  default:
                    return "";
                }
              })
              .join("\n\n");
          }
          const issueBody = encodeURIComponent(formattedAnswer);
          const url = `https://github.com/matt765/front-end-questions/issues/new?title=${issueTitle}&body=${issueBody}`;
          window.open(url, "_blank");
        },
      },
      {
        text: "Translate",
        icon: <LanguageIcon />,
        handler: () => {
          let textToTranslate = `Question: ${item.question}\n\nAnswer: `;
          if (typeof item.answer === "string") {
            textToTranslate += item.answer;
          } else {
            textToTranslate += item.answer
              .map((content) => {
                switch (content.type) {
                  case "text":
                    return content.content;
                  case "unordered-list":
                  case "ordered-list":
                    return content.content
                      .split("\n")
                      .map((item) => `- ${item}`)
                      .join("\n");
                  case "code":
                    return `[Code]\n${content.content}\n[/Code]`;
                  default:
                    return "";
                }
              })
              .join("\n\n");
          }
          const encodedText = encodeURIComponent(textToTranslate);
          const url = `https://translate.google.com/?sl=auto&tl=en&text=${encodedText}&op=translate`;
          window.open(url, "_blank");
        },
      },
    ],
    [item.question, item.answer, generateImage]
  );

  return (
    <div
   onClick={handleMouseUp}
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
            ref={(el) => {
              if (toggleRef && "current" in toggleRef) {
                toggleRef.current = el;
              }
              dotsIconRef.current = el;
            }}
            className={styles.dotsIcon}
            onClick={handleDropdown}
          >
            <DotsIcon />
          </div>
          {isDropdownOpen && (
            <div
              className={classNames(styles.questionDropdown, {
                [styles.questionDropdownTop]: isDropdownTop,
                [styles.questionDropdownBottom]: !isDropdownTop,
              })}
            >
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
        <div className={styles.answer} ref={codeBlocksRef}>
          {renderAnswer(item.answer)}
        </div>
      )}
    </div>
  );
};
