import React from "react";
import styles from "./styles/QuestionCodeSnippet.module.scss";
import { PlayIcon } from "@/assets/icons/PlayIcon";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import classNames from "classnames";
import { usePathname } from "next/navigation";

interface QuestionCodeSnippetProps {
  content: string;
  language: string;
  onCopyToConsole: (code: string) => void;
  onCopyToClipboard: (code: string) => void;
}

export const QuestionCodeSnippet = ({
  content,
  language,
  onCopyToConsole,
  onCopyToClipboard,
}: QuestionCodeSnippetProps) => {
  const isSingleLine = content.split(/\r\n|\r|\n/).length === 1;
  const pathname = usePathname()

  return (
    <div
    className={classNames(styles.codeSnippetContainer, {
      [styles.singleLine]: isSingleLine,
    })}
  >
      <div className={styles.codeSnippetButtons}>
        {language === "javascript" && (pathname === "/javascript" || pathname === "/code-exercises") && (
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
