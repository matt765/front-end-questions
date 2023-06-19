export const cssQuestionsData = [
  {
    question: "What is the box model?",
    answer:
      "It's the layout of elements in CSS, which includes: content, padding, border, and margin.",
  },
  {
    question: "What are some CSS methodologies?",
    answer:
      "BEM (Block Element Modifier), OOCSS (Object Oriented CSS), and Atomic Design.",
  },
  {
    question: "What is BEM?",
    answer:
      "BEM stands for Block, Element, Modifier. It's a methodology that helps create reusable components and code sharing in front-end development.\n.block, .block__element .block—modifier",
  },
  {
    question: "What is OOCSS?",
    answer:
      'OOCSS, or Object-Oriented CSS, is a methodology for structuring CSS in a way that aims to encourage code reuse and maintainability by defining styles in "objects".',
  },
  {
    question: "What's the difference between content-box and border-box?",
    answer:
      "content-box gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width. border-box tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added.",
  },
  {
    question: "What's the difference between display properties?",
    answer:
      "inline - doesn't start on a new line and only takes up as much width as necessary.\nblock - starts on a new line and takes up the full width available.\ninline-block - like inline, but you can set width and height.\nflex - displays an element as a block-level flex container.\ngrid - displays an element as a block-level grid container.\nnone - removes the element from the flow of the document, like it's not even there.\ninherit - takes the same display value as its parent element.",
  },
  {
    question: "What's the difference between id and class?",
    answer:
      "id is a unique identifier for an element, while class can be applied to multiple elements. IDs have higher specificity in CSS than classes.",
  },
  {
    question: "What is selector specificity?",
    answer:
      "Selector specificity determines which CSS rule is applied by the browsers. It's calculated based on the number of each selector type in a given rule, with IDs carrying the most weight, followed by classes, then elements.",
  },
  {
    question: "What is the position property?",
    answer:
      "The position property in CSS specifies the positioning method for an element. The different types are static (default), relative (positioned relative to its normal position), absolute (positioned relative to the nearest positioned ancestor), fixed (positioned relative to the browser window), and sticky (changes between relative and fixed based on the scroll position).",
  },
  {
    question: "What is @media?",
    answer:
      "It's used for media queries in CSS, to apply different styles for different devices or screen sizes.",
  },
  {
    question: "What is Responsive Web Design (RWD)?",
    answer:
      "RWD is a design and development approach that makes a webpage look good on all devices (desktops, tablets, and phones), by using flexible layouts, flexible images, and media queries.",
  },
  {
    question: "What is Block Formatting Context (BFC)?",
    answer:
      "BFC is a CSS box model where a new context for block-level boxes layout and float interaction is formed. It's created by elements with certain CSS properties like float, position, display, etc.",
  },
  {
    question: "Describe z-index and how stacking context is formed.",
    answer:
      "z-index determines the stack order of elements (which element is brought to front, which to back). An element with a higher z-index will be displayed in front of an element with a lower z-index. Stacking context can be formed by properties like position (absolute, relative, fixed, sticky), and opacity less than 1.",
  },
  {
    question: "How does floating work in CSS?",
    answer:
      "Floating elements are removed from the normal flow of the document and shifted to the left or right as far as they can go. Other content can flow around the floated element.",
  },
  {
    question: "How do we center a div?",
    answer:
      "There are various methods, including using margin: auto; with a specified width, or using flexbox (display: flex; justify-content: center; align-items: center;), or using CSS Grid.",
  },
  {
    question: "How do we center a div without flex or grid?",
    answer:
      "You can use the margin: auto; method, or text-align with inline-block, or position absolute with transform, among other methods.",
  },
  {
    question:
      "What are the pros and cons of animations in CSS, comparing to JS?",
    answer:
      "CSS animations are typically smoother and require less code, but have less control and complexity compared to JS. JS can handle more complex animations and interactions, but might be slower and requires more code.",
  },
  {
    question: "What is will-change in CSS?",
    answer:
      "The will-change property is used to inform the browser ahead of time of what kinds of changes you are likely to make to an element, so that it can set up appropriate optimizations before they’re needed, aiding in the smoothness of any transitions or animations.",
  },
  {
    question:
      "What's the difference between em and rem, and when should you use them?",
    answer:
      "em is relative to the font-size of its closest or current element. rem is only relative to the html (root) font-size. Use em for local relative sizing. Use rem for global sizing.",
  },
  {
    question: "Name 3 selectors that select an element based on its index.",
    answer: ":nth-child(), :nth-of-type(), and :nth-last-child().",
  },
  {
    question: "How to select the first 10 elements on a list?",
    answer: "li:nth-child(-n+10).",
  },
  {
    question: "How to select odd/even elements on a list?",
    answer: ":nth-child(odd) and :nth-child(even).",
  },
  {
    question: "How can you check if a property is supported in a browser?",
    answer:
      "By using @supports rule. For example: @supports (display:grid) {div {display:grid}}.",
  },
  {
    question: "How can you load CSS resources conditionally?",
    answer:
      "By using media queries in the link tag or by using JavaScript to load CSS files based on conditions.",
  },
  {
    question: "How to use CSS variables?",
    answer:
      "Define them globally inside the :root selector, or locally inside an element selector, and use them by calling var(--variable-name).",
  },
  {
    question: "How to create an attribute selector that is not case sensitive?",
    answer: "input[value='search' i] {}.",
  },
  {
    question: "What's the difference between reset.css and normalize.css?",
    answer:
      "reset.css removes all the default browser styling. normalize.css makes sure elements render consistently across different browsers by keeping useful defaults and correcting bugs.",
  },
  {
    question: "What is shadow DOM?",
    answer:
      "It's a web standard that encapsulates style and structure from the main DOM, used for building web components.",
  },
  {
    question: "How would you implement modularity in CSS?",
    answer: "By following CSS methodologies like BEM, OOCSS, or Atomic Design.",
  },
  {
    question: "What are some pseudo classes you have used?",
    answer:
      "Pseudo classes are keywords that specify a special state of an element. Examples: :hover, :active, :focus, :root, :nth-child, :first-child, :last-child.",
  },
  {
    question: "What is an attribute selector?",
    answer:
      'An attribute selector selects elements based on their attribute value. Example: a[target="_blank"] {}.',
  },
  {
    question: "What are the different ways to hide content in CSS?",
    answer:
      "By using properties like display: none, visibility: hidden, opacity: 0, or width: 0; height: 0.",
  },
  {
    question: "Are CSS rule names case sensitive?",
    answer: "Yes, they are case sensitive.",
  },
  {
    question: "What is the use of the only keyword in CSS?",
    answer:
      "It's used in media queries, applies style only if the entire media query matches.",
  },
  {
    question:
      "Does margin-top or margin-bottom have effect on inline elements?",
    answer: "No.",
  },
  {
    question:
      "Does padding-top or padding-bottom have effect on inline elements?",
    answer: "No.",
  },
  {
    question:
      "Does padding-left or padding-right have effect on inline elements?",
    answer: "Yes.",
  },
  {
    question:
      "If you have a <p> element with font-size: 10rem, will the text be responsive when the user resizes / drags the browser window?",
    answer: "No, unless the root font-size is defined in viewport units.",
  },
  {
    question: "Does overflow: hidden create a new block formatting context?",
    answer: "Yes.",
  },
  {
    question: "Which one would you prefer among px, em, %, or pt and why?",
    answer:
      "The preference depends on the context. em and rem are scalable and great for responsive design. px gives you fixed and precise control. % is relative to the parent element and is also used in responsive designs. pt is mostly used for print media.",
  },
  {
    question: "How does CSS Grid work?",
    answer:
      "CSS Grid Layout is a 2-dimensional system, meaning it can handle both columns and rows. It is controlled by the parent element that is set to display: grid.\nCSS Grid is a layout system in CSS. For a parent element, display: grid is set. Then properties like grid-template-columns, grid-template-rows, justify-content, and align-items are used to define the grid structure. For the child elements, properties such as grid-column-start, grid-column-end, grid-row-start, grid-row-end, and grid-area are used to place them in the grid.",
  },
  {
    question: "How does Flexbox work?",
    answer:
      "Flexbox is a 1-dimensional layout model. It's used to lay out items in a container and can handle either rows or columns. It's controlled by the parent element that is set to display: flex.\nFlexbox is another layout model in CSS. It's ideal for aligning items in a single dimension - either in a row or a column. The parent container should have display: flex. Then properties such as flex-direction, flex-wrap, justify-content, align-items can be used to control the layout. The children elements can be controlled using properties like order, flex-grow, flex-shrink, flex-basis, and align-self.",
  },
  {
    question:
      "What are the differences between visibility: hidden and display: none?",
    answer:
      "visibility: hidden hides the element but it still takes up space in the layout. display: none removes the element from the document flow, so it takes up no space.",
  },
  {
    question: "What is CSS Sprites?",
    answer:
      "CSS Sprites is a technique where a number of images are combined into one larger image. It's used to reduce the number of requests made to the server and improve page loading performance.",
  },
  {
    question: "What is a pseudo-element?",
    answer:
      "Pseudo-elements are used to style specific parts of an element. Examples: ::first-line, ::before, ::after.",
  },
  {
    question: "What's the difference between nth-of-type() and nth-child()?",
    answer:
      "nth-of-type() selects the nth element of a specific type. nth-child() selects the nth child element, regardless of type.",
  },
  {
    question: "What is a mobile-first approach?",
    answer:
      "Mobile-first approach means designing and coding for mobile first and then scaling up for larger screens (like desktop).",
  },
  {
    question: "What is SVG in CSS?",
    answer:
      "SVG stands for Scalable Vector Graphics. It's an XML-based image format for 2D graphics that supports interactivity and animation.",
  },
  {
    question: "Does a browser read CSS selectors from right to left?",
    answer: "Yes, the browser reads selectors from right to left.",
  },
  {
    question: "What are CSS modules?",
    answer:
      "CSS modules are CSS files where all class names and animation names are locally scoped by default. They're used alongside JavaScript modules to ensure that styles are encapsulated for each component, preventing naming conflicts and style leakage.\nPros:\nLocal scoping prevents style conflicts.\nPromotes component-based design, improving code organization and reusability.\nInteroperable with JS, enabling dynamic styling based on component state.\nCons:\nRequires a build process, increasing complexity.\nNot a standard CSS feature, so it might not be as universally understood.\nCamelCase is recommended due to JS not allowing hyphens, which might be a con for those used to kebab-case in CSS.",
  },
  {
    question: "What is a CSS preprocessor?",
    answer:
      "A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. Examples include Sass, Less, and Stylus.",
  },
  {
    question: 'What is the concept of "CSS in JS"?',
    answer:
      '"CSS in JS" is a styling technique where CSS is composed using JavaScript instead of defined in external .css files. This approach allows the direct use of JavaScript variables and functions in CSS, which can enhance reusability and customization.',
  },
  {
    question: "What is the use of a CSS framework, and can you name a few?",
    answer:
      "CSS frameworks provide pre-written CSS which allows for easier webpage styling. They often contain grids, responsive media queries, pre-defined classes, etc. Examples include Bootstrap, Foundation, Bulma, and Tailwind CSS.",
  },
  {
    question: "What is a CSS pseudo-class?",
    answer:
      "A CSS pseudo-class is a keyword added to selectors that specifies a special state of the selected elements. Examples: :hover, :focus, :active, :visited, :first-child.",
  },
  {
    question: "What is the use of the ::before and ::after pseudo-elements?",
    answer:
      "::before and ::after pseudo-elements are used to add content before or after an element's content. They are often used for decorative purposes.",
  },
  {
    question: "What is the difference between responsive and fluid typography?",
    answer:
      "Both responsive and fluid typography adapt to the screen size, but in different ways. Responsive typography uses media queries to adjust font sizes at different breakpoints, providing control over the precise appearance at specific screen sizes. Fluid typography, on the other hand, uses viewport units and scales smoothly between a range of screen sizes, often providing a more seamless transition between font sizes. Fluid typography can also be combined with min/max values using the CSS clamp() function to limit the scaling range.",
  },
];
