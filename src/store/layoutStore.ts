import create, { SetState, GetState } from 'zustand';

interface LayoutState {
  isNavVisible: boolean;
  toggleNavVisibility: () => void;
}

const useLayoutStore = create<LayoutState>((set: SetState<LayoutState>, get: GetState<LayoutState>) => ({
  isNavVisible: true,
  toggleNavVisibility: () => set((state) => ({ isNavVisible: !state.isNavVisible })),
}));

export default useLayoutStore;
