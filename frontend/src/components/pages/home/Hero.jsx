import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../../assets/heroImg.svg"
import Doc from "../../../assets/doc.jpg";
import { useState, useEffect } from "react";
import { weekDays, indexToTimeSlot } from "../../../timeDictionaries";
const Hero = () => {
  // const navigate = useNavigate();
  // const navigateToSignInPage = () => {
  //   navigate("/signin");
  // };
  const [makeAppointment, setMakeAppointment] = useState(false);
  const [pickDate, setPickDate] = useState(false);

  const [currentWeekDay, setCurrentWeekDay] = useState(0);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  ">
              <span className="text-[#2273FF] font-bold">We care</span>
              <br className="hidden lg:inline-block" />
              <span className="text-[#1B1212]">about your health</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis deleniti placeat voluptatibus aperiam harum deserunt
              quis distinctio reprehenderit quibusdam ad vitae cumque omnis
              tempora explicabo dignissimos inventore, assumenda soluta
              cupiditate.
            </p>
            <div className="flex justify-center ">
              <button
                onClick={() => setMakeAppointment(true)}
                class="inline-block px-4 py-2 text-[#1B1212] font-semibold border-2 border-[#2273FF] rounded-md hover:bg-[#2273FF] hover:text-white focus:outline-none"
              >
                Make an appointment
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Img}
            />
          </div>
        </div>
      </section>
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
            {/* ID */}
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
                // onChange={(e) => setDiseaseTypeId(e.target.value)}
              />
            </div>
            {/* DiseaseType Name */}
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
                // onChange={(e) => setDiseaseTypeDescription(e.target.value)}
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
                // onChange={(e) => setDiseaseTypeDescription(e.target.value)}
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
                // onChange={(e) => setDiseaseTypeDescription(e.target.value)}
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
          x-transition
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
                        setCurrentWeekDay(index);
                      }}
                      className="hover:border-b-4 border-indigo-300 hover:text-indigo-500 hover:cursor-pointer focus:text-indigo-500 focus:border-b-4"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
            <table class="w-full my-2 shadow-lg bg-white">
              <tr>
                <td class="border px-8 py-4">
                  <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    8:00
                  </button>
                </td>
                <td class="border px-8 py-4">
                  <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    8:30
                  </button>
                </td>
                <td class="border px-8 py-4">
                  <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    9:00
                  </button>
                </td>
                <td class="border px-8 py-4">
                  <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    9:30
                  </button>
                </td>
              </tr>
              <tr>
                <td class="border px-8 py-4">
                  <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    10:00
                  </button>
                </td>
                <td class="border px-8 py-4">
                  <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    10:30
                  </button>
                </td>
                <td class="border px-8 py-4">
                  <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    11:00
                  </button>
                </td>
                <td class="border px-8 py-4">
                  <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    11:30
                  </button>
                </td>
              </tr>
              <tr>
                <td class="border px-8 py-4">
                  <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    12:00
                  </button>
                </td>
                <td class="border px-8 py-4">
                  <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    12:30
                  </button>
                </td>
                <td class="border px-8 py-4">
                  <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    13:00
                  </button>
                </td>
                <td class="border px-8 py-4">
                  <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    13:30
                  </button>
                </td>
              </tr>
            </table>
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
                  onClick={() => setPickDate(false)}
                  className="bg-gray-100 text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-green-600 hover:bg-green-600 hover:text-white"
                >
                  Make
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Hero;
