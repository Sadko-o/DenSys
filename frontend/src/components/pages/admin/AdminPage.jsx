import React, { Component } from "react";
import AdminHeader from "../../headers/AdminHeader";
import {useState} from 'react'

const roles = ['Patients', 'Doctors', 'Admins']


export default function AdminPage()
 {
    const [currentRole, setCurrentRole] = useState(0);


    return (
      <>
        <AdminHeader></AdminHeader>
        <div class=" sm:py-10 lg:py-16">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
              Users List
            </h2>

            <div className="panel w-1/2 mx-auto flex flex-1 items-center justify-center  sm:items-stretch sm:justify-between">

                <div className="flex space-x-6 ">
                {roles.map((item, index) => (
                      <button 
                        key = {index}
                        onClick={() => {setCurrentRole(index)}}
                        className="hover:border-b-4 border-indigo-500 hover:text-indigo-500 hover:cursor-pointer focus:text-indigo-500 focus:border-b-4">
                        {item}
                      </button>
                    ))}
                   
                </div>

                <div className="searchPanel flex">
                    <label class="relative block ">
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                    </label>
                    <button class="mx-1 px-4 py-1 text-sm text-indigo-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-indigo-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Saerch
                    </button>

                </div>
            </div>
          </div>
        </div>
      </>
    );
}

