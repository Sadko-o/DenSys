import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../navBar/AdminNavbar";

const AdminPage = () => {
  const navigate = useNavigate();
  const navigateToRegisterPage = () => {
    navigate("/registeruser");
  };
  return (
    <div className="flex flex-row">
      <AdminNavbar />
      <main className="main w-full h-screen bg-gray-200">
        <button
          onClick={navigateToRegisterPage}
          class="mx-1 px-4 py-1 text-sm bg-white text-indigo-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-green-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add User
        </button>
      </main>
    </div>
  );
};

export default AdminPage;
