import { Question } from "@/components/questions/types";
import useConsoleStore from "@/store/consoleStore";
import { useTimerStore } from "@/store/timerStore";
import { questionCategories, useQuestionStore } from "@/store/questionStore";
import { questionIds } from "@/utils/openAll";
import { htmlQuestionsData } from "@/questionsData/htmlQuestions";
import { cssQuestionsData } from "@/questionsData/cssQuestions";
import { javascriptQuestionsData } from "@/questionsData/javascriptQuestions";
import { typescriptQuestionsData } from "@/questionsData/typescriptQuestions";
import { reactQuestionsData } from "@/questionsData/reactQuestions";
import { gitQuestionsData } from "@/questionsData/gitQuestions";
import { optimizationQuestionsData } from "@/questionsData/optimizationQuestions";
import { generalQuestionsData } from "@/questionsData/generalQuestions";
import { exercisesQuestionsData } from "@/questionsData/exercisesQuestions";
import styles from "./WelcomeModal.module.scss";

export const WelcomeModalStats = () => {
  return (
    <div className={styles.statsContainer}>
      <table className={styles.statsTable}>
        <thead>
          <tr>
            <th>Questions</th>
            <th>Opened</th>
            <th>Selected</th>
            <th>Total</th>
            <th>Code Snippets</th>
          </tr>
        </thead>
        <tbody>
          {questionCategories.map((category) => {
            const openedCount = useQuestionStore.getState()[category].length;
            const selectedCount =
              useQuestionStore.getState()[`${category}Checkboxes`].length;
            const totalCount = questionIds[category].length;

            let categoryData = [];
            switch (category) {
              case "HTML":
                categoryData = htmlQuestionsData;
                break;
              case "CSS":
                categoryData = cssQuestionsData;
                break;
              case "JavaScript":
                categoryData = javascriptQuestionsData;
                break;
              case "TypeScript":
                categoryData = typescriptQuestionsData;
                break;
              case "React":
                categoryData = reactQuestionsData;
                break;
              case "Git":
                categoryData = gitQuestionsData;
                break;
              case "Optimization":
                categoryData = optimizationQuestionsData;
                break;
              case "General":
                categoryData = generalQuestionsData;
                break;
              case "CodeExercises":
                categoryData = exercisesQuestionsData;
                break;
            }

            let codeSnippetCount = categoryData.reduce(
              (count: number, q: any) => {
                if (Array.isArray(q.answer)) {
                  q.answer.forEach((a: any) => {
                    if (
                      a.type === "code" ||
                      a.type === "codeExerciseSolution"
                    ) {
                      count++;
                    }
                  });
                }
                return count;
              },
              0
            );

            if (category === "CodeExercises") {
              codeSnippetCount = Math.floor(codeSnippetCount / 2);
            }

            const displayCategory =
              category === "CodeExercises" ? "Code exercises" : category;

            return (
              <tr key={category}>
                <td>{displayCategory}</td>
                <td>{openedCount}</td>
                <td>{selectedCount}</td>
                <td>{totalCount}</td>
                <td>{codeSnippetCount}</td>
              </tr>
            );
          })}
          <tr className={styles.totalRow}>
            <td>Total</td>
            <td>
              {questionCategories.reduce(
                (sum, category) =>
                  sum + useQuestionStore.getState()[category].length,
                0
              )}
            </td>
            <td>
              {questionCategories.reduce(
                (sum, category) =>
                  sum +
                  useQuestionStore.getState()[`${category}Checkboxes`].length,
                0
              )}
            </td>
            <td>
              {questionCategories.reduce(
                (sum, category) => sum + questionIds[category].length,
                0
              )}
            </td>
            <td>
              {questionCategories.reduce((sum, category) => {
                let categoryData: Question[];
                switch (category) {
                  case "HTML":
                    categoryData = htmlQuestionsData;
                    break;
                  case "CSS":
                    categoryData = cssQuestionsData;
                    break;
                  case "JavaScript":
                    categoryData = javascriptQuestionsData;
                    break;
                  case "TypeScript":
                    categoryData = typescriptQuestionsData;
                    break;
                  case "React":
                    categoryData = reactQuestionsData;
                    break;
                  case "Git":
                    categoryData = gitQuestionsData;
                    break;
                  case "Optimization":
                    categoryData = optimizationQuestionsData;
                    break;
                  case "General":
                    categoryData = generalQuestionsData;
                    break;
                  case "CodeExercises":
                    categoryData = exercisesQuestionsData;
                    break;
                  default:
                    categoryData = [];
                }

                let count = categoryData.reduce((c: number, q: any) => {
                  if (Array.isArray(q.answer)) {
                    q.answer.forEach((a: any) => {
                      if (
                        a.type === "code" ||
                        a.type === "codeExerciseSolution"
                      ) {
                        c++;
                      }
                    });
                  }
                  return c;
                }, 0);
                if (category === "CodeExercises") count = Math.floor(count / 2);
                return sum + count;
              }, 0)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.otherStats}>
        <p>
          <span>Scripts executed in console:</span>
          <strong>{useConsoleStore.getState().scriptsExecuted}</strong>
        </p>
        <p>
          <span>Total time of pomodoro sessions:</span>
          <strong>
            {useTimerStore.getState().totalPomodoroTime}
            {useTimerStore.getState().totalPomodoroTime === 1
              ? " minute"
              : " minutes"}
          </strong>
        </p>
      </div>
    </div>
  );
};
