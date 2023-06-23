import create from "zustand";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/localStorageUtils";

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

  const techs: Tech[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Git",
    "Accessibility",
    "General",
  ];

  let initialQuestionStore: Partial<QuestionStore> = {};
  techs.forEach((tech) => {
    initialQuestionStore[tech] = loadFromLocalStorage<number[]>(tech, []);
    initialQuestionStore[`${tech}Checkboxes`] = loadFromLocalStorage<number[]>(
      `${tech}Checkboxes`,
      []
    );
  });

  const store = {
    ...initialQuestionStore,
    isLoading: true, // <-- Set isLoading initially to true
    addQuestionId: (tech: Tech, id: number) => {
      const currentIds = loadFromLocalStorage<number[]>(tech, []);
      if (!currentIds.includes(id)) {
        setAndStoreArray(tech, [...currentIds, id]);
      }
    },
    removeQuestionId: (tech: Tech, id: number) => {
      const currentIds = loadFromLocalStorage<number[]>(tech, []);
      setAndStoreArray(
        tech,
        currentIds.filter((currentId) => currentId !== id)
      );
    },
    addCheckbox: (tech: Tech, id: number) => {
      const currentCheckboxes = loadFromLocalStorage<number[]>(
        `${tech}Checkboxes`,
        []
      );
      if (!currentCheckboxes.includes(id)) {
        setAndStoreArray(`${tech}Checkboxes` as keyof QuestionStore, [
          ...currentCheckboxes,
          id,
        ]);
      }
    },
    removeCheckbox: (tech: Tech, id: number) => {
      const currentCheckboxes = loadFromLocalStorage<number[]>(
        `${tech}Checkboxes`,
        []
      );
      setAndStoreArray(
        `${tech}Checkboxes` as keyof QuestionStore,
        currentCheckboxes.filter((checkboxId) => checkboxId !== id)
      );
    },
    addAllQuestionIds: (tech: Tech, ids: number[]) => {
      setAndStoreArray(tech, ids);
    },
    removeAllQuestionIds: (tech: Tech) => {
      setAndStoreArray(tech, []);
    },
    resetCheckboxes: (tech: Tech) => {
      setAndStoreArray(`${tech}Checkboxes` as keyof QuestionStore, []);
    },
  } as QuestionStore;

  return store;
});
