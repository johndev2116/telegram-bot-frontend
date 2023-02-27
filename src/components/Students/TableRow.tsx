import React from "react";
import { Student } from "../../types";

interface Props {
  student: Student;
}

const TableRow: React.FC<Props> = ({ student }) => {
  const {
    first_name,
    id,
    lang,
    phone_number,
    registered_name,
    school,
    stream,
    tg_id,
    username,
  } = student;
  return (
    <tr className="border-b ">
      <th
        scope="row"
        className="flex items-center px-6 py-4  whitespace-nowrap "
      >
        <div className="pl-3">
          <div className="text-base font-semibold">{registered_name}</div>
          <div className="font-normal ">{username}</div>
        </div>
      </th>
      <td className="px-6 py-4">{phone_number}</td>
      <td className="px-6 py-4">{school}</td>
      <td className="px-6 py-4">{stream}</td>

      <td className="px-6 py-4">
        <button className="border-none outline-none p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
