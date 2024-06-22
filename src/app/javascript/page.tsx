import { javascriptQuestionsData } from "@/questionsData/javascriptQuestions";
import { QuestionList } from "@/components/questions/QuestionList";

const JavaScript = () => {
  return (
    <>
      <QuestionList
        questions={javascriptQuestionsData}
        tech="JavaScript"
      />
    </>
  );
};

export default JavaScript;
