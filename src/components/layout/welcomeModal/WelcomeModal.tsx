import React, { useEffect, useState } from "react";
import { firaSans } from "@/assets/fonts/fonts";

import { Modal } from "@/components/common/Modal";
import { Checkbox } from "@/components/common/Checkbox";
import styles from "./WelcomeModal.module.scss";
import { ContainedButton } from "@/components/common/ContainedButton";

import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/localStorageUtils";
import { WelcomeModalStats } from "./WelcomeModalStats";
import { WelcomeModalChangelog } from "./WelcomeModalChangelog";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "intro" | "stats" | "changelog" | "feedback";
}
export const WelcomeModal = ({
  isOpen,
  onClose,
  initialTab = "intro",
}: WelcomeModalProps) => {
  const [changelog, setChangelog] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<
    "intro" | "stats" | "changelog" | "feedback"
  >(initialTab);
  const [neverShowAgain, setNeverShowAgain] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // This effect checks the checkbox on first load if user has checked it before
  useEffect(() => {
    const savedValue = loadFromLocalStorage<boolean>(
      "neverShowWelcomeModal",
      false
    );
    setNeverShowAgain(savedValue);
  }, []);

  const handleClose = () => {
    onClose();
  };

  const handleNeverShowAgain = (checked: boolean) => {
    setNeverShowAgain(checked);
    saveToLocalStorage("neverShowWelcomeModal", checked);
  };

  useEffect(() => {
    const fetchChangelog = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/matt765/front-end-questions/main/CHANGELOG.md"
        );
        let text = await response.text();

        // Remove changelog title
        const lines = text.split("\n");
        lines.splice(0, 2);
        const modifiedText = lines.join("\n");

        setChangelog(modifiedText);
      } catch (error) {
        console.error("Failed to fetch changelog:", error);
        setChangelog("Failed to fetch changelog. Please try again later.");
      }
    };
    if (activeTab === "changelog" && !changelog) {
      fetchChangelog();
    }
  }, [activeTab, changelog]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className={styles.welcomeModal}>
        <div className={styles.welcomeModalHeader}>
          <h1>Welcome to the Front-end Questions App</h1>
          {/* <h2 style={{ marginTop: "0.5rem", marginBottom: "-0.5rem" }}>v1.0.8</h2> */}
        </div>
        <div className={styles.welcomeModalTabs}>
          <button
            className={`${firaSans.className} ${styles.tabButton} ${
              activeTab === "intro" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("intro")}
          >
            Intro
          </button>
          <button
            className={`${firaSans.className} ${styles.tabButton} ${
              activeTab === "stats" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("stats")}
          >
            Stats
          </button>
          <button
            className={`${firaSans.className} ${styles.tabButton} ${
              activeTab === "changelog" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("changelog")}
          >
            Changelog
          </button>
          <button
            className={`${firaSans.className} ${styles.tabButton} ${
              activeTab === "feedback" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("feedback")}
          >
            Feedback
          </button>
        </div>
        <div className={styles.welcomeModalContent}>
          {activeTab === "intro" && (
            <div className={styles.welcomeModalInfoTab}>
              <p>
                This application was designed to help developers practice
                front-end interview questions. Please note that it is still
                pretty young and may need some time and community feedback to
                become fully reliable source of information
              </p>
              <p>
                If you encounter any issues, have suggestions for improvements,
                or would like to share your thoughts, you can open an issue on
                the GitHub Issues page, write on feedback tab or{" "}
                <a
                  href="https://matt765-portfolio.vercel.app/#contact"
                  className={styles.welcomeModalContactLink}
                  target="_blank"
                >
                  use author&apos;s contact form.
                </a>
              </p>
            </div>
          )}
          {activeTab === "stats" && <WelcomeModalStats />}
          {activeTab === "changelog" && (
            <WelcomeModalChangelog changelog={changelog} />
          )}
        </div>
        <div className={styles.welcomeModalFooter}>
          <div className={styles.welcomeModalCheckbox}>
            <Checkbox
              id="neverShowWelcome"
              checked={neverShowAgain}
              onChange={handleNeverShowAgain}
              label="Don't show this window on start"
            />
          </div>
          <div className={styles.welcomeModalEnterButton}>
            <ContainedButton text="Get started" onClick={handleClose} />
          </div>
        </div>
      </div>
    </Modal>
  );
};
