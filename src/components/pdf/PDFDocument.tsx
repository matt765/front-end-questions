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
});

interface Question {
  question: string;
  answer: string;
}

interface PDFDocumentProps {
  questions: Question[];
}

export const PDFDocument = ({ questions }: PDFDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {questions.map((question, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.text}>
            Q{index + 1}: {question.question}
          </Text>
          <Text style={styles.text}>A: {question.answer}</Text>
        </View>
      ))}
    </Page>
  </Document>
);
