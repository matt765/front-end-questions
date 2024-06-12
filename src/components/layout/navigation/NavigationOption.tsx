import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";

import { PDFDocument } from "../../pdf/PDFDocument";
import { cssQuestionsData } from "@/questionsData/cssQuestions";
import { Tech } from "@/store/questionStore";

import { generalQuestionsData } from "@/questionsData/generalQuestions";
import { gitQuestionsData } from "@/questionsData/gitQuestions";
import { htmlQuestionsData } from "@/questionsData/htmlQuestions";
import { javascriptQuestionsData } from "@/questionsData/javascriptQuestions";
import { reactQuestionsData } from "@/questionsData/reactQuestions";
import { typescriptQuestionsData } from "@/questionsData/typescriptQuestions";
import styles from "./styles/NavigationOption.module.scss";
import { optimizationQuestionsData } from "@/questionsData/optimizationQuestions";

interface NavigationOptionProps {
  title: string;
  onClick?: () => void;
  tech?: Tech;
}

export const NavigationOption: React.FC<NavigationOptionProps> = ({
  title,
  onClick,
  tech,
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

  const getQuestionsData = (tech?: Tech) => {
    switch (tech) {
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
    <div onClick={handleClick} className={styles.navigationOptionWrapper}>
      <div className={styles.navigationOptionContent}>
        {isLoading ? (
          <div className={styles.loader}>...Loading</div>
        ) : tech && isExportButtonVisible ? (
          <PDFDownloadLink
            document={<PDFDocument questions={getQuestionsData(tech)} />}
            fileName="questions.pdf"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            Download PDF
          </PDFDownloadLink>
        ) : (
          <div className={styles.navigationOptionText}>{title}</div>
        )}
      </div>
    </div>
  );
};
