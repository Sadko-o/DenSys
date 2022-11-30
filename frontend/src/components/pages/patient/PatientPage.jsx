import React from "react";
import PatientNavbar from "../../navBar/PatientNavbar";
import History from '../../../assets/history.svg';
import User from '../../../assets/user.svg'
import UserImage from '../../../assets/userImage.jpeg'
const PatientPage = () => {
  return (
    <div className="flex flex-row">
    <PatientNavbar/>
      
    <div class="bg-gray-100">
    <div class="w-full text-black bg-main-color">
            <div x-data="{ open: false }"
                class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div class="p-4 flex flex-row items-center justify-between">
                    
                        
                    <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                            <path x-show="!open" fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                            <path x-show="open" fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <nav class="flex open">
                    <div className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                    <div className="famality relative">
                        <button  class="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent hover:bg-blue-800 md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none focus:shadow-outline">
                            <span>Christina</span>
                            <img class="inline h-6 rounded-full"
                                src={UserImage}/>
                            <svg fill="currentColor" viewBox="0 0 20 20" 
                                class="inline w-4 h-4 transition-transform duration-200 transform">
                                <path fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    </div>
                </nav>
            </div>
        </div>

        <div class="container  mx-auto my-5 p-5">
            <div class="md:flex no-wrap md:-mx-2 ">
                
                <div class="w-full md:w-3/12 md:mx-2">
                    
                    <div class="bg-white p-3 border-t-4 border-[#4885ed]">
                        <div class="image overflow-hidden">
                            <img class="h-auto w-full mx-auto"
                                src={UserImage}
                                alt=""/>
                        </div>
                        <h1 class="text-gray-900 bg-white  font-bold text-xl leading-8 my-1">Chrisina Yang</h1>
                        
                    
                </div>

                    
                  
                </div>
                
                <div class="w-full md:w-9/12 mx-2 h-64 shadow-md">
                    <div class="bg-white p-3 shadow-sm rounded-sm">
                        <div class="bg-white flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <img src={User} className="bg-white w-8 m-3"/>
                            <span class="bg-white tracking-wide">About</span>
                            <button class="flex text-gray-500 hover:text-[#4885ed] justify-between  sm:mt-0">Edit</button>
                        </div>
                        <div class="bg-white  text-gray-700">
                            <div class="bg-white grid md:grid-cols-2 text-sm">
                                <div class="bg-white grid grid-cols-2">
                                    <div class="bg-white px-4 py-2 font-semibold">First Name</div>
                                    <div class="bg-white px-4 py-2">Christina</div>
                                </div>
                                <div class="bg-white grid grid-cols-2">
                                    <div class="bg-white px-4 py-2 font-semibold">Last Name</div>
                                    <div class="bg-white px-4 py-2">Yang</div>
                                </div>
                                <div class="bg-white grid grid-cols-2">
                                    <div class="bg-white px-4 py-2 font-semibold">Gender</div>
                                    <div class="bg-white px-4 py-2">Female</div>
                                </div>
                                <div class="bg-white grid grid-cols-2">
                                    <div class="bg-white px-4 py-2 font-semibold">Contact No.</div>
                                    <div class="bg-white px-4 py-2">+11 998001001</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="bg-white px-4 py-2 font-semibold">Current Address</div>
                                    <div class="bg-white px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="bg-white px-4 py-2 font-semibold">Permanant Address</div>
                                    <div class="bg-white px-4 py-2">Arlington Heights, IL, Illinois</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="bg-white px-4 py-2 font-semibold">Email.</div>
                                    <div class="bg-white px-4 py-2">patient@example.com</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="bg-white px-4 py-2 font-semibold">Birthday</div>
                                    <div class="bg-white px-4 py-2">Feb 06, 1998</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-3 shadow-sm rounded-sm">

                        <div class="grid bg-white  grid-cols-2">
                            <div>
                                <div class="flex bg-white  items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <img src={History} className="w-8 bg-white  m-3"/>
                                    <span class="tracking-wide bg-white ">Medical History</span>
                                    <button class="flex text-gray-500 hover:text-[#4885ed] justify-between  sm:mt-0">Edit</button>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default PatientPage;
