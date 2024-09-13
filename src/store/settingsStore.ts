import { create } from "zustand";

import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/localStorageUtils";

interface SettingsStore {
  isTimerInTopBar: boolean;
  isTimerSoundEnabled: boolean;
  isTimerInfiniteEnabled: boolean;
  isDesktopArrowNavigationEnabled: boolean;
  isMobileArrowNavigationEnabled: boolean;
  isConsoleEnabled: boolean;
  isConsoleVisibleOnAllTabs: boolean;
  isAnswerBackgroundVisible: boolean;
  isSettingsDrawerOpen: boolean;
  toggleSetting: (
    setting: keyof Omit<SettingsStore, "setTheme" | "toggleSetting" | "toggleSettingsDrawer">
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
    isDesktopArrowNavigationEnabled: loadFromLocalStorage<boolean>(
      "isDesktopArrowNavigationEnabled",
      false
    ),
    isMobileArrowNavigationEnabled: loadFromLocalStorage<boolean>(
      "isMobileArrowNavigationEnabled",
      false
    ),
    isConsoleEnabled: loadFromLocalStorage<boolean>("isConsoleEnabled", false),
    isConsoleVisibleOnAllTabs: loadFromLocalStorage<boolean>(
      "isConsoleVisibleOnAllTabs",
      false
    ),
    isAnswerBackgroundVisible: loadFromLocalStorage<boolean>(
      "isAnswerBackgroundVisible",
      false
    ),
    isSettingsDrawerOpen: false, 
  
    toggleSetting: (setting) =>
      set((state) => {
        const newValue = !state[setting];
        saveToLocalStorage(setting, newValue);
        return { [setting]: newValue };
      }),

    toggleSettingsDrawer: () =>
      set((state) => ({
        isSettingsDrawerOpen: !state.isSettingsDrawerOpen,
      })),
  };

  return initialState;
});
