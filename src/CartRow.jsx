import { Delete } from "@material-ui/icons";
import React from "react";

function CartRow() {
  return (
    <>
      <div className="flex justify-between w-full h-20 border border-b-gray-500 border-x-gray-500">
        <div className="flex items-center px-10 space-x-10">
          <Delete className="text-gray-300 cursor-pointer hover:text-primary-500" />
          <img className="w-12 mix-blend-multiply" src="" />
          <p className="text-primary-500">{}</p>
        </div>
        <div className="flex items-center mr-20 space-x-24">
          <p>{}</p>
          <p>1</p>
          <p>$34.00</p>
        </div>
      </div>

      <div className="flex justify-between w-full h-20 border border-b-gray-500 border-x-gray-500">
        <div className="flex items-center px-10 space-x-10">
          <Delete className="text-gray-300 cursor-pointer hover:text-primary-500" />
          <img
            className="w-12 mix-blend-multiply"
            src="https://cdn.discordapp.com/attachments/992343608189526056/1002832090527711283/mug-white-4.jpeg"
          />
          <p className="text-primary-500">Black Printed Coffe Mug</p>
        </div>
        <div className="flex items-center mr-20 space-x-24">
          <p>$15.00</p>
          <p>1</p>
          <p>$34.00</p>
        </div>
      </div>
    </>
  );
}

export default CartRow;
