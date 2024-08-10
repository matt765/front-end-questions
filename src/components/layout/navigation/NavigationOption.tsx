import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";

import { PDFDocument } from "../../pdf/PDFDocument";
import { cssQuestionsData } from "@/questionsData/cssQuestions";
import { QuestionCategory } from "@/store/questionStore";
import { generalQuestionsData } from "@/questionsData/generalQuestions";
import { gitQuestionsData } from "@/questionsData/gitQuestions";
import { htmlQuestionsData } from "@/questionsData/htmlQuestions";
import { javascriptQuestionsData } from "@/questionsData/javascriptQuestions";
import { reactQuestionsData } from "@/questionsData/reactQuestions";
import { typescriptQuestionsData } from "@/questionsData/typescriptQuestions";
import styles from "./styles/NavigationOption.module.scss";
import { optimizationQuestionsData } from "@/questionsData/optimizationQuestions";
import { LoaderIcon } from "@/assets/icons/LoaderIcon";

interface NavigationOptionProps {
  title: string;
  onClick?: () => void;
  questionCategory?: QuestionCategory;
}

export const NavigationOption: React.FC<NavigationOptionProps> = ({
  title,
  onClick,
  questionCategory,
}) => {
  const [isExportButtonVisible, setIsExportButtonVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    if (!isExportButtonVisible) {
      setIsLoading(true);
    }
    setTimeout(() => {
      setIsExportButtonVisible(true);
      setIsLoading(false);
    }, 500);
  };

  const getQuestionsData = (questionCategory?: QuestionCategory) => {
    switch (questionCategory) {
      case "HTML":
        return htmlQuestionsData;
      case "CSS":
        return cssQuestionsData;
      case "JavaScript":
        return javascriptQuestionsData;
      case "TypeScript":
        return typescriptQuestionsData;
      case "React":
        return reactQuestionsData;
      case "Git":
        return gitQuestionsData;
      case "Optimization":
        return optimizationQuestionsData;
      case "General":
        return generalQuestionsData;
      default:
        return [];
    }
  };

  return (
    <div
      onClick={handleClick}
      className={styles.navigationOptionWrapper}
      style={{ paddingLeft: isExportButtonVisible ? "0" : "0.65rem" }}
    >
      <div
        className={styles.navigationOptionContent}
        style={{ paddingLeft: isExportButtonVisible ? "0" : "1.1rem" }}
      >
        {isLoading ? (
          <div className={styles.loader}>
            <LoaderIcon />
          </div>
        ) : questionCategory && isExportButtonVisible ? (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", height: "100%" }}
          >
            <PDFDownloadLink
              document={
                <PDFDocument questions={getQuestionsData(questionCategory)} />
              }
              fileName="questions.pdf"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className={styles.downloadLink}
            >
              <div className={styles.downloadLinkText}> Download PDF</div>
            </PDFDownloadLink>
          </div>
        ) : (
          <div className={styles.navigationOptionText}>{title}</div>
        )}
      </div>
    </div>
  );
};
