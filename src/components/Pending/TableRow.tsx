import React from "react";
interface Props {
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const TableRow: React.FC<Props> = ({ setImageUrl, setIsOpen }) => {
  return (
    <tr>
      <td className="w-32 p-4">
        <img
          onClick={() => {
            setImageUrl(
              "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            );
            setIsOpen(true);
          }}
          className="rounded-lg cursor-pointer"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="Apple Watch"
        />
      </td>
      <td className="px-6 py-4 font-semibold ">Tele Birr</td>
      <td className="px-6 py-4 font-semibold ">+25187768</td>
      <td className="px-6 py-4 font-semibold ">Kebede</td>
      <td className="px-6 py-4">
        <div className="flex gap-3">
          <a href="#" className="font-medium text-red-600  hover:underline">
            Decline
          </a>
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Aprove
          </a>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
