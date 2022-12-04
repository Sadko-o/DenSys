import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Img from "../../../assets/heroImg.svg";
import Doc from "../../../assets/doc.jpg";
const Hero = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const navigateToSearchPage = () => {
    navigate("/search", { state: { name: searchInput } });
  };

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
                onClick={() => {
                  navigateToSearchPage();
                }}
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
    </>
  );
};

export default Hero;
