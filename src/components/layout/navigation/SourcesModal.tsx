import { QuestionCategory } from "@/store/questionStore";
import styles from "./styles/SourcesModal.module.scss";
import {
  sourcesData,
  websitesWithInterviewQuestions,
} from "@/questionsData/sources";
import { Modal } from "@/components/common/Modal";

interface SourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryForSourcesModal: QuestionCategory;
}

export const SourcesModal = ({
  isOpen,
  onClose,
  categoryForSourcesModal,
}: SourcesModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.sourcesModal}>
        <div className={styles.sourcesModalHeader}>
          <h3>Sources</h3>
          <h4>{categoryForSourcesModal} </h4>
        </div>
        <ol className={styles.sourcesModalContent}>
          {sourcesData[categoryForSourcesModal].map((source, index) => (
            <li key={index}>
              <span className={styles.sourceUrl}> {source.title}</span> {" - "}
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.url}
              </a>
            </li>
          ))}
        </ol>
        <div className={styles.websitesWithInterviewQuestions}>
          <div>
            A significant number of the questions are heavily inspired by
            various websites that can be found on Google under &quot;frontend
            interview questions&quot;:
            <span>
              {websitesWithInterviewQuestions.map((url, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{index + 1}</span>
                </a>
              ))}
            </span>
          </div>
          <div>
            All questions have been reviewed and refined by Claude 3.5 Sonnet,
            which also provided content for the vast majority of code snippets
          </div>
        </div>
      </div>
    </Modal>
  );
};
