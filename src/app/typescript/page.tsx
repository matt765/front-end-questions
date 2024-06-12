import { QuestionList } from "@/components/questions/QuestionList";
import { typescriptQuestionsData } from "@/questionsData/typescriptQuestions";

const TypeScript = () => {
  return (
    <>
      <QuestionList
        questions={typescriptQuestionsData}
        tech="TypeScript"
      />
    </>
  );
};

export default TypeScript;
