import create, { SetState, GetState } from "zustand";

interface LayoutState {
  isNavVisible: boolean;
  isMobileFirstLoad: boolean;
  setMobileFirstLoad: (load: boolean) => void;
  toggleNavVisibility: () => void;
}

const useLayoutStore = create<LayoutState>(
  (set: SetState<LayoutState>, get: GetState<LayoutState>) => ({
    isNavVisible: true,
    isMobileFirstLoad: false,
    setMobileFirstLoad: (load: boolean) =>
      set(() => ({ isMobileFirstLoad: load })),
    toggleNavVisibility: () =>
      set((state) => ({ isNavVisible: !state.isNavVisible })),
  })
);

export default useLayoutStore;
