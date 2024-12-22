import { Question } from "@/components/questions/types";

export const componentQuestionsData: Question[] = [
  {
    id: 10001,
    question:
      "Create a movie table component that fetches data from API, displays it in a table format, and implements search and filter functionality",
    answer: [
      {
        type: "text",
        content:
          "Build a React component that fetches movie data from The Movie Database (TMDB) API and displays it in a table with search and filter capabilities. The component should manage loading states, implement pagination, and allow users to search and filter movies by different criteria.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const MovieTable = () => {
  return (
    <div>
      <input type="text" placeholder="Search movies" />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Movie rows will go here */}
        </tbody>
      </table>
    </div>
  );
};`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `import React, { useState, useEffect } from 'react';

const MovieTable = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const API_KEY = 'your_tmdb_api_key';
        const response = await fetch(
          \`https://api.themoviedb.org/3/movie/popular?api_key=\${API_KEY}&page=\${page}\`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    fetchMovies();
  }, [page]);

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <input 
        type="text" 
        placeholder="Search movies" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border w-full"
      />
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Release Date</th>
            <th className="border p-2">Rating</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map(movie => (
            <tr key={movie.id} className="hover:bg-gray-100">
              <td className="border p-2">{movie.title}</td>
              <td className="border p-2">{movie.release_date}</td>
              <td className="border p-2">{movie.vote_average}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button 
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white disabled:opacity-50"
        >
          Previous
        </button>
        <button 
          onClick={() => setPage(p => p + 1)}
          className="px-4 py-2 bg-blue-500 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};`,
      },
    ],
  },
  {
    id: 10002,
    question:
      "Build a star rating component with click and hover functionality that allows users to rate items from 1 to 5 stars",
    answer: [
      {
        type: "text",
        content:
          "Create a flexible star rating component that enables users to select a rating by clicking on stars. The component should support hover previews, allow setting an initial rating, and provide a callback for when the rating changes.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const StarRating = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map(star => (
        <span key={star}>☆</span>
      ))}
    </div>
  );
};`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `import React, { useState } from 'react';

