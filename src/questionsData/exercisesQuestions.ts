import { Question } from "@/components/questions/types";

export const exercisesQuestionsData: Question[] = [
  {
    id: 9001,
    question: "Generate the first 10 numbers in the Fibonacci sequence",
    answer: [
      {
        type: "text",
        content:
          "Your task is to write a function that returns an array containing the first 10 numbers of the Fibonacci sequence, which is a series where each number is the sum of the two preceding ones",
      },
      {
        type: "unordered-list",
        content:
          "Initialize the sequence with the first two Fibonacci numbers (0 and 1)\nReturn an array containing exactly 10 Fibonacci numbers",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
const fibonacci = (count) => {
  // Implementation here
}

console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibonacci(10))`,
      },
    ],
  },
  {
    id: 9002,
    question:
      'Print numbers from 1 to 100, replacing multiples of 3 with "Fizz," multiples of 5 with "Buzz," and both with "FizzBuzz" (FizzBuzz)',
    answer: [
      {
        type: "text",
        content:
          "FizzBuzz is a classic programming problem used to teach division and conditionals",
      },
      {
        type: "text",
        content:
          'Your task is to loop through numbers from 1 to 100 and apply the FizzBuzz rules. Replace numbers divisible by 3 with "Fizz," numbers divisible by 5 with "Buzz," and numbers divisible by both with "FizzBuzz."',
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}

// Outputs numbers from 1 to 100 with appropriate replacements`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const fizzBuzz = (n) => {
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n;
}

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}`,
      },
    ],
  },
  {
    id: 9003,
    question:
      "Implement a function to traverse a graph by exploring as far as possible before backtracking (Depth-first search)",
    answer: [
      {
        type: "text",
        content:
          "Depth-first search (DFS) is a fundamental graph traversal algorithm that explores paths to their full depth before backtracking. Used extensively in tree traversal, pathfinding, and solving maze-like problems, DFS excels in scenarios where complete exploration of branches is needed before moving to siblings, making it particularly effective for tasks like topological sorting, cycle detection, and generating game trees",
      },
      {
        type: "text",
        content:
          "Create a function that performs DFS on a graph represented as an adjacency list. Your implementation should handle cycles and demonstrate both recursive and iterative approaches",
      },
      {
        type: "unordered-list",
        content:
          "Implement both recursive and iterative solutions\nTrack visited nodes to avoid cycles\nReturn traversal order array\nHandle invalid inputs",
      },
      {
        type: "code",
        language: "javascript",
        content: `const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: [],
  e: ['f'],
  f: []
};

dfs(graph, 'a'); // Should visit nodes in depth-first order`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const dfs = (graph, start, visited = new Set()) => {
  if (!graph[start] || visited.has(start)) return [];

  const result = [start];
  visited.add(start);
  console.log(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      result.push(...dfs(graph, neighbor, visited));
    }
  }
    
  return result;
};

const dfsIterative = (graph, start) => {
  const visited = new Set();
  const stack = [start];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      console.log(node);
      
      for (const neighbor of [...(graph[node] || [])].reverse()) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return result;
};

// Test cases
const graph = {
a: ['b', 'c'],
b: ['d'],
c: ['e'],
d: [],
e: ['f'],
f: []
};

console.log('Recursive DFS:');
const recursiveResult = dfs(graph, 'a');
console.log('Result:', recursiveResult);

console.log('Iterative DFS:');
const iterativeResult = dfsIterative(graph, 'a');
console.log('Result:', iterativeResult);

