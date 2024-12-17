import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import { Question } from "../questions/types";
import styles from "./styles/QuestionListGroupActions.module.scss";
import { PDFDocument } from "../pdf/PDFDocument";

interface PDFExportProps {
  questions: Question[];
  questionCategory: QuestionCategory;
  onExportComplete?: () => void;
}

export const PDFExport = ({
  questions,
  questionCategory,
  onExportComplete,
}: PDFExportProps) => {
  const selectedQuestions = useQuestionStore(
    (state) => state[`${questionCategory}Checkboxes`]
  );

  const getSelectedQuestionsData = () => {
    const indexMap = questions.reduce((acc, q, idx) => {
      acc[q.id] = idx;
      return acc;
    }, {} as Record<number, number>);

    return questions
      .filter((question) => selectedQuestions.includes(question.id))
      .sort((a, b) => {
        const indexA = indexMap[a.id] || 0;
        const indexB = indexMap[b.id] || 0;
        return indexA - indexB;
      });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (selectedQuestions.length === 0) {
      window.alert("Please select some questions first");
      return;
    }

    const confirmed = window.confirm(
      `You are about to download ${selectedQuestions.length} selected questions as a PDF file. Do you want to continue?`
    );

    if (confirmed) {
      const downloadLink = document.getElementById("pdfDownloadLink");
      if (downloadLink) {
        (downloadLink as HTMLElement).click();
      }
      if (onExportComplete) {
        onExportComplete();
      }
    }
  };

  return (
    <>
      <div onClick={handleClick} className={styles.pdfExportLink}>
        Export selected to PDF
      </div>
      {selectedQuestions.length > 0 && (
        <div style={{ display: "none" }}>
          <PDFDownloadLink
            id="pdfDownloadLink"
            document={<PDFDocument questions={getSelectedQuestionsData()} />}
            fileName={`${questionCategory.toLowerCase()}-selected-questions.pdf`}
          >
            {() => <span>Download</span>}
          </PDFDownloadLink>
        </div>
      )}
    </>
  );
};
