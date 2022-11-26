// import { Switch } from "@headlessui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/pages/common/SignIn";
import Home from "./components/pages/home/Home";
import AdminPage from "./components/pages/admin/AdminPage";
import DoctorPage from "./components/pages/doctor/DoctorPage";
import PatientPage from "./components/pages/patient/PatientPage";
import RegisterUserPage from "./components/pages/admin/RegisterUserPage";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/adminpage" element={<AdminPage />} />
      <Route path="/doctorpage" element={<DoctorPage />} />
      <Route path="/patientpage" element={<PatientPage />} />
      <Route path="/registeruser" element={<RegisterUserPage />} />
    </Routes>
  );
};

export default App;
