import { Question } from "@/components/questions/types";

export const optimizationQuestionsData: Question[] = [
  {
    id: 7001,
    question: "Explain web accessibility and its importance.",
    answer: [
      {
        type: "text",
        content:
          "Web accessibility refers to designing and developing websites, tools, and technologies so that people with disabilities can use them. It ensures that everyone, including those with visual, auditory, or cognitive impairments, can perceive, understand, navigate, and interact with the web.",
      },
      {
        type: "text",
        content:
          "Accessible websites benefit everyone by improving usability, enhancing search engine optimization (SEO), and providing a better overall user experience.",
      },
    ],
  },
  {
    id: 7002,
    question:
      "What is the importance of reducing render-blocking resources, and how can you achieve it?",
    answer: [
      {
        type: "text",
        content:
          "Render-blocking resources, such as CSS and JavaScript files, can delay the rendering of your web page. When a browser encounters these resources, it must download and parse them before continuing to render the rest of the page. This can significantly impact the time it takes for users to see content, leading to a poor user experience.",
      },
      {
        type: "text",
        content:
          "To reduce render-blocking resources, you can defer or asynchronously load JavaScript files, inline critical CSS, and use the `rel='preload'` attribute for important resources. These techniques help ensure that the page renders as quickly as possible by prioritizing the loading of critical resources.",
      },
      {
        type: "code",
        language: "html",
        content: `<!-- Example of deferring a script to reduce render-blocking -->
<script src="example.js" defer></script>

<!-- Example of inlining critical CSS to reduce render-blocking -->
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  header {
    background-color: #005fcc;
    color: white;
  }
</style>

<!-- Preload important resources to improve load times -->
<link rel="preload" href="/fonts/example-font.woff2" as="font" type="font/woff2" crossorigin>`,
      },
      {
        type: "text",
        content:
          "By implementing these optimizations, you can significantly reduce the time it takes for your web page to become interactive, leading to a better user experience and improved performance metrics.",
      },
    ],
  },
  {
    id: 7003,
    question: "What are common accessibility barriers on the web?",
    answer: [
      {
        type: "text",
        content:
          "Common accessibility barriers on the web include issues that make it difficult or impossible for people with disabilities to use websites effectively. These barriers can affect various aspects of web interaction, such as perceiving content, navigating through pages, and interacting with elements.",
      },
      {
        type: "unordered-list",
        content:
          "Inaccessible forms without proper labels\nMissing alt text for images\nPoor color contrast between text and background\nLack of keyboard navigation support\nInaccessible multimedia content without captions or transcripts",
      },
    ],
  },
  {
    id: 7004,
    question: "How can you improve color contrast for better accessibility?",
    answer: [
      {
        type: "text",
        content:
          "Improving color contrast involves ensuring that there is sufficient contrast between text and background colors to make content readable for users with visual impairments. The Web Content Accessibility Guidelines (WCAG) recommend specific contrast ratios based on text size and weight.",
      },
      {
        type: "code",
        language: "css",
        content: `/* Example of setting sufficient contrast in CSS */
body {
  color: #1a1a1a; /* Dark gray text */
  background-color: #ffffff; /* White background */
}

a {
  color: #005fcc; /* Accessible link color */
}

.button {
  background-color: #007bff; /* Accessible button background */
  color: #ffffff; /* White button text */
  border: 2px solid #0056b3; /* High contrast border */
}

/* Example of improving contrast for hover states */
a:hover, .button:hover {
  background-color: #004085; /* Darker background for better contrast */
  color: #e0e0e0; /* Light text for contrast on dark background */
}`,
      },
      {
        type: "text",
        content:
          "Using tools like color contrast checkers and ensuring that your design meets WCAG contrast ratios can greatly improve accessibility for users with visual impairments.",
      },
    ],
  },
  {
    id: 7005,
    question: "What is the purpose of alt text for images?",
    answer: [
      {
        type: "text",
        content:
          "Alt text, or alternative text, describes the content and function of an image on a webpage. It is essential for accessibility because screen readers use alt text to convey the meaning of images to users with visual impairments. Alt text should be concise and avoid redundant phrases like 'image of' or 'picture of.'",
      },
      {
        type: "code",
        language: "html",
        content: `<img src="example.jpg" alt="A scenic view of a mountain at sunrise">`,
      },
      {
        type: "text",
        content:
          "Providing descriptive and meaningful alt text ensures that all users, regardless of their ability to see the image, can understand its context and relevance to the content.",
      },
    ],
  },
  {
    id: 7006,
    question: "How are ARIA attributes used to enhance accessibility?",
    answer: [
      {
        type: "text",
        content:
          "ARIA (Accessible Rich Internet Applications) attributes are used to enhance the accessibility of dynamic content and web applications by providing additional information to assistive technologies. They describe the roles, states, and properties of elements on a page that are not conveyed by native HTML elements alone.",
      },
      {
        type: "code",
        language: "html",
        content: `<button aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu" role="menu" aria-hidden="true">
  <li role="menuitem">Item 1</li>
  <li role="menuitem">Item 2</li>
</ul>`,
      },
      {
        type: "text",
        content:
          "By using ARIA attributes, developers can ensure that users with disabilities can interact with web content more effectively, particularly in complex, interactive applications.",
      },
    ],
  },
  {
    id: 7007,
    question: "How can you ensure keyboard accessibility?",
    answer: [
      {
        type: "text",
        content:
          "Keyboard accessibility ensures that all interactive elements on a webpage can be accessed and operated using only the keyboard. This is crucial for users who cannot use a mouse or other pointing devices.",
      },
      {
        type: "unordered-list",
        content:
          "Ensure all interactive elements are focusable\nProvide visible focus indicators\nUse logical tab order for navigation\nHandle keyboard events correctly",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Example of adding a focus indicator
button:focus {
  outline: 2px solid #005fcc; // Highlight the button when focused
}`,
      },
      {
        type: "text",
        content:
          "Ensuring keyboard accessibility enhances the user experience for all users, particularly those with mobility impairments.",
      },
    ],
  },
  {
    id: 7008,
    question: "Why is semantic HTML important for accessibility?",
    answer: [
      {
        type: "text",
        content:
          "Semantic HTML involves using HTML elements that accurately describe their meaning and structure, improving both accessibility and SEO. It ensures that web content is easily understandable by both users and assistive technologies.",
      },
      {
        type: "code",
        language: "html",
        content: `<!-- Example of semantic HTML -->
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
</main>`,
      },
      {
        type: "text",
        content:
          "Using elements like <nav>, <header>, <main>, and <article> makes the content more navigable and meaningful, especially for screen readers.",
      },
    ],
  },
  {
    id: 7009,
    question: "How can you improve the accessibility of forms?",
    answer: [
      {
        type: "text",
        content:
          "Form accessibility can be improved by providing clear and descriptive labels, associating labels with their respective input fields, and ensuring that the form is fully navigable via the keyboard. Additionally, providing meaningful error messages and handling focus correctly are crucial for accessible forms.",
      },
      {
        type: "code",
        language: "html",
        content: `<!-- Example of a labeled form control and error message -->
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>

<span id="email-error" class="error" aria-live="assertive" style="color: red;">Please enter a valid email address.</span>`,
      },
      {
        type: "text",
        content:
          "Improving form accessibility ensures that all users can complete forms independently and accurately, which is vital for user engagement and conversion.",
      },
    ],
  },
  {
    id: 7010,
    question: "What is skip navigation and why is it important?",
    answer: [
      {
        type: "text",
        content:
          "Skip navigation is a technique that allows users to bypass repetitive navigation links and jump directly to the main content of a webpage. It is especially important for screen reader users who otherwise would have to navigate through the same set of links on every page.",
      },
      {
        type: "code",
        language: "html",
        content: `<!-- Example of a skip link -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<main id="main-content">
  <h1>Main Content</h1>
  <p>Content goes here...</p>
</main>`,
      },
      {
        type: "text",
        content:
          "Including a skip navigation link improves the efficiency of navigating the web, especially for users who rely on keyboard navigation or screen readers.",
      },
    ],
  },
  {
    id: 7011,
    question:
      "How can lazy loading improve the performance of a web application?",
    answer: [
      {
        type: "text",
        content:
          "Lazy loading is a technique that defers the loading of non-critical resources until they are needed. This improves the initial load time of a web application by only loading essential assets first and postponing the loading of images, scripts, and components that are not immediately visible or necessary.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Improved lazy loading with IntersectionObserver
const lazyImages = document.querySelectorAll('img.lazyload');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazyload');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => {
  imageObserver.observe(img);
});`,
      },
      {
        type: "text",
        content:
          "By implementing lazy loading, you can reduce the initial page load time, decrease bandwidth usage, and enhance the overall user experience.",
      },
    ],
  },
  {
    id: 7012,
    question: "What are critical CSS and how do they optimize web performance?",
    answer: [
      {
        type: "text",
        content:
          "Critical CSS refers to the minimum set of CSS rules required to render the above-the-fold content of a webpage. By extracting and inlining critical CSS directly into the HTML, you can ensure that the initial content is styled quickly, improving perceived load time and reducing render-blocking resources.",
      },
      {
        type: "code",
        language: "html",
        content: `<!-- Example of inlining critical CSS -->
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  header {
    background-color: #005fcc;
    color: white;
  }
</style>`,
      },
      {
        type: "text",
        content:
          "By optimizing critical CSS, you can significantly improve the time it takes for users to see content, leading to better performance and user satisfaction.",
      },
    ],
  },
  {
    id: 7013,
    question: "How does minification help in optimizing web assets?",
    answer: [
      {
        type: "text",
        content:
          "Minification is the process of removing unnecessary characters from code files (such as spaces, comments, and line breaks) without affecting functionality. This reduces the file size, leading to faster download times and improved performance.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Original JavaScript
function greet(name) {
  console.log('Hello, ' + name);
}

// Minified JavaScript
function greet(n){console.log("Hello, "+n)}`,
      },
      {
        type: "text",
        content:
          "Minification is typically applied to CSS, JavaScript, and HTML files, and can be easily automated using tools like UglifyJS, CSSNano, or the Google Closure Compiler.",
      },
    ],
  },
  {
    id: 7014,
    question:
      "What is the purpose of a content delivery network (CDN) in web optimization?",
    answer: [
      {
        type: "text",
        content:
          "A Content Delivery Network (CDN) is a network of geographically distributed servers that deliver web content to users based on their location. By caching and serving content from the nearest server, a CDN reduces latency, improves load times, and increases the reliability of your web application.",
      },
      {
        type: "unordered-list",
        content:
          "Reduces latency by serving content from the nearest server\nIncreases availability and redundancy\nOffloads traffic from the origin server\nImproves security with features like DDoS protection",
      },
      {
        type: "text",
        content:
          "Using a CDN is essential for optimizing the performance and scalability of websites, especially for global audiences.",
      },
    ],
  },
  {
    id: 7015,
    question: "How does browser caching improve website performance?",
    answer: [
      {
        type: "text",
        content:
          "Browser caching stores static resources (such as images, CSS, and JavaScript files) locally on a user's device after the first visit. This reduces the need to download the same resources on subsequent visits, leading to faster page load times and reduced server load.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Example of setting cache headers in HTTP response
Cache-Control: max-age=31536000, public

// Example of setting cache headers in NGINX
location ~* \\.(js|css|png|jpg|jpeg|gif|ico)$ {
  expires 1y;
  add_header Cache-Control "public";
}`,
      },
      {
        type: "text",
        content:
          "Implementing effective browser caching strategies can greatly enhance user experience by reducing load times on repeat visits.",
      },
    ],
  },
  {
    id: 7016,
    question: "What are the best practices for optimizing images on the web?",
    answer: [
      {
        type: "text",
        content:
          "Optimizing images is crucial for improving web performance, as images often make up the majority of a webpage's size. Best practices include compressing images, using appropriate formats, and leveraging responsive images to serve different sizes based on the user's device.",
      },
      {
        type: "unordered-list",
        content:
          "Use formats like WebP for smaller file sizes\nCompress images using tools like ImageOptim or TinyPNG\nImplement responsive images with srcset and sizes attributes\nUse lazy loading to defer offscreen images",
      },
      {
        type: "code",
        language: "html",
        content: `<!-- Example of a responsive image -->
<img src="small.jpg" 
     srcset="medium.jpg 600w, large.jpg 1200w" 
     sizes="(max-width: 600px) 480px, 800px" 
     alt="A scenic view">`,
      },
      {
        type: "text",
        content:
          "Following these practices can significantly reduce image sizes, leading to faster load times and better performance across all devices.",
      },
    ],
  },
  {
    id: 7017,
    question:
      "How can you reduce the impact of third-party scripts on website performance?",
    answer: [
      {
        type: "text",
        content:
          "Third-party scripts, such as analytics tools, ads, or social media widgets, can negatively impact website performance by increasing load times and blocking rendering. Reducing their impact involves loading these scripts asynchronously, deferring them, and carefully managing the number of third-party resources used.",
      },
      {
        type: "code",
        language: "typescript",
        content: `<!-- Example of loading a script asynchronously -->
<script async src="https://example.com/analytics.js"></script>

<!-- Example of deferring a script -->
<script defer src="https://example.com/analytics.js"></script>`,
      },
      {
        type: "text",
        content:
          "By optimizing how third-party scripts are loaded and used, you can minimize their impact on performance while still leveraging their functionality.",
      },
    ],
  },
  {
    id: 7018,
    question:
      "What role does server-side rendering (SSR) play in optimizing frontend applications?",
    answer: [
      {
        type: "text",
        content:
          "Server-side rendering (SSR) involves rendering a webpage on the server rather than in the user's browser. This approach delivers fully rendered HTML to the client, improving initial load times, enhancing SEO, and providing a better user experience, especially on slower devices or connections.",
      },
      {
        type: "unordered-list",
        content:
          "Improves time-to-first-paint (TTFP) by delivering rendered content faster\nEnhances SEO by providing search engines with fully rendered pages\nImproves accessibility by ensuring content is available even with JavaScript disabled",
      },
      {
        type: "text",
        content:
          "SSR is especially beneficial for content-heavy websites and applications where performance and SEO are critical.",
      },
    ],
  },
  {
    id: 7019,
    question:
      "How does code splitting optimize the performance of web applications?",
    answer: [
      {
        type: "text",
        content:
          "Code splitting is a technique that divides a web application's codebase into smaller bundles that are loaded on demand. This reduces the initial load time by only loading the code needed for the current page or feature, improving performance and user experience.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Example of code splitting with dynamic imports
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);`,
      },
      {
        type: "text",
        content:
          "By implementing code splitting, you can ensure that users only download the code they need, leading to faster load times and reduced resource consumption.",
      },
    ],
  },
  {
    id: 7020,
    question:
      "How do service workers contribute to web performance optimization?",
    answer: [
      {
        type: "text",
        content:
          "Service workers are scripts that run in the background, separate from the main browser thread, enabling features like offline caching, push notifications, and background sync. They significantly enhance web performance by allowing developers to cache resources and serve them from the cache instead of making network requests, which reduces load times and ensures the application is available offline.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Example of registering and updating a service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js');
      console.log('Service Worker registered with scope:', registration.scope);

      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log('New content is available; please refresh.');
            } else {
              console.log('Content is cached for offline use.');
            }
          }
        };
      };
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  });
}`,
      },
      {
        type: "text",
        content:
          "By leveraging service workers, you can create more resilient web applications that offer faster loading times, improved reliability, and offline capabilities, leading to a better user experience.",
      },
    ],
  },
];
