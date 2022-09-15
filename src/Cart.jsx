import { CancelOutlined } from "@material-ui/icons";
import React from "react";

function Cart() {
  return (
    <>
      <div className="w-full h-full p-10 py-20 gray-200">
        <div className="w-full h-full px-20 py-20 pt-20 bg-white ">
          <div className="w-full h-full ">
            <div className="flex items-center justify-between w-full h-16 border border-gray-200">
              <div className="px-56 ">Product</div>
              <div className="flex px-16 space-x-16">
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
            </div>

            <div className="flex justify-between w-full h-20 border border-b-gray-500 border-x-gray-500">
              <div className="flex items-center px-10 space-x-10">
                <CancelOutlined className=" text-primary-500" />
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

            <div className="flex justify-between w-full h-20 border border-b-gray-500 border-x-gray-500">
              <div className="flex items-center px-10 space-x-10">
                <CancelOutlined className="text-primary-500" />
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
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default Cart;
