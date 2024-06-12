import { htmlQuestionsData } from "@/questionsData/htmlQuestions";
import { QuestionList } from "@/components/questions/QuestionList";

const HTML = () => {
  return (
    <>
      <QuestionList questions={htmlQuestionsData} tech="HTML" />
    </>
  );
};

export default HTML;
