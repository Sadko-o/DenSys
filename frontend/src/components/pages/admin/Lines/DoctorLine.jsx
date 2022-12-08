import React from "react";

const DoctorLine = (props) => {
  const data = props.data;
  const handleDelete = props.handleDelete;

  return (
    <tr className="border-b border-gray-200">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{`${data.name} ${
              data.middlename ? data.middlename : ""
            } ${data.surname}`}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{data.dateOfBirth}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{data.iin}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{data.id}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{data.specId}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{data.address}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{data.email}</div>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold mx-1 px-4 py-1 rounded-full">
          Edit
        </button>
        <button
          onClick={() => {
            handleDelete(data.email);
          }}
          className="bg-red-500 hover:bg-red-700 text-white font-bold mx-1 px-4 py-1 rounded-full"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorLine;
