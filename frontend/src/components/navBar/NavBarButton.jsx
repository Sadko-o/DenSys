import React from "react";

export default function NavBarButton(props) {
  const path = props.path;
  const text = props.text;
  const isActive = props.isActive;
  const onClickFunction = props.onClickFunction;

  const className = `flex items-center p-2 py-3 text-base font-normal text-gray-900 ${
    isActive
      ? "border-r-4 group/nav border-indigo-500"
      : "hover:border-r-4 group/nav hover:border-indigo-500"
  }`;
  const iconClass = `flex-shrink-0 w-6 h-6  transition duration-75 ${
    isActive
      ? "text-indigo-500"
      : "text-gray-400 group-hover/nav:text-indigo-500"
  }`;

  return (
    <li>
      <a href="#" className={className} onClick={onClickFunction}>
        <svg
          aria-hidden="true"
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" d={path} clipRule="evenodd"></path>
        </svg>

        <span className="flex-1 ml-3 whitespace-nowrap">{text}</span>
      </a>
    </li>
  );
}
