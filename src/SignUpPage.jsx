import { withFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import Withuser from "./Withuser";

function callLoginApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      fullName: values.fullName,
      email: values.email,
      password: values.myPassword,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("tokenSignup", token);
      console.log(bag);
      bag.props.setUser(user);
    })
    .catch(() => {
      console.log("invalid credentials");
    });
}

const schema = Yup.object().shape({
  fullName: Yup.string().required(),
  email: Yup.string().email().required(),
  myPassword: Yup.string().min(6).required(),
});

const initialValues = {
  fullName: "",
  email: "",
  password: "",
};

export function SignUpPage({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (
    <>
      <div className="w-full h-full md:mx-10 md:mt-28 mx-1.5 mt-10  bg-white md:px-[100px] md:py-[80px]">
        <form onSubmit={handleSubmit} className="px-4 py-5">
          <h1 className="text-[25px] text-gray-500 font-semibold">Sign-Up</h1>
          <div className="rounded-md w-full h-full border border-gray-50 p-[20px] mt-[30px] ">
            <div className="text-[13.5px] text-gray-500 font-semibold md:leading-[27px]">
              <div className="p-[3px] mb-[6px]">
                <h3>
                  fullName <span className="text-primary-500">*</span>
                </h3>

                <Input
                  values={values.fullName}
                  onChange={handleChange}
                  label="fullName"
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="fullName"
                  placeholder="fullName"
                />
              </div>

              <div className="p-[3px] mb-[6px]">
                <h3>
                  email address <span className="text-primary-500">*</span>
                </h3>

                <Input
                  values={values.email}
                  error={errors.email}
                  touched={touched.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Email address"
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                />
              </div>

              <div className="p-[3px] mb-[6px]">
                <h3>
                  password <span className="text-primary-500">*</span>
                </h3>

                <Input
                  values={values.myPassword}
                  error={errors.myPassword}
                  touched={touched.myPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Password"
                  id="xyz"
                  name="myPassword"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Password"
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
      </div>
    </>
  );
}

const formikSignUp = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
})(SignUpPage);

export default Withuser(formikSignUp);
