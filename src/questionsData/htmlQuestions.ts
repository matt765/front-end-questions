export const htmlQuestionsData = [
  {
    id: 1001,
    question: "What is HTML?",
    answer:
      "HTML stands for Hyper Text Markup Language.\nIt is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: 1002,
    question: "What is progressive rendering?",
    answer:
      "It's a technique to improve the performance of web pages. Server sends critical HTML first, then the rest of the content.",
  },
  {
    id: 1003,
    question: "What is doctype declaration?",
    answer:
      "A declaration at the start of HTML documents that instructs the web browser about the version of HTML the page is written in.",
  },
  {
    id: 1004,
    question: "How to write comments in HTML?",
    answer: "<!-- comment -->",
  },
  {
    id: 1005,
    question: "Difference: RGB and HEX colors?",
    answer:
      "RGB is a color model while HEX is a color encoding system. They can represent the same colors, but they do it in different ways. RGB uses red, green, and blue to represent a color. Each color component is an integer between 0 and 255. HEX is a hexadecimal color code that pairs 2 hexadecimal digits ranging from 00 to FF, representing red, green, and blue components.",
  },
  {
    id: 1006,
    question: "Difference: block and inline elements?",
    answer:
      "Block elements start on a new line and take up the full width. Inline elements only take up necessary width and don't start a new line.",
  },
  {
    id: 1007,
    question: "How many elements can have the same id?",
    answer: "Only one. IDs must be unique within the document.",
  },
  {
    id: 1008,
    question: "What are 3 ways of adding CSS to HTML document?",
    answer:
      'Inline CSS, Internal with <style> tag, External with <link rel="stylesheet">',
  },
  {
    id: 1009,
    question: "What is a viewport?",
    answer:
      "The visible area of a web page to the user, which can vary depending on the device.",
  },
  {
    id: 1010,
    question: 'What is "semantic HTML"?',
    answer:
      "HTML where the tags indicate the type of content, improving readability and SEO.",
  },
  {
    id: 1011,
    question: "What are HTML entities?",
    answer:
      "Special codes used to represent reserved characters and symbols that are not on the keyboard.",
  },
  {
    id: 1012,
    question: "What is UTF-8?",
    answer:
      "It's a character encoding standard used to represent characters in computers.",
  },
  {
    id: 1013,
    question: "What is XHTML?",
    answer: "An XML-based version of HTML that is stricter than regular HTML.",
  },
  {
    id: 1014,
    question: "Difference: SVG and Canvas?",
    answer:
      "SVG is a vector-based method that uses XML to define shapes, while Canvas is a pixel-based method that uses JavaScript to render graphics on the fly.",
  },
  {
    id: 1015,
    question: "How do you serve a page with content in multiple languages?",
    answer:
      "By using the lang attribute in the <html> tag and serving the correct language version based on the user's settings.",
  },
  {
    id: 1016,
    question: "How can you generate a public key in HTML?",
    answer: "Use the <keygen> tag, though it's deprecated in HTML5.",
  },
  {
    id: 1017,
    question: "Do you know any HTML preprocessor?",
    answer: "Examples include Pug (formerly Jade) and Haml.",
  },
  {
    id: 1018,
    question: "Why do we put CSS links in <head> and JS in <body>?",
    answer:
      "CSS is in the head to prevent FOUC. JS is just before </body> to improve page load time and because it often needs to manipulate DOM elements that need to be loaded first.",
  },
  {
    id: 1019,
    question: "Name 3 new tags in HTML5.",
    answer: "<article>, <aside>, <header>, <footer>, <nav>, <section>",
  },
  {
    id: 1020,
    question: "Is drag and drop possible in HTML5?",
    answer: "Yes, HTML5 has a built-in drag-and-drop API.",
  },
  {
    id: 1021,
    question: "How to define charset and what is recommended for Polish?",
    answer:
      'Use <meta charset="UTF-8">. UTF-8 can represent any character in the Unicode standard, including Polish.',
  },
  {
    id: 1022,
    question: "Difference: HTML elements and tags?",
    answer:
      "An HTML tag is the name of an HTML element enclosed in angle brackets. An HTML element encompasses an opening tag, content, and a closing tag.",
  },
  {
    id: 1023,
    question: "What is an image map?",
    answer:
      "It's a clickable image that can have different areas linked to different destinations.",
  },
  {
    id: 1024,
    question: "What are the best practices in HTML?",
    answer:
      "Semantic HTML, proper indentation, using lowercase, quotes around attribute values, specifying lang attribute, etc.",
  },
  {
    id: 1025,
    question: "What is accessibility?",
    answer:
      "Designing and creating websites in a way that everyone, including people with disabilities, can use them.",
  },
  {
    id: 1026,
    question: "What are void elements in HTML?",
    answer:
      "Elements that don't have closing tags or don't contain content. E.g., <br>, <img>, <input>, <meta>.",
  },
  {
    id: 1027,
    question: "What is a tag in HTML?",
    answer:
      "The keywords surrounded by angle brackets (like <p>, <div>) which represent the start and end of an HTML element.",
  },
  {
    id: 1028,
    question: "Are HTML tags case sensitive?",
    answer: "No, but it's a good practice to use lowercase.",
  },
  {
    id: 1029,
    question: "What is the purpose of the 'data' attribute?",
    answer: "To store custom data private to the page or application.",
  },
  {
    id: 1030,
    question: "Explain <abbr>, <q>, and <blockquote> tags.",
    answer:
      "<abbr>: Represents an abbreviation and optionally provides a full description for it.\n<q>: Indicates short quotations.\n<blockquote>: Indicates long quotations.",
  },
  {
    id: 1031,
    question: "What tags do you use for creating tables?",
    answer: "<table>, <tr>, <th>, <td>",
  },
  {
    id: 1032,
    question: "Difference: <ul> and <ol>",
    answer: "<ul> creates an unordered list, <ol> creates an ordered list.",
  },
  {
    id: 1033,
    question: "Which tag is used for the result of a calculation?",
    answer: "<output>",
  },
  {
    id: 1034,
    question: "Difference: <div> and <span>",
    answer: "<div> is a block-level element, <span> is an inline element.",
  },
  {
    id: 1035,
    question: "Difference: <datalist> and <select>",
    answer:
      "<select> creates a dropdown list of options, while <datalist> creates a list of options for an <input> element that provides autocomplete suggestions as the user types.",
  },
  {
    id: 1036,
    question: "What is <figure> tag?",
    answer:
      "Represents self-contained content, often with a caption (<figcaption>), and is typically referenced as a single unit.",
  },
  {
    id: 1037,
    question: "Explain the purpose of <iframe> tag.",
    answer: "Used to embed another HTML document within the current one.",
  },
  {
    id: 1038,
    question: "List common tags in the <head> element.",
    answer:
      "<title>, <meta>, <link> (for external CSS), <style> (for internal CSS), <script> (for JavaScript)",
  },
  {
    id: 1039,
    question: "What is the purpose of <meta> element?",
    answer:
      "Defines metadata about an HTML document. Metadata is not displayed on the page but necessary for browsers, search engines, etc.",
  },
  {
    id: 1040,
    question: "What tags are used to embed video/audio on a website?",
    answer: "<video>, <audio>, <source>",
  },
  {
    id: 1041,
    question: "Difference: defer and async attributes in script tag.",
    answer:
      "Both allow the script to be downloaded without blocking the rendering of the page. 'async' makes the script execute as soon as it is downloaded, regardless of where it is in the page. 'defer' makes the script execute only once the entire page has been downloaded.",
  },
  {
    id: 1042,
    question: 'What is the "main" tag?',
    answer: "Represents the main content of a document.",
  },
  {
    id: 1043,
    question: "Can an article be inside a section and vice versa?",
    answer: "Yes.",
  },
  {
    id: 1044,
    question: "What is Anchor tag in HTML?",
    answer: "<a> tag, used to create hyperlinks.",
  },
  {
    id: 1045,
    question: "What is <marquee> tag?",
    answer: "Used to create scrolling text or image, but deprecated in HTML5.",
  },
  {
    id: 1046,
    question: "What are attributes?",
    answer:
      'They provide additional information about HTML elements. They always come in name/value pairs like: name="value".',
  },
  {
    id: 1047,
    question: 'What is "role" attribute?',
    answer: "Defines a role for the element to enhance accessibility.",
  },
  {
    id: 1048,
    question: 'What is "title" attribute?',
    answer:
      "Provides advisory information about the element, often shown as a tooltip text.",
  },
  {
    id: 1049,
    question: 'Where do you put "lang" attribute?',
    answer: "In the <html> tag.",
  },
  {
    id: 1050,
    question: "How to add a custom attribute in HTML5?",
    answer: "Use data-* attributes.",
  },
  {
    id: 1051,
    question: "Why would you use srcset/size attribute in an image tag?",
    answer:
      "For responsive images. srcset defines the set of images, sizes tells the browser how to adjust the image based on viewport width.",
  },
  {
    id: 1052,
    question: 'What is "dataset"?',
    answer: "A DOMStringMap object for data-* attributes of an element.",
  },
  {
    id: 1053,
    question: "List common form tags.",
    answer:
      "<form>, <input>, <label>, <select>, <textarea>, <button>, <fieldset>, <legend>",
  },
  {
    id: 1054,
    question: "List common form attributes.",
    answer: "action, method, target, novalidate, autocomplete",
  },
  {
    id: 1055,
    question: "List common form input types.",
    answer:
      "text, password, submit, radio, checkbox, button, color, date, email, file, hidden, image, number, search, tel, url, range, reset",
  },
  {
    id: 1056,
    question: "How to limit the number of characters in a text input?",
    answer: "Use the maxlength attribute.",
  },
  {
    id: 1057,
    question: "How to add HTML validation to forms?",
    answer: "Use attributes like required, pattern, min, max, etc.",
  },
  {
    id: 1058,
    question: "How do you group form elements?",
    answer:
      "The <fieldset> element is used to group related elements in a form. A <legend> can be included within the fieldset to describe the group. This helps improve accessibility and form organization.",
  },
];
