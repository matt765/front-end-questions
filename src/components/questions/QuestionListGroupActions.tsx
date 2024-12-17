import { useCallback, useEffect, useMemo, useState } from "react";

import { ClockIcon } from "@/assets/icons/ClockIcon";
import { OutlinedButton } from "../common/OutlinedButton";
import { Checkbox } from "../common/Checkbox";
import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import styles from "./styles/QuestionListGroupActions.module.scss";
import { useDropdown } from "@/hooks/useDropdown";
import { questionIds } from "@/utils/openAll";
import { Dropdown } from "../common/Dropdown";
import { breakTime, studyTime, useTimerStore } from "@/store/timerStore";
import { Modal } from "../common/Modal";
import { SwapIcon } from "@/assets/icons/SwapIcon";
import { ResetIcon } from "@/assets/icons/ResetIcon";
import { PlayIcon } from "@/assets/icons/PlayIcon";
import { PauseIcon } from "@/assets/icons/PauseIcon";
import classNames from "classnames";
import { useSettingsStore } from "@/store/settingsStore";
import { Question as QuestionType } from "./types";
import { PDFExport } from "./ExportToPDF";

interface QuestionListGroupActionsProps {
  questionCategory: QuestionCategory;
  totalQuestions: number;
  questions: QuestionType[];
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  key: number;
}

export const QuestionListGroupActions = ({
  questionCategory,
  totalQuestions,
  questions,
}: QuestionListGroupActionsProps) => {
  const {
    selectAllQuestions,
    unselectAllQuestions,
    showOnlySelected,
    setShowOnlySelected,
    openSelectedQuestions,
    closeSelectedQuestions,
    selectedQuestions,
    copySelectedQuestions,
  } = useQuestionStore((state) => ({
    selectAllQuestions: state.selectAllQuestions,
    unselectAllQuestions: state.unselectAllQuestions,
    showOnlySelected: state.showOnlySelected[questionCategory],
    setShowOnlySelected: state.setShowOnlySelected,
    openSelectedQuestions: state.openSelectedQuestions,
    closeSelectedQuestions: state.closeSelectedQuestions,
    selectedQuestions: state[`${questionCategory}Checkboxes`],
    copySelectedQuestions: state.copySelectedQuestions,
  }));

  const {
    time,
    isRunning,
    isStudyMode,
    startTimer,
    stopTimer,
    resetTimer,
    toggleMode,
    isPomodoroModalOpen,
    closePomodoroModal,
    openPomodoroModal,
  } = useTimerStore();

  const { isTimerInfiniteEnabled, isTimerSoundEnabled, toggleSetting } =
    useSettingsStore();

  const {
    isDropdownOpen,
    toggleDropdown,
    closeDropdown,
    dropdownRef,
    toggleRef,
  } = useDropdown();

  const [isDropdownTop, setIsDropdownTop] = useState(true);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // Solution necessary to avoid group actions dropdown overflowing when it's close to the top of the screen
  const calculateDropdownPosition = useCallback(() => {
    if (toggleRef.current) {
      const rect = toggleRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      setIsDropdownTop(rect.top > viewportHeight * 0.7);
    }
  }, []);

  const handleDropdown = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      calculateDropdownPosition();
      toggleDropdown();
    },
    [calculateDropdownPosition, toggleDropdown]
  );

  const estimatedTime = estimatedTimes[questionCategory];

  const handleShowOnlySelected = useCallback(
    (checked: boolean) => {
      setShowOnlySelected(questionCategory, checked);
    },
    [questionCategory, setShowOnlySelected]
  );

  const handlePlayPauseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple: Ripple = {
      x,
      y,
      size,
      key: Date.now(),
    };

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((ripple) => ripple.key !== newRipple.key)
      );
    }, 600);

    // Existing functionality
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

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
      {
        text: "Copy selected",
        handler: async () => {
          await copySelectedQuestions(questionCategory, questions);
          closeDropdown();
        },
      },
      {
        text: "Export selected to PDF",
        component: (
          <PDFExport
            questions={questions}
            questionCategory={questionCategory}
            onExportComplete={closeDropdown}
          />
        )
      }
    ],
    [
      questionCategory,
      selectAllQuestions,
      unselectAllQuestions,
      openSelectedQuestions,
      closeSelectedQuestions,
      closeDropdown,
    ]
  );

  // Prevent hydration errors
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const playTimerSound = () => {
    const audio = new Audio("/timer.mp3");
    audio.play().catch((error) => console.error("Error playing sound:", error));
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        useTimerStore.getState().setTime(time - 1);
        useTimerStore.getState().incrementPomodoroTime();
      }, 1000);
    } else if (time === 0) {
      if (isTimerSoundEnabled) {
        playTimerSound();
      }
      if (isTimerInfiniteEnabled) {
        useTimerStore.getState().toggleMode();
        useTimerStore.getState().startTimer();
      } else {
        useTimerStore.getState().toggleMode();
      }
    }
    return () => clearInterval(interval);
  }, [
    isRunning,
    time,
    isTimerInfiniteEnabled,
    isStudyMode,
    isTimerSoundEnabled,
  ]);

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
    toggleSetting("isTimerInTopBar");
  }, [toggleSetting]);

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
          <OutlinedButton text="Group actions" onClick={handleDropdown} />
          {isDropdownOpen && (
            <div
              className={classNames(styles.groupActionsDropdownWrapper, {
                [styles.groupActionsDropdownTop]: isDropdownTop,
                [styles.groupActionsDropdownBottom]: !isDropdownTop,
              })}
            >
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
                  stroke="currentColor"
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
              <button className={styles.timerSideButton} onClick={resetTimer}>
                <ResetIcon />
              </button>
              <button
                className={styles.timerPlayPauseButton}
                onClick={handlePlayPauseClick}
              >
                {isRunning ? <PauseIcon /> : <PlayIcon />}
                {ripples.map((ripple) => (
                  <span
                    key={ripple.key}
                    className={styles.ripple}
                    style={{
                      top: ripple.y,
                      left: ripple.x,
                      width: ripple.size,
                      height: ripple.size,
                    }}
                  ></span>
                ))}
              </button>

              <button
                className={styles.timerSideButton}
                onClick={handleToggleMode}
              >
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
  HTML: 20,
  CSS: 25,
  JavaScript: 50,
  TypeScript: 12,
  React: 25,
  Git: 8,
  Optimization: 10,
  General: 15,
  CodeExercises: 40,
};
