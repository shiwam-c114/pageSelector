import React, { useState } from "react";
import "./App.css";
const PageSelector = () => {
  const [selectedPages, setSelectedPages] = useState([]);

  const togglePage = (page) => {
    setSelectedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6"];

  const CustomCheckbox = ({ page, checked, onClick }) => {
    const [hovered, setHovered] = useState(false);
    const [pressed, setPressed] = useState(false);
    return (
      <div
        key={page}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        className="flex items-center justify-between py-2 cursor-pointer"
      >
        <span>{page}</span>
        <div className="relative">
          <input
            type="checkbox"
            className={`appearance-none w-[1.4rem] h-[1.4rem] border rounded-md bg-white cursor-pointer
            ${
              checked
                ? hovered
                  ? "bg-blue-500 border-blue-500"
                  : "bg-blue-600 border-blue-600 "
                : ""
            }
            ${pressed ? "ring-4 ring-blue-100 " : ""}
            ${hovered ? "border-gray-300" : "border-gray-200"} 
            ${pressed ? "border-gray-400" : ""}
            `}
            checked={checked}
          />
          <svg
            className={`absolute w-[1.6] h-6 top-[45%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none checked:opacity-100`}
            viewBox="0 0 27 25"
            fill="none"
            stroke={
              checked
                ? "white"
                : pressed
                ? "gray"
                : hovered
                ? "rgb(229 231 235)"
                : "white"
            }
            strokeWidth="1"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[25rem] border border-gray-100 bg-white rounded-lg shadow-custom p-4 font-montserrat text-sm font-[300] flex flex-col h-[21rem]">
        <div className="-mt-1 px-1">
          <CustomCheckbox
            page="All pages"
            checked={selectedPages.length === pages.length}
            onClick={() =>
              setSelectedPages(
                selectedPages.length === pages.length ? [] : pages
              )
            }
          />
        </div>
        <hr className="border-t-[0.75px] border-gray-300 my-2 -mx-1" />
        <div className="overflow-y-auto overflow-hidden hide-scrollbar px-1">
          {pages.map((page) => (
            <CustomCheckbox
              page={page}
              checked={selectedPages.includes(page)}
              onClick={() => togglePage(page)}
            />
          ))}
        </div>
        <hr className="border-t-[0.75px] border-gray-300 my-2 -mx-1" />
        <button className="w-full bg-yellow-400 text-black py-2 rounded-md mt-3 mb-1 hover:bg-yellow-300 active:bg-yellow-400">
          Done
        </button>
      </div>
    </div>
  );
};

export default PageSelector;
