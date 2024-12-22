"use client";
import { QuestionList } from "@/components/questions/QuestionList";
import { algorithmsQuestionsData } from "@/questionsData/algorithmsQuestions";
import { componentQuestionsData } from "@/questionsData/componentQuestions";
import { QuestionCategory, useQuestionStore } from "@/store/questionStore";
import { useState } from "react";
import styles from "./styles/CodeExercises.module.scss";

const CodeExercises = () => {
  const selectedTab = useQuestionStore(
    (state) => state.selectedCodeExerciseTab
  );

  const currentQuestions =
    selectedTab === "algorithms"
      ? algorithmsQuestionsData
      : componentQuestionsData;

  const category: QuestionCategory =
    selectedTab === "algorithms" ? "Algorithms" : "Components";

  return (
    <QuestionList questions={currentQuestions} questionCategory={category} />
  );
};

export default CodeExercises;
