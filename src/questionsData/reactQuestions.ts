export const reactQuestionsData = [
  {
    question: "What is the difference between state and props?",
    answer:
      "State is internal and mutable, controlled by the component itself.\nProps are external and immutable, controlled by whatever renders the component.",
  },
  {
    question: "What is Context API?",
    answer:
      "A feature that allows state to be shared across the entire app through createContext() and Provider tags.",
  },
  {
    question: "What is reconciliation?",
    answer:
      "The process by which React updates the DOM, comparing the virtual DOM with the current DOM when state changes.",
  },
  {
    question: "What is a React Fragment?",
    answer:
      "It lets you group a list of returned children without adding extra nodes to the DOM, represented as <React.Fragment></React.Fragment>.",
  },
  {
    question: "What are React hooks?",
    answer:
      "Functions that let you hook into React state and lifecycle features from function components.",
  },
  {
    question: "Name and explain common hooks.",
    answer:
      "useState: handles state to keep data between renders.\nuseEffect: implements lifecycle hooks, runs only on the first render if dependency array is empty ([]).\nuseContext: uses the React Context API.\nuseRef: keeps data between renders (updating doesn’t trigger re-rendering), mostly used to access HTML elements in the DOM.",
  },
  {
    question: "What are pure components?",
    answer:
      "A component that doesn’t re-render when the state and props are updated with the same values.",
  },
  {
    question: "How to create a new hook?",
    answer:
      "Create a function that begins with 'use', returns desired values, and extracts component logic into reusable functions.",
  },
  {
    question: "What is a HOC (Higher Order Component)?",
    answer:
      "A function that takes a component as an argument and returns another component.",
  },
  {
    question: "What are keys in React and why are they important?",
    answer:
      "Keys help React identify which items have changed in a list. They should be unique strings.",
  },
  {
    question: "How to destructure props?",
    answer: "const { person: { name, age, skill } } = props;",
  },
  {
    question:
      "What is the Virtual DOM? Difference from real DOM and shadow DOM?",
    answer:
      "A copy of the DOM kept in memory, synced with the real DOM through reconciliation, using a process called diffing.",
  },
  {
    question: "What is a controlled component?",
    answer:
      "A controlled component gets its current value from props and notifies changes to the parent component through callbacks like onChange.",
  },
  {
    question:
      "How can a child component change the state in a parent component?",
    answer: "Through callbacks, e.g. onChange.",
  },
  {
    question: "What does the deps array in useEffect() do?",
    answer: "It contains dependencies that, when changed, trigger useEffect.",
  },
  {
    question: "What does 'return' in useEffect do?",
    answer: "It triggers a cleanup function.",
  },
  {
    question: "What is React?",
    answer:
      "A JavaScript library for building complex, dynamic UIs. It helps handle dynamic data and keep state in sync with the UI.",
  },
  {
    question: "What is JSX? Can a browser read JSX?",
    answer:
      "JSX is a JavaScript syntax extension for writing HTML within JS code. Browsers can't read it directly; it has to be transpiled into regular JavaScript.",
  },
  {
    question: "What are major advantages of React?",
    answer:
      "Efficient, thanks to the virtual DOM.\nComponent-based structure increases reusability and readability.\nStrong community support and extensive ecosystem.",
  },
  {
    question: "How to update state in a component?",
    answer:
      "Using the setState function in a class component, or the useState hook in a functional component.",
  },
  {
    question: "What are the phases in a component’s lifecycle?",
    answer: "Mounting, Updating, and Unmounting.",
  },
  {
    question: "How to create a form in React?",
    answer:
      "Using form elements in JSX and handling state with either class components (this.setState) or hooks (useState).",
  },
  {
    question: "How does React Router work?",
    answer:
      "It handles routing in React applications, allowing you to render different components based on the current URL path.",
  },
  {
    question: "What are major advantages of NextJS?",
    answer:
      "Server-side rendering for better SEO.\nAutomatic static optimization.\nFile-system based routing.",
  },
  {
    question: "Differences between class and functional components.",
    answer:
      "Class components can use lifecycle methods, whereas functional components use hooks.\nFunctional components are simpler and easier to test and read.",
  },
  {
    question: "What is prop drilling?",
    answer:
      "The process of getting data to parts of the React Component tree, by passing props down manually at every level.",
  },
  {
    question: "When and why would you use useMemo() or useCallback()?",
    answer:
      "To optimize performance by memoizing expensive computations (useMemo) or functions (useCallback) that could otherwise cause re-renders.",
  },
  {
    question: "How are events handled in React and what is e.target?",
    answer:
      "Events are handled through special functions called event handlers. e.target refers to the element on which the event was triggered.",
  },
  {
    question: "What causes a component to re-render?",
    answer: "Changes in state or props cause a component to re-render.",
  },
  {
    question: "What are React's synthetic events?",
    answer:
      "Synthetic events are React’s cross-browser wrapper around the browser’s native event system. They combine the behaviors of different browsers into a single, consistent API.",
  },
  {
    question: "What are controlled and uncontrolled components in React?",
    answer:
      "Controlled components have their state controlled by React. Uncontrolled components maintain their own state internally. For form inputs, controlled components take their current value from the props and update it through callbacks, while uncontrolled components use a ref to retrieve their current value directly.",
  },
  {
    question: "What is Redux?",
    answer:
      "Redux is a predictable state container designed to manage the state of JavaScript apps. It works well with React but can be used with any other JavaScript framework or library.",
  },
  {
    question: "What is a reducer in Redux?",
    answer:
      "A reducer is a pure function that takes the current state and an action as arguments and returns a new state.",
  },
  {
    question: "How does data flow in Redux?",
    answer:
      "Data in Redux flows unidirectionally. Actions are dispatched to send data to the store, and the store updates state based on the reducer received from the action.",
  },
  {
    question: "How do you handle asynchronous actions in Redux?",
    answer:
      "Middleware like Redux Thunk or Redux Saga can be used to handle asynchronous actions in Redux.",
  },
  {
    question: "What is the use of refs in React?",
    answer:
      "Refs provide a way to access DOM nodes or React elements created in the render method. They can be useful for certain tasks like focusing on a field, triggering animations, or integrating with third-party DOM libraries.",
  },
  {
    question: "What is a React portal?",
    answer:
      "A Portal provides a way to render children into a DOM node that exists outside of the DOM hierarchy of the parent component. It's useful for modals, pop-ups, and tooltips.",
  },
  {
    question: "How do you optimize performance in a React application?",
    answer:
      "Some strategies include:  \n- Using PureComponent or shouldComponentUpdate to avoid unnecessary re-renders\n- Optimizing the performance of lists with key and React.memo\n- Using lazy loading and code splitting to reduce the size of the app\n- Memoization using useMemo() or React.memo()\n- Performance profiling with React DevTools and identifying performance bottlenecks\n- Code splitting and lazy loading using React.lazy() and React Suspense",
  },
  {
    question: "What is PropTypes in React?",
    answer:
      "PropTypes are a form of type checking in React. They help to ensure that the components use the correct data type and pass the right data.",
  },
  {
    question: "What is React Suspense and React.lazy?",
    answer:
      "React Suspense is a feature that allows components to suspend their render, letting other components stay interactive. React.lazy is a function that lets you render a dynamic import as a regular component. It makes it easy to split the code bundle and reduce the size of the app.",
  },
];
