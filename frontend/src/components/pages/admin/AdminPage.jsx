import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../navBar/AdminNavbar";
import axios from "axios";
import backendURL from "../../../backendURL";
import { weekDays, indexToTimeSlot } from "../../../timeDictionaries";

const appointmentsURL = backendURL + "/appointment";

const AdminPage = () => {
  const navigate = useNavigate();
  const navigateToRegisterPage = () => {
    navigate("/registeruser");
  };
  const appointmentStatus = ["Pending", "Confirmed", "Cancelled"];
  const [currentAppointmentStatus, setCurrentAppointmentStatus] = useState(0);
  const [appointments, setAppointments] = useState(null);
  const getAllAppointments = async () => {
    const response = await axios.get(appointmentsURL);
    setAppointments(response.data.appointments);
  };
  useEffect(() => {
    getAllAppointments();
  }, []);

  return (
    <div className="flex flex-row">
      <AdminNavbar />
      <main className="main w-full h-screen bg-gray-200">
        <div className="flex flex-col mx-4 my-4 w-2/3 h-1/2 bg-white rounded-lg shadow-lg">
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

          <div className="appointmentsList">
            <div className="appointment">
              <div className="flex flex-col">
                <div className="overflow-x-auto">
                  <div className="py-2 inline-block min-w-full lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <thead className="border-b">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Time
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Doctor Name
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Approval
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {appointments ? (
                            appointments.map((appointment, index) => (
                              <tr
                                key={index}
                                className="border-b border-gray-200"
                              >
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">
                                        {`${appointment.patientName} ${appointment.patientSurname}`}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {appointment.patientEmail}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {weekDays[appointment.day]}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {indexToTimeSlot(appointment.time)}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {`${appointment.doctorName} ${appointment.doctorSurname}`}
                                  </div>
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold w-5 h-5 mx-1 rounded-full"></button>
                                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold w-5 h-5 mx-1 rounded-full"></button>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      Loading...
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={navigateToRegisterPage}
          className="mx-1 px-4 py-1 text-sm bg-white text-indigo-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-green-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add User
        </button>
      </main>
    </div>
  );
};

export default AdminPage;
