// Initialize a Set to keep track of active timers and promises
const activeTimers = new Set();
const activePromises = new Set();
let mainFunctionCompleted = false;

// Define maximum output lines
const MAX_OUTPUT_LINES = 500;
let outputLineCount = 0;

// Store original timer functions
const originalSetTimeout = self.setTimeout;
const originalSetInterval = self.setInterval;
const originalClearTimeout = self.clearTimeout;
const originalClearInterval = self.clearInterval;

let domManipulationAttempted = false;
// Override setTimeout
self.setTimeout = function (fn, delay, ...args) {
  const id = originalSetTimeout(() => {
    try {
      fn(...args);
    } finally {
      activeTimers.delete(id);
      checkIfDone();
    }
  }, delay);
  activeTimers.add(id);
  return id;
};

// Override setInterval
self.setInterval = function (fn, delay, ...args) {
  const id = originalSetInterval(fn, delay, ...args);
  activeTimers.add(id);
  return id;
};

// Override clearTimeout
self.clearTimeout = function (id) {
  originalClearTimeout(id);
  if (activeTimers.has(id)) {
    activeTimers.delete(id);
    checkIfDone();
  }
};

// Override clearInterval
self.clearInterval = function (id) {
  originalClearInterval(id);
  if (activeTimers.has(id)) {
    activeTimers.delete(id);
    checkIfDone();
  }
};

// Override Promise
const OriginalPromise = self.Promise;
self.Promise = class extends OriginalPromise {
  constructor(executor) {
    const wrappedExecutor = (resolve, reject) => {
      const wrappedResolve = (value) => {
        activePromises.delete(promise);
        checkIfDone();
        resolve(value);
      };
      const wrappedReject = (reason) => {
        activePromises.delete(promise);
        checkIfDone();
        reject(reason);
      };
      executor(wrappedResolve, wrappedReject);
    };
    super(wrappedExecutor);
    const promise = this;
    activePromises.add(promise);
  }
};

function formatOutput(arg, depth = 0) {
  if (arg instanceof Error) {
    return arg.toString(); // This will return "Error: <message>"
  } else if (Array.isArray(arg)) {
    if (arg.length === 0) return '[]';
    if (arg.every(item => typeof item !== 'object' || item === null)) {
      return '[' + arg.map(item => formatOutput(item, depth + 1)).join(', ') + ']';
    } else {
      return '[\n' + arg.map(item => '  '.repeat(depth + 1) + formatOutput(item, depth + 1)).join(',\n') + '\n' + '  '.repeat(depth) + ']';
    }
  } else if (typeof arg === 'object' && arg !== null) {
    const entries = Object.entries(arg);
    if (entries.length === 0) return '{}';
    return '{\n' + entries.map(([key, value]) => '  '.repeat(depth + 1) + `${key}: ${formatOutput(value, depth + 1)}`).join(',\n') + '\n' + '  '.repeat(depth) + '}';
  } else if (typeof arg === 'string') {
    return arg;
  } else {
    return String(arg);
  }
}

// Mock document and window objects to detect DOM manipulation attempts
self.document = new Proxy({}, {
  get: function (target, prop) {
    domManipulationAttempted = true;
    return function () {
      throw new Error("document is not defined");
    };
  }
});

self.window = new Proxy({}, {
  get: function (target, prop) {
    domManipulationAttempted = true;
    return function () {
      throw new Error("window is not defined");
    };
  }
});
function checkIfDone() {
  if (activeTimers.size === 0 && activePromises.size === 0 && mainFunctionCompleted) {
    if (domManipulationAttempted) {
      self.postMessage({
        output: "Note: This environment does not have access to the DOM or window object.",
        error: null,
        done: false
      });
    }
    // Defer the 'done: true' message to ensure all logs are sent first
    setTimeout(() => {
      self.postMessage({ output: null, error: null, done: true });
    }, 0);
  }
}


