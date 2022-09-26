import { Delete } from "@material-ui/icons";
import React from "react";

function CartRow({ cart }) {
  console.log("cart is this", cart);
  return (
    <>
      <div className="flex justify-between w-full h-20 border border-b-gray-500 border-x-gray-500">
        <div className="flex items-center px-10 space-x-10">
          <Delete className="text-gray-300 cursor-pointer hover:text-primary-500" />
          <img
            className="w-16 rounded-md mix-blend-multiply"
            src={cart.thumbnail}
          />
          <p className="text-primary-500">{cart.title}</p>
        </div>
        <div className="flex items-center mr-20 space-x-24">
          <p>${cart.price}</p>
          <p>1</p>
          <p>{}</p>
        </div>
      </div>
    </>
  );
}

export default CartRow;
