import { useState, useRef, useEffect, useCallback } from "react";

export const useSelect = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLDivElement | null>(null);

  const toggleSelect = useCallback(() => {
    setIsSelectOpen((prev) => !prev);
  }, []);

  const closeSelect = useCallback(() => {
    setIsSelectOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        closeSelect();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef, toggleRef, closeSelect]);

  return {
    isSelectOpen,
    toggleSelect,
    closeSelect,
    selectRef,
    toggleRef,
  };
};
