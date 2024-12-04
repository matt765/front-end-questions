export type AnswerContentType =
  | "text"
  | "unordered-list"
  | "ordered-list"
  | "code"
  | "codeExerciseSolution"

export interface AnswerContent {
  type: AnswerContentType;
  content: string;
  language?: string;
}

export interface Question {
  id: number;
  question: string;
  answer: string | AnswerContent[];
}
