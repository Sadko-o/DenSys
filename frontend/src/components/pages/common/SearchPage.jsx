// IMPORTINGS
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import HomeHeader from '../../headers/AdminHeader';
import SearchForm from '../home/SearchForm';
import { useLocation } from 'react-router-dom';
// COMPONENT
const SearchPage = () => {
    const baseURL = "https://backend-app-production-2791.up.railway.app/doctor";
    const location = useLocation();
    const [row, setRow] = useState(null);
    const [search , setSearch] = useState();
    
    // const [search , setSearch] = useInput({ type: "text" })
    

    // function useInput({ type /*...*/ }) {
    //     const [value, setValue] = useState("");
    //     const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
    //     return [value, input];
    //   }
    const getAllDoctors = async () => {
        const response = await axios.get(baseURL);
        setRow(response.data);
    }
    useEffect(() => {
        getAllDoctors();
    }, []);

    return (
        <>
        <HomeHeader/>
        <div >
            <div className="min-w-screen pt-10 shadow-2xl flex items-center justify-center bg-[#f3f3f3] font-sans overflow-hidden">
                <div className="w-full lg:w-5/6 my-11">
                    <div className='m-6'>
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
                                <div className="relative w-5/6 items-center">
                                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 " placeholder={location.state.name} value={search} onChange={(e)=>setSearch(e.target.value)}/>
                                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-white rounded-r-lg border   focus:ring-4 focus:outline-none focus:ring-blue-300 " >
                                        <svg aria-hidden="true" className="w-5 h-5  bg-transparent" fill="none" stroke="#2273FF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                <div className="w-full lg:w-5/6">
                    <div className=' flex items-center justify-center bg-[#f3f3f3] font-sans overflow-hidden'>

                        <table className="min-w-max bg-white  w-full table-center ">
                            <thead>
                                <tr className="bg-white  mx-4 text-black uppercase text-sm leading-normal">
                                    <th className="py-3 px-10 bg-[#ca2125] text-left rounded-tl-lg text-white">Email</th>
                                    <th className="py-3 px-3 bg-[#ca2125] text-left  text-white">Name</th>
                                    <th className="py-3 px-3 bg-[#ca2125] text-left  text-white">Surname</th>
                                    <th className="py-3 px-3 bg-[#ca2125] text-left  text-white">Specalization</th>
                                    <th className="py-3 px-3 bg-[#ca2125] text-center rounded-tr-lg text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 bg-white  hover:text-gray-900 text-sm font-light">
                                { (row)? row.map(row =>
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
                                            <span className="bg-white  font-medium">{row.specalization}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 bg-white  text-center">
                                        {/* TODO svg icon or smth make apppointment */}
                                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
                                            Make Appointment
                                        </button>
                                    </td>
                                </tr>
                                ):<tr className='min-w-max w-full uppercase text-sm table-auto'><td className='text-black-600 uppercase text-sm leading-normal'> Loading...</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
            </>
    )
}

export default SearchPage