import React, { useEffect, useState } from "react";
import CartRow from "./CartRow";

function CartList({ data, cart, updateCart }) {
  const [localCart, setLocalCart] = useState(cart);

  useEffect(
    function () {
      setLocalCart(cart);
    },
    [cart]
  );

  function handleQuantityChange(productid, newValue) {
    const newLocalcart = { ...localCart, [productid]: newValue };
    setLocalCart(newLocalcart);
  }

  function handleUpdateCartClick() {
    updateCart(localCart);
  }

  function handleRemove(productid) {
    const newCart = { ...cart };
    delete newCart[productid];
    updateCart(newCart);
  }

  return (
    <div>
      <div className="w-full h-full ">
        <div className="flex items-center justify-between w-full h-16 font-semibold text-gray-500 bg-gray-100 border border-gray-200">
          <div className="w-20 px-56">Product</div>
          <div className="flex px-16 space-x-16">
            <p>Price</p>
            <p className="">Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>

        {data.map(function (item) {
          return (
            <CartRow
              key={data.id}
              cart={item}
              quantity={localCart[item.id]}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          );
        })}

        <div className="flex items-center justify-between w-full h-20 border border-b-gray-500 border-x-gray-500">
          <div className="flex px-4 space-x-5">
            <input
              className="w-40 h-8 px-2 border border-gray-500"
              placeholder="Counpon code"
              type="text"
            />
            <button className="h-8 text-white rounded w-44 bg-primary-500 hover:bg-primary-700">
              APPLY COUPON
            </button>
          </div>
          <div className="flex px-4 ">
            <button
              onClick={handleUpdateCartClick}
              className="h-8 text-white rounded w-44 bg-primary-500 hover:bg-primary-700"
            >
              UPDATE CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
