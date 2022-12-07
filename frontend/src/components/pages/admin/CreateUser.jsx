import { React, useState } from "react";
import PatientFields from "./users/PatientFields";
import DoctorFields from "./users/DoctorFields";
import UserForm from "./users/UserForm";
import axios from "axios";
import backendURL from "../../../backendURL";

export default function CreateUser() {
  const userTypes = ["Patient", "Doctor"];
  const [currentUserType, setCurrentUserType] = useState(0);
  const handleStatusFilterChange = (index) => {
    setCurrentUserType(index);
  };

  const handleSubmit = async (e, values) => {
    e.preventDefault();
    console.log(values);
    if (currentUserType === 1) {
      values["doctorEmail"] = values["email"];
    }

    await axios
      .post(
        `${backendURL}${currentUserType === 0 ? "/patient" : "/doctor"}`,
        // "https://densys-production.up.railway.app/patient",
        values
      )
      .then(
        (response) => {
          console.log(response);
          if (response.status === 200) {
            alert("User created successfully");
          }
          if (response.status === 400) {
            alert("User already exists");
          }
          if (response.status === 404) {
            alert("User not found");
          }
        },
        (error) => {
          alert("Error creating user");
          console.log(error);
        }
      );
  };

  const InputForm = (
    <UserForm
      inputForms={currentUserType == 0 ? PatientFields : DoctorFields}
      handleSubmit={handleSubmit}
    />
  );
  return (
    <div className="flex flex-col w-full h-full bg-white rounded-lg shadow-lg">
      <div className="flex flex-row justify-between w-full h-1/6 my-2 bg-gray-200 rounded-t-lg">
        <div className="flex flex-row justify-center items-center w-full h-full">
          <h1 className="text-xl font-semibold my-2">Create User</h1>
        </div>
      </div>
      <div className="flex space-x-6 border-b mx-6 justify-center first:text-indigo-500 ">
        {userTypes.map((item, index) =>
          index === currentUserType ? (
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
      <div className="flex justify-center w-full">{InputForm}</div>
    </div>
  );
}
