import { create } from "zustand";
import { loadFromLocalStorage, saveToLocalStorage } from "@/utils/localStorageUtils";

interface ConsoleState {
  isConsoleOpen: boolean;
  consoleCode: string;
  toggleConsole: () => void;
  setConsoleCode: (code: string) => void;
  appendConsoleCode: (code: string) => void;
}

const useConsoleStore = create<ConsoleState>((set) => ({
  isConsoleOpen: false,
  consoleCode: loadFromLocalStorage('consoleCode', ''),
  toggleConsole: () => set((state) => ({ isConsoleOpen: !state.isConsoleOpen })),
  setConsoleCode: (code: string) => {
    saveToLocalStorage('consoleCode', code);
    set({ consoleCode: code });
  },  
  appendConsoleCode: (code: string) => set((state) => {
    const newCode = state.consoleCode + '\n' + code;
    saveToLocalStorage('consoleCode', newCode);
    return { consoleCode: newCode };
  }),
}));

export default useConsoleStore;