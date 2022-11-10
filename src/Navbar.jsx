import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { AiFillHome } from "react-icons/ai";

function Navbar({ productCount }) {
  return (
    <div className=" hidden md:block border-b border-gray-100  md:py-[10px]  bg-white ">
      <div className="  max-w-[1264px] max-h-[70px] flex items-center justify-between px-5 py-2   mx-3 ">
        <img
          className="w-32  md:w-[140px] md:h-[50px]"
          src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
          alt="error"
        />

        <div className="items-center justify-between hidden md:flex ">
          <ul className=" md:flex md:items-center md:space-x-8 md:text-[14px] md:text-gray-500 hidden   ">
            <li></li>
            <Link to="/">
              <AiFillHome className="text-3xl text-primary-300" />
            </Link>

            <Link to={"/LoginPage"}>
              <button className="shadow-md px-4 py-2 bg-white border border-gray-400 rounded-md text-[16px]">
                Login
              </button>
            </Link>
            <Link to={"/SignUpPage"}>
              <button className="shadow-md px-4 py-2 text-white rounded bg-primary-300 text-[16px]">
                SignUp
              </button>
            </Link>

            <Link to={"/Cart"} className="cursor-pointer ">
              <Badge badgeContent={productCount} color={"secondary"}>
                <ShoppingCartOutlined
                  style={{ fontSize: "35px" }}
                  className=" text-primary-500 pointer-cursor"
                />
              </Badge>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
