import React from "react";
import { weekDays, indexToTimeSlot } from "../../../../timeDictionaries";

export default function AppointmentLine(props) {
  const appointment = props.appointment;
  const handleApprove = props.handleApprove;
  const filter = props.appointmentStatus;
  const key = props.key;
  return (
    <>
      <tr className="border-b border-gray-200" key={key}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {`${appointment.patientName} ${appointment.patientSurname}`}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">
            {appointment.patientEmail}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">
            {weekDays[appointment.day]}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">
            {indexToTimeSlot(appointment.time)}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">
            {`${appointment.doctorName} ${appointment.doctorSurname}`}
          </div>
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {filter != 1 && (
            <button
              onClick={() => handleApprove(appointment._id, "Confirmed")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold w-5 h-5 mx-1 rounded-full"
            ></button>
          )}
          {filter != 2 && (
            <button
              onClick={() => {
                handleApprove(appointment._id, "Rejected");
              }}
              className="bg-red-500 hover:bg-red-700 text-white font-bold w-5 h-5 mx-1 rounded-full"
            ></button>
          )}
        </td>
      </tr>
    </>
  );
}
