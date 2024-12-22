// Temporarily disabled until pdf dynamic generation is fixed
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import { PDFDocument } from "../../pdf/PDFDocument";
import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
// Import for dynamic PDF generation - temporarily disabled until questions are finalized
// import { algorithmsQuestionsData } from "@/questionsData/algorithmsQuestions";
// import { componentQuestionsData } from "@/questionsData/componentQuestions";
// import { htmlQuestionsData } from "@/questionsData/htmlQuestions";
// import { cssQuestionsData } from "@/questionsData/cssQuestions";
// import { javascriptQuestionsData } from "@/questionsData/javascriptQuestions";
// import { typescriptQuestionsData } from "@/questionsData/typescriptQuestions";
// import { reactQuestionsData } from "@/questionsData/reactQuestions";
// import { gitQuestionsData } from "@/questionsData/gitQuestions";
// import { optimizationQuestionsData } from "@/questionsData/optimizationQuestions";
// import { generalQuestionsData } from "@/questionsData/generalQuestions";
import { useModal } from "@/hooks/useModal";
import { ConfirmModal } from "@/components/common/ConfirmModal";
import styles from "./styles/NavigationOption.module.scss";

// Temporarily disabled until pdf dynamic generation is fixed
// const getQuestionsData = (questionCategory?: QuestionCategory) => {
//   switch (questionCategory) {
//     case "HTML":
//       return htmlQuestionsData;
//     case "CSS":
//       return cssQuestionsData;
//     case "JavaScript":
//       return javascriptQuestionsData;
//     case "TypeScript":
//       return typescriptQuestionsData;
//     case "React":
//       return reactQuestionsData;
//     case "Git":
//       return gitQuestionsData;
//     case "Optimization":
//       return optimizationQuestionsData;
//     case "General":
//       return generalQuestionsData;
//     case "Algorithms":
//       return algorithmsQuestionsData;
//     case "Components":
//       return componentQuestionsData;
//     default:
//       return [];
//   }
// };

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
  const pdfModal = useModal(); 

  // PDF generation logic temporarily disabled because it's bugged when mutliple dropdowns are open in side navigation.
  // For now, I'll use static PDFs from public folder.
  //
  // const handlePdfModal = async () => {
  //   if (title === "Export as PDF" && questionCategory) {
  //     if (questionCategory === "Algorithms" && isComponentsTab) {
  //       pdfModal.openModal();
  //       return;
  //     }

  //     setPdfState(questionCategory, { isPdfReady: false, questions: [] });

  //     let questionsData;
  //     if (questionCategory === "Algorithms") {
  //       questionsData =
  //         selectedCodeExerciseTab === "algorithms"
  //           ? algorithmsQuestionsData
  //           : componentQuestionsData;
  //     } else {
  //       questionsData = getQuestionsData(questionCategory);
  //     }

  //     setPdfState(questionCategory, { isPdfReady: true, questions: questionsData });
  //     pdfModal.openModal();
  //   }
  // };

  const handlePdfDownload = () => {
    if (questionCategory) {
      const pdfPath = `/questions/${questionCategory.toLowerCase()}-questions.pdf`;

      try {
        window.open(pdfPath, "_blank");
      } catch (error) {
        console.error("5. Error:", error);
      }
    }

    pdfModal.closeModal();
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    pdfModal.openModal();
  };

  const modalContent = {
    title: "Export as PDF",
    description: `This action will download all questions and answers from ${questionCategory} section as PDF file. The file size will be approximately 50-150 KB.`,
    confirmText: "Export",
    showCancel: true,
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={styles.navigationOptionWrapper}
        style={{ paddingLeft: "0.65rem" }}
      >
        <div
          className={styles.navigationOptionContent}
          style={{ paddingLeft: "1.1rem" }}
        >
          <div className={styles.navigationOptionText}>{title}</div>
        </div>
      </div>
      {questionCategory && (
        <ConfirmModal
          isOpen={pdfModal.isOpen}
          closeModal={pdfModal.closeModal}
          onConfirm={handlePdfDownload}
          title={modalContent.title}
          description={modalContent.description}
        />
      )}
    </>
  );
};
