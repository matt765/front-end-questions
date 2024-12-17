import { create } from "zustand";

import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/localStorageUtils";

interface SettingsStore {
  isTimerInTopBar: boolean;
  isTimerSoundEnabled: boolean;
  isTimerInfiniteEnabled: boolean;
  isArrowNavigationEnabled: boolean;
  isConsoleEnabled: boolean;
  isConsoleVisibleOnAllTabs: boolean;
  isAnswerBackgroundVisible: boolean;
  isSettingsDrawerOpen: boolean;
  toggleSetting: (
    setting: keyof Omit<
      SettingsStore,
      "setTheme" | "toggleSetting" | "toggleSettingsDrawer"
    >
  ) => void;
  toggleSettingsDrawer: () => void;
}

export const useSettingsStore = create<SettingsStore>((set) => {
  const initialState: SettingsStore = {
    isTimerInTopBar: loadFromLocalStorage<boolean>("isTimerInTopBar", false),
    isTimerSoundEnabled: loadFromLocalStorage<boolean>(
      "isTimerSoundEnabled",
      false
    ),
    isTimerInfiniteEnabled: loadFromLocalStorage<boolean>(
      "isTimerInfiniteEnabled",
      false
    ),
    isArrowNavigationEnabled: loadFromLocalStorage<boolean>(
      "isArrowNavigationEnabled",
      true
    ),
    isConsoleEnabled: loadFromLocalStorage<boolean>("isConsoleEnabled", true),
    isConsoleVisibleOnAllTabs: loadFromLocalStorage<boolean>(
      "isConsoleVisibleOnAllTabs",
      false
    ),
    isAnswerBackgroundVisible: loadFromLocalStorage<boolean>(
      "isAnswerBackgroundVisible",
      true
    ),
    isSettingsDrawerOpen: false,

    toggleSetting: (setting) =>
      set((state) => {
        const newValue = !state[setting];
        saveToLocalStorage(setting, newValue);
        return {
          ...state,
          [setting]: newValue,
        };
      }),
    toggleSettingsDrawer: () =>
      set((state) => ({
        ...state,
        isSettingsDrawerOpen: !state.isSettingsDrawerOpen,
      })),
  };

  return initialState;
});
