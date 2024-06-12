import { QuestionList } from "@/components/questions/QuestionList";
import { gitQuestionsData } from "@/questionsData/gitQuestions";

const Git = () => {
  return (
    <>
      <QuestionList questions={gitQuestionsData} tech="Git" />
    </>
  );
};

export default Git;
