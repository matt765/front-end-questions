import React, { useState, useRef, useEffect } from "react";
import useLayoutStore from "@/store/layoutStore";
import styles from "./Console.module.scss";
import { CodeIcon } from "@/assets/icons/CodeIcon";
import { LoaderIcon } from "@/assets/icons/LoaderIcon";
import { DicesIcon } from "@/assets/icons/DicesIcon";
import { ResetIcon } from "@/assets/icons/ResetIcon";
import { OutlinedButton } from "@/components/common/OutlinedButton";
import { ContainedButton } from "@/components/common/ContainedButton";
import useConsoleStore from "@/store/consoleStore";

const sampleCodes = [
  `// Bubble Sort
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));`,

  `// Fibonacci Sequence
const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibonacci(10));`,

  `// Prime Number Check
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(isPrime(17), isPrime(24));`,

  `// Palindrome Check
const isPalindrome = (str) => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));`,

  `// Binary Search
const binarySearch = (arr, target) => {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

console.log(binarySearch([1, 3, 5, 7, 9], 5));`,

  `// Quick Sort
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [], right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));`,

  `// Reverse Words in a String
const reverseWords = (str) => {
  return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
};

console.log(reverseWords("Hello World JavaScript"));`,

  `// Find Missing Number
const findMissingNumber = (arr) => {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
};

console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8]));`,

  `// Flatten Array
const flattenArray = (arr) => {
  return arr.reduce((flat, toFlatten) => 
    flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
};

console.log(flattenArray([1, [2, [3, 4], 5], 6]));`,

  `// Merge Sort
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (left, right) => {
  let result = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));`,

  `// Longest Common Substring
const longestCommonSubstring = (str1, str2) => {
  const m = str1.length, n = str2.length;
  let maxLength = 0, endIndex = 0;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i - 1;
        }
      }
    }
  }
  return str1.slice(endIndex - maxLength + 1, endIndex + 1);
};

console.log(longestCommonSubstring("ABCDGH", "ACDGHR"));`,

  `// Knapsack Problem (0/1)
const knapsack = (values, weights, capacity) => {
  const n = values.length;
  const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][capacity];
};

console.log(knapsack([60, 100, 120], [10, 20, 30], 50));`,

  `// Dijkstra's Algorithm
const dijkstra = (graph, start) => {
  const distances = {};
  const parents = {};
  const visited = new Set();

  for (let vertex in graph) {
    distances[vertex] = Infinity;
    parents[vertex] = null;
  }
  distances[start] = 0;

  while (true) {
    // Find the unvisited node with the smallest distance
    let minDistance = Infinity;
    let current = null;

    for (let vertex in distances) {
      if (!visited.has(vertex) && distances[vertex] < minDistance) {
        minDistance = distances[vertex];
        current = vertex;
      }
    }

    // If no such node exists, break the loop
    if (current === null) {
      break;
    }

    visited.add(current);

    for (let neighbor in graph[current]) {
      const distance = distances[current] + graph[current][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        parents[neighbor] = current;
      }
    }
  }

  return { distances, parents };
};

const graph = {
  A: { B: 4, C: 2 },
  B: { D: 3, E: 1 },
  C: { B: 1, D: 5 },
  D: { E: 2 },
  E: {}
};

console.log(dijkstra(graph, 'A'));`,

  `// Depth-First Search (DFS)
const dfs = (graph, start, visited = new Set()) => {
  console.log(start);
  visited.add(start);
  for (let neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
};
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};
dfs(graph, 'A');`,

  `// Timed Messages
let count = 0;
const intervalId = setInterval(() => {
  console.log(\`Message \${count + 1}\`);
  count++;
  if (count >= 5) {
    clearInterval(intervalId);
    console.log('Finished');
  }
}, 500);`,

  `// Promise Chain
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const performTasks = async () => {
  console.log("Starting tasks...");
  
  return wait(500)
    .then(() => {
      console.log("Task 1 completed");
      return wait(600);
    })
    .then(() => {
      console.log("Task 2 completed");
      return wait(700);
    })
    .then(() => {
      console.log("Task 3 completed");
      return wait(800);
    })
    .then(() => {
      console.log("Task 4 completed");
      console.log("All tasks completed!");
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
};

await performTasks();
`,

  `// Loading Bar with Percentage
let progress = 0;
const total = 40;
const barLength = 40;
const percentageInterval = setInterval(() => {
  console.clear();
  let filledLength = Math.floor((progress / total) * barLength);
  let bar = '[' + '='.repeat(filledLength) + ' '.repeat(barLength - filledLength) + \`] \${Math.floor((progress / total) * 100)}%\`;
  console.log(bar);
  progress++;
  
  if (progress > total) {
    clearInterval(percentageInterval);
    console.log('Loading Complete!');
  }
}, 100);`,

  `// Countdown Timer
let countdown = 10;
const countdownInterval = setInterval(() => {
  console.clear();
  if (countdown > 0) {
    console.log(\`Countdown: \${countdown}\`);
    countdown--;
  } else {
    clearInterval(countdownInterval);
    console.log('Countdown Complete!');
  }
}, 500);`,
  `// Draw a triangle
const drawEquilateralTriangle = (height) => {
  for (let i = 0; i < height; i++) {
    const spaces = ' '.repeat(height - i - 1);
    const stars = '*'.repeat(2 * i + 1);
    console.log(spaces + stars + spaces);
  }
};

drawEquilateralTriangle(10);`,
  `// Wave Pattern
let amplitude = 5;
let frequency = 0.5;

for (let i = 0; i < 40; i++) {
  let y = Math.round(amplitude * Math.sin(frequency * i));
  console.log(" ".repeat(amplitude + y) + "*");
}`,
  `// Draw a heart
const size = 6;

for (let i = size / 2; i < size; i += 2) {
  let row = " ".repeat((size - i) / 2) + "*".repeat(i) + " ".repeat(size - i) + "*".repeat(i);
  console.log(row);
}
for (let i = size; i > 0; i--) {
  let row = " ".repeat(size - i) + "*".repeat(i * 2 - 1);
  console.log(row);
}
`,
];

