import { htmlQuestionsData } from "@/questionsData/htmlQuestions";
import { QuestionList } from "@/components/questions/QuestionList";

const Home = async () => {
  return (
    <>
      <QuestionList questions={htmlQuestionsData} questionCategory="HTML" />
    </>
  );
};

export default Home;
