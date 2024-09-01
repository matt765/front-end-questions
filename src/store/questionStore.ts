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
  openQuestion: (questionCategory: QuestionCategory, id: number) => void;
  closeQuestion: (questionCategory: QuestionCategory, id: number) => void;
  openAllQuestions: (questionCategory: QuestionCategory, ids: number[]) => void;
  closeAllQuestions: (questionCategory: QuestionCategory) => void;
  selectQuestion: (questionCategory: QuestionCategory, id: number) => void;
  unselectQuestion: (questionCategory: QuestionCategory, id: number) => void;
  selectAllQuestions: (
    questionCategory: QuestionCategory,
    ids: number[]
  ) => void;
  unselectAllQuestions: (questionCategory: QuestionCategory) => void;
  setShowOnlySelected: (
    questionCategory: QuestionCategory,
    value: boolean
  ) => void;
  openSelectedQuestions: (questionCategory: QuestionCategory) => void;
  closeSelectedQuestions: (questionCategory: QuestionCategory) => void;
};

export type QuestionStore = {
  [K in QuestionCategory]: number[];
} & {
  [K in `${QuestionCategory}Checkboxes`]: number[];
} & {
  showOnlySelected: { [K in QuestionCategory]: boolean };
  isLoading: boolean;
} & QuestionStoreMethods;

export const useQuestionStore = create<QuestionStore>((set, get) => {
  // Generic function that updates store state and saves it to local storage
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

  let initialQuestionStore: Partial<QuestionStore> = {
    showOnlySelected: {} as { [K in QuestionCategory]: boolean },
  };

  // Loop that initializes the store with values from local storage when application starts
  questionCategories.forEach((questionCategory) => {
    initialQuestionStore[questionCategory] = loadFromLocalStorage<number[]>(
      questionCategory,
      []
    );
    initialQuestionStore[`${questionCategory}Checkboxes`] =
      loadFromLocalStorage<number[]>(`${questionCategory}Checkboxes`, []);
    initialQuestionStore.showOnlySelected![questionCategory] =
      loadFromLocalStorage<boolean>(
        `showOnlySelected_${questionCategory}`,
        false
      );
  });

  const store: QuestionStore = {
    ...(initialQuestionStore as QuestionStore),
    isLoading: true,
    openQuestion: (questionCategory: QuestionCategory, id: number) => {
      const currentIds = get()[questionCategory]; // Use Zustand state
      if (!currentIds.includes(id)) {
        setAndStoreArray(questionCategory, [...currentIds, id]);
      }
    },
    closeQuestion: (questionCategory: QuestionCategory, id: number) => {
      const currentIds = get()[questionCategory]; // Use Zustand state
      setAndStoreArray(
        questionCategory,
        currentIds.filter((currentId) => currentId !== id)
      );
    },
    selectQuestion: (questionCategory: QuestionCategory, id: number) => {
      const currentCheckboxes = get()[`${questionCategory}Checkboxes`]; // Use Zustand state
      if (!currentCheckboxes.includes(id)) {
        setAndStoreArray(
          `${questionCategory}Checkboxes` as keyof QuestionStore,
          [...currentCheckboxes, id]
        );
      }
    },
    unselectQuestion: (questionCategory: QuestionCategory, id: number) => {
      const currentCheckboxes = get()[`${questionCategory}Checkboxes`]; // Use Zustand state
      setAndStoreArray(
        `${questionCategory}Checkboxes` as keyof QuestionStore,
        currentCheckboxes.filter((checkboxId) => checkboxId !== id)
      );
    },
    openAllQuestions: (questionCategory: QuestionCategory, ids: number[]) => {
      setAndStoreArray(questionCategory, ids);
    },
    closeAllQuestions: (questionCategory: QuestionCategory) => {
      setAndStoreArray(questionCategory, []);
    },
    selectAllQuestions: (questionCategory: QuestionCategory, ids: number[]) => {
      setAndStoreArray(
        `${questionCategory}Checkboxes` as keyof QuestionStore,
        ids
      );
    },
    unselectAllQuestions: (questionCategory: QuestionCategory) => {
      setAndStoreArray(
        `${questionCategory}Checkboxes` as keyof QuestionStore,
        []
      );
    },
    setShowOnlySelected: (
      questionCategory: QuestionCategory,
      value: boolean
    ) => {
      set((state) => ({
        showOnlySelected: {
          ...state.showOnlySelected,
          [questionCategory]: value,
        },
      }));
      saveToLocalStorage(`showOnlySelected_${questionCategory}`, value);
    },
    openSelectedQuestions: (questionCategory: QuestionCategory) => {
      const selectedQuestions = get()[`${questionCategory}Checkboxes`]; // Use Zustand state
      const currentOpenQuestions = get()[questionCategory]; // Use Zustand state
      const newOpenQuestions = Array.from(
        new Set([...currentOpenQuestions, ...selectedQuestions])
      );
      setAndStoreArray(questionCategory, newOpenQuestions);
    },
    closeSelectedQuestions: (questionCategory: QuestionCategory) => {
      const selectedQuestions = get()[`${questionCategory}Checkboxes`]; // Use Zustand state
      const currentOpenQuestions = get()[questionCategory]; // Use Zustand state
      const newOpenQuestions = currentOpenQuestions.filter(
        (id) => !selectedQuestions.includes(id)
      );
      setAndStoreArray(questionCategory, newOpenQuestions);
    },
  };

  return store;
});
