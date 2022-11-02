import React, { Component } from "react";
import AdminHeader from "../../headers/AdminHeader";
import { useEffect, useState } from "react";
import Admin from "./users/Admin";
import Doctor from "./users/Doctor";
import Patient from "./users/Patient";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RegisterUserPage() {
  const [user, setUser] = useState("Select User");

  const [patientContentVisible, setPatientContentVisible] = useState(false);
  const [adminContentVisible, setAdminContentVisible] = useState(false);
  const [doctorContentVisible, setDoctorContentVisible] = useState(false);

  useEffect(() => {
    user === "patient"
      ? setPatientContentVisible(true)
      : setPatientContentVisible(false);
    user === "admin"
      ? setAdminContentVisible(true)
      : setAdminContentVisible(false);
    user === "doctor"
      ? setDoctorContentVisible(true)
      : setDoctorContentVisible(false);
  }, [user]);

  const handleOnChange = (e) => {
    setUser(e.target.value);
  };
  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <AdminHeader />
      <div className="sm:py-10 lg:py-16 flex flex-col items-center h-screen">
        <div className="mt-4 mb-4">
          <select
            class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={user}
            onChange={handleOnChange}
          >
            <option value="selectUser">Select user</option>
            <option value="admin">Admin</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>
        {adminContentVisible && <Admin />}
        {patientContentVisible && <Patient />}
        {doctorContentVisible && <Doctor />}
      </div>
    </>
  );
}
