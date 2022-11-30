import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import HomeHeader from "../../headers/HomeHeader";
import logo from "../../../assets/logo.svg";
import { useForm } from "react-hook-form";
import validator from "validator";
import { useRef } from "react";

const SignIn = () => {
  /******************************* NAVIGATION *****************************/
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userRole, setUserRole] = useState("default");

  function verifiyUser() {
    //TODO for backend: Check if email and password is valid

    return true;
  }

  function handleSignIn(userRole) {
    if (email == "" || password == "") {
      setErrorMessage("Please fill all fields");
      return;
    }
    if (!verifiyUser()) {
      setErrorMessage("Invalid email or password");
      return;
    }
    if (userRole === "admin") {
      navigate("/adminpage");
    } else if (userRole === "doctor") {
      navigate("/doctorpage");
    } else if (userRole === "patient") {
      navigate("/patientpage");
    }
  }

  const navigateToHome = () => {
    navigate("/");
  };

  const validateEmail = (e) => {
    var email = e.target.value;

    if (!validator.isEmail(email)) {
      setErrorMessage("Please, enter valid Email!");
    } else {
      setErrorMessage("");
      setEmail(email);
    }
  };

  const validatePassword = (e) => {
    var password = e.target.value;

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters!");
    } else {
      setErrorMessage("");
      setPassword(password);
    }
  };

  return (
    <div id="signin">
      <div className="w-full sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div
            className="flex flex-shrink-0 items-center"
            onClick={navigateToHome}
          >
            <img className="block h-8 w-auto lg:hidden" alt="logo" src={logo} />
            <img className="hidden h-8 w-auto lg:block" alt="logo" src={logo} />
          </div>
        </div>
      </div>

      <form class="max-w-lg border rounded-lg mx-auto">
        <div class="flex flex-col gap-4 p-4 md:p-8">
          {userRole === "default" ? (
            <>
              <div>
                <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Please select your role
                </label>
                <div className="flex">
                  <button
                    onClick={() => setUserRole("patient")}
                    class="basis-1/3 mx-1 justify-center items-center bg-white  hover:bg-gray-100 active:bg-gray-200 focus:bg-blue-400 focus:text-white border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3"
                  >
                    Patient
                  </button>
                  <button
                    onClick={() => setUserRole("doctor")}
                    class="basis-1/3 mx-1 justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 focus:bg-blue-400 focus:text-white border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3"
                  >
                    Doctor
                  </button>
                  <button
                    onClick={() => setUserRole("admin")}
                    class="basis-1/3 mx-1 justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 focus:bg-blue-400 focus:text-white border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3"
                  >
                    Admin
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  You are signing in as {userRole}
                </label>
                <br />
                <label
                  for="email"
                  class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Email
                </label>
                <input
                  name="email"
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  onChange={(e) => validateEmail(e)}
                />
              </div>

              <div>
                <label
                  for="password"
                  class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Password
                </label>
                {/* <input
                  name="password"
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                /> */}
                <input
                  class="appearance-none border rounded w-full py-2 px-3 leading-tigh bg-gray-50 focus:outline-none focus:ring ring-indigo-300 focus:bg-white text-gray-800 font-mono"
                  type="password"
                  autocomplete="off"
                  onChange={(e) => validatePassword(e)}
                />
              </div>
              <span class="text-red-500 text-sm">{errorMessage}</span>

              <div
                onClick={() => handleSignIn(userRole)}
                class="block cursor-pointer bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Sign in
              </div>

              <a
                className="text-blue-500 hover:text-blue-700 cursor-pointer underline"
                onClick={() => setUserRole("default")}
              >
                Choose other role{" "}
              </a>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
