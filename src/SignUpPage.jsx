import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";

function SignUpPage() {
  function callLoginApi(values) {}

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <div className="w-full h-full md:mx-10 md:mt-28 mx-1.5 mt-10  bg-white md:px-[100px] md:py-[80px]">
        <Formik
          initialValues={initialValues}
          onSubmit={callLoginApi}
          validationSchema={schema}
        >
          <form className="px-4 py-5">
            <h1 className="text-[25px] text-gray-500 font-semibold">Sign-Up</h1>
            <div className="rounded-md w-full h-full border border-gray-50 p-[20px] mt-[30px] ">
              <div className="text-[13.5px] text-gray-500 font-semibold md:leading-[27px]">
                <div className="p-[3px] mb-[6px]">
                  <h3>
                    Username or email address{" "}
                    <span className="text-primary-500">*</span>
                  </h3>

                  <Input
                    type="email-address"
                    id="email"
                    name="email"
                    required
                    className="outline-none p-[11.5px] md:h-[50px] rounded-sm w-full border border-gray-50"
                  />
                </div>

                <div className="p-[3px] mb-[6px]">
                  <h3>
                    Password <span className="text-primary-500">*</span>
                  </h3>

                  <Input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="outline-none p-[11.5px] md:h-[50px] rounded-sm w-full border border-gray-50"
                  />
                </div>

                <div className="p-[3px] mb-[6px]">
                  <h3>
                    Re-enter Password{" "}
                    <span className="text-primary-500">*</span>
                  </h3>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="outline-none p-[11.5px] md:h-[50px] rounded-sm w-full border border-gray-50"
                  />
                </div>

                <div className="p-[3px] mb-[6px]">
                  <div className="flex items-center space-x-[4px] ">
                    <input type="checkbox" className="h-[13px] w-[13px] " />
                    <h3>Remember me</h3>
                  </div>
                  <button
                    type="submit"
                    className="disabled:bg-500  px-[40px] py-[8px] text-[15px] rounded-md text-white font-semibold bg-primary-500"
                  >
                    Sign Up
                  </button>{" "}
                </div>

                <div className="flex">
                  <span className=" text-gray-300 text-[15px] font-normal md:mr-1.5">
                    Already have an account? please
                  </span>
                  <Link
                    to={"/LoginPage"}
                    className="hover:underline text-primary-500 text-[18px] font-normal md:mr-20"
                  >
                    {" "}
                    Log-In ?
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </Formik>
      </div>
    </>
  );
}

export default SignUpPage;
