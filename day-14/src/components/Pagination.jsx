import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Pagination = ({ updateUrl, meta }) => {
  const handlePageChange = (url) => {
    updateUrl(url);
  };

  return (
    <>
      <div>
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-10 text-base">
            <>
              {meta?.links.map((link) => (
                <button
                  disabled={!link.url}
                  onClick={() => handlePageChange(link.url)}
                  key={link.label}
                  className={`flex ${
                    link.active && "bg-blue-600 text-white"
                  }  cursor-pointer first:rounded-s-lg last:rounded-e-lg items-center justify-center px-4 h-10 leading-tight text-gray-500  border   hover:bg-blue-300 hover:text-gray-700 dark:bg-gray-800  dark:text-gray-400 disabled:bg-slate-300 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {link.label === "&laquo; Previous" ? (
                    <ChevronLeft />
                  ) : link.label === "Next &raquo;" ? (
                    <ChevronRight />
                  ) : (
                    link.label
                  )}
                </button>
              ))}
            </>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
