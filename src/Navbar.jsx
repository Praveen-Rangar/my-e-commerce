import React from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";

function Navbar({ productCount }) {
  return (
    <div className="py-2 bg-white border-b border-gray-100 md:py-2">
      <div className="  max-w-7xl max-h-[64px] flex items-center justify-between pr-5 pl-3 mr-3 ml-1">
        <img
          className="w-32 mb-2 md:w-44"
          src="https://cdn.discordapp.com/attachments/1005028953901244477/1021773172258902027/onlinelogomaker-092022-1842-9842.png"
          alt="error"
        />
        <div className="flex items-center justify-between space-x-5 ">
          <ul className="md:flex md:space-x-9 md:text-[14px] md:text-gray-500 hidden   ">
            <li></li>
            <Link to="/" className=" hover:text-primary-500">
              HOME
            </Link>
            <li className=" hover:text-primary-500">ALL PRODUCTS</li>
            <li className=" hover:text-primary-500">ABOUT</li>
            <li className=" hover:text-primary-500">CONTACT</li>
            <Link to={"/LoginPage"} className=" hover:text-primary-500">
              ACCOUNT
            </Link>
          </ul>

          <BiShoppingBag className="mb-2 text-4xl md:text-5xl text-primary-500 pointer-cursor" />

          <Link to={"/Cart"} className="cursor-pointer ">
            <div className="-ml-[49px] mt-[4px] text-sm text-primary-500">
              {" "}
              {productCount}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
