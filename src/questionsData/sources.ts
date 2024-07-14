import { QuestionCategory } from "@/store/questionStore";

interface Source {
  title: string;
  url: string;
}

// Dummy data, generated by Claude Sonnet. This will be replaced with sources after I finish rewriting questions

export const sourcesData: Record<QuestionCategory, Source[]> = {
  HTML: [
    {
      title: "MDN Web Docs - HTML",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      title: "W3Schools HTML Tutorial",
      url: "https://www.w3schools.com/html/default.asp",
    },
    { title: "HTML5 Doctor", url: "http://html5doctor.com/" },
    { title: "HTML.com", url: "https://html.com/" },
    { title: "HTML5 Rocks", url: "https://www.html5rocks.com/en/" },
    { title: "HTML Living Standard", url: "https://html.spec.whatwg.org/" },
    { title: "HTML Goodies", url: "https://www.htmlgoodies.com/" },
  ],
  CSS: [
    {
      title: "MDN Web Docs - CSS",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    { title: "CSS-Tricks", url: "https://css-tricks.com/" },
    { title: "W3Schools CSS Tutorial", url: "https://www.w3schools.com/css/" },
    {
      title: "Smashing Magazine - CSS",
      url: "https://www.smashingmagazine.com/category/css/",
    },
    {
      title: "Codrops CSS Reference",
      url: "https://tympanus.net/codrops/css_reference/",
    },
    { title: "CSS Layout", url: "https://csslayout.io/" },
    { title: "CSS Grid Garden", url: "https://cssgridgarden.com/" },
  ],
  JavaScript: [
    {
      title: "MDN Web Docs - JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { title: "JavaScript.info", url: "https://javascript.info/" },
    { title: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
    {
      title: "You Don't Know JS",
      url: "https://github.com/getify/You-Dont-Know-JS",
    },
    {
      title: "W3Schools JavaScript Tutorial",
      url: "https://www.w3schools.com/js/",
    },
    { title: "JavaScript30", url: "https://javascript30.com/" },
    { title: "Modern JavaScript Tutorial", url: "https://javascript.info/" },
  ],
  TypeScript: [
    {
      title: "TypeScript Official Documentation",
      url: "https://www.typescriptlang.org/docs/",
    },
    {
      title: "TypeScript Deep Dive",
      url: "https://basarat.gitbook.io/typescript/",
    },
    {
      title: "TypeScript Handbook",
      url: "https://www.typescriptlang.org/docs/handbook/intro.html",
    },
    { title: "TypeScript Academy", url: "https://typescript.academy/" },
    {
      title: "TypeScript Evolution",
      url: "https://mariusschulz.com/blog/series/typescript-evolution",
    },
    { title: "TypeScript Weekly", url: "https://typescript-weekly.com/" },
    {
      title: "Awesome TypeScript",
      url: "https://github.com/dzharii/awesome-typescript",
    },
  ],
  React: [
    {
      title: "React Official Documentation",
      url: "https://reactjs.org/docs/getting-started.html",
    },
    { title: "React Patterns", url: "https://reactpatterns.com/" },
    {
      title: "React Hooks Handbook",
      url: "https://reactjs.org/docs/hooks-intro.html",
    },
    {
      title: "Overreacted - Dan Abramov's Blog",
      url: "https://overreacted.io/",
    },
    { title: "React Tutorial", url: "https://react-tutorial.app/" },
    { title: "React for Beginners", url: "https://reactforbeginners.com/" },
    { title: "Awesome React", url: "https://github.com/enaqx/awesome-react" },
  ],
  Git: [
    { title: "Pro Git Book", url: "https://git-scm.com/book/en/v2" },
    {
      title: "Atlassian Git Tutorials",
      url: "https://www.atlassian.com/git/tutorials",
    },
    { title: "Git Tower", url: "https://www.git-tower.com/learn/" },
    { title: "Git Immersion", url: "https://gitimmersion.com/" },
    { title: "Oh Shit, Git!?!", url: "https://ohshitgit.com/" },
    { title: "Learn Git Branching", url: "https://learngitbranching.js.org/" },
    {
      title: "Git - The Simple Guide",
      url: "https://rogerdudler.github.io/git-guide/",
    },
  ],
  Optimization: [
    { title: "Web.dev", url: "https://web.dev/" },
    {
      title: "PageSpeed Insights",
      url: "https://developers.google.com/speed/pagespeed/insights/",
    },
    { title: "WebPageTest", url: "https://www.webpagetest.org/" },
    {
      title: "Lighthouse",
      url: "https://developers.google.com/web/tools/lighthouse",
    },
    {
      title: "Frontend Performance Checklist",
      url: "https://www.smashingmagazine.com/2021/01/front-end-performance-checklist-2021-pdf-pages/",
    },
    {
      title: "Web Performance Calendar",
      url: "https://calendar.perfplanet.com/",
    },
    { title: "Measure", url: "https://web.dev/measure/" },
  ],
  General: [
    { title: "Stack Overflow", url: "https://stackoverflow.com/" },
    { title: "FreeCodeCamp", url: "https://www.freecodecamp.org/" },
    { title: "A List Apart", url: "https://alistapart.com/" },
    { title: "Smashing Magazine", url: "https://www.smashingmagazine.com/" },
    { title: "CSS-Tricks", url: "https://css-tricks.com/" },
    { title: "Dev.to", url: "https://dev.to/" },
    { title: "CodePen", url: "https://codepen.io/" },
  ],
};

export const websitesWithInterviewQuestions = [
  "https://github.com/sudheerj/javascript-interview-questions",
  "https://github.com/yangshun/front-end-interview-handbook",
  "https://github.com/h5bp/Front-end-Developer-Interview-Questions",
  "https://www.interviewbit.com/frontend-interview-questions/",
  "https://frontendmasters.com/books/front-end-handbook/2018/practice/interview-q.html",
  "https://www.toptal.com/javascript/interview-questions",
  "https://www.edureka.co/blog/interview-questions/front-end-interview-questions/",
];
