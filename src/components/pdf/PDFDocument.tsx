import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 5,
    padding: 5,
    flexGrow: 1,
  },
  text: {
    fontSize: 10,
 
  },
  question: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 9,
  },
  answer: {
    fontSize: 10,
    marginBottom: 3,  
    lineHeight: 1.4,
  },
  listItem: {
    fontSize: 10,
    marginLeft: 10,
    lineHeight: 1.7,
  },
  code: {
    fontSize: 9,
    fontFamily: "Courier",
    backgroundColor: "#f0f0f0",
    padding: 5,
    marginVertical: 3,
    lineHeight: 1.7,
  },
});

interface AnswerContent {
  type: string;
  content: string;
  language?: string;
}

interface Question {
  id: number;
  question: string;
  answer: string | AnswerContent[];
}

interface PDFDocumentProps {
  questions: Question[];
}

const renderAnswer = (answer: string | AnswerContent[]) => {
  if (typeof answer === "string") {
    return <Text style={styles.answer}>{answer}</Text>;
  }

  return answer.map((content, index) => {
    switch (content.type) {
      case "text":
        return (
          <Text key={index} style={styles.answer}>
            {content.content}
          </Text>
        );
      case "unordered-list":
      case "ordered-list":
        return content.content.split("\n").map((item, i) => (
          <Text key={`${index}-${i}`} style={styles.listItem}>
            • {item}
          </Text>
        ));
      case "code":
        return (
          <View key={index} style={styles.code}>
            <Text style={styles.text}>{content.content}</Text>
          </View>
        );
      default:
        return null;
    }
  });
};

export const PDFDocument = ({ questions }: PDFDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {questions.map((question, index) => (
        <View key={question.id} style={styles.section}>
          <Text style={styles.question}>
            Q{index + 1}: {question.question}
          </Text>
          {renderAnswer(question.answer)}
        </View>
      ))}
    </Page>
  </Document>
);