export const JavaScriptConsole: React.FC = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const { consoleCode, isConsoleOpen, toggleConsole, setConsoleCode } =
    useConsoleStore();
  const outputRef = useRef<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const workerRef = useRef<Worker | null>(null);
  const isExecutingRef = useRef(isExecuting);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // This effect loads saved code from storage on initial mount
  useEffect(() => {
    const savedCode = useConsoleStore.getState().consoleCode;
    if (savedCode) {
      setCode(savedCode);
    }
  }, []);
  const isUpdatingFromStore = useRef(false);

  //  This useEffect ensures that whenever consoleCode in the Zustand store changes,
  //  the local code state in JavaScriptConsole is updated accordingly.
  useEffect(() => {
    if (consoleCode !== code) {
      isUpdatingFromStore.current = true;
      setCode(consoleCode);
    }
  }, [consoleCode]);

  useEffect(() => {
    if (isUpdatingFromStore.current) {
      isUpdatingFromStore.current = false;
    } else {
      if (code !== consoleCode) {
        setConsoleCode(code);
      }
    }
  }, [code]);

  useEffect(() => {
    return () => {
      if (isExecuting) {
        setIsExecuting(false);
      }
    };
  }, [isExecuting]);
  useEffect(() => {
    isExecutingRef.current = isExecuting;
  }, [isExecuting]);

  useEffect(() => {
    return () => {
      if (isExecutingRef.current) {
        setIsExecuting(false);
      }
      if (workerRef.current) {
        workerRef.current.terminate();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Normalize error messages to start with "Error: "
  const normalizeErrorMessage = (error: string) => {
    let normalizedMessage = error.replace(/^(Error:\s*)+/, "");
    return `Error: ${normalizedMessage}`;
  };

  const executeCode = () => {
    if (code.length > 5000) {
      outputRef.current.push("Error: Code exceeds the 5000-character limit.");
      const outputText = outputRef.current.join("\n");
      setOutput(outputText);
      return;
    }

    setIsExecuting(true);
    isExecutingRef.current = true;
    setOutput("");
    outputRef.current = [];

    if (workerRef.current) {
      workerRef.current.terminate();
      workerRef.current = null;
    }

    workerRef.current = new Worker("/worker.js");

    timeoutRef.current = setTimeout(() => {
      if (isExecutingRef.current) {
        if (workerRef.current) {
          workerRef.current.terminate();
          workerRef.current = null;
        }
        outputRef.current.push("Error: Execution timed out after 10 seconds.");
        setOutput(outputRef.current.join("\n"));
        setIsExecuting(false);
        isExecutingRef.current = false;
      }
    }, 10000);

    workerRef.current.onmessage = (e) => {
      if (!isExecutingRef.current) return;

      const { output, error, done } = e.data;

      if (error) {
        if (error.includes("Output limit")) {
          outputRef.current.push(error);
          setOutput(outputRef.current.join("\n"));
          setIsExecuting(false);
          isExecutingRef.current = false;

          if (workerRef.current) {
            workerRef.current.terminate();
            workerRef.current = null;
          }
        } else {
          const errorMessage = normalizeErrorMessage(error);
          outputRef.current.push(errorMessage);
          setOutput(outputRef.current.join("\n"));

          if (done) {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
              timeoutRef.current = null;
            }
            setIsExecuting(false);
            isExecutingRef.current = false;
          }
        }
      } else if (output && output.trim()) {
        outputRef.current.push(output);

        if (outputRef.current.length > 500) {
          outputRef.current.push("Error: Output limit of 500 lines exceeded.");
          setOutput(outputRef.current.join("\n"));
          setIsExecuting(false);
          isExecutingRef.current = false;

          if (workerRef.current) {
            workerRef.current.terminate();
            workerRef.current = null;
          }
          return;
        }

        const outputText = outputRef.current.join("\n");
        setOutput(outputText);
      }

      if (done) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        setIsExecuting(false);
        isExecutingRef.current = false;
      }
    };

    workerRef.current.onerror = (e) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      outputRef.current.push(`Error: ${e.message}`);
      setOutput(outputRef.current.join("\n"));
      setIsExecuting(false);
      isExecutingRef.current = false;

      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }
    };

    workerRef.current.postMessage({ code });
  };

  const clearCode = () => {
    setCode("");
    setOutput("");
    if (workerRef.current) {
      workerRef.current.terminate();
      workerRef.current = null;
    }
    setIsExecuting(false);
  };

  const getRandomCode = () => {
    // Extract the title from the current code
    const currentTitle = code.split("\n")[0].trim();

    // Filter out the current code from the sampleCodes array
    const availableCodes = sampleCodes.filter((sampleCode) => {
      const sampleTitle = sampleCode.split("\n")[0].trim();
      return sampleTitle !== currentTitle;
    });

    // If there are no other codes available, do nothing
    if (availableCodes.length === 0) return;

    // Randomly select a new code from the available codes
    const randomIndex = Math.floor(Math.random() * availableCodes.length);
    setCode(availableCodes[randomIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      executeCode();
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  return (
    <div className={styles.consoleWrapper}>
      {isConsoleOpen && (
        <div className={styles.console}>
          <div className={styles.header}>
            <h3>JavaScript Console</h3>
            <button onClick={toggleConsole}>✕</button>
          </div>
          <div className={styles.content}>
            <div className={styles.leftPanel}>
              <textarea
                ref={textareaRef}
                value={code}
                onChange={handleCodeChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter your JavaScript code here..."
                className={styles.input}
                spellCheck={false}
                maxLength={5000}
              />
              <div className={styles.buttonGroup}>
                <div className={styles.executeButton}>
                  <ContainedButton onClick={executeCode} disabled={isExecuting}>
                    {isExecuting ? (
                      <div className={styles.executeButtonLoader}>
                        <LoaderIcon />
                      </div>
                    ) : (
                      "Execute"
                    )}
                  </ContainedButton>
                </div>
                <div className={styles.clearButton}>
                  <OutlinedButton onClick={clearCode} text="">
                    <ResetIcon />
                  </OutlinedButton>
                </div>
                <div className={styles.lotteryButton}>
                  <OutlinedButton onClick={getRandomCode} text="">
                    <DicesIcon />
                  </OutlinedButton>
                </div>
              </div>
            </div>
            <div className={styles.outputWrapper}>
              <pre className={styles.output}>
                {isExecuting && (
                  <div className={styles.outputLoader}>
                    <LoaderIcon />
                  </div>
                )}
                {output}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
