import { create } from "zustand";

import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/localStorageUtils";

interface ConsoleState {
  isConsoleOpen: boolean;
  consoleCode: string;
  scriptsExecuted: number;
  toggleConsole: () => void;
  setConsoleCode: (code: string) => void;
  appendConsoleCode: (code: string) => void;
  incrementScriptsExecuted: () => void;
}

const useConsoleStore = create<ConsoleState>((set) => ({
  isConsoleOpen: false,
  consoleCode: loadFromLocalStorage("consoleCode", ""),
  scriptsExecuted: loadFromLocalStorage("scriptsExecuted", 0),
  toggleConsole: () =>
    set((state) => ({ isConsoleOpen: !state.isConsoleOpen })),
  setConsoleCode: (code: string) => {
    saveToLocalStorage("consoleCode", code);
    set({ consoleCode: code });
  },
  appendConsoleCode: (code: string) =>
    set((state) => {
      const newCode = state.consoleCode + "\n" + code;
      saveToLocalStorage("consoleCode", newCode);
      return { consoleCode: newCode };
    }),
  incrementScriptsExecuted: () =>
    set((state) => {
      const newValue = state.scriptsExecuted + 1;
      saveToLocalStorage("scriptsExecuted", newValue);
      return { scriptsExecuted: newValue };
    }),
}));

export default useConsoleStore;
