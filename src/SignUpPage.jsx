import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function SignUpPage() {
  function callLoginApi(values) {
    console.log("sending data", values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  return (
    <>
      <div className="w-full h-full md:mx-10 md:mt-28 mx-1.5 mt-10  bg-white md:px-[100px] md:py-[80px]">
        <form onSubmit={handleSubmit} className="px-4 py-5">
          <h1 className="text-[25px] text-gray-500 font-semibold">Sign-Up</h1>
          <div className="rounded-md w-full h-full border border-gray-50 p-[20px] mt-[30px] ">
            <div className="text-[13.5px] text-gray-500 font-semibold md:leading-[27px]">
              <div className="p-[3px] mb-[6px]">
                <h3>
                  Username or email address{" "}
                  <span className="text-primary-500">*</span>
                </h3>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  id="-email"
                  name="email"
                  required
                  className="outline-none p-[11.5px] md:h-[50px] rounded-sm w-full border border-gray-50"
                />
              </div>
              {touched.email && errors.email && (
                <div className="text-primary-500"> {errors.email} </div>
              )}
              <div className="p-[3px] mb-[6px]">
                <h3>
                  Password <span className="text-primary-500">*</span>
                </h3>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  id="psw"
                  name="password"
                  required
                  className="outline-none p-[11.5px] md:h-[50px] rounded-sm w-full border border-gray-50"
                />
              </div>

              <div className="p-[3px] mb-[6px]">
                <h3>
                  Re-enter Password <span className="text-primary-500">*</span>
                </h3>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  id="psw"
                  name="password"
                  required
                  className="outline-none p-[11.5px] md:h-[50px] rounded-sm w-full border border-gray-50"
                />
              </div>

              {touched.password && errors.password && (
                <div className="text-primary-500"> {errors.password} </div>
              )}
              <div className="p-[3px] mb-[6px]">
                <div className="flex items-center space-x-[4px] ">
                  <input type="checkbox" className="h-[13px] w-[13px] " />
                  <h3>Remember me</h3>
                </div>
                <button
                  type="submit"
                  className="disabled:bg-500  px-[40px] py-[8px] text-[15px] rounded-md text-white font-semibold bg-primary-500"
                  disabled={!isValid}
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
      </div>
    </>
  );
}

export default SignUpPage;
