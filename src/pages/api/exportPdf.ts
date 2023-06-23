// pages/api/exportPdf.ts
import { htmlQuestionsData } from '@/questionsData/htmlQuestions';
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });

  let content = `
  <html>
  <body>
    <style>
    li {
      page-break-after: always;
    }
    </style>
    <ol>
  `;

  htmlQuestionsData.forEach(({ question, answer }) => {
    content += `
      <li>
        <h3>${question}</h3>
        <p>${answer}</p>
      </li>
    `;
  });

  content += `
    </ol>
  </body>
  </html>
  `;

  await page.setContent(content);
  const pdf = await page.pdf({ format: "A4" });

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="questions.pdf"');
  res.send(pdf);
}

export default handler;
