import React from "react";
import CartList from "./CartList";

function CartPage() {
  return (
    <>
      <div className="w-full h-full p-10 py-12 gray-200">
        <div className="w-full h-full px-20 py-20 pt-20 bg-white ">
          <CartList />
        </div>
      </div>
    </>
  );
}

export default CartPage;
