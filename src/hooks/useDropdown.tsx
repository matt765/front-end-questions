import { useState, useCallback, useRef } from "react";
import { useClickOutside } from "./useClickOutside";

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLDivElement | null>(null);

  const openDropdown = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useClickOutside(dropdownRef, toggleRef, closeDropdown);

  return {
    isOpen,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    dropdownRef,
    toggleRef,
  };
};
