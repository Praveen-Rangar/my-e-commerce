import React from "react";
import CartPage from "./CartPage";

function Cart({ cart, updateCart }) {
  return (
    <div>
      <CartPage cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default Cart;
