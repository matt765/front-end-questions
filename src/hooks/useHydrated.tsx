import { useState, useEffect } from "react";

// Hook made to fix hydration errors in Chrome

export const useHydrated = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
};
