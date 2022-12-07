import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminNavbar from "../../navBar/AdminNavbar";
import Appointments from "./Appointments";
import AllUsers from "./AllUsers";
import CreateUser from "./CreateUser";
const AdminPage = () => {
  return (
    <div className="flex flex-row">
      <AdminNavbar />
      <main className="main w-full h-screen bg-gray-200">
        <Routes>
          <Route path="/" element={<Appointments />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/createuser" element={<CreateUser />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminPage;
