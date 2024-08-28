import { Question } from "@/components/questions/types";

export const cssQuestionsData: Question[] = [
  {
    id: 2001,
    question: "What is the box model in CSS?",
    answer: [
      {
        "type": "text",
        "content": "The CSS box model is a fundamental concept that describes how elements are rendered in web browsers. It consists of four parts:"
      },
      {
        "type": "unordered-list",
        "content": "Content: The actual content of the box, where text and images appear\nPadding: Clears an area around the content (inside the border)\nBorder: A border that goes around the padding and content\nMargin: Clears an area outside the border"
      },     
      {
        "type": "text",
        "content": "By default, the `width` and `height` properties in CSS define the size of the content area only. This means that padding and border are added to the specified width and height, potentially making the element larger than you might expect."
      },     
      {
        "type": "text",
        "content": "To change this behavior, you can use the {{box-sizing:keyword}} property. Setting `box-sizing: border-box;` makes the specified width and height include content, padding, and border, which can often make layouts easier to reason about."
      }
    ]
  },
  {
    id: 2002,
    question: "What are some CSS methodologies?",
    answer: [
      {
        type: "text",
        content:
          "CSS methodologies are structured approaches to writing and organizing CSS code. Some popular CSS methodologies include BEM (Block Element Modifier), OOCSS (Object Oriented CSS), and Atomic Design.",
      },
      {
        type: "text",
        content:
          "These methodologies aim to improve code maintainability, reusability, and scalability in large projects. Each has its own set of principles and naming conventions.",
      },
    ],
  },
  {
    id: 2003,
    question: "What is BEM and how is it used?",
    answer: [
      {
        type: "text",
        content:
          "BEM stands for {{Block, Element, Modifier:keyword}}. It's a methodology that helps create reusable components and code sharing in front-end development. BEM uses a specific naming convention to make CSS more informative and transparent.",
      },
      {
        type: "code",
        language: "css",
        content: `.block {}
.block__element {}
.block--modifier {}`,
      },
      {
        type: "text",
        content:
          "In this example, 'block' represents the component, 'element' represents a part of the block, and 'modifier' represents a variation of the block or element.",
      },
    ],
  },
  {
    id: 2004,
    question: "What is OOCSS and what are its principles?",
    answer: [
      {
        type: "text",
        content:
          "OOCSS, or {{ Object-Oriented CSS:keyword}}, is a methodology for structuring CSS that aims to encourage code reuse and maintainability. It's based on two main principles: separation of structure from skin, and separation of containers from content.",
      },
      {
        type: "text",
        content:
          "By following these principles, OOCSS helps create more modular and flexible stylesheets. This approach can lead to reduced CSS file sizes and easier maintenance of styles across large projects.",
      },
    ],
  },
  {
    id: 2005,
    question: "What's the difference between content-box and border-box?",
    answer: [
      {
        type: "text",
        content:
          "content-box and border-box are values for the box-sizing property in CSS. They determine how the total width and height of an element are calculated.",
      },
      {
        type: "code",
        language: "css",
        content: `.content-box {
  box-sizing: content-box;
  width: 100px;
  padding: 10px;
  border: 5px solid black;
  /* Total width: 100px + 20px + 10px = 130px */
}

.border-box {
  box-sizing: border-box;
  width: 100px;
  padding: 10px;
  border: 5px solid black;
  /* Total width: 100px */
}`,
      },
      {
        "type": "text",
        "content":
          "With content-box, the padding and border are added to the specified width and height. With border-box, the padding and border are included within the specified width and height, making it easier to calculate the actual size of an element."
      }      
    ],
  },
  {
    id: 2006,
    question: "What are the differences between various display properties?",
    answer: [
      {
        "type": "text",
        "content":
          "The display property in CSS determines how an element is treated in the normal flow of the document. Different display values result in different layouts and behaviors. `flex` and `grid` are powerful tools for creating complex layouts, with `flex` focusing on {{one-dimensional:keyword}} layouts (rows or columns) and `grid` handling {{two-dimensional:keyword}} layouts (rows and columns)."
      },
      {
        type: "unordered-list",
        content:
          "inline: Doesn't start on a new line and only takes up as much width as necessary\nblock: Starts on a new line and takes up the full width available\ninline-block: Like inline, but you can set width and height\nflex: Displays an element as a block-level flex container\ngrid: Displays an element as a block-level grid container\nnone: Removes the element from the flow of the document",
      },
    ],
  },
  {
    id: 2007,
    question: "What is the difference between id and class selectors?",
    answer: [
      {
        type: "text",
        content:
          "In CSS, id and class are both selectors used to target and style HTML elements, but they have different use cases and specificity.",
      },
      {
        type: "code",
        language: "css",
        content: `#unique-element {
  color: red;  /* Higher specificity */
}

.multiple-elements {
  color: blue;  /* Lower specificity */
}`,
      },
      {
        type: "text",
        content:
          "An id is a unique identifier for an element and can only be used once per page, while a class can be applied to multiple elements. IDs have higher specificity in CSS than classes, meaning they will override class styles if both target the same property.",
      },
    ],
  },
  {
    id: 2008,
    question: "What is selector specificity and how is it calculated?",
    answer: [
      {
        type: "text",
        content:
          "Selector specificity is a weight that is applied to a given CSS declaration, determined by the number of each selector type in the matching selector. It's used by browsers to decide which CSS property values are the most relevant to an element and, therefore, will be applied.",
      },
      {
        "type": "text",
        "content":
          "Specificity is typically expressed in four parts: a,b,c,d. Where 'a' is the number of inline styles, 'b' is the number of ID selectors, 'c' is the number of class selectors, attributes selectors, and pseudo-classes, and 'd' is the number of element selectors and pseudo-elements."
      }      
    ],
  },
  {
    id: 2009,
    question: "What is the position property and what are its values?",
    answer: [
      {
        type: "text",
        content:
          "The position property in CSS specifies the positioning method for an element. It determines how an element is positioned in the document.",
      },
      {
        type: "code",
        language: "css",
        content: `.static { position: static; }
.relative { position: relative; top: 10px; left: 20px; }
.absolute { position: absolute; top: 40px; left: 40px; }
.fixed { position: fixed; bottom: 0; right: 0; }
.sticky { position: sticky; top: 0; }`,
      },
      {
        type: "text",
        content:
          "Each value (static, relative, absolute, fixed, sticky) affects how the element is positioned and interacts with other elements in the layout.",
      },
    ],
  },
  {
    id: 2010,
    question: "What is @media and how is it used?",
    answer: [
      {
        type: "text",
        content:
          "@media is used for media queries in CSS, allowing you to apply different styles for different devices or screen sizes. It's a key component in creating responsive web designs.",
      },
      {
        type: "code",
        language: "css",
        content: `@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`,
      },
      {
        type: "text",
        content:
          "In this example, the background color of the body will change to light blue when the screen width is 600px or less.",
      },
    ],
  },
  {
    id: 2011,
    question: "What is Responsive Web Design (RWD) and why is it important?",
    answer: [
      {
        type: "text",
        content:
          "Responsive Web Design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It's important because it ensures a good user experience across different devices, from desktop computers to mobile phones.",
      },
      {
        type: "text",
        content:
          "RWD typically involves using flexible layouts, flexible images, and {{CSS media queries:keyword}}. This approach reduces the need for a separate mobile site, improves SEO, and provides a consistent user experience across devices.",
      },
    ],
  },
  {
    id: 2012,
    question: "What is Block Formatting Context (BFC) and how is it created?",
    answer: [
      {
        type: "text",
        content:
          "Block Formatting Context (BFC) is a part of the CSS visual rendering of a web page where block boxes are laid out. The layout inside a BFC is independent of the layout outside it.",
      },
      {
        type: "text",
        content:
          "A BFC can be created by elements with certain CSS properties, such as:",
      },
      {
        type: "unordered-list",
        content:
          "float: left or right\nposition: absolute or fixed\ndisplay: inline-block, table-cell, table-caption, flex, inline-flex, grid, or inline-grid\noverflow: hidden, scroll, or auto",
      },
    ],
  },
  {
    id: 2013,
    question: "How does z-index work and how is stacking context formed?",
    answer: [
      {
        type: "text",
        content:
          "z-index is a CSS property that specifies the stack order of an element. An element with a higher z-index is always in front of an element with a lower z-index, assuming they have the same stacking context.",
      },
      {
        type: "code",
        language: "css",
        content: `.back { z-index: 1; }
.middle { z-index: 2; }
.front { z-index: 3; }`,
      },
      {
        "type": "text",
        "content":
          "A stacking context is formed by any element with a position value other than static and a z-index value other than auto, or by elements with specific properties like opacity less than 1, transform, filter, etc."
      }
      
    ],
  },
  {
    id: 2014,
    question: "How does floating work in CSS?",
    answer: [
      {
        type: "text",
        content:
          "Floating in CSS is a layout technique where an element is taken out of the normal document flow and shifted to the left or right as far as possible, allowing other content to wrap around it. Floated elements remain a part of the flow of the web page, unlike absolutely positioned elements.",
      },
      {
        type: "code",
        language: "css",
        content: `.float-left {
  float: left;
  margin-right: 10px;
}
.float-right {
  float: right;
  margin-left: 10px;
}`,
      },
      {
        type: "text",
        content:
          "Floating is often used for layout purposes, such as wrapping text around images or creating multi-column layouts.",
      },
    ],
  },
  {
    id: 2015,
    question: "What are different methods to center a div?",
    answer: [
      {
        type: "text",
        content:
          "There are several methods to center a div in CSS, depending on the specific requirements and browser support needed. Here are three common approaches:",
      },
      {
        type: "code",
        language: "css",
        content: `/* Using margin auto */
.center-margin {
  width: 300px;
  margin: 0 auto;
}

/* Using flexbox */
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Using grid */
.center-grid {
  display: grid;
  place-items: center;
}`,
      },
      {
        type: "text",
        content:
          "Each method has its advantages: margin auto is simple but requires a set width, flexbox offers more control but may not be supported in very old browsers, and grid is powerful but has less browser support than flexbox.",
      },
    ],
  },
  {
    id: 2016,
    question: "How can you center a div without using flex or grid?",
    answer: [
      {
        type: "text",
        content:
          "There are several methods to center a div without using flex or grid. Here are two common approaches:",
      },
      {
        type: "code",
        language: "css",
        content: `/* Using margin auto */
.center-margin {
  width: 300px;
  margin: 0 auto;
}

/* Using absolute positioning */
.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
      },
      {
        type: "text",
        content:
          "The margin auto method works for horizontal centering when the div has a set width. The absolute positioning method works for both horizontal and vertical centering, but takes the element out of the normal document flow.",
      },
    ],
  },
  {
    id: 2017,
    question: "What are the pros and cons of animations in CSS compared to JS?",
    answer: [
      {
        type: "text",
        content:
          "CSS animations and JavaScript animations each have their own strengths and weaknesses. CSS animations are typically smoother and more performant, especially for simple animations. They require less code and can be hardware-accelerated.",
      },
      {
        type: "text",
        content:
          "On the other hand, JavaScript animations offer more control and complexity. They can handle advanced effects and dynamic animations based on user interactions or other events. However, they might be slower for certain animations and require more code to implement.",
      },
    ],
  },
  {
    id: 2018,
    question: "What is the will-change property and when should it be used?",
    answer: [
      {
        type: "text",
        content:
          "The will-change property in CSS is used to inform the browser ahead of time about the kinds of changes you are likely to make to an element. This allows the browser to set up appropriate optimizations before they're needed, potentially improving the performance of animations and transitions.",
      },
      {
        type: "code",
        language: "css",
        content: `.animated-element {
  will-change: transform, opacity;
}`,
      },
      {
        type: "text",
        content:
          "However, will-change should be used sparingly and only for elements that will actually change, as overuse can cause the browser to waste resources. It's best used when you anticipate a change and want to hint to the browser to prepare for it.",
      },
    ],
  },
  {
    id: 2019,
    question:
      "What's the difference between em and rem units, and when should you use each?",
    answer: [
      {
        type: "text",
        content:
          "em and rem are both relative units in CSS, but they have different reference points:",
      },
      {
        type: "unordered-list",
        content:
          "em: Relative to the font-size of its closest or current element\nrem: Relative only to the html (root) font-size",
      },
      {
        type: "code",
        language: "css",
        content: `.parent {
  font-size: 18px;
}
.child-em {
  font-size: 1.5em; /* 27px */
}
.child-rem {
  font-size: 1.5rem; /* 24px, assuming root font-size is 16px */
}`,
      },
      {
        type: "text",
        content:
          "Use em for local relative sizing within components, and rem for global sizing that should be consistent across the entire document.",
      },
    ],
  },
  {
    id: 2020,
    question:
      "Name three selectors that can select an element based on its index.",
    answer: [
      {
        type: "text",
        content:
          "CSS provides several pseudo-class selectors that can target elements based on their position or index within their parent. Three common ones are:",
      },
      {
        "type": "unordered-list",
        "content":
          ":nth-child(): Selects elements based on their position among all siblings\n:nth-of-type(): Selects elements of a given type based on their position among siblings of the same type\n:nth-last-child(): Similar to :nth-child(), but counts from the last child. This is useful when you want to style the last few items in a container."
      },      
      {
        type: "code",
        language: "css",
        content: `li:nth-child(3) { color: red; }
p:nth-of-type(2) { font-weight: bold; }
div:nth-last-child(2) { background-color: yellow; }`,
      },
    ],
  },
  {
    id: 2021,
    question: "How can you select the first 10 elements in a list using CSS?",
    answer: [
      {
        type: "text",
        content:
          "To select the first 10 elements in a list, you can use the :nth-child() pseudo-class with a functional notation.",
      },
      {
        type: "code",
        language: "css",
        content: "li:nth-child(-n+10) { /* styles for first 10 list items */ }",
      },
      {
        type: "text",
        content:
          "This selector targets elements that are the nth child, where n is 0 or a positive integer, up to and including the 10th child. It's a powerful way to select a specific range of elements.",
      },
    ],
  },
  {
    id: 2022,
    question: "How can you select odd and even elements in a list using CSS?",
    answer: [
      {
        type: "text",
        content:
          "CSS provides keywords in the :nth-child() pseudo-class to easily select odd and even elements. This is particularly useful for creating alternating styles in lists or tables.",
      },
      {
        type: "code",
        language: "css",
        content: `li:nth-child(odd) { background-color: #f2f2f2; }
li:nth-child(even) { background-color: #ffffff; }`,
      },
      {
        type: "text",
        content:
          "These selectors will apply different styles to odd and even list items respectively, creating a striped effect. This technique is commonly used in table rows for improved readability.",
      },
    ],
  },
  {
    id: 2023,
    question: "How can you check if a CSS property is supported in a browser?",
    answer: [
      {
        type: "text",
        content:
          "The @supports rule in CSS, also known as feature queries, allows you to check if a browser supports a particular CSS property or property:value combination.",
      },
      {
        type: "code",
        language: "css",
        content: `@supports (display: grid) {
  .container {
    display: grid;
  }
}

@supports not (display: grid) {
  .container {
    display: flex;
  }
}`,
      },
      {
        type: "text",
        content:
          "This enables you to write fallbacks or enhancements based on browser support. In this example, grid layout is used if supported, otherwise flexbox is used as a fallback.",
      },
    ],
  },
  {
    id: 2024,
    question: "What are the ways to load CSS resources conditionally?",
    answer: [
      {
        type: "text",
        content:
          "There are several ways to load CSS resources conditionally. Two common methods are:",
      },
      {
        type: "unordered-list",
        content:
          "Using media queries in the link tag\nUsing JavaScript to load CSS files based on conditions",
      },
      {
        type: "code",
        language: "html",
        content: `<link rel="stylesheet" media="screen and (min-width: 900px)" href="widescreen.css">
<link rel="stylesheet" media="screen and (max-width: 600px)" href="smallscreen.css">`,
      },
      {
        type: "text",
        content:
          "For JavaScript-based loading, you can create a new link element and append it to the head of the document based on your conditions. This allows for more complex logic in determining when to load specific stylesheets.",
      },
    ],
  },
  {
    id: 2025,
    question: "How do you use CSS variables?",
    answer: [
      {
        type: "text",
        content:
          "CSS variables, also known as custom properties, allow you to store specific values to be reused throughout a document. They are defined using double dashes (--) and are accessed using the var() function.",
      },
      {
        type: "code",
        language: "css",
        content: `:root {
  --main-color: #3498db;
  --font-size: 16px;
}

body {
  color: var(--main-color);
  font-size: var(--font-size);
}`,
      },
      {
        type: "text",
        content:
          "Variables can be defined globally in the :root selector or locally within any element selector. They can be overridden in more specific selectors, allowing for easy theming and responsive designs.",
      },
    ],
  },
  {
    id: 2026,
    question:
      "How can you create a case-insensitive attribute selector in CSS?",
    answer: [
      {
        type: "text",
        content:
          "To create a case-insensitive attribute selector in CSS, you can use the i flag (for 'case insensitive') at the end of the attribute selector.",
      },
      {
        type: "code",
        language: "css",
        content: "input[value='search' i] { /* styles */ }",
      },
      {
        type: "text",
        content:
          "This selector will match input elements with a value attribute of 'search', 'Search', 'SEARCH', or any other case variation. It's particularly useful when dealing with attributes that might have inconsistent casing.",
      },
    ],
  },
  {
    id: 2027,
    question: "What is the difference between reset.css and normalize.css?",
    answer: [
      {
        type: "text",
        content:
          "reset.css and normalize.css are both CSS files used to create consistency across different browsers, but they take different approaches:",
      },
      {
        type: "unordered-list",
        content:
          "reset.css: Removes all the default browser styling, giving you a blank slate\nnormalize.css: Makes sure elements render consistently across browsers by keeping useful defaults and correcting bugs",
      },
      {
        type: "text",
        content:
          "While reset.css can be useful for complete control over styling, normalize.css often leads to more predictable styling with less effort, as it preserves useful default styles.",
      },
    ],
  },
  {
    id: 2028,
    question: "What is shadow DOM and how does it relate to CSS?",
    answer: [
      {
        type: "text",
        content:
          "Shadow DOM is a web standard that provides a way to encapsulate a DOM subtree from the main document DOM. It's primarily used for building reusable web components with isolated styling and behavior.",
      },
      {
        type: "text",
        content:
          "In terms of CSS, Shadow DOM allows for {{style encapsulation:keyword}}. Styles defined within a shadow root don't leak out to the main document, and most styles from the main document don't pierce into the shadow DOM.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const shadow = element.attachShadow({mode: 'open'});
shadow.innerHTML = '<style>p { color: red; }</style><p>Shadow DOM content</p>';`,
      },
      {
        type: "text",
        content:
          "This encapsulation helps prevent style conflicts and makes it easier to create modular, reusable components.",
      },
    ],
  },
  {
    id: 2029,
    question: "How would you implement modularity in CSS?",
    answer: [
      {
        type: "text",
        content:
          "Implementing modularity in CSS involves organizing your styles in a way that promotes reusability, maintainability, and scalability. There are several approaches to achieve this:",
      },
      {
        type: "unordered-list",
        content:
          "CSS Methodologies: BEM (Block Element Modifier), OOCSS (Object-Oriented CSS), or Atomic Design\nCSS Modules: Scope styles to specific components\nCSS-in-JS: Write component-specific styles in JavaScript\nPreprocessors: Use features like partials and mixins in Sass or Less\nCSS Custom Properties: Use CSS variables for theming and configuration",
      },
      {
        type: "text",
        content:
          "These approaches help in creating more organized, less redundant, and more maintainable stylesheets, especially in large projects.",
      },
    ],
  },
  {
    id: 2030,
    question:
      "What are pseudo-classes in CSS and can you provide some examples?",
    answer: [
      {
        type: "text",
        content:
          "Pseudo-classes in CSS are keywords that specify a special state of an element. They allow you to style elements based on their state or relationship to other elements, without the need for additional classes in your HTML.",
      },
      {
        type: "unordered-list",
        content:
          ":hover - when the mouse is over an element\n:active - when an element is being activated\n:focus - when an element has focus\n:nth-child() - matches elements based on their position\n:first-child - first element among siblings\n:last-child - last element among siblings",
      },
      {
        type: "code",
        language: "css",
        content: `a:hover { color: red; }
input:focus { border-color: blue; }
li:first-child { font-weight: bold; }`,
      },
    ],
  },
  {
    id: 2031,
    question: "What is an attribute selector and how is it used?",
    answer: [
      {
        type: "text",
        content:
          "An attribute selector in CSS selects elements based on their attribute value. It allows for more specific targeting of elements without adding extra classes or IDs.",
      },
      {
        type: "code",
        language: "css",
        content: `a[target="_blank"] { color: red; }
input[type="text"] { border: 1px solid gray; }
[data-status="active"] { font-weight: bold; }`,
      },
      {
        type: "text",
        content:
          "These selectors can match exact values, values in a space-separated list, or values with specific prefixes or suffixes.",
      },
    ],
  },
  {
    id: 2032,
    question: "What are the different ways to hide content?",
    answer: [
      {
        type: "text",
        content:
          "There are several ways to hide content in CSS, each with different effects and use cases:",
      },
      {
        type: "code",
        language: "css",
        content: `.hidden { display: none; }
.invisible { visibility: hidden; }
.transparent { opacity: 0; }
.collapsed { 
  width: 0;
  height: 0;
  overflow: hidden;
}`,
      },
      {
        type: "text",
        content:
          "display: none removes the element from the layout, visibility: hidden hides it but preserves its space, opacity: 0 makes it transparent, and the last method collapses the element to 0x0 dimensions.",
      },
    ],
  },
  {
    id: 2033,
    question: "Are CSS property names case-sensitive?",
    answer: [
      {
        type: "text",
        content:
          "No, CSS property names are not case-sensitive. This means that you can write them in lowercase, uppercase, or mixed case, and they will still be interpreted correctly by the browser.",
      },
      {
        type: "code",
        language: "css",
        content: `.example {
  color: blue;
  BACKGROUND-COLOR: yellow;
  Font-Size: 16px;
}`,
      },
      {
        type: "text",
        content:
          "However, it's considered best practice to use lowercase for consistency and readability. Some CSS methodologies and style guides may enforce lowercase usage for all CSS properties.",
      },
    ],
  },
  {
    id: 2034,
    question: "What is the purpose of the 'only' keyword in media queries?",
    answer: [
      {
        type: "text",
        content:
          "The 'only' keyword in CSS media queries is used to prevent older browsers that don't support media queries with media features from applying the styles. It has no effect on modern browsers.",
      },
      {
        type: "code",
        language: "css",
        content: "@media only screen and (min-width: 600px) { /* styles */ }",
      },
      {
        type: "text",
        content:
          "In this example, older browsers that don't support media queries will ignore the entire rule because they don't recognize the 'only' keyword. Modern browsers simply ignore 'only' and apply the styles if the rest of the media query matches.",
      },
    ],
  },
  {
    id: 2035,
    question:
      "Do margin-top and margin-bottom have an effect on inline elements?",
    answer: [
      {
        type: "text",
        content:
          "No, margin-top and margin-bottom do not have an effect on inline elements. Inline elements flow with the content and do not create line breaks, so vertical margins are not applicable to them.",
      },
      {
        type: "text",
        content:
          "If you need to apply vertical margins to an inline element, you can change its display property to inline-block or block, depending on your layout requirements.",
      },
    ],
  },
  {
    id: 2036,
    question:
      "Do padding-top and padding-bottom have an effect on inline elements?",
    answer: [
      {
        type: "text",
        content:
          "No, padding-top and padding-bottom do not affect the layout of inline elements. While the padding is applied visually, it does not push other content away vertically.",
      },
      {
        type: "text",
        content:
          "If you need vertical padding to affect the layout, you can change the display property of the element to inline-block or block.",
      },
    ],
  },
  {
    id: 2037,
    question:
      "Do padding-left and padding-right have an effect on inline elements?",
    answer: [
      {
        type: "text",
        content:
          "Yes, padding-left and padding-right do have an effect on inline elements. They add space to the left and right of the element's content, pushing away adjacent inline elements or text.",
      },
      {
        type: "code",
        language: "css",
        content: `span {
  padding-left: 10px;
  padding-right: 10px;
}`,
      },
      {
        type: "text",
        content:
          "This padding will be visible and will affect the horizontal spacing of the inline element within its line.",
      },
    ],
  },
  {
    id: 2038,
    question:
      "Will text with font-size: 10rem be responsive when the browser window is resized?",
    answer: [
      {
        type: "text",
        content:
          "No, text with font-size: 10rem will not be responsive when the user resizes or drags the browser window, unless the root font-size is defined in viewport units.",
      },
      {
        type: "text",
        content:
          "The rem unit is relative to the root element's font-size. If the root font-size is set in pixels, the text size will remain fixed. For responsive sizing, you could set the root font-size using viewport units or use a combination of units with calc().",
      },
    ],
  },
  {
    id: 2039,
    question: "Does overflow: hidden create a new block formatting context?",
    answer: [
      {
        type: "text",
        content:
          "Yes, overflow: hidden does create a new block formatting context (BFC). A BFC is a part of the visual CSS rendering of a web page where block boxes are laid out.",
      },
      {
        type: "text",
        content:
          "Creating a new BFC can be useful for containing floats, preventing margin collapse, and creating independent formatting contexts for different parts of a layout.",
      },
    ],
  },
  {
    id: 2040,
    question: "Which unit would you prefer among px, em, %, or pt and why?",
    answer: [
      {
        type: "text",
        content:
          "The preference for CSS units depends on the context and specific use case. Each unit has its strengths:",
      },
      {
        type: "unordered-list",
        content:
          "px: Gives fixed and precise control, good for borders or shadows\nem: Scales with the font-size of the element, useful for responsive typography\n%: Relative to the parent element, useful for responsive layouts\nrem: Relative to the root element, provides consistent scaling across the document\npt: Mostly used for print stylesheets",
      },
      {
        type: "text",
        content:
          "For web design, a combination of rem for typography and % for layout often provides a good balance of consistency and flexibility.",
      },
    ],
  },
  {
    id: 2041,
    question: "How does CSS Grid work?",
    answer: [
      {
        type: "text",
        content:
          "CSS Grid Layout is a two-dimensional system for creating layouts, handling both columns and rows. It is controlled by applying CSS properties to a parent element (the grid container) and its child elements (the grid items).",
      },
      {
        type: "code",
        language: "css",
        content: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}

.grid-item {
  grid-column: span 2;
}`,
      },
      {
        type: "text",
        content:
          "This example creates a three-column grid with equal-width columns and a 20px gap. The grid items span two columns by default.",
      },
    ],
  },
  {
    id: 2042,
    question: "How does Flexbox work?",
    answer: [
      {
        type: "text",
        content:
          "Flexbox is a one-dimensional layout model in CSS designed for laying out items in rows or columns. It's controlled by applying properties to a flex container and its flex items.",
      },
      {
        type: "code",
        language: "css",
        content: `.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-item {
  flex: 1;
}`,
      },
      {
        type: "text",
        content:
          "This example creates a flex container with items distributed evenly and vertically centered. Each flex item will grow to fill the available space equally.",
      },
    ],
  },
  {
    id: 2043,
    question:
      "What is the difference between visibility: hidden and display: none?",
    answer: [
      {
        type: "text",
        content:
          "visibility: hidden and display: none are both used to hide elements, but they work differently:",
      },
      {
        type: "unordered-list",
        content:
          "visibility: hidden: Hides the element but it still {{takes up space:keyword}} in the layout\ndisplay: none: Removes the element completely from the document flow, taking up no space",
      },
      {
        type: "text",
        content:
          "Choose visibility: hidden if you want to preserve the layout, and display: none if you want to remove the element's impact on layout entirely.",
      },
    ],
  },
  {
    id: 2044,
    question: "What are CSS Sprites and why are they used?",
    answer: [
      {
        type: "text",
        content:
          "CSS Sprites is a technique where multiple images are combined into a single, larger image. This larger image is then used as a background image for elements, with background-position used to display the correct part of the sprite.",
      },
      {
        type: "text",
        content:
          "The main advantage of using sprites is performance improvement. By reducing the number of HTTP requests needed to fetch multiple images, page load time can be significantly reduced, especially on slower connections.",
      },
    ],
  },
  {
    id: 2045,
    question: "What is a pseudo-element and how is it used?",
    answer: [
      {
        type: "text",
        content:
          "Pseudo-elements in CSS allow you to style specific parts of an element. They are denoted by double colons (::) in modern syntax.",
      },
      {
        type: "code",
        language: "css",
        content: `p::first-line {
  font-weight: bold;
}

.quote::before {
  content: '"';
  font-size: 24px;
}`,
      },
      {
        type: "text",
        content:
          "Common pseudo-elements include ::first-line, ::first-letter, ::before, and ::after. They're often used for decorative purposes or to add content via CSS.",
      },
    ],
  },
  {
    id: 2046,
    question: "What is the difference between nth-of-type() and nth-child()?",
    answer: [
      {
        type: "text",
        content:
          "nth-of-type() and nth-child() are both pseudo-class selectors, but they select elements differently:",
      },
      {
        type: "unordered-list",
        content:
          "nth-of-type(): Selects elements based on their position among siblings of the same type\nnth-child(): Selects elements based on their position among all sibling elements, regardless of type",
      },
      {
        type: "code",
        language: "css",
        content: `p:nth-of-type(2) { color: red; }  /* Selects the 2nd <p> element */
p:nth-child(2) { color: blue; }   /* Selects <p> only if it's the 2nd child */`,
      },
    ],
  },
  {
    id: 2047,
    question: "What is a mobile-first approach in responsive design?",
    answer: [
      {
        type: "text",
        content:
          "A mobile-first approach in responsive design means designing and coding for mobile devices first, then progressively enhancing the design for larger screens. This approach prioritizes the mobile user experience and often results in leaner, more efficient code.",
      },
      {
        type: "code",
        language: "css",
        content: `/* Base styles for mobile */
.container { width: 100%; }

/* Styles for larger screens */
@media (min-width: 768px) {
  .container { width: 750px; }
}`,
      },
      {
        type: "text",
        content:
          "This strategy ensures that the essential content and functionality are optimized for mobile users, with additional features and layout changes introduced as the screen size increases.",
      },
    ],
  },
  {
    id: 2048,
    question: "What is SVG and how is it used in web design?",
    answer: [
      {
        type: "text",
        content:
          "SVG (Scalable Vector Graphics) is an XML-based vector image format for 2D graphics. It's widely used in web design for creating resolution-independent graphics that can scale without losing quality.",
      },
      {
        type: "code",
        language: "html",
        content: `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>`,
      },
      {
        type: "text",
        content:
          "SVGs can be directly embedded in HTML or used as image sources. They support interactivity and animation, making them versatile for icons, logos, and complex illustrations.",
      },
    ],
  },
  {
    id: 2049,
    question: "How do browsers read CSS selectors?",
    answer: [
      {
        type: "text",
        content:
          "Browsers read CSS selectors {{from right to left:keyword}}. This approach is more efficient for discarding non-matching elements quickly, especially with complex selectors.",
      },
      {
        type: "text",
        content:
          "For example, in the selector .container div p, the browser first finds all <p> elements, then checks if they're inside a <div>, and finally if that <div> has the class 'container'. This right-to-left parsing helps optimize the selector matching process.",
      },
    ],
  },
  {
    id: 2050,
    question:
      "What are CSS modules and what are their advantages and disadvantages?",
    answer: [
      {
        type: "text",
        content:
          "CSS modules are CSS files where all class names and animation names are locally scoped by default. They're used alongside JavaScript modules to ensure that styles are encapsulated for each component.",
      },
      {
        type: "text",
        content: "Advantages of CSS modules include:",
      },
      {
        type: "unordered-list",
        content:
          "Local scoping prevents style conflicts\nPromotes component-based design\nInteroperable with JS for dynamic styling",
      },
      {
        type: "text",
        content: "Disadvantages of CSS modules include:",
      },
      {
        type: "unordered-list",
        content:
          "Requires a build process\nNot a standard CSS feature\nMay require adapting to different naming conventions",
      },
      {
        type: "text",
        content:
          "CSS modules improve code organization and prevent global namespace pollution, but they do add complexity to the build process and may have a learning curve for developers used to traditional CSS.",
      },
    ],
  },
  {
    id: 2051,
    question: "What is a CSS preprocessor and why would you use one?",
    answer: [
      {
        type: "text",
        content:
          "A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. It extends CSS with features like variables, nesting, mixins, and functions, which can make your stylesheets more maintainable and easier to write.",
      },
      {
        type: "code",
        language: "scss",
        content: `$primary-color: #3498db;

.button {
  background-color: $primary-color;
  &:hover {
    background-color: darken($primary-color, 10%);
  }
}`,
      },
      {
        type: "text",
        content:
          "Popular CSS preprocessors include Sass, Less, and Stylus. They can significantly improve workflow efficiency and code organization in large projects.",
      },
    ],
  },
  {
    id: 2052,
    question:
      'What is the concept of "CSS in JS" and how does it differ from traditional CSS?',
    answer: [
      {
        type: "text",
        content:
          '"CSS in JS" is a styling technique where CSS is composed using JavaScript instead of being defined in external .css files. This approach allows for dynamic styling, better scoping, and the ability to leverage JavaScript\'s full power in styling components.',
      },
      {
        type: "code",
        language: "javascript",
        content: `import React from 'react';
import { css } from '@emotion/react';

const buttonStyles = (primary) => css({
  backgroundColor: primary ? 'blue' : 'white',
  color: primary ? 'white' : 'black',
  padding: '10px 15px',
  border: '2px solid blue',
});

const Button = ({ primary, children }) => (
  <button css={buttonStyles(primary)}>{children}</button>
);`,
      },
      {
        type: "text",
        content:
          "This approach can enhance reusability and customization, especially in component-based architectures. However, it may have a steeper learning curve and can blur the separation of concerns between structure and style.",
      },
    ],
  },
  {
    id: 2053,
    question:
      "What is the purpose of CSS frameworks and can you name a few popular ones?",
    answer: [
      {
        type: "text",
        content:
          "CSS frameworks provide pre-written CSS that allows for easier and faster webpage styling. They often include responsive grids, pre-styled components, utility classes, and JavaScript plugins.",
      },
      {
        type: "unordered-list",
        content:
          "Bootstrap: Widely used, feature-rich framework\nFoundation: Flexible, semantic framework\nBulma: Modern, modular framework without JavaScript dependencies\nTailwind CSS: Utility-first framework for highly customized designs",
      },
      {
        type: "text",
        content:
          "While frameworks can speed up development, they may lead to bloated code if not used carefully and can make sites look similar if not customized properly.",
      },
    ],
  },
  {
    id: 2054,
    question: "What is a CSS pseudo-class and how is it used?",
    answer: [
      {
        type: "text",
        content:
          "A CSS pseudo-class is a keyword added to selectors that specifies a special state of the selected elements. They allow you to style elements based on their state or relationship to other elements.",
      },
      {
        type: "code",
        language: "css",
        content: `a:hover { color: red; }
input:focus { border-color: blue; }
li:first-child { font-weight: bold; }
p:nth-child(even) { background-color: #f2f2f2; }`,
      },
      {
        type: "text",
        content:
          "Common pseudo-classes include :hover, :focus, :active, :visited, and :first-child. They provide a powerful way to create interactive and dynamic styles without JavaScript.",
      },
    ],
  },
  {
    id: 2055,
    question:
      "What is the purpose of the ::before and ::after pseudo-elements?",
    answer: [
      {
        type: "text",
        content:
          "The ::before and ::after pseudo-elements in CSS are used to add content before or after an element's content. They are often used for decorative purposes or to add small pieces of content without modifying the HTML.",
      },
      {
        type: "code",
        language: "css",
        content: `.quote::before {
  content: '"';
  font-size: 2em;
  color: #888;
}
.external-link::after {
  content: ' ↗';
  font-size: 0.8em;
}`,
      },
      {
        type: "text",
        content:
          "These pseudo-elements are inserted as children of the selected element. They're not part of the DOM, but can be styled as if they were real elements.",
      },
    ],
  },
  {
    id: 2056,
    question: "What is the difference between responsive and fluid typography?",
    answer: [
      {
        type: "text",
        content:
          "Both responsive and fluid typography adapt to the screen size, but they use different approaches:",
      },
      {
        type: "text",
        content: "Responsive Typography:",
      },
      {
        type: "unordered-list",
        content:
          "Uses media queries to adjust font sizes at specific breakpoints\nProvides precise control over appearance at defined screen sizes",
      },
      {
        type: "text",
        content: "Fluid Typography:",
      },
      {
        type: "unordered-list",
        content:
          "Uses viewport units to scale smoothly across all screen sizes\nProvides a more seamless transition between font sizes",
      },
      {
        type: "code",
        language: "css",
        content: `/* Responsive Typography */
body { font-size: 16px; }
@media (min-width: 768px) { body { font-size: 18px; } }

/* Fluid Typography */
body { font-size: calc(16px + 0.5vw); }

/* Fluid with limits using clamp() */
body { font-size: clamp(16px, 4vw, 22px); }`,
      },
      {
        type: "text",
        content:
          "Fluid typography can provide a more seamless reading experience but may require more careful planning to ensure readability across all device sizes.",
      },
    ],
  }
  
];
