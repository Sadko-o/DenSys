import { React, useState } from "react";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import NavBarButton from "./NavBarButton";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  const [activeButton, setActiveButton] = useState(0);

  const navigateToAppointments = () => {
    navigate("/adminpage");
    setActiveButton(0);
  };
  const navigateToAllUsersPage = () => {
    navigate("/adminpage/allusers");
    setActiveButton(1);
  };
  const navigateToRegisterPage = () => {
    navigate("/adminpage/createuser");
    setActiveButton(2);
  };
  const navigateToMakeAppointmentPage = () => {
    navigate("/");
  };
  const logOutHandler = () => {
    navigate("/");
  };

  const buttonTexts = [
    "Appointments",
    "All Users",
    "Create User",
    "Make an Appointment",
    "Log Out",
  ];

  const buttonFunctions = [
    navigateToAppointments,
    navigateToAllUsersPage,
    navigateToRegisterPage,
    navigateToMakeAppointmentPage,
    logOutHandler,
  ];

  const buttonPaths = [
    "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
    "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
    "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
    "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
  ];

  const sideBarButtons = [];
  for (let i = 0; i < buttonTexts.length; i++) {
    sideBarButtons.push(
      <NavBarButton
        key={i}
        text={buttonTexts[i]}
        isActive={i == activeButton}
        path={buttonPaths[i]}
        onClickFunction={buttonFunctions[i]}
      />
    );
  }

  return (
    <aside
      // For some reason, shadow doesn't work when there is a flex in a parent class
      className="w-64 shadow-[2px_0_10px_0_rgba(0,0,0,0.2)] "
      aria-label="Sidebar"
    >
      <div className="h-screen overflow-y-hidden py-6 pl-4 bg-gray-50">
        <div onClick={navigateToHome} className="cursor-pointer">
          <img className="h-8 w-auto " src={logo} />
        </div>
        <ul className="group flex flex-col justify-center h-full ">
          {sideBarButtons}
        </ul>
      </div>
    </aside>
  );
}
