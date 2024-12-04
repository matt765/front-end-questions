import React, { useState } from "react";
import { Modal } from "@/components/common/Modal";
import styles from "./styles/ClearDataModal.module.scss";
import { Input } from "../common/Input";
import { OutlinedButton } from "../common/OutlinedButton";
import { ContainedButton } from "../common/ContainedButton";

interface ClearDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  resetAppState: () => void;
}

export const ClearDataModal = ({
  isOpen,
  onClose,
  resetAppState,
}: ClearDataModalProps) => {
  const [confirmation, setConfirmation] = useState("");

  const handleClearData = () => {
    console.log("Clear data triggered, confirmation:", confirmation);

    if (confirmation.toLowerCase() === "yes") {
      console.log("Starting reset process...");
      try {
        // First clear localStorage directly
        localStorage.clear();

        // Then reset all the stores
        resetAppState();

        // Close the modal  
        onClose();
     
        // Finally reload the page
        window.location.reload();
      } catch (error) {
        console.error("Error in clear data process:", error);
        alert("Error clearing data. Please try again.");
      }
    } else {
      alert("Please type 'yes' to confirm.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.clearDataModal}>
        <div className={styles.clearDataModalHeader}>
          <h1 className={styles.warningTitle}>Warning!</h1>
        </div>
        <div className={styles.clearDataModalContent}>
          <p>
            This action will permanently clear all of the application data,
            including:
          </p>
          <ul className={styles.warningList}>
            <li>Console code</li>
            <li>Layout preferences</li>
            <li>Settings</li>
            <li>Timer state</li>
            <li>Selected and opened questions</li>
          </ul>
          <p className={styles.confirmationText}>
            Please type <b>&quot;yes&quot;</b> to confirm:
          </p>
          <Input
            type="text"
            className={styles.confirmationInput}
            placeholder="Are you sure?"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
          />
          <div className={styles.buttonGroup}>
            <div className={styles.cancelButtonWrapper}>
              <OutlinedButton onClick={onClose} text="Cancel" />
            </div>
            <div className={styles.acceptButtonWrapper}>
              <ContainedButton onClick={handleClearData} text="Accept" />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
