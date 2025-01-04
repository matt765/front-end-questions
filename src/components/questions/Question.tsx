import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import classNames from "classnames";
import html2canvas from "html2canvas";

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
import { Checkbox } from "../common/Checkbox";
import { EyeIcon } from "@/assets/icons/EyeIcon";
import { EyeOffIcon } from "@/assets/icons/EyeOffIcon";
import useLayoutStore from "@/store/layoutStore";
import { PlayIcon } from "@/assets/icons/PlayIcon";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import { QuestionCodeSnippet } from "./QuestionCodeSnippet";
import useConsoleStore from "@/store/consoleStore";
import { useSettingsStore } from "@/store/settingsStore";
import { useModal } from "@/hooks/useModal";
import { ConfirmModal } from "../common/ConfirmModal";

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
  const { isAnswerBackgroundVisible } = useSettingsStore();

  const openedQuestionsInCategory = questionStore[questionCategory];
  const selectedQuestionsInCategory =
    questionStore[`${questionCategory}Checkboxes`];
  const { openQuestion, closeQuestion, selectQuestion, unselectQuestion } =
    questionStore;
  const { algorithmsSolutions, componentsSolutions, toggleSolution } =
    useQuestionStore();
  const isSolutionVisible =
    questionCategory === "Algorithms"
      ? algorithmsSolutions.includes(item.id)
      : componentsSolutions.includes(item.id);

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
    //  loadHighlightTheme(theme);
    if (shouldHighlight) {
      codeBlocksRef.current?.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    }
    //  }, [theme, shouldHighlight]);
  }, [shouldHighlight]);
  // const handleChangeTheme = (newTheme: string) => {
  //   setTheme(newTheme);
  // };

  useEffect(() => {
    if (isSolutionVisible) {
      codeBlocksRef.current?.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    }
  }, [isSolutionVisible]);

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
      case "Algorithms":
        return "javascript";
      case "Components":
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

    let hasSolution = false;

    const renderedContent = answer.map((content, index) => {
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
        case "unmarked-list":
          return (
            <ul key={index} className={styles.unmarkedList}>
              {content.content.split("\n").map((item, i) => (
                <li key={i}>{renderStyledText(item)}</li>
              ))}
            </ul>
          );
        case "code":
          return (
            <QuestionCodeSnippet
              key={index}
              content={content.content}
              language={getLanguageForHighlighting(
                questionCategory,
                content.language
              )}
              onCopyToConsole={() => handleCopyToConsole(content.content)}
              onCopyToClipboard={() => handleCopyToClipboard(content.content)}
              questionId={item.id}
            />
          );
        case "codeExerciseSolution":
          hasSolution = true;
          return (
            <React.Fragment key={index}>
              <button
                className={styles.showSolutionButton}
                onClick={(event) => {
                  event.stopPropagation();
                  toggleSolution(questionCategory, item.id);
                }}
              >
                {isSolutionVisible ? (
                  <>
                    <EyeIcon /> Hide solution
                  </>
                ) : (
                  <>
                    <EyeOffIcon /> Show solution
                  </>
                )}
              </button>
              {isSolutionVisible && (
                <QuestionCodeSnippet
                  content={content.content}
                  language={getLanguageForHighlighting(
                    questionCategory,
                    content.language
                  )}
                  onCopyToConsole={() => handleCopyToConsole(content.content)}
                  onCopyToClipboard={() =>
                    handleCopyToClipboard(content.content)
                  }
                />
              )}
            </React.Fragment>
          );
        default:
          return null;
      }
    });

    return <>{renderedContent}</>;
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

  // Solution necessary to avoid question dropdown overflowing when it's close to the bottom of the screen
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
  const { setConsoleCode, toggleConsole, isConsoleOpen } = useConsoleStore();
  const imageExportModal = useModal();

  const handleCopyToConsole = (codeContent: string) => {
    setConsoleCode(codeContent);
    if (!isConsoleOpen) {
      toggleConsole();
    }
  };

  const handleCopyToClipboard = (codeContent: string) => {
    navigator.clipboard.writeText(codeContent);
  };

  const handleMouseUp = useCallback(
    (event: React.MouseEvent) => {
      handleAnswerVisibility(event);
    },
    [handleAnswerVisibility]
  );

  const escapeHTML = (unsafeText: string) => {
    return unsafeText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const generateImage = useCallback(async () => {
    const outerContainer = document.createElement("div");
    outerContainer.style.background =
      "radial-gradient(at 49% 80%, rgb(55, 58, 67) 0px, transparent 50%), radial-gradient(at 66% 49%, rgb(55, 58, 67) 0px, transparent 50%), radial-gradient(at 29% 49%, rgb(55, 58, 67) 0px, transparent 50%), rgb(34, 35, 37) radial-gradient(at 49% 22%, rgb(55, 58, 67) 0px, transparent 50%)";
    outerContainer.style.padding = "2rem";
    outerContainer.style.maxWidth = "800px";

    const innerContainer = document.createElement("div");
    innerContainer.style.borderRadius = "10px";
    innerContainer.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
    innerContainer.style.overflow = "hidden";
    innerContainer.style.backgroundColor = "rgb(255,255,255,0.04)";
    innerContainer.style.padding = "2rem";
    innerContainer.style.width = "100%";
    innerContainer.style.height = "100%";
    innerContainer.style.wordWrap = "break-word";
    innerContainer.style.color = "white";
    innerContainer.style.lineHeight = "1.5";
    innerContainer.style.fontSize = "12px";
    innerContainer.style.borderStyle = "solid";
    innerContainer.style.borderWidth = "1px";
    innerContainer.style.borderColor = "rgb(255,255,255,0.07)";

    const questionEl = document.createElement("h2");
    questionEl.textContent = item.question;
    questionEl.style.marginBottom = "10px";
    innerContainer.appendChild(questionEl);

    const answerEl = document.createElement("div");
    answerEl.style.display = "flex";
    answerEl.style.flexDirection = "column";
    answerEl.style.gap = "0.3rem";

    const footerContainer = document.createElement("div");
    footerContainer.style.width = "100%";
    footerContainer.style.display = "flex";
    footerContainer.style.justifyContent = "flex-end";
    // footerContainer.style.marginTop = "20px";
    footerContainer.style.color = "lightgray";

    // const footerText = document.createElement("span");
    // footerText.textContent = "Source: frontendquestions.com";
    // footerText.style.fontSize = "12px";

    if (typeof item.answer === "string") {
      answerEl.innerHTML = renderStyledTextToHTML(item.answer);
    } else {
      item.answer.forEach((part) => {
        switch (part.type) {
          case "text":
            const p = document.createElement("p");
            p.innerHTML = renderStyledTextToHTML(part.content);
            p.style.marginBottom = "0.1rem";
            answerEl.appendChild(p);
            break;
          case "unmarked-list":
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
              if (part.type === "unmarked-list") {
                li.style.listStyle = "none";
              }
              list.appendChild(li);
            });
            answerEl.appendChild(list);
            break;
          case "code":
            const pre = document.createElement("pre");
            pre.style.marginTop = "10px";
            pre.style.marginBottom = "10px";
            pre.style.padding = "3px";
            pre.style.backgroundColor = "rgba(232, 232, 232, 0.04)";
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

    innerContainer.appendChild(answerEl);

    outerContainer.appendChild(innerContainer);

    document.body.appendChild(outerContainer);

    // footerContainer.appendChild(footerText);
    innerContainer.appendChild(footerContainer);

    // Apply syntax highlighting
    outerContainer.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block as HTMLElement);

      // Apply GitHub Dark Dimmed theme styles directly to the highlighted elements
      const applyStyle = (
        selector: string,
        styles: Partial<CSSStyleDeclaration>
      ) => {
        block.querySelectorAll(selector).forEach((el) => {
          Object.assign((el as HTMLElement).style, styles);
        });
      };

      (block as HTMLElement).style.color = "#adbac7";
      (block as HTMLElement).style.backgroundColor = "#282a2e";

      applyStyle(
        ".hljs-doctag, .hljs-keyword, .hljs-meta .hljs-keyword, .hljs-template-tag, .hljs-template-variable, .hljs-type, .hljs-variable.language_",
        { color: "#f47067" }
      );
      applyStyle(
        ".hljs-title, .hljs-title.class_, .hljs-title.class_.inherited__, .hljs-title.function_",
        { color: "#dcbdfb" }
      );
      applyStyle(
        ".hljs-attr, .hljs-attribute, .hljs-literal, .hljs-meta, .hljs-number, .hljs-operator, .hljs-variable, .hljs-selector-attr, .hljs-selector-class, .hljs-selector-id",
        { color: "#6cb6ff" }
      );
      applyStyle(".hljs-regexp, .hljs-string, .hljs-meta .hljs-string", {
        color: "#96d0ff",
      });
      applyStyle(".hljs-built_in, .hljs-symbol", { color: "#f69d50" });
      applyStyle(".hljs-comment, .hljs-code, .hljs-formula", {
        color: "#768390",
      });
      applyStyle(
        ".hljs-name, .hljs-quote, .hljs-selector-tag, .hljs-selector-pseudo",
        { color: "#8ddb8c" }
      );
      applyStyle(".hljs-subst", { color: "#adbac7" });
      applyStyle(".hljs-section", { color: "#316dca", fontWeight: "bold" });
      applyStyle(".hljs-bullet", { color: "#eac55f" });
      applyStyle(".hljs-emphasis", { color: "#adbac7", fontStyle: "italic" });
      applyStyle(".hljs-strong", { color: "#adbac7", fontWeight: "bold" });
      applyStyle(".hljs-addition", {
        color: "#b4f1b4",
        backgroundColor: "#1b4721",
      });
      applyStyle(".hljs-deletion", {
        color: "#ffd8d3",
        backgroundColor: "#78191b",
      });
      applyStyle(".hljs-keyword", { color: "#8ddb8c" });

      // Ignored elements (keeping their default styles)
      // .hljs-char.escape_, .hljs-link, .hljs-params, .hljs-property, .hljs-punctuation, .hljs-tag
    });

    await new Promise((resolve) => setTimeout(resolve, 100));

    try {
      const canvas = await html2canvas(outerContainer, {
        backgroundColor: "rgb(55,55,55)",
        scale: 2,
        logging: false,
        useCORS: true,
      });
      const imageDataUrl = canvas.toDataURL("image/png");

      const a = document.createElement("a");
      a.href = imageDataUrl;
      a.download = `question-${item.id}.png`;
      a.click();
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to generate image. Please try again.");
    } finally {
      document.body.removeChild(outerContainer);
    }
  }, [item]);

  // I abandoned keyword highlighting in question list because it feels like it does not make much sense
  // that some questions have words highlighted, and some not. I left it only for image generation
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
        return escapeHTML(part);
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
        handler: imageExportModal.openModal,
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
                  case "unmarked-list":
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
    [item.question, item.answer, generateImage, imageExportModal.openModal]
  );

  return (
    <>
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
              <div className={styles.checkboxWrapper}>
                <Checkbox
                  id={`checkbox-${item.id}`}
                  checked={isQuestionSelected}
                  onChange={() =>
                    isQuestionSelected
                      ? unselectQuestion(questionCategory, item.id)
                      : selectQuestion(questionCategory, item.id)
                  }
                  transparent
                />
              </div>
            </div>
          </div>
        </div>
        {isClient && isAnswerVisible && (
          <div
            ref={codeBlocksRef}
            className={classNames(styles.answer, {
              [styles.hiddenBackground]: !isAnswerBackgroundVisible,
            })}
          >
            {renderAnswer(item.answer)}
          </div>
        )}
      </div>
      <ConfirmModal
        isOpen={imageExportModal.isOpen}
        closeModal={imageExportModal.closeModal}
        onConfirm={generateImage}
        title="Export as image"
        description="This action will export the question and answer as single PNG image with an average size of 500-700 KB"
      />
    </>
  );
};
