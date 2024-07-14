import { create } from "zustand";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/localStorageUtils";

export type QuestionCategory =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Git"
  | "Optimization"
  | "General";

type QuestionStoreMethods = {
  addQuestionId: (questionCategory: QuestionCategory, id: number) => void;
  removeQuestionId: (questionCategory: QuestionCategory, id: number) => void;
  addAllQuestionIds: (questionCategory: QuestionCategory, ids: number[]) => void;
  removeAllQuestionIds: (questionCategory: QuestionCategory) => void;
  addCheckbox: (questionCategory: QuestionCategory, id: number) => void;
  removeCheckbox: (questionCategory: QuestionCategory, id: number) => void;
  resetCheckboxes: (questionCategory: QuestionCategory) => void;
};

export type QuestionStore = {
  [K in QuestionCategory]: number[];
} & {
  [K in `${QuestionCategory}Checkboxes`]: number[];
} & {
  isLoading: boolean;
} & QuestionStoreMethods;

export const useQuestionStore = create<QuestionStore>((set) => {
  const setAndStoreArray = <K extends keyof QuestionStore>(
    key: K,
    value: QuestionStore[K]
  ) => {
    saveToLocalStorage(key as string, value);
    set({ [key]: value } as Pick<QuestionStore, K>);
  };

  const questionCategories: QuestionCategory[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Git",
    "Optimization",
    "General",
  ];

  let initialQuestionStore: Partial<QuestionStore> = {};
  questionCategories.forEach((questionCategory) => {
    initialQuestionStore[questionCategory] = loadFromLocalStorage<number[]>(questionCategory, []);
    initialQuestionStore[`${questionCategory}Checkboxes`] = loadFromLocalStorage<number[]>(
      `${questionCategory}Checkboxes`,
      []
    );
  });

  const store = {
    ...initialQuestionStore,
    isLoading: true,
    addQuestionId: (questionCategory: QuestionCategory, id: number) => {
      const currentIds = loadFromLocalStorage<number[]>(questionCategory, []);
      if (!currentIds.includes(id)) {
        setAndStoreArray(questionCategory, [...currentIds, id]);
      }
    },
    removeQuestionId: (questionCategory: QuestionCategory, id: number) => {
      const currentIds = loadFromLocalStorage<number[]>(questionCategory, []);
      setAndStoreArray(
        questionCategory,
        currentIds.filter((currentId) => currentId !== id)
      );
    },
    addCheckbox: (questionCategory: QuestionCategory, id: number) => {
      const currentCheckboxes = loadFromLocalStorage<number[]>(
        `${questionCategory}Checkboxes`,
        []
      );
      if (!currentCheckboxes.includes(id)) {
        setAndStoreArray(`${questionCategory}Checkboxes` as keyof QuestionStore, [
          ...currentCheckboxes,
          id,
        ]);
      }
    },
    removeCheckbox: (questionCategory: QuestionCategory, id: number) => {
      const currentCheckboxes = loadFromLocalStorage<number[]>(
        `${questionCategory}Checkboxes`,
        []
      );
      setAndStoreArray(
        `${questionCategory}Checkboxes` as keyof QuestionStore,
        currentCheckboxes.filter((checkboxId) => checkboxId !== id)
      );
    },
    addAllQuestionIds: (questionCategory: QuestionCategory, ids: number[]) => {
      setAndStoreArray(questionCategory, ids);
    },
    removeAllQuestionIds: (questionCategory: QuestionCategory) => {
      setAndStoreArray(questionCategory, []);
    },
    resetCheckboxes: (questionCategory: QuestionCategory) => {
      setAndStoreArray(`${questionCategory}Checkboxes` as keyof QuestionStore, []);
    },
  } as QuestionStore;

  return store;
});
