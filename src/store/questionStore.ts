import create from "zustand";

export type Tech =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Git"
  | "Accessibility"
  | "General";

type QuestionStoreMethods = {
  addQuestionId: (tech: Tech, id: number) => void;
  removeQuestionId: (tech: Tech, id: number) => void;
  addAllQuestionIds: (tech: Tech, ids: number[]) => void;
  removeAllQuestionIds: (tech: Tech) => void;
};

export type QuestionStore = {
  [K in Tech]: number[];
} & QuestionStoreMethods;

export const useQuestionStore = create<QuestionStore>((set, get) => ({
  HTML: [],
  CSS: [],
  JavaScript: [],
  TypeScript: [],
  React: [],
  Git: [],
  Accessibility: [],
  General: [],
  addQuestionId: (tech: Tech, id: number) => {
    const currentIds = get()[tech];
    if (!currentIds.includes(id)) {
      set((state) => ({
        ...state,
        [tech]: [...currentIds, id],
      }));
    }
  },
  removeQuestionId: (tech: Tech, id: number) => {
    set((state) => ({
      ...state,
      [tech]: state[tech].filter((currentId) => currentId !== id),
    }));
  },
  addAllQuestionIds: (tech: Tech, ids: number[]) => {
    set((state) => ({
      ...state,
      [tech]: ids,
    }));
  },
  removeAllQuestionIds: (tech: Tech) => {
    set((state) => ({
      ...state,
      [tech]: [],
    }));
  },
}));
