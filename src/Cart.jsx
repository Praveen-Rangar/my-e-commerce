import React from "react";
import CartPage from "./CartPage";
import { withCart } from "./WithProvider";

function Cart() {
  return (
    <div>
      <CartPage/>
    </div>
  );
}

export default withCart(Cart);
