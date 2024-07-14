import { htmlQuestionsData } from "@/questionsData/htmlQuestions";
import { QuestionList } from "@/components/questions/QuestionList";

const HTML = () => {
  return (
    <>
      <QuestionList questions={htmlQuestionsData} questionCategory="HTML" />
    </>
  );
};

export default HTML;
