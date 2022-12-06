import React from "react";
import AdminNavbar from "../../navBar/AdminNavbar";
import Appointments from "./Appointments";

const AdminPage = () => {
  return (
    <div className="flex flex-row">
      <AdminNavbar />
      <main className="main w-full h-screen bg-gray-200">
        <Appointments />
      </main>
    </div>
  );
};

export default AdminPage;
