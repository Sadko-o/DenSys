import React from "react";
import Cardiology from "../../../assets/specialties/cardiology.svg";
import Medicine from "../../../assets/specialties/medicine.svg";
import Surgery from "../../../assets/specialties/surgery.svg";
import Gynecology from "../../../assets/specialties/gynecology.svg";
import Pediatrics from "../../../assets/specialties/pediatrics.svg";
import Radiology from "../../../assets/specialties/radiology.svg";
import Dental from "../../../assets/specialties/dental.svg";
import Eye from "../../../assets/specialties/eye.svg";
import ENT from "../../../assets/specialties/ENT.svg";
import Orthopedics from "../../../assets/specialties/orthopedics.svg";
import Neurology from "../../../assets/specialties/neurology.svg";
import Psychiatry from "../../../assets/specialties/psychiatry.svg";
import Skin from "../../../assets/specialties/skin.svg";
import Obstetrics from "../../../assets/specialties/obstetrics.svg";
const Services = () => {
  return (
    <>
      <div class="py-16 overflow-hidden" id="services">
        <div class=" m-auto  md:px-12 lg:px-20">
          <div>
            <h2 class="mt-4 m-y-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
              Specialties
            </h2>
          </div>
          <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:-mx-8">
            <div class="group cursor-pointer">
              <div class="bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={Cardiology}
                  class="w-16 m-auto bg-white"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 class="text-2xl text-gray-800 bg-white font-medium transition group-hover:text-blue-600">
                  Cardiology
                </h4>
              </div>

            </div>
            <div class="group cursor-pointer">
              <div class="bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={Medicine}
                  class="w-16 m-auto bg-white"
                  width="512"
                  height="512"
                  alt="package-delivery illustration"
                />
                <h4 class="text-2xl text-gray-800 font-medium transition bg-white group-hover:text-blue-600">
                  Medicine
                </h4>
              </div>
            </div>
            <div class="group cursor-pointer ">
              <div class="bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={Surgery}
                  class="w-16 m-auto bg-white"
                  width="512"
                  height="512"
                  alt="package-delivery illustration"
                />
                <h4 class="text-2xl bg-white text-gray-800 font-medium transition group-hover:text-blue-600">
                  Surgery
                </h4>
              </div>
            </div>
            <div class="group cursor-pointer lg:hidden">
              <div class=" bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={Gynecology}
                  class="w-20 -mt-2 mx-auto bg-white"
                  width="512"
                  height="512"
                  alt="package-delivery illustration"
                />
                <h4 class="text-2xl bg-white text-gray-800 font-medium transition group-hover:text-blue-600">
                  Gynecology
                </h4>
              </div>
            </div>
            <div class="group cursor-pointer">
              <div class="bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={Pediatrics}
                  class="w-16 m-auto bg-white"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 class="text-2xl text-gray-800 bg-white font-medium transition group-hover:text-blue-600">
                  Pediatrics
                </h4>
              </div>
            </div>
            <div class="group cursor-pointer">
              <div class=" bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={Radiology}
                  class="w-16 m-auto bg-white"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 class="text-2xl text-gray-800 bg-white font-medium transition group-hover:text-blue-600">
                  Radiology
                </h4>
              </div>
            </div>
            <div class="group cursor-pointer">
              <div class=" bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={Dental}
                  class="w-16 m-auto bg-white"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 class="text-2xl text-gray-800 bg-white font-medium transition group-hover:text-blue-600">
                  Dental
                </h4>
              </div>
            </div>

            <div class="group cursor-pointer">
              <div class=" bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={Eye}
                  class="w-16 m-auto bg-white"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 class="text-2xl text-gray-800 bg-white font-medium transition group-hover:text-blue-600">
                  Eye
                </h4>
              </div>
            </div>
            <div class="group cursor-pointer">
              <div class=" bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={ENT}
                  class="w-16 m-auto bg-white"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 class="text-2xl text-gray-800 bg-white font-medium transition group-hover:text-blue-600">
                  ENT
                </h4>
              </div>
            </div>
            <div class="group cursor-pointer">
              <div class=" bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={Orthopedics}
                  class="w-16 m-auto bg-white"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 class="text-2xl text-gray-800 bg-white font-medium transition group-hover:text-blue-600">
                  Orthopedics
                </h4>
              </div>
            </div>
            <div class="group cursor-pointer">
              <div class=" bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={Neurology}
                  class="w-16 m-auto bg-white"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 class="text-2xl text-gray-800 bg-white font-medium transition group-hover:text-blue-600">
                  Neurology
                </h4>
              </div>
            </div>
            <div class="group cursor-pointer">
              <div class=" bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={Psychiatry}
                  class="w-16 m-auto bg-white"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 class="text-2xl text-gray-800 bg-white font-medium transition group-hover:text-blue-600">
                  Psychiatry
                </h4>
              </div>
            </div>
            <div class="group cursor-pointer">
              <div class=" bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={Skin}
                  class="w-16 m-auto bg-white"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 class="text-2xl text-gray-800 bg-white font-medium transition group-hover:text-blue-600">
                  Skin
                </h4>
              </div>
            </div>
            <div class="group cursor-pointer">
              <div class=" bg-white rounded-md text-center space-y-4 p-6 md:p-8 shadow-md transition duration-200 group-hover:scale-105 lg:group-hover:scale-110">
                <img
                  src={Obstetrics}
                  class="w-16 m-auto bg-white"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
                <h4 class="text-2xl text-gray-800 bg-white font-medium transition group-hover:text-blue-600">
                  Obstetrics
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
