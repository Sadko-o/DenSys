import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import backendURL from "../../../backendURL";
import PatientTableHead from "./TableHeads/PatientTableHead";
import PatientLine from "./Lines/PatientLine";
import DoctorTableHead from "./TableHeads/DoctorTableHead";
import DoctorLine from "./Lines/DoctorLine";

const pageSize = 6;

export default function Appointments() {
  const roles = ["Patients", "Doctors"];
  const [currentRole, setCurrentRole] = useState(0);
  const [doctorList, setDoctorList] = useState(null);
  const [patientList, setPatientList] = useState(null);

  const setAllUsers = async () => {
    const response = await axios.get(backendURL + "/doctor");
    setDoctorList(response.data.doctors);
    const response2 = await axios.get(backendURL + "/patient");
    setPatientList(response2.data.patients);
    console.log(response.data.doctors);
    console.log(response2.data.patients);
  };
  useEffect(() => {
    setAllUsers();
  }, []);

  const handleFilterChange = (index) => {
    setAllUsers();
    setCurrentRole(index);
  };

  const Loading = (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">Loading...</div>
          </div>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="flex flex-col w-full h-full bg-white rounded-lg shadow-lg">
      <div className="flex flex-row justify-between w-full h-1/6 my-2 bg-gray-200 rounded-t-lg">
        <div className="flex flex-row justify-center items-center w-full h-full">
          <h1 className="text-xl font-semibold my-2">Users List</h1>
        </div>
      </div>
      <div className="flex space-x-6 border-b mx-6 justify-center first:text-indigo-500 ">
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
                handleFilterChange(index);
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
                {currentRole === 0 ? (
                  <>
                    <PatientTableHead />
                    <tbody>
                      {patientList
                        ? patientList.map((patient) => (
                            <PatientLine data={patient} />
                          ))
                        : Loading}
                    </tbody>
                  </>
                ) : (
                  <>
                    <DoctorTableHead />
                    <tbody>
                      {doctorList
                        ? doctorList.map((doctor) => (
                            <DoctorLine data={doctor} />
                          ))
                        : Loading}
                    </tbody>
                  </>
                )}

                {/* <PatientTableHead />
                <tbody>
                  {currentRole === 0
                    ? patientList
                      ? patientList.map((patient) => (
                          <PatientLine data={patient} />
                        ))
                      : Loading
                    : doctorList
                    ? doctorList.map((doctor) => <DoctorLine data={doctor} />)
                    : Loading}
                </tbody> */}
              </table>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div class="inline-flex mt-2 xs:mt-0">
            <button
              //   onClick={handlePrevPage}
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 "
            >
              Prev
            </button>
            <button
              //   onClick={handleNextPage}
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
