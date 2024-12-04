import { QuestionList } from "@/components/questions/QuestionList";
import { exercisesQuestionsData } from "@/questionsData/exercisesQuestions";

const CodeExercises = () => {
  return (
    <>
      <QuestionList
        questions={exercisesQuestionsData}
        questionCategory="CodeExercises"
      />
    </>
  );
};

export default CodeExercises;
