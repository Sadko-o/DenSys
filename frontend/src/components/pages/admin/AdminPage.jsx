import React, { Component } from "react";
import HomeHeader from "../../headers/HomeHeader";

const roles = ['Patients', 'Doctors', 'Admins']
class AdminPage extends Component {
  render() {
    
    return (
      <>
        <div className=" w-full sm:px-6 lg:px-8">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <h2 className="my-5 text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
              Users List
            </h2>
            

            <div className="panel w-1/2 mx-auto flex flex-1 items-center justify-center  sm:items-stretch sm:justify-between">

                <div className="flex space-x-6">
                {roles.map((item) => (
                      <button
                        className="hover:border-b-4 border-indigo-500 hover:text-indigo-500 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ">
                        {item}
                      </button>
                    ))}
                   
                </div>

                <div className="searchPanel flex">
                    <label class="relative block ">
                        <span class="sr-only">Search</span>
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">Ы</svg>
                        </span>
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                    </label>
                    <button className="px-1" >Search</button>

                </div>
            </div>

          

          </div>
        </div>
      </>
    );
  }
}

export default AdminPage;
