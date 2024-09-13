export const saveToLocalStorage = <T>(key: string, value: T): void => {
  if (typeof window !== 'undefined') {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }
};

export const loadFromLocalStorage = <T>(key: string, initialValue: T): T => {
  if (typeof window === 'undefined') {
    return initialValue;
  }
  const storedData = localStorage.getItem(key);

  if (!storedData || storedData === 'undefined' || storedData === 'null') {  
    return initialValue;
  }

  try {
    return JSON.parse(storedData);
  } catch (error) {
    console.error('Error parsing JSON from localStorage:', error);
    return initialValue; 
  }
};
