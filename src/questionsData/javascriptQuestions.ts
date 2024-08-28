import { Question } from "@/components/questions/types";

export const javascriptQuestionsData: Question[] = [
  // General
  {
    id: 3001,
    question: "What are the data types Javascript supports?",
    answer: [
      {
        type: "text",
        content: "JavaScript supports two main categories of data types:",
      },
      {
        type: "text",
        content: "Primitive types:",
      },
      {
        type: "unordered-list",
        content: "Number\nString\nBigInt\nBoolean\nUndefined\nNull\nSymbol",
      },
      {
        type: "text",
        content: "Complex types:",
      },
      {
        type: "unordered-list",
        content: "Objects (including Array, Map, and Set)",
      },
      {
        type: "text",
        content: "Here's a code example demonstrating these types:",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Primitive types
const num = 42;
const str = "Hello, world!";
const bigInt = 1234567890123456789012345678901234567890n;
const bool = true;
let undefinedVar;
const nullVar = null;
const sym = Symbol('unique');

// Complex types
const obj = { key: 'value' };
const arr = [1, 2, 3];
const map = new Map();
const set = new Set([1, 2, 3]);`,
      },
    ],
  },
  {
    id: 3002,
    question: "What do the break and the continue statements do?",
    answer: [
      {
        type: "text",
        content:
          "The break and continue statements are used to  {{control the flow of loops:keyword}} in JavaScript:",
      },
      {
        type: "unordered-list",
        content:
          "break: Stops the current loop and moves program control to the line immediately following the loop.\ncontinue: Skips the rest of the loop statements and continues with the next iteration of the loop.",
      },
      {
        type: "text",
        content: "Here's an example demonstrating both statements:",
      },
      {
        type: "code",
        language: "javascript",
        content: `for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue; // Skip the rest of the loop for i = 1
  }
  if (i === 3) {
    break; // Stop the loop when i = 3
  }
  console.log(i);
}
// Output: 0, 2`,
      },
      {
        type: "text",
        content:
          "In this example, the continue statement skips printing 1, and the break statement stops the loop before printing 3 and 4.",
      },
    ],
  },
  {
    id: 3003,
    question: "What's the difference between var, const, and let?",
    answer: [
      {
        type: "text",
        content:
          "The main differences between `var`, `let`, and `const` in JavaScript relate to their scoping rules, mutability characteristics, and hoisting behavior.",
      },
      {
        type: "text",
        content: "var:",
      },
      {
        type: "unordered-list",
        content:
          "Function-scoped or globally-scoped\nCan be redeclared and updated\nHoisted to the top of its scope, with an initial value of `undefined`",
      },
      {
        type: "text",
        content: "let:",
      },
      {
        type: "unordered-list",
        content:
          "Block-scoped\nCan be updated but not redeclared in the same scope\nHoisted, but not initialized, so accessing it before declaration results in a `ReferenceError`",
      },
      {
        type: "text",
        content: "const:",
      },
      {
        type: "unordered-list",
        content:
          "Block-scoped\nCannot be updated or redeclared\nMust be initialized at the time of declaration\nHoisted, but not initialized, so accessing it before declaration results in a `ReferenceError`",
      },
      {
        type: "text",
        content: "Here's a code example illustrating these differences:",
      },
      {
        type: "code",
        language: "javascript",
        content: `// var example
const varTest = () => {
  var x = 1;
  if (true) {
    var x = 2; // Same variable, redeclared and updated
    console.log(x); // 2
  }
  console.log(x); // 2 (function-scoped)
};
varTest();

// let example
const letTest = () => {
  let y = 1;
  if (true) {
    let y = 2; // Block-scoped, different variable
    console.log(y); // 2
  }
  console.log(y); // 1 (outer block's y)
};
letTest();

// const example
const constTest = () => {
  const z = 1;
  if (true) {
    const z = 2; // Block-scoped, different variable
    console.log(z); // 2
  }
  console.log(z); // 1 (outer block's z)
  
  // Uncommenting the line below will cause an error because z is immutable
  // z = 3; // Error: Assignment to constant variable.
};
constTest();`,
      },
    ],
  },
  {
    id: 3004,
    question:
      "What's the difference between null, undefined, and undeclared variables in JavaScript, and how can you check for these states?",
    answer: [
      {
        type: "text",
        content:
          "In JavaScript, null, undefined, and undeclared represent different states of variables:",
      },
      {
        type: "unordered-list",
        content:
          "undefined: A variable has been declared but not assigned a value\nnull: A variable has been explicitly assigned a 'no value' or 'empty' state\nundeclared: A variable that has not been declared at all",
      },
      {
        type: "text",
        content:
          "You can check for these states using typeof operator or direct comparison. For undeclared variables, attempting to access them will throw a ReferenceError.",
      },
    ],
  },
  {
    id: 3005,
    question:
      "What is the difference between '==' and '===' operators in JavaScript?",
    answer: [
      {
        type: "text",
        content:
          "The '==' and '===' operators in JavaScript are used for comparison, but they behave differently:",
      },
      {
        type: "unordered-list",
        content:
          "== (Equality operator): Compares values after performing type coercion if necessary\n=== (Strict equality operator): Compares both value and type without coercion",
      },
      {
        type: "text",
        content:
          "For example, 5 == '5' is true, but 5 === '5' is false. Similarly, null == undefined is true, but null === undefined is false.",
      },
    ],
  },
  {
    id: 3006,
    question: "What is debounce in JavaScript and how can you implement it?",
    answer: [
      {
        type: "text",
        content:
          "Debounce is a technique used to {{limit the rate at which a function can fire:keyword}}. It's useful for optimizing performance, especially with events that can fire rapidly (e.g., scrolling, resizing).",
      },
      {
        type: "text",
        content:
          "A basic implementation involves using setTimeout to delay the execution of a function, and clearTimeout to cancel the timer if the function is called again within the specified delay.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};`,
      },
    ],
  },
  {
    id: 3007,
    question: "What is JSON and how is it used in JavaScript?",
    answer: [
      {
        type: "text",
        content:
          "JSON (JavaScript Object Notation) is a lightweight data interchange format. It's easy for humans to read and write, and easy for machines to parse and generate.",
      },
      {
        type: "text",
        content: "Key characteristics of JSON:",
      },
      {
        type: "unordered-list",
        content:
          "Data is in name/value pairs\nData is separated by commas\nCurly braces hold objects\nSquare brackets hold arrays",
      },
      {
        type: "text",
        content:
          "In JavaScript, you can work with JSON using JSON.stringify() to convert an object to a JSON string, and JSON.parse() to parse a JSON string into an object.",
      },
    ],
  },
  {
    id: 3008,
    question:
      "What is variable scope in JavaScript and what are the different types of scope?",
    answer: [
      {
        type: "text",
        content:
          "Variable scope in JavaScript refers to {{the context in which variables are declared and can be accessed:keyword}}",
      },
      {
        type: "unordered-list",
        content:
          "Global scope: Variables declared outside any function or block\nFunction scope: Variables declared within a function\nBlock scope: Variables declared within a block (introduced with let and const)",
      },
      {
        type: "text",
        content:
          "Global variables are accessible throughout the program, function-scoped variables are only accessible within the function they're declared in, and block-scoped variables are only accessible within the block they're declared in.",
      },
    ],
  },
  {
    id: 3009,
    question:
      "What are the key differences between arrow functions and regular functions in JavaScript?",
    answer: [
      {
        type: "text",
        content:
          "Arrow functions and regular functions in JavaScript have several key differences:",
      },
      {
        type: "unordered-list",
        content:
          "Syntax: Arrow functions have a more concise syntax\nThis binding: Arrow functions don't have their own 'this'\nArguments object: Arrow functions don't have an 'arguments' object\nImplicit return: Arrow functions can have implicit returns for single expressions\nCannot be used as constructors: Arrow functions cannot be used with 'new'",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Regular function
const regularFunc = function(a, b) {
  return a + b;
};

// Arrow function
const arrowFunc = (a, b) => a + b;`,
      },
    ],
  },
  {
    id: 3010,
    question: "What is a hashtable?",
    answer: [
      {
        type: "text",
        content:
          "A hashtable is a data structure that stores key-value pairs, allowing quick retrieval of values based on their keys. It's like a dictionary where you can quickly look up a definition (value) using a word (key). Key characteristics of hashtables include:",
      },
      {
        type: "unordered-list",
        content:
          "Uses a hash function to compute an index into an array of buckets or slots\nProvides efficient lookup, insertion, and deletion operations\nTypically has an average time complexity of O(1) for basic operations",
      },
      {
        type: "text",
        content:
          "Here's a simple example of how a hashtable might be used in JavaScript:",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Using an object as a simple hashtable
const hashtable = {};

// Inserting key-value pairs
hashtable['key1'] = 'value1';
hashtable['key2'] = 'value2';

// Retrieving values
console.log(hashtable['key1']); // Output: value1

// Deleting a key-value pair
delete hashtable['key2'];

// Checking if a key exists
console.log('key2' in hashtable); // Output: false`,
      },
      {
        type: "text",
        content:
          "In practice, more sophisticated implementations of hashtables in JavaScript might use Map or custom classes for better performance and additional features.",
      },
    ],
  },
  {
    id: 3011,
    question:
      "What are some examples of templating libraries in JavaScript and how are they used?",
    answer: [
      {
        type: "text",
        content:
          "Templating libraries in JavaScript are used to separate the structure of HTML from the logic of the application. Some popular examples include:",
      },
      {
        type: "unordered-list",
        content:
          "Handlebars: Logic-less templating\nJSX: Used with React\nEJS: Embedded JavaScript templating\nMustache: Logic-less templating",
      },
      {
        type: "text",
        content: "Here's a simple example using Handlebars:",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Handlebars template
const template = Handlebars.compile("Hello, {{name}}!");

// Render the template
const result = template({ name: "John" });
console.log(result); // Output: Hello, John!`,
      },
    ],
  },
  {
    id: 3012,
    question:
      "What are the main programming paradigms supported by JavaScript?",
    answer: [
      {
        type: "text",
        content:
          "JavaScript is a multi-paradigm language that supports several programming styles:",
      },
      {
        type: "unordered-list",
        content:
          "Imperative/Procedural: Step-by-step execution of commands\nObject-Oriented Programming (OOP): Based on objects and prototypal inheritance\nFunctional Programming: Emphasizes the use of functions and immutable data",
      },
      {
        type: "text",
        content:
          "Here's a brief example demonstrating OOP and functional approaches:",
      },
      {
        type: "code",
        language: "javascript",
        content: `// OOP approach
class Calculator {
  add(a, b) { return a + b; }
}
const calc = new Calculator();
console.log(calc.add(2, 3)); // 5

// Functional approach
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5`,
      },
    ],
  },
  {
    id: 3013,
    question:
      "How can you perform file operations in JavaScript, both in the browser and on the server?",
    answer: [
      {
        type: "text",
        content:
          "File operations in JavaScript differ between browser and server environments:",
      },
      {
        type: "text",
        content: "Browser:",
      },
      {
        type: "unordered-list",
        content:
          "FileReader API: For reading file contents\nFetch API: For network requests, including file downloads\nFile API: For creating and manipulating file objects",
      },
      {
        type: "text",
        content: "Server (Node.js):",
      },
      {
        type: "unordered-list",
        content:
          "fs module: Provides methods like readFile(), writeFile(), appendFile()",
      },
      {
        type: "text",
        content: "Browser example using FileReader:",
      },
      {
        type: "code",
        language: "javascript",
        content: `const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => console.log(e.target.result);
  reader.readAsText(file);
});`,
      },
    ],
  },
  {
    id: 3014,
    question: "What is a ternary operator in JavaScript and how is it used?",
    answer: [
      {
        type: "text",
        content:
          "The ternary operator is a concise way to write an {{if-else statement:keyword}} in a single line. Its syntax is:",
      },
      {
        type: "code",
        language: "javascript",
        content: `condition ? expressionIfTrue : expressionIfFalse`,
      },
      {
        type: "text",
        content: "Example usage:",
      },
      {
        type: "code",
        language: "javascript",
        content: `const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: "Yes"

// Additional examples:
const access = age >= 21 ? "Allowed" : "Denied";
console.log(access); // Output: "Denied"

const color = age < 13 ? "blue" : age < 18 ? "green" : "red";
console.log(color); // Output: "red"`,
      },
    ],
  },
  {
    id: 3015,
    question:
      "What is a reference in JavaScript and how does it differ from primitive values?",
    answer: [
      {
        type: "text",
        content:
          "In JavaScript, a reference is a pointer to the location in memory where a value is stored. References are used for complex data types (objects, arrays, functions), while primitive values are stored directly in variables.",
      },
      {
        type: "text",
        content: "Key differences:",
      },
      {
        type: "unordered-list",
        content:
          "Primitive values are immutable and compared by value\nReferences are mutable and compared by reference",
      },
      {
        type: "text",
        content: "Example demonstrating reference behavior:",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Reference example
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Jane";
console.log(obj1.name); // Output: "Jane"

// Primitive value example
let a = 5;
let b = a;
b = 10;
console.log(a); // Output: 5 (not affected by change to b)
`,
      },
    ],
  },
  {
    id: 3016,
    question:
      "What are falsy values in JavaScript and how are they used in conditional statements?",
    answer: [
      {
        type: "text",
        content:
          "Falsy values in JavaScript are values that  {{evaluate to false:keyword}}  when used in a boolean context. The six falsy values are:",
      },
      {
        type: "unordered-list",
        content:
          "false\n0 (zero)\n'' or \"\" (empty string)\nnull\nundefined\nNaN (Not a Number)",
      },
      {
        type: "text",
        content:
          "These values are often used in conditional statements. For example:",
      },
      {
        type: "code",
        language: "javascript",
        content: `const value = "";
if (value) {
console.log("This won't run");
} else {
console.log("This will run");
}`,
      },
    ],
  },
  {
    id: 3017,
    question:
      "What are some popular JavaScript unit testing frameworks and how are they used?",
    answer: [
      {
        type: "text",
        content: "Popular JavaScript unit testing frameworks include:",
      },
      {
        type: "unordered-list",
        content:
          "Jest: Developed by Facebook, used for React and general JavaScript testing\nMocha: Flexible testing framework often used with Chai for assertions\nJasmine: Behavior-driven development framework\nEnzyme/React Testing Library: Specifically for testing React components",
      },
      {
        type: "text",
        content: "Example of a simple Jest test:",
      },
      {
        type: "code",
        language: "javascript",
        content: `const sum = (a, b) => a + b;
  
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});`,
      },
    ],
  },
  {
    id: 3018,
    question:
      "What is a barrel in ES6 and how is it used in module organization?",
    answer: [
      {
        type: "text",
        content:
          "A barrel in ES6 is a file that re-exports the exports of other modules. It's used to simplify import statements and organize related modules. Benefits include:",
      },
      {
        type: "unordered-list",
        content:
          "Cleaner import statements\nEasier refactoring\nBetter organization of related modules",
      },
      {
        type: "text",
        content: "Example of a barrel file (index.js):",
      },
      {
        type: "code",
        language: "javascript",
        content: `// In index.js (barrel file)
export { default as Module1 } from './module1';
export { default as Module2 } from './module2';
export { default as Module3 } from './module3';

// Usage in another file
import { Module1, Module2, Module3 } from './index';`,
      },
    ],
  },
  {
    id: 3019,
    question:
      "How does JavaScript handle parameter passing for different data types?",
    answer: [
      {
        type: "text",
        content:
          "JavaScript handles parameter passing differently for primitive and complex data types:",
      },
      {
        type: "unordered-list",
        content:
          "Primitive types (numbers, strings, booleans, null, undefined, symbols): Passed by value\nComplex types (objects, arrays, functions): Passed by reference",
      },
      {
        type: "text",
        content: "Example demonstrating the difference:",
      },
      {
        type: "code",
        language: "javascript",
        content: `const modifyValues = (a, obj) => {
  a = 10;
  obj.prop = 20;
};

let num = 5;
let object = { prop: 15 };

modifyValues(num, object);
console.log(num);    // Output: 5 (unchanged)
console.log(object); // Output: { prop: 20 } (modified)`,
      },
    ],
  },

  {
    id: 3020,
    question:
      "What is a linter in JavaScript development and what are its benefits?",
    answer: [
      {
        type: "text",
        content:
          "A linter is a static code analysis tool that flags programming errors, bugs, stylistic errors, and suspicious constructs. Popular JavaScript linters include ESLint and JSHint.",
      },
      {
        type: "text",
        content: "Benefits of using a linter:",
      },
      {
        type: "unordered-list",
        content:
          "Catches errors early in development\nEnforces consistent code style\nImproves code quality and readability\nHelps prevent certain types of bugs\nEncourages best practices",
      },
      {
        type: "text",
        content: "Example of an ESLint configuration file (.eslintrc.js):",
      },
      {
        type: "code",
        language: "javascript",
        content: `module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": ["error", 2],
    "semi": ["error", "always"]
  }
};`,
      },
    ],
  },
  {
    id: 3021,
    question: "What is a memory leak and how can it be prevented?",
    answer: [
      {
        type: "text",
        content:
          "A memory leak occurs when unused memory is not released, leading to gradual performance degradation. Prevention methods include:",
      },
      {
        type: "unordered-list",
        content:
          "Nullifying references no longer needed\nBeing careful with closures\nManaging event listeners properly\nAvoiding accidental global variables",
      },
      {
        type: "text",
        content: "Example of preventing a memory leak with event listeners:",
      },
      {
        type: "code",
        language: "javascript",
        content: `const button = document.getElementById('myButton');
const handleClick = () => console.log('Clicked');
button.addEventListener('click', handleClick);

// Later, when no longer needed:
button.removeEventListener('click', handleClick);`,
      },
    ],
  },
  {
    id: 3022,
    question:
      "What is a property descriptor and what properties does it include?",
    answer: [
      {
        type: "text",
        content:
          "A property descriptor is an object that describes the characteristics of a property. It includes the following attributes:",
      },
      {
        type: "unordered-list",
        content:
          "value: The property's value\nwritable: Whether the value can be changed\nget/set: Getter and setter functions\nconfigurable: Whether the property can be deleted or its attributes modified\nenumerable: Whether the property appears in for...in loops",
      },
    ],
  },
  {
    id: 3023,
    question: "What are AMD and CommonJS in module systems?",
    answer: [
      {
        type: "text",
        content:
          "AMD (Asynchronous Module Definition) and CommonJS are module formats:",
      },
      {
        type: "text",
        content:
          "AMD is designed for asynchronous loading of modules, primarily used in browser environments. CommonJS is synchronous and mainly used in server-side environments like Node.js. Both have been largely replaced by ES6 modules in modern development.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// AMD
define(['dependency'], function(dependency) {
  return {
    method: function() {}
  };
});

// CommonJS
const dependency = require('dependency');
module.exports = {
  method: function() {}
};`,
      },
    ],
  },
  {
    "id": 3024,
    "question": "What is the same-origin policy and why is it important?",
    "answer": [
      {
        "type": "text",
        "content": "The same-origin policy is a fundamental security concept implemented in web browsers to control interactions between different web pages and scripts. It restricts how a script from one origin (defined by the combination of protocol, domain, and port) can access resources from another origin. This policy is crucial for preventing various types of security threats, including cross-site scripting (XSS) and cross-site request forgery (CSRF)."
      },
      {
        "type": "text",
        "content": "The same-origin policy works by ensuring that a web page can only access data from another page or resource if they share the same origin. For example, a script running on `https://example.com` cannot make requests to or access data from `https://anotherdomain.com` without explicit permission. This limitation is vital for protecting user data from being exposed or manipulated by malicious websites."
      }     
    ]
  },
  
  {
    id: 3025,
    question:
      "Why is it considered bad practice to use the global scope extensively?",
    answer: [
      {
        type: "text",
        content: "Extensive use of the global scope is discouraged because:",
      },
      {
        type: "unordered-list",
        content:
          "It can lead to naming conflicts, especially in large codebases\nIt makes code harder to maintain and debug\nIt increases the risk of unintended side effects\nIt can cause issues when integrating with third-party libraries",
      },
      {
        type: "text",
        content:
          "Instead, it's recommended to use module patterns, closures, or ES6 modules to encapsulate code and minimize global scope usage.",
      },
    ],
  },
  {
    id: 3026,
    question:
      "What is the difference between identity (===) and equality (==) operators?",
    answer: [
      {
        type: "text",
        content:
          "The identity (===) and equality (==) operators differ in how they compare values:",
      },
      {
        type: "text",
        content:
          "Identity (===) operator checks both value and type without type coercion. Equality (==) operator checks for value equality with type coercion.",
      },
      {
        type: "code",
        language: "javascript",
        content: `console.log(5 === '5');  // false
console.log(5 == '5');   // true

console.log(null === undefined);  // false
console.log(null == undefined);   // true`,
      },
    ],
  },
  {
    id: 3027,
    question: "How can you simulate private variables?",
    answer: [
      {
        type: "text",
        content:
          "Private variables can be simulated using closures. This technique involves creating a function that returns an object with methods, where the methods have access to variables in the outer function's scope.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const createPerson = (name) => {
  let age = 0;  // 'private' variable

  return {
    getName: () => name,
    getAge: () => age,
    incrementAge: () => { age++; }
  };
};

const person = createPerson('John');
console.log(person.getName());  // 'John'
console.log(person.getAge());   // 0
person.incrementAge();
console.log(person.getAge());   // 1`,
      },
    ],
  },
  {
    id: 3028,
    question: "What are the main asynchronous design patterns?",
    answer: [
      {
        type: "text",
        content: "The main asynchronous design patterns are:",
      },
      {
        type: "unordered-list",
        content:
          "Callbacks: Functions passed as arguments to be executed later\nPromises: Objects representing the eventual completion or failure of an asynchronous operation\nAsync/Await: Syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code",
      },
      {
        type: "text",
        content:
          "These patterns help manage asynchronous operations and improve code readability and maintainability.",
      },
    ],
  },
  {
    id: 3029,
    question:
      "What are Firebug and Firefox Developer Tools used for in web development?",
    answer: [
      {
        type: "text",
        content:
          "Firebug and Firefox Developer Tools are debugging and development tools used in web browsers. They provide features for:",
      },
      {
        type: "unordered-list",
        content:
          "Inspecting and modifying HTML and CSS in real-time\nDebugging JavaScript with breakpoints and step-through execution\nAnalyzing network requests and responses\nProfiling performance and memory usage\nTesting responsive designs",
      },
      {
        type: "text",
        content:
          "These tools are essential for efficient web development and troubleshooting.",
      },
    ],
  },
  {
    id: 3030,
    question: "What is the difference between a shim and a polyfill?",
    answer: [
      {
        type: "text",
        content:
          "Shims and polyfills are both used to add missing functionality in older environments, but they differ slightly:",
      },
      {
        type: "text",
        content:
          "A shim is a piece of code that intercepts API calls and provides a layer of abstraction. It often doesn't produce the exact behavior of the missing API.",
      },
      {
        type: "text",
        content:
          "A polyfill is a type of shim that replicates the full functionality of a missing API, aiming to provide the exact behavior as if the API were natively supported.",
      },
    ],
  },
  {
    id: 3031,
    question: "What are $$ methods and why are they considered bad practice?",
    answer: [
      {
        type: "text",
        content:
          "$$ methods often refer to non-standard selector methods similar to jQuery's $. They're considered bad practice because:",
      },
      {
        type: "unordered-list",
        content:
          "They're not part of the JavaScript specification\nThey may not be supported across all browsers or environments\nThey can lead to confusion and maintenance issues\nThey often overlap with standard DOM APIs",
      },
      {
        type: "text",
        content:
          "It's generally better to use standard DOM methods or modern frameworks for DOM manipulation.",
      },
    ],
  },
  {
    id: 3032,
    question: "What are WebSockets and what are they used for?",
    answer: [
      {
        type: "text",
        content:
          "WebSockets provide a full-duplex, {{bidirectional communication channel:keyword}} between a client (typically a web browser) and a server over a single TCP connection. They are used for:",
      },
      {
        type: "unordered-list",
        content:
          "Real-time data transfer\nLive content and social feeds\nMultiplayer gaming\nCollaborative editing\nFinancial tickers",
      },
      {
        type: "code",
        language: "javascript",
        content: `const socket = new WebSocket('ws://example.com/socket');
  
socket.onopen = (event) => {
  console.log('Connection established');
  socket.send('Hello Server!');
};

socket.onmessage = (event) => {
  console.log('Message from server:', event.data);
};`,
      },
    ],
  },
  {
    id: 3033,
    question: "What is Babel and why is it used?",
    answer: [
      {
        type: "text",
        content:
          "Babel is a popular JavaScript compiler that transforms modern JavaScript code (ES6+) into backwards-compatible versions of JavaScript that can run in older environments. It's used for:",
      },
      {
        type: "unordered-list",
        content:
          "Enabling the use of latest JavaScript features in older browsers\nTranspiling JSX for React development\nConverting TypeScript to JavaScript\nSupporting custom language features through plugins",
      },
      {
        type: "text",
        content:
          "Babel allows developers to write modern, efficient code while maintaining broad compatibility.",
      },
    ],
  },
  {
    id: 3034,
    question: "What is a linked list and how does it differ from an array?",
    answer: [
      {
        type: "text",
        content:
          "A linked list is a linear data structure where elements are stored in nodes. Each node contains a data field and a reference (or link) to the next node in the sequence.",
      },
      {
        type: "text",
        content:
          "Unlike arrays, linked lists do not store elements in contiguous memory locations. This makes insertion and deletion operations more efficient, especially for large datasets, but random access is slower.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const createNode = (data) => ({
  data,
  next: null,
});

const appendNode = (head, data) => {
  const newNode = createNode(data);
  if (!head) {
    return newNode;
  }
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
  return head;
};

let head = createNode(1);
head = appendNode(head, 2);
head = appendNode(head, 3);

console.log(head);`,
      },
    ],
  },
  {
    id: 3035,
    question: "What is recursion and when is it useful?",
    answer: [
      {
        type: "text",
        content:
          "Recursion is a programming technique where a function {{calls itself:keyword}} to solve a problem by breaking it down into smaller, similar subproblems. It's useful for:",
      },
      {
        type: "unordered-list",
        content:
          "Solving problems with a naturally recursive structure (e.g., tree traversal)\nImplementing divide-and-conquer algorithms\nSimplifying complex iterative logic",
      },
      {
        type: "code",
        language: "javascript",
        content: `const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5));  // 120`,
      },
    ],
  },
  {
    id: 3036,
    question: "What is the difference between .forEach() and .map() methods?",
    answer: [
      {
        "type": "text",
        "content": ".forEach() and .map() are both array methods, but they serve different purposes:"
      },
      {
        "type": "unordered-list",
        "content": ".forEach() executes a provided function once for each array element. It doesn't return anything (undefined).\n.map() creates a new array with the results of calling a provided function on every element in the array."
      },
      {
        type: "code",
        language: "javascript",
        content: `const numbers = [1, 2, 3];
  
numbers.forEach(num => console.log(num * 2));
// Logs: 2, 4, 6
// Returns: undefined

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

// Explicit difference:
console.log(numbers.forEach(num => num * 2)); // Output: undefined
console.log(numbers.map(num => num * 2)); // Output: [2, 4, 6]
`,
      },
    ],
   
  },
  {
    id: 3037,
    question:
      "What is an Immediately Invoked Function Expression (IIFE) and why is it used?",
    answer: [
      {
        type: "text",
        content:
          "An Immediately Invoked Function Expression (IIFE) is a function that runs {{as soon as it is defined:keyword}}. It's used to:",
      },
      {
        type: "unordered-list",
        content:
          "Create a new scope and avoid polluting the global namespace\nEncapsulate private data and methods\nAvoid variable hoisting issues\nCreate closures",
      },
      {
        type: "code",
        language: "javascript",
        content: `(function() {
  var privateVar = 'I am private';
  console.log(privateVar);
})();
  
// privateVar is not accessible here`,
      },
    ],
  },
  {
    id: 3038,
    question: "What are typical use cases for anonymous functions?",
    answer: [
      {
        type: "text",
        content:
          "Anonymous functions are functions without a name. They are commonly used in the following scenarios:",
      },
      {
        type: "unordered-list",
        content:
          "As arguments to higher-order functions (e.g., map, filter, reduce)\nIn Immediately Invoked Function Expressions (IIFEs)\nAs event handlers or callbacks\nIn arrow function syntax for concise code",
      },
      {
        type: "text",
        content:
          "Anonymous functions provide flexibility and can help create cleaner, more readable code in certain situations.",
      },
    ],
  },
  {
    id: 3039,
    question:
      "What are the differences between feature detection, feature inference, and using the UA string?",
    answer: [
      {
        type: "text",
        content:
          "These are different approaches to determine browser capabilities:",
      },
      {
        type: "text",
        content:
          "Feature detection checks if a feature is supported by the browser. Feature inference assumes a feature is available based on the presence of another feature. Using the UA (User Agent) string involves parsing the browser's self-reported identifier.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Feature detection
if ('geolocation' in navigator) {
  // geolocation is available
}

// Feature inference (less reliable)
if (document.getElementsByTagName) {
  // Assumes DOM methods are fully supported
}

// UA string (least reliable)
if (navigator.userAgent.indexOf('Chrome') !== -1) {
  // Assumes it's Chrome browser
}`,
      },
    ],
  },
  {
    id: 3040,
    question:
      "What's the difference between function Person(){}, var person = Person(), and var person = new Person()?",
    answer: [
      {
        type: "text",
        content:
          "These three statements represent different ways of working with functions and objects in JavaScript. `function Person(){}` is a function declaration that defines a function named `Person`. `var person = Person()` calls the `Person` function and assigns its return value to the `person` variable. If `Person` doesn't return anything explicitly, `person` will be `undefined`. `var person = new Person()` creates a new object instance of `Person`, treating `Person` as a constructor function.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const Person = (name) => {
  this.name = name;
};

const person1 = Person('Alice'); // person1 is undefined
const person2 = new Person('Bob'); // person2 is an object { name: 'Bob' }

console.log(person1); // undefined
console.log(person2.name); // 'Bob'`,
      },
    ],
  },
  {
    id: 3041,
    question:
      "What's the difference between a function declaration and a function expression?",
    answer: [
      {
        type: "text",
        content:
          "A function declaration defines a named function using the function keyword at the beginning of a statement. A function expression defines a function as part of a larger expression, typically by assigning it to a variable. The key difference is that function declarations are hoisted, meaning they can be called before they appear in the code, while function expressions are not hoisted.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function expression
const farewell = function(name) {
  return \`Goodbye, \${name}!\`;
};

console.log(greet('Alice')); // Works
console.log(farewell('Bob')); // Works

// This would not work due to hoisting
console.log(hello('Charlie'));
const hello = function(name) {
  return \`Hi, \${name}!\`;
};`,
      },
    ],
  },
  {
    id: 3042,
    question:
      "What is the difference between 'this' in an arrow function and a regular function?",
    answer: [
      {
        type: "text",
        content:
          "The behavior of 'this' differs between arrow functions and regular functions. In a regular function, 'this' is dynamically bound and depends on how the function is called. It can refer to the global object, the object that calls the function, or undefined in strict mode. In contrast, an arrow function does not have its own 'this' context. Instead, it captures the 'this' value from its surrounding lexical scope at the time it's created.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const obj = {
  name: 'Example',
  regularFunc() {
    console.log(this.name); // 'this' refers to obj
  },
  arrowFunc: () => {
    console.log(this.name); // 'this' refers to the surrounding scope, likely global or window
  },
};

obj.regularFunc(); // Outputs: 'Example'
obj.arrowFunc(); // Outputs: undefined (or global/window context's name in a browser)`,
      },
    ],
  },
  {
    id: 3043,
    question:
      "What is the difference between ES6 classes and ES5 function constructors?",
    answer: [
      {
        type: "text",
        content:
          "ES6 classes and ES5 function constructors both serve the purpose of creating objects, but they differ in syntax and some behavior. ES6 classes provide a more intuitive and cleaner syntax for creating objects and implementing inheritance. They use the 'class' keyword and have a special 'constructor' method. ES5 function constructors, on the other hand, use regular functions and the 'prototype' property to achieve similar functionality.",
      },
      {
        type: "unordered-list",
        content:
          "ES6 classes have built-in support for inheritance using 'extends'\nES6 classes are not hoisted, unlike function constructors\nES6 class methods are non-enumerable by default",
      },
    ],
  },
  {
    id: 3044,
    question: "How would you compare two objects?",
    answer: [
      {
        type: "text",
        content:
          "Comparing two objects in JavaScript is not as straightforward as comparing primitive values. Objects are compared by reference, not by value. To compare the contents of two objects, you need to compare their properties individually. There are several approaches to achieve this:",
      },
      {
        type: "code",
        language: "javascript",
        content: `const isEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  return true;
};

const a = { x: 1, y: 2 };
const b = { x: 1, y: 2 };
const c = { x: 1, y: 3 };

console.log(isEqual(a, b)); // true
console.log(isEqual(a, c)); // false`,
      },
    ],
  },

  {
    id: 3045,
    question: "How does 'this' work?",
    answer: [
      {
        type: "text",
        content:
          "The 'this' keyword in JavaScript refers to the context in which a function is executed. Its value is determined by how a function is called, not where it's defined. Understanding 'this' is crucial for writing effective JavaScript code, especially when dealing with object methods, event handlers, and constructors.",
      },
      {
        type: "unordered-list",
        content:
          "In a method, 'this' refers to the object that owns the method\nIn a standalone function, 'this' refers to the global object (window in browsers)\nIn an event handler, 'this' refers to the element that received the event\nIn a constructor function, 'this' refers to the newly created instance",
      },
    ],
  },
  {
    id: 3046,
    question: "How does prototypal inheritance work?",
    answer: [
      {
        type: "text",
        content:
          "Prototypal inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. Every object in JavaScript has an internal link to another object called its prototype. When a property is accessed on an object, and if the property is not found on that object, the JavaScript engine looks for it in the object's prototype, and if not found there, in the prototype's prototype, and so on, forming what's called the prototype chain.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const Animal = (name) => ({
  name,
  speak() {
    console.log(\`\${this.name} makes a sound.\`);
  },
});

const Dog = (name) => {
  const dog = Object.create(Animal(name));
  dog.bark = () => {
    console.log(\`\${dog.name} barks.\`);
  };
  return dog;
};

const rex = Dog('Rex');
rex.speak(); // Rex makes a sound.
rex.bark();  // Rex barks.`,
      },
    ],
  },
  {
    id: 3047,
    question:
      "How is prototypal inheritance different from classical inheritance?",
    answer: [
      {
        type: "text",
        content:
          "Prototypal inheritance and classical inheritance are two different approaches to object-oriented programming. In classical inheritance, which is used in languages like Java or C++, objects are instances of classes, and classes inherit from other classes. In prototypal inheritance, which is used in JavaScript, objects inherit directly from other objects.",
      },
      {
        type: "unordered-list",
        content:
          "Prototypal inheritance is more flexible and dynamic\nClassical inheritance uses a class-based model, while prototypal inheritance uses an object-based model\nPrototypal inheritance allows for easier runtime modifications of object behavior\nClassical inheritance typically uses the 'new' keyword, while prototypal inheritance can use Object.create()",
      },
    ],
  },
  {
    id: 3048,
    question: "What's the difference between host objects and native objects?",
    answer: [
      {
        type: "text",
        content:
          "Host objects and native objects are two categories of objects in JavaScript. Native objects are defined in the ECMAScript specification and are available in any JavaScript environment. Host objects, on the other hand, are provided by the runtime environment (such as a web browser or Node.js) and can vary depending on the environment.",
      },
      {
        type: "unordered-list",
        content:
          "Native objects: Object, Array, String, Number, Boolean, Function, Date, RegExp, Error, etc.\nHost objects (in a browser environment): window, document, history, XMLHttpRequest, etc.",
      },
    ],
  },
  {
    id: 3049,
    question: "What's the difference between .call(), .apply(), and .bind()?",
    answer: [
      {
        type: "text",
        content:
          ".call(), .apply(), and .bind() are methods used to manipulate the 'this' context of a function. While they all serve a similar purpose, they differ in how they're used and what they return. .call() and .apply() immediately invoke the function with a specified 'this' value and arguments, while .bind() returns a new function with a fixed 'this' value.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const greet = function(greeting, punctuation) {
  console.log(\`\${greeting}, \${this.name}\${punctuation}\`);
};

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); // Hello, Alice!
greet.apply(person, ['Hi', '?']); // Hi, Alice?

const boundGreet = greet.bind(person);
boundGreet('Hey', '.'); // Hey, Alice.`,
      },
    ],
  },
  {
    id: 3050,
    question: "How to change the context of 'this' in a function?",
    answer: [
      {
        type: "text",
        content:
          "Changing the context of 'this' in a function is a common task in JavaScript, especially when working with callbacks or event handlers. There are several ways to achieve this, each with its own use cases and benefits.",
      },
      {
        type: "unordered-list",
        content:
          "Use .bind() to create a new function with a fixed 'this' context\nUse .call() or .apply() to invoke the function immediately with a specified 'this' value\nUse arrow functions, which lexically bind 'this' to the surrounding code's context\nUse the 'that = this' pattern to capture the desired 'this' value in a closure",
      },
    ],
  },
  {
    id: 3051,
    question: "How to clone an object?",
    answer: [
      {
        type: "text",
        content:
          "Cloning an object in JavaScript can be done in several ways, depending on whether you need a shallow clone (where nested objects are still referenced) or a deep clone (where nested objects are also cloned). Here are some common methods for cloning objects:",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Shallow clone
const original = { a: 1, b: { c: 2 } };
const shallowClone1 = Object.assign({}, original);
const shallowClone2 = { ...original };

// Deep clone (simple objects only)
const deepClone = JSON.parse(JSON.stringify(original));

// Deep clone (custom function for more complex objects)
const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;
  const newObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    newObj[key] = deepClone(obj[key]);
  }
  return newObj;
};`,
      },
    ],
  },
  {
    id: 3052,
    question: "What's the difference between a class and an object?",
    answer: [
      {
        type: "text",
        content:
          "A class and an object are fundamental concepts in object-oriented programming. A class is a blueprint or template for creating objects. It defines the properties and methods that the objects of that class will have. An object, on the other hand, is an instance of a class. It's a concrete entity based on the class, with actual values for its properties.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Class definition
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  drive = () => {
    console.log(\`\${this.make} \${this.model} is driving.\`);
  };
}

// Object instantiation
const myCar = new Car('Toyota', 'Corolla');
myCar.drive(); // Toyota Corolla is driving.`,
      },
    ],
  },
  {
    id: 3053,
    question: "What is a symbol?",
    answer: [
      {
        type: "text",
        content:
          "A symbol is a primitive data type introduced in ECMAScript 6 (ES6) that represents a unique identifier. Unlike strings or numbers, every symbol value returned from Symbol() is unique. Symbols are often used as property keys for objects when you want to add properties that won't collide with other properties, regardless of what name is used. They provide a way to create non-string property names and are not enumerable in for...in loops.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Creating a symbol
const sym1 = Symbol();
const sym2 = Symbol('description');

// Symbols are always unique
console.log(Symbol('foo') === Symbol('foo')); // false

// Using symbols as object keys
const MY_KEY = Symbol();
const obj = {};

obj[MY_KEY] = 123;
console.log(obj[MY_KEY]); // 123

// Symbols are not enumerable
for (let i in obj) {
  console.log(i); // Nothing is printed
}

// But they can be retrieved using Object.getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol()]`,
      },
    ],
  },
  {
    id: 3054,
    question: "Why might you want to create static class members?",
    answer: [
      {
        type: "text",
        content:
          "Static class members (properties and methods) belong to the class itself rather than to instances of the class. They are useful in several scenarios and offer certain advantages in object-oriented programming. Static members are shared across all instances of a class and can be accessed without creating an instance of the class.",
      },
      {
        type: "code",
        language: "javascript",
        content: `class MathOperations {
  static PI = 3.14159;
  
  static square(x) {
    return x * x;
  }
}

console.log(MathOperations.PI); // 3.14159
console.log(MathOperations.square(5)); // 25

// No need to create an instance:
// const math = new MathOperations();`,
      },
    ],
  },
  {
    id: 3055,
    question:
      "What are the pros and cons of extending built-in JavaScript objects?",
    answer:
      "Extending built-in JavaScript objects can lead to confusion and unexpected behaviors, especially when working with other developers who may not be aware of the extensions. However, it can provide convenient ways to add functionality.",
  },
  {
    id: 3056,
    question: "What are predefined objects?",
    answer: [
      {
        type: "text",
        content:
          "Predefined objects in JavaScript are built-in objects that come with the language and are available for use {{without any additional setup:keyword}}. These objects provide essential functionality and serve as the foundation for many JavaScript operations. They include data structure objects, utility objects, and error objects.",
      },
      {
        type: "unordered-list",
        content:
          "Array\nBoolean\nDate\nError\nFunction\nJSON\nMath\nNumber\nObject\nRegExp\nString",
      },
    ],
  },

  {
    id: 3057,
    question: "What are getters and setters?",
    answer: [
      {
        type: "text",
        content:
          "Getters and setters are special methods that allow you to define how to access and modify the properties of an object. A getter is a method that gets the value of a specific property, while a setter is a method that sets the value of a specific property. They provide a way to execute code on reading or writing a property, allowing for more control over how properties are accessed and modified.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

console.log(person.fullName); // John Doe
person.fullName = 'Jane Smith';
console.log(person.firstName); // Jane
console.log(person.lastName); // Smith`,
      },
    ],
  },
  {
    id: 3058,
    question: "What is an abstract class?",
    answer: [
      {
        type: "text",
        content:
          "An abstract class is a class that is meant to be inherited from, but not instantiated directly. It serves as a base class for other classes, providing a common structure and potentially some implemented methods, while also declaring abstract methods that must be implemented by its subclasses. In JavaScript, there's no built-in support for abstract classes, but we can simulate them using certain patterns.",
      },
      {
        type: "code",
        language: "javascript",
        content: `class AbstractAnimal {
  constructor() {
    if (new.target === AbstractAnimal) {
      throw new Error('Cannot instantiate abstract class');
    }
  }
  
  makeSound() {
    throw new Error('Method makeSound() must be implemented');
  }
}

class Dog extends AbstractAnimal {
  makeSound() {
    return 'Woof!';
  }
}

// const animal = new AbstractAnimal(); // Throws error
const dog = new Dog();
console.log(dog.makeSound()); // Woof!`,
      },
    ],
  },
  {
    id: 3059,
    question: "What do we mean by Object Oriented Programming (OOP)?",
    answer: [
      {
        type: "text",
        content:
          "Object Oriented Programming (OOP) is a programming paradigm that organizes software design around objects, which are instances of classes. These objects contain data in the form of properties and code in the form of methods. OOP emphasizes the concepts of encapsulation, inheritance, and polymorphism, which help in creating modular, reusable, and maintainable code.",
      },
      {
        type: "text",
        content: "Key principles of OOP:",
      },
      {
        type: "unordered-list",
        content:
          "Encapsulation: Bundling data and methods that operate on that data within a single unit\nInheritance: Ability of a class to derive properties and characteristics from another class\nPolymorphism: Ability of different classes to be treated as instances of the same class through a common interface\nAbstraction: Hiding complex implementation details and showing only the necessary features of an object",
      },
    ],
  },
  {
    id: 3060,
    question: "What is an object?",
    answer: [
      {
        type: "text",
        content:
          "In JavaScript, an object is {{a standalone entity with properties and methods:keyword}}. It's a data structure that allows you to store collections of data and functionality together. Objects can be thought of as containers that hold related data and the operations that can be performed on that data. They are one of the fundamental building blocks in JavaScript and are used extensively throughout the language.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const person = {
  name: 'Alice',
  age: 30,
  greet: function() {
    console.log(\`Hello, my name is \${this.name}\`);
  }
};

console.log(person.name); // Alice
person.greet(); // Hello, my name is Alice`,
      },
    ],
  },
  {
    id: 3061,
    question: "What is a class?",
    answer: [
      {
        type: "text",
        content:
          "A class in JavaScript is {{a blueprint for creating objects:keyword}}. It encapsulates data and the methods that operate on that data. Classes were introduced in ECMAScript 2015 (ES6) and provide a more structured and intuitive way to implement object-oriented programming in JavaScript. A class defines the shape of an object, specifying its properties and methods.",
      },
      {
        type: "code",
        language: "javascript",
        content: `class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDescription() {
    return \`This car is a \${this.make} \${this.model}.\`;
  }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getDescription()); // This car is a Toyota Corolla.`,
      },
    ],
  },
  {
    id: 3062,
    question: "What do the Object.create() and Object.assign() methods do?",
    answer: [
      {
        type: "text",
        content:
          "Object.create() and Object.assign() are two important methods in JavaScript for working with objects. Object.create() creates a new object with the specified prototype object and properties. Object.assign() copies the values of all enumerable own properties from one or more source objects to a target object, returning the modified target object.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Object.create()
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(\`My name is \${this.name}. Am I human? \${this.isHuman}\`);
  }
};

const me = Object.create(person);
me.name = 'Matthew';
me.isHuman = true;
me.printIntroduction(); // My name is Matthew. Am I human? true

// Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }`,
      },
    ],
  },
  {
    id: 3063,
    question: "What is a garbage collector?",
    answer: [
      {
        type: "text",
        content:
          "A garbage collector is an automatic memory management system in programming languages like JavaScript. It identifies and removes objects from memory that are no longer reachable or used by the program. This process helps prevent memory leaks and ensures efficient use of system resources. In JavaScript, developers don't need to manually allocate or deallocate memory, as the garbage collector handles this automatically.",
      },
      {
        type: "text",
        content: "Key points about garbage collection:",
      },
      {
        type: "unordered-list",
        content:
          "Automatically frees memory occupied by unreferenced objects\n Runs periodically in the background\n Uses algorithms like mark-and-sweep or reference counting\n Helps prevent memory leaks and out-of-memory errors\n Can impact performance if it runs too frequently",
      },
    ],
  },
  {
    id: 3064,
    question: "What is the difference between mutable and immutable objects?",
    answer: [
      {
        type: "text",
        content:
          "Mutable and immutable objects differ in whether their state can be changed after creation. Mutable objects can be modified after they are created, while immutable objects cannot be changed once they are created. In JavaScript, objects and arrays are mutable by default, while primitive values like strings and numbers are immutable.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Mutable object
const mutableObj = { x: 5 };
mutableObj.x = 10;
console.log(mutableObj.x); // 10

// Immutable object (using Object.freeze())
const immutableObj = Object.freeze({ y: 15 });
immutableObj.y = 20; // This will not change the value and won't throw an error in non-strict mode
console.log(immutableObj.y); // 15`,
      },
    ],
  },
  {
    id: 3065,
    question: "What is interpolation/template literals?",
    answer: [
      {
        type: "text",
        content:
          "Interpolation, implemented in JavaScript through template literals, is a feature introduced in ECMAScript 6 (ES6) that provides a more flexible and readable way to work with strings. Template literals use backticks (`) instead of single or double quotes and allow for embedded expressions and multi-line strings. This feature significantly improves string manipulation and creation in JavaScript.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const name = 'Alice';
const age = 30;

// Using template literals for string interpolation
const greeting = \`Hello, \${name}! You are \${age} years old.\`;
console.log(greeting);
// Output: Hello, Alice! You are 30 years old.

// Multi-line strings with template literals
const multiLine = \`
  This is a
  multi-line
  string.
\`;
console.log(multiLine);

// Expression interpolation
const a = 5;
const b = 10;
console.log(\`Fifteen is \${a + b} and not \${2 * a + b}.\`);
// Output: Fifteen is 15 and not 20.`,
      },
    ],
  },
  {
    id: 3066,
    question:
      "Can you provide examples, pros, and cons of applying immutability?",
    answer: [
      {
        type: "text",
        content:
          "Immutability in programming refers to the inability to change an object after it's created. In JavaScript, while primitive values are immutable, objects and arrays are mutable by default. However, we can apply immutability patterns to these as well. Immutability can lead to more predictable code, but it also comes with trade-offs.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Example of immutability with objects
const originalObj = { x: 1, y: 2 };
const newObj = { ...originalObj, y: 3 }; // Create a new object instead of modifying

console.log(originalObj); // { x: 1, y: 2 }
console.log(newObj); // { x: 1, y: 3 }`,
      },
      {
        type: "text",
        content: "Pros of immutability:",
      },
      {
        type: "unordered-list",
        content:
          "Predictable behavior\nEasier debugging\nSafer in multi-threaded environments",
      },
      {
        type: "text",
        content: "Cons of immutability:",
      },
      {
        type: "unordered-list",
        content:
          "Can lead to higher memory usage\nMay require more complex code for deep updates\nPotential performance overhead for large data structures",
      },
    ],
  },
  {
    id: 3067,
    question: "What is Map()?",
    answer: [
      {
        type: "text",
        content:
          "Map() is a built-in JavaScript object that holds key-value pairs and remembers the original insertion order of the keys. It's similar to an object, but with some key differences. Maps allow keys of any type, including objects, and maintain key order. They also come with useful methods for manipulation and iteration.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const myMap = new Map();
  
myMap.set('key1', 'value1');
myMap.set(42, 'value2');
myMap.set({a: 1}, 'value3');

console.log(myMap.get('key1')); // value1
console.log(myMap.size); // 3

myMap.forEach((value, key) => {
  console.log(\`\${key} = \${value}\`);
});

// Outputs:
// key1 = value1
// 42 = value2
// [object Object] = value3`,
      },
    ],
  },
  {
    id: 3068,
    question: "What is Set()?",
    answer: [
      {
        type: "text",
        content:
          "Set() is a built-in JavaScript object that represents a collection of unique values. Each value can occur only once in a Set. It can hold any type of value, whether primitive or object references. Sets are particularly useful when you need to eliminate duplicate values from an array or when you want to maintain a collection of unique items.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const mySet = new Set([1, 2, 3, 4, 4, 5]);

console.log(mySet.size); // 5 (duplicate 4 is ignored)

mySet.add(6);
console.log(mySet.has(4)); // true

mySet.delete(2);

mySet.forEach(value => {
  console.log(value);
});

// Outputs: 1, 3, 4, 5, 6`,
      },
    ],
  },
  {
    id: 3069,
    question: "How to iterate over Maps and Sets?",
    answer: [
      {
        type: "text",
        content:
          "Maps and Sets in JavaScript provide several methods for iteration. These include built-in methods like forEach(), as well as compatibility with for...of loops. Additionally, both Map and Set objects have keys(), values(), and entries() methods that return iterable objects.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
const mySet = new Set([1, 2, 3, 4, 5]);

// Iterating over a Map
for (let [key, value] of myMap) {
  console.log(\`\${key} = \${value}\`);
}

// Iterating over a Set
mySet.forEach(value => {
  console.log(value);
});

// Using entries() for Map
for (let entry of myMap.entries()) {
  console.log(entry);
}

// Using values() for Set
for (let value of mySet.values()) {
  console.log(value);
}`,
      },
    ],
  },
  {
    id: 3070,
    question: "When do we use Map and Set?",
    answer: [
      {
        type: "text",
        content:
          "Map and Set are powerful data structures in JavaScript, each with its own use cases. Maps are ideal when you need a collection of key-value pairs with keys of any type, while Sets are perfect for maintaining a collection of unique values. Understanding when to use each can lead to more efficient and cleaner code.",
      },
      {
        type: "text",
        content: "Use Map when:",
      },
      {
        type: "unordered-list",
        content:
          "You need key-value pairs with keys of any type\nYou want to preserve the insertion order of elements\nYou need to frequently add or remove key-value pairs",
      },
      {
        type: "text",
        content: "Use Set when:",
      },
      {
        type: "unordered-list",
        content:
          "You need to store unique values of any type\nYou want to eliminate duplicates from an array\nYou need to check for the presence of an item quickly",
      },
    ],
  },
  {
    id: 3071,
    question: "What is DOM?",
    answer: [
      {
        type: "text",
        content:
          "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as {{a tree-like hierarchy of objects:keyword}} , allowing developers to dynamically access and manipulate the content, structure, and style of web pages. The DOM provides a way to interact with web documents using JavaScript, enabling dynamic updates to the page without requiring a full reload.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Accessing and modifying DOM elements
const heading = document.getElementById('main-heading');
heading.textContent = 'Updated Heading';
heading.style.color = 'blue';

// Creating and adding new elements
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.body.appendChild(newParagraph);`,
      },
    ],
  },
  {
    id: 3072,
    question: "What is event propagation and delegation?",
    answer: [
      {
        type: "text",
        content:
          "Event propagation is the process by which an event travels through the DOM tree. It involves three phases: capturing (from root to target), target (the element that triggered the event), and bubbling (from target back to root). Event delegation is a technique where a single event listener is attached to a parent element to handle events for its child elements, including those added dynamically. This approach can improve performance and simplify event management in complex applications.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Event delegation example
document.getElementById('parent-list').addEventListener('click', function(e) {
  if (e.target && e.target.nodeName === 'LI') {
    console.log('List item', e.target.id, 'was clicked');
  }
});`,
      },
    ],
  },
  {
    id: 3073,
    question: "How to control mouse right-click?",
    answer: [
      {
        type: "text",
        content:
          "To control the right-click action, you can listen for the 'contextmenu' event on the desired element or the entire document. By using event.preventDefault(), you can stop the default context menu from appearing, allowing you to implement custom behavior for right-clicks. This technique is often used to create custom context menus or to disable right-clicking on specific elements.",
      },
      {
        type: "code",
        language: "javascript",
        content: `document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert('Custom right-click action');
  // Implement your custom context menu or action here
});`,
      },
    ],
  },
  {
    id: 3074,
    question: "How to make a checkbox ticked when clicking on a label?",
    answer: [
      {
        type: "text",
        content:
          "To make a checkbox ticked when clicking on its associated label, you need to properly link the label to the checkbox. This can be done by using the 'for' attribute in the label element, which should match the 'id' attribute of the checkbox input. When set up correctly, clicking the label will toggle the checkbox state, improving usability and accessibility of your forms.",
      },
      {
        type: "code",
        language: "html",
        content: `<input type="checkbox" id="myCheckbox">
<label for="myCheckbox">Click me to toggle the checkbox</label>`,
      },
    ],
  },
  {
    id: 3075,
    question:
      "What is the difference between event bubbling and event capturing?",
    answer: [
      {
        type: "text",
        content:
          "Event bubbling and event capturing are two phases of event propagation in the DOM. In event bubbling, the event starts from the target element and bubbles up through its ancestors to the root of the DOM tree. Event capturing, on the other hand, is the opposite - the event starts at the root and travels down to the target element. By default, most event handlers are set to use the bubbling phase, but you can specify the use of the capturing phase when adding event listeners.",
      },
      {
        type: "text",
        content: "Key differences:",
      },
      {
        type: "unordered-list",
        content:
          "Bubbling goes from target to root, capturing goes from root to target\nBubbling is the default behavior for most events\nCapturing allows parent elements to handle events before child elements\nYou can use the 'useCapture' parameter in addEventListener to switch between bubbling and capturing",
      },
    ],
  },
  {
    id: 3076,
    question:
      "What is the difference between node.nextSibling and ChildNode.nextElementSibling?",
    answer: [
      {
        type: "text",
        content:
          "node.nextSibling and ChildNode.nextElementSibling are both properties used to navigate between nodes in the DOM, but they serve different purposes. node.nextSibling returns the next node in the same tree level, regardless of its type. This could be an element node, text node, or comment node. ChildNode.nextElementSibling, on the other hand, specifically returns the next element node, skipping over any non-element nodes.",
      },
      {
        type: "code",
        language: "html",
        content: `<div id="parent">
  <p id="first">First paragraph</p>
  <!-- Comment -->
  <p id="second">Second paragraph</p>
</div>

<script>
const firstP = document.getElementById('first');
console.log(firstP.nextSibling); // Comment node
console.log(firstP.nextElementSibling); // <p id="second">
</script>`,
      },
    ],
  },
  {
    id: 3077,
    question: "What is a NodeList?",
    answer: [
      {
        type: "text",
        content:
          "A NodeList is a collection of nodes returned by certain DOM methods, such as document.querySelectorAll() or Node.childNodes. It's similar to an array but is not an actual Array object. NodeLists can be either live or static, depending on how they were created. Live NodeLists automatically update when the DOM changes, while static NodeLists represent a snapshot of the DOM at the time they were created.",
      },
      {
        type: "text",
        content: "Key characteristics of NodeLists:",
      },
      {
        type: "unordered-list",
        content:
          "Can be iterated using forEach() or for...of loops\nHas a length property\nCan be converted to an array using Array.from() or spread operator\nSome NodeLists are live (e.g., Node.childNodes), while others are static (e.g., document.querySelectorAll())",
      },
    ],
  },
  {
    id: 3078,
    question: "How to rotate an element 90 degrees?",
    answer: [
      {
        type: "text",
        content:
          "To rotate an HTML element by 90 degrees, you can use {{CSS transforms.:keyword}} This can be done either by setting the CSS property directly in your stylesheet or by manipulating the element's style property using JavaScript. The transform property allows you to apply various transformations to elements, including rotation, scaling, and translation.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Using JavaScript to rotate an element
const element = document.getElementById('myElement');
element.style.transform = 'rotate(90deg)';`,
      },
      {
        type: "code",
        language: "css",
        content: `/* Using CSS to rotate an element */
#myElement {
  transform: rotate(90deg);
}`,
      },
    ],
  },

  {
    id: 3079,
    question: "When would you use document.write()?",
    answer: [
      {
        type: "text",
        content:
          "The use of document.write() is generally discouraged in modern web development due to its potential to interfere with the loading and rendering of web pages. It can overwrite the entire document if called after the page has finished loading. However, there are a few specific scenarios where it might still be used, albeit rarely. These include writing to a newly opened blank document or for testing and debugging purposes in simple scripts.",
      },
      {
        type: "text",
        content: "Potential use cases (with caution):",
      },
      {
        type: "unordered-list",
        content:
          "Generating dynamic content during initial page load\nInserting external scripts when other methods are not available\nQuick testing or debugging in simple environments\nLegacy code maintenance where refactoring is not feasible",
      },
    ],
  },
  {
    id: 3080,
    question:
      "What is the difference between load event and DOMContentLoaded event?",
    answer: [
      {
        type: "text",
        content:
          "The 'load' and 'DOMContentLoaded' events represent different stages in the loading process of a web page. The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for external resources like stylesheets, images, and subframes to finish loading. This allows scripts to run earlier in the page load process. The load event, on the other hand, fires when the entire page and all dependent resources have finished loading, including all images, scripts, and stylesheets.",
      },
      {
        type: "code",
        language: "javascript",
        content: `document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  // Run scripts that don't need images or other external files
});

window.addEventListener('load', function() {
  console.log('Page fully loaded');
  // Run scripts that need images or other external files
});`,
      },
    ],
  },
  {
    id: 3081,
    question: "When do you use load event?",
    answer: [
      {
        type: "text",
        content:
          "The 'load' event is used when you want to ensure that the entire webpage, including all of its related resources such as images, stylesheets, and scripts, has fully loaded before running a particular script or function. This is particularly useful for tasks that depend on the complete rendering of the page or require access to external resources. Common use cases include initializing complex UI components, starting animations that involve images, or performing calculations that depend on fully loaded page elements.",
      },
      {
        type: "text",
        content: "Typical scenarios for using the load event:",
      },
      {
        type: "unordered-list",
        content:
          "Initializing image sliders or carousels\nStarting complex animations\nCalculating and adjusting layout based on fully rendered page elements\nLoading and initializing third-party libraries that depend on complete page load\nPerforming actions that require all images to be loaded and sized correctly",
      },
    ],
  },
  {
    id: 3082,
    question: "What is the difference between window and document?",
    answer: [
      {
        type: "text",
        content:
          "The 'window' and 'document' objects are two fundamental concepts in web development, each serving different purposes. The window object represents the browser window and is the global object in client-side JavaScript. It's the top-level object in the browser environment and contains properties and methods for controlling the browser window. The document object, on the other hand, is a property of the window object and represents the DOM (Document Object Model) of the webpage loaded in that window. It provides methods and properties for manipulating the content, structure, and style of the webpage.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Window object examples
console.log(window.innerHeight); // Height of the viewport
window.alert('Hello, world!'); // Shows an alert dialog

// Document object examples
const heading = document.getElementById('main-heading');
document.body.style.backgroundColor = 'lightblue';`,
      },
    ],
  },
  {
    id: 3083,
    question: "What are 4 ways to validate a form?",
    answer: [
      {
        type: "text",
        content:
          "Form validation is a crucial aspect of web development to ensure data integrity and improve user experience. There are several approaches to form validation, each with its own strengths and use cases. Here are four common ways to validate forms:",
      },
      {
        type: "unordered-list",
        content:
          "HTML5 built-in validation: Using attributes like 'required', 'pattern', 'min', 'max', etc.\nJavaScript validation: Custom client-side validation using JavaScript to check form fields before submission.\nServer-side validation: Validating data on the server after form submission for security and data integrity.\nThird-party libraries/frameworks: Using libraries like jQuery Validate or framework-specific solutions for more complex validation scenarios.",
      },
    ],
  },
  {
    id: 3084,
    question: "How to submit a form?",
    answer: [
      {
        type: "text",
        content:
          "Forms can be submitted in several ways, both through user interaction and programmatically. The most common method is using a submit button within the form, which triggers the form's submit event when clicked. Alternatively, forms can be submitted programmatically using JavaScript, which allows for more control over the submission process and enables additional validation or data processing before submission.",
      },
      {
        type: "code",
        language: "html",
        content: `<!-- HTML form with submit button -->
<form id="myForm">
  <input type="text" name="username">
  <button type="submit">Submit</button>
</form>`,
      },
      {
        type: "code",
        language: "javascript",
        content: `// JavaScript to submit form programmatically
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission
  // Perform validation or data processing here
  this.submit(); // Submit the form
});`,
      },
      {
        type: "text",
        content:
          "In React, you can use React Hook Form for form handling. Here's a quick example:",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Example using React Hook Form
import { useForm } from 'react-hook-form';

const MyForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} />
      <button type="submit">Submit</button>
    </form>
  );
}`,
      },
    ],
  },
  {
    id: 3085,
    question: "Where to hold form data in React and JavaScript?",
    answer: [
      {
        type: "text",
        content:
          "In React and JavaScript, there are different approaches to holding form data, depending on the complexity of the form and the requirements of the application. In React, form data is typically held in the component's state, allowing for controlled components where React manages the form data. In vanilla JavaScript, form data can be accessed directly from the DOM or stored in variables or objects for processing.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// React example
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ username: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </form>
  );
}

// Vanilla JavaScript example
const form = document.querySelector('form');
const formData = {};

form.addEventListener('input', (e) => {
  formData[e.target.name] = e.target.value;
});`,
      },
    ],
  },
  {
    id: 3086,
    question: "Does inputting data mutate component state?",
    answer: [
      {
        type: "text",
        content:
          "In React, inputting data does not directly mutate the component state. Instead, React follows a principle of immutability where state updates are managed through the setState function or the state updater function provided by useState hook. This approach allows React to efficiently manage and re-render components when the state changes, ensuring predictable behavior and optimizing performance.",
      },
      {
        type: "code",
        language: "javascript",
        content: `import React, { useState } from 'react';
  
const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value); // Updating state correctly
  };

  return <input value={inputValue} onChange={handleChange} />;
}`,
      },
    ],
  },
  {
    id: 3087,
    question: "What is AJAX? What are its advantages and disadvantages?",
    answer: [
      {
        type: "text",
        content:
          "AJAX (Asynchronous JavaScript and XML) is a set of web development techniques that allows web applications to {{send and receive data from a server asynchronously:keyword}} , without interfering with the display and behavior of the existing page. Despite its name, AJAX can use JSON, XML, HTML, and plain text formats for data exchange. It enables the creation of more dynamic and responsive web applications by updating parts of a web page without reloading the entire page.",
      },
      {
        type: "text",
        content: "Advantages of using AJAX include:",
      },
      {
        type: "unordered-list",
        content:
          "Improves user experience by allowing asynchronous updates\nReduces server load by eliminating full page reloads\nEnables creation of more interactive and responsive web applications",
      },
      {
        type: "text",
        content: "However, AJAX also has some disadvantages:",
      },
      {
        type: "unordered-list",
        content:
          "Can increase complexity in application design and debugging\nMay cause issues with browser history and bookmarking\nCan lead to increased number of requests to the server",
      },
    ],
  },

  {
    id: 3088,
    question: "Is JSONP considered AJAX?",
    answer: [
      {
        type: "text",
        content:
          "JSONP (JSON with Padding) is a technique used to bypass the same-origin policy in web browsers, allowing data to be retrieved from a server in a different domain. While JSONP serves a similar purpose to AJAX in enabling asynchronous data retrieval, {{it is not strictly considered AJAX:keyword}}. JSONP differs from traditional AJAX in its implementation and security implications.",
      },
      {
        type: "text",
        content: "Key differences:",
      },
      {
        type: "unordered-list",
        content:
          "JSONP uses <script> tags instead of XMLHttpRequest\n JSONP is limited to GET requests, while AJAX supports various HTTP methods\n JSONP can pose security risks if not implemented carefully\n AJAX uses XMLHttpRequest or Fetch API, providing more control and security",
      },
    ],
  },
  {
    id: 3089,
    question: "What HTTP request methods do you know?",
    answer: [
      {
        type: "text",
        content:
          "HTTP (Hypertext Transfer Protocol) defines a set of request methods to indicate the desired action to be performed for a given resource. These methods, also known as HTTP verbs, specify the type of operation to be carried out when making requests to a server. Understanding these methods is crucial for working with RESTful APIs and web services.",
      },
      {
        type: "text",
        content: "Common HTTP request methods:",
      },
      {
        type: "unordered-list",
        content:
          "GET: Retrieves data from a specified resource\n POST: Submits data to be processed to a specified resource\n PUT: Updates a specified resource with new data\n PATCH: Partially modifies a resource\n DELETE: Deletes a specified resource\n HEAD: Similar to GET but retrieves only headers, not the body\n OPTIONS: Returns information about the communication options available",
      },
    ],
  },
  {
    id: 3090,
    question: "What are some examples of HTTP response codes?",
    answer: [
      {
        type: "text",
        content:
          "HTTP response status codes indicate whether a specific HTTP request has been successfully completed. These codes are grouped into five classes, each serving a different purpose in communication between clients and servers. Understanding these codes is essential for debugging and handling various scenarios in web development.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Common HTTP status codes and their meanings
const statusCodes = {
  200: 'OK - The request was successful',
  201: 'Created - The request succeeded and a new resource was created',
  204: 'No Content - The server successfully processed the request, but is not returning any content',
  301: 'Moved Permanently - The URL of the requested resource has been changed permanently',
  400: 'Bad Request - The server could not understand the request due to invalid syntax',
  401: 'Unauthorized - The request requires user authentication',
  403: 'Forbidden - The client does not have access rights to the content',
  404: 'Not Found - The server can not find the requested resource',
  500: 'Internal Server Error - The server has encountered a situation it doesn't know how to handle'
};`,
      },
    ],
  },
  {
    id: 3091,
    question: "What is Fetch API?",
    answer: [
      {
        type: "text",
        content:
          "The Fetch API provides a powerful and flexible way to {{make network requests in web applications:keyword}}. It is a modern replacement for XMLHttpRequest, offering a more intuitive interface based on Promises. Fetch allows you to make asynchronous requests to servers, retrieve resources, and handle responses with ease. It is widely supported in modern browsers and has become the preferred method for making HTTP requests in JavaScript.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Basic usage of Fetch API
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));

// Using Fetch with async/await
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}`,
      },
    ],
  },
  {
    id: 3092,
    question:
      "Can you describe the structure of an AJAX response, including the status code, headers, and body?",
    answer: [
      {
        type: "text",
        content:
          "An AJAX response typically consists of three main components: the status code, headers, and body. The status code indicates the outcome of the request, headers provide metadata about the response, and the body contains the actual data returned by the server. Understanding this structure is crucial for properly handling and processing responses in AJAX applications.",
      },
      {
        type: "text",
        content: "Components of an AJAX response:",
      },
      {
        type: "unordered-list",
        content:
          "Status Code: A three-digit number indicating the result of the request (e.g., 200 for success, 404 for not found)\n Headers: Key-value pairs providing metadata about the response (e.g., Content-Type, Content-Length)\n Body: The actual content of the response, which can be in various formats like JSON, XML, or HTML",
      },
    ],
  },
  {
    id: 3093,
    question:
      "What is the difference between synchronous and asynchronous code?",
    answer: [
      {
        type: "text",
        content:
          "Synchronous and asynchronous code represent two different approaches to executing operations in programming. Synchronous code executes sequentially, with each statement waiting for the previous one to complete before running. Asynchronous code, on the other hand, allows operations to be initiated without waiting for previous operations to complete, enabling non-blocking execution. This distinction is particularly important in JavaScript, where asynchronous programming is commonly used for operations like network requests, file I/O, and timers.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Synchronous code example
console.log('Start');
const syncOperation = () => 'Sync result';
const result = syncOperation();
console.log(result);
console.log('End');z

// Asynchronous code example
console.log('Start');
const asyncOperation = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('Async result'), 1000);
  });

asyncOperation().then((result) => console.log(result));
console.log('End');`,
      },
    ],
  },
  {
    id: 3094,
    question:
      "Can you provide examples of asynchronous functions, and where do they come from?",
    answer: [
      {
        type: "text",
        content:
          "Asynchronous functions in JavaScript are operations that execute {{without blocking the main thread:keyword}}, allowing other code to continue running while they complete. These functions typically come from Web APIs provided by the browser environment or from Node.js in server-side environments. They are essential for handling time-consuming operations without freezing the user interface or blocking other processes.",
      },
      {
        type: "text",
        content: "Common asynchronous functions and their sources:",
      },
      {
        type: "unordered-list",
        content:
          "setTimeout and setInterval (Browser and Node.js timer APIs)\n fetch (Browser Fetch API for network requests)\n addEventListener (Browser DOM API for event handling)\n readFile and writeFile (Node.js File System module)\n Database queries in server-side frameworks\n Promises and async/await (JavaScript language features for managing asynchronous operations)",
      },
    ],
  },
  {
    id: 3095,
    question: "What are the call stack and the event loop?",
    answer: [
      {
        type: "text",
        content:
          "The call stack and the event loop are fundamental concepts in JavaScript's execution model. The call stack is a data structure that keeps track of function calls in the code. It operates on a last-in, first-out basis, pushing function calls onto the stack as they occur and popping them off as they complete. The event loop, on the other hand, is a continuous process that checks if the call stack is empty and, if so, pushes callback functions from the task queue onto the call stack for execution. This mechanism allows JavaScript to handle asynchronous operations efficiently.",
      },
      {
        type: "text",
        content:
          "The process of how the event loop and call stack work together in the browser can be broken down into the following steps:",
      },
      {
        type: "ordered-list",
        content:
          "A function is called, and it gets pushed onto the call stack.\nThe JavaScript engine executes the function on the top of the call stack.\nIf the function makes a call to an asynchronous API (e.g., setTimeout, fetch), the callback is sent to the task queue after the asynchronous operation completes.\nThe function completes its execution and is popped off the call stack.\nThe event loop checks if the call stack is empty. If it is, it moves the first callback from the task queue to the call stack.\nThe callback function from the task queue is executed on the call stack.\nThis process repeats, allowing JavaScript to handle both synchronous and asynchronous operations efficiently.",
      },
    ],
  },
  {
    id: 3096,
    question: "What is a callback function?",
    answer: [
      {
        type: "text",
        content:
          "A callback function is a {{function passed into another function as an argument:keyword}}, which is then invoked inside the outer function to complete some kind of routine or action. Callbacks are a fundamental concept in JavaScript, especially in asynchronous programming, where they allow you to specify what should happen after a certain operation completes. They are widely used in event handling, AJAX requests, and when working with APIs that involve asynchronous operations.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const fetchData = (callback) => {
  setTimeout(() => {
    const data = { id: 1, name: 'John Doe' };
    callback(data);
  }, 1000);
};

const processData = (data) => {
  console.log('Processed:', data);
};

fetchData(processData);
// After 1 second: Processed: { id: 1, name: 'John Doe' }`,
      },
    ],
  },
  {
    id: 3097,
    question: "Why do we use callback functions?",
    answer: [
      {
        type: "text",
        content:
          "Callback functions are used primarily to handle asynchronous operations in JavaScript. They allow us to specify what should happen after an asynchronous task completes, ensuring that code execution continues without blocking. Callbacks are essential for maintaining the non-blocking nature of JavaScript, especially in scenarios involving I/O operations, network requests, or time-delayed actions. They enable more flexible and efficient code execution by allowing the program to continue running while waiting for long-running operations to complete.",
      },
      {
        type: "text",
        content: "Key reasons for using callbacks:",
      },
      {
        type: "unordered-list",
        content:
          "Handling asynchronous operations\n Implementing event-driven programming\n Customizing behavior of higher-order functions\n Enabling code reusability and modularity\n Managing control flow in complex asynchronous scenarios",
      },
    ],
  },
  {
    id: 3098,
    question: "What is callback hell?",
    answer: [
      {
        type: "text",
        content:
          "Callback hell, also known as the 'Pyramid of Doom,' refers to a situation in asynchronous programming where multiple nested callbacks make the code difficult to read, understand, and maintain. This occurs when there are many dependent asynchronous operations that need to be executed in a specific order. The resulting code structure resembles a pyramid due to excessive indentation, leading to reduced code readability and increased complexity in error handling and flow control.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Example of callback hell
getData((a) => {
  getMoreData(a, (b) => {
    getMoreData(b, (c) => {
      getMoreData(c, (d) => {
        getMoreData(d, (e) => {
          console.log(e);
        });
      });
    });
  });
});

// Improved version using async/await
const getData = async () => {
  const a = await fetchData();
  const b = await fetchMoreData(a);
  const c = await fetchMoreData(b);
  const d = await fetchMoreData(c);
  const e = await fetchMoreData(d);
  console.log(e);
};`,
      },
    ],
  },
  {
    id: 3099,
    question: "What is a promise?",
    answer: [
      {
        type: "text",
        content:
          "A Promise in JavaScript is an object representing {{the eventual completion or failure of an asynchronous operation.:keyword}} It provides a way to handle asynchronous operations more elegantly than traditional callback-based approaches. A Promise can be in one of three states: pending, fulfilled, or rejected. Promises allow you to attach callbacks to handle the success or failure of an asynchronous operation, making it easier to manage and reason about asynchronous code.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve('Success!');
    } else {
      reject('Failed!');
    }
  }, 1000);
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));`,
      },
    ],
  },
  {
    id: 3100,
    question: "What are then(), catch(), and finally() methods in promises?",
    answer: [
      {
        type: "text",
        content: "In JavaScript Promises, then(), catch(), and finally() are methods used to handle the results of asynchronous operations. Here's an explanation of each:"
      },
      {
        type: "unordered-list",
        content: "then(): This method is invoked when a promise is fulfilled (resolved successfully). It takes up to two arguments: a callback function for the success case, and optionally, a callback function for the failure case.\ncatch(): This method is used to handle rejected promises. It's invoked when a promise is rejected or when any error occurs in the promise chain. It's essentially a shorthand for then(null, errorHandlingFunction).\nfinally(): This method is called when the promise is settled, regardless of whether it was fulfilled or rejected. It's useful for performing cleanup operations that need to happen in either case."
      },
      {
        type: "text",
        content: "These methods can be chained together to create a sequence of asynchronous operations and handle both successful results and errors effectively."
      },
      {
        type: "code",
        language: "javascript",
        content: `fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    .finally(() => console.log('Operation completed'));`
      },
      {
        type: "text",
        content: "In this example, then() handles the successful fetch and JSON parsing, catch() handles any errors that occur, and finally() runs regardless of success or failure."
      }
    ]
  },
  {
    id: 3101,
    question: "What is promise polyfill?",
    answer: [
      {
        type: "text",
        content:
          "A promise polyfill is a piece of code that provides Promise functionality in JavaScript environments that do not natively support it. It allows developers to use Promises in older browsers or environments that lack built-in Promise support. Polyfills essentially 'fill in' the missing functionality, ensuring consistent behavior across different platforms and versions.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Example of using a promise polyfill
if (!window.Promise) {
  window.Promise = MyCustomPromisePolyfill;
}

// Now you can use Promises, even in environments that don't support them natively
const myPromise = new Promise((resolve, reject) => {
  // Async operation here
});`,
      },
    ],
  },
  {
    id: 3102,
    question: "What is Promise.all?",
    answer: [
      {
        type: "text",
        content:
          "Promise.all is a method that takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input promises have fulfilled, or rejects if any of the input promises reject. It's particularly useful when you need to perform multiple asynchronous operations in parallel and wait for all of them to complete before proceeding.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, 'foo']
}).catch((error) => {
  console.error('One of the promises was rejected:', error);
});`,
      },
    ],
  },
  {
    id: 3103,
    question: "What is the purpose of design patterns in programming?",
    answer: [
      {
        type: "text",
        content:
          "Design patterns in programming are reusable solutions to common problems that occur in software design. They provide tested, proven development paradigms that can speed up the development process, improve code readability, and reduce the likelihood of issues in complex systems. Design patterns serve as blueprints that can be customized to solve recurring design problems in object-oriented software.",
      },
      {
        type: "text",
        content: "Key benefits of design patterns:",
      },
      {
        type: "unordered-list",
        content:
          "Promote code reusability and maintainability\n Provide a common vocabulary for developers\n Encapsulate best practices and lessons learned from experienced developers\n Help in creating more flexible and scalable software architectures\n Facilitate better communication among team members",
      },
    ],
  },
  {
    id: 3104,
    question: "Can you provide examples of design patterns and their benefits?",
    answer: [
      {
        type: "text",
        content:
          "Design patterns are categorized into creational, structural, and behavioral patterns, each serving different purposes in software design. Here are a few examples of commonly used design patterns and their benefits:",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Singleton Pattern
const ConfigManager = (() => {
  let instance;
  
  const createInstance = () => ({
    serverUrl: 'https://api.example.com',
    apiKey: 'abcdef123456'
  });
  
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Factory Pattern
const CarFactory = () => ({
  createCar: (type) => {
    let car;
    if (type === 'sedan') {
      car = new Sedan();
    } else if (type === 'suv') {
      car = new SUV();
    }
    return car;
  }
});

// Usage
const factory = CarFactory();
const myCar = factory.createCar('sedan');`,
      },
    ],
  },
  {
    "id": 3105,
    "question": "What is functional programming (FP)?",
    "answer": [
      {
        "type": "text",
        "content": "Functional programming (FP) is a way of writing software where you focus on  {{using functions to transform data:keyword}}. In FP, you avoid changing the data directly (no mutable state) and instead, work with data by applying functions that return new values. Functions in FP are 'pure,' meaning they always produce the same output for the same input and don't cause side effects like changing global variables or modifying input data."
      },
      {
        "type": "text",
        "content": "Key concepts of functional programming include:"
      },
      {
        "type": "unordered-list",
        "content": "Pure functions\nImmutability (data doesn't change)\nFunction composition (combining simple functions to build complex ones)\nHigher-order functions (functions that take other functions as arguments or return them)\nRecursion (repeating tasks by calling functions within themselves instead of using loops)\nDeclarative code (describing what to do, not how to do it)"
      },
      {
        "type": "text",
        "content": "Here's an example comparing FP with OOP:"
      },
      {
        "type": "code",
        "language": "javascript",
        "content": `// Functional Programming (FP)
const add = (a, b) => a + b;
const square = (x) => x * x;
const sumOfSquares = (a, b) => square(add(a, b));

console.log(sumOfSquares(2, 3)); // 25

// Object-Oriented Programming (OOP)
class Calculator {
  add(a, b) {
    return a + b;
  }
  
  square(x) {
    return x * x;
  }
  
  sumOfSquares(a, b) {
    return this.square(this.add(a, b));
  }
}

const calc = new Calculator();
console.log(calc.sumOfSquares(2, 3)); // 25`
      }
    ]
  },  
  {
    id: 3106,
    question: "What is a higher-order function?",
    answer: [
      {
        "type": "text",
        "content": "A higher-order function is a function that can either {{take other functions as arguments, return a function, or do both.:keyword}} This is a key concept in functional programming, allowing for more flexible and reusable code. Higher-order functions enable powerful abstractions, leading to more concise and expressive code."
      },
      {
        type: "code",
        language: "javascript",
        content: `// Example of a higher-order function
const multiplyBy = (factor) => (number) => number * factor;

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Array methods as higher-order functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]`,
      },
    ],
  },
  {
    id: 3107,
    question:
      "What does it mean that JavaScript functions are first-class objects?",
    answer: [
      {
        type: "text",
        content:
          "In JavaScript, functions being first-class objects means that they {{can be treated like any other value:keyword}} in the language. This characteristic allows functions to be assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures. This flexibility is a key feature of JavaScript and enables powerful programming paradigms like functional programming.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Assigning a function to a variable
const greet = (name) => \`Hello, \${name}!\`;

// Passing a function as an argument
const executeFunction = (func, arg) => func(arg);
console.log(executeFunction(greet, 'Alice')); // Hello, Alice!

// Returning a function from another function
const multiplier = (factor) => (number) => number * factor;
const double = multiplier(2);
console.log(double(5)); // 10`,
      },
    ],
  },
  {
    id: 3108,
    question: "What is a pure function?",
    answer: [
      {
        type: "text",
        content:
          "A pure function is a function that, given the same input, {{will always return the same output and has no side effects:keyword}}. This means it doesn't modify any external state or data outside its scope. Pure functions are a fundamental concept in functional programming and offer several benefits, including predictability, testability, and easier debugging.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Pure function example
const add = (a, b) => a + b;
console.log(add(2, 3)); // Always returns 5

// Impure function example (for contrast)
let total = 0;
const addToTotal = (value) => {
  total += value; // Modifies external state
  return total;
};

console.log(addToTotal(5)); // Returns 5
console.log(addToTotal(5)); // Returns 10 (state has changed)`,
      },
    ],
  },
  {
    id: 3109,
    question: "What is composing?",
    answer: [
      {
        type: "text",
        content:
          "Composing, in the context of functional programming, refers to the process of {{combining two or more functions to create a new function.:keyword}} This technique allows for building complex operations from simpler ones, promoting code reuse and modularity. Function composition is often achieved using higher-order functions and is a key concept in creating more abstract and flexible code structures.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Simple function composition
const double = x => x * 2;
const increment = x => x + 1;

const doubleAndIncrement = x => increment(double(x));

console.log(doubleAndIncrement(5)); // 11

// Using a compose utility function
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const doubleIncrementSquare = compose(
  x => x * x,
  increment,
  double
);

console.log(doubleIncrementSquare(5)); // 121`,
      },
    ],
  },
  {
    id: 3110,
    question: "What is the definition and purpose of closures?",
    answer: [
      {
        type: "text",
        content:
          "A closure is a {{function bundled together with its lexical environment.:keyword}}, allowing it to access variables from its outer scope even after the outer function has returned. Closures are created every time a function is created, at function creation time. They serve several purposes in JavaScript, including data privacy, function factories, and maintaining state in asynchronous operations.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const createCounter = () => {
  let count = 0;
  return () => ++count;
};

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// The inner function maintains access to 'count'
// even after createCounter has finished executing`,
      },
    ],
  },
  {
    id: 3111,
    question: "What are the meanings of Map, Filter, Reject?",
    answer: [
      {
        type: "text",
        content:
          "Map, Filter, and Reject are higher-order functions commonly used in functional programming for data transformation and selection. Map creates a new array by applying a function to every element of the original array. Filter creates a new array with elements that pass a specific test. Reject is similar to Filter but creates a new array with elements that fail the test.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const numbers = [1, 2, 3, 4, 5];
  
// Map
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]

// Reject (using filter for the opposite condition)
const odds = numbers.filter(x => x % 2 !== 0);
console.log(odds); // [1, 3, 5]`,
      },
    ],
  },
  {
    id: 3112,
    question: "What does it mean when a function is idempotent?",
    answer: [
      {
        type: "text",
        content:
          "An idempotent function is one that, when applied multiple times with the same input, always produces the same result. In other words, applying the function again to its own result doesn't change the output. Idempotency is an important concept in various areas of programming, including functional programming and RESTful API design. It ensures predictability and stability in operations, especially when they might be repeated.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Idempotent function example
const absoluteValue = (x) => Math.abs(x);

console.log(absoluteValue(-5)); // 5
console.log(absoluteValue(absoluteValue(-5))); // 5
console.log(absoluteValue(absoluteValue(absoluteValue(-5)))); // 5

// Non-idempotent function for contrast
const addRandom = (x) => x + Math.random();

let value = 10;
value = addRandom(value); // Result changes each time
value = addRandom(value); // Different result`,
      },
    ],
  },
  {
    id: 3113,
    question: "What is currying?",
    answer: [
      {
        type: "text",
        content:
          "Currying is a technique in functional programming where a function with multiple arguments is transformed into a {{sequence of functions:keyword}}, each taking a single argument. This process allows for partial application of a function's arguments, creating new functions with some arguments pre-set. Currying can lead to more flexible and reusable code, especially in scenarios where you want to create specialized versions of more general functions.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Regular function
const add = (a, b, c) => a + b + c;

// Curried version
const curriedAdd = (a) => (b) => (c) => a + b + c;

console.log(add(1, 2, 3)); // 6
console.log(curriedAdd(1)(2)(3)); // 6

// Partial application
const addFive = curriedAdd(5);
const addFiveAndTen = addFive(10);
console.log(addFiveAndTen(15)); // 30`,
      },
    ],
  },
  {
    id: 3114,
    question:
      "What are the differences between cookies, sessionStorage, and localStorage?",
    answer: [
      {
        type: "text",
        content:
          "Cookies, sessionStorage, and localStorage are all web storage options, but they differ in several key aspects including capacity, lifespan, and how they interact with the server. Cookies are primarily used for server-side reading, while sessionStorage and localStorage are designed for client-side storage with larger capacities. Understanding these differences is crucial for choosing the appropriate storage method for different use cases in web development.",
      },
      {
        type: "text",
        content: "Key differences:",
      },
      {
        type: "unordered-list",
        content:
          "Cookies: Small (~4KB), sent with HTTP requests, can be accessed server-side, typically used for session management and tracking\n sessionStorage: Larger (~5MB+), data persists for the duration of the browser session, cleared when the tab is closed\n localStorage: Larger (~5MB+), data persists even when the browser is closed, remains until explicitly cleared",
      },
    ],
  },
  {
    id: 3115,
    question: "What types of loops are available in JavaScript?",
    answer: [
      {
        type: "text",
        content:
          "JavaScript provides several types of loops, each suited for different scenarios. Understanding these loop types is crucial for efficient programming and handling various data structures. The main types of loops in JavaScript include for, while, do...while, for...in, and for...of loops. Each type has its own use cases and syntax.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// do...while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// for...in loop (for object properties)
const obj = { a: 1, b: 2, c: 3 };
for (const prop in obj) {
  console.log(\`\${prop}: \${obj[prop]}\`);
}

// for...of loop (for iterable objects)
const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
  console.log(value);
}`,
      },
      {
        type: "text",
        content: "When to use each type of loop:",
      },
      {
        type: "unordered-list",
        content:
          "for loop is typically used when the number of iterations is known\n while and do...while loops are used when the number of iterations is unknown\n for...in loop is used to iterate over enumerable properties of an object\n for...of loop is used to iterate over values in iterable objects like arrays, strings, etc.",
      },
    ],
  },
  {
    id: 3116,
    question: "How to iterate over object properties?",
    answer: [
      {
        type: "text",
        content:
          "Iterating over object properties is a common task in JavaScript. There are several methods to achieve this, each with its own use cases and advantages. The most common approaches include using a for...in loop or leveraging Object methods like Object.keys(), Object.values(), or Object.entries().",
      },
      {
        type: "code",
        language: "javascript",
        content: `const obj = { a: 1, b: 2, c: 3 };
  
// Using for...in loop
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(\`\${key}: \${obj[key]}\`);
  }
}

// Using Object.entries()
Object.entries(obj).forEach(([key, value]) => {
  console.log(\`\${key}: \${value}\`);
});

// Using Object.keys()
Object.keys(obj).forEach(key => {
  console.log(\`\${key}: \${obj[key]}\`);
});`,
      },
    ],
  },
  {
    id: 3117,
    question: "How to iterate over collections?",
    answer: [
      {
        type: "text",
        content:
          "Iterating over collections in JavaScript typically involves using the for...of loop, which is designed to work with iterable objects. This includes arrays, strings, maps, sets, and other iterable data structures. The for...of loop provides a clean and concise way to iterate over the values of a collection without needing to manage an index or use a callback function.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Iterating over an array
const array = [1, 2, 3, 4, 5];
for (const value of array) {
  console.log(value);
}

// Iterating over a string
const str = 'Hello';
for (const char of str) {
  console.log(char);
}

// Iterating over a Map
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const [key, value] of map) {
  console.log(\`\${key}: \${value}\`);
}`,
      },
    ],
  },
  {
    id: 3118,
    question: "How to iterate over a NodeList?",
    answer: [
      {
        type: "text",
        content:
          "Iterating over a NodeList, which is a collection of nodes in the DOM, can be done in several ways. While NodeList is array-like, it doesn't have all the array methods available. Common approaches include using a for loop, converting the NodeList to an array, or using the forEach method (which is available on NodeList in modern browsers).",
      },
      {
        type: "code",
        language: "javascript",
        content: `const nodeList = document.querySelectorAll('.my-class');
  
// Using for loop
for (let i = 0; i < nodeList.length; i++) {
  console.log(nodeList[i]);
}

// Using Array.from and forEach
Array.from(nodeList).forEach(node => {
  console.log(node);
});

// Using spread operator and forEach
[...nodeList].forEach(node => {
  console.log(node);
});

// Using NodeList.forEach (modern browsers)
nodeList.forEach(node => {
  console.log(node);
});`,
      },
    ],
  },
  {
    id: 3119,
    question: "How to iterate over arrays?",
    answer: [
      {
        type: "text",
        content:
          "Arrays in JavaScript can be iterated over using various methods, each with its own advantages and use cases. Common approaches include using for loops, while loops, and array methods like forEach, map, and for...of loops. The choice of method often depends on the specific requirements of your task, such as whether you need to modify the array, create a new array, or simply perform an action for each element.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const array = [1, 2, 3, 4, 5];
  
// Using for loop
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Using forEach method
array.forEach(item => console.log(item));

// Using for...of loop
for (const item of array) {
  console.log(item);
}

// Using map (creates a new array)
const doubled = array.map(item => item * 2);
console.log(doubled);

// Using every (stops if the condition is not met)
const allPositive = array.every(item => item > 0);
console.log(allPositive);`,
      },
    ],
  },
  {
    id: 3120,
    question: "What are generators?",
    answer: [
      {
        type: "text",
        content:
          "Generators are special functions in JavaScript that can be paused and resumed, allowing for the generation of a sequence of values over time. They are defined using the function* syntax and use the yield keyword to specify the values to be generated. Generators provide a powerful way to work with iterables and can be particularly useful for handling asynchronous operations or creating infinite sequences.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const numberGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
};

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done);  // true

// Infinite sequence generator
const infiniteSequence = function* () {
  let i = 0;
  while (true) {
    yield i++;
  }
};

const numbers = infiniteSequence();
console.log(numbers.next().value); // 0
console.log(numbers.next().value); // 1
// This can continue indefinitely`,
      },
    ],
  },
  {
    id: 3121,
    question: "What is destructuring?",
    answer: [
      {
        type: "text",
        content:
          "Destructuring is a convenient way of extracting multiple values from data stored in objects or arrays. It allows you to unpack values from arrays, or properties from objects, into distinct variables. This feature, introduced in ES6, can lead to more concise and readable code, especially when dealing with complex data structures or function parameters.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Array destructuring
const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// Object destructuring
const { name, age } = { name: 'Alice', age: 30 };
console.log(name); // 'Alice'
console.log(age);  // 30

// Function parameter destructuring
const printPerson = ({ name, age }) => {
  console.log(\`\${name} is \${age} years old\`);
};
printPerson({ name: 'Bob', age: 25 }); // 'Bob is 25 years old'

// Nested destructuring
const { address: { city } } = { address: { city: 'New York' } };
console.log(city); // 'New York'`,
      },
      {
        type: "text",
        content:
          "In React, destructuring props is a common pattern that allows you to extract values from the props object directly in the function signature. This makes the code cleaner and easier to read, especially when dealing with multiple props.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// React component with destructured props
const Greeting = ({ name, age }) => (
  <div>
    <h1>Hello, {name}!</h1>
    <p>You are {age} years old.</p>
  </div>
);

// Usage example
<Greeting name="Alice" age={30} />`,
      },
    ],
  },
  {
    id: 3122,
    question: "How to share code between files?",
    answer: [
      {
        type: "text",
        content:
          "Sharing code between files in JavaScript is typically done using modules. The ES6 module system, with its import and export statements, provides a standardized way to encapsulate and share code across different files. This approach promotes modularity, reusability, and better organization of code. Other methods like CommonJS (used in Node.js) also exist for sharing code between files.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// In math.js
export const add = (a, b) => a + b;

export const PI = 3.14159;

// In main.js
import { add, PI } from './math.js';

console.log(add(2, 3));  // 5
console.log(PI);         // 3.14159

// Default export
// In greet.js
const greet = (name) => \`Hello, \${name}!\`;
export default greet;

// In main.js
import greet from './greet.js';
console.log(greet('Alice')); // 'Hello, Alice!'`,
      },
    ],
  },
  {
    id: 3123,
    question: "How do you organize your code?",
    answer: [
      {
        type: "text",
        content:
          "Organizing code effectively is crucial for maintaining large codebases and ensuring code readability and maintainability. While there are various approaches to code organization, some common strategies include using modules, following design patterns, and adhering to principles of separation of concerns. The specific approach often depends on the project's requirements, team preferences, and the frameworks or libraries being used.",
      },
      {
        type: "text",
        content: "Key strategies for code organization:",
      },
      {
        type: "unordered-list",
        content:
          "Use ES6 modules to separate code into logical files\n Implement design patterns like Module Pattern or Factory Pattern when appropriate\n Keep functions and components small and focused on a single responsibility\n Use meaningful file and folder structures\n Implement consistent naming conventions\n Write clear, descriptive comments and documentation\n Use version control systems effectively",
      },
    ],
  },  
  {
    id: 3124,
    question: "What are modules?",
    answer: [
      {
        type: "text",
        content:
          "Modules in JavaScript are a way to organize code into {{separate, reusable pieces:keyword}}. They allow you to encapsulate related code, data, and functionality into a single unit that can be easily imported and used in other parts of an application. Modules help in managing dependencies, avoiding naming conflicts, and improving code structure and maintainability.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// math.js module
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// main.js
import { add, multiply } from './math.js';

console.log(add(2, 3));      // 5
console.log(multiply(2, 3)); // 6

// Another way to import
import * as math from './math.js';
console.log(math.add(2, 3));      // 5
console.log(math.multiply(2, 3)); // 6`,
      },
    ],
  },
  {
    id: 3125,
    question: "What are some examples of ways to refactor code?",
    answer: [
      {
        type: "text",
        content:
          "Refactoring code is the process of restructuring existing code without changing its external behavior. The goal is to improve code quality, readability, and maintainability. There are numerous techniques for refactoring, each addressing different aspects of code improvement. Some common refactoring techniques include extracting methods, renaming variables for clarity, and applying design patterns.",
      },
      {
        type: "text",
        content: "Common refactoring techniques:",
      },
      {
        type: "unordered-list",
        content:
          "Extract Method: Break down large methods into smaller, more manageable pieces\n Rename Variables: Use clear, descriptive names for variables and functions\n Remove Duplicate Code: Identify and eliminate repeated code segments\n Simplify Conditional Expressions: Refactor complex if-else statements or switch cases\n Introduce Parameter Object: Replace a long list of parameters with a single object\n Replace Temp with Query: Replace temporary variables with method calls\n Encapsulate Field: Move public fields to private and provide accessor methods\n Replace Magic Numbers with Named Constants: Use constants for frequently used numeric or string values\n Apply Design Patterns: Implement appropriate design patterns to solve common problems",
      },
    ],
  },
  {
    id: 3126,
    question: "What is hoisting?",
    answer: [
      {
        type: "text",
        content:
          "Hoisting is a behavior in JavaScript where variable and function declarations are {{moved to the top of their respective scopes:keyword}} during the compilation phase, before the code is executed. This means that regardless of where variables and functions are declared in the code, they are treated as if they are declared at the beginning of their scope. However, only the declarations are hoisted, not the initializations.",
      },
      {
        type: "code",
        language: "javascript",
        content: `console.log(x); // undefined (not ReferenceError)
var x = 5;
console.log(x); // 5
  
// The above is interpreted as:
var x;
console.log(x); // undefined
x = 5;
console.log(x); // 5

// Function declarations are fully hoisted
sayHello(); // "Hello!"

const sayHello = () => {
  console.log("Hello!");
};

// But function expressions are not
// sayHi(); // TypeError: sayHi is not a function

const sayHi = () => {
  console.log("Hi!");
};`,
      },
    ],
  },
  {
    id: 3127,
    question: "What is strict mode?",
    answer: [
      {
        type: "text",
        content:
          "Strict mode is a feature in JavaScript that enables a stricter parsing and error handling on the code at runtime. It is a way to opt in to a restricted variant of JavaScript that eliminates some JavaScript silent errors by changing them to throw errors. Strict mode also fixes mistakes that make it difficult for JavaScript engines to perform optimizations.",
      },
      {
        type: "code",
        language: "javascript",
        content: `"use strict";
  
// Examples of strict mode behavior
x = 3.14; // This will cause an error because x is not declared

const strictFunc = () => {
  "use strict";
  const x = 3.14;
  delete x; // This will cause an error
};

const myFunction = (a, b, c) => { // Duplicate parameter name causes error in strict mode
  "use strict";
  return a + b + c;
};

const obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });
obj.x = 3.14; // This will cause an error in strict mode`,
      },
    ],
  },
  {
    id: 3128,
    question: "What is the difference between spread syntax and rest syntax?",
    answer: [
      {
        type: "text",
        content:
          "Spread syntax and rest syntax both use the ... notation in JavaScript, but they serve different purposes. Spread syntax is used to expand iterable objects into individual elements, while rest syntax is used to collect multiple elements into an array. Understanding the distinction between these two syntaxes is crucial for effective use of modern JavaScript features.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Spread syntax example
const numbers = [1, 2, 3];
console.log(...numbers); // Outputs: 1 2 3

const combined = [...numbers, 4, 5];
console.log(combined); // Outputs: [1, 2, 3, 4, 5]

// Rest syntax example
const sum = (...args) => args.reduce((total, num) => total + num, 0);

console.log(sum(1, 2, 3, 4)); // Outputs: 10
console.log(sum(5, 10, 15)); // Outputs: 30`,
      },
    ],
  }
];
