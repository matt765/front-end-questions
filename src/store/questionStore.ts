import { create } from "zustand";

import { Question as QuestionType } from "@/components/questions/types";

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
  | "General"
  | "CodeExercises";

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

type QuestionContent = {
  question: string;
  answer: string;
};

export type QuestionStore = {
  [K in QuestionCategory]: number[];
} & {
  [K in `${QuestionCategory}Checkboxes`]: number[];
} & {
  showOnlySelected: { [K in QuestionCategory]: boolean };
  isLoading: boolean;
  questionContents: { [key: string]: { [key: number]: QuestionContent } };
  copySelectedQuestions: (
    questionCategory: QuestionCategory,
    questions: QuestionType[]
  ) => Promise<void>;
} & QuestionStoreMethods;

export const questionCategories: QuestionCategory[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Git",
  "Optimization",
  "General",
  "CodeExercises",
];

export const useQuestionStore = create<QuestionStore>((set, get) => {
  // Generic function that updates store state and saves it to local storage
  const setAndStoreArray = <K extends keyof QuestionStore>(
    key: K,
    value: QuestionStore[K]
  ) => {
    saveToLocalStorage(key as string, value);
    set({ [key]: value } as Pick<QuestionStore, K>);
  };

  let initialQuestionStore: Partial<QuestionStore> = {
    showOnlySelected: {} as { [K in QuestionCategory]: boolean },
    questionContents: {} as {
      [key: string]: { [key: number]: QuestionContent };
    },
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
      const currentIds = get()[questionCategory];
      if (!currentIds.includes(id)) {
        setAndStoreArray(questionCategory, [...currentIds, id]);
      }
    },
    closeQuestion: (questionCategory: QuestionCategory, id: number) => {
      const currentIds = get()[questionCategory];
      setAndStoreArray(
        questionCategory,
        currentIds.filter((currentId) => currentId !== id)
      );
    },
    selectQuestion: (questionCategory: QuestionCategory, id: number) => {
      const currentCheckboxes = get()[`${questionCategory}Checkboxes`];
      if (!currentCheckboxes.includes(id)) {
        setAndStoreArray(
          `${questionCategory}Checkboxes` as keyof QuestionStore,
          [...currentCheckboxes, id]
        );
      }
    },
    unselectQuestion: (questionCategory: QuestionCategory, id: number) => {
      const currentCheckboxes = get()[`${questionCategory}Checkboxes`];
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
      const selectedQuestions = get()[`${questionCategory}Checkboxes`];
      const currentOpenQuestions = get()[questionCategory];
      const newOpenQuestions = Array.from(
        new Set([...currentOpenQuestions, ...selectedQuestions])
      );
      setAndStoreArray(questionCategory, newOpenQuestions);
    },
    closeSelectedQuestions: (questionCategory: QuestionCategory) => {
      const selectedQuestions = get()[`${questionCategory}Checkboxes`];
      const currentOpenQuestions = get()[questionCategory];
      const newOpenQuestions = currentOpenQuestions.filter(
        (id) => !selectedQuestions.includes(id)
      );
      setAndStoreArray(questionCategory, newOpenQuestions);
    },
    copySelectedQuestions: async (
      questionCategory: QuestionCategory,
      questions: QuestionType[]
    ) => {
      const selectedQuestions = get()[`${questionCategory}Checkboxes`];

      if (!selectedQuestions.length) {
        return;
      }

      const indexMap = questions.reduce((acc, q, idx) => {
        acc[q.id] = idx + 1;
        return acc;
      }, {} as Record<number, number>);

      const sortedSelectedQuestions = [...selectedQuestions].sort((a, b) => {
        const indexA = indexMap[a] || 0;
        const indexB = indexMap[b] || 0;
        return indexA - indexB;
      });

      const contentsToCopy = sortedSelectedQuestions
        .map((id) => {
          const question = questions.find((q) => q.id === id);
          if (!question) return "";

          const questionNumber = indexMap[id];
          const formattedAnswer =
            typeof question.answer === "string"
              ? question.answer
              : question.answer
                  .map((content) => {
                    switch (content.type) {
                      case "text":
                        return content.content;
                      case "unordered-list":
                      case "ordered-list":
                        return content.content
                          .split("\n")
                          .map((item) => `- ${item}`)
                          .join("\n");
                      case "code":
                        return `Code:\n${content.content}`;
                      case "codeExerciseSolution":
                        return `Solution:\n${content.content}`;
                      default:
                        return "";
                    }
                  })
                  .join("\n\n");

          return `Question ${questionNumber}:\n${question.question}\n\nAnswer:\n${formattedAnswer}\n\n---\n\n`;
        })
        .filter(Boolean)
        .join("");

      try {
        await navigator.clipboard.writeText(contentsToCopy);
      } catch (error) {
        // Fallback for browsers that don't support the modern Clipboard API
        console.error("Failed to copy to clipboard:", error);
        const textarea = document.createElement("textarea");
        textarea.value = contentsToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
    },
  };

  return store;
});
