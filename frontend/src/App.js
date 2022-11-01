import { Switch } from "@headlessui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/pages/common/SignIn";
import Home from "./components/pages/home/Home";
import AdminPage from "./components/pages/admin/AdminPage";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/adminpage" element={<AdminPage />} />
    </Routes>
  );
};

export default App;
