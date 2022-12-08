import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import backendURL from "../../../backendURL";
const DoctorPage = () => {
  const location = useLocation();

  const [doctor, setDoctorData] = useState(null);
  const [appointments, setAppointments] = useState();
  const setDoctor = async () => {
    const response = await axios.get(backendURL + "/doctor");

    setDoctorData(
      response.data.doctors.find(
        (doctor) => doctor.email === location.state.email
      )
    );

    const appointmentResponse = await axios.get(backendURL + "/appointment");
    setAppointments(
      appointmentResponse.data.appointments.filter(
        (appointment) => appointment.doctorEmail === location.state.email
      )
    );
  };

  useEffect(() => {
    setDoctor();
  }, []);

  console.log(location.state.email);
  console.log(appointments);
  const welcomeMessage = doctor && `${doctor.name} ${doctor.surname}`;

  return (
    <>
      <div>
        <h1>Welcome {welcomeMessage}</h1>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden"></div>
          </div>
        </div>
      </div>
      <h2>Appointments</h2>

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Patient Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Patient Surname
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Patient Email
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Patient Contact
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Approve Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {appointments &&
                    appointments.map((appointment) => {
                      return (
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div
                              class="flex items
                          -center"
                            >
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {appointment && appointment.patientName}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                              {appointment && appointment.patientSurname}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                              {appointment && appointment.patientEmail}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                              {appointment && appointment.patientContact}
                            </div>
                          </td>

                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                              {appointment && appointment.approveStatus}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              ;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorPage;
