import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../navBar/AdminNavbar";
const appointmentsURL = "http://localhost:8080/appointments";

const AdminPage = () => {
  const navigate = useNavigate();
  const navigateToRegisterPage = () => {
    navigate("/registeruser");
  };
  const appointmentStatus = ["Pending", "Confirmed", "Cancelled"];
  const [currentAppointmentStatus, setCurrentAppointmentStatus] = useState(0);

  return (
    <div className="flex flex-row">
      <AdminNavbar />
      <main className="main w-full h-screen bg-gray-200">
        <div className="flex flex-col mx-4 my-4 w-1/2 h-1/2 bg-white rounded-lg shadow-lg">
          <div className="flex flex-row justify-between w-full h-1/6 bg-gray-200 rounded-t-lg">
            <div className="flex flex-row justify-center items-center w-full h-full">
              <h1 className="text-xl font-semibold">Appointment Requests</h1>
            </div>
          </div>
          <div className="flex space-x-6 border-b mx-6 first:text-indigo-500 ">
            {appointmentStatus.map((item, index) =>
              index === currentAppointmentStatus ? (
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
                    setCurrentAppointmentStatus(index);
                  }}
                  className="hover:border-b-4 border-indigo-300 hover:text-indigo-500 hover:cursor-pointer focus:text-indigo-500 focus:border-b-4"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
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