const StarRating = ({
  totalStars = 5,
  initialRating = 0,
  onRatingChange,
  readonly = false
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleRatingChange = (currentRating) => {
  if (!readonly) {
    setRating(currentRating);
    onRatingChange?.(currentRating);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            type="button"
            key={starValue}
            className={\`text-3xl transition-colors \${
              starValue <= (hover || rating) 
                ? 'text-yellow-500' 
                : 'text-gray-300'
            }\`}
            onClick={() => handleRatingChange(starValue)}
            onMouseEnter={() => !readonly && setHover(starValue)}
            onMouseLeave={() => !readonly && setHover(0)}
          >
            ★
          </button>
        );
      })}
      <span className="ml-2 text-gray-600">
        {rating} / {totalStars}
      </span>
    </div>
  );
};`,
      },
    ],
  },
  {
    id: 10003,
    question:
      "Create an accordion component with expandable/collapsible sections that can be toggled independently",
    answer: [
      {
        type: "text",
        content:
          "Develop a React accordion component where users can click on section headers to expand/collapse the corresponding content. Multiple sections can be open simultaneously, and the component should include smooth expand/collapse animations.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const Accordion = ({ items }) => {
  const [openSections, setOpenSections] = useState([]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => handleToggle(index)}>
            {item.title}
          </button>
          {openSections.includes(index) && (
            <div>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const Accordion = ({ items }) => {
  const [openSections, setOpenSections] = useState([]);

  const handleToggle = (index) => {
    setOpenSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border rounded-lg shadow-sm overflow-hidden"
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full p-4 flex justify-between items-center hover:bg-gray-50 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={openSections.includes(index)}
          >
            <span className="font-medium">{item.title}</span>
            <svg
              className={\`w-5 h-5 transition-transform duration-200
                \${openSections.includes(index) ? 'rotate-180' : ''}\`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={\`transition-[max-height,opacity] duration-300 ease-in-out
              \${openSections.includes(index)
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'}\`}
          >
            <div className="p-4 border-t bg-gray-50">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Example usage:
// const items = [
//   { title: 'Section 1', content: 'Content for section 1' },
//   { title: 'Section 2', content: 'Content for section 2' },
// ];
// <Accordion items={items} />`,
      },
    ],
  },
  {
    id: 10004,
    question: "Build a simple todo list with add and delete functionality",
    answer: [
      {
        type: "text",
        content:
          "Create a basic todo list component that allows users to add new tasks and remove existing ones. Focus on fundamental state management techniques and updating the UI as tasks are added or deleted.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const TodoList = () => {
  return (
    <div>
      <input placeholder="Add task" />
      <button>Add</button>
      <ul>
        {/* Todo items will go here */}
      </ul>
    </div>
  );
};`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      setTodos(prev => [...prev, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    setTodos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-list-container w-full max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold">My Todo List</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          className="border p-2 flex-grow rounded"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      {todos.length > 0 ? (
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 rounded"
            >
              <span>{todo}</span>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No tasks yet!</p>
      )}
    </div>
  );
};`,
      },
    ],
  },
  {
    id: 10005,
    question:
      "Create a search/filter list component that filters items as you type",
    answer: [
      {
        type: "text",
        content:
          "Implement a dynamic, real-time search and filtering mechanism for a list of items. This component will demonstrate advanced React state management techniques by providing an interactive user experience where the displayed list instantly updates as the user types into a search input. The challenge involves creating a responsive filtering system that matches search terms against list items, handling case-insensitive searches, and providing immediate visual feedback about matching and non-matching items.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const FilterableList = ({ items }) => {
  return (
    <div>
      <input placeholder="Search..." />
      <ul>
        {/* List items will appear here */}
      </ul>
    </div>
  );
};`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const FilterableList = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, items]);
  
  return (
    <div className="filterable-list-container w-full max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold">Searchable List</h2>
      <input
        type="text"
        className="border p-2 w-full rounded"
        placeholder="Type to filter..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredItems.length > 0 ? (
        <ul className="list-disc pl-5 space-y-1">
          {filteredItems.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No items found.</p>
      )}
    </div>
  );
};
  
// Example usage:
// const fruits = ["Apple", "Banana", "Cherry", "Date", "Grape", "Melon", "Orange"];
// <FilterableList items={fruits} />`,
      },
    ],
  },
  {
    id: 10006,
    question:
      "Build a tabs component that switches between different content panels",
    answer: [
      {
        type: "text",
        content:
          "Create a tabs component that conditionally renders different content panels based on the active tab. This tests your ability to manage state and conditionally display UI elements without reloading the page.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const Tabs = ({ tabs }) => {  
  return (
    <div></div>
  );
};`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex space-x-4 border-b mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={\`pb-2 transition-colors duration-150 focus:outline-none 
              \${activeIndex === index 
                ? 'border-b-2 border-blue-500 font-bold text-blue-500' 
                : 'text-gray-600 hover:text-gray-900'}\`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white border rounded shadow-sm">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};
  
// Example usage:
// const tabData = [
//   { label: 'Home', content: <p>Home Content</p> },
//   { label: 'Profile', content: <p>Profile Content</p> },
//   { label: 'Settings', content: <p>Settings Content</p> },
// ];
// <Tabs tabs={tabData} />`,
      },
    ],
  },
  {
    id: 10007,
    question: "Create a modal/dialog component with overlay and close button",
    answer: [
      {
        type: "text",
        content:
          "Build a modal component that appears on top of the current page content with a semi-transparent overlay. Users should be able to close the modal by clicking a close button or the overlay. This tests handling of portals, focus management, and controlled visibility.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <div>
      <div className="overlay">
        <div className="modal-content">
          <button onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
    </div>
  );
};`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `import { createPortal, useEffect } from 'react';
   
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white p-4 rounded shadow-xl relative w-full max-w-md mx-auto"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

// Example usage:
// const [open, setOpen] = useState(false);
// <button onClick={() => setOpen(true)}>Open Modal</button>
// <Modal isOpen={open} onClose={() => setOpen(false)}>
//   <h2 className="text-xl font-semibold mb-2">Modal Title</h2>
//   <p>This is the modal content.</p>
// </Modal>`,
      },
    ],
  },
  {
    id: 10008,
    question: "Build a form with validation and error messages",
    answer: [
      {
        type: "text",
        content:
          "Develop a form validation mechanism that ensures user input meets specific criteria before submission. This challenge focuses on creating an interactive form that provides real-time feedback, validates input fields, and demonstrates robust error handling techniques in React.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const FormWithValidation = () => {
  return (
    <form>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <button>Submit</button>
    </form>
  );
};`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const FormWithValidation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      // No errors, proceed with form submission logic
      alert("Form submitted successfully!");
    }
  };
  
  return (
    <div className="form-validation-container p-4">
      <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="border p-2 w-full"
            value={name}
            onChange={e => setName(e.target.value)}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-red-600 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>
  
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border p-2 w-full"
            value={email}
            onChange={e => setEmail(e.target.value)}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>
  
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};`,
      },
    ],
  },
  {
    id: 10009,
    question: "Create a multi-select component with checkboxes",
    answer: [
      {
        type: "text",
        content:
          "Design an interactive multi-selection interface that enables users to choose multiple options from a predefined list using checkboxes. This component will demonstrate sophisticated state management techniques by dynamically tracking and updating selected items in real-time. The challenge involves creating a flexible, user-friendly selection mechanism that provides immediate visual feedback, handles complex selection logic, and maintains a clean, responsive user experience across different screen sizes and interaction scenarios.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const MultiSelect = ({ options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <input type="checkbox" />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const MultiSelect = ({ options }) => {
  const [selected, setSelected] = useState([]);

  const handleChange = (option) => {
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="multi-select w-full max-w-sm mx-auto p-4 border rounded space-y-4">
      <h2 className="text-xl font-semibold">Choose Your Options</h2>
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={\`option-\${index}\`}
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={selected.includes(option)}
              onChange={() => handleChange(option)}
            />
            <label htmlFor={\`option-\${index}\`} className="cursor-pointer text-gray-800">
              {option}
            </label>
          </li>
        ))}
      </ul>
      <div className="border-t pt-2">
        {selected.length > 0 ? (
          <p className="text-sm text-gray-700">
            Selected: {selected.join(', ')}
          </p>
        ) : (
          <p className="text-sm text-gray-500">No options selected yet.</p>
        )}
      </div>
    </div>
  );
};
  
// Example usage:
// const fruits = ["Apple", "Banana", "Cherry", "Date", "Grape", "Orange"];
// <MultiSelect options={fruits} />`,
      },
    ],
  },
  {
    id: 10010,
    question: "Build a countdown timer with start/pause/reset",
    answer: [
      {
        type: "text",
        content:
          "Develop a sophisticated countdown timer component that demonstrates precise time management and state control in React. This challenge requires creating an interactive timer that can be started, paused, and reset, providing a comprehensive example of handling time-based state updates, managing component lifecycle with useEffect, and creating a responsive user interface that handles various timing scenarios. The implementation should gracefully manage edge cases such as timer completion, prevent negative time values, and provide clear user feedback throughout the countdown process.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const CountdownTimer = ({ initialSeconds = 60 }) => {
  return (
    <div>
      <div>Time</div>
      <button>Start</button>
      <button>Pause</button>
      <button>Reset</button>
    </div>
  );
};`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const CountdownTimer = ({ initialSeconds = 60 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    if (seconds <= 0) {
      setIsRunning(false);
      return;
    }
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const handleStart = () => {
    if (seconds > 0) setIsRunning(true);
  };
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(initialSeconds);
  };

  return (
    <div className="countdown-container w-full max-w-sm mx-auto p-4 border rounded flex flex-col items-center space-y-4">
      <h2 className="text-xl font-bold">Countdown Timer</h2>
      <div className="text-4xl font-mono">{seconds}s</div>
      <div className="flex space-x-2">
        <button
          onClick={handleStart}
          className="bg-green-600 text-white px-4 py-2 rounded disabled:bg-green-300"
          disabled={isRunning || seconds === 0}
        >
          Start
        </button>
        <button
          onClick={handlePause}
          className="bg-yellow-500 text-white px-4 py-2 rounded disabled:bg-yellow-300"
          disabled={!isRunning}
        >
          Pause
        </button>
        <button
          onClick={handleReset}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

// Example usage:
// <CountdownTimer initialSeconds={30} />`,
      },
    ],
  },
  {
    id: 10011,
    question: "Create a paginated list component with next/previous controls",
    answer: [
      {
        type: "text",
        content:
          "Design a dynamic list component that breaks large datasets into manageable pages. The component will allow users to navigate through items using intuitive next and previous controls.",
      },
      {
        type: "text",
        content:
          "This challenge tests state management skills by implementing pagination logic that efficiently handles varying list sizes and user interactions.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const PaginatedList = ({ items }) => {
  return (
    <div>
      <ul>
        {/* Items will be displayed here */}
      </ul>
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const PaginatedList = ({ items, itemsPerPage = 5 }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages || 1);
    }
  }, [totalPages, page]);
  
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);
  
  const handlePrev = () => {
    setPage(p => Math.max(1, p - 1));
  };
  
  const handleNext = () => {
    setPage(p => Math.min(totalPages, p + 1));
  };
  
  return (
    <div className="paginated-list-container w-full max-w-md mx-auto p-4 border rounded space-y-4">
      <ul className="list-disc pl-5 space-y-1">
        {currentItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">
          Page {page} of {totalPages || 1}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages || totalPages === 0}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
  
// Example usage:
// const allItems = Array.from({ length: 22 }, (_, i) => \`Item \${i + 1}\`);
// <PaginatedList items={allItems} itemsPerPage={5} />`,
      },
    ],
  },
  {
    id: 10012,
    question: "Build a comments section with add/delete functionality",
    answer: [
      {
        type: "text",
        content:
          "Create an interactive comments section that allows users to dynamically add and remove comments. The component will demonstrate core CRUD (Create, Read, Update, Delete) operations in React.",
      },
      {
        type: "text",
        content:
          "This challenge focuses on managing state for a list of comments, providing a user-friendly interface for comment interactions.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const CommentsSection = () => {
  return (
    <div>
      <div>
        {/* Comments will be displayed here */}
      </div>
      <input placeholder="Name" />
      <textarea placeholder="Comment" />
      <button>Add Comment</button>
    </div>
  );
};`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const CommentsSection = () => {
  const [comments, setComments] = useState([
    { id: 1, author: "Alice", text: "This is a great article!" },
    { id: 2, author: "Bob", text: "Thanks for sharing." }
  ]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  
  const handleAddComment = () => {
    if (author.trim() && text.trim()) {
      const newComment = {
        id: Date.now(),
        author: author.trim(),
        text: text.trim()
      };
      setComments(prev => [...prev, newComment]);
      setAuthor('');
      setText('');
    }
  };
  
  const handleDeleteComment = (id) => {
    setComments(prev => prev.filter(comment => comment.id !== id));
  };
  
  return (
    <div className="comments-container w-full max-w-md mx-auto p-4 border rounded space-y-4">
      <h2 className="text-xl font-semibold">Comments</h2>
      {comments.length > 0 ? (
        <ul className="space-y-2">
          {comments.map(comment => (
            <li 
              key={comment.id} 
              className="bg-gray-50 p-2 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{comment.author}</p>
                <p className="text-sm text-gray-700">{comment.text}</p>
              </div>
              <button
                className="text-sm text-red-500 hover:text-red-700"
                onClick={() => handleDeleteComment(comment.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No comments yet.</p>
      )}
  
      <div className="border-t pt-2 space-y-2">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Your name"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Your comment"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

// Example usage:
// <CommentsSection />`,
      },
    ],
  },
];
