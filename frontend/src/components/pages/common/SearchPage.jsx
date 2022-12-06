// IMPORTINGS
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import HomeHeader from '../../headers/AdminHeader';
import SearchForm from '../home/SearchForm';
import { useLocation } from 'react-router-dom';
import Autocomplete from "./AutoComplete";

// COMPONENT
const SearchPage = () => {
    const baseURL = "https://densys-production.up.railway.app/";
    const location = useLocation();
    const [row, setRow] = useState(null);
    const [searchValue , setSearchValue] = useState();
    const [showOptions, setShowOptions] = useState(false)
    const [cursor, setCursor] = useState(-1)
    const options = ['Chennai', 'Mumbai', 'Bangalore']

    const fetchHandler = async () => {
        const response = await axios.get(baseURL+"doctor");
        // console.log(response.data['doctors']);
        setRow(response.data['doctors']);
    }

    useEffect(() => {
        fetchHandler();
        // console.log(row)
    }, []);



    return (
    <>
        <HomeHeader/>
        <div >
            <div className="min-w-screen h-screen pt-10 shadow-2xl flex items-center justify-center bg-[#f3f3f3] font-sans overflow-hidden">
                <div className="w-full lg:w-5/6 my-11">
                    <div className='m-4'>
                        <h2 className=" text-center py-2 px-2 text-[#4885ed] pb-2 text-xl font-bold sm:text-2xl">You can seach and make appointment with choosen one</h2>
                        <form >
                            <div className='flex px-20'>
                                <div className="relative ">
                                    <select className="bg-[#2273FF] flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white  border  rounded-l-lg  focus:ring-4  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
                                        <option>All categories </option>
                                        <option>Procedure | Specialization</option>
                                        <option>Doctor Name</option>
                                    </select>
                                </div>
                                <div className="relative w-full items-center">
                                    {/* <input type="text" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 " options={['Chennai', 'Mumbai', 'Bangalore']}  placeholder={location.state.name} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/> */}
                                    {/* <Autocomplete suggestions={["Oranges", "Apples", "Banana", "Kiwi", "Mango"]}/> */}
                                    <Autocomplete className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 " suggestions={options}  value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-white rounded-r-lg border   focus:ring-4 focus:outline-none focus:ring-blue-300 " >
                                        <svg aria-hidden="true" className="w-5 h-5  bg-transparent" fill="none" stroke="#2273FF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-full flex items-center justify-center bg-[#f3f3f3] font-sans overflow-hidden">
                        <table className="bg-white table-center min-w-max w-full ">
                            <thead>
                                <tr className="bg-white  mx-4 text-black uppercase text-sm leading-normal">
                                    <th className="py-3 px-10 bg-[#ca2125] text-left rounded-tl-lg text-white">Email</th>
                                    <th className="py-3 px-3 bg-[#ca2125] text-left  text-white">Name</th>
                                    <th className="py-3 px-3 bg-[#ca2125] text-left  text-white">Surname</th>
                                    <th className="py-3 px-3 bg-[#ca2125] text-left  text-white">Procedure</th>
                                    <th className="py-3 px-3 bg-[#ca2125] text-center rounded-tr-lg text-white">Actions</th>
                                </tr>
                            </thead>
                            
                                { (row)? row.map(row =>
                                <tbody className="text-gray-600 bg-white  hover:text-gray-900 text-sm font-light">
                                <tr className="border-b border-gray-300  bg-white hover:bg-gray-900">
                                    <td className="py-3 px-10 text-left bg-white  whitespace-nowrap">
                                        <div className="flex bg-white  items-center">
                                            <span className="bg-white  font-medium">{row.email}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-10 text-left bg-white  whitespace-nowrap">
                                        <div className="flex bg-white  items-center">
                                            <span className="bg-white  font-medium">{row.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-10 text-left bg-white  whitespace-nowrap">
                                        <div className="flex bg-white  items-center">
                                            <span className="bg-white  font-medium">{row.surname}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-10 text-left bg-white  whitespace-nowrap">
                                        <div className="flex bg-white  items-center">
                                            <span className="bg-white  font-medium">{row.procedure}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 bg-white  text-center">
                                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
                                            Make Appointment
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                                ):<tr className=' w-full text-center  font-bold uppercase text-sm table-auto'><td className='text-black-600 uppercase text-sm leading-normal'> Loading...</td></tr>}
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default SearchPage