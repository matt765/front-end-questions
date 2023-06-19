import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Flex, List } from "@mantine/core";
import QuestionList from "@/components/questions/QuestionList";
import { cssQuestionsData } from "@/questionsData/cssQuestions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CSS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QuestionList questions={cssQuestionsData} />
    </>
  );
}
