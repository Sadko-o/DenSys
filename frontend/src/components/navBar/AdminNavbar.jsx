import React from "react";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  const logOutHandler = () => {
    navigate("/");
  };

  const navigateToRegisterPage = () => {
    navigate("/registeruser");
  };
  return (
    <aside
      // For some reason, shadow doesn't work when there is a flex in a parent class
      className="w-64 shadow-[2px_0_10px_0_rgba(0,0,0,0.2)] "
      aria-label="Sidebar"
    >
      <div className="h-screen overflow-y-hidden py-6 pl-4 bg-gray-50">
        <div onClick={navigateToHome} className="cursor-pointer">
          <img className="h-8 w-auto " src={logo} />
        </div>
        <ul className="group flex flex-col justify-center h-full ">
          <li>
            <a
              href="#"
              className="flex items-center p-2 py-3 text-base font-normal text-gray-900 border-r-4 group/nav border-indigo-500"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6  transition duration-75 text-indigo-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 py-3 text-base font-normal text-gray-900 hover:border-r-4 group/nav hover:border-indigo-500"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400 group-hover/nav:text-indigo-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 py-3 text-base font-normal text-gray-900 hover:border-r-4 group/nav hover:border-indigo-500"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400 group-hover/nav:text-indigo-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                className="flex-1 ml-3 whitespace-nowrap"
                onClick={navigateToRegisterPage}
              >
                Create User
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 py-3 text-base font-normal text-gray-900 hover:border-r-4 group/nav hover:border-indigo-500"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400 group-hover/nav:text-indigo-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <span className="flex-1 ml-3 whitespace-nowrap">
                Make An Appointment
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={logOutHandler}
              className="flex items-center p-2 py-3 text-base font-normal text-gray-900 hover:border-r-4 group/nav hover:border-indigo-500"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400 group-hover/nav:text-indigo-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
