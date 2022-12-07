import { React, useState } from "react";

export default function UserForm(props) {
  const inputForms = props.inputForms;
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(inputForms.length / 4) - 1;
  const handleNextPage = () => {
    setPage(Math.min(page + 1, maxPage));
  };
  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 0));
  };
  const [inputData, setInputData] = useState({});
  let inputValues = inputData;
  const handleChange = (e, id) => {
    inputValues[id] = e.target.value;
    setInputData(inputValues);
    console.log(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(e, inputValues);
  };

  const inputFields = inputForms.map((input, index) => {
    if (input.type === "select") {
      return (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={input.id}
          >
            {input.label}
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id={input.id}
              onChange={(e) => handleChange(e, input.id)}
            >
              {input.options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 7l3-3 3 3v8l-3 3-3-3V7z" />
                <path d="M0 0h20v20H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={input.id}
          >
            {input.label}
          </label>
          <input
            onChange={(e) => handleChange(e, input.id)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={input.id}
            type={input.type}
            placeholder={input.placeholder}
            pattern={input.pattern}
          />
        </div>
      );
    }
  });

  const inputGroups = [];
  for (let i = 0; i < inputForms.length; i += 4) {
    inputGroups.push(
      <div className={`${i / 4 === page ? "block" : "hidden"} `}>
        {inputFields[i]}
        {inputFields[i + 1]}
        {inputFields[i + 2]}
        {inputFields[i + 3]}
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-xs">
        <form className="shadow-md w-full rounded px-8 pt-6 pb-8 mb-4">
          {inputGroups}
          {page === maxPage && (
            <div class="flex items-center justify-center">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Create User
              </button>
            </div>
          )}
        </form>

        <div className="navigation flex justify-center ">
          {page > 0 && (
            <a
              href="#"
              className="items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={handlePrevPage}
            >
              Previous
            </a>
          )}
          {page < maxPage && (
            <a
              href="#"
              className="items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={handleNextPage}
            >
              Next
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
