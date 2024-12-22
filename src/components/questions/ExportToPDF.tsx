import React, { useState, useEffect, useCallback } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import { Question } from "../questions/types";
import styles from "./styles/QuestionListGroupActions.module.scss";
import { PDFDocument } from "../pdf/PDFDocument";
import { ConfirmModal } from "../common/ConfirmModal";
import { useModal } from "@/hooks/useModal";

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
  const pdfModal = useModal();
  const [isPdfReady, setIsPdfReady] = useState(false);
  const [selectedQuestionsData, setSelectedQuestionsData] = useState<
    Question[]
  >([]);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const selectedQuestions = useQuestionStore(
    (state) => state[`${questionCategory}Checkboxes`]
  );
  const selectedCodeExerciseTab = useQuestionStore(
    (state) => state.selectedCodeExerciseTab
  );

  const isComponentsTab =
    questionCategory === "Components" ||
    (questionCategory === "Algorithms" &&
      selectedCodeExerciseTab === "components");

  const prepareSelectedQuestions = useCallback(() => {
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
  }, [questions, selectedQuestions]);

  const getModalContent = () => {
    if (isComponentsTab) {
      return {
        title: "Not Available",
        description:
          "Sorry, PDF export is currently not available for the Components section due to technical limitations. The app kept freezing when I tried to make it work. The cause is probably that react-pdf library does not handle big code blocks well. Please switch to the Algorithms tab to export questions as PDF.",
      };
    }

    if (selectedQuestions.length === 0) {
      return {
        title: "No Questions Selected",
        description: "Please select at least one question to export to PDF.",
      };
    }

    return {
      title: "Export Selected to PDF",
      description: `You are about to download ${selectedQuestions.length} selected questions in a single PDF file. Do you want to continue?`,
    };
  };

  const handlePdfClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  
    if (isComponentsTab || selectedQuestions.length === 0) {
      setIsPdfReady(false);
      setIsGenerating(false);
      setDownloadUrl(null);
      pdfModal.openModal();
      return;
    }
  
    // Prepare data
    const preparedQuestions = prepareSelectedQuestions();
    setSelectedQuestionsData(preparedQuestions);
    setDownloadUrl(null);
    setIsGenerating(true);
  
    // Use Promise.resolve().then() to ensure state updates have completed
    await Promise.resolve();
    pdfModal.openModal();
    
    // Only after the modal is open, close the dropdown
    await Promise.resolve();
    if (onExportComplete) {
      onExportComplete();
    }
  };

  const isConfirmDisabled = () => {
    if (isComponentsTab || selectedQuestions.length === 0) return false;
    if (isGenerating && !downloadUrl) return true;
    return false;
  };

  // Separate component to handle PDF generation and URL retrieval with hooks at the top-level
  const PDFLinkWrapper: React.FC = () => {
    const [urlState, setUrlState] = useState<string | null>(null);
    const [loadingState, setLoadingState] = useState(true);

    useEffect(() => {
      // If we have a URL and were loading, we can mark PDF as ready
      if (!loadingState && urlState) {
        setDownloadUrl(urlState);
        setIsPdfReady(true);
        setIsGenerating(false);
      }
    }, [loadingState, urlState]);

    return (
      <PDFDownloadLink
        document={<PDFDocument questions={selectedQuestionsData} />}
        fileName={`${questionCategory.toLowerCase()}-selected-questions.pdf`}
      >
        {({ url, loading }) => {
          // Update states based on PDFDownloadLink state
          if (url !== urlState) setUrlState(url || null);
          if (loading !== loadingState) setLoadingState(loading);

          return (
            <a
              id="pdfDownloadLink"
              href={url || "#"}
              download={
                url
                  ? `${questionCategory.toLowerCase()}-selected-questions.pdf`
                  : undefined
              }
              style={{ display: "none" }}
            >
              Download
            </a>
          );
        }}
      </PDFDownloadLink>
    );
  };

  return (
    <>
      <div onClick={handlePdfClick} className={styles.pdfExportLink}>
        Export selected to PDF
      </div>

      {selectedQuestions.length > 0 && !isComponentsTab && (
        <div style={{ display: "none" }}>
          <PDFLinkWrapper />
        </div>
      )}

      <ConfirmModal
        isOpen={pdfModal.isOpen}
        closeModal={() => {
          setIsPdfReady(false);
          setIsGenerating(false);
          setDownloadUrl(null);
          pdfModal.closeModal();
        }}
        onConfirm={() => {
          if (!isComponentsTab && selectedQuestions.length > 0 && downloadUrl) {
            const link = document.getElementById(
              "pdfDownloadLink"
            ) as HTMLAnchorElement | null;
            if (link && link.href && link.href !== "#" && link.download) {
              link.click();
            }
          }
          pdfModal.closeModal();
        }}
        title={getModalContent().title}
        description={getModalContent().description}
        confirmDisabled={isConfirmDisabled()}
      />
    </>
  );
};
