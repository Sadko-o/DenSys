import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import backendURL from "../../../backendURL";
import AppointmentLine from "./AppointmentLine";
const appointmentsURL = backendURL + "/appointment";

const pageSize = 4;

export default function Appointments() {
  const appointmentStatus = ["Pending", "Confirmed", "Rejected"];
  const [currentAppointmentStatus, setCurrentAppointmentStatus] = useState(0);
  const [appointments, setAppointments] = useState(null);
  const [maxPage, setMaxPage] = useState(0);
  const [appointmentsSize, setAppointmentsSize] = useState(0);
  const getAllAppointments = async () => {
    const params = { doctorEmail: "", patientEmail: "" };
    const response = await axios.get(appointmentsURL, {
      params: params,
    });
    setAppointments(response.data.appointments);
    const size = response.data.appointments.filter(
      (appointment) =>
        appointment.approveStatus ===
        appointmentStatus[currentAppointmentStatus]
    ).length;
    setAppointmentsSize(size);
    setMaxPage(Math.ceil(size / pageSize) - 1);
  };
  useEffect(() => {
    getAllAppointments();
  }, []);

  const [page, setPage] = useState(0);
  const handleNextPage = () => {
    setPage(Math.min(page + 1, maxPage));
  };
  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 0));
  };

  const currentPageAppointments = appointments
    ? appointments
        .filter(
          (appointment) =>
            appointment.approveStatus ===
            appointmentStatus[currentAppointmentStatus]
        )
        .slice(page * pageSize, (page + 1) * pageSize)
    : null;

  const handleStatusFilterChange = (index) => {
    setCurrentAppointmentStatus(index);
    setPage(0);
    getAllAppointments();
  };
  const handleApprove = async (appointmentId, status) => {
    const currentAppointment = appointments.find(
      (appointment) => appointment._id === appointmentId
    );
    currentAppointment.approveStatus = status;
    await axios.put(appointmentsURL, currentAppointment);
    getAllAppointments();
  };

  return (
    <div className="flex flex-col mx-4 my-4 w-2/3 h-1/2 bg-white rounded-lg shadow-lg">
      <div className="flex flex-row justify-between w-full h-1/6 my-2 bg-gray-200 rounded-t-lg">
        <div className="flex flex-row justify-center items-center w-full h-full">
          <h1 className="text-xl font-semibold my-2">Appointment Requests</h1>
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
                handleStatusFilterChange(index);
              }}
              className="hover:border-b-4 border-indigo-300 hover:text-indigo-500 hover:cursor-pointer focus:text-indigo-500 focus:border-b-4"
            >
              {item}
            </button>
          )
        )}
      </div>

      <div className="appointmentsList">
        <div className="flex flex-col overflow-x-auto">
          <div className="py-2 inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b bg-gray-800">
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
                  {currentPageAppointments ? (
                    currentPageAppointments.map((appointment) => (
                      <AppointmentLine
                        appointment={appointment}
                        handleApprove={handleApprove}
                        appointmentStatus={currentAppointmentStatus}
                      />
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

        <div class="flex flex-col items-center">
          <span class="text-sm text-gray-700">
            Showing{" "}
            <span class="font-semibold text-gray-900 ">
              {page * pageSize + 1}
            </span>{" "}
            to{" "}
            <span class="font-semibold text-gray-900 ">
              {Math.min((page + 1) * pageSize, appointmentsSize)}
            </span>{" "}
            of{" "}
            <span class="font-semibold text-gray-900 ">{appointmentsSize}</span>{" "}
            Entries
          </span>
          <div class="inline-flex mt-2 xs:mt-0">
            <button
              onClick={handlePrevPage}
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 "
            >
              Prev
            </button>
            <button
              onClick={handleNextPage}
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
