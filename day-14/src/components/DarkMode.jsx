import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";

const DarkMode = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleDark = () => {
    toggleTheme("dark");
    setIsOpen(false);
  };
  const handleLight = () => {
    toggleTheme("light");
    setIsOpen(false);
  };
  return (
    <div className=" relative">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white dark:text-black capitalize bg-black hover:bg-gray-600  focus:outline-none  font-medium rounded-lg text-sm md:px-5 px-3  py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-gray-300 "
        type="button"
      >
       {theme}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute right-0 top-[50px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <span
              onClick={handleDark}
              className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dark
            </span>

            <span
              onClick={handleLight}
              className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Light
            </span>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DarkMode;
