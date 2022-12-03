import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const history = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const toSearchPage = () => {
    history("/search", { state: { name: searchInput } });
  };

  // const handleSearch = (e) => {
  //     e.preventDefault()

  //     history(`/search`, {state: {searchInput}})
  // }

  return (
    <form>
      <div className="flex px-20">
        <div className="relative ">
          <select className="bg-[#2273FF] flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white  border  rounded-l-lg  focus:ring-4  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
            <option>All categories </option>
            <option>Procedure | Specialization</option>
            <option>Doctor Name</option>
          </select>
        </div>
        <div className="relative w-5/6 items-center">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 "
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-white rounded-r-lg border   focus:ring-4 focus:outline-none focus:ring-blue-300 "
            onClick={() => {
              toSearchPage();
            }}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5  bg-transparent"
              fill="none"
              stroke="#2273FF"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
