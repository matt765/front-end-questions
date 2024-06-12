import { QuestionList } from "@/components/questions/QuestionList";
import { optimizationQuestionsData } from "@/questionsData/optimizationQuestions";

const Optimization = () => {
  return (
    <>
      <QuestionList questions={optimizationQuestionsData} tech="Optimization" />
    </>
  );
};

export default Optimization;
