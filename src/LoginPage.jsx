import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="w-full h-full mx-10 mt-32 bg-white px-[100px] py-[80px]">
        <div className="">
          <h1 className="text-[25px] text-gray-500 font-semibold">Login</h1>
          <div className="rounded-md w-full h-full border border-gray-50 p-[20px] mt-[30px] ">
            <div className="text-[13.5px] text-gray-500 font-semibold leading-[27px]">
              <div className="p-[3px] mb-[6px]">
                <h3>
                  Username or email address{" "}
                  <span className="text-primary-500">*</span>
                </h3>
                <input className="p-[11.5px] h-[50px] rounded-sm w-full border border-gray-50" />
              </div>
              <div className="p-[3px] mb-[6px]">
                <h3>
                  Password <span className="text-primary-500">*</span>
                </h3>
                <input className="p-[11.5px] h-[50px] rounded-sm w-full border border-gray-50" />
              </div>
              <div className="p-[3px] mb-[6px]">
                <div className="flex items-center space-x-[4px] ">
                  <input type="checkbox" className="h-[13px] w-[13px] " />
                  <h3>Remember me</h3>
                </div>
                <button className="  px-[40px] py-[8px] text-[15px] rounded-md text-white font-semibold bg-primary-500">
                  LOG IN
                </button>{" "}
              </div>
              <Link
                to={""}
                className="text-primary-500 text-[15px] font-normal"
              >
                Lost your password ?{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
