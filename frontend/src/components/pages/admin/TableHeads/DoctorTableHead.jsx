import React from "react";

const PatientTableHead = () => {
  return (
    <thead className="border-b bg-gray-800">
      <tr>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          Full Name
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          Date of Birth
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          IIN
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          ID Number
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          SpecID
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          Address
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          Email
        </th>
        <th
          scope="col"
          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
        >
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default PatientTableHead;
