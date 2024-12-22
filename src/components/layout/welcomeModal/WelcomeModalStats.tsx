import { useEffect, useState } from "react";
import { Question, AnswerContent } from "@/components/questions/types";
import useConsoleStore from "@/store/consoleStore";
import { useTimerStore } from "@/store/timerStore";
import { questionCategories, QuestionCategory, useQuestionStore } from "@/store/questionStore";
import { questionIds } from "@/utils/questionIds";
import { htmlQuestionsData } from "@/questionsData/htmlQuestions";
import { cssQuestionsData } from "@/questionsData/cssQuestions";
import { javascriptQuestionsData } from "@/questionsData/javascriptQuestions";
import { typescriptQuestionsData } from "@/questionsData/typescriptQuestions";
import { reactQuestionsData } from "@/questionsData/reactQuestions";
import { gitQuestionsData } from "@/questionsData/gitQuestions";
import { optimizationQuestionsData } from "@/questionsData/optimizationQuestions";
import { generalQuestionsData } from "@/questionsData/generalQuestions";
import { algorithmsQuestionsData } from "@/questionsData/algorithmsQuestions";
import { componentQuestionsData } from "@/questionsData/componentQuestions";
import styles from "./WelcomeModal.module.scss";

interface CategoryStats {
  opened: number;
  selected: number;
  total: number;
  codeSnippets: number;
}

interface TotalStats {
  totalOpened: number;
  totalSelected: number;
  totalQuestions: number;
  totalCodeSnippets: number;
}

const getCategoryData = (category: QuestionCategory): Question[] => {
  switch (category) {
    case "HTML":
      return htmlQuestionsData;
    case "CSS":
      return cssQuestionsData;
    case "JavaScript":
      return javascriptQuestionsData;
    case "TypeScript":
      return typescriptQuestionsData;
    case "React":
      return reactQuestionsData;
    case "Git":
      return gitQuestionsData;
    case "Optimization":
      return optimizationQuestionsData;
    case "General":
      return generalQuestionsData;
    case "Algorithms":
      return algorithmsQuestionsData;
    case "Components":
      return componentQuestionsData;
    default:
      return [];
  }
};

const countCodeSnippets = (questions: Question[]): number => {
  return questions.reduce((count, question) => {
    if (Array.isArray(question.answer)) {
      return count + question.answer.filter(
        (a: AnswerContent) => a.type === "code" || a.type === "codeExerciseSolution"
      ).length;
    }
    return count;
  }, 0);
};

const calculateCategoryStats = (category: QuestionCategory): CategoryStats => {
  const store = useQuestionStore.getState();
  const categoryData = getCategoryData(category);

  return {
    opened: store[category].length,
    selected: store[`${category}Checkboxes`].length,
    total: questionIds[category].length,
    codeSnippets: countCodeSnippets(categoryData)
  };
};

const calculateTotalStats = (categories: QuestionCategory[]): TotalStats => {
  return categories.reduce((totals, category) => {
    const stats = calculateCategoryStats(category);
    return {
      totalOpened: totals.totalOpened + stats.opened,
      totalSelected: totals.totalSelected + stats.selected,
      totalQuestions: totals.totalQuestions + stats.total,
      totalCodeSnippets: totals.totalCodeSnippets + stats.codeSnippets
    };
  }, {
    totalOpened: 0,
    totalSelected: 0,
    totalQuestions: 0,
    totalCodeSnippets: 0
  });
};

export const WelcomeModalStats = () => {
  // Use state to store and update stats
  const [categoryStats, setCategoryStats] = useState<Record<QuestionCategory, CategoryStats>>({} as Record<QuestionCategory, CategoryStats>);
  const [totalStats, setTotalStats] = useState<TotalStats>({
    totalOpened: 0,
    totalSelected: 0,
    totalQuestions: 0,
    totalCodeSnippets: 0
  });

  // Calculate stats when component mounts
  useEffect(() => {
    const newCategoryStats = questionCategories.reduce((acc, category) => {
      acc[category] = calculateCategoryStats(category);
      return acc;
    }, {} as Record<QuestionCategory, CategoryStats>);

    setCategoryStats(newCategoryStats);
    setTotalStats(calculateTotalStats(questionCategories));
  }, []);

  const pomodoroTime = useTimerStore(state => state.totalPomodoroTime);
  const scriptsExecuted = useConsoleStore(state => state.scriptsExecuted);

  return (
    <div className={styles.statsContainer}>
      <table className={styles.statsTable}>
        <thead>
          <tr>
            <th>Questions</th>
            <th>Opened</th>
            <th>Selected</th>
            <th>Total</th>
            <th>Code snippets</th>
          </tr>
        </thead>
        <tbody>
          {questionCategories.map((category) => {
            const stats = categoryStats[category] || { opened: 0, selected: 0, total: 0, codeSnippets: 0 };
            
            return (
              <tr key={category}>
                <td>{category}</td>
                <td>{stats.opened}</td>
                <td>{stats.selected}</td>
                <td>{stats.total}</td>
                <td>{stats.codeSnippets}</td>
              </tr>
            );
          })}
          <tr className={styles.totalRow}>
            <td>Total</td>
            <td>{totalStats.totalOpened}</td>
            <td>{totalStats.totalSelected}</td>
            <td>{totalStats.totalQuestions}</td>
            <td>{totalStats.totalCodeSnippets}</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.otherStats}>
        <p>
          <span>Scripts executed in console:</span>
          <strong>{scriptsExecuted}</strong>
        </p>
        <p>
          <span>Total time of pomodoro sessions:</span>
          <strong>
            {pomodoroTime}
            {pomodoroTime === 1 ? " minute" : " minutes"}
          </strong>
        </p>
      </div>
    </div>
  );
};