import React from "react";
import styles from "./styles/QuestionCodeSnippet.module.scss";
import { PlayIcon } from "@/assets/icons/PlayIcon";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const HIDE_PLAY_BUTTON_IDS = [
  3011, 3017, 3018, 3020, 3021, 3023, 3032, 3039, 3071, 3072, 3073, 3078, 3080,
  3082, 3084, 3090, 3091, 3100, 3101, 3118, 3122, 3124, 3127,
];

interface QuestionCodeSnippetProps {
  content: string;
  language: string;
  onCopyToConsole: (code: string) => void;
  onCopyToClipboard: (code: string) => void;
  questionId?: number;
}

export const QuestionCodeSnippet = ({
  content,
  language,
  onCopyToConsole,
  onCopyToClipboard,
  questionId,
}: QuestionCodeSnippetProps) => {
  const isSingleLine = content.split(/\r\n|\r|\n/).length === 1;
  const pathname = usePathname();

  const shouldShowPlayButton = !HIDE_PLAY_BUTTON_IDS.includes(questionId || 0);

  return (
    <div
      className={classNames(styles.codeSnippetContainer, {
        [styles.singleLine]: isSingleLine,
      })}
    >
      <div className={styles.codeSnippetButtons}>
        {language === "javascript" &&
          (pathname === "/javascript" || pathname === "/code-exercises") &&
          shouldShowPlayButton && (
            <button
              className={styles.codeSnippetButton}
              onClick={(e) => {
                e.stopPropagation();
                onCopyToConsole(content);
              }}
            >
              <PlayIcon />
            </button>
          )}
        <button
          className={styles.codeSnippetButton}
          onClick={(e) => {
            e.stopPropagation();
            onCopyToClipboard(content);
          }}
        >
          <CopyIcon />
        </button>
      </div>
      <pre>
        <code className={language} style={{ paddingTop: "0.7rem" }}>
          {content}
        </code>
      </pre>
    </div>
  );
};
