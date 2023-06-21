export const generalQuestionsData = [
  {
    id: 8001,
    question: "Definition: DNS",
    answer:
      "DNS stands for Domain Name System. It's a system for translating user-friendly domain names into numerical IP addresses that machines can understand. This translation process is critical for web browsing and other network activities.",
  },
  {
    id: 8002,
    question: "Definition: HTTP",
    answer:
      "HTTP, or Hypertext Transfer Protocol, is a client-server protocol used for fetching resources, including HTML documents. It forms the foundation of data exchange on the Web. HTTP is stateless, meaning each request is processed separately, without any retained memory of previous requests.",
  },
  {
    id: 8003,
    question: "HTTP request includes protocol version, verb, headers and body",
    answer:
      "An HTTP request typically includes:\n- Protocol version: Specifies the version of the HTTP protocol being used, such as HTTP/1.1 or HTTP/2.\n- Verb: Indicates the type of request being made, such as GET, POST, PUT, DELETE, etc.\n- Headers: Additional metadata about the request, including information such as the Content-Type, Accept, Authorization, etc.\n- Body: Optional data sent along with the request, typically used for POST or PUT requests to send data to the server.",
  },
  {
    id: 8004,
    question: "HTTP response includes status, headers and body",
    answer:
      "An HTTP response typically includes:\n- Status: A three-digit number indicating the status of the response, such as 200 for a successful response, 404 for a not found response, etc.\n- Headers: Additional metadata about the response, including information such as the Content-Type, Content-Length, etc.\n- Body: The actual content of the response, such as HTML, JSON, or binary data.",
  },
  {
    id: 8005,
    question: "Definition: Static Site Generators",
    answer:
      "Static Site Generators (SSGs) are scripts that take in data, content, and templates, then process them to output a complete set of web pages and assets. Instead of generating views on-the-fly like traditional web stacks, SSGs prepare data in advance, making the view ready to serve instantly. This leads to better security and performance. Examples include GatsbyJS and NextJS.",
  },
  {
    id: 8006,
    question: "What is GraphQL?",
    answer:
      "GraphQL is a query language for APIs and a runtime for executing those queries with existing data. It makes using an API easier and enables powerful developer tools.",
  },
  {
    id: 8007,
    question: "What is Emmet?",
    answer:
      "Emmet is a plugin for Visual Studio Code (VSC) that enhances HTML & CSS workflow through the use of dynamic snippets.",
  },
  {
    id: 8008,
    question: "What is the MERN stack?",
    answer:
      "The MERN stack stands for MongoDB, Express, React, and Node.js. MongoDB is a document database, Express is a Node.js framework, React is a JavaScript library for building user interfaces, and Node.js is a JavaScript runtime environment.",
  },
  {
    id: 8009,
    question: "What is JAMstack?",
    answer:
      "JAMstack stands for JavaScript, APIs, and Markup. It's a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup. The front end is usually built with a static site generator like Gatsby. The application uses a content delivery network (CDN) and doesn't need to communicate directly with a backend server.",
  },
  {
    id: 8010,
    question: "What tools do you use for debugging?",
    answer:
      "Some common tools for debugging include browser developer tools (like console.log, alert, and debugger), Postman, and Eslint.",
  },
  {
    id: 8011,
    question: "What is an API?",
    answer:
      "API stands for Application Programming Interface. It is a set of rules that allow programs to talk to each other. The developer creates the API on the server and allows the client to talk to it.",
  },
  {
    id: 8012,
    question: "What is a REST API?",
    answer:
      "A REST API is a type of API that is based on Representational State Transfer (REST), a software architectural style. It is used to handle HTTP requests and conforms to the REST constraints, which include client-server communication, statelessness, cacheability, and a uniform interface.",
  },
  {
    id: 8013,
    question: "What is CRUD?",
    answer:
      "CRUD stands for Create, Read, Update, Delete. These are the four basic functions that define the necessary actions for persistent storage in any database, and are the foundational operations for most APIs.",
  },
  {
    id: 8014,
    question: "What is REST, and why do people use it?",
    answer:
      "REST stands for Representational State Transfer. It is a standard for developing web services due to its simplicity and the fact that it builds upon existing systems and features of the internet's HTTP in order to achieve its objectives. It is stateless and has a client-server architecture, which means that every request contains all the necessary information for a server to respond.",
  },
  {
    id: 8015,
    question: "What is CORS?",
    answer:
      "CORS, or Cross-Origin Resource Sharing, is a mechanism that uses HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin.",
  },
  {
    id: 8016,
    question: "What's the difference between HTTP and HTTPS?",
    answer:
      "HTTPS is the secure version of HTTP. Its communications are encrypted with SSL (Secure Sockets Layer) or TLS (Transport Layer Security) protocols.",
  },
  {
    id: 8017,
    question:
      "Describe the process from typing a URL to finishing loading on the screen.",
    answer:
      "The process involves the following steps:\n1. The user types the URL in the browser.\n2. The system sends a DNS lookup request to translate the domain name into an IP address.\n3. The browser initiates a TCP connection with the server at the returned IP address and sends an HTTP request.\n4. The server processes the request and sends back an HTTP response.\n5. The browser parses the HTML document from the response and renders the page on the screen.",
  },
  {
    id: 8018,
    question: "What are the pros and cons of a single page app?",
    answer:
      "Pros of a single page app:\n- Provides a smooth user experience similar to desktop applications.\n- Quick response times and no need for page reloads.\nCons of a single page app:\n- Challenges for SEO due to limited content on a single page.\n- Initial load times may be longer due to the size of the JavaScript required.",
  },
  {
    id: 8019,
    question: "What is RxJS?",
    answer:
      "RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It's perfect for managing a sequence of events in an intuitive way.",
  },
  {
    id: 8020,
    question: "What is a service worker?",
    answer:
      "A service worker is a script that the browser runs in the background separate from a web page. It opens the door to features that don't need a web page or user interaction, like push notifications and background sync.",
  },
  {
    id: 8021,
    question: "Why do we use bundlers?",
    answer:
      "Bundlers, like Webpack, help manage dependencies, transformation, and optimization for an application. They compile a project into static assets that the browser can interpret, improving load performance.",
  },
  {
    id: 8022,
    question: "What's the difference between HTTP1 and HTTP2?",
    answer:
      "HTTP2 improves on HTTP1 by allowing multiple simultaneous requests and responses on the same connection, introducing server push capabilities, and adding header compression. These enhancements make HTTP2 faster and more reliable.",
  },
  {
    id: 8023,
    question: "What is Docker?",
    answer:
      "Docker is a platform that uses OS-level virtualization to deliver software in packages called containers. It packages an application and its dependencies together in a virtual container that can run on any Linux server. This helps enable flexibility and portability for where the application can run.",
  },
  {
    id: 8024,
    question: "What is web accessibility?",
    answer:
      "Web accessibility means making websites, tools, and technologies designed and developed so that people with disabilities can use them. It includes measures like using alt tags for images and ARIA (Accessible Rich Internet Applications) attributes to improve access for assistive technologies.",
  },
  {
    id: 8025,
    question: "What is JWT?",
    answer:
      "JWT, or JSON Web Token, is a standard for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret or a public/private key pair.",
  },
  {
    id: 8026,
    question: "Explain some common techniques regarding front-end security.",
    answer:
      "There are several strategies for enhancing front-end security, including:\n- Avoiding Cross-Site Scripting (XSS) attacks by sanitizing user input.\n- Implementing Content Security Policy (CSP) to prevent certain types of attacks like XSS and data injection.\n- Using HTTPS to encrypt data in transit.\n- Utilizing JSON Web Tokens (JWTs) for securely transmitting information between parties.\n- Using modern frameworks that come with built-in protection against common threats.",
  },
  {
    id: 8027,
    question: "What is serverless?",
    answer:
      "Serverless is a cloud-native development model where developers don't have to manage servers. Instead, they write their code and set the conditions under which it should run, and the cloud provider takes care of the rest. AWS Lambda is a popular serverless service.",
  },
  {
    id: 8028,
    question: "What is a headless CMS?",
    answer:
      "A headless CMS is a content management system that only handles the back-end content management, leaving the presentation of the content to the front-end technology of choice. It provides content through an API, unlike traditional CMS like WordPress, which is coupled with a specific way to present the content. However, WordPress can also be used as a headless CMS.",
  },
  {
    id: 8029,
    question: "What is FOUC?",
    answer:
      "FOUC stands for 'Flash of Unstyled Content'. It describes the brief moment when a web page appears with the browser's default styles prior to loading an external CSS stylesheet. This can lead to a poor user experience as the page layout might drastically change during loading.",
  },
  {
    id: 8030,
    question: "What is TCP/IP?",
    answer:
      "TCP/IP (Transmission Control Protocol/Internet Protocol) is the suite of protocols used to interconnect network devices on the internet. TCP handles the creation of communication channels across a network and manages the assembly and reassembly of packets. IP handles addressing and routing each packet to ensure it reaches the right destination. TCP/IP is organized into four layers:\n- Application Layer: Includes high-level protocols like HTTP and FTP.\n- Transport Layer: Establishes host-to-host connectivity.\n- Network Layer: Handles the routing of packets and connects independent networks.\n- Physical Layer: Deals with physical specifications of the network.",
  },
  {
    id: 8031,
    question: "What is the Cloud?",
    answer:
      '"The Cloud" refers to servers accessed over the internet, along with the software and databases that run on those servers. Instead of owning and maintaining physical servers, businesses can use cloud services offered by providers like AWS, Google Cloud, and Microsoft Azure. The servers are housed in data centers around the world, ensuring access to data and applications wherever there\'s an internet connection.',
  },
  {
    id: 8032,
    question: "What is minification?",
    answer:
      "Minification is the process of removing all unnecessary characters from source code without changing its functionality. This includes spaces, new line characters, comments, and sometimes shortening variables and function names. The result is a script much smaller in size, leading to faster download times, thus improving the website's speed and accessibility.",
  },
  {
    id: 8033,
    question: "What is a CDN?",
    answer:
      "A CDN (Content Delivery Network) is a globally distributed network of servers that provides fast delivery of internet content. It allows for quick transfer of assets needed for loading internet content, including HTML pages, JavaScript files, stylesheets, and images. While a CDN doesn't host content, it helps in efficient content delivery by caching content, reducing bandwidth costs, improving security, and ensuring faster load times.",
  },
];
