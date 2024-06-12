import { QuestionList } from "@/components/questions/QuestionList";
import { generalQuestionsData } from "@/questionsData/generalQuestions";

const General = () => {
  return (
    <>
      <QuestionList questions={generalQuestionsData} tech="General" />
    </>
  );
};

export default General;
