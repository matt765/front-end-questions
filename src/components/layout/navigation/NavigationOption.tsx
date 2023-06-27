import { Flex, Text, Loader } from "@mantine/core";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";

import { PDFDocument } from "../../pdf/PDFDocument";
import { cssQuestionsData } from "@/questionsData/cssQuestions";
import { Tech } from "@/store/questionStore";
import { accessibilityQuestionsData } from "@/questionsData/accessibilityQuestions";
import { generalQuestionsData } from "@/questionsData/generalQuestions";
import { gitQuestionsData } from "@/questionsData/gitQuestions";
import { htmlQuestionsData } from "@/questionsData/htmlQuestions";
import { javascriptQuestionsData } from "@/questionsData/javascriptQuestions";
import { reactQuestionsData } from "@/questionsData/reactQuestions";
import { typescriptQuestionsData } from "@/questionsData/typescriptQuestions";

interface NavigationOptionProps {
  title: string;
  onClick?: () => void;
  tech?: Tech;
}

export const NavigationOption: React.FC<NavigationOptionProps> = ({
  title,
  onClick,
  tech,
}) => {
  const [isExportButtonVisible, setIsExportButtonVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    if (!isExportButtonVisible) {
      setIsLoading(true);
    }
    setTimeout(() => {
      setIsExportButtonVisible(true);
      setIsLoading(false);
    }, 500);
  };

  const getQuestionsData = (tech?: Tech) => {
    switch (tech) {
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
      case "Accessibility":
        return accessibilityQuestionsData;
      case "General":
        return generalQuestionsData;
      default:
        return [];
    }
  };

  return (
    <Flex
      sx={{
        width: "100%",
        height: "4rem",
        backgroundColor: "rgba(200,200,200,0.1)",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "1rem",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(200,200,200,0.13)",
        },
      }}
      onClick={handleClick}
    >
      <Flex
        pl="1rem"
        h="100%"
        align="center"
        sx={{
          borderWidth: "0 0 0 0px",
          borderColor: "rgb(255,255,255,0.3)",
          borderStyle: "solid",
          "& a": {
            textDecoration: "none",
            color: "rgb(255,255,255,0.7)",
            fontWeight: 400,
            fontSize: "1.1rem",
            whiteSpace: "nowrap",
          },
        }}
      >
        {isLoading ? (
          <Flex w="12rem" justify="center" sx={{ opacity: "0.8" }}>
            <Loader color="violet" />
          </Flex>
        ) : tech && isExportButtonVisible ? (
          <PDFDownloadLink
            document={<PDFDocument questions={getQuestionsData(tech)} />}
            fileName="questions.pdf"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            Download PDF
          </PDFDownloadLink>
        ) : (
          <Text
            color="rgb(255,255,255,0.7)"
            sx={{ fontWeight: 400, fontSize: "1.2rem", whiteSpace: "nowrap" }}
          >
            {title}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};
