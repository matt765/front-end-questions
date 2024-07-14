import { QuestionList } from "@/components/questions/QuestionList";
import { gitQuestionsData } from "@/questionsData/gitQuestions";

const Git = () => {
  return (
    <>
      <QuestionList questions={gitQuestionsData} questionCategory="Git" />
    </>
  );
};

export default Git;
