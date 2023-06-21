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
  addCheckbox: (tech: Tech, id: number) => void;
  removeCheckbox: (tech: Tech, id: number) => void;
  resetCheckboxes: (tech: Tech) => void;
};

export type QuestionStore = {
  [K in Tech]: number[];
} & {
  [K in `${Tech}Checkboxes`]: number[];
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
  HTMLCheckboxes: [],
  CSSCheckboxes: [],
  JavaScriptCheckboxes: [],
  TypeScriptCheckboxes: [],
  ReactCheckboxes: [],
  GitCheckboxes: [],
  AccessibilityCheckboxes: [],
  GeneralCheckboxes: [],
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
  addCheckbox: (tech: Tech, id: number) => {
    const currentCheckboxes = get()[`${tech}Checkboxes`];
    if (!currentCheckboxes.includes(id)) {
      set((state) => ({
        ...state,
        [`${tech}Checkboxes`]: [...currentCheckboxes, id],
      }));
    }
  },
  removeCheckbox: (tech: Tech, id: number) => {
    set((state) => ({
      ...state,
      [`${tech}Checkboxes`]: state[`${tech}Checkboxes`].filter(
        (checkboxId) => checkboxId !== id
      ),
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
  resetCheckboxes: (tech: Tech) => {
    set((state) => ({
      ...state,
      [`${tech}Checkboxes`]: [], // make this tech's checkboxes array empty
    }));
  },
}));
