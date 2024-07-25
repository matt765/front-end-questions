import { useState, useCallback, useRef } from "react";
import { useClickOutside } from "./useClickOutside";

export const useDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLDivElement | null>(null);

  const openDropdown = useCallback(() => {
    setIsDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  useClickOutside(dropdownRef, toggleRef, closeDropdown);

  return {
    isDropdownOpen,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    dropdownRef,
    toggleRef,
  };
};
