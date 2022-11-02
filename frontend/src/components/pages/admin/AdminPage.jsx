import React from "react";
import AdminHeader from "../../headers/AdminHeader";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import User from './User'
import tmpImg from '../../../assets/rami.jpg'
import UserDB from './UserDB.json'
const roles = ['All users', 'Patients', 'Doctors']


export default function AdminPage() {
  const [currentRole, setCurrentRole] = useState(0);
  const navigate = useNavigate();


  var UserList = UserDB;
  switch (currentRole) {
    case 1: 
      UserList = UserList.filter((user) => user.role == "patient")
      break; 
    case 2:
      UserList = UserList.filter((user) => user.role == "doctor")
      break;
  }

  const navigateToRegisterPage = () => {
    navigate("/registeruser");
  };

  return (
    <>
      <AdminHeader></AdminHeader>
      <div class=" sm:py-10 lg:py-16">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Users List
          </h2>

          <div className="searchPanel w-1/2 mx-auto flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex space-x-6 border-b  first:text-indigo-500 ">
              {roles.map((item, index) =>
                index === currentRole ? (
                  <button
                    key={index}
                    className="text-indigo-500 border-b-4 border-indigo-500"
                  >
                    {item}
                  </button>
                ) : (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentRole(index);
                    }}
                    className="hover:border-b-4 border-indigo-300 hover:text-indigo-500 hover:cursor-pointer focus:text-indigo-500 focus:border-b-4"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <div className="searchPanel flex my-1">
              <label class="relative block ">
                <input
                  class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                />
              </label>
              <button class="mx-1 px-4 py-1 text-sm text-indigo-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-indigo-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Search
              </button>
              <button
              onClick={navigateToRegisterPage} 
              class="mx-1 px-4 py-1 text-sm text-indigo-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-green-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                +
              </button>
            </div>
          </div>
          
          <div id="userList" className="my-2" >
            {UserList.map( (user) => <User user={user} img={tmpImg}/>)}
          </div>
                    
        </div>
      </div>
    </>
  );
}
