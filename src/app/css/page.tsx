import { QuestionList } from "@/components/questions/QuestionList";
import { cssQuestionsData } from "@/questionsData/cssQuestions";

const CSS = () => {
  return (
    <>
      <QuestionList questions={cssQuestionsData} questionCategory="CSS" />
    </>
  );
};

export default CSS;