// Expected output:
// Recursive DFS:
// a
// b
// d
// c
// e
// f
// Result: ['a', 'b', 'd', 'c', 'e', 'f']
//
// Iterative DFS:
// a
// c
// e
// f
// b
// d
// Result: ['a', 'b', 'd', 'c', 'e', 'f']`,
      },
    ],
  },
  {
    id: 9004,
    question: "Explore nodes layer by layer in a graph (Breadth-first search)",
    answer: [
      {
        type: "text",
        content:
          "Breadth-first search (BFS) is a graph traversal strategy where we visit all vertices at the current depth before moving deeper. It's commonly used in shortest path algorithms for unweighted graphs, web crawling, and social network analysis where relationships between nodes need to be mapped level by level",
      },
      {
        type: "text",
        content:
          "Implement a BFS function that processes a graph level by level using a queue data structure. The graph should be represented as an adjacency list, and your solution should handle cycles effectively",
      },
      {
        type: "unordered-list",
        content:
          "Use a queue for level-order traversal\nHandle cycles in the graph\nProcess nodes level by level\nReturn complete traversal order",
      },
      {
        type: "text",
        content:
          "The queue-based approach ensures we maintain the correct level order. While similar to DFS in time complexity, BFS provides the additional guarantee of finding shortest paths in unweighted graphs. The visited set prevents cycles from causing infinite loops, making the algorithm robust for any graph structure",
      },
      {
        type: "code",
        language: "javascript",
        content: `const graph = {
  a: ['b', 'c'],
  b: ['d', 'e'],
  c: ['f'],
  d: [],
  e: ['f'],
  f: []
};

bfs(graph, 'a'); // Should visit nodes level by level`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const bfs = (graph, start) => {
  const queue = [start];
  const visited = new Set();
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    if (!visited.has(node)) {
      console.log(node);
      result.push(node);
      visited.add(node);
      
      for (const neighbor of graph[node] || []) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
};

// Test cases
const graph = {
  a: ['b', 'c'],
  b: ['d', 'e'],
  c: ['f'],
  d: [],
  e: ['f'],
  f: []
};

console.log('BFS traversal:');
const result = bfs(graph, 'a');
console.log('Traversal order:', result);

// Expected output:
// BFS traversal:
// a
// b
// c
// d
// e
// f
// Traversal order: ['a', 'b', 'c', 'd', 'e', 'f']`,
      },
    ],
  },
  {
    id: 9005,
    question:
      "Divide and conquer by repeatedly narrowing the search range (Binary Search)",
    answer: [
      {
        type: "text",
        content:
          "Binary search is a divide-and-conquer algorithm that achieves O(log n) time complexity by leveraging sorted data to repeatedly halve the search space. This makes it exponentially faster than linear search for large datasets, though it requires the input to be sorted first",
      },
      {
        type: "text",
        content:
          "Implement both iterative and recursive versions of binary search that find the index of a target element in a sorted array. Handle edge cases and verify input validity",
      },
      {
        type: "unordered-list",
        content:
          "Verify array is sorted\nImplement both approaches\nHandle edge cases properly\nReturn -1 if not found",
      },
      {
        type: "code",
        language: "javascript",
        content: `const arr = [1, 3, 5, 7, 9, 11];
const target = 7;

console.log(binarySearch(arr, target)); // Expected: 3`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};

const binarySearchRecursive = (arr, target, left = 0, right = arr.length - 1) => {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }

  return binarySearchRecursive(arr, target, left, mid - 1);
};

// Test cases
const arr = [1, 3, 5, 7, 9, 11];

console.log('Iterative Binary Search:');
console.log('Finding 7:', binarySearch(arr, 7));
console.log('Finding 10:', binarySearch(arr, 10));

console.log('Recursive Binary Search:');
console.log('Finding 7:', binarySearchRecursive(arr, 7));
console.log('Finding 10:', binarySearchRecursive(arr, 10));

// Expected output:
// Iterative Binary Search:
// Finding 7: 3
// Finding 10: -1
//
// Recursive Binary Search:
// Finding 7: 3
// Finding 10: -1`,
      },
    ],
  },
  {
    id: 9006,
    question:
      "Check each element in a list to find a target value (Linear Search)",
    answer: [
      {
        type: "text",
        content:
          "Linear search is the most straightforward searching algorithm that sequentially checks each element in a collection until finding a match. Despite its O(n) time complexity, it's often practical for small datasets, unsorted collections, or when elements are likely to be found near the start of the array, making it a fundamental building block for more complex search algorithms",
      },
      {
        type: "text",
        content:
          "Write a function that performs linear search to find a target element in an array. Return the index of the first occurrence or -1 if not found",
      },
      {
        type: "unordered-list",
        content:
          "Return first occurrence index\nHandle different data types\nReturn -1 if not found\nValidate inputs properly",
      },
      {
        type: "code",
        language: "javascript",
        content: `const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(linearSearch(arr, 12)); // Expected: 3`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const linearSearch = (arr, target) => {
  if (!Array.isArray(arr)) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
};

// Test cases
const numbers = [64, 34, 25, 12, 22, 11, 90];
const strings = ['apple', 'banana', 'orange', 'grape'];

console.log('Number array tests:');
console.log('Finding 12:', linearSearch(numbers, 12));
console.log('Finding 100:', linearSearch(numbers, 100));

console.log('String array tests:');
console.log('Finding "orange":', linearSearch(strings, 'orange'));
console.log('Finding "mango":', linearSearch(strings, 'mango'));

// Expected output:
// Number array tests:
// Finding 12: 3
// Finding 100: -1
// String array tests:
// Finding "orange": 2
// Finding "mango": -1`,
      },
    ],
  },
  {
    id: 9007,
    question: "Find pairs in array using two pointers technique",
    answer: [
      {
        type: "text",
        content:
          "The two pointers technique is a powerful pattern for solving array-based problems, where maintaining two index references allows for efficient traversal and comparison of elements. It's particularly useful for sorted arrays and can often transform quadratic solutions into linear ones by eliminating the need for nested loops",
      },
      {
        type: "text",
        content:
          "Implement a function that finds a pair of numbers in a sorted array that sum to a target value. Return the indices of the numbers or null if no such pair exists",
      },
      {
        type: "unordered-list",
        content:
          "Ensure input array is sorted\nReturn pair indices or null\nMaintain O(n) time complexity\nHandle edge cases properly",
      },
      {
        type: "text",
        content:
          "The two pointers approach excels when the relationship between elements can guide pointer movement. In sum-finding problems, comparing the current sum with the target tells us which pointer to move, making the solution both elegant and efficient. This pattern can be adapted for many similar problems like finding triplets or subarrays with specific properties",
      },
      {
        type: "code",
        language: "javascript",
        content: `const arr = [2, 7, 11, 15];
const target = 9;

console.log(findPairSum(arr, target)); // Expected: [0, 1]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const findPairSum = (arr, target) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    return null;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    
    if (currentSum === target) {
      return [left, right];
    }
    
    if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
};

// Test cases
const testArrays = [
  {
    arr: [2, 7, 11, 15],
    target: 9,
    description: "Basic case"
  },
  {
    arr: [1, 2, 3, 4, 5],
    target: 8,
    description: "Sum in middle"
  },
  {
    arr: [1, 2],
    target: 3,
    description: "Minimal array"
  },
  {
    arr: [1, 2, 3],
    target: 10,
    description: "No solution"
  },
  {
    arr: [],
    target: 5,
    description: "Empty array"
  }
];

console.log('Two Pointers Sum Tests:');
testArrays.forEach(({ arr, target, description }) => {
  console.log(\`\${description}:\`);
  console.log(\`Array: [\${arr}]\`);
  console.log(\`Target: \${target}\`);
  console.log(\`Result: \${JSON.stringify(findPairSum(arr, target))}\`);
});

// Expected output:
// Two Pointers Sum Tests:
//
// Basic case:
// Array: [2,7,11,15]
// Target: 9
// Result: [0,1]
//
// Sum in middle:
// Array: [1,2,3,4,5]
// Target: 8
// Result: [2,4]
//
// Minimal array:
// Array: [1,2]
// Target: 3
// Result: [0,1]
//
// No solution:
// Array: [1,2,3]
// Target: 10
// Result: null
//
// Empty array:
// Array: []
// Target: 5
// Result: null`,
      },
    ],
  },
  {
    id: 9008,
    question: "Reverse the order of characters in a string",
    answer: [
      {
        type: "text",
        content:
          "String reversal is a common programming task that tests understanding of string manipulation, array operations, and handling of special characters including Unicode. This operation appears frequently in text processing, palindrome checking, and as a building block for more complex string algorithms",
      },
      {
        type: "text",
        content:
          "Implement multiple approaches to reverse a string, demonstrating both built-in methods and manual iteration",
      },
      {
        type: "unordered-list",
        content:
          "Handle invalid inputs\nImplement multiple approaches\nConsider Unicode characters\nMaintain O(n) complexity",
      },
      {
        type: "code",
        language: "javascript",
        content: `const test = "Hello, World! 👋";
console.log(reverseString(test));     // Expected: "👋 !dlroW ,olleH"`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const reverseString = (str) => {
  if (typeof str !== 'string') return '';
  return [...str].reverse().join('');
};

const reverseStringLoop = (str) => {
  if (typeof str !== 'string') return '';
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
};

// Test cases
const testStrings = [
  "Hello, World! 👋",
  "JavaScript",
  "",
  "12345",
  undefined,
  null
];

console.log('String Reversal Tests:');
testStrings.forEach(str => {
  console.log(\`Original: "\${str}"\`);
  console.log(\`Built-in: "\${reverseString(str)}"\`);
  console.log(\`Loop:    "\${reverseStringLoop(str)}"\`);
});

// Expected output:
// String Reversal Tests:
//
// Original: "Hello, World! 👋"
// Built-in: "👋 !dlroW ,olleH"
// Loop:    "👋 !dlroW ,olleH"
//
// Original: "JavaScript"
// Built-in: "tpircSavaJ"
// Loop:    "tpircSavaJ"
//
// Original: ""
// Built-in: ""
// Loop:    ""
//
// Original: "12345"
// Built-in: "54321"
// Loop:    "54321"
//
// Original: "undefined"
// Built-in: ""
// Loop:    ""
//
// Original: "null"
// Built-in: ""
// Loop:    ""`,
      },
    ],
  },
  {
    id: 9009,
    question:
      "Check if two strings are made of the same characters (Anagram Check)",
    answer: [
      {
        type: "text",
        content:
          "Anagram checking is a classic string manipulation problem that tests ability to compare and process characters efficiently. This problem appears in many applications, from word games to text analysis, and offers multiple solution approaches with different performance characteristics and trade-offs",
      },
      {
        type: "text",
        content:
          "Create a function that determines if two strings are anagrams of each other, handling case sensitivity and special characters appropriately",
      },
      {
        type: "unordered-list",
        content:
          "Handle case sensitivity\nManage special characters\nImplement O(n) solution\nValidate inputs properly",
      },
      {
        type: "code",
        language: "javascript",
        content: `const str1 = "Tea Time";
const str2 = "Eat Time";

console.log(isAnagram(str1, str2)); // Expected: true`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const isAnagram = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') return false;

  const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const s1 = normalize(str1);
  const s2 = normalize(str2);

  if (s1.length !== s2.length) return false;

  const charCount = new Map();

  for (const char of s1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of s2) {
    const count = charCount.get(char);
    if (!count) return false;
    charCount.set(char, count - 1);
  }

  return Array.from(charCount.values()).every(count => count === 0);
};

// Test cases
const testCases = [
  ['Tea Time', 'Eat Time'],
  ['listen', 'silent'],
  ['hello', 'world'],
  ['A gentleman', 'Elegant man'],
  ['', ''],
  ['a', ''],
  [null, 'test']
];

console.log('Anagram Tests:');
testCases.forEach(([str1, str2], index) => {
  console.log(\`\nTest \${index + 1}:\`);
  console.log(\`String 1: "\${str1}"\`);
  console.log(\`String 2: "\${str2}"\`);
  console.log(\`Result: \${isAnagram(str1, str2)}\`);
});

// Expected output:
// Anagram Tests:
//
// Test 1:
// String 1: "Tea Time"
// String 2: "Eat Time"
// Result: true
//
// Test 2:
// String 1: "listen"
// String 2: "silent"
// Result: true
//
// Test 3:
// String 1: "hello"
// String 2: "world"
// Result: false
//
// Test 4:
// String 1: "A gentleman"
// String 2: "Elegant man"
// Result: true
//
// Test 5:
// String 1: ""
// String 2: ""
// Result: true
//
// Test 6:
// String 1: "a"
// String 2: ""
// Result: false
//
// Test 7:
// String 1: "null"
// String 2: "test"
// Result: false`,
      },
    ],
  },
  {
    id: 9010,
    question:
      "Check if a string can be split into dictionary words (Word Break)",
    answer: [
      {
        type: "text",
        content:
          "Word Break is a classic dynamic programming challenge that tests the ability to identify and efficiently solve problems with overlapping subproblems by using previously computed results. This problem appears frequently in string parsing and natural language processing applications. Write a function that determines if a string can be segmented into words from a given dictionary. The function should return true if such segmentation is possible",
      },
      {
        type: "unordered-list",
        content:
          "Use dynamic programming approach\nHandle empty strings and dictionary\nImplement efficient memoization\nConsider case sensitivity",
      },
      {
        type: "code",
        language: "javascript",
        content: `const dict = ['leet', 'code'];
const str = "leetcode";

console.log(wordBreak(str, dict)); // Expected: true`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const wordBreak = (s, wordDict) => {
  if (!s || !wordDict.length) return false;

  const dict = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && dict.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};
  
// Test cases
const testCases = [
  {
    str: "leetcode",
    dict: ["leet", "code"]
  },
  {
    str: "applepenapple",
    dict: ["apple", "pen"]
  },
  {
    str: "catsandog",
    dict: ["cats", "dog", "sand", "and", "cat"]
  },
  {
    str: "",
    dict: ["test"]
  }
];

console.log('Word Break Tests:');
testCases.forEach(({ str, dict }) => {
  console.log(\`\nString: "\${str}"\`);
  console.log(\`Dictionary: [\${dict.join(', ')}]\`);
  console.log(\`Can be broken: \${wordBreak(str, dict)}\`);
});

// Expected output:
// Word Break Tests:
//
// String: "leetcode"
// Dictionary: [leet, code]
// Can be broken: true
//
// String: "applepenapple"
// Dictionary: [apple, pen]
// Can be broken: true
//
// String: "catsandog"
// Dictionary: [cats, dog, sand, and, cat]
// Can be broken: false
//
// String: ""
// Dictionary: [test]
// Can be broken: false`,
      },
    ],
  },
  {
    id: 9011,
    question:
      "Expand and contract a range to find subarrays that meet criteria (Sliding Window)",
    answer: [
      {
        type: "text",
        content:
          "The sliding window technique is an optimization pattern used to solve array or string problems where we need to track a subset of elements in a specific range. It involves maintaining a window that can expand or contract over the data to find optimal solutions without unnecessary recalculations",
      },
      {
        type: "text",
        content:
          "Implement a function that finds the maximum sum of any contiguous subarray of size k in an array. The function should efficiently handle the window movement without recalculating the entire sum each time",
      },
      {
        type: "unordered-list",
        content:
          "Handle invalid inputs (k > array length)\nMaintain O(n) time complexity\nTrack current and maximum sums\nHandle edge cases (empty arrays)",
      },
      {
        type: "code",
        language: "javascript",
        content: `const arr = [2, 3, 4, 1, 5];
const k = 2;

console.log(maxSubarraySum(arr, k)); // Expected: 7 (sum of [3,4])`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const maxSubarraySum = (arr, k) => {
  if (!arr.length || k > arr.length) return null;

  let currentSum = 0;
  let maxSum = 0;

  // Calculate initial window sum
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;

  // Slide window and update sums
  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// Test cases
const testCases = [
  { arr: [2, 3, 4, 1, 5], k: 2 },
  { arr: [1, 1, 1, 1, 1], k: 3 },
  { arr: [1, 2], k: 3 },
  { arr: [], k: 1 }
];

console.log('Sliding Window Tests:');
testCases.forEach(({ arr, k }) => {
  console.log(\`\nArray: [\${arr}], k: \${k}\`);
  console.log(\`Result: \${maxSubarraySum(arr, k)}\`);
});

// Expected output:
// Sliding Window Tests:
//
// Array: [2,3,4,1,5], k: 2
// Result: 7
//
// Array: [1,1,1,1,1], k: 3
// Result: 3
//
// Array: [1,2], k: 3
// Result: null
//
// Array: [], k: 1
// Result: null`,
      },
    ],
  },
  {
    id: 9012,
    question:
      "Check if a string has balanced opening and closing brackets (Valid Parentheses)",
    answer: [
      {
        type: "text",
        content:
          "The parentheses validation problem demonstrates how stack data structures can efficiently track and verify matching pairs in sequences. This fundamental problem appears in many real-world applications, from code editors checking syntax to expression evaluators. Create a function that determines if a string containing different types of brackets is valid, meaning every opening bracket has a corresponding closing bracket in the correct order",
      },
      {
        type: "unordered-list",
        content:
          "Handle multiple bracket types\nEnsure correct opening/closing order\nManage empty strings\nMaintain O(n) complexity",
      },
      {
        type: "text",
        content:
          "Using a stack for this problem provides an elegant solution that naturally handles nested structures. The last-in-first-out nature of stacks perfectly matches the nesting behavior of brackets, and using a hash map for bracket pairs makes the matching logic clean and maintainable. This approach can be extended to handle more complex validation scenarios",
      },
      {
        type: "code",
        language: "javascript",
        content: `const str1 = "({[]})";
const str2 = "([)]";

console.log(isValidParentheses(str1)); // Expected: true
console.log(isValidParentheses(str2)); // Expected: false`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const isValidParentheses = (str) => {
  const stack = [];
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of str) {
    if ('({['.includes(char)) {
      stack.push(char);
    } else if (')}]'.includes(char)) {
      if (stack.pop() !== brackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Test cases
const testCases = [
  '({[]})',
  '([)]',
  '{[]}',
  '(',
  '',
  '[]{}()'
];

console.log('Parentheses Validation Tests:');
testCases.forEach(test => {
  console.log(\`\nInput: "\${test}"\`);
  console.log(\`Valid: \${isValidParentheses(test)}\`);
});

// Expected output:
// Parentheses Validation Tests:
//
// Input: "({[]})"
// Valid: true
//
// Input: "([)]"
// Valid: false
//
// Input: "{[]}"
// Valid: true
//
// Input: "("
// Valid: false
//
// Input: ""
// Valid: true
//
// Input: "[]{}()"
// Valid: true`,
      },
    ],
  },
  {
    id: 9013,
    question:
      "Find all possible solutions by trying different paths and backtracking when needed (Backtracking)",
    answer: [
      {
        type: "text",
        content:
          "Backtracking is a systematic approach to finding solutions for complex problems by incrementally building candidates and abandoning those that fail to satisfy constraints. This algorithmic technique is particularly powerful for solving problems that require exploring all possible combinations or permutations while respecting certain rules or limitations",
      },
      {
        type: "text",
        content:
          "Write a function that solves the N-Queens problem: place N chess queens on an N×N board so that no two queens threaten each other. Return all possible solutions",
      },
      {
        type: "unordered-list",
        content:
          "Validate queen placements\nImplement efficient backtracking\nHandle various board sizes\nReturn all valid solutions",
      },
      {
        type: "code",
        language: "javascript",
        content: `console.log(solveNQueens(4));
// Expected: Array of valid board configurations`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const solveNQueens = (n) => {
  const solutions = [];
  const board = Array(n).fill().map(() => Array(n).fill('.'));
  
  const isValid = (row, col) => {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }
    
    // Check diagonals
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
    return true;
  };
  
  const backtrack = (row = 0) => {
    if (row === n) {
      solutions.push(board.map(row => row.join('')));
      return;
    }
    
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  };
  
  backtrack();
  return solutions;
};

// Test cases
console.log('N-Queens Solutions:');
[1, 4].forEach(n => {
  console.log(\`\nN = \${n}:\`);
  console.log(solveNQueens(n));
});

// Expected output:
// N-Queens Solutions:
//
// N = 1:
// ["Q"]
//
// N = 4:
// [
//   [".Q.",
//    "...Q",
//    "Q..",
//    "..Q."],
//   ["..Q",
//    "Q..",
//    "...Q",
//    ".Q.."]
// ]`,
      },
    ],
  },
  {
    id: 9014,
    question: "Split and merge sorted halves to sort an array (Merge Sort)",
    answer: [
      {
        type: "text",
        content:
          "Merge sort is a classic divide-and-conquer algorithm that demonstrates efficient sorting through recursion and merging. It provides stable sorting with guaranteed O(n log n) time complexity. Implement a merge sort function that takes an unsorted array and returns it in sorted order. The solution should handle the recursive division and merging of subarrays efficiently",
      },
      {
        type: "unordered-list",
        content:
          "Divide array into smaller subarrays\nMerge sorted subarrays correctly\nHandle edge cases (empty/single element)",
      },
      {
        type: "text",
        content:
          "Merge sort is particularly efficient for large datasets and linked lists. While its space complexity is O(n), it offers advantages like stability and predictable performance. The algorithm shines when dealing with datasets too large to fit in memory, as it can be adapted for external sorting",
      },
      {
        type: "code",
        language: "javascript",
        content: `const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // Expected: [3, 9, 10, 27, 38, 43, 82]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

// Test cases
const testArrays = [
  [38, 27, 43, 3, 9, 82, 10],
  [1],
  [],
  [5, 4, 3, 2, 1],
  [1, 1, 1, 1]
];

console.log('Merge Sort Tests:');
testArrays.forEach(arr => {
  console.log(\`\nOriginal: [\${arr}]\`);
  console.log(\`Sorted: [\${mergeSort(arr)}]\`);
});

// Expected output:
// Merge Sort Tests:
//
// Original: [38,27,43,3,9,82,10]
// Sorted: [3,9,10,27,38,43,82]
//
// Original: [1]
// Sorted: [1]
//
// Original: []
// Sorted: []
//
// Original: [5,4,3,2,1]
// Sorted: [1,2,3,4,5]
//
// Original: [1,1,1,1]
// Sorted: [1,1,1,1]`,
      },
    ],
  },
  {
    id: 9015,
    question:
      "Order graph nodes in a sequence respecting dependencies (Topological Sort)",
    answer: [
      {
        type: "text",
        content:
          "Topological sorting of a Directed Acyclic Graph (DAG) is a linear ordering of its vertices such that for every directed edge uv, vertex u comes before v in the ordering",
      },
      {
        type: "text",
        content:
          "Implement a function that performs a topological sort on a given DAG",
      },
      {
        type: "unordered-list",
        content:
          "Use depth-first search to explore nodes\nDetect cycles to ensure the graph is acyclic\nReturn a list representing the topological order",
      },
      {
        type: "code",
        language: "javascript",
        content: `const graph = {
  5: [2, 0],
  4: [0, 1],
  2: [3],
  3: [1],
  0: [],
  1: []
};

console.log(topologicalSort(graph));
// Expected: [5, 4, 2, 3, 1, 0]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const topologicalSort = (graph) => {
  const visited = new Set();
  const stack = [];
  
  const dfs = (node) => {
    if (visited.has(node)) return;
    visited.add(node);
    for (const neighbor of graph[node]) {
      dfs(neighbor);
    }
    stack.push(node);
  };
  
  for (const node in graph) {
    dfs(node);
  }
  
  return stack.reverse();
};

// Test case
const graph = {
  5: [2, 0],
  4: [0, 1],
  2: [3],
  3: [1],
  0: [],
  1: []
};

console.log('Topological Sort Result:');
console.log(topologicalSort(graph));

// Expected output:
// Topological Sort Result:
// [5, 4, 2, 3, 1, 0]`,
      },
    ],
  },
  {
    id: 9016,
    question:
      "Repeatedly swap adjacent elements to sort an array (Bubble Sort)",
    answer: [
      {
        type: "text",
        content:
          "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. Your task is to implement the bubble sort algorithm to sort an array of numbers",
      },
      {
        type: "unordered-list",
        content:
          "Implement nested loops to compare adjacent elements\nOptimize by reducing the range after each pass\nDetect if no swaps are made to terminate early",
      },
      {
        type: "code",
        language: "javascript",
        content: `const array = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array);
console.log(array);
// Expected: [11, 12, 22, 25, 34, 64, 90]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const bubbleSort = (arr) => {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
};

// Test cases
const arrays = [
  [64, 34, 25, 12, 22, 11, 90],
  [5, 1, 4, 2, 8],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  []
];

console.log('Bubble Sort Tests:');
arrays.forEach(arr => {
  bubbleSort(arr);
  console.log(\`Sorted Array: [\${arr}]\`);
});

// Expected output:
// Bubble Sort Tests:
// Sorted Array: [11,12,22,25,34,64,90]
// Sorted Array: [1,2,4,5,8]
// Sorted Array: [1,2,3,4,5]
// Sorted Array: [1,2,3,4,5]
// Sorted Array: []`,
      },
    ],
  },
  {
    id: 9017,
    question:
      "Sort by placing elements into different 'buckets' before sorting each bucket (Bucket Sort)",
    answer: [
      {
        type: "text",
        content:
          "Bucket sort divides the elements into several buckets, sorts each bucket individually, and then combines them to form the sorted array",
      },
      {
        type: "text",
        content:
          "Implement bucket sort to sort an array of floating-point numbers between 0 and 1",
      },
      {
        type: "unordered-list",
        content:
          "Determine the number of buckets and their ranges\nDistribute the elements into appropriate buckets\nSort individual buckets using another sorting algorithm",
      },
      {
        type: "text",
        content:
          "While bucket sort can achieve linear time complexity under optimal conditions, it requires knowledge of the data distribution and is most effective when input is uniformly distributed over a range. By dividing elements into buckets and sorting each, we can significantly improve sorting performance for certain datasets",
      },
      {
        type: "code",
        language: "javascript",
        content: `const array = [0.42, 0.32, 0.23, 0.52, 0.25, 0.47, 0.51];
console.log(bucketSort(array));
// Expected: [0.23, 0.25, 0.32, 0.42, 0.47, 0.51, 0.52]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const bucketSort = (arr) => {
  const n = arr.length;
  const buckets = Array.from({ length: n }, () => []);

  // Distribute input array values into buckets
  for (let i = 0; i < n; i++) {
    const index = Math.floor(arr[i] * n);
    buckets[index].push(arr[i]);
  }

  // Sort individual buckets
  for (let i = 0; i < n; i++) {
    buckets[i].sort((a, b) => a - b);
  }

  // Concatenate all buckets into a single array
  return [].concat(...buckets);
};

// Test cases
const arrays = [
  [0.42, 0.32, 0.23, 0.52, 0.25, 0.47, 0.51],
  [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68],
  [],
  [0.9]
];

console.log('Bucket Sort Tests:');
arrays.forEach(arr => {
  console.log(\`Original Array: [\${arr}]\`);
  console.log(\`Sorted Array: [\${bucketSort(arr)}]\`);
});

// Expected output:
// Bucket Sort Tests:
// Original Array: [0.42,0.32,0.23,0.52,0.25,0.47,0.51]
// Sorted Array: [0.23,0.25,0.32,0.42,0.47,0.51,0.52]
//
// Original Array: [0.78,0.17,0.39,0.26,0.72,0.94,0.21,0.12,0.23,0.68]
// Sorted Array: [0.12,0.17,0.21,0.23,0.26,0.39,0.68,0.72,0.78,0.94]
//
// Original Array: []
// Sorted Array: []
//
// Original Array: [0.9]
// Sorted Array: [0.9]`,
      },
    ],
  },
  {
    id: 9018,
    question:
      "Find the smallest unsorted element and move it to the front (Selection Sort)",
    answer: [
      {
        type: "text",
        content:
          "Selection sort divides the input list into two parts: a sorted sublist and an unsorted sublist. It repeatedly selects the smallest element from the unsorted sublist and moves it to the end of the sorted sublist. Your task is to implement the selection sort algorithm to sort an array of numbers",
      },
      {
        type: "unordered-list",
        content:
          "Iterate over the array to find the minimum element\nSwap the found minimum element with the first element\nRepeat for the remaining unsorted subarray",
      },
      {
        type: "code",
        language: "javascript",
        content: `const array = [64, 25, 12, 22, 11];
selectionSort(array);
console.log(array); // Expected: [11, 12, 22, 25, 64]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const selectionSort = (arr) => {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
};

// Test cases
const arrays = [
  [64, 25, 12, 22, 11],
  [5, 3, 8, 4, 2],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  []
];

console.log('Selection Sort Tests:');
arrays.forEach(arr => {
  selectionSort(arr);
  console.log(\`Sorted Array: [\${arr}]\`);
});

// Expected output:
// Selection Sort Tests:
// Sorted Array: [11, 12, 22, 25, 64]
// Sorted Array: [2, 3, 4, 5, 8]
// Sorted Array: [1, 2, 3, 4, 5]
// Sorted Array: [1, 2, 3, 4, 5]
// Sorted Array: []`,
      },
    ],
  },
  {
    id: 9019,
    question:
      "Insert each unsorted element into its correct position (Insertion Sort)",
    answer: [
      {
        type: "text",
        content:
          "Insertion sort builds the final sorted array one item at a time. It takes each element from the input data and finds the position it belongs within the sorted list and inserts it there",
      },
      {
        type: "text",
        content:
          "Implement the insertion sort algorithm to sort an array of numbers",
      },
      {
        type: "unordered-list",
        content:
          "Start from the second element and compare it with previous elements\nShift elements to make space for the inserted element\nRepeat until the array is sorted",
      },
      {
        type: "code",
        language: "javascript",
        content: `const array = [12, 11, 13, 5, 6];
insertionSort(array);
console.log(array); // Expected: [5, 6, 11, 12, 13]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const insertionSort = (arr) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
};

// Test cases
const arrays = [
  [12, 11, 13, 5, 6],
  [5, 2, 4, 6, 1, 3],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  []
];

console.log('Insertion Sort Tests:');
arrays.forEach(arr => {
  insertionSort(arr);
  console.log(\`Sorted Array: [\${arr}]\`);
});

// Expected output:
// Insertion Sort Tests:
// Sorted Array: [5, 6, 11, 12, 13]
// Sorted Array: [1, 2, 3, 4, 5, 6]
// Sorted Array: [1, 2, 3, 4, 5]
// Sorted Array: [1, 2, 3, 4, 5]
// Sorted Array: []`,
      },
    ],
  },
  {
    id: 9020,
    question: "Sort using a binary heap structure (Heap Sort)",
    answer: [
      {
        type: "text",
        content:
          "Heap sort is a comparison-based sorting technique based on a binary heap data structure. It involves building a max heap from the input data and then repeatedly extracting the maximum element from the heap and rebuilding the heap. Your task is to implement heap sort to sort an array of numbers",
      },
      {
        type: "unordered-list",
        content:
          "Build a max heap from the input data\nSwap the root of the heap with the last element\nReduce the heap size and heapify the root\nRepeat until the heap size is reduced to one",
      },
      {
        type: "text",
        content:
          "Heap sort offers an in-place sorting algorithm with a time complexity of O(n log n). While it doesn't require additional memory like merge sort, it is not a stable sort and may not maintain the order of equal elements. It's efficient for large datasets and is widely used when memory usage is a concern",
      },
      {
        type: "code",
        language: "javascript",
        content: `const array = [12, 11, 13, 5, 6, 7];
heapSort(array);
console.log(array); // Expected: [5, 6, 7, 11, 12, 13]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const heapSort = (arr) => {
  const n = arr.length;
  
  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  
  // One by one extract elements
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
};

const heapify = (arr, n, i) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
};

// Test cases
const arrays = [
  [12, 11, 13, 5, 6, 7],
  [4, 10, 3, 5, 1],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  []
];

console.log('Heap Sort Tests:');
arrays.forEach(arr => {
  heapSort(arr);
  console.log(\`Sorted Array: [\${arr}]\`);
});

// Expected output:
// Heap Sort Tests:
// Sorted Array: [5, 6, 7, 11, 12, 13]
// Sorted Array: [1, 3, 4, 5, 10]
// Sorted Array: [1, 2, 3, 4, 5]
// Sorted Array: [1, 2, 3, 4, 5]
// Sorted Array: []`,
      },
    ],
  },
  {
    id: 9021,
    question:
      "Use a pivot to partition elements into two groups for sorting (Quick Sort)",
    answer: [
      {
        type: "text",
        content:
          "Quick sort is a divide-and-conquer algorithm that selects a pivot element and partitions the array into two halves based on the pivot, recursively sorting the subarrays",
      },
      {
        type: "text",
        content:
          "Your task is to write a function that sorts an array using the quick sort algorithm",
      },
      {
        type: "unordered-list",
        content:
          "Implement the partitioning logic\nChoose an efficient pivot selection strategy\nEnsure the base case handles arrays of size 1 or 0",
      },
      {
        type: "code",
        language: "javascript",
        content: `const array = [10, 7, 8, 9, 1, 5];
quickSort(array);
console.log(array); // Expected: [1, 5, 7, 8, 9, 10]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
};

const partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
};

// Test cases
const arrays = [
  [10, 7, 8, 9, 1, 5],
  [64, 34, 25, 12, 22, 11, 90],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  []
];

console.log('Quick Sort Tests:');
arrays.forEach(arr => {
  quickSort(arr);
  console.log(\`Sorted Array: [\${arr}]\`);
});

// Expected output:
// Quick Sort Tests:
// Sorted Array: [1, 5, 7, 8, 9, 10]
// Sorted Array: [11, 12, 22, 25, 34, 64, 90]
// Sorted Array: [1, 2, 3, 4, 5]
// Sorted Array: [1, 2, 3, 4, 5]
// Sorted Array: []`,
      },
    ],
  },
  {
    id: 9022,
    question:
      "Store strings in a prefix tree structure for fast retrieval (Trie)",
    answer: [
      {
        type: "text",
        content:
          "A trie, or prefix tree, is a data structure used for efficient retrieval of keys in a large set of strings. Each node represents a common prefix, allowing for fast insertions and lookups. Tries are especially useful for tasks like autocomplete and spell checking",
      },
      {
        type: "text",
        content:
          "Implement a Trie with methods for inserting words, searching for exact matches, and checking if any words start with a given prefix",
      },
      {
        type: "unordered-list",
        content:
          "Implement insertion and search operations\nHandle cases for words ending at a node",
      },
      {
        type: "code",
        language: "javascript",
        content: `const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple'));   // Expected: true
console.log(trie.search('app'));     // Expected: false
console.log(trie.startsWith('app')); // Expected: true
trie.insert('app');
console.log(trie.search('app'));     // Expected: true`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
  
  search(word) {
    const node = this._searchPrefix(word);
    return node !== null && node.isEndOfWord;
  }
  
  startsWith(prefix) {
    return this._searchPrefix(prefix) !== null;
  }
  
  _searchPrefix(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return null;
      }
      node = node.children[char];
    }
    return node;
  }
}

// Test cases
const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple'));   // Expected: true
console.log(trie.search('app'));     // Expected: false
console.log(trie.startsWith('app')); // Expected: true
trie.insert('app');
console.log(trie.search('app'));     // Expected: true

// Expected output:
// true
// false
// true
// true`,
      },
    ],
  },
  {
    id: 9023,
    question: "Compute cumulative sums for subarray calculations (Prefix Sum)",
    answer: [
      {
        type: "text",
        content:
          "Prefix sums are a technique used to calculate cumulative sums of a sequence of numbers. By precomputing these sums, you can efficiently calculate the sum of any subarray in constant time",
      },
      {
        type: "text",
        content:
          "Implement a function that computes the prefix sums of an array and uses it to calculate the sum of a given subarray",
      },
      {
        type: "unordered-list",
        content:
          "Compute the prefix sum array\nUse the prefix sums to calculate subarray sums efficiently\nHandle edge cases like empty arrays",
      },
      {
        type: "code",
        language: "javascript",
        content: `const nums = [1, 2, 3, 4, 5];
const prefixSums = computePrefixSums(nums);
console.log(sumRange(prefixSums, 1, 3)); // Expected: 9 (sum of elements at indices 1 to 3)`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const computePrefixSums = (nums) => {
  const prefixSums = [0];
  for (let i = 0; i < nums.length; i++) {
    prefixSums.push(prefixSums[i] + nums[i]);
  }
  return prefixSums;
};

const sumRange = (prefixSums, left, right) => {
  return prefixSums[right + 1] - prefixSums[left];
};

// Test cases
const nums = [1, 2, 3, 4, 5];
const prefixSums = computePrefixSums(nums);
console.log(sumRange(prefixSums, 1, 3)); // Expected: 9
console.log(sumRange(prefixSums, 0, 4)); // Expected: 15
console.log(sumRange(prefixSums, 2, 2)); // Expected: 3

// Expected output:
// 9
// 15
// 3`,
      },
    ],
  },
  {
    id: 9024,
    question:
      "Find the k-th smallest element in an unsorted array (Quickselect)",
    answer: [
      {
        type: "text",
        content:
          "Quickselect is an efficient algorithm to find the k-th smallest element in an unordered list. It works similarly to quicksort but focuses only on the part of the array that contains the k-th smallest element",
      },
      {
        type: "text",
        content:
          "Implement the quickselect algorithm to find the k-th smallest element in an unsorted array",
      },
      {
        type: "unordered-list",
        content:
          "Use a partitioning method similar to quicksort\nReduce the problem size in each recursive call\nOptimize for average-case O(n) time complexity",
      },
      {
        type: "text",
        content:
          "Quickselect is efficient for finding specific order statistics without fully sorting the array, making it practical for large datasets where full sorting is unnecessary",
      },
      {
        type: "code",
        language: "javascript",
        content: `const arr = [7, 10, 4, 3, 20, 15];
console.log(quickSelect(arr, 3)); // Expected: 7 (3rd smallest element)`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const quickSelect = (arr, k) => {
  const select = (left, right, kSmallest) => {
    if (left === right) return arr[left];

    const pivotIndex = partition(arr, left, right);
    if (kSmallest === pivotIndex) {
      return arr[kSmallest];
    } else if (kSmallest < pivotIndex) {
      return select(left, pivotIndex - 1, kSmallest);
    } else {
      return select(pivotIndex + 1, right, kSmallest);
    }
  };

  const partition = (arr, left, right) => {
    const pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (arr[j] <= pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
  };

  return select(0, arr.length - 1, k - 1);
};

// Test cases
const arr1 = [7, 10, 4, 3, 20, 15];
console.log(quickSelect(arr1, 3)); // Expected: 7

const arr2 = [7, 10, 4, 3, 20, 15];
console.log(quickSelect(arr2, 4)); // Expected: 10

const arr3 = [12, 3, 5, 7, 19];
console.log(quickSelect(arr3, 2)); // Expected: 5

// Expected output:
// 7
// 10
// 5`,
      },
    ],
  },
  {
    id: 9025,
    question:
      "Find the shortest path from a source node to all other nodes (Dijkstra's Algorithm)",
    answer: [
      {
        type: "text",
        content:
          "Dijkstra's algorithm finds the shortest paths from a source node to all other nodes in a weighted graph with non-negative edge weights. It's widely used in network routing protocols and mapping applications",
      },
      {
        type: "text",
        content:
          "Implement Dijkstra's algorithm to compute the shortest path distances from a given source node",
      },
      {
        type: "unordered-list",
        content:
          "Initialize distances and priority queue\nRelax edges and update distances\nHandle graphs represented as adjacency lists or matrices",
      },
      {
        type: "code",
        language: "javascript",
        content: `const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(dijkstra(graph, 'A'));
// Expected: { A: 0, B: 1, C: 3, D: 4 }`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    this.items.push({ element, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const dijkstra = (graph, source) => {
  const distances = {};
  const visited = new Set();
  const queue = new PriorityQueue();

  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[source] = 0;
  queue.enqueue(source, 0);

  while (!queue.isEmpty()) {
    const { element: current } = queue.dequeue();
    if (visited.has(current)) continue;
    visited.add(current);

    for (const neighbor in graph[current]) {
      const newDist = distances[current] + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        queue.enqueue(neighbor, newDist);
      }
    }
  }

  return distances;
};

// Test case
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(dijkstra(graph, 'A'));

// Expected output:
// { A: 0, B: 1, C: 3, D: 4 }`,
      },
    ],
  },
  {
    id: 9026,
    question:
      "Group nodes by connectivity for union-find operations (Union Find)",
    answer: [
      {
        type: "text",
        content:
          "Union-Find (Disjoint Set) is a data structure that keeps track of elements partitioned into disjoint subsets, useful for tracking connectivity in networks. Your task is to implement a Union-Find data structure with union and find methods",
      },
      {
        type: "unordered-list",
        content:
          "Use path compression for optimization\nDetect cycles in undirected graphs",
      },
      {
        type: "code",
        language: "javascript",
        content: `const uf = new UnionFind(5);
uf.union(0, 1);
uf.union(1, 2);
console.log(uf.connected(0, 2)); // Expected: true
console.log(uf.connected(0, 3)); // Expected: false`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, index) => index);
    this.rank = Array(size).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// Test cases
const uf = new UnionFind(5);
uf.union(0, 1);
uf.union(1, 2);
console.log(uf.connected(0, 2)); // Expected: true
console.log(uf.connected(0, 3)); // Expected: false`,
      },
    ],
  },
  {
    id: 9027,
    question:
      "Find the minimum number of coins needed to make change for a given amount using available denominations (Coin Change Problem)",
    answer: [
      {
        type: "text",
        content:
          "The coin change problem seeks the minimum number of coins needed to make a certain amount of change from a given set of coin denominations. Implement a function that computes the minimum number of coins needed to make change for a given amount",
      },
      {
        type: "code",
        language: "javascript",
        content: `const coins = [1, 2, 5];
console.log(coinChange(coins, 11)); // Expected: 3 (11 = 5 + 5 + 1)`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const coinChange = (coins, amount) => {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

// Test cases
console.log(coinChange([1, 2, 5], 11)); // Expected: 3
console.log(coinChange([2], 3));        // Expected: -1
console.log(coinChange([1], 0));        // Expected: 0
console.log(coinChange([1], 1));        // Expected: 1
console.log(coinChange([1], 2));        // Expected: 2`,
      },
    ],
  },
  {
    id: 9028,
    question:
      "Find the shortest path in a weighted graph, using heuristics (A* Algorithm)",
    answer: [
      {
        type: "text",
        content:
          "The A* algorithm finds the shortest path between nodes in a graph, using heuristics to prioritize paths that are likely to lead to the goal",
      },
      {
        type: "text",
        content:
          "Your task is to implement the A* algorithm to find the shortest path between a start and goal node in a graph",
      },
      {
        type: "unordered-list",
        content:
          "Implement a priority queue to select the next node\nUse a heuristic function (e.g., Euclidean distance)\nHandle graphs with varying edge weights",
      },
      {
        type: "text",
        content:
          "By using heuristics, A* can significantly reduce the number of nodes it needs to examine, making it more efficient than other algorithms like Dijkstra's in certain scenarios. It's widely used in pathfinding and graph traversal applications, especially in game development and AI",
      },
      {
        type: "code",
        language: "javascript",
        content: `const graph = {
  A: { B: 1, C: 3 },
  B: { A: 1, C: 1, D: 5 },
  C: { A: 3, B: 1, D: 2 },
  D: { B: 5, C: 2 }
};
const heuristics = {
  A: 4,
  B: 2,
  C: 1,
  D: 0
};

console.log(aStar(graph, heuristics, 'A', 'D')); // Expected: ['A', 'B', 'C', 'D']`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function aStar(graph, heuristics, start, goal) {
  const openSet = new PriorityQueue();
  const cameFrom = {};
  const gScore = {};
  
  for (const node in graph) {
    gScore[node] = Infinity;
  }
  gScore[start] = 0;
  
  openSet.enqueue(start, heuristics[start]);
  
  while (!openSet.isEmpty()) {
    const { element: current } = openSet.dequeue();
    if (current === goal) {
      return reconstructPath(cameFrom, current);
    }
    for (const neighbor in graph[current]) {
      const tentativeGScore = gScore[current] + graph[current][neighbor];
      if (tentativeGScore < gScore[neighbor]) {
        cameFrom[neighbor] = current;
        gScore[neighbor] = tentativeGScore;
        const fScore = tentativeGScore + heuristics[neighbor];
        openSet.enqueue(neighbor, fScore);
      }
    }
  }
  return []; // Path not found
}

function reconstructPath(cameFrom, current) {
  const totalPath = [current];
  while (cameFrom[current]) {
    current = cameFrom[current];
    totalPath.unshift(current);
  }
  return totalPath;
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, priority) {
    this.items.push({ element, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// Test cases
const graph = {
  A: { B: 1, C: 3 },
  B: { A: 1, C: 1, D: 5 },
  C: { A: 3, B: 1, D: 2 },
  D: { B: 5, C: 2 }
};
const heuristics = {
  A: 4,
  B: 2,
  C: 1,
  D: 0
};

console.log(aStar(graph, heuristics, 'A', 'D')); // Expected: ['A', 'B', 'C', 'D']`,
      },
    ],
  },
  {
    id: 9029,
    question: "Find the minimum spanning tree of a graph (Prim's Algorithm)",
    answer: [
      {
        type: "text",
        content:
          "Prim's algorithm finds a minimum spanning tree for a connected weighted undirected graph, adding the least expensive edge from the tree to a vertex not yet in the tree",
      },
      {
        type: "text",
        content:
          "Implement Prim's algorithm to compute the minimum spanning tree of a given graph",
      },
      {
        type: "unordered-list",
        content:
          "Initialize the tree with a single vertex\nUse a priority queue to select the next edge\nEnsure all vertices are included in the spanning tree",
      },
      {
        type: "text",
        content:
          "Prim's algorithm is greedy in nature, always picking the minimum weight edge that connects a vertex in the tree to a vertex outside the tree. It's essential in network design, where minimizing the total length of cables or wiring is desired",
      },
      {
        type: "code",
        language: "javascript",
        content: `const graph = {
  0: { 1: 2, 3: 6 },
  1: { 0: 2, 2: 3, 3: 8, 4: 5 },
  2: { 1: 3, 4: 7 },
  3: { 0: 6, 1: 8, 4: 9 },
  4: { 1: 5, 2: 7, 3: 9 }
};

console.log(primsAlgorithm(graph));
// Expected: Minimum Spanning Tree edges and total cost`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function primsAlgorithm(graph) {
  const nodes = Object.keys(graph);
  const mst = [];
  const visited = new Set();
  const pq = new PriorityQueue();
  let totalCost = 0;

  visited.add(nodes[0]);
  for (const neighbor in graph[nodes[0]]) {
    pq.enqueue([nodes[0], neighbor], graph[nodes[0]][neighbor]);
  }

  while (!pq.isEmpty() && visited.size < nodes.length) {
    const { element: [from, to], priority: cost } = pq.dequeue();
    if (!visited.has(to)) {
      visited.add(to);
      mst.push([from, to, cost]);
      totalCost += cost;
      for (const neighbor in graph[to]) {
        if (!visited.has(neighbor)) {
          pq.enqueue([to, neighbor], graph[to][neighbor]);
        }
      }
    }
  }

  return { mst, totalCost };
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, priority) {
    this.items.push({ element, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// Test case
const graph = {
  0: { 1: 2, 3: 6 },
  1: { 0: 2, 2: 3, 3: 8, 4: 5 },
  2: { 1: 3, 4: 7 },
  3: { 0: 6, 1: 8, 4: 9 },
  4: { 1: 5, 2: 7, 3: 9 }
};

const result = primsAlgorithm(graph);
console.log('Minimum Spanning Tree edges and total cost:', result);

// Expected output:
// Minimum Spanning Tree edges and total cost: {
//   mst: [ [ '0', '1', 2 ], [ '1', '2', 3 ], [ '1', '4', 5 ], [ '0', '3', 6 ] ],
//   totalCost: 16
// }`,
      },
    ],
  },
  {
    id: 9030,
    question: "Detect cycles in a linked list (Floyd's Cycle Detection)",
    answer: [
      {
        type: "text",
        content:
          "Floyd's cycle detection algorithm, also known as the tortoise and hare algorithm, is used to detect cycles in a sequence of values or linked list. Implement a function that detects if a linked list has a cycle",
      },
      {
        type: "unordered-list",
        content:
          "Use two pointers moving at different speeds\nDetect when the pointers meet, indicating a cycle\nHandle linked lists with no cycles",
      },
      {
        type: "code",
        language: "javascript",
        content: `const node1 = { val: 3 };
const node2 = { val: 2 };
const node3 = { val: 0 };
const node4 = { val: -4 };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

console.log(hasCycle(node1)); // Expected: true`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const hasCycle = (head) => {
  if (!head) return false;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

// Test cases
const node1 = { val: 3 };
const node2 = { val: 2 };
const node3 = { val: 0 };
const node4 = { val: -4 };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

console.log(hasCycle(node1)); // Expected: true

node4.next = null; // Removes the cycle
console.log(hasCycle(node1)); // Expected: false

// Expected Output:
// true
// false`,
      },
    ],
  },
  {
    id: 9031,
    question:
      "Encode characters based on frequency for data compression (Huffman Encoding)",
    answer: [
      {
        type: "text",
        content:
          "Huffman Encoding is a compression algorithm that assigns variable-length codes to input characters, with shorter codes assigned to more frequent characters. Your task is to implement Huffman Encoding to compress a given string",
      },
      {
        type: "unordered-list",
        content:
          "Build a frequency map of characters\nConstruct a priority queue (min-heap) of nodes\nBuild the Huffman tree and generate codes\nEncode and decode strings using the generated codes",
      },
      {
        type: "text",
        content:
          "By effectively encoding data based on character frequencies, Huffman Encoding significantly reduces the size of data, making it ideal for file compression. Implementing this algorithm will deepen your understanding of greedy algorithms and priority queues",
      },
      {
        type: "code",
        language: "javascript",
        content: `const input = "this is an example for huffman encoding";
const { encodedStr, huffmanTree } = huffmanEncoding(input);
console.log("Encoded String:", encodedStr);
const decodedStr = huffmanDecoding(encodedStr, huffmanTree);
console.log("Decoded String:", decodedStr);
// Expected Output:
// Encoded String: [compressed binary string]
// Decoded String: this is an example for huffman encoding`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const huffmanEncoding = (str) => {
  const freqMap = {};
  for (const char of str) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  const heap = new MinHeap();
  for (const char in freqMap) {
    heap.insert(new Node(char, freqMap[char]));
  }

  while (heap.size() > 1) {
    const left = heap.extractMin();
    const right = heap.extractMin();
    const newNode = new Node(null, left.freq + right.freq, left, right);
    heap.insert(newNode);
  }

  const huffmanTree = heap.extractMin();

  const codes = {};
  const generateCodes = (node, code) => {
    if (node.char !== null) {
      codes[node.char] = code;
      return;
    }
    generateCodes(node.left, code + '0');
    generateCodes(node.right, code + '1');
  };
  generateCodes(huffmanTree, '');

  let encodedStr = '';
  for (const char of str) {
    encodedStr += codes[char];
  }

  return { encodedStr, huffmanTree };
};

const huffmanDecoding = (encodedStr, huffmanTree) => {
  let decodedStr = '';
  let node = huffmanTree;
  for (const bit of encodedStr) {
    node = bit === '0' ? node.left : node.right;
    if (node.char !== null) {
      decodedStr += node.char;
      node = huffmanTree;
    }
  }
  return decodedStr;
};

class Node {
  constructor(char, freq, left = null, right = null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  insert(node) {
    this.heap.push(node);
    this._bubbleUp(this.heap.length - 1);
  }
  extractMin() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._sinkDown(0);
    return min;
  }
  _bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent].freq <= this.heap[index].freq) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }
  _sinkDown(index) {
    const length = this.heap.length;
    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if (left < length && this.heap[left].freq < this.heap[smallest].freq) {
        smallest = left;
      }
      if (right < length && this.heap[right].freq < this.heap[smallest].freq) {
        smallest = right;
      }
      if (smallest === index) break;
      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
      index = smallest;
    }
  }
}

// Test the implementation
const input = "this is an example for huffman encoding";
const { encodedStr, huffmanTree } = huffmanEncoding(input);
console.log("Encoded String:", encodedStr);
const decodedStr = huffmanDecoding(encodedStr, huffmanTree);
console.log("Decoded String:", decodedStr);
// Expected Output:
// Encoded String: [compressed binary string]
// Decoded String: this is an example for huffman encoding`,
      },
    ],
  },
  {
    id: 9032,
    question:
      "Maximize value in a knapsack by allowing fractional items (Fractional Knapsack Problem)",
    answer: [
      {
        type: "text",
        content:
          "Your task is to implement the fractional knapsack algorithm to maximize the total value for a given weight capacity",
      },
      {
        type: "unordered-list",
        content:
          "Calculate value-to-weight ratio for each item\nSort items based on this ratio in decreasing order\nAdd items to the knapsack starting from the highest ratio\nAllow fractions of an item if the knapsack cannot accommodate the whole item",
      },
      {
        type: "code",
        language: "javascript",
        content: `const items = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 }
];
const capacity = 50;
console.log(fractionalKnapsack(items, capacity)); // Expected: 240`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const fractionalKnapsack = (items, capacity) => {
  items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));
  let totalValue = 0;
  for (const item of items) {
    if (capacity >= item.weight) {
      capacity -= item.weight;
      totalValue += item.value;
    } else {
      totalValue += item.value * (capacity / item.weight);
      break;
    }
  }
  return totalValue;
};

// Test cases
const items1 = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 }
];
console.log(fractionalKnapsack(items1, 50)); // Expected: 240

const items2 = [
  { value: 500, weight: 30 },
  { value: 400, weight: 20 },
  { value: 200, weight: 10 }
];
console.log(fractionalKnapsack(items2, 40)); // Expected: 900

// Expected Output:
// 240
// 900`,
      },
    ],
  },
  {
    id: 9033,
    question: "Count the number of vowels in a string",
    answer: [
      {
        type: "text",
        content:
          "Counting vowels in a string involves iterating through the string and incrementing a counter when a vowel is encountered",
      },
      {
        type: "text",
        content:
          "Your task is to write a function that counts the number of vowels in a given string",
      },
      {
        type: "unordered-list",
        content:
          "Handle both uppercase and lowercase letters\nConsider vowels: a, e, i, o, u\nOptimize by using a set for vowel lookup",
      },
      {
        type: "text",
        content:
          "Using a set for vowel lookup improves the performance by allowing constant-time checks. This method ensures the function remains efficient even with longer strings",
      },
      {
        type: "code",
        language: "javascript",
        content: `console.log(countVowels('Hello World')); // Expected: 3`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const countVowels = (str) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowels.has(char)) {
      count++;
    }
  }
  return count;
};

// Test cases
console.log(countVowels('Hello World')); // Expected: 3
console.log(countVowels('AEIOU'));       // Expected: 5
console.log(countVowels('bcdfghjklmnpqrstvwxyz')); // Expected: 0
console.log(countVowels('JavaScript is awesome!')); // Expected: 7

// Expected Output:
// 3
// 5
// 0
// 7`,
      },
    ],
  },
  {
    id: 9034,
    question:
      "Generate a pattern where characters are repeated in steps (Steps String Pattern)",
    answer: [
      {
        type: "text",
        content:
          "Generating a steps pattern involves creating a series of lines where each line contains a repeated character, and the number of repetitions increases with each step. Your task is to write a function that generates a steps pattern with a given number of steps",
      },
      {
        type: "unordered-list",
        content:
          "Use loops to control the number of lines and characters\nAdjust the pattern to increment or decrement as required\nHandle edge cases like zero or negative steps",
      },
      {
        type: "code",
        language: "javascript",
        content: `generateStepsPattern(5);
/*
Expected output:
#
##
###
####
#####
*/
`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function generateStepsPattern(n) {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i));
  }
}

generateStepsPattern(5);
// Expected output:
// #
// ##
// ###
// ####
// #####`,
      },
    ],
  },
  {
    id: 9035,
    question:
      "Create a centered pyramid pattern with strings (Pyramid String Pattern)",
    answer: [
      {
        type: "text",
        content:
          "Creating a pyramid pattern involves printing lines of characters in such a way that they form a pyramid shape when centered",
      },
      {
        type: "text",
        content:
          "Your task is to write a function that prints a centered pyramid pattern of a given height",
      },
      {
        type: "unordered-list",
        content:
          "Calculate the number of spaces and characters per line\nUse nested loops for lines and characters\nEnsure proper alignment for the pyramid shape",
      },
      {
        type: "code",
        language: "javascript",
        content: `generatePyramidPattern(5);
/*
Expected output:
    #
   ###
  #####
 #######
#########
*/
`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function generatePyramidPattern(n) {
  for (let i = 1; i <= n; i++) {
    const spaces = ' '.repeat(n - i);
    const hashes = '#'.repeat(2 * i - 1);
    console.log(spaces + hashes);
  }
}

generatePyramidPattern(5);
// Expected output:
//     #
//    ###
//   #####
//  #######
// #########`,
      },
    ],
  },
  {
    id: 9036,
    question: "Traverse a matrix in a spiral order (Spiral Matrix)",
    answer: [
      {
        type: "text",
        content:
          "Traversing a matrix in spiral order involves visiting elements starting from the outermost layer towards the innermost layer, moving in a spiral pattern. Your task is to write a function that returns the elements of a matrix in spiral order",
      },
      {
        type: "unordered-list",
        content:
          "Use boundaries to keep track of traversed rows and columns\nAdjust the traversal direction at each boundary\nCollect the elements in the order they are visited",
      },
      {
        type: "text",
        content:
          "Handling different sizes of matrices and ensuring that all elements are included requires careful boundary management. This algorithm is useful in image processing and matrix manipulation tasks",
      },
      {
        type: "code",
        language: "javascript",
        content: `const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(spiralOrder(matrix)); // Expected output: [1,2,3,6,9,8,7,4,5]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function spiralOrder(matrix) {
  const result = [];
  if (matrix.length === 0) return result;
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse from Left to Right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Traverse Downwards
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      // Traverse from Right to Left
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      // Traverse Upwards
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}

// Test cases
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(spiralOrder(matrix1));
// Expected output: [1,2,3,6,9,8,7,4,5]

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
];
console.log(spiralOrder(matrix2));
// Expected output: [1,2,3,4,8,12,11,10,9,5,6,7]`,
      },
    ],
  },
  {
    id: 9037,
    question:
      "Find the minimum spanning tree of a graph using edge weights (Kruskal's Algorithm)",
    answer: [
      {
        type: "text",
        content:
          "Kruskal's algorithm finds a minimum spanning tree for a connected weighted graph by adding edges in increasing order of weight, ensuring no cycles are formed. Your task is to implement Kruskal's algorithm to find the minimum spanning tree of a given graph",
      },
      {
        type: "unordered-list",
        content:
          "Sort all edges in non-decreasing order of their weight\nUse a Union-Find data structure to detect cycles\nInclude edges that do not form a cycle until all vertices are connected",
      },
      {
        type: "text",
        content:
          "Kruskal's algorithm is efficient for sparse graphs and helps in network design by minimizing the total cost of connecting all nodes. Understanding Union-Find is crucial for detecting cycles efficiently",
      },
      {
        type: "code",
        language: "javascript",
        content: `const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
const edges = [
  { from: 'A', to: 'B', weight: 4 },
  { from: 'A', to: 'F', weight: 2 },
  { from: 'B', to: 'C', weight: 6 },
  { from: 'B', to: 'F', weight: 5 },
  { from: 'C', to: 'D', weight: 3 },
  { from: 'C', to: 'F', weight: 1 },
  { from: 'D', to: 'E', weight: 2 },
  { from: 'E', to: 'F', weight: 4 },
];
console.log(kruskalsAlgorithm(vertices, edges));
// Expected output: Minimum Spanning Tree edges and total cost`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function kruskalsAlgorithm(vertices, edges) {
  edges.sort((a, b) => a.weight - b.weight);
  const uf = new UnionFind(vertices);
  const mst = [];
  let totalCost = 0;

  for (const edge of edges) {
    if (!uf.connected(edge.from, edge.to)) {
      uf.union(edge.from, edge.to);
      mst.push(edge);
      totalCost += edge.weight;
    }
  }

  return { mst, totalCost };
}

class UnionFind {
  constructor(elements) {
    this.parent = {};
    elements.forEach(e => (this.parent[e] = e));
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    this.parent[this.find(x)] = this.find(y);
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// Test case
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
const edges = [
  { from: 'A', to: 'B', weight: 4 },
  { from: 'A', to: 'F', weight: 2 },
  { from: 'B', to: 'C', weight: 6 },
  { from: 'B', to: 'F', weight: 5 },
  { from: 'C', to: 'D', weight: 3 },
  { from: 'C', to: 'F', weight: 1 },
  { from: 'D', to: 'E', weight: 2 },
  { from: 'E', to: 'F', weight: 4 },
];

const result = kruskalsAlgorithm(vertices, edges);
console.log('Minimum Spanning Tree:', result.mst);
console.log('Total Cost:', result.totalCost);

// Expected output:
// Minimum Spanning Tree: [
//   { from: 'C', to: 'F', weight: 1 },
//   { from: 'A', to: 'F', weight: 2 },
//   { from: 'D', to: 'E', weight: 2 },
//   { from: 'C', to: 'D', weight: 3 },
//   { from: 'A', to: 'B', weight: 4 }
// ]
// Total Cost: 12`,
      },
    ],
  },
  {
    id: 9038,
    question: "Find the maximum sum of any subarray (Kadane's Algorithm)",
    answer: [
      {
        type: "text",
        content:
          "Kadane's Algorithm efficiently computes the maximum sum of a contiguous subarray within a one-dimensional array of numbers. Your task is to implement Kadane's Algorithm to find the maximum subarray sum",
      },
      {
        type: "unordered-list",
        content:
          "Initialize variables to track current and maximum sums\nIterate through the array, updating sums based on the current element\nHandle cases where all numbers are negative",
      },
      {
        type: "code",
        language: "javascript",
        content: `const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Expected output: 6 (subarray: [4, -1, 2, 1])`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// Test cases
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected output: 6
console.log(maxSubArray([1])); // Expected output: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // Expected output: 23`,
      },
    ],
  },
  {
    id: 9039,
    question:
      "Identify the most frequently occurring character in a string (Maximum Frequency Character)",
    answer: [
      {
        type: "text",
        content:
          "Finding the maximum frequency character involves counting the occurrences of each character and identifying the one with the highest count",
      },
      {
        type: "text",
        content:
          "Your task is to write a function that returns the character that appears most frequently in a given string",
      },
      {
        type: "unordered-list",
        content:
          "Use a hash map to store character counts\nIterate through the string to update counts\nHandle ties by returning the first occurring character",
      },
      {
        type: "code",
        language: "javascript",
        content: `console.log(maxFrequencyChar('javascript')); // Expected output: 'a'`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function maxFrequencyChar(str) {
  const charCount = {};
  let maxChar = '';
  let maxCount = 0;
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
    if (
      charCount[char] > maxCount ||
      (charCount[char] === maxCount && char < maxChar)
    ) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }
  return maxChar;
}

// Test cases
console.log(maxFrequencyChar('javascript')); // Expected output: 'a'
console.log(maxFrequencyChar('abbccc'));     // Expected output: 'c'
console.log(maxFrequencyChar('aabbcc'));     // Expected output: 'a'`,
      },
    ],
  },
  {
    id: 9040,
    question:
      "Transform the casing of strings to title case, where the first letter of each word is capitalized",
    answer: [
      {
        type: "text",
        content:
          "Title casing a string involves capitalizing the first letter of each word and making the rest of the letters lowercase. Your task is to write a function that converts a given string to title case",
      },
      {
        type: "unordered-list",
        content:
          "Split the string into words\nCapitalize the first letter of each word\nHandle edge cases like multiple spaces or punctuation",
      },
      {
        type: "text",
        content:
          "Ensure that the function correctly handles strings with irregular spacing and punctuation, converting each word appropriately",
      },
      {
        type: "code",
        language: "javascript",
        content: `console.log(toTitleCase('hello world')); // Expected output: 'Hello World'`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => (word ? word[0].toUpperCase() + word.slice(1) : ''))
    .join(' ');
}

// Test cases
console.log(toTitleCase('hello world'));             // Expected output: 'Hello World'
console.log(toTitleCase('JAVASCRIPT IS FUN'));      // Expected output: 'JavaScript Is Fun'`,
      },
    ],
  },
  {
    id: 9041,
    question:
      "Use a hash map to find two numbers that add up to a target (Two Sum Problem)",
    answer: [
      {
        type: "text",
        content:
          "The Two Sum problem involves finding two numbers in an array that add up to a specific target sum. Your task is to implement a function that finds the indices of two numbers that add up to a target sum",
      },
      {
        type: "unordered-list",
        content:
          "Use a hash map to store numbers and their indices\nIterate through the array, checking if the complement exists\nReturn the indices of the two numbers",
      },
      {
        type: "code",
        language: "javascript",
        content: `const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Expected output: [0, 1]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function twoSum(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return null; // No two sum solution
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Expected output: [1, 2]
console.log(twoSum([3, 3], 6));         // Expected output: [0, 1]`,
      },
    ],
  },
  {
    id: 9042,
    question: "Implement a debounce function in JavaScript",
    answer: [
      {
        type: "text",
        content:
          "Debouncing is a technique used to ensure that a function is only executed after a specified period has elapsed since it was last invoked. This is particularly useful for optimizing performance-intensive tasks like handling window resize or scroll events",
      },
      {
        type: "text",
        content:
          "Your task is to implement a debounce function in JavaScript that delays the execution of a given function until after a specified wait time has passed since it was last called",
      },
      {
        type: "unordered-list",
        content:
          "Create a debounce function that accepts a function and a delay\nUse a timer to track the elapsed time\nEnsure the function executes after the delay only if it hasn't been called again\nMaintain the correct context and arguments when invoking the function",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
const handleResize = debounce(() => {
  console.log('Window resized');
}, 300);

window.addEventListener('resize', handleResize);`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Test case
const handleResize = debounce(() => {
  console.log('Window resized');
}, 300);

// Simulate rapid calls
handleResize();
handleResize();
handleResize();

// Expected output after 300ms:
// Window resized`,
      },
    ],
  },
  {
    id: 9043,
    question:
      "Implement a function to find all permutations of a string in JavaScript",
    answer: [
      {
        type: "text",
        content:
          "Generating all permutations of a string involves creating every possible arrangement of its characters. Your task is to implement a function that returns all permutations of a given string",
      },
      {
        type: "text",
        content:
          "Consider handling strings with duplicate characters and optimizing to avoid generating duplicate permutations",
      },
      {
        type: "unordered-list",
        content:
          "Handle strings with unique and duplicate characters\nImplement recursive backtracking to explore all arrangements\nOptimize to avoid unnecessary computations",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
console.log(getPermutations('ABC'));
// Expected output: ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']

console.log(getPermutations('AAB'));
// Expected output: ['AAB', 'ABA', 'BAA']`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const getPermutations = (str) => {
  const results = [];
  const arr = str.split('');
  arr.sort();

  const permute = (current, remaining) => {
    if (remaining.length === 0) {
      results.push(current.join(''));
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      if (i > 0 && remaining[i] === remaining[i - 1]) continue;
      permute([...current, remaining[i]], [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
    }
  };

  permute([], arr);
  return results;
};

// Test cases
console.log(getPermutations('ABC'));
// Expected output: ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']

console.log(getPermutations('AAB'));
// Expected output: ['AAB', 'ABA', 'BAA']`,
      },
    ],
  },
  {
    id: 9044,
    question: "Implement a closure in JavaScript that maintains private state",
    answer: [
      {
        type: "text",
        content:
          "Closures allow functions to have access to variables from an enclosing scope, enabling the creation of private state that cannot be accessed from outside the function",
      },
      {
        type: "text",
        content:
          "Your task is to implement a function that creates a counter with private state. The counter should have methods to increment, decrement, and retrieve its current value",
      },
      {
        type: "unordered-list",
        content:
          "Understand how lexical scoping works\nCreate private variables that are not accessible globally\nEnsure the closure retains access to the private state after the outer function has executed",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
const counter = createCounter();
console.log(counter.increment()); // Expected output: 1
console.log(counter.increment()); // Expected output: 2
console.log(counter.decrement()); // Expected output: 1
console.log(counter.value());     // Expected output: 1`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const createCounter = () => {
  let count = 0; // private variable

  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count,
  };
};

// Test cases
const counter = createCounter();
console.log(counter.increment()); // Expected output: 1
console.log(counter.increment()); // Expected output: 2
console.log(counter.decrement()); // Expected output: 1
console.log(counter.value());     // Expected output: 1`,
      },
    ],
  },
  {
    id: 9045,
    question: "Check if a string is a palindrome",
    answer: [
      {
        type: "text",
        content:
          "A palindrome is a string that reads the same backward as forward. To check for a palindrome, compare the string to its reversed version",
      },
      {
        type: "text",
        content:
          "Your task is to write a function that determines whether a given string is a palindrome, considering only alphanumeric characters and ignoring cases",
      },
      {
        type: "unordered-list",
        content:
          "Normalize the string by removing non-alphanumeric characters\nConvert the string to lowercase\nCompare the string to its reversed version\nReturn true if it's a palindrome, false otherwise",
      },
      {
        type: "code",
        language: "javascript",
        content: `console.log(isPalindrome('A man, a plan, a canal: Panama')); // Expected output: true
console.log(isPalindrome('Hello')); // Expected output: false`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

// Test cases
console.log(isPalindrome('A man, a plan, a canal: Panama')); // Expected output: true
console.log(isPalindrome('race a car'));                     // Expected output: false
console.log(isPalindrome(''));                               // Expected output: true
console.log(isPalindrome('Level'));                          // Expected output: true`,
      },
    ],
  },
  {
    id: 9046,
    question: "Implement a function to deep clone an object",
    answer: [
      {
        type: "text",
        content:
          "Deep cloning creates a complete copy of an object, including all nested objects, ensuring that no references are shared between the original and the clone. Your task is to implement a function that performs a deep clone of a given object",
      },
      {
        type: "unordered-list",
        content:
          "Handle primitive data types and objects\nCopy nested objects and arrays recursively\nMaintain the integrity of functions and special objects\nAvoid issues with circular references",
      },
      {
        type: "code",
        language: "javascript",
        content: `const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
clone.b.c = 3;
console.log(original.b.c); // Expected output: 2`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function deepClone(obj, hash = new WeakMap()) {
  if (Object(obj) !== obj || typeof obj === 'function') return obj; 
  if (hash.has(obj)) return hash.get(obj); // Handle circular references
  const result = Array.isArray(obj) ? [] : {};
  hash.set(obj, result);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key], hash);
    }
  }
  return result;
}

// Test cases
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
clone.b.c = 3;
console.log(original.b.c); // Expected output: 2

// Handling circular references
const obj = { a: 1 };
obj.b = obj;
const clonedObj = deepClone(obj);
console.log(clonedObj.b === clonedObj); // Expected output: true`,
      },
    ],
  },
  {
    id: 9047,
    question: "Flatten a nested array",
    answer: [
      {
        type: "text",
        content:
          "Flattening an array involves converting a nested array structure into a single-level array. Your task is to write a function that flattens an array of any depth",
      },
      {
        type: "unordered-list",
        content:
          "Handle arrays nested at any depth\nMaintain the order of elements\nEnsure non-array elements are preserved\nAvoid using built-in methods like Array.prototype.flat()",
      },
      {
        type: "code",
        language: "javascript",
        content: `const nested = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nested));
// Expected output: [1, 2, 3, 4, 5, 6]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function flattenArray(arr) {
  const result = [];
  (function flatten(input) {
    for (const item of input) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    }
  })(arr);
  return result;
}

// Test cases
console.log(flattenArray([1, [2, [3, 4], 5], 6]));
// Expected output: [1, 2, 3, 4, 5, 6]

console.log(flattenArray([[[[1]]], 2, [3, [4, [5]]]]));
// Expected output: [1, 2, 3, 4, 5]`,
      },
    ],
  },
  {
    id: 9048,
    question: "Remove duplicates from an array in JavaScript",
    answer: [
      {
        type: "text",
        content:
          "Removing duplicates from an array ensures that each element is unique, which is essential for various data processing tasks. Your task is to implement a function that removes duplicate values from an array",
      },    
      {
        type: "unordered-list",
        content:
          "Maintain the original order of elements\nHandle different data types within the array",
      },
      {
        type: "text",
        content:
          "By utilizing ES6 features like Set, you can remove duplicates efficiently while keeping your code concise",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arrayWithDuplicates)); // Expected output: [1, 2, 3, 4, 5]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

// Alternative method using filter
const removeDuplicatesFilter = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

// Test cases
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));          // Expected output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b']));      // Expected output: ['a', 'b', 'c']
console.log(removeDuplicatesFilter([1, 1, 1, 1, 1]));          // Expected output: [1]`,
      },
    ],
  },
  {
    id: 9049,
    question: "Implement a memoize function in JavaScript",
    answer: [
      {
        type: "text",
        content:
          "Memoization is an optimization technique that caches the results of expensive function calls and returns the cached result when the same inputs occur again. Your task is to write a function that memoizes another function",
      },
      {
        type: "unordered-list",
        content:
          "Cache results based on function arguments\nHandle functions with multiple arguments\nMaintain the correct context when invoking the original function\nEnsure the cache doesn't grow indefinitely",
      },
      {
        type: "code",
        language: "javascript",
        content: `const slowFunction = (num) => {
  // Simulate a slow computation
  for(let i = 0; i < 1e9; i++) {}
  return num * num;
};

const fastFunction = memoize(slowFunction);

console.time('First Call');
console.log(fastFunction(5)); // Computation happens
console.timeEnd('First Call');

console.time('Second Call');
console.log(fastFunction(5)); // Cached result
console.timeEnd('Second Call');

// Expected output:
// [After some delay]
// 25
// First Call: [some time]ms
// 25
// Second Call: [much less time]ms`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Test cases
const slowFunction = (num) => {
  // Simulate a slow computation
  for(let i = 0; i < 1e8; i++) {}
  return num * num;
};

const fastFunction = memoize(slowFunction);

console.time('First Call');
console.log(fastFunction(5)); // Expected output: 25
console.timeEnd('First Call');

console.time('Second Call');
console.log(fastFunction(5)); // Expected output: 25
console.timeEnd('Second Call');

console.time('Third Call with different argument');
console.log(fastFunction(6)); // Expected output: 36
console.timeEnd('Third Call with different argument');

// Expected output:
// 25
// First Call: [long time]ms
// 25
// Second Call: [short time]ms
// 36
// Third Call with different argument: [long time]ms`,
      },
    ],
  },
  {
    id: 9050,
    question: "Implement a function to get unique elements from an array",
    answer: [
      {
        type: "text",
        content:
          "Extracting unique elements from an array can be done using various methods such as using a `Set`, filtering, or using an object to track occurrences. Your task is to implement a function that returns a new array containing only the unique elements from the original array",
      },
      {
        type: "unordered-list",
        content:
          "Use modern JavaScript features like `Set` or `Array.prototype.filter()`\nEnsure the original array is not mutated\nHandle arrays containing primitive data types\nMaintain the order of elements as they first appear",
      },
      {
        type: "code",
        language: "javascript",
        content: `const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(getUniqueElements(numbers)); // Expected output: [1, 2, 3, 4, 5]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function getUniqueElements(arr) {
  return [...new Set(arr)];
}

// Test cases
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(getUniqueElements(numbers)); // Expected output: [1, 2, 3, 4, 5]

const letters = ['a', 'b', 'a', 'c', 'b'];
console.log(getUniqueElements(letters)); // Expected output: ['a', 'b', 'c']`,
      },
    ],
  },
  {
    id: 9051,
    question: "Implement a function to deep compare two objects",
    answer: [
      {
        type: "text",
        content:
          "Deep comparison checks whether two objects have the same properties and values, including nested objects and arrays. Your task is to write a function that performs a deep equality check between two objects",
      },
      {
        type: "unordered-list",
        content:
          "Compare primitive values directly\nRecursively compare nested objects and arrays\nEnsure both objects have the same set of keys\nHandle edge cases like null and undefined",
      },
      {
        type: "code",
        language: "javascript",
        content: `const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };

console.log(deepEqual(objA, objB)); // Expected output: true
console.log(deepEqual(objA, objC)); // Expected output: false`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a !== 'object' ||
      b == null || typeof b !== 'object') {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

// Test cases
const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };

console.log(deepEqual(objA, objB)); // Expected output: true
console.log(deepEqual(objA, objC)); // Expected output: false

const arr1 = [1, 2, { a: 3 }];
const arr2 = [1, 2, { a: 3 }];
console.log(deepEqual(arr1, arr2)); // Expected output: true`,
      },
    ],
  },
  {
    id: 9052,
    question: "Implement a function to find the intersection of two arrays",
    answer: [
      {
        type: "text",
        content:
          "Finding the intersection of two arrays involves identifying elements that are present in both arrays. Your task is to write a function that returns a new array containing the common elements",
      },
      {
        type: "unordered-list",
        content:
          "Use efficient data structures like `Set` for lookups\nHandle arrays containing primitive data types\nEnsure the result contains unique elements\nMaintain the order based on the first array",
      },
      {
        type: "code",
        language: "javascript",
        content: `const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(intersection(array1, array2)); // Expected output: [3, 4, 5]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function intersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(item => set2.has(item));
}

// Test cases
console.log(intersection([1, 2, 3], [2, 3, 4])); // Expected output: [2, 3]
console.log(intersection(['a', 'b', 'c'], ['b', 'c', 'd'])); // Expected output: ['b', 'c']
console.log(intersection([1, 2, 2, 3], [2, 2, 4])); // Expected output: [2, 2]`,
      },
    ],
  },
  {
    id: 9053,
    question:
      "Implement a function to find all anagrams of a word within a list of words",
    answer: [
      {
        type: "text",
        content:
          "Finding all anagrams of a word involves identifying words that contain the same letters in a different order as the target word. Your task is to write a function that returns all anagrams of a given word from a list of words",
      },
      {
        type: "unordered-list",
        content:
          "Ensure case-insensitive comparison\nHandle duplicate words in the list\nMaintain the original order of words\nOptimize for performance with large datasets",
      },
      {
        type: "text",
        content:
          "By sorting the characters of both the target word and each word in the list, you can easily compare them to find anagrams. This method relies on the fact that anagrams will result in the same sorted string",
      },
      {
        type: "code",
        language: "javascript",
        content: `const word = 'listen';
const words = ['enlist', 'google', 'inlets', 'banana'];
console.log(findAnagrams(word, words)); // Expected output: ['enlist', 'inlets']`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `function findAnagrams(word, wordList) {
  const sortedWord = word.toLowerCase().split('').sort().join('');
  return wordList.filter(w => {
    return w.toLowerCase().split('').sort().join('') === sortedWord;
  });
}

// Test cases
console.log(findAnagrams('listen', ['enlist', 'google', 'inlets', 'banana']));
// Expected output: ['enlist', 'inlets']

console.log(findAnagrams('race', ['care', 'acre', 'race', 'cer', 'rac']));
// Expected output: ['care', 'acre', 'race']

console.log(findAnagrams('hello', ['olleh', 'heoll', 'world']));
// Expected output: ['olleh', 'heoll']`,
      },
    ],
  },
  {
    id: 9054,
    question:
      "Implement prototype-based inheritance in JavaScript without using classes",
    answer: [
      {
        type: "text",
        content:
          "JavaScript uses prototype-based inheritance, allowing objects to inherit properties and methods from other objects without the need for classes",
      },
      {
        type: "text",
        content:
          "Your task is to implement prototype-based inheritance using constructor functions or factory functions. Create a `Person` object and an `Employee` object that inherits from `Person`",
      },
      {
        type: "unordered-list",
        content:
          "Create constructor or factory functions for object creation\nSet up the prototype chain correctly\nEnsure that inherited methods are accessible to instances",
      },
      {
        type: "text",
        content:
          "By correctly setting up the prototypes, you can enable inheritance of properties and methods between objects",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
const person = createPerson('John');
person.greet(); // Expected output: "Hello, my name is John"

const employee = createEmployee('Alice', 'Developer');
employee.greet(); // Expected output: "Hello, my name is Alice"
employee.work();  // Expected output: "Alice is working as a Developer"`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `// Factory function for Person
const createPerson = (name) => {
  const person = Object.create(personMethods);
  person.name = name;
  return person;
};

const personMethods = {
  greet() {
    console.log('Hello, my name is ' + this.name);
  },
};

// Factory function for Employee inheriting from Person
const createEmployee = (name, position) => {
  const employee = createPerson(name);
  employee.position = position;
  Object.setPrototypeOf(employee, employeeMethods);
  return employee;
};

const employeeMethods = Object.create(personMethods);
employeeMethods.work = function() {
  console.log(this.name + ' is working as a ' + this.position);
};

// Test cases
const person = createPerson('John');
person.greet(); // Expected output: "Hello, my name is John"

const employee = createEmployee('Alice', 'Developer');
employee.greet(); // Expected output: "Hello, my name is Alice"
employee.work();  // Expected output: "Alice is working as a Developer"`,
      },
    ],
  },

  {
    id: 9055,
    question:
      "Implement a function to rotate an array to the right by `k` steps",
    answer: [
      {
        type: "text",
        content:
          "Rotating an array to the right by `k` steps moves each element to the right by `k` positions, with elements wrapping around to the beginning",
      },
      {
        type: "text",
        content:
          "Your task is to implement a function that rotates an array to the right by `k` steps",
      },
      {
        type: "unordered-list",
        content:
          "Handle cases where `k` is larger than the array length\nEnsure the rotation is performed in-place\nMaintain the relative order of elements after rotation",
      },
      {
        type: "text",
        content:
          "This approach reverses the entire array, then reverses the first `k` elements and the remaining elements separately to achieve the desired rotation",
      },
      {
        type: "code",
        language: "javascript",
        content: `let nums = [1,2,3,4,5,6,7];
rotate(nums, 3);
console.log(nums); // Expected output: [5,6,7,1,2,3,4]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const rotate = (nums, k) => {
  k = k % nums.length;
  nums.reverse();
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

// Test cases
let nums1 = [1,2,3,4,5,6,7];
rotate(nums1, 3);
console.log(nums1); // Expected output: [5,6,7,1,2,3,4]

let nums2 = [-1,-100,3,99];
rotate(nums2, 2);
console.log(nums2); // Expected output: [3,99,-1,-100]

let nums3 = [1,2];
rotate(nums3, 3);
console.log(nums3); // Expected output: [2,1]`,
      },
    ],
  },
  {
    id: 9056,
    question:
      "Implement a function to count the number of islands in a 2D grid",
    answer: [
      {
        type: "text",
        content:
          "An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. Your task is to implement a function that counts the number of islands in a given 2D grid",
      },
      {
        type: "unordered-list",
        content:
          "Use a graph traversal algorithm like Depth-First Search (DFS) or Breadth-First Search (BFS)\nEfficiently explore connected lands\nMark visited positions to avoid revisiting",
      },
      {
        type: "code",
        language: "javascript",
        content: `const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
console.log(numIslands(grid)); // Expected output: 1`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const numIslands = (grid) => {
  if (!grid.length) return 0;
  let count = 0;

  const dfs = (i, j) => {
    if (
      i < 0 || i >= grid.length ||
      j < 0 || j >= grid[0].length ||
      grid[i][j] === '0'
    ) return;

    grid[i][j] = '0'; // mark as visited

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};

// Test cases
const grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
console.log(numIslands(grid1)); // Expected output: 1

const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
console.log(numIslands(grid2)); // Expected output: 3`,
      },
    ],
  },
  {
    id: 9057,
    question:
      "Implement a function to find the longest consecutive sequence in an array",
    answer: [
      {
        type: "text",
        content:
          "The longest consecutive sequence is the longest span of integers that appear in the array with no gaps. Your task is to implement a function that finds the length of the longest consecutive elements sequence",
      },
      {
        type: "unordered-list",
        content:
          "Optimize for O(n) time complexity\nHandle unsorted arrays\nEnsure the sequence is consecutive without duplicates",
      },
      {
        type: "text",
        content:
          "This solution uses a `Set` to achieve constant-time lookups and efficiently finds the longest streak by only starting from the beginning of potential sequences",
      },
      {
        type: "code",
        language: "javascript",
        content: `console.log(longestConsecutive([100,4,200,1,3,2])); // Expected output: 4 (sequence: [1,2,3,4])`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const longestConsecutive = (nums) => {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) { // only start counting from the beginning of a sequence
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longest = Math.max(longest, currentStreak);
    }
  }

  return longest;
};

// Test cases
console.log(longestConsecutive([100,4,200,1,3,2])); // Expected output: 4
console.log(longestConsecutive([0, -1])); // Expected output: 2
console.log(longestConsecutive([])); // Expected output: 0`,
      },
    ],
  },
  {
    id: 9058,
    question:
      "Implement a function to find the first unique character in a string",
    answer: [
      {
        type: "text",
        content:
          "Finding the first unique character involves identifying the first character in a string that appears only once. Your task is to implement a function that returns the index of the first non-repeating character in a given string. If no such character exists, return -1",
      },
      {
        type: "unordered-list",
        content:
          "Efficiently count character occurrences\nDetermine the order of characters\nHandle cases where there is no unique character",
      },
      {
        type: "code",
        language: "javascript",
        content: `console.log(firstUniqueChar('leetcode')); // Expected output: 0 ('l')`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const firstUniqueChar = (s) => {
  const charCount = {};

  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) return i;
  }

  return -1; // No unique character found
};

// Test cases
console.log(firstUniqueChar('leetcode'));     // Expected output: 0
console.log(firstUniqueChar('loveleetcode')); // Expected output: 2
console.log(firstUniqueChar('aabbcc'));       // Expected output: -1`,
      },
    ],
  },
  {
    id: 9059,
    question:
      "Implement a function to fetch data using Promises and async/await in JavaScript",
    answer: [
      {
        type: "text",
        content:
          "Fetching data asynchronously is essential for modern web applications. Promises and `async/await` syntax provide a clean and manageable way to handle asynchronous operations in JavaScript",
      },
      {
        type: "text",
        content:
          "Your task is to implement a function that fetches data from a given URL using both Promises and `async/await`. The function should handle successful data retrieval and errors that may occur during the fetch process",
      },
      {
        type: "unordered-list",
        content:
          "Use the Fetch API to make HTTP requests\nHandle responses and parse JSON data\nImplement error handling using `try...catch` blocks\nUtilize arrow functions and modern JavaScript features",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example with Promises:
fetchData('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log('Data with Promises:', data))
  .catch(error => console.error('Error with Promises:', error));

// Usage Example with async/await:
(async () => {
  try {
    const data = await fetchDataAsync('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Data with async/await:', data);
  } catch (error) {
    console.error('Error with async/await:', error);
  }
})();`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `// Function using Promises
const fetchData = (url) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
};

// Function using async/await
const fetchDataAsync = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

// Test cases
fetchData('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log('Data with Promises:', data))
  .catch(error => console.error('Error with Promises:', error));

(async () => {
  try {
    const data = await fetchDataAsync('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Data with async/await:', data);
  } catch (error) {
    console.error('Error with async/await:', error);
  }
})();

// Expected output:
// Data with Promises: { userId: 1, id: 1, title: '...', body: '...' }
// Data with async/await: { userId: 1, id: 1, title: '...', body: '...' }`,
      },
    ],
  },
  {
    id: 9060,
    question:
      "Implement a function to find the maximum depth of a binary tree",
    answer: [
      {
        type: "text",
        content:
          "Finding the maximum depth of a binary tree involves determining the longest path from the root node down to the farthest leaf node. Your task is to implement a function that calculates the maximum depth of a given binary tree",
      },
      {
        type: "unordered-list",
        content:
          "Use a recursive approach to explore each subtree\nHandle empty trees correctly by returning 0\nEnsure that each node is only visited once",
      },
      {
        type: "code",
        language: "javascript",
        content: `class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Usage Example:
const root = new TreeNode(1, 
  new TreeNode(2, 
    new TreeNode(4), 
    new TreeNode(5)
  ), 
  new TreeNode(3)
);

console.log(maxDepth(root)); // Expected output: 3`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const maxDepth = (root) => {
  if (!root) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};

// Test cases
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1, 
  new TreeNode(2, 
    new TreeNode(4), 
    new TreeNode(5)
  ), 
  new TreeNode(3)
);

console.log(maxDepth(root)); // Expected output: 3

const singleNode = new TreeNode(1);
console.log(maxDepth(singleNode)); // Expected output: 1

console.log(maxDepth(null)); // Expected output: 0`,
      },
    ],
  },
  {
    id: 9061,
    question:
      "Implement a function to serialize and deserialize a binary tree",
    answer: [
      {
        type: "text",
        content:
          "Serialization converts a binary tree into a string representation, and deserialization reconstructs the binary tree from the string",
      },
      {
        type: "text",
        content:
          "Consider how to handle null nodes to ensure the tree structure is accurately preserved during serialization and deserialization",
      },
      {
        type: "unordered-list",
        content:
          "Use pre-order traversal for serialization\nRepresent null nodes with a placeholder (e.g., '#')\nSplit the serialized string appropriately during deserialization",
      },
      {
        type: "text",
        content:
          "This approach ensures that both the structure and the values of the tree nodes are preserved, allowing for accurate reconstruction of the original tree",
      },
      {
        type: "code",
        language: "javascript",
        content: `class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1, 
  new TreeNode(2), 
  new TreeNode(3, new TreeNode(4), new TreeNode(5))
);

const serialized = serialize(root);
console.log('Serialized:', serialized);
// Expected output: "1,2,#,#,3,4,#,#,5,#,#"`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const serialize = (root) => {
  const result = [];
  const traverse = (node) => {
    if (!node) {
      result.push('#');
      return;
    }
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  };
  traverse(root);
  return result.join(',');
};

const deserialize = (data) => {
  const values = data.split(',');
  let index = 0;

  const traverse = () => {
    if (index >= values.length) return null;
    const val = values[index++];
    if (val === '#') return null;
    const node = new TreeNode(parseInt(val));
    node.left = traverse();
    node.right = traverse();
    return node;
  };

  return traverse();
};

// Test cases
const root = new TreeNode(1, 
  new TreeNode(2), 
  new TreeNode(3, new TreeNode(4), new TreeNode(5))
);

const serialized = serialize(root);
console.log('Serialized:', serialized);
// Expected output: "1,2,#,#,3,4,#,#,5,#,#"

const deserializedRoot = deserialize(serialized);
console.log('Deserialized:', deserializedRoot);
// Expected output: Original tree structure restored`,
      },
    ],
  },
  {
    id: 9062,
    question:
      "Implement a function to find the maximum product of three numbers in an array",
    answer: [
      {
        type: "text",
        content:
          "Finding the maximum product of three numbers in an array involves identifying the combination of three numbers that produces the highest possible product. Your task is to implement a function that finds the maximum product of any three numbers in a given array of integers",
      },
      {
        type: "text",
        content:
          "Consider both positive and negative numbers in the array, as negative numbers can impact the maximum product when multiplied together",
      },
      {
        type: "unordered-list",
        content:
          "Sort the array to access elements easily\nConsider the product of the three largest numbers\nConsider the product of the two smallest numbers (possibly negative) and the largest number",
      },    
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
console.log(maximumProduct([1,2,3]));          // Expected output: 6
console.log(maximumProduct([1,2,3,4]));        // Expected output: 24
console.log(maximumProduct([-10,-10,5,2]));    // Expected output: 500`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const maximumProduct = (nums) => {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const product2 = nums[0] * nums[1] * nums[n - 1];
  return Math.max(product1, product2);
};

// Test cases
console.log(maximumProduct([1,2,3]));          // Expected output: 6
console.log(maximumProduct([1,2,3,4]));        // Expected output: 24
console.log(maximumProduct([-10,-10,5,2]));    // Expected output: 500`,
      },
    ],
  },
  {
    id: 9063,
    question:
      "Implement a function to find the longest common prefix among an array of strings",
    answer: [
      {
        type: "text",
        content:
          "Finding the longest common prefix involves identifying the shared starting substring among all strings in an array. Your task is to implement a function that returns the longest common prefix string among an array of strings",
      },
      {
        type: "text",
        content:
          "If there is no common prefix, the function should return an empty string",
      },
      {
        type: "unordered-list",
        content:
          "Handle cases with empty arrays\nConsider varying string lengths",
      },
      {
        type: "text",
        content:
          "By comparing characters of the first and last strings after sorting, you can efficiently find the longest common prefix",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
console.log(longestCommonPrefix(['flower','flow','flight'])); // Expected output: 'fl'
console.log(longestCommonPrefix(['dog','racecar','car']));    // Expected output: ''`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const longestCommonPrefix = (strs) => {
  if (!strs.length) return '';
  
  strs.sort();
  const first = strs[0];
  const last = strs[strs.length - 1];
  let i = 0;
  
  while (i < first.length && first[i] === last[i]) {
    i++;
  }
  
  return first.substring(0, i);
};

// Test cases
console.log(longestCommonPrefix(['flower','flow','flight'])); // Expected output: 'fl'
console.log(longestCommonPrefix(['dog','racecar','car']));    // Expected output: ''
console.log(longestCommonPrefix([]));                         // Expected output: ''`,
      },
    ],
  },
  {
    id: 9064,
    question:
      "Implement a regular expression to validate email addresses in JavaScript",
    answer: [
      {
        type: "text",
        content:
          "Validating email addresses is a common requirement in web development. Your task is to implement a function that uses a regular expression to check if a given string is a valid email address",
      },
      {
        type: "unordered-list",
        content:
          "Match the local part before the '@' symbol\nValidate the domain part after the '@' symbol\nHandle subdomains and different domain extensions\nEnsure that special characters are handled appropriately",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
console.log(isValidEmail('test@example.com'));                   // Expected output: true
console.log(isValidEmail('invalid-email@.com'));                 // Expected output: false
console.log(isValidEmail('user.name+tag+sorting@example.com'));  // Expected output: true`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const isValidEmail = (email) => {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
};

// Test cases
console.log(isValidEmail('test@example.com'));                   // Expected output: true
console.log(isValidEmail('invalid-email@.com'));                 // Expected output: false
console.log(isValidEmail('user.name+tag+sorting@example.com'));  // Expected output: true
console.log(isValidEmail('plainaddress'));                       // Expected output: false`,
      },
    ],
  },
  {
    id: 9065,
    question: "Merge two sorted arrays in JavaScript",
    answer: [
      {
        type: "text",
        content:
          "Your task is to implement a function that merges two sorted arrays into one sorted array",
      },
      {
        type: "text",
        content:
          "Ensure that the merged array maintains the sorted order, and consider how to handle arrays of different lengths",
      },
      {
        type: "unordered-list",
        content:
          "Maintain the sorted order of the merged array\nHandle arrays of different lengths",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
console.log(mergeSortedArrays(array1, array2)); // Expected output: [1, 2, 3, 4, 5, 6]`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const mergeSortedArrays = (arr1, arr2) => {
  const merged = [];
  let i = 0;
  let j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  
  // Append remaining elements
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  
  return merged;
};

// Test cases
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Expected output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([-1, 0, 1], [-2, 2, 3])); // Expected output: [-2, -1, 0, 1, 2, 3]`,
      },
    ],
  },
  {
    id: 9066,
    question:
      "Implement a function to find the longest substring with at most two distinct characters",
    answer: [
      {
        type: "text",
        content:
          "Finding the longest substring with at most two distinct characters involves maintaining a substring where no more than two unique characters are present",
      },
      {
        type: "text",
        content:
          "Your task is to implement a function that returns the length of the longest such substring in a given string",
      },
      {
        type: "unordered-list",
        content:
          "Use a sliding window approach to efficiently traverse the string\nKeep track of character counts within the window\nAdjust the window when more than two distinct characters are present",
      },
      {
        type: "text",
        content:
          "This method ensures optimal time complexity by avoiding unnecessary re-computation",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
console.log(lengthOfLongestSubstringTwoDistinct('eceba'));   // Expected output: 3 ('ece')
console.log(lengthOfLongestSubstringTwoDistinct('ccaabbb')); // Expected output: 5 ('aabbb')`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const lengthOfLongestSubstringTwoDistinct = (s) => {
  let left = 0;
  let maxLen = 0;
  const charMap = new Map();

  for (let right = 0; right < s.length; right++) {
    charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);

    while (charMap.size > 2) {
      charMap.set(s[left], charMap.get(s[left]) - 1);
      if (charMap.get(s[left]) === 0) {
        charMap.delete(s[left]);
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

// Test cases
console.log(lengthOfLongestSubstringTwoDistinct('eceba'));   // Expected output: 3
console.log(lengthOfLongestSubstringTwoDistinct('ccaabbb')); // Expected output: 5`,
      },
    ],
  },
  {
    id: 9067,
    question:
      "Find the most common integer in a list, returning the smallest in case of a tie in JavaScript",
    answer: [
      {
        type: "text",
        content:
          "Identifying the most common integer in a list helps in understanding data distributions and frequency analysis. Your task is to implement a function that finds the most common integer (mode) in an array of integers",
      },
      {
        type: "text",
        content:
          "If multiple integers occur the same maximum number of times, the function should return the smallest one among them",
      },
      {
        type: "unordered-list",
        content:
          "Handle lists with multiple modes (ties)\nReturn the smallest integer among tied candidates",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
const numbers = [4, 1, 2, 2, 3, 3];
console.log(mostCommonNumber(numbers)); // Expected output: 2`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const mostCommonNumber = (arr) => {
  const frequency = {};
  let maxFreq = 0;
  let mostCommon = Infinity;
  
  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (
      frequency[num] > maxFreq ||
      (frequency[num] === maxFreq && num < mostCommon)
    ) {
      maxFreq = frequency[num];
      mostCommon = num;
    }
  }
  
  return mostCommon;
};

// Test cases
console.log(mostCommonNumber([4, 1, 2, 2, 3, 3])); // Expected output: 2
console.log(mostCommonNumber([1, 2, 2, 3, 3]));    // Expected output: 2
console.log(mostCommonNumber([5, 5, 6, 6, 7]));    // Expected output: 5`,
      },
    ],
  },
  {
    id: 9068,
    question:
      "Implement a function to flatten a deeply nested object in JavaScript",
    answer: [
      {
        type: "text",
        content:
          "Flattening a deeply nested object transforms it into a single-level object with dot-separated keys representing the original structure. Your task is to implement a function that flattens a nested object",
      },
      {
        type: "unordered-list",
        content:
          "Handle nested objects and arrays\nUse recursion to traverse all levels of nesting\nGenerate keys that accurately represent the original structure\nAvoid modifying the original object",
      },     
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
const nestedObj = {
  a: {
    b: {
      c: 1,
    },
    d: [2, 3],
  },
  e: 4,
};

console.log(flattenObject(nestedObj));
// Expected output:
// {
//   'a.b.c': 1,
//   'a.d.0': 2,
//   'a.d.1': 3,
//   'e': 4
// }`
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const flattenObject = (obj) => {
  const isObject = val => val && typeof val === 'object';
  
  const addDelimiter = (a, b) => a ? \`\${a}.\${b}\` : b;

  const paths = (obj = {}, head = '') => {
    return Object.entries(obj)
      .reduce((result, [key, value]) => {
        const fullPath = addDelimiter(head, key);
        
        if (isObject(value)) {
          if (Array.isArray(value)) {
            value.forEach((item, index) => {
              if (isObject(item)) {
                Object.assign(result, paths(item, \`\${fullPath}.\${index}\`));
              } else {
                result[\`\${fullPath}.\${index}\`] = item;
              }
            });
          } else {
            Object.assign(result, paths(value, fullPath));
          }
          return result;
        }
        
        result[fullPath] = value;
        return result;
      }, {});
  };

  return paths(obj);
};

// Test case
const nestedObj = {
  a: {
    b: {
      c: 1,
    },
    d: [2, 3],
  },
  e: 4,
};

console.log(flattenObject(nestedObj));
// Expected output:
// {
//   'a.b.c': 1,
//   'a.d.0': 2,
//   'a.d.1': 3,
//   'e': 4
// }`
      }
    ],
  },
  {
    id: 9069,
    question: "Implement a function to check if a number is prime",
    answer: [
      {
        type: "text",
        content:
          "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself",
      },
      {
        type: "text",
        content:
          "Your task is to implement a function that checks whether a given number is prime",
      },
      {
        type: "unordered-list",
        content:
          "Handle edge cases where n is less than or equal to 1\nCheck divisibility up to the square root of n\nOptimize by checking only necessary factors",
      },
      {
        type: "text",
        content:
          "This function uses the 6k ± 1 optimization to efficiently check for factors",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
console.log(isPrime(11)); // Expected output: true
console.log(isPrime(15)); // Expected output: false`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
};

// Test cases
console.log(isPrime(11)); // Expected output: true
console.log(isPrime(15)); // Expected output: false
console.log(isPrime(1));  // Expected output: false
console.log(isPrime(2));  // Expected output: true`,
      },
    ],
  },
  {
    id: 9070,
    question: "Reverse a singly linked list in JavaScript",
    answer: [
      {
        type: "text",
        content:
          "Reversing a linked list is a fundamental operation that involves rearranging the pointers of the nodes so that the list is traversed in the opposite direction. Your task is to implement a function that reverses a singly linked list",
      },
      {
        type: "unordered-list",
        content:
          "Iterate through the linked list only once\nReverse the links between the nodes\nHandle edge cases like empty lists or single-node lists",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
const list = createLinkedList([1, 2, 3, 4, 5]);
console.log(printList(list)); // Expected output: 1 -> 2 -> 3 -> 4 -> 5 -> null
const reversedList = reverseLinkedList(list);
console.log(printList(reversedList)); // Expected output: 5 -> 4 -> 3 -> 2 -> 1 -> null`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const reverseLinkedList = (head) => {
  let prev = null;
  let current = head;
  
  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  
  return prev; // New head of the reversed list
};

// Helper functions for demonstration
const createLinkedList = (arr) => {
  if (arr.length === 0) return null;
  const head = { value: arr[0], next: null };
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = { value: arr[i], next: null };
    current = current.next;
  }
  return head;
};

const printList = (head) => {
  let current = head;
  let output = '';
  while (current) {
    output += current.value + ' -> ';
    current = current.next;
  }
  output += 'null';
  return output;
};

// Test cases
const list = createLinkedList([1, 2, 3, 4, 5]);
console.log(printList(list)); // Expected output: 1 -> 2 -> 3 -> 4 -> 5 -> null
const reversedList = reverseLinkedList(list);
console.log(printList(reversedList)); // Expected output: 5 -> 4 -> 3 -> 2 -> 1 -> null`,
      },
    ],
  },
  
  {
    id: 9071,
    question:
      "Calculate the factorial of a number using recursion in JavaScript",
    answer: [
      {
        type: "text",
        content:
          "Calculating the factorial of a number using recursion demonstrates the power of self-referential functions in programming. Your task is to implement a recursive function that calculates the factorial of a non-negative integer",
      },
      {
        type: "unordered-list",
        content:
          "Handle edge cases like zero and negative numbers\nUse recursion effectively\nEnsure that the function returns accurate results",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Usage Example:
console.log(factorial(5)); // Expected output: 120
console.log(factorial(0)); // Expected output: 1`,
      },
      {
        type: "codeExerciseSolution",
        language: "javascript",
        content: `const factorial = (n) => {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Test cases
console.log(factorial(5)); // Expected output: 120
console.log(factorial(0)); // Expected output: 1
console.log(factorial(1)); // Expected output: 1`,
      },
    ],
  },
];
