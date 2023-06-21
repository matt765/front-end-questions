import { question } from "@/components/questions/QuestionList";
import { accessibilityQuestionsData } from "@/questionsData/accessibilityQuestions";
import { cssQuestionsData } from "@/questionsData/cssQuestions";
import { generalQuestionsData } from "@/questionsData/generalQuestions";
import { gitQuestionsData } from "@/questionsData/gitQuestions";
import { htmlQuestionsData } from "@/questionsData/htmlQuestions";
import { javascriptQuestionsData } from "@/questionsData/javascriptQuestions";
import { reactQuestionsData } from "@/questionsData/reactQuestions";
import { typescriptQuestionsData } from "@/questionsData/typescriptQuestions";

// Function to extract IDs from an array of objects
const extractIDs = (data: question[]) => data.map((item) => item.id);

// Creating an object containing technology name as key and array of ids as values
export const questionIds = {
  HTML: extractIDs(htmlQuestionsData),
  CSS: extractIDs(cssQuestionsData),
  JavaScript: extractIDs(javascriptQuestionsData),
  TypeScript: extractIDs(typescriptQuestionsData),
  React: extractIDs(reactQuestionsData),
  Git: extractIDs(gitQuestionsData),
  Accessibility: extractIDs(accessibilityQuestionsData),
  General: extractIDs(generalQuestionsData),
};
