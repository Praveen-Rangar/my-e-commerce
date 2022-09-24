import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function ForgotPassword() {
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
        <form onSubmit={handleSubmit} className="px-4 py-">
          <h1 className="text-[25px] text-gray-500 font-semibold text-center">
            Forgot Your Password{" "}
          </h1>
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
                  className="outline-none p-[11.5px] md:h-[46px] rounded-sm w-full border border-gray-50"
                />
              </div>
              {touched.email && errors.email && (
                <div className="text-primary-500"> {errors.email} </div>
              )}

              <div className="flex justify-center mt-4">
                <button className="w-96  text-white rounded h-[50px] bg-primary-500 hover:bg-primary-700">
                  Request Password Reset
                </button>
              </div>

              <div className="flex justify-center mt-3">
                <Link
                  to={"/SignUpPage"}
                  className="hover:underline text-primary-500 text-[15px] font-normal"
                >
                  Back to Sign in
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
