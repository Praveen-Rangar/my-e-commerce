import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

function Navbar({ productCount }) {
  return (
    <div className="border-b border-gray-100  white py- md:py-[15px]  bg-white ">
      <div className="  max-w-[1264px] max-h-[70px] flex items-center justify-between px-5 py-2   mx-3 ">
        <img
          className="w-32  md:w-[140px] md:h-[50px]"
          src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
          alt="error"
        />
        <div className="flex items-center justify-between ">
          <ul className="md:flex md:items-center md:space-x-12 md:text-[14px] md:text-gray-500 hidden   ">
            <li></li>
            <Link to="/" className=" hover:underline hover:text-primary-500">
              HOME
            </Link>
            <a className="cursor-pointer hover:underline hover:text-primary-500">
              ALL PRODUCTS
            </a>
            <a className="cursor-pointer hover:underline hover:text-primary-500">
              ABOUT
            </a>

            <Link
              to={"/LoginPage"}
              className=" hover:underline hover:text-primary-500"
            >
              LOG IN
            </Link>
            <Link
              to={"/SignUpPage"}
              className=" hover:underline hover:text-primary-500"
            >
              SIGN UP
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
