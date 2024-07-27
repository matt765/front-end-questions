import { useCallback, useEffect, useMemo, useState } from "react";

import { ClockIcon } from "@/assets/icons/ClockIcon";
import { OutlinedButton } from "../common/OutlinedButton";
import { Checkbox } from "../common/Checkbox";
import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import styles from "./styles/QuestionListGroupActions.module.scss";
import { useDropdown } from "@/hooks/useDropdown";
import { questionIds } from "@/utils/openAll";
import { Dropdown } from "../common/Dropdown";
import { useModal } from "@/hooks/useModal";
import { breakTime, studyTime, useTimerStore } from "@/store/timerStore";
import { Modal } from "../common/Modal";
import { SwapIcon } from "@/assets/icons/SwapIcon";
import { ResetIcon } from "@/assets/icons/ResetIcon";
import { PlayIcon } from "@/assets/icons/PlayIcon";
import { PauseIcon } from "@/assets/icons/PauseIcon";

interface QuestionListGroupActionsProps {
  questionCategory: QuestionCategory;
  totalQuestions: number;
}

export const QuestionListGroupActions = ({
  questionCategory,
  totalQuestions,
}: QuestionListGroupActionsProps) => {
  const {
    selectAllQuestions,
    unselectAllQuestions,
    showOnlySelected,
    setShowOnlySelected,
    openSelectedQuestions,
    closeSelectedQuestions,
    selectedQuestions,
  } = useQuestionStore((state) => ({
    selectAllQuestions: state.selectAllQuestions,
    unselectAllQuestions: state.unselectAllQuestions,
    showOnlySelected: state.showOnlySelected[questionCategory],
    setShowOnlySelected: state.setShowOnlySelected,
    openSelectedQuestions: state.openSelectedQuestions,
    closeSelectedQuestions: state.closeSelectedQuestions,
    selectedQuestions: state[`${questionCategory}Checkboxes`],
  }));

  const {
    time,
    isRunning,
    isStudyMode,
    startTimer,
    stopTimer,
    resetTimer,
    toggleMode,
    toggleTimerPin,
    isPomodoroModalOpen,
    closePomodoroModal,
    openPomodoroModal,
  } = useTimerStore();

  const estimatedTime = estimatedTimes[questionCategory];

  const {
    isDropdownOpen,
    toggleDropdown,
    closeDropdown,
    dropdownRef,
    toggleRef,
  } = useDropdown();

  const handleShowOnlySelected = useCallback(
    (checked: boolean) => {
      setShowOnlySelected(questionCategory, checked);
    },
    [questionCategory, setShowOnlySelected]
  );

  const dropdownData = useMemo(
    () => [
      {
        text: "Select all",
        handler: () =>
          selectAllQuestions(questionCategory, questionIds[questionCategory]),
      },
      {
        text: "Unselect all",
        handler: () => unselectAllQuestions(questionCategory),
      },
      {
        text: "Open selected",
        handler: () => openSelectedQuestions(questionCategory),
      },
      {
        text: "Close selected",
        handler: () => closeSelectedQuestions(questionCategory),
      },
    ],
    [
      questionCategory,
      selectAllQuestions,
      unselectAllQuestions,
      openSelectedQuestions,
      closeSelectedQuestions,
    ]
  );

  // Prevent hydration errors
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        useTimerStore.getState().setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      useTimerStore.getState().toggleMode();
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleToggleMode = () => {
    toggleMode();
    resetTimer();
  };
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return { minutes, seconds };
  };

  const calculateProgress = () => {
    const totalTime = isStudyMode ? studyTime : breakTime;
    return ((totalTime - time) / totalTime) * 100;
  };

  const circumference = 2 * Math.PI * 45;

  const handleCircleClick = useCallback(() => {
    toggleTimerPin();
  }, [toggleTimerPin]);

  return (
    <div className={styles.groupActionsWrapper}>
      <div className={styles.estimatedTimeWrapper} onClick={openPomodoroModal}>
        <div className={styles.estimatedTimeIcon}>
          <ClockIcon />
        </div>
        Estimated time: {estimatedTime} hours
      </div>
      <div className={styles.groupActionsButtonsWrapper}>
        <div className={styles.showOnlySelectedWrapperDesktop}>
          <Checkbox
            id={`show-selected-${questionCategory}`}
            checked={showOnlySelected}
            onChange={handleShowOnlySelected}
            label={
              isClient
                ? `Show only selected (${selectedQuestions.length}/${totalQuestions})`
                : "Show only selected"
            }
          />
        </div>
        <div className={styles.groupActionsButtonWrapper} ref={toggleRef}>
          <OutlinedButton text="Group actions" onClick={toggleDropdown} />
          {isDropdownOpen && (
            <div className={styles.groupActionsDropdownWrapper}>
              <Dropdown
                items={dropdownData}
                onClose={closeDropdown}
                dropdownRef={dropdownRef}
                closeOnClick={false}
              />
            </div>
          )}
        </div>
        <div className={styles.showOnlySelectedWrapperMobile}>
          <Checkbox
            id={`show-selected-${questionCategory}`}
            checked={showOnlySelected}
            onChange={handleShowOnlySelected}
            label={
              isClient
                ? `Show only selected (${selectedQuestions.length}/${totalQuestions})`
                : "Show only selected"
            }
          />
        </div>
      </div>
      {isPomodoroModalOpen && (
        <Modal isOpen={isPomodoroModalOpen} onClose={closePomodoroModal}>
          <div className={styles.pomodoroModal}>
            <h2>Pomodoro timer</h2>
            <div className={styles.timerWrapper}>
              <svg viewBox="0 0 100 100" className={styles.progressRing}>
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="var(--bg-timer-gray-bar)"
                  strokeWidth="8"
                  className={styles.backgroundBar}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgb(139, 135, 251)"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (calculateProgress() / 100)}
                  className={styles.progressBar}
                />
              </svg>
              <div
                className={styles.circularOverlay}
                onClick={handleCircleClick}
              ></div>
              <div className={styles.timerContent}>
                <div className={styles.timerDisplay}>
                  <div className={styles.minutes}>
                    {formatTime(time).minutes}
                  </div>
                  <div className={styles.colon}>:</div>
                  <div className={styles.seconds}>
                    {formatTime(time).seconds}
                  </div>
                </div>
                <div className={styles.sessionDisplay}>
                  {isStudyMode ? "STUDY" : "BREAK"}
                </div>
              </div>
            </div>
            <div className={styles.timerMessage}>
              {isStudyMode
                ? `Focus for ${studyTime / 60} minutes`
                : `${breakTime / 60} minutes break`}
            </div>
            <div className={styles.timerControls}>
              <button className={styles.resetButton} onClick={resetTimer}>
                <ResetIcon />
              </button>
              <button
                className={styles.playPauseButton}
                onClick={isRunning ? stopTimer : startTimer}
              >
                {isRunning ? <PauseIcon /> : <PlayIcon />}
              </button>
              <button className={styles.swapButton} onClick={handleToggleMode}>
                <SwapIcon />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export const estimatedTimes: Record<QuestionCategory, number> = {
  HTML: 15,
  CSS: 20,
  JavaScript: 45,
  TypeScript: 12,
  React: 20,
  Git: 8,
  Optimization: 5,
  General: 15,
};
