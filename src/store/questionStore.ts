import create from "zustand";

type QuestionStore = {
  html: string[];
  css: string[];
  js: string[];
  ts: string[];
  react: string[];
  git: string[];
  accessibility: string[];
  general: string[];
};

export const useQuestionStore = create<QuestionStore>((set) => ({
  html: [],
  css: [],
  js: [],
  ts: [],
  react: [],
  git: [],
  accessibility: [],
  general: [],
}));
