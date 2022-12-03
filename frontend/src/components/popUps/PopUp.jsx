import axios from "axios";
import React, { useState, useEffect } from "react";

const PopUp = (props) => {
  const [makeAppointment, setMakeAppointment] = useState(false);

  return (
    <div
      x-transition
      className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center backdrop-blur-sm bg-opacity-90 px-4 py-5"
    >
      <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
        <h2 className="text-dark pb-2 text-xl font-bold sm:text-2xl">Update</h2>
        <h3 className="text-dark pb-2 text-sm  sm:text-xl"></h3>
        <div className="relative">
          <label className="text-gray-700  top-0 left-0 flex">
            Disease Code<span className="text-red-500 required-dot">*</span>
          </label>
          <input
            className="my-4 rounded-lg shadow-lg border-transparent border-[#f3f3f3] flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="diseasetypeid"
            placeholder="Disease Code"
            // onChange={(e) => setEditDiseaseCode(e.target.value)}
          />
        </div>

        <div className="relative">
          <label className="text-gray-700  top-0 left-0 flex">
            Pathogen<span className="text-red-500 required-dot">*</span>
          </label>
          <input
            className="my-4 rounded-lg shadow-lg border-transparent border-[#f3f3f3] flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="diseasetypeid"
            type="text"
            placeholder="Pathogen"
            // onChange={(e) => setEditPathogen(e.target.value)}
          />
        </div>

        <div className=" relative ">
          <label
            for="required-email"
            className="text-gray-700 left-0 top-0 flex"
          >
            Description<span className="text-red-500 required-dot">*</span>
          </label>
          <input
            className="my-4 rounded-lg border-transparent shadow-lg flex-1 appearance-none border border-[#f3f3f3] w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            placeholder="Description"
            // onChange={(e) => setEditDescription(e.target.value)}
          />
        </div>
        <div className=" relative ">
          <label
            for="required-email"
            className="text-gray-700 left-0 top-0 flex"
          >
            Id<span className="text-red-500 required-dot">*</span>
          </label>
          <input
            className="my-4 rounded-lg border-transparent shadow-lg flex-1 appearance-none border border-[#f3f3f3] w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            placeholder="Description"
            // onChange={(e) => setEditId(e.target.value)}
          />
        </div>

        <div className="-mx-3 flex flex-wrap my-2">
          <div className="w-1/2 px-3">
            <button
              onClick={() => setMakeAppointment(false)}
              className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              Cancel
            </button>
          </div>
          <div className="w-1/2 px-3">
            <button
              //   onClick={() => handleEdit()}
              className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-green-600 hover:bg-green-600 hover:text-white"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
