import { QuestionList } from "@/components/questions/QuestionList";
import { reactQuestionsData } from "@/questionsData/reactQuestions";

const React = () => {
  return (
    <>
      <QuestionList questions={reactQuestionsData} tech="React" />
    </>
  );
};

export default React;
