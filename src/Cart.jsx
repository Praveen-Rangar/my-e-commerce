import { CancelOutlined } from "@material-ui/icons";
import React from "react";

function Cart() {
  return (
    <>
      <div className="w-full h-full p-10 py-12 gray-200">
        <div className="w-full h-full px-20 py-20 pt-20 bg-white ">
          <div className="w-full h-full ">
            <div className="flex items-center justify-between w-full h-16 bg-gray-200 border border-gray-500">
              <div className="px-56 ">Product</div>
              <div className="flex px-16 space-x-16">
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
            </div>

            <div className="flex justify-between w-full h-20 border border-b-gray-500 border-x-gray-500">
              <div className="flex items-center px-10 space-x-10">
                <CancelOutlined className="text-gray-300 cursor-pointer hover:text-primary-500" />
                <img
                  className="w-12 mix-blend-multiply"
                  src="https://cdn.discordapp.com/attachments/992343608189526056/1002832090527711283/mug-white-4.jpeg"
                />
                <p className="text-primary-500">Black Printed Coffe Mug</p>
              </div>rgb(169,169,169)
              <div className="flex items-center mr-20 space-x-24">
                <p>$15.00</p>
                <p>1</p>
                <p>$34.00</p>
              </div>
            </div>

            <div className="flex justify-between w-full h-20 border border-b-gray-500 border-x-gray-500">
              <div className="flex items-center px-10 space-x-10">
                <CancelOutlined className="text-gray-300 cursor-pointer hover:text-primary-500" />
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
                <button className="h-8 text-white rounded w-44 bg-primary-500 hover:bg-primary-700">
                  UPDATE CART
                </button>
              </div>
            </div>

            <div className="flex justify-end mt-20">
              <div className=" w-[50%] border border-gray-500">
                <div className="flex items-center h-12 px-5 bg-gray-200 border border-gray-500">
                  Cart total
                </div>
                <div className="flex items-center h-12 px-10 border border-gray-500 space-x-28">
                  <p>Subtotal</p>
                  <p>$166.00</p>
                </div>
                <div className="flex items-center h-12 px-10 border border-gray-500 space-x-36">
                  <p>total</p>
                  <p>$166.00</p>
                </div>
                <div className="px-5 py-4">
                  <button className="w-full text-white rounded h-[50px] bg-primary-500 hover:bg-primary-700">
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
