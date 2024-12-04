import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/localStorageUtils";
import { create, SetState, GetState } from "zustand";

interface Position {
  x: number;
  y: number;
}

interface LayoutState {
  isNavVisible: boolean;
  isMobileNavVisible: boolean;
  isMobileFirstLoad: boolean;
  setMobileFirstLoad: (load: boolean) => void;
  toggleNavVisibility: () => void;
  toggleMobileNavVisibility: () => void;
}

const useLayoutStore = create<LayoutState>(
  (set: SetState<LayoutState>, get: GetState<LayoutState>) => ({
    isNavVisible: true,
    isMobileNavVisible: false,
    isMobileFirstLoad: false,
    setMobileFirstLoad: (load: boolean) =>
      set(() => ({ isMobileFirstLoad: load })),
    toggleNavVisibility: () =>
      set((state) => ({ isNavVisible: !state.isNavVisible })),
    toggleMobileNavVisibility: () =>
      set((state) => ({ isMobileNavVisible: !state.isMobileNavVisible })), 
  })
);

export default useLayoutStore;
