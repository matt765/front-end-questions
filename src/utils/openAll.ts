

import CodeExercises from "@/app/code-exercises/page";
import { Question } from "@/components/questions/types";
import { cssQuestionsData } from "@/questionsData/cssQuestions";
import { exercisesQuestionsData } from "@/questionsData/exercisesQuestions";
import { generalQuestionsData } from "@/questionsData/generalQuestions";
import { gitQuestionsData } from "@/questionsData/gitQuestions";
import { htmlQuestionsData } from "@/questionsData/htmlQuestions";
import { javascriptQuestionsData } from "@/questionsData/javascriptQuestions";
import { optimizationQuestionsData } from "@/questionsData/optimizationQuestions";
import { reactQuestionsData } from "@/questionsData/reactQuestions";
import { typescriptQuestionsData } from "@/questionsData/typescriptQuestions";

const extractIDs = (data: Question[]) => data.map((item) => item.id);

export const questionIds = {
  HTML: extractIDs(htmlQuestionsData),
  CSS: extractIDs(cssQuestionsData),
  JavaScript: extractIDs(javascriptQuestionsData),
  TypeScript: extractIDs(typescriptQuestionsData),
  React: extractIDs(reactQuestionsData),
  Git: extractIDs(gitQuestionsData),
  Optimization: extractIDs(optimizationQuestionsData),
  General: extractIDs(generalQuestionsData),
  CodeExercises: extractIDs(exercisesQuestionsData),
};
