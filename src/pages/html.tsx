import Head from "next/head";

import QuestionList from "@/components/questions/QuestionList";
import { htmlQuestionsData } from "@/questionsData/htmlQuestions";

export default function Home() {
  return (
    <>
      <Head>
        <title>HTML</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QuestionList questions={htmlQuestionsData} />
    </>
  );
}
