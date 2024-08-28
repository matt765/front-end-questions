import { Question } from "@/components/questions/types";

export const htmlQuestionsData: Question[] = [
  {
    id: 1001,
    question: "What is HTML?",
    answer: [
      {
        type: "text",
        content:
          "HTML stands for  {{Hyper Text Markup Language:keyword}}. It is the standard markup language used for creating web pages and web applications.",
      },
      {
        type: "text",
        content:
          "As the backbone of web content, it describes the structure of a web page semantically and originally included cues for the appearance of the document. This allows browsers to interpret and display text, images, and other elements in a structured format.",
      },
    ],
  },
  {
    id: 1002,
    question: "What is progressive rendering?",
    answer: [
      {
        type: "text",
        content:
          "Progressive rendering is a technique used to improve the performance of web pages. It involves prioritizing and loading the most critical parts of a web page first, allowing users to see and interact with content more quickly.",
      },
      {
        type: "text",
        content:
          "This technique can significantly enhance the perceived loading speed and user experience, especially on slower connections or devices.",
      },
    ],
  },
  {
    id: 1003,
    question: "What is the purpose of the doctype declaration?",
    answer: [
      {
        type: "text",
        content:
          "The doctype declaration is an instruction to the web browser about what version of HTML the page is written in. It is not an HTML tag; it is an instruction to the browser about what type of document to expect.",
      },
      {
        type: "text",
        content:
          "This declaration helps ensure that the document is parsed the same way by different browsers. For HTML5, the doctype declaration is simply <!DOCTYPE html>.",
      },
      {
        type: "code",
        language: "html",
        content: `<!-- Example of a doctype declaration in HTML5 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`,
      },
    ],
  },
  {
    id: 1004,
    question: "How do you write comments in HTML?",
    answer: [
      {
        type: "text",
        content: "Comments in HTML are written using the following syntax:",
      },
      {
        type: "code",
        language: "html",
        content: "<!-- This is a comment in HTML -->",
      },
      {
        type: "text",
        content:
          "Comments are not displayed in the browser, but they can help document your HTML source code.",
      },
    ],
  },
  {
    id: 1005,
    question: "What is the difference between RGB and HEX colors?",
    answer: [
      {
        type: "text",
        content:
          "RGB and HEX are two different ways of specifying colors in web development:",
      },
      {
        type: "text",
        content:
          "RGB (Red, Green, Blue) uses three values from 0 to 255 to specify a color. For example:",
      },
      {
        type: "code",
        language: "css",
        content: "color: rgb(255, 0, 0); /* This is red */",
      },
      {
        type: "text",
        content:
          "HEX uses a six-digit code preceded by a # to specify a color. Each pair of digits represents red, green, and blue respectively. For example:",
      },
      {
        type: "code",
        language: "css",
        content: "color: #FF0000; /* This is also red */",
      },
    ],
  },
  {
    id: 1006,
    question: "What is the difference between block and inline elements?",
    answer: [
      {
        type: "text",
        content:
          "Block and inline elements differ in how they are displayed and how they interact with other elements:",
      },
      {
        type: "text",
        content: "Block elements",
      },
      {
        type: "unordered-list",
        content:
          "Start on a new line\nTake up the full width available\nCan have margin and padding applied to all sides",
      },
      {
        type: "text",
        content: "Inline elements",
      },
      {
        type: "unordered-list",
        content:
          "Do not start on a new line\nOnly take up as much width as necessary\nCannot have top and bottom margins applied by default",
      },
      {
        type: "text",
        content:
          "Examples of block elements include <div>, <p>, and <h1>. Examples of inline elements include <span>, <a>, and <strong>. However, it's important to note that with CSS, you can change the display property of elements, for instance, making an inline element behave like a block element by setting display: block;.",
      },
    ],
  },
  {
    id: 1007,
    question: "How many elements can have the same id attribute?",
    answer: [
      {
        type: "text",
        content:
          "In a valid HTML document, only one element can have a given id attribute value. IDs must be unique within the document.",
      },
      {
        type: "text",
        content:
          "Using duplicate IDs can lead to unexpected behavior in JavaScript and CSS, and it's considered invalid HTML.",
      },
    ],
  },
  {
    id: 1008,
    question: "What are the three ways of adding CSS to an HTML document?",
    answer: [
      {
        type: "text",
        content: "There are three main ways to add CSS to an HTML document:",
      },
      {
        type: "unordered-list",
        content:
          "Inline CSS: Using the style attribute on HTML elements\nInternal CSS: Using the <style> tag in the <head> section of the HTML document\nExternal CSS: Linking to an external CSS file using the <link> tag",
      },
      {
        type: "text",
        content:
          "External CSS is generally considered the best practice for maintainability and separation of concerns.",
      },
    ],
  },
  {
    id: 1009,
    question: "What is a viewport and why is it important?",
    answer: [
      {
        type: "text",
        content:
          "A viewport is the visible area of a web page on a device. It varies with the device, and will be smaller on a mobile phone than on a computer screen.",
      },
      {
        type: "text",
        content:
          "The viewport is crucial for creating responsive web designs. It's typically set using a meta tag in the <head> of an HTML document:",
      },
      {
        type: "code",
        language: "html",
        content:
          '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      },
    ],
  },
  {
    id: 1010,
    question: "What is semantic HTML?",
    answer: [
      {
        type: "text",
        content:
          "Semantic HTML refers to the use of HTML markup to reinforce the semantics, or meaning, of the content. It involves using HTML tags that accurately describe the purpose of the element and the type of content that is inside them.",
      },
      {
        type: "text",
        content:
          "Examples of semantic HTML elements include <header>, <nav>, <article>, and <footer>. Using semantic HTML improves accessibility, SEO, and maintainability of web pages.",
      },
      {
        type: "code",
        language: "html",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Article Title</h2>
            <p>This is the main content of the article.</p>
        </article>

        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
    </footer>
</body>
</html>`,
      },
      {
        type: "text",
        content:
          "This example demonstrates the use of semantic HTML elements to structure a web page, making it more meaningful and easier to understand for both humans and machines.",
      },
    ],
  },
  {
    id: 1011,
    question: "What are HTML entities and when should you use them?",
    answer: [
      {
        type: "text",
        content:
          "HTML entities are special codes used to represent reserved characters in HTML. They are also used for characters that are difficult to type on a standard keyboard.",
      },
      {
        type: "text",
        content:
          "For example, the less-than symbol (<) is represented as &lt;, and the copyright symbol (©) as &copy;. You should use HTML entities when you need to display these special characters in your HTML content.",
      },
    ],
  },
  {
    id: 1012,
    question: "What is UTF-8 and why is it important?",
    answer: [
      {
        type: "text",
        content:
          "UTF-8 (Unicode Transformation Format - 8-bit) is a character encoding capable of encoding all possible characters (called code points) in Unicode. It's the dominant character encoding for the World Wide Web, accounting for more than 95% of all web pages.",
      },
      {
        type: "text",
        content:
          "UTF-8 is important because it allows web pages to display characters from virtually any written language, making the web truly global and accessible.",
      },
    ],
  },
  {
    id: 1013,
    question: "What is XHTML and how does it differ from HTML?",
    answer: [
      {
        type: "text",
        content:
          "XHTML (eXtensible HyperText Markup Language) is a stricter, more XML-based version of HTML. The main differences include:",
      },
      {
        type: "unordered-list",
        content:
          "XHTML requires all tags to be properly nested and closed\nXHTML is case-sensitive for elements and attribute names\nXHTML requires all attribute values to be quoted",
      },
      {
        type: "text",
        content:
          "While XHTML was once seen as the future of web markup, HTML5 has since become the preferred standard for most web development.",
      },
    ],
  },
  {
    id: 1014,
    question: "What is the difference between SVG and Canvas?",
    answer: [
      {
        type: "text",
        content:
          "SVG (Scalable Vector Graphics) and Canvas are both used for creating graphics on the web, but they have different strengths and use cases:",
      },
      {
        type: "text",
        content: "SVG:",
      },
      {
        type: "unordered-list",
        content:
          "Vector-based (resolution-independent)\nBetter for static images that require high quality at different sizes\nCan be styled with CSS and manipulated with JavaScript",
      },
      {
        type: "text",
        content: "Canvas:",
      },
      {
        type: "unordered-list",
        content:
          "Pixel-based (resolution-dependent)\nBetter for complex scenes with many objects\nMore suitable for game graphics or other scenarios requiring frequent redraws",
      },
    ],
  },
  {
    id: 1015,
    question: "How do you serve a page with content in multiple languages?",
    answer: [
      {
        type: "text",
        content:
          "To serve a page with content in multiple languages, you can use the lang attribute in the <html> tag to specify the primary language of the document. For example:",
      },
      {
        type: "code",
        language: "html",
        content: '<html lang="en">',
      },
      {
        type: "text",
        content:
          "For specific elements in different languages, you can use the lang attribute on those elements. You should also use server-side logic to serve the correct language version based on the user's preferences or selection.",
      },
    ],
  },
  {
    id: 1016,
    question: "How can you generate a public key in HTML?",
    answer: [
      {
        type: "text",
        content:
          "In older versions of HTML, you could use the <keygen> element to generate a public key. However, this element has been deprecated and is not supported in modern browsers.",
      },
      {
        type: "text",
        content:
          "For modern web applications requiring key generation, it's recommended to use the Web Crypto API with JavaScript instead.",
      },
    ],
  },
  {
    id: 1017,
    question: "What are some HTML preprocessors and their benefits?",
    answer: [
      {
        type: "text",
        content: "HTML preprocessors are tools that add features to HTML and make it easier to write and maintain. Some popular HTML preprocessors include:",
      },
      {
        type: "unordered-list",
        content: "Pug (formerly Jade): Uses indentation for nesting and a simplified syntax\nHaml: Similar to Pug, with a focus on DRY principles\nHandlebars: Allows for more complex templating with variables and helpers",
      },
      {
        type: "text",
        content: "These preprocessors can improve development efficiency and code readability, but they require a build step to convert to standard HTML.",
      },
      {
        type: "text",
        content: "Here's an example of how HTML structure might look using Handlebars:",
      },
      {
        type: "code",
        language: "handlebars",
        content: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>{{pageTitle}}</title>
  </head>
  <body>
      <header>
          <h1>{{siteName}}</h1>
          <nav>
              <ul>
                  {{#each navItems}}
                      <li><a href="{{this.link}}">{{this.text}}</a></li>
                  {{/each}}
              </ul>
          </nav>
      </header>
      <main>
          <article>
              <h2>{{articleTitle}}</h2>
              <p>{{articleContent}}</p>
          </article>
          <aside>
              <h3>{{asideTitle}}</h3>
              <ul>
                  {{#each relatedLinks}}
                      <li><a href="{{this.link}}">{{this.text}}</a></li>
                  {{/each}}
              </ul>
          </aside>
      </main>
      <footer>
          <p>&copy; {{currentYear}} {{siteName}}. All rights reserved.</p>
      </footer>
  </body>
  </html>`,
      },
      {
        type: "text",
        content: "This example demonstrates how preprocessors like Handlebars can simplify HTML structure and introduce dynamic elements, making it easier to manage complex layouts and reusable components.",
      },
    ],
  },
  {
    id: 1018,
    question:
      "Why do we typically put CSS links in <head> and JS scripts just before </body>?",
    answer: [
      {
        type: "text",
        content:
          "This practice is related to optimizing page load performance:",
      },
      {
        type: "text",
        content:
          "CSS in <head>: Allows the browser to start downloading and parsing CSS early, preventing a Flash of Unstyled Content (FOUC).",
      },
      {
        type: "text",
        content:
          "JS before </body>: Allows the HTML to be parsed and rendered before JavaScript is downloaded and executed, improving perceived load time. It also ensures DOM elements are available when the scripts run.",
      },
    ],
  },
  {
    id: 1019,
    question: "What are some new tags introduced in HTML5?",
    answer: [
      {
        type: "text",
        content:
          "HTML5 introduced several new semantic tags to better describe the structure of a web page. Some of these include:",
      },
      {
        type: "unordered-list",
        content:
          "<header>: For introductory content or navigational aids\n<nav>: For navigation links\n<article>: For self-contained content\n<section>: For thematic grouping of content\n<aside>: For content tangentially related to the main content\n<footer>: For footer information",
      },
      {
        type: "text",
        content:
          "These tags help improve the semantic structure of HTML documents, making them more accessible and easier to style and manipulate.",
      },
    ],
  },
  {
    id: 1020,
    question: "Is drag and drop possible in HTML5?",
    answer: [
      {
        type: "text",
        content:
          "Yes, HTML5 introduced native support for drag and drop operations. This feature allows users to click and hold on an element, drag it to a different location, and release the mouse button to drop it there.",
      },
      {
        type: "text",
        content:
          "To implement drag and drop, you use specific events like dragstart, dragover, and drop, along with the draggable attribute on elements. Here's a simple example:",
      },
      {
        type: "code",
        language: "html",
        content: `<div id="draggable" draggable="true" ondragstart="drag(event)">
  Drag me
</div>
<div id="droppable" ondrop="drop(event)" ondragover="allowDrop(event)">
  Drop here
</div>

<script>
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
</script>`,
      },
      {
        type: "text",
        content:
          "This example creates a draggable element and a drop zone. The JavaScript functions handle the drag and drop events, allowing for a smooth user interaction.",
      },
    ],
  },
  {
    id: 1021,
    question: "What is the purpose of the alt attribute on images?",
    answer: [
      {
        type: "text",
        content:
          "The alt attribute provides alternative text for an image if the image cannot be displayed. It serves several important purposes:",
      },
      {
        type: "unordered-list",
        content:
          "Accessibility: Screen readers use this text to describe the image to visually impaired users\nSEO: Search engines use this text to understand the content of images\nUser experience: The text is displayed if the image fails to load",
      },
      {
        type: "text",
        content: "Here's an example of how to use the alt attribute:",
      },
      {
        type: "code",
        language: "html",
        content: '<img src="example.jpg" alt="A red apple on a wooden table">',
      },
    ],
  },
  {
    id: 1022,
    question: "What is the difference between HTML elements and tags?",
    answer: [
      {
        type: "text",
        content:
          "HTML elements and tags are related but distinct concepts in HTML:",
      },
      {
        type: "text",
        content:
          "An HTML tag is a markup construct consisting of an opening angle bracket (<), a tag name, and a closing angle bracket (>). Tags are used to mark the start and end of an HTML element.",
      },
      {
        type: "text",
        content:
          "An HTML element encompasses the opening tag, the content, and the closing tag (if applicable). It represents a complete unit of content in an HTML document.",
      },
      {
        type: "code",
        language: "html",
        content: "<p>This is a paragraph element</p>",
      },
      {
        type: "text",
        content:
          "In this example, <p> and </p> are tags, while the entire construct including the content is an HTML element.",
      },
    ],
  },
  {
    id: 1023,
    question: "What is an image map and how is it used?",
    answer: [
      {
        type: "text",
        content:
          "An image map is a feature in HTML that allows different parts of an image to be clickable, with each area linking to a different destination. This is useful for creating complex navigation from a single image.",
      },
      {
        type: "text",
        content:
          "Image maps are created using the <map> tag in conjunction with the <area> tag. Here's a basic example:",
      },
      {
        type: "code",
        language: "html",
        content: `<img src="image.jpg" usemap="#workmap">
<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
</map>`,
      },
    ],
  },
  {
    id: 1024,
    question: "What are some best practices in HTML?",
    answer: [
      {
        type: "text",
        content:
          "Following best practices in HTML helps create more maintainable, accessible, and SEO-friendly websites. Some key best practices include:",
      },
      {
        type: "unordered-list",
        content:
          "Use semantic HTML to provide meaning to your content structure\nMaintain proper indentation for improved readability\nUse lowercase for tag names and attributes\nAlways quote attribute values\nSpecify the lang attribute on the <html> tag\nUse meaningful alt text for images\nEnsure your HTML is valid and well-formed\nUse appropriate heading hierarchy (h1, h2, etc.)\nOptimize for performance by minimizing HTTP requests",
      },
    ],
  },
  {
    id: 1025,
    question: "What is web accessibility and why is it important?",
    answer: [
      {
        type: "text",
        content:
          "Web accessibility refers to the practice of designing and developing websites and web applications that can be used by everyone, including people with disabilities. This includes individuals with visual, auditory, motor, or cognitive impairments.",
      },
      {
        type: "text",
        content: "Accessibility is important for several reasons:",
      },
      {
        type: "unordered-list",
        content:
          "It ensures equal access to information and functionality for all users\nIt improves usability for everyone, not just those with disabilities\nIt's often a legal requirement in many countries\nIt can improve SEO and reach a wider audience\nIt demonstrates social responsibility and inclusivity",
      },
      {
        type: "text",
        content:
          "Implementing accessibility involves using semantic HTML, providing text alternatives for images, ensuring keyboard navigation, and following Web Content Accessibility Guidelines (WCAG).",
      },
    ],
  },
  {
    id: 1026,
    question: "What are void elements in HTML?",
    answer: [
      {
        type: "text",
        content:
          "Void elements in HTML are elements that cannot have any child nodes (i.e., nested elements or text content). These elements are self-closing and do not require a closing tag.",
      },
      {
        type: "text",
        content: "Common examples of void elements include:",
      },
      {
        type: "unordered-list",
        content:
          "<br>: Line break\n<img>: Image\n<input>: Input field\n<meta>: Metadata\n<hr>: Horizontal rule\n<link>: External resource link",
      },
      {
        type: "text",
        content: "These elements are written with a single tag. For example:",
      },
      {
        type: "code",
        language: "html",
        content: '<img src="example.jpg" alt="An example image">',
      },
    ],
  },
  {
    id: 1027,
    question: "What is a tag in HTML and how is it used?",
    answer: [
      {
        type: "text",
        content:
          "An HTML tag is a special element used to define the structure and content of an HTML document. Tags are enclosed in angle brackets (< >) and usually come in pairs: an opening tag and a closing tag.",
      },
      {
        type: "text",
        content:
          "The opening tag marks where an element begins, and the closing tag (which includes a forward slash) marks where it ends. The content between these tags is affected by the properties of the element.",
      },
      {
        type: "code",
        language: "html",
        content: "<p>This is a paragraph.</p>",
      },
      {
        type: "text",
        content:
          "In this example, <p> is the opening tag, </p> is the closing tag, and 'This is a paragraph.' is the content affected by the paragraph element.",
      },
    ],
  },
  {
    id: 1028,
    question: "Are HTML tags case sensitive?",
    answer: [
      {
        type: "text",
        content:
          "No, HTML tags are not case sensitive. This means that <P> and <p> will be treated the same way by browsers.",
      },
      {
        type: "text",
        content:
          "However, it is considered a best practice to use lowercase for all HTML tags. This convention improves code readability and consistency, especially when working with other technologies like XHTML or XML, which are case-sensitive.",
      },
      {
        type: "text",
        content:
          "Additionally, using lowercase tags is part of the HTML5 specification recommendation.",
      },
    ],
  },
  {
    id: 1029,
    question: "What is the purpose of the 'data-*' attributes in HTML?",
    answer: [
      {
        type: "text",
        content:
          "The 'data-*' attributes in HTML5 allow you to store custom data private to the page or application. These attributes provide a way to embed custom data attributes on all HTML elements.",
      },
      {
        type: "text",
        content: "Key points about 'data-*' attributes:",
      },
      {
        type: "unordered-list",
        content:
          "They allow us to store extra information on standard, semantic HTML elements\nThe stored data can be used in JavaScript to create more interactive applications\nThey are completely ignored by the browser itself\nThey are ideal for storing data that doesn't have a more appropriate attribute or element",
      },
      {
        type: "text",
        content: "Here's an example of using a data attribute:",
      },
      {
        type: "code",
        language: "html",
        content:
          '<article id="electric-cars" data-columns="3" data-index-number="12314" data-parent="cars">\n  ...\n</article>',
      },
      {
        type: "text",
        content:
          "While `data-*` attributes are very flexible and useful for passing small amounts of data to JavaScript, they should not be used for critical application logic. Instead, consider using JavaScript objects or other methods for more complex data handling.",
      },
    ],
  },
  {
    id: 1030,
    question:
      "Explain the purpose and usage of <abbr>, <q>, and <blockquote> tags.",
    answer: [
      {
        type: "text",
        content:
          "These tags are used for different types of text content in HTML:",
      },
      {
        type: "text",
        content: "<abbr>: Represents an abbreviation or acronym.",
      },
      {
        type: "code",
        language: "html",
        content:
          '<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>',
      },
      {
        type: "text",
        content: "<q>: Indicates short inline quotations.",
      },
      {
        type: "code",
        language: "html",
        content:
          "<p>The man said, <q>Things are not always what they seem.</q></p>",
      },
      {
        type: "text",
        content:
          "<blockquote>: Indicates long quotations, typically rendered as indented blocks.",
      },
      {
        type: "code",
        language: "html",
        content:
          "<blockquote cite=\"https://www.huxley.net/bnw/four.html\">\n  <p>Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're pierced.</p>\n</blockquote>",
      },
    ],
  },
  {
    id: 1031,
    question: "What tags are used for creating tables in HTML?",
    answer: [
      {
        type: "text",
        content:
          "HTML provides several tags for creating and structuring tables:",
      },
      {
        type: "unordered-list",
        content:
          "<table>: Defines the entire table\n<tr>: Defines a table row\n<th>: Defines a header cell\n<td>: Defines a standard data cell\n<thead>: Groups header content\n<tbody>: Groups body content\n<tfoot>: Groups footer content",
      },
      {
        type: "text",
        content: "Here's a simple example of a table structure:",
      },
      {
        type: "code",
        language: "html",
        content: `<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
</table>`,
      },
    ],
  },
  {
    id: 1032,
    question: "What is the difference between <ul> and <ol> tags?",
    answer: [
      {
        type: "text",
        content:
          "The <ul> and <ol> tags are both used to create lists in HTML, but they serve different purposes:",
      },
      {
        type: "text",
        content:
          "<ul> (Unordered List): Creates a bulleted list where the order of items doesn't matter.",
      },
      {
        type: "code",
        language: "html",
        content: `<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>`,
      },
      {
        type: "text",
        content:
          "<ol> (Ordered List): Creates a numbered list where the order of items is important.",
      },
      {
        type: "code",
        language: "html",
        content: `<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>`,
      },
      {
        type: "text",
        content:
          "Both types use <li> (List Item) tags for individual list items.",
      },
    ],
  },
  {
    id: 1033,
    question: "Which tag is used for displaying the result of a calculation?",
    answer: [
      {
        type: "text",
        content:
          "The <output> tag is used to represent the result of a calculation or the outcome of a user action. It's particularly useful in forms where you want to display dynamic results based on user input.",
      },
      {
        type: "text",
        content: "Here's an example of how it might be used:",
      },
      {
        type: "code",
        language: "html",
        content: `<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" id="a" value="0"> +
  <input type="number" id="b" value="0"> =
  <output name="result" for="a b">0</output>
</form>`,
      },
      {
        type: "text",
        content:
          "In this example, the <output> tag displays the sum of the two input fields, updating dynamically as the user changes the values.",
      },
    ],
  },
  {
    id: 1034,
    question: "What is the difference between <div> and <span> tags?",
    answer: [
      {
        type: "text",
        content:
          "The <div> and <span> tags are both generic containers in HTML, but they have different display characteristics:",
      },
      {
        type: "text",
        content: "<div> (Division):",
      },
      {
        type: "unordered-list",
        content:
          "A block-level element\nStarts on a new line and takes up the full width available\nCommonly used for grouping larger sections of content",
      },
      {
        type: "text",
        content: "<span>:",
      },
      {
        type: "unordered-list",
        content:
          "An inline element\nDoes not start on a new line and only takes up as much width as necessary\nTypically used for small chunks of text within a line",
      },
      {
        type: "text",
        content: "Here's an example illustrating their use:",
      },
      {
        type: "code",
        language: "html",
        content: `<div>This is a block-level element</div>
<div>Another block, on a new line</div>
<p>This paragraph contains <span>an inline element</span> within the text.</p>`,
      },
      {
        type: "text",
        content:
          "While `<div>` and `<span>` have default block and inline display properties respectively, these can be overridden with CSS. For example, you can change a `<div>` to behave like an inline element by setting `display: inline;` or a `<span>` to behave like a block element by setting `display: block;`.",
      },
    ],
  },
  {
    id: 1035,
    question:
      "What is the difference between <datalist> and <select> elements?",
    answer: [
      {
        type: "text",
        content:
          "While both <datalist> and <select> elements provide options to users, they serve different purposes:",
      },
      {
        type: "text",
        content:
          "<select> creates a dropdown list of predefined options that users must choose from.",
      },
      {
        type: "text",
        content:
          "<datalist> provides autocomplete suggestions for an <input> element, allowing users to either select from the suggestions or enter their own custom value.",
      },
      {
        type: "code",
        language: "html",
        content: `<!-- Select example -->
<select>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>

<!-- Datalist example -->
<input list="options">
<datalist id="options">
  <option value="Option 1">
  <option value="Option 2">
</datalist>`,
      },
    ],
  },
  {
    id: 1036,
    question: "What is the <figure> tag and how is it used?",
    answer: [
      {
        type: "text",
        content:
          "The <figure> tag is used to encapsulate self-contained content, often with a caption. It's typically used for images, diagrams, code snippets, or other content that is referenced as a single unit from the main content of the document.",
      },
      {
        type: "text",
        content:
          "The <figcaption> element can be used within <figure> to provide a caption or description for the content. Here's an example:",
      },
      {
        type: "code",
        language: "html",
        content: `<figure>
  <img src="image.jpg" alt="A descriptive text">
  <figcaption>Fig.1 - An example image with a caption.</figcaption>
</figure>`,
      },
    ],
  },
  {
    id: 1037,
    question: "What is the purpose of the <iframe> tag?",
    answer: [
      {
        type: "text",
        content:
          "The <iframe> (Inline Frame) tag is used to embed another HTML document within the current HTML document. It essentially creates a window where another webpage can be displayed.",
      },
      {
        type: "text",
        content: "Common uses for <iframe> include:",
      },
      {
        type: "unordered-list",
        content:
          "Embedding videos from platforms like YouTube\nDisplaying maps from services like Google Maps\nIncorporating third-party widgets or content\nLoading content dynamically without refreshing the entire page",
      },
      {
        type: "code",
        language: "html",
        content:
          '<iframe src="https://www.example.com" width="500" height="300"></iframe>',
      },
    ],
  },
  {
    id: 1038,
    question: "What are some common tags used in the <head> element?",
    answer: [
      {
        type: "text",
        content:
          "The <head> element contains metadata about the HTML document. Common tags found in the <head> include:",
      },
      {
        type: "unordered-list",
        content:
          "<title>: Defines the title of the document\n<meta>: Provides metadata about the HTML document\n<link>: Links to external resources, typically CSS files\n<style>: Contains internal CSS\n<script>: Includes or references JavaScript code\n<base>: Specifies the base URL for all relative URLs in the document",
      },
      {
        type: "text",
        content: "Here's an example of a typical <head> section:",
      },
      {
        type: "code",
        language: "html",
        content: `<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
</head>`,
      },
    ],
  },
  {
    id: 1039,
    question: "What is the purpose of the <meta> element?",
    answer: [
      {
        type: "text",
        content:
          "The <meta> element is used to provide metadata about an HTML document. This metadata is not displayed on the page but is machine parsable and is used by browsers, search engines, and other web services.",
      },
      {
        type: "text",
        content: "Common uses of <meta> tags include:",
      },
      {
        type: "unordered-list",
        content:
          "Specifying the character encoding for the document\nProviding a description of the page content\nDefining keywords for search engines\nSetting the viewport for responsive design\nControlling how the page should be indexed by search engines",
      },
      {
        type: "code",
        language: "html",
        content: `<head>
  <meta charset="UTF-8">
  <meta name="description" content="A brief description of the page">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`,
      },
    ],
  },
  {
    id: 1040,
    question: "What tags are used to embed video and audio on a website?",
    answer: [
      {
        type: "text",
        content:
          "HTML5 introduced native support for embedding video and audio content without the need for plugins. The main tags used are:",
      },
      {
        type: "unordered-list",
        content:
          "<video>: Used to embed video content\n<audio>: Used to embed audio content\n<source>: Used within <video> and <audio> to specify multiple media sources",
      },
      {
        type: "text",
        content:
          "Here's an example of embedding a video with multiple sources:",
      },
      {
        type: "code",
        language: "html",
        content: `<video controls width="320" height="240">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>`,
      },
    ],
  },
  {
    id: 1041,
    question:
      "What is the difference between the defer and async attributes in the script tag?",
    answer: [
      {
        type: "text",
        content:
          "The defer and async attributes are used with the <script> tag to specify how the script should be loaded and executed. Both allow the HTML parsing to continue without being blocked by script loading, but they behave differently:",
      },
      {
        type: "text",
        content: "async:",
      },
      {
        type: "unordered-list",
        content:
          "Scripts are downloaded asynchronously\nExecuted as soon as they are downloaded, regardless of parsing status\nDon't guarantee execution order for multiple scripts",
      },
      {
        type: "text",
        content: "defer:",
      },
      {
        type: "unordered-list",
        content:
          "Scripts are downloaded asynchronously\nExecution is deferred until HTML parsing is complete\nPreserves the order of execution for multiple scripts",
      },
      {
        type: "code",
        language: "html",
        content: `<script src="async-script.js" async></script>
<script src="defer-script.js" defer></script>`,
      },
    ],
  },
  {
    id: 1042,
    question: 'What is the purpose of the "main" tag?',
    answer: [
      {
        type: "text",
        content:
          "The <main> tag represents the main content of the body of a document or application. It should contain the central topic or principal content of the page.",
      },
      {
        type: "text",
        content: "Key points about the <main> tag:",
      },
      {
        type: "unordered-list",
        content:
          "There should be only one <main> element per page\nIt should not include content that is repeated across multiple pages (like headers, footers, or navigation)\nIt helps with accessibility and SEO by clearly identifying the primary content",
      },
      {
        type: "code",
        language: "html",
        content: `<body>
  <header>...</header>
  <nav>...</nav>
  <main>
    <h1>Main Content Title</h1>
    <p>This is the main content of the page...</p>
  </main>
  <footer>...</footer>
</body>`,
      },
    ],
  },
  {
    id: 1043,
    question: "Can an <article> be inside a <section> and vice versa?",
    answer: [
      {
        type: "text",
        content:
          "Yes, an <article> can be inside a <section> and a <section> can be inside an <article>. The choice depends on the specific content structure and semantics of your document.",
      },
      {
        type: "text",
        content:
          "<article> inside <section>: Use when you have a section of a page that contains multiple independent, self-contained pieces of content.",
      },
      {
        type: "text",
        content:
          "<section> inside <article>: Use when you need to divide an article into different thematic groupings.",
      },
      {
        type: "code",
        language: "html",
        content: `<!-- Article inside Section -->
<section>
  <h2>News</h2>
  <article>
    <h3>Article 1</h3>
    <p>Content...</p>
  </article>
  <article>
    <h3>Article 2</h3>
    <p>Content...</p>
  </article>
</section>

<!-- Section inside Article -->
<article>
  <h2>Long Article Title</h2>
  <section>
    <h3>Section 1</h3>
    <p>Content...</p>
  </section>
  <section>
    <h3>Section 2</h3>
    <p>Content...</p>
  </section>
</article>`,
      },
    ],
  },
  {
    id: 1044,
    question: "What is the Anchor tag in HTML and how is it used?",
    answer: [
      {
        type: "text",
        content:
          "The Anchor tag, represented by <a>, is used to create {{hyperlinks:keyword}} in HTML. It allows you to link from one page to another page or to a specific part of a page.",
      },
      {
        type: "text",
        content: "Key attributes of the <a> tag:",
      },
      {
        type: "unordered-list",
        content:
          "href: Specifies the URL of the page the link goes to\ntarget: Specifies where to open the linked document\nrel: Specifies the relationship between the current document and the linked document",
      },
      {
        type: "code",
        language: "html",
        content: `<!-- Link to another page -->
<a href="https://www.example.com">Visit Example.com</a>

<!-- Link to a specific part of the same page -->
<a href="#section1">Go to Section 1</a>

<!-- Link that opens in a new tab -->
<a href="https://www.example.com" target="_blank">Open in New Tab</a>`,
      },
    ],
  },
  {
    id: 1045,
    question: "What is the <marquee> tag and why is it no longer recommended?",
    answer: [
      {
        type: "text",
        content:
          "The <marquee> tag was used to create scrolling text or images across the screen. It was a non-standard element introduced by Internet Explorer and was never part of the HTML standard.",
      },
      {
        type: "text",
        content: "Reasons why <marquee> is no longer recommended:",
      },
      {
        type: "unordered-list",
        content:
          "It's deprecated in HTML5\nIt's not supported by all browsers\nIt can be annoying to users and impact readability\nIt's not accessible for users with screen readers\nThe same effect can be achieved with CSS animations, which are more flexible and widely supported",
      },
      {
        type: "text",
        content:
          "If you need to create moving text, it's better to use modern CSS animations or JavaScript.",
      },
    ],
  },
  {
    id: 1046,
    question: "What are attributes in HTML and how are they used?",
    answer: [
      {
        type: "text",
        content:
          'Attributes in HTML provide additional information about elements and are always specified in the start tag. They come in name/value pairs like name="value".',
      },
      {
        type: "text",
        content:
          "Attributes can modify the behavior of an element, provide metadata, or specify relationships with other elements.",
      },
      {
        type: "text",
        content: "Some common attributes include:",
      },
      {
        type: "unordered-list",
        content:
          "class: Specifies one or more class names for an element\nid: Specifies a unique id for an element\nsrc: Specifies the URL of an image or script\nhref: Specifies the URL of a linked resource\nstyle: Specifies inline CSS styles for an element",
      },
      {
        type: "code",
        language: "html",
        content:
          '<a href="https://www.example.com" target="_blank" class="external-link">Visit Example.com</a>',
      },
    ],
  },
  {
    id: 1047,
    question:
      'What is the "role" attribute and how does it enhance accessibility?',
    answer: [
      {
        type: "text",
        content:
          'The "role" attribute is used to define the purpose of an element on the web page. It\'s part of the Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA) specification.',
      },
      {
        type: "text",
        content: "The role attribute enhances accessibility by:",
      },
      {
        type: "unordered-list",
        content:
          "Providing semantic meaning to content\nHelping assistive technologies understand the purpose of elements\nImproving the navigation and understanding of web pages for users with disabilities",
      },
      {
        type: "text",
        content: "Example usage:",
      },
      {
        type: "code",
        language: "html",
        content: `<div role="navigation">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</div>

<button role="switch" aria-checked="false">Dark Mode</button>`,
      },
    ],
  },
  {
    id: 1048,
    question: 'What is the purpose of the "title" attribute?',
    answer: [
      {
        type: "text",
        content:
          'The "title" attribute is used to provide additional information about an element. When a user hovers over the element with their mouse, the title text is typically displayed as a tooltip.',
      },
      {
        type: "text",
        content: "Key points about the title attribute:",
      },
      {
        type: "unordered-list",
        content:
          "It can be used on almost any HTML element\nIt's often used to provide more detailed descriptions of links or images\nIt can improve accessibility, but shouldn't be relied upon as the sole method of conveying important information",
      },
      {
        type: "code",
        language: "html",
        content: `<a href="https://www.example.com" title="Visit our homepage for more information">Example.com</a>

<abbr title="World Health Organization">WHO</abbr>`,
      },
    ],
  },
  {
    id: 1049,
    question:
      'Where should you place the "lang" attribute and why is it important?',
    answer: [
      {
        type: "text",
        content:
          'The "lang" attribute should be placed in the <html> tag at the beginning of an HTML document. It specifies the primary language of the document.',
      },
      {
        type: "text",
        content: "The importance of the lang attribute:",
      },
      {
        type: "unordered-list",
        content:
          "Helps search engines return language-specific results\nAssists screen readers in using the correct pronunciation\nAids browsers in rendering language-specific characters and scripts",
      },
      {
        type: "code",
        language: "html",
        content: '<!DOCTYPE html>\n<html lang="en">\n  ...\n</html>',
      },
    ],
  },
  {
    id: 1050,
    question: "How do you add a custom attribute in HTML5?",
    answer: [
      {
        type: "text",
        content:
          'In HTML5, you can add custom attributes using the "data-*" prefix, where "*" can be any valid attribute name. These are called data attributes.',
      },
      {
        type: "text",
        content:
          "Data attributes allow you to store extra information on standard HTML elements without using non-standard attributes or extra properties on the DOM.",
      },
      {
        type: "code",
        language: "html",
        content:
          '<div id="user" data-id="1234" data-user="johndoe" data-date-of-birth="1960-10-03">John Doe</div>',
      },
      {
        type: "text",
        content:
          "These attributes can then be accessed via JavaScript using the dataset property:",
      },
      {
        type: "code",
        language: "javascript",
        content:
          'var el = document.querySelector("#user");\nconsole.log(el.dataset.id); // "1234"\nconsole.log(el.dataset.dateOfBirth); // "1960-10-03"',
      },
    ],
  },
  {
    id: 1051,
    question: "Why would you use srcset and sizes attributes in an image tag?",
    answer: [
      {
        type: "text",
        content:
          "The srcset and sizes attributes are used in the <img> tag to implement responsive images. They allow you to specify multiple image sources for different viewport sizes and pixel densities.",
      },
      {
        type: "text",
        content:
          "srcset: Defines the set of images we will allow the browser to choose between, and what size each image is.",
      },
      {
        type: "text",
        content:
          "sizes: Defines a set of media conditions and indicates what image size would be best to choose when certain media conditions are true.",
      },
      {
        type: "code",
        language: "html",
        content:
          '<img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w"\n     sizes="(max-width: 600px) 500px,\n            (max-width: 1200px) 1000px,\n            2000px"\n     src="fallback.jpg" alt="Responsive image">',
      },
      {
        type: "text",
        content:
          "This approach allows the browser to choose the most appropriate image based on the device's characteristics, potentially saving bandwidth and improving load times.",
      },
    ],
  },
  {
    id: 1052,
    question: 'What is the "dataset" property and how is it used?',
    answer: [
      {
        type: "text",
        content:
          "The dataset property is a read-only property that provides access to all the custom data attributes (data-*) set on an element. It's part of the HTMLElement interface and returns a DOMStringMap object.",
      },
      {
        type: "text",
        content: "Key points about dataset:",
      },
      {
        type: "unordered-list",
        content:
          "Allows easy access to data-* attributes via JavaScript\nAttribute names are converted from kebab-case to camelCase\nCan be used to store custom data directly in HTML markup",
      },
      {
        type: "code",
        language: "html",
        content:
          '<div id="user" data-id="1234" data-user-name="John Doe" data-age="30">User Info</div>',
      },
      {
        type: "code",
        language: "javascript",
        content:
          'var el = document.getElementById("user");\nconsole.log(el.dataset.id); // "1234"\nconsole.log(el.dataset.userName); // "John Doe"\nconsole.log(el.dataset.age); // "30"',
      },
    ],
  },
  {
    id: 1053,
    question: "What are some common form tags used in HTML?",
    answer: [
      {
        type: "text",
        content:
          "HTML provides a variety of tags for creating forms. Some of the most common form tags include:",
      },
      {
        type: "unordered-list",
        content:
          "<form>: Defines an HTML form for user input\n<input>: Specifies an input field where the user can enter data\n<label>: Defines a label for several form elements\n<select>: Defines a drop-down list\n<textarea>: Defines a multiline input control\n<button>: Defines a clickable button\n<fieldset>: Groups related form elements\n<legend>: Defines a caption for a <fieldset> element",
      },
      {
        type: "code",
        language: "html",
        content: `<form action="/submit" method="post">
  <fieldset>
    <legend>Personal Information:</legend>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>
    
    <button type="submit">Submit</button>
  </fieldset>
</form>`,
      },
    ],
  },
  {
    id: 1054,
    question: "What are some common attributes used in HTML forms?",
    answer: [
      {
        type: "text",
        content:
          "HTML form elements can have various attributes that control their behavior and functionality. Some common form attributes include:",
      },
      {
        type: "unordered-list",
        content:
          "action: Specifies where to send the form-data when a form is submitted\nmethod: Specifies the HTTP method to use when sending form-data\ntarget: Specifies where to display the response after submitting the form\nnovalidate: Specifies that the form shouldn't be validated when submitted\nautocomplete: Specifies whether a form should have autocomplete on or off",
      },
      {
        type: "code",
        language: "html",
        content:
          '<form action="/submit" method="post" target="_blank" novalidate autocomplete="on">\n  <!-- Form elements go here -->\n</form>',
      },
      {
        type: "text",
        content:
          "These attributes help control the form's submission process, validation, and user interaction.",
      },
    ],
  },
  {
    id: 1055,
    question: "What are some common input types used in HTML forms?",
    answer: [
      {
        type: "text",
        content:
          "HTML5 introduced several new input types to make form creation more semantic and to provide better user experiences. Some common input types include:",
      },
      {
        type: "unordered-list",
        content:
          "text: For general text input\npassword: For password input (characters are masked)\nemail: For email addresses\nnumber: For numeric input\ndate: For date selection\ncheckbox: For multiple selections\nradio: For single selection from multiple options\nfile: For file uploads\nsubmit: For form submission buttons\nbutton: For clickable buttons\ncolor: For color selection\nrange: For selecting a value from a range\nsearch: For search fields\nurl: For URL input",
      },
      {
        type: "code",
        language: "html",
        content: `<form>
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <input type="email" name="email" placeholder="Email">
  <input type="number" name="age" min="0" max="120">
  <input type="date" name="birthdate">
  <input type="checkbox" name="subscribe" id="subscribe">
  <label for="subscribe">Subscribe to newsletter</label>
  <input type="submit" value="Submit">
</form>`,
      },
    ],
  },
  {
    id: 1056,
    question: "How can you limit the number of characters in a text input?",
    answer: [
      {
        type: "text",
        content:
          "To limit the number of characters a user can input in a text field, you can use the maxlength attribute on the <input> or <textarea> element.",
      },
      {
        type: "text",
        content:
          "The maxlength attribute specifies the maximum number of characters allowed in the input field.",
      },
      {
        type: "code",
        language: "html",
        content:
          '<input type="text" id="username" name="username" maxlength="20">',
      },
      {
        type: "text",
        content: "For textarea elements:",
      },
      {
        type: "code",
        language: "html",
        content:
          '<textarea id="message" name="message" maxlength="500"></textarea>',
      },
      {
        type: "text",
        content:
          "This approach provides a simple, built-in way to restrict input length without requiring JavaScript.",
      },
    ],
  },
  {
    id: 1057,
    question: "How can you add HTML5 form validation?",
    answer: [
      {
        type: "text",
        content:
          "HTML5 introduced several attributes and input types that allow for built-in form validation without the need for JavaScript. Some common validation attributes include:",
      },
      {
        type: "unordered-list",
        content:
          "required: Specifies that an input field must be filled out\npattern: Specifies a regular expression that an input field's value is checked against\nmin and max: Specify the minimum and maximum values for an input field\nminlength and maxlength: Specify the minimum and maximum length of textual data",
      },
      {
        type: "code",
        language: "html",
        content: `<form>
    <input type="text" name="username" required minlength="3" maxlength="20">
    <input type="email" name="email" required>
    <input type="password" name="password" required minlength="3" maxlength="20">
    <input type="number" name="age" min="18" max="100">
    <input type="submit" value="Submit">
  </form>`,
      },
      {
        type: "text",
        content:
          "These validation attributes provide a first line of defense against invalid data and improve user experience by providing immediate feedback. If you want to disable the default validation for specific cases, you can use the `novalidate` attribute on the form element. Additionally, custom validation messages and logic can be implemented using JavaScript.",
      },
    ],
  },
  {
    id: 1058,
    question: "How do you group form elements and why is it useful?",
    answer: [
      {
        type: "text",
        content:
          "Form elements can be grouped using the <fieldset> element, and a <legend> can be included within the fieldset to provide a description for the group.",
      },
      {
        type: "text",
        content: "Benefits of grouping form elements:",
      },
      {
        type: "unordered-list",
        content:
          "Improves form organization and readability\nEnhances accessibility for screen readers\nAllows for easier styling of related form elements\nProvides a semantic structure to the form",
      },
      {
        type: "code",
        language: "html",
        content: `<form>
  <fieldset>
    <legend>Personal Information:</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname">
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname">
  </fieldset>
  
  <fieldset>
    <legend>Contact Information:</legend>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone">
  </fieldset>
</form>`,
      },
      {
        type: "text",
        content:
          "This structure helps users understand the purpose of different sections within a form, especially for longer or more complex forms.",
      },
    ],
  },
];
