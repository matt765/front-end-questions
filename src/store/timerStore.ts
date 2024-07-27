import { create } from "zustand";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/localStorageUtils";

const studyTime = 25 * 60;
const breakTime = 5 * 60;

interface TimerState {
  time: number;
  isRunning: boolean;
  isStudyMode: boolean;
  isTimerPinned: boolean;
  isPomodoroModalOpen: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  setTime: (time: number) => void;
  toggleMode: () => void;
  toggleTimerPin: () => void;
  openPomodoroModal: () => void;
  closePomodoroModal: () => void;
}

const saveStateToLocalStorage = (state: Partial<TimerState>) => {
  Object.entries(state).forEach(([key, value]) => {
    saveToLocalStorage(`timerStore_${key}`, value);
  });
};

export const useTimerStore = create<TimerState>((set) => {
  const loadedState = {
    time: loadFromLocalStorage<number>("timerStore_time", studyTime),
    isRunning: loadFromLocalStorage<boolean>("timerStore_isRunning", false),
    isStudyMode: loadFromLocalStorage<boolean>("timerStore_isStudyMode", true),
    isTimerPinned: loadFromLocalStorage<boolean>(
      "timerStore_isTimerPinned",
      false
    ),
    isPomodoroModalOpen: false,
  };

  return {
    ...loadedState,
    startTimer: () =>
      set((state) => {
        const newState = { ...state, isRunning: true };
        saveStateToLocalStorage(newState);
        return newState;
      }),
    stopTimer: () =>
      set((state) => {
        const newState = { ...state, isRunning: false };
        saveStateToLocalStorage(newState);
        return newState;
      }),
    resetTimer: () =>
      set((state) => {
        const newState = {
          ...state,
          time: state.isStudyMode ? studyTime : breakTime,
          isRunning: false,
        };
        saveStateToLocalStorage(newState);
        return newState;
      }),
    setTime: (time: number) =>
      set((state) => {
        const newState = { ...state, time };
        saveStateToLocalStorage(newState);
        return newState;
      }),
    toggleMode: () =>
      set((state) => {
        const newState = {
          ...state,
          isStudyMode: !state.isStudyMode,
          time: !state.isStudyMode ? studyTime : breakTime,
          isRunning: false,
        };
        saveStateToLocalStorage(newState);
        return newState;
      }),
    toggleTimerPin: () =>
      set((state) => {
        const newState = { ...state, isTimerPinned: !state.isTimerPinned };
        saveStateToLocalStorage(newState);
        return newState;
      }),
    openPomodoroModal: () =>
      set((state) => {
        const newState = { ...state, isPomodoroModalOpen: true };
        saveStateToLocalStorage(newState);
        return newState;
      }),
    closePomodoroModal: () =>
      set((state) => {
        const newState = { ...state, isPomodoroModalOpen: false };
        saveStateToLocalStorage(newState);
        return newState;
      }),
  };
});

export { studyTime, breakTime };