self.onmessage = async function (e) {
  const { code } = e.data;

  outputLineCount = 0;
  
  let isAsync = false;
  isAsync = /\basync\b|\bawait\b|\bsetInterval\b|\bnew Promise\b/.test(code);

  // Notify the main thread that we're starting execution
  self.postMessage({ type: 'executionStart', isAsync });

  if (!isAsync) {
    // Delay execution by 1 second for synchronous tasks
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  // Override console methods to capture output
  ['log', 'error', 'warn', 'info'].forEach((method) => {
    const originalMethod = console[method];
    console[method] = function (...args) {
      outputLineCount++;
  
      if (outputLineCount > MAX_OUTPUT_LINES) {
        self.postMessage({
          output: null,
          error: "Error: Output limit of 500 lines exceeded.",
          done: true
        });
        self.terminate();
        return;
      }
  
      const message = args
        .map((arg) => formatOutput(arg))
        .join(' ');
      self.postMessage({ output: message, error: null, done: false });
    };
  });
  

  // Disable network requests
  self.fetch = () => {
    throw new Error("Network requests are disabled.");
  };

  self.XMLHttpRequest = function () {
    throw new Error("Network requests are disabled.");
  };

  self.WebSocket = function () {
    throw new Error("Network requests are disabled.");
  };

  self.EventSource = function () {
    throw new Error("Network requests are disabled.");
  };

  self.importScripts = function () {
    throw new Error("Importing scripts is disabled.");
  };

  self.navigator = new Proxy({}, {
    get() {
      throw new Error("navigator is not available in this environment.");
    },
  });

  if (self.navigator && self.navigator.sendBeacon) {
    self.navigator.sendBeacon = function () {
      throw new Error("navigator.sendBeacon is disabled.");
    };
  }

  self.BroadcastChannel = function () {
    throw new Error("BroadcastChannel is disabled.");
  };

  self.RTCPeerConnection = function () {
    throw new Error("RTCPeerConnection is disabled.");
  };

  self.RTCSessionDescription = undefined;
  self.RTCIceCandidate = undefined;
  self.MediaStream = undefined;

  self.Worker = function () {
    throw new Error("Nested workers are not allowed.");
  };

  self.MessageChannel = function () {
    throw new Error("MessageChannel is disabled.");
  };

  self.SharedWorker = function () {
    throw new Error("SharedWorker is disabled.");
  };

  self.File = undefined;
  self.Blob = undefined;
  self.indexedDB = undefined;
  self.bluetooth = undefined;

  delete self.window;
  delete self.document;


  if (self.crypto && self.crypto.getRandomValues) {
    Object.defineProperty(self.crypto, 'getRandomValues', {
      value: function () {
        throw new Error("crypto.getRandomValues is disabled.");
      },
      configurable: true,
    });
  }

  if (self.crypto && self.crypto.subtle) {
    self.crypto.subtle = undefined;
  }


  if (self.crypto && self.crypto.getRandomValues) {
    self.crypto.getRandomValues = function () {
      throw new Error("crypto.getRandomValues is disabled.");
    };
  }

  if (self.crypto && self.crypto.randomUUID) {
    self.crypto.randomUUID = function () {
      throw new Error("crypto.randomUUID is disabled.");
    };
  }

  if (self.navigator && self.navigator.geolocation) {
    self.navigator.geolocation.getCurrentPosition = function () {
      throw new Error("Geolocation is disabled.");
    };
    self.navigator.geolocation.watchPosition = function () {
      throw new Error("Geolocation is disabled.");
    };
  }

  //Freeze the global scope
  Object.seal(self);
  Object.freeze(Object.getPrototypeOf(self));
  Object.freeze(Function.prototype);
  Object.freeze(Object.prototype);
  Object.freeze(Array.prototype);
  Object.freeze(String.prototype);
  Object.freeze(Number.prototype);
  Object.freeze(Boolean.prototype);
  Object.freeze(RegExp.prototype);
  Object.freeze(Date.prototype);
  Object.freeze(Math);

  self.Function = undefined;
  self.AsyncFunction = undefined;
  self.GeneratorFunction = undefined;
  self.eval = undefined;

  try {
    const AsyncFunction = Object.getPrototypeOf(async function () { }).constructor;
    const userAsyncFunction = new AsyncFunction('"use strict";\n' + code);
    await userAsyncFunction();

    // Schedule mainFunctionCompleted to true in the next microtask
    Promise.resolve().then(() => {
      mainFunctionCompleted = true;
      checkIfDone(); // Check if execution is complete
    });

  } catch (err) {
    if (err.message.includes("is not defined") && (err.message.includes("document") || err.message.includes("window"))) {
      self.postMessage({
        output: "" + err.message + "\n\nThis JavaScript console does not have access to the DOM or window object. \nPlease use native browser console for DOM manipulation.",
        error: null,
        done: true
      });
    } else {
      self.postMessage({ output: null, error: err.message, done: true });
    }
  }
};

// Global error handlers
self.addEventListener('error', (err) => {
  self.postMessage({ output: null, error: err.message, done: true });
});

self.addEventListener('unhandledrejection', (event) => {
  self.postMessage({
    output: null,
    error:
      event.reason ? event.reason.message || String(event.reason) : 'Unhandled rejection',
    done: true,
  });
});