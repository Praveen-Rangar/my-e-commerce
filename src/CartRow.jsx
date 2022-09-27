import { Delete } from "@material-ui/icons";
import React from "react";

function CartRow({ cart, countKaData }) {
  console.log("countKaData is this", countKaData[cart.id]);

  const numData = countKaData[cart.id];
  const subTotal = numData * cart.price;

  return (
    <>
      <div className="flex justify-between w-full h-20 border border-b-gray-500 border-x-gray-500">
        <div className="flex items-center px-10 space-x-[54px]">
          <Delete className="text-gray-300 cursor-pointer hover:text-primary-500" />
          <img
            className="w-16 rounded-md mix-blend-multiply"
            src={cart.thumbnail}
          />
          <p className="text-primary-500">{cart.title}</p>
        </div>
        <div className="flex items-center md:mr-[60px] md:space-x-[90px]">
          <p>${cart.price}</p>
          <input
            type="number"
            value={numData}
            className="h-8 pl-3 pr-2 border border-gray-200 rounded w-14 "
          />
          <p>{subTotal}</p>
        </div>
      </div>
    </>
  );
}

export default CartRow;
