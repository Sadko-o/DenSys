// IMPORTINGS
import axios from "axios";
import React, { useState, useEffect } from "react";
import HomeHeader from "../../headers/AdminHeader";
import SearchForm from "../home/SearchForm";
import { useLocation } from "react-router-dom";
import backendURL from "../../../backendURL";
import { weekDays, indexToTimeSlot } from "../../../timeDictionaries";

import TimeSlot from "./TimeSlot";
// COMPONENT
const SearchPage = () => {
  const location = useLocation();
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState();
  // pop Up windows for appointments
  const [makeAppointment, setMakeAppointment] = useState(false);
  const [pickDate, setPickDate] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientSurname, setPatientSurname] = useState("");

  const [doctorA, setDoctorA] = useState({});

  // variables for time slots
  const [timeSlot, setTimeSlot] = useState(0);
  const [currentWeekDay, setCurrentWeekDay] = useState(0);

  const [doctor, setDoctor] = useState({
    doctorID: -1,
    doctorEmail: "",
    doctorName: "",
    doctorSurname: "",
  });

  const getDoctors = async () => {
    const response = await axios.get("http://localhost:8080/doctor");
    setRows(response.data.doctors);
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const createAppointment = (doctor) => {
    const appointmentURL = backendURL + "/appointment";
    const timeS = indexToTimeSlot(timeSlot);
    axios({
      method: "post",
      url: appointmentURL,
      data: {
        day: currentWeekDay,
        time: timeS,
        doctorEmail: doctor.doctorEmail,
        patientEmail: patientEmail,
        approveStatus: "Pending",
        doctorName: doctor.doctorName,
        doctorSurname: doctor.doctorSurname,
        patientName: patientName,
        patientSurname: patientSurname,
        patientContact: patientPhone,
      },
    })
      .then((response) => {
        console.log(response);
        setPatientEmail("");
        setPatientName("");
        setPatientPhone("");
        setPatientSurname("");
        setMakeAppointment(false);
        setPickDate(false);
        setTimeSlot(0);
        setSuccessModal(true);
      })
      .catch((error) => {
        console.log(error);
        setFailModal(true);
      });
  };

  function handleMakeAppointment(row) {
    setMakeAppointment(true);
    setDoctor((prevstate) => ({
      doctorID: row.id,
      doctorEmail: row.email,
      doctorName: row.name,
      doctorSurname: row.surname,
    }));
    setDoctorA(row);
  }

  const handleCreate = async () => {
    createAppointment(doctor);
  };

  const [timeSlots, setTimeSlots] = useState([]);

  // useEffect(() => {
  //   checkTimeSlots(currentWeekDay);
  // }, [currentWeekDay]);

  const checkTimeSlots = (index) => {
    for (let i = 0; i < 10; i++) {
      if (doctorA.appointments[index][i] == 0) {
        timeSlots.push(<TimeSlot index={i} />);
      }
    }
    console.log(timeSlots);
    console.log(doctorA.appointments[index]);
  };

  return (
    <>
      <HomeHeader />
      <div>
        <div className="min-w-screen pt-10 shadow-2xl flex items-center justify-center bg-[#f3f3f3] font-sans overflow-hidden">
          <div className="w-full lg:w-5/6 my-11">
            <div className="m-6">
              <h2 className=" text-center py-2 px-2 text-[#4885ed] pb-2 text-xl font-bold sm:text-2xl">
                You can seach and make appointment with choosen one
              </h2>
              <form>
                <div className="flex px-20">
                  <div className="relative ">
                    <select className="bg-[#2273FF] flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white  border  rounded-l-lg  focus:ring-4  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
                      <option>All categories </option>
                      <option>Procedure | Specialization</option>
                      <option>Doctor Name</option>
                    </select>
                  </div>
                  <div className="relative w-5/6 items-center">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 "
                      placeholder={location.state.name}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-white rounded-r-lg border   focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5  bg-transparent"
                        fill="none"
                        stroke="#2273FF"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="w-full lg:w-5/6">
              <div className=" flex items-center justify-center bg-[#f3f3f3] font-sans overflow-hidden">
                <table className="min-w-max bg-white  w-full table-center ">
                  <thead>
                    <tr className="bg-white  mx-4 text-black uppercase text-sm leading-normal">
                      <th className="py-3 px-10 bg-[#ca2125] text-left rounded-tl-lg text-white">
                        Email
                      </th>
                      <th className="py-3 px-3 bg-[#ca2125] text-left  text-white">
                        Name
                      </th>
                      <th className="py-3 px-3 bg-[#ca2125] text-left  text-white">
                        Surname
                      </th>
                      <th className="py-3 px-3 bg-[#ca2125] text-left  text-white">
                        Specalization
                      </th>
                      <th className="py-3 px-3 bg-[#ca2125] text-center rounded-tr-lg text-white">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 bg-white  hover:text-gray-900 text-sm font-light">
                    {rows ? (
                      rows.map((row, i) => (
                        <tr className="border-b border-gray-300  bg-white hover:bg-gray-900">
                          <td className="py-3 px-10 text-left bg-white  whitespace-nowrap">
                            <div className="flex bg-white  items-center">
                              <span className="bg-white  font-medium">
                                {row.email}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-10 text-left bg-white  whitespace-nowrap">
                            <div className="flex bg-white  items-center">
                              <span className="bg-white  font-medium">
                                {row["name"]}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-10 text-left bg-white  whitespace-nowrap">
                            <div className="flex bg-white  items-center">
                              <span className="bg-white  font-medium">
                                {row["surname"]}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-10 text-left bg-white  whitespace-nowrap">
                            <div className="flex bg-white  items-center">
                              <span className="bg-white  font-medium">
                                {row["procedure"]}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-3 bg-white  text-center">
                            {/* TODO svg icon or smth make apppointment */}
                            <button
                              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
                              onClick={handleMakeAppointment.bind(this, row)}
                            >
                              Make Appointment
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr className="min-w-max w-full uppercase text-sm table-auto">
                        <td className="text-black-600 uppercase text-sm leading-normal">
                          {" "}
                          Loading...
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
      {makeAppointment ? (
        <div
          x-show="modalOpen"
          x-transition
          className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-[#e5e7eb] bg-opacity-90 px-4 py-5"
        >
          <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
            <h3 className=" bg-inherit text-dark pb-2 text-xl font-bold sm:text-2xl">
              Make an appointment
            </h3>
            <div className=" bg-inherit relative ">
              <label
                for="name"
                value="id"
                className="text-gray-700  top-0 left-0 flex bg-inherit"
              >
                Name
                <span className="text-red-500 required-dot bg-inherit">*</span>
              </label>
              <input
                type="text"
                className="my-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Name"
                onChange={(e) => setPatientName(e.target.value)}
              />
            </div>
            <div className=" bg-inherit relative ">
              <label
                for="surname"
                value="desctiption"
                className="bg-inherit text-gray-700 left-0 top-0 flex"
              >
                Surname
                <span className="text-red-500 bg-inherit required-dot">*</span>
              </label>
              <input
                type="text"
                className="my-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Surname"
                onChange={(e) => setPatientSurname(e.target.value)}
              />
            </div>
            <div className="bg-inherit relative ">
              <label
                for="contact"
                value="desctiption"
                className="text-gray-700 bg-inherit left-0 top-0 flex"
              >
                Contacts
                <span className="text-red-500 bg-inherit required-dot">*</span>
              </label>
              <input
                type="text"
                className="my-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="+7-XXX-XXX-XX-XX"
                onChange={(e) => setPatientPhone(e.target.value)}
              />
            </div>
            <div className=" bg-inherit relative ">
              <label
                for="email"
                value="desctiption"
                className="text-gray-700 bg-inherit left-0 top-0 flex"
              >
                Email
                <span className="text-red-500 bg-inherit required-dot">*</span>
              </label>
              <input
                type="email"
                className="my-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="patient@example.com"
                onChange={(e) => setPatientEmail(e.target.value)}
              />
            </div>

            <div className="bg-inherit mx-3 flex flex-wrap my-2">
              <div className="bg-inherit w-1/2 px-3">
                <button
                  onClick={() => setMakeAppointment(false)}
                  className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white bg-gray-100"
                >
                  Cancel
                </button>
              </div>
              <div className="bg-inherit w-1/2 px-3">
                <button
                  onClick={() => (setPickDate(true), setMakeAppointment(false))}
                  className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-blue-600 hover:bg-blue-600 hover:text-white bg-gray-100"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {pickDate ? (
        <div
          x-show="modalOpen"
          className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-[#e5e7eb] bg-opacity-90 px-4 py-5"
        >
          <div className="w-full max-w-[765px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
            <h3 className="bg-inherit text-dark pb-2 text-xl font-bold sm:text-2xl">
              Pick a date
            </h3>
            <div className="bg-inherit relative ">
              <div className="bg-inherit flex space-x-6 border-b mx-6 first:text-indigo-500 ">
                {weekDays.map((item, index) =>
                  index === currentWeekDay ? (
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
                        setTimeSlots([]);
                        setCurrentWeekDay(index);
                        checkTimeSlots(index);
                      }}
                      className="hover:border-b-4 border-indigo-300 hover:text-indigo-500 hover:cursor-pointer focus:text-indigo-500 focus:border-b-4"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
            <div className="bg-white my-4 grid grid-cols-4 gap-4">
              {timeSlots ? (
                timeSlots.map((item, i) => (
                  <button
                    onClick={() => {
                      console.log(i);
                      setTimeSlot(i);
                    }}
                    className="bg-white text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:bg-indigo-600 bg-gray-100"
                  >
                    {item}
                  </button>
                ))
              ) : (
                <div className="bg-white text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:bg-indigo-600 bg-gray-100">
                  {" "}
                  Supposed to work
                </div>
              )}
            </div>

            <div className="bg-white mx-3 flex flex-wrap my-4">
              <div className="bg-white w-1/2 px-3">
                <button
                  onClick={() => (setPickDate(false), setMakeAppointment(true))}
                  className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-blue-600 hover:bg-blue-600 hover:text-white bg-gray-100"
                >
                  Back
                </button>
              </div>
              <div className="bg-white w-1/2 px-3">
                <button
                  onClick={() => (setPickDate(false), handleCreate())}
                  className="bg-gray-100 text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-green-600 hover:bg-green-600 hover:text-white"
                >
                  Make
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {successModal ? (
        <div
          x-show="modalOpen"
          x-transition
          className="fixed top-0 left-0  backdrop-blur-sm  flex h-full min-h-screen w-full items-center justify-center bg-[#e5e7eb] bg-opacity-90 px-4 py-5"
        >
          <div className="bg-white w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
            <p className="bg-white text-gray-800 text-xl font-bold mt-4">
              Appointment made successfully!
            </p>
            <div className=" bg-white items-center  justify-center flex  my-4">
              <div className="bg-white w-1/2 px-3 items-center">
                <button
                  onClick={() => setSuccessModal(false)}
                  className="text-dark block w-full shadow-2xl rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {failModal ? (
        <div
          x-show="modalOpen"
          x-transition
          className="fixed top-0 left-0  backdrop-blur-sm  flex h-full min-h-screen w-full items-center justify-center bg-[#e5e7eb] bg-opacity-90 px-4 py-5"
        >
          <div className="bg-white w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
            <p className="bg-white text-gray-800 text-xl font-bold mt-4">
              Appointment made unsuccessfully. Try again.
            </p>
            <div className=" bg-white items-center  justify-center flex  my-4">
              <div className="bg-white w-1/2 px-3 items-center">
                <button
                  onClick={() => setFailModal(false)}
                  className="text-dark block w-full shadow-2xl rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchPage;
