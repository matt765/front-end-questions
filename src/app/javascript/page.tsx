import { javascriptQuestionsData } from "@/questionsData/javascriptQuestions";
import { QuestionList } from "@/components/questions/QuestionList";

const JavaScript = () => {
  return (
    <>
      <QuestionList
        questions={javascriptQuestionsData}
        questionCategory="JavaScript"
      />
    </>
  );
};

export default JavaScript;
