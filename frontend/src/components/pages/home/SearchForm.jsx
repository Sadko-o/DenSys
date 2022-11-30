import React from 'react'

const SearchForm = () => {
  return (
    
        <form>
            <div className='flex px-20'>
                <label  htmlfor="search-dropdown" className="mb-2 text-lg font-medium text-gray-900 sr-only dark:text-white">You can search </label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" className=" bg-[#2273FF] flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900  border  rounded-l-lg  focus:ring-4  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                    All categories 
                <svg aria-hidden="true" className="w-4 h-4 ml-1 bg-[#2273FF]" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style={{position: "absolute", inset: "auto auto 0px 0px", margin:" 0px", transform: "translate3d(897px, 5637px, 0px)"}}  required>
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" >
                    <li>
                        <button type="button" className="inline-flex w-full px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                    </li>
                    <li>
                        <button type="button" className="inline-flex w-full px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                    </li>
                    <li>
                        <button type="button" className="inline-flex w-full px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                    </li>
                    <li>
                        <button type="button" className="inline-flex w-full px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                    </li>
                    </ul>
                </div>
                <div className="relative w-5/6 items-center">
                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 " placeholder="Search" required/>
                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-white rounded-r-lg border   focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        <svg aria-hidden="true" className="w-5 h-5  bg-transparent" fill="none" stroke="#2273FF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    
  )
}

export default SearchForm