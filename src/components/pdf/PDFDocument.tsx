import { useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

export const renderAnswer = (answer: string | AnswerContent[]) => {
  if (typeof answer === "string") {
    return <div className="answer">{answer}</div>;
  }
  return answer.map((content, index) => {
    switch (content.type) {
      case "text":
        return (
          <div key={index} className="answer">
            {content.content}
          </div>
        );
      case "unordered-list":
      case "ordered-list":
        return (
          <div key={index} className="list">
            {content.content.split("\n").map((item, i) => (
              <div key={`${index}-${i}`} className="list-item">
                • {item}
              </div>
            ))}
          </div>
        );
      case "code":
        return (
          <div key={index} className="code">
            <pre>{content.content}</pre>
          </div>
        );
      default:
        return null;
    }
  });
};
export const PDFDocument = ({ questions }: PDFDocumentProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!contentRef.current) return null;

    const canvas = await html2canvas(contentRef.current, {
      scale: 2,
      logging: false,
      useCORS: true
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4'
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    return pdf;
  };

  useEffect(() => {
    generatePDF();
  }, [questions]);

  return (
    <div 
      ref={contentRef}
      style={{ 
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
        visibility: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0
      }}
    >
      {questions.map((question, index) => (
        <div key={question.id} style={{ margin: '5px', padding: '5px' }}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '9px' }}>
            Q{index + 1}: {question.question}
          </div>
          {renderAnswer(question.answer)}
        </div>
      ))}
      <style>
        {`
          .answer {
            font-size: 10px;
            margin-bottom: 3px;
            line-height: 1.4;
          }
          .list-item {
            font-size: 10px;
            margin-left: 10px;
            line-height: 1.7;
          }
          .code {
            font-size: 9px;
            font-family: monospace;
            background-color: #f0f0f0;
            padding: 5px;
            margin: 3px 0;
            line-height: 1.7;
          }
        `}
      </style>
    </div>
  );
};