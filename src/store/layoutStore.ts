import { loadFromLocalStorage, saveToLocalStorage } from "@/utils/localStorageUtils";
import { create, SetState, GetState } from "zustand";

interface Position {
  x: number;
  y: number;
}

interface LayoutState {
  isNavVisible: boolean;
  isMobileNavVisible: boolean;
  isMobileFirstLoad: boolean;
  isConsoleOpen: boolean;
  setMobileFirstLoad: (load: boolean) => void;
  toggleNavVisibility: () => void;
  toggleMobileNavVisibility: () => void;
  toggleConsole: () => void;
  modalPosition: Position;
  setModalPosition: (x: number, y: number) => void;
}

const useLayoutStore = create<LayoutState>(
  (set: SetState<LayoutState>, get: GetState<LayoutState>) => ({
    isNavVisible: true,
    isMobileNavVisible: false,
    isMobileFirstLoad: false,
    isConsoleOpen: false,
    setMobileFirstLoad: (load: boolean) =>
      set(() => ({ isMobileFirstLoad: load })),
    toggleNavVisibility: () =>
      set((state) => ({ isNavVisible: !state.isNavVisible })),
    toggleMobileNavVisibility: () =>
      set((state) => ({ isMobileNavVisible: !state.isMobileNavVisible })),
    toggleConsole: () =>
      set((state) => ({ isConsoleOpen: !state.isConsoleOpen })),
    modalPosition: loadFromLocalStorage<Position>('modalPosition', { x: 0, y: 0 }),
    setModalPosition: (x: number, y: number) => set((state) => {
      const newPosition = { x, y };
      saveToLocalStorage('modalPosition', newPosition);
      return { ...state, modalPosition: newPosition };
    }),
  })
);

export default useLayoutStore;