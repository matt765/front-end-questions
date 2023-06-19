export const javascriptQuestionsData = [
  // General
  {
    question: "What are the data types Javascript supports?",
    answer:
      "Primitive: Number, String, BigInt, Boolean, Undefined, Null, Symbol\nComplex: Objects (including Array, Map and Set)",
  },
  {
    question: "What do the break and the continue statements do?",
    answer:
      "The break statement stops the current loop and moves program-control to the line immediately following the loop.\nThe continue statement skips the rest of the loop statements and continues with the next iteration of the loop.",
  },
  {
    question: "What's the difference between var, const and let?",
    answer:
      "var is function-scoped, and if it is not defined inside a function, it is globally scoped. It can be redeclared and updated.\nlet is block-scoped, meaning its scope is limited to the block, statement, or expression in which it is defined. It can be updated but not redeclared.\nconst is also block-scoped, but it cannot be updated or redeclared.",
  },
  {
    question:
      "What's the difference between null, undefined, and undeclared, and how to check it?",
    answer:
      "undefined means a variable has been declared but has not yet been assigned a value.\nnull is an assignment value that represents no value or no object. It implies absence of value.\nundeclared means a variable has not been declared at all.\nYou can check these states using the typeof operator or by direct comparison (e.g., if (variable === undefined)).",
  },
  {
    question: "What's the difference between '==' and '==='?",
    answer:
      "== is the equality operator that performs type coercion if the types of two variables don't match.\n=== is the strict equality operator that does not perform type coercion. It returns true only if both the values and the types are the same.",
  },
  {
    question: "What is debounce and how could you implement debounce?",
    answer:
      "Debounce is a programming practice used to ensure that time-consuming tasks do not fire so often. This can be particularly useful for certain events like scrolling, resizing, keyup, keydown, mousemove, etc. In essence, debouncing means grouping multiple sequential calls into a single one.\nYou can implement a debounce function in JavaScript by using the setTimeout and clearTimeout functions.",
  },
  {
    question: "What is JSON and where do we use it?",
    answer:
      "JSON stands for JavaScript Object Notation. It's a lightweight data-interchange format that's easy to read and write for humans and easy to parse and generate for machines. It's used when data is sent from a server to a web page.",
  },
  {
    question: "What is variable scope?",
    answer:
      "The scope of a variable refers to the context in which the variable is declared. It determines the accessibility or visibility of variables, functions, and objects in some particular part of your code during runtime. In JavaScript, there are two types of scope: local and global.",
  },
  {
    question:
      "What's the difference between arrow functions and normal functions?",
    answer:
      "There are several differences, including syntax, the way they handle this, how they handle arguments, whether they can act as constructors, and their implicit return feature.",
  },
  {
    question: "What is a hashtable?",
    answer:
      "A hashtable is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hashtable uses a hash function to compute an index into an array of buckets or slots from which the desired value can be found.",
  },
  {
    question:
      "Can you name an example of a library for templating in JavaScript?",
    answer:
      "Handlebars and JSX are examples of templating libraries in JavaScript.",
  },
  {
    question:
      "Name 2 programming paradigms important for JavaScript app developers.",
    answer:
      "JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.",
  },
  {
    question: "List methods of file operations in a browser.",
    answer:
      "JavaScript in the browser does not have access to file operations for security reasons. However, you can interact with files via the FileReader API or the fetch API. Methods for handling files include open(), write(), and close(). These operations are primarily used in server-side JavaScript with Node.js.",
  },
  {
    question: "What is a ternary operator?",
    answer:
      "The ternary operator is a shortcut for the if statement. It is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.",
  },
  {
    question: "What are falsy values in JavaScript?",
    answer:
      "A falsy value is a value that is considered false when encountered in a Boolean context. JavaScript defines six falsy values: false, 0, '' (empty string), null, undefined, and NaN.",
  },
  {
    question: "What is a reference, and what type of data does it point to?",
    answer:
      "In JavaScript, a reference points to the location in memory of a complex data type like an object or array. When you assign a new variable to an object or array, you're actually assigning it a reference to that data, not the data itself.",
  },
  {
    question: "List some frameworks for unit testing in JavaScript.",
    answer:
      "Some popular JavaScript unit testing frameworks are Jest and Enzyme/React Testing Library.",
  },
  {
    question: "What is a barrel in ES6?",
    answer:
      "A barrel is a way to rollup exports from several modules into a single convenient module. The barrel itself is a module file that re-exports selected exports of other modules.",
  },
  {
    question: "Does Javascript pass parameters by value or by reference?",
    answer:
      "Primitive types (Number, String, Boolean, Null, Undefined, and Symbol) are passed by value, and Objects (including functions, arrays, etc.) are passed by reference.",
  },
  {
    question: "What is a linter?",
    answer:
      "A linter is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. In JavaScript, ESLint and JSHint are commonly used linters.",
  },
  {
    question: "What is a memory leak and how to prevent it?",
    answer:
      "A memory leak in JavaScript happens when unused memory is not released. It can lead to a sluggish user interface or even browser crashes. You can prevent memory leaks by nullifying references that are no longer needed, being careful with closures, and being mindful of detached DOM elements.",
  },
  {
    question: "What is a property descriptor?",
    answer:
      "A property descriptor is an object that describes the characteristics of a property. Property descriptors present in JavaScript include value, writable, get, set, configurable, and enumerable.",
  },
  {
    question: "What are AMD and CommonJS?",
    answer:
      "Both AMD (Asynchronous Module Definition) and CommonJS are formats for defining modules in JavaScript. However, they've been largely superseded by ES6 modules, which are natively supported by modern browsers.",
  },
  {
    question: "Explain the same-origin policy with regards to JavaScript.",
    answer:
      "The same-origin policy is a security measure implemented in web browsers to prevent interactions between resources from different origins. An origin is defined by the scheme (protocol), host (domain), and port. According to this policy, a web page's scripts can access data from another page, but only if both pages have the same origin.",
  },
  {
    question:
      "Why is it a good idea not to use the global scope in JavaScript?",
    answer:
      "Using global variables can lead to naming conflicts, especially in larger code bases and when integrating with third-party libraries. It's best practice to limit the scope of your variables as much as possible to prevent unintended side effects.",
  },
  {
    question:
      "What's the difference between identity (===) and equality (==) in JavaScript?",
    answer:
      "The identity operator (===) checks if the type and the value it's comparing are the same. The equality operator (==) checks if the values it's comparing are equal, and performs type coercion if the types are different.",
  },
  {
    question: "How can you simulate private variables in JavaScript?",
    answer:
      "JavaScript doesn't have a built-in concept of private variables, but they can be simulated using closures. You can create a function that returns another function or object with methods. The inner function or methods will have access to the outer function's variables, creating a 'private' scope.",
  },
  {
    question: "What are some asynchronous design patterns in JavaScript?",
    answer:
      "Callbacks, Promises, and Async/Await are all patterns used to handle asynchronous operations in JavaScript.",
  },
  {
    question: "What are Firebug and Firefox Developer Tools?",
    answer:
      "Firebug and Firefox Developer Tools are tools for inspecting and debugging HTML, CSS, and JavaScript in Firefox. They allow developers to inspect elements, modify styles and layout in real-time, debug JavaScript, and analyze network and performance.",
  },
  {
    question: "What's the difference between a shim and a polyfill?",
    answer:
      "A shim is a piece of code that takes a standardized API and implements it in an environment that doesn't provide it natively. A polyfill is a type of shim that retrofits older environments to support newer APIs.",
  },
  {
    question: "What are $$ methods?",
    answer:
      "In some JavaScript environments, $$ is used as a selector similar to jQuery's $. It's not part of the JavaScript specification, and it's generally considered bad practice to use it in production code.",
  },
  {
    question: "What are websockets?",
    answer:
      "Websockets provide a way for a persistent, bidirectional communication between the client and the server over a single long-lived connection. This makes it ideal for real-time data transfer.",
  },
  {
    question: "What does Babel do?",
    answer:
      "Babel is a JavaScript compiler that transforms newer versions of JavaScript (ES6+) into ES5 which is more compatible with older browsers.",
  },
  {
    question: "What is a linked list?",
    answer:
      "A linked list is a linear data structure similar to an array, but instead of each element being placed next to each other, each element consists of a value and a reference to the next element in the sequence. This makes it easier to insert or remove elements without having to reorganize the entire data structure, but it uses more memory than an array because of the storage used by their pointers.",
  },
  // Functions
  {
    question: "What is recursion?",
    answer:
      "Recursion in programming is a method where the solution to a problem depends on solutions to smaller instances of the same problem. In other words, a recursive function solves a problem by solving smaller versions of the same problem.",
  },
  {
    question: "What is an Immediately Invoked Function Expression (IIFE)?",
    answer:
      "An IIFE is a JavaScript function that runs as soon as it is defined. The syntax looks like this: (function(){})(). The function itself is enclosed within group operator (), creating a function expression, and then is immediately invoked with another pair of parentheses. IIFEs are often used to avoid polluting the global scope, especially in loops with var before ES6.",
  },
  {
    question: "What's the difference between .forEach() and .map()?",
    answer:
      "Both .forEach() and .map() are methods available on JavaScript arrays. .forEach() applies a given function on each item in the array and returns undefined. .map(), on the other hand, creates a new array with the results of calling a provided function on every element in the original array.",
  },
  {
    question: "What are typical uses of anonymous functions?",
    answer:
      "Anonymous functions are used where function names are not required. They are commonly used for functions that are used only once (like IIFEs), as arguments to other functions, in event handlers and listeners, and in closures.",
  },
  {
    question:
      "What's the difference between feature detection, feature inference, and using the user agent string?",
    answer:
      "Feature detection involves identifying whether a feature is available in a user's browser, leading to more robust code. Feature inference checks for a feature and uses another function based on the presence of that feature. Using the User Agent string is a less reliable technique that involves parsing the user agent string sent by the browser to the server to infer details about the browser and operating system.",
  },
  {
    question:
      "What's the difference between function Person(){}, var person = Person(), and var person = new Person()?",
    answer:
      "function Person(){} is a function declaration for Person. var person = Person() is calling the Person function and assigning the return value to person. If Person doesn't return anything, person will be undefined. var person = new Person() creates a new object instance of Person. Person is assumed to be a constructor function.",
  },
  {
    question:
      "What's the difference between a function declaration and a function expression?",
    answer:
      "A function declaration defines a named function. For example, function add(a, b) { return a + b; }. A function expression defines a function within an expression. They can be named or anonymous. A typical function expression looks like this: var add = function(a, b) { return a + b; }. Function expressions are not hoisted, unlike function declarations.",
  },
  // OOP
  {
    question:
      "Chapter 2 - OOP\nWhat is the difference between this in an arrow function and a normal function?",
    answer:
      "In a regular function, this refers to the object that is currently calling the function, which could be the global object or the object before the dot. In an arrow function, this is lexically bound, meaning it retains the value of this from its enclosing context.",
  },
  {
    question:
      "What is the difference between ES6 class and ES5 function constructors?",
    answer:
      "ES6 classes are essentially syntactic sugar over ES5 function constructors. ES6 introduces the class keyword for defining classes and constructor for defining the constructor function. In ES5, constructor functions are used to create new objects and methods are attached to the prototype property of the function constructor.",
  },
  {
    question: "How would you compare two objects in JavaScript?",
    answer:
      "You can compare objects using Object.keys() or Object.entries() and then iterating over them to compare properties. You could also use JSON.stringify() to convert both objects to strings and then compare the strings. Note that these methods can miss some nuances, like property order or the comparison of NaN values.",
  },
  {
    question: "How does this work in JavaScript?",
    answer:
      "The value of this is context-dependent. In a method, this refers to the object that is calling the method. In an event, this refers to the element that received the event. In a regular function, this refers to the global object. When a function is called as a method, this refers to the object the method is called on.",
  },
  {
    question: "How does prototypal inheritance work?",
    answer:
      "In JavaScript, prototypal inheritance refers to the process by which an object can gain the properties and methods of another object. This is achieved through the prototype chain. An object can refer to another object as its prototype, and it will inherit all its properties and methods.",
  },
  {
    question:
      "How is prototypal inheritance different from classical inheritance?",
    answer:
      "JavaScript doesn't have classical inheritance because JavaScript is prototype-based. Prototypal inheritance involves objects inheriting from objects. There's only one level of abstraction: objects. In classical inheritance, objects are instances of classes, and classes inherit from other classes.",
  },
  {
    question: "What's the difference between host objects and native objects?",
    answer:
      "Native objects are provided by the ECMAScript implementation, like Object, Date, Math, Array, String. Host objects are provided by the runtime environment (like a browser), such as window, document, XMLHttpRequest, setTimeout, querySelectorAll.",
  },
  {
    question: "What's the difference between .call(), .apply(), and .bind()?",
    answer:
      "call() and apply() are similar in that they both invoke a function directly with a given this value and arguments. The difference is that call() takes a list of parameters, while apply() takes an array of parameters. bind() creates a new function that, when invoked, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is invoked.",
  },
  {
    question: "How to change the context of this in a function?",
    answer:
      "The context of this in a function can be changed by using call(), apply(), or bind().",
  },
  {
    question: "How to clone an object in JavaScript?",
    answer:
      "Shallow clone can be achieved using the spread operator {...object} or Object.assign({}, source). Deep cloning can be done using JSON.parse(JSON.stringify(source)).",
  },
  {
    question: "What's the difference between a class and an object?",
    answer:
      "A class is a blueprint for creating objects. It's a definition of attributes and methods that the created objects can possess. An object is an instance of a class.",
  },
  {
    question: "What's the difference between mutable and immutable objects?",
    answer:
      "Mutable objects can have their properties changed after creation, while immutable objects cannot.",
  },
  {
    question: "Why might you want to create static class members?",
    answer:
      "Static class members are shared among all instances of a class and can be accessed without creating an instance of the class. They are useful when a value should be shared among all instances, rather than each instance having its own copy of the value.",
  },
  {
    question:
      "What are the pros and cons of extending built-in JavaScript objects?",
    answer:
      "Extending built-in JavaScript objects can lead to confusion and unexpected behaviors, especially when working with other developers who may not be aware of the extensions. However, it can provide convenient ways to add functionality.",
  },
  {
    question: "What are predefined objects?",
    answer:
      "Predefined objects in JavaScript are Array, Boolean, Date, Function, Math, Number, RegExp, String, etc.",
  },
  {
    question: "What are getters and setters?",
    answer:
      "Getters and setters are functions used to define object properties. A getter function is used to read the value of an attribute, and a setter function is used to change that value.",
  },
  {
    question: "What is an abstract class?",
    answer:
      "Abstract classes in JavaScript are base classes from which other classes may be derived. They may not be instantiated directly. Instead, they must be extended from another class.",
  },
  {
    question: "What do we mean by Object Oriented Programming (OOP)?",
    answer:
      "OOP is a programming paradigm that uses the concept of 'objects', which can contain data and code: data in the form of properties, and code in the form of methods.",
  },
  {
    question: "What is an object?",
    answer:
      "In JavaScript, an object is a standalone entity with properties and types. It's like a container that holds related data and functions.",
  },
  {
    question: "What is a class?",
    answer:
      "A class is a blueprint for creating objects. It provides initial values for state (member variables) and implementations of behavior (member functions, methods).",
  },
  {
    question: "What does the Object.create() and Object.assign() methods do?",
    answer:
      "Object.create(source) creates a new object, using an existing object as the prototype of the newly created object. Object.assign(target, ...sources) copies the values of all enumerable own properties from one or more source objects to a target object.",
  },
  {
    question: "What is the difference between a class and an object?",
    answer:
      "A class is a template for creating objects in JavaScript, providing initial values for state and implementations of behavior. An object, on the other hand, is an instance of a class.",
  },
  {
    question: "What is the difference between mutable and immutable objects?",
    answer:
      "Mutable objects are those whose state or content can be changed after they are created, while immutable objects are those that cannot be changed after they are created. In JavaScript, objects and arrays are mutable, while primitive values like strings, numbers, and booleans are immutable.",
  },
  {
    question: "Why might you want to create static class members?",
    answer:
      "Static class members are associated with the class itself, not instances of the class. They're useful when you need to maintain a value or state that is common to all instances of the class, rather than unique for each instance. An example could be a count of all instances created from a class.",
  },
  {
    question:
      "Can you provide examples, pros, and cons of applying immutability?",
    answer:
      "An example of immutability in JavaScript is when you use the const keyword to declare variables. The value of a variable declared with const can't be changed. This leads to safer code, as you can't inadvertently change the value. However, it also means that you need to be more careful when writing your code, as any attempt to change the value will throw an error.",
  },
  // Map & Set
  {
    question: "What is Map()?",
    answer:
      "Map is a built-in JavaScript object that can hold key-value pairs. Unlike regular objects, Maps allow keys of any data type and maintain the insertion order of their elements. You can use methods like set(key, value), get(key), and delete(key) to manipulate Maps.",
  },
  {
    question: "What is Set()?",
    answer:
      "Set is a built-in JavaScript object that represents a collection of unique values. Sets are typically used when you want to check for the presence of an item in a collection or to ensure that no duplicates are added to the collection. The key methods are add(value), delete(key), and clear().",
  },
  {
    question: "How to iterate over Maps and Sets?",
    answer:
      "Both Map and Set objects can be iterated over using various methods, including for...of loop, forEach(), keys(), values(), and entries().",
  },
  {
    question: "When do we use Map and Set?",
    answer:
      "A Map is useful when you need a collection of key-value pairs, and keys can be of any data type. They are particularly useful when the keys are unknown until runtime.\nA Set is used when you need a collection of unique values. This can be helpful for finding duplicate values in an array or for ensuring that no duplicate values are added to a collection.",
  },
  // DOM
  {
    question: "What is DOM?",
    answer:
      "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content and visual presentation of web pages.",
  },
  {
    question: "What is event propagation and delegation?",
    answer:
      "Event propagation is the process in which an event travels through the DOM's tree-like structure. It involves three phases: capturing, target, and bubbling. Event delegation is a technique where an event listener is added to a parent element instead of individual child elements. This is beneficial for performance, especially when dealing with dynamic content.",
  },
  {
    question: "How to control mouse right-click in JS?",
    answer:
      "You can control the right-click action by listening to the contextmenu event and using event.preventDefault() to stop the default context menu from appearing.",
  },
  {
    question: "How to make a checkbox ticked when clicking on a label?",
    answer:
      "By associating a label element with a checkbox input using the for attribute in the label and the id attribute in the checkbox, the checkbox will be checked or unchecked when the label is clicked.",
  },
  {
    question: "Difference: event bubbling and event capturing",
    answer:
      "These are the two phases of event propagation. In event bubbling, the event starts from the target element and bubbles up to the root of the DOM tree. Event capturing is the opposite - the event starts at the root and goes down to the target element.",
  },
  {
    question: "Difference: node.nextSibling and ChildNode.nextElementSibling",
    answer:
      "node.nextSibling returns the next node in the same tree level, regardless of its type (it could be an Element node, Text node, or Comment node). ChildNode.nextElementSibling, on the other hand, only refers to the next Element node.",
  },
  {
    question: "What is a NodeList?",
    answer:
      "A NodeList is a collection of nodes, usually returned by methods like Node.childNodes or document.querySelectorAll(). You can iterate over it using for...of or forEach.",
  },
  {
    question: "How to rotate an element 90 degrees?",
    answer:
      "You can rotate an HTML element by 90 degrees using CSS transform property: element.style.transform = 'rotate(90deg)';",
  },
  {
    question: "When would you use document.write()?",
    answer:
      "The document.write() method is generally not recommended because it can interfere with the loading of the webpage. However, it might be used for testing or for small scripts, like writing simple output to the HTML document.",
  },
  {
    question: "Difference: load event and DOMContentLoaded event",
    answer:
      "The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. The load event fires when the whole webpage, including its related resources like stylesheets and images, has been completely loaded.",
  },
  {
    question: "When do you use load event?",
    answer:
      "The load event is used when you want to ensure that the entire webpage, including all of its related resources, has fully loaded before running a script.",
  },
  {
    question: "What is the difference between window and document?",
    answer:
      "Window is the main JavaScript object root, which represents the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object. Document, on the other hand, is the main object of the Document Object Model (DOM), which can be manipulated to change the content and visual presentation of the webpage.",
  },
  // Forms
  {
    question: "4 ways to validate a form",
    answer:
      "1. Client-side validation: This includes using built-in HTML5 attributes (like required, pattern) and custom JavaScript or libraries (like jQuery Validation) to validate fields before form submission.\n2. Server-side validation: Even if the form passes client-side validation, server-side validation is necessary for security reasons. This involves validating the input data on the server after form submission.\n3. Using CSS: CSS pseudo-classes like :valid, :invalid, and :required can be used for styling based on the validity of form fields.\n4. JavaScript frameworks/libraries: Tools like React, Angular, or Vue.js often have their own methods for form validation.",
  },
  {
    question: "How to submit a form?",
    answer:
      "A form can be submitted by using a submit button (<input type='submit'> or <button type='submit'>). When clicked, this triggers a submit event on the form. Alternatively, you can use JavaScript to submit a form programmatically with formElement.submit().",
  },
  {
    question: "Where to hold form data in React and JavaScript?",
    answer:
      "In React, form data is usually held in the component's state. Each form field can have a piece of the state associated with it. As the user enters data, event handlers update the state.\nIn plain JavaScript, you can access form data through the DOM. You can get a reference to the form element and then access its value property.",
  },
  {
    question: "Does inputting data mutate component state?",
    answer:
      "In React, inputting data does not directly mutate the component state. Instead, you use the setState function to update the state. This allows React to efficiently manage and re-render the component when the state changes. Directly mutating the state is against React principles and can lead to unpredictable results.",
  },
  // AJAX
  {
    question: "What is AJAX? Advantages and disadvantages",
    answer:
      "AJAX stands for Asynchronous JavaScript and XML. It is a set of web technologies used to send and retrieve data from a server asynchronously, allowing web applications to update and display new data without a full page reload.\nAdvantages:\n- Improves user experience by allowing for asynchronous communication, reducing waiting times for users.\n- Reduces server load since complete page reloads are not necessary.\nDisadvantages:\n- It may increase complexity as managing asynchronous requests and responses can be harder than synchronous ones.\n- It can cause difficulties with browser history as AJAX pages dynamically change content without a page reload.",
  },
  {
    question: "Is JSONP Ajax?",
    answer:
      "JSONP, or JSON with Padding, is a method used to bypass the same-origin policy in web browsers. While it does use JavaScript and can be used for asynchronous data retrieval, it differs from traditional AJAX in that it doesn't use the XMLHttpRequest object. Instead, it injects a <script> tag into the HTML document which triggers a callback function when the data is loaded.",
  },
  {
    question: "What HTTP request methods do you know?",
    answer:
      "GET: Requests data from a specified resource.\nPOST: Sends data to a server to create a resource.\nPUT: Updates a current resource with new data.\nPATCH: Applies partial modifications to a resource.\nDELETE: Deletes a specified resource.",
  },
  {
    question: "Examples of HTTP response codes",
    answer:
      "200: OK – The request was successful.\n301: Moved Permanently – The URL of the requested resource has been permanently changed.\n404: Not Found – The server could not find the requested resource.\n500: Internal Server Error – An error occurred on the server.",
  },
  {
    question: "What is FetchAPI?",
    answer:
      "The Fetch API provides an interface for fetching resources. It is more powerful and flexible than XMLHttpRequest, providing a more efficient and robust means of making web requests. It returns a Promise that resolves to the Response object representing the response to the request.",
  },
  {
    question:
      "Can you describe the structure of an AJAX response, including the status code, headers, and body?",
    answer:
      "Status code: This is a three-digit number returned by the server indicating the status of the request. It tells whether the request was successful, or if it failed, why it failed. For instance, a status code of 200 means the request was successful, while a 404 status code means the requested resource was not found on the server.\nHeaders: These provide additional information about the response or the requested resource. They include fields such as Content-Type (which tells the type of the data), Content-Length (which indicates the size of the data), and Set-Cookie (used for storing stateful information), among others.\nBody: This is the actual content or data returned by the server as a result of the request. It could be the HTML of a web page, JSON data, an image, or any other type of data depending on the request.",
  },
  // Async
  {
    question:
      "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing. Asynchronous code doesn't have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time in situations where you can't predict the time taken to complete an operation.",
  },
  {
    question:
      "Can you provide examples of asynchronous functions, and where do they come from?",
    answer:
      "Functions such as setTimeout, setInterval, fetch, and addEventListener are examples of asynchronous functions. They are provided by the Web APIs that are available in the browser environment.",
  },
  {
    question: "What are the call stack and the event loop?",
    answer:
      "The call stack is a mechanism that JavaScript interpreters use to keep track of function calls and their execution contexts. The event loop is a continuous loop that checks if the call stack is empty. If it is, it takes the first task from the event queue and pushes it onto the call stack for execution.",
  },
  {
    question: "What is a callback function?",
    answer:
      "A callback function is a function that is passed into another function as an argument. It is invoked inside the outer function to complete some kind of routine or action.",
  },
  {
    question: "Why do we use callback functions?",
    answer:
      "Callback functions allow us to execute code after a certain operation has completed, hence making it possible to write asynchronous JavaScript code.",
  },
  {
    question: "What is callback hell?",
    answer:
      "Callback hell, also known as Pyramid of Doom, refers to heavily nested callbacks that make code hard to read and debug due to their non-linear, or 'pyramid' style indentation.",
  },
  {
    question: "What is a promise?",
    answer:
      "A Promise in JavaScript represents the eventual completion or failure of an asynchronous operation and its resulting value. It can be in one of three states: Pending, Resolved (Fulfilled), or Rejected.",
  },
  {
    question: "What are then(), catch(), and finally() methods in promises?",
    answer:
      "then() is invoked when a promise is either resolved or rejected. catch() is invoked when a promise is rejected, or when any error or exception is thrown in a then() closure. The finally() method is called when the promise is settled, whether fulfilled or rejected.",
  },
  {
    question: "What is promise polyfill?",
    answer:
      "A promise polyfill provides a substitute for Promise functionality in JavaScript environments that do not natively support it.",
  },
  {
    question: "What is Promise.all?",
    answer:
      "Promise.all is a method that takes an array of promises and returns a new promise that only fulfills when all the promises in the array have been fulfilled, or rejects as soon as one of them rejects.",
  },
  // Design patterns
  {
    question: "What is the purpose of design patterns in programming?",
    answer:
      "Design patterns are object-oriented solutions that address common programming problems, making code more manageable and scalable.",
  },
  {
    question: "Can you provide examples of design patterns and their benefits?",
    answer:
      "There are several design patterns, such as the Factory pattern, which creates and returns objects using a common interface. It helps make code easier to handle and allows for scalability. Another example is the Singleton pattern, which ensures that only one instance of an object is created from a constructor/class. This pattern is useful for scenarios like configuration objects or establishing connections with databases.\nAdditionally, the Strategy pattern defines a group of algorithms, each implemented in a separate class that shares a common interface. It enables the independent use of these algorithms in client classes, facilitating code maintenance and testing. This pattern involves utilizing different constructors within a single function using the 'new' keyword.",
  },
  // Functional programming
  {
    question: "What is functional programming (FP)?",
    answer:
      "Functional programming is a programming style that primarily utilizes pure functions, resulting in code that is easier to read, shorter, and scalable. It involves the nesting of functions, also known as 'composing.'",
  },
  {
    question: "What is a higher-order function?",
    answer:
      "A higher-order function is a function that can receive another function as a parameter.",
  },
  {
    question:
      "What does it mean that JavaScript functions are first-class objects?",
    answer:
      "JavaScript functions are treated as values, which means they can be stored in variables, objects, or arrays. They can also be passed as arguments to other functions or returned from a function.",
  },
  {
    question: "What is a pure function?",
    answer:
      "A pure function always produces the same output given the same input and does not modify anything outside of its own scope.",
  },
  {
    question: "What is composing?",
    answer:
      "Composing refers to the practice of nesting functions using higher-order functions. It allows for the creation of more complex functionality by combining smaller functions.",
  },
  {
    question: "What is the definition and purpose of closures?",
    answer:
      "A closure is a combination of a function and its surrounding environment. It allows a function to access variables and values from its outer scope even after the garbage collector removes them. Closures are commonly used when functions are nested within other functions. For example, the fetch() function utilizes closures as every function after .then() has access to the returned object.",
  },
  {
    question: "What are the meanings of Map, Filter, Reject?",
    answer:
      "Map: It creates a new array by executing a callback function on every element of the original array.\nFilter: It creates a new array with elements that pass a specific test defined by a callback function.\nReject: Similar to Filter, but it creates a new array with elements that fail the specific test defined by a callback function.",
  },
  {
    question: "What does it mean when a function is idempotent?",
    answer:
      "An idempotent function is one that consistently returns the same output when given the same input. It may have side effects, but its core behavior remains the same for identical inputs. Pure functions are inherently idempotent.",
  },
  {
    question: "What is currying?",
    answer:
      "Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each accepting a single argument. This technique simplifies code reuse and debugging, especially in scenarios like event handling.",
  },
  // Cookies & Storage
  {
    question:
      "What are the differences between cookies, sessionStorage, and localStorage?",
    answer:
      "Cookies are small pieces of data (limited to around 4KB in size) that are stored as text and sent with HTTP requests. They are primarily used for communication with servers and are typically managed as a single string that needs to be split.\n\nOn the other hand, sessionStorage and localStorage provide interfaces for storing data within the browser. They offer larger storage capacities (typically around 5MB or more) compared to cookies. Both sessionStorage and localStorage are key-value stores that allow developers to save data directly in the browser. The main distinction between them lies in their lifespan:\n\nsessionStorage: Data stored in sessionStorage is available only for the duration of the user's browsing session. Once the session ends (such as when the browser is closed), the data is cleared.\n\nlocalStorage: Data stored in localStorage persists even after the browser is closed and can be accessed in subsequent sessions. It remains stored until explicitly removed or cleared by the user or the application.\n\nOverall, cookies are primarily used for server communication, while sessionStorage and localStorage provide convenient storage options within the browser environment.",
  },
  // Loops & generators
  {
    question: "What loops do you know?",
    answer:
      "for loop: for (let i = 0; i < n; i++) {}\nwhile loop: while (condition) {}\nfor...in loop: for (const property in object) {} (iterates over enumerable properties of an object)\nfor...of loop: for (variable of iterable) (iterates over object values)",
  },
  {
    question: "How to iterate over object properties?",
    answer:
      "Using a for...in loop: for (const property in object) {}\nUsing Object.entries(source).map(() => {}) or Object.keys(source).map(() => {}) to iterate over the object's keys.",
  },
  {
    question: "How to iterate over collections?",
    answer: "Using a for...of loop: for (variable of iterable)",
  },
  {
    question: "How to iterate over a NodeList?",
    answer:
      "Using a for loop or a combination of spread operator or Array.from to convert the NodeList into an array, followed by forEach loop.",
  },
  {
    question: "How to iterate over arrays?",
    answer:
      "Using a for loop, while loop, forEach method, every method, or map method.",
  },
  {
    question: "What are generators?",
    answer:
      "Generators are functions that include the yield keyword and are declared with an asterisk (*). They allow for the creation of an iterator object that can be iterated over using the next() method. Each time next() is called, it executes the generator function until it reaches the next yield statement, returning the yielded value.",
  },
  // Misc
  {
    question: "What is destructuring?",
    answer:
      "Destructuring allows us to extract data from arrays or objects and assign them to variables. Destructuring objects is based on keys, while arrays are based on order.\nExample: const [name1, name2] = tab;",
  },
  {
    question: "How to share code between files?",
    answer:
      "To share code between files, you can use ES6 module imports and exports. You can separate your code into different files and use import statements to bring in functions, classes, or variables from other files into your current file. This allows for modular and organized code structure.",
  },
  {
    question:
      "How do you organize your code? (module pattern, classical inheritance?)",
    answer:
      "When organizing code, it's beneficial to follow modular patterns and avoid relying on global scope. You can achieve this by using techniques like the module pattern and avoiding classical inheritance. Some recommended practices include:\n- Utilizing ES6 imports and exports to split code into separate files.\n- Avoiding global variables and maintaining a closed scope.\n- Separating functions from components and utilizing custom hooks for shared logic.\n- Adding comments to provide clarity and improve code maintainability.",
  },
  {
    question: "What is the benefit of using modules?",
    answer:
      "Using modules provides several benefits:\n- Modularity: Modules allow you to break down your code into smaller, manageable pieces. This improves code organization and makes it easier to understand and maintain.\n- Encapsulation: Modules have their own scope, reducing the risk of variable conflicts or naming collisions. This enhances code reliability and reusability.\n- Reusability: Modules can be imported and reused across different files or projects, promoting code reuse and reducing redundancy.\n- Dependency Management: Modules help manage dependencies by explicitly stating which modules are required for a given file. This improves code transparency and makes it easier to identify and resolve dependencies.",
  },
  {
    question: "What are modules?",
    answer:
      "Modules are a feature of modern programming languages that allow you to create separate files with encapsulated scopes. Modules provide a way to organize and structure code, ensuring that variables, functions, or classes defined within a module are only accessible within that module unless explicitly exported. Modules facilitate code reuse, improve code organization, and help prevent naming conflicts between different parts of an application.",
  },
  {
    question: "Examples of ways to refactor code",
    answer:
      "Refactoring code involves making improvements to existing code without changing its external behavior. Here are some common techniques for code refactoring:\n- Comments: Adding comments to explain the code's purpose, logic, or any complex sections can improve code readability and make it easier for others to understand.\n- Good variable names: Using meaningful and descriptive variable names can enhance code clarity and make it easier to follow the code's flow and intention.\n- Returning errors: Instead of using error codes or relying on specific return values to indicate errors, refactoring code to use proper error handling techniques, such as throwing exceptions or using error objects, can make error handling more robust and maintainable.\n- Modularization: Breaking down large, monolithic functions or components into smaller, more manageable modules can improve code organization, readability, and reusability. Modularization promotes separation of concerns and allows for easier maintenance and testing.\n- DRY (Don't Repeat Yourself): Identifying duplicate code segments and refactoring them into reusable functions or utility methods can eliminate code redundancy and improve maintainability.\n- Code optimization: Refactoring code to improve performance and efficiency, such as using better algorithms or data structures, can enhance the overall performance of the application.\n- Use of design patterns: Applying appropriate design patterns can help improve code structure, maintainability, and extensibility. Design patterns provide proven solutions to common software design problems and can make code more scalable and maintainable.\nRefactoring code is an ongoing process that aims to enhance code quality, readability, and maintainability. It is important to consider the specific requirements and goals of the codebase and choose the appropriate refactoring techniques accordingly.",
  },
  {
    question: "What is hoisting?",
    answer:
      "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their respective scopes during the compilation phase. This means that you can use variables or call functions before they are actually declared in the code. However, only the declarations are hoisted, not the initializations or assignments.",
  },
  {
    question: "What is strict mode?",
    answer:
      "Strict mode is a feature introduced in ECMAScript 5 (ES5) that enables a stricter interpretation of JavaScript code. It helps to catch and eliminate common coding mistakes and unsafe behavior by enabling stricter error handling and disallowing certain practices. When strict mode is enabled, silent errors are turned into exceptions, which helps in writing more reliable and maintainable code.",
  },
  {
    question: "What is the difference between spread syntax and rest syntax?",
    answer:
      "Spread syntax (...) allows us to split an iterable value (such as an array or string) into individual elements. For example, using console.log(...tab) with an array tab = [1, 2, 3, 4] would log each element separately to the console.\nRest syntax (...) is used as the last parameter in a function declaration to gather multiple function arguments into an array. It allows a function to accept an arbitrary number of arguments. For example, function sum(...numbers) would collect all the arguments passed to the sum function into an array called numbers.",
  },
  {
    question: "What is a garbage collector?",
    answer:
      "A garbage collector is a mechanism in programming languages that automatically manages memory by identifying and freeing up memory that is no longer in use. In JavaScript, the garbage collector tracks and removes objects from memory that are no longer referenced by any part of the program, thereby reclaiming memory space and preventing memory leaks.",
  },
  {
    question: "What is interpolation/template literals?",
    answer:
      "Interpolation, also known as template literals, is a feature introduced in ECMAScript 6 (ES6) that allows for a more convenient way to write strings in JavaScript using backticks (`). Template literals support variable interpolation by enclosing variables or expressions within ${} placeholders. This makes it easier to concatenate variables and expressions with strings, resulting in more readable and expressive code.",
  },
  {
    question: "What is a symbol?",
    answer:
      "A symbol is a primitive data type in JavaScript introduced in ECMAScript 6 (ES6). It represents a unique value and can be used as an identifier for object properties. Symbols are often used to add additional functionalities to objects without the risk of overwriting existing properties or causing conflicts. Symbols are not iterable, meaning they cannot be looped over like arrays or objects.",
  },
];
