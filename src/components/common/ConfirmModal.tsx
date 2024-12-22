import { ContainedButton } from "./ContainedButton";
import { OutlinedButton } from "./OutlinedButton";
import { Modal } from "./Modal";
import styles from "./styles/ConfirmModal.module.scss";

interface ConfirmModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmDisabled?: boolean;
}

export const ConfirmModal = ({
  isOpen,
  closeModal,
  onConfirm,
  title,
  description,
  confirmDisabled = false
}: ConfirmModalProps) => {
  const handleConfirm = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onConfirm();   
    closeModal();  
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className={styles.confirmModalContent} onClick={handleContentClick}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonsContainer}>
          <OutlinedButton 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              closeModal();
            }} 
            text="Cancel" 
            smallPadding 
          />
          <ContainedButton 
            onClick={handleConfirm} 
            text="Accept" 
            smallPadding 
            disabled={confirmDisabled} 
          />
        </div>
      </div>
    </Modal>
  );
};