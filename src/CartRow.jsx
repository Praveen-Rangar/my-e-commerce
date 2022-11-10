import { Delete } from "@material-ui/icons";
import React from "react";

function CartRow({ cart, quantity, onQuantityChange, onRemove }) {
  function handleChange(event) {
    onQuantityChange(cart.id, +event.target.value);
  }

  function handleCrossClick() {
    onRemove(cart.id);
  }

  return (
    <div className="flex flex-row items-center max-w-full px-6 py-4 space-x-10 font-semibold text-gray-500 border border-b-gray-100 border-x-gray-100">
      <Delete
        onClick={handleCrossClick}
        className="text-gray-300 cursor-pointer hover:text-primary-500"
      />
      <div className="w-20 h-16">
        <img
          className="object-cover w-full h-full rounded-md mix-blend-multiply"
          src={cart.thumbnail}
        />
      </div>
      <span className="pl-5 font-bold grow text-primary-500">{cart.title}</span>
      <div className="flex items-center space-x-[87px]">
        <span className="w-12 ">${cart.price}.00</span>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={handleChange}
          className="w-12 p-2 border border-gray-200 rounded text-bold"
        />
        <span className="w-20">{quantity * cart.price}.00</span>{" "}
      </div>
    </div>
  );
}

export default CartRow;
