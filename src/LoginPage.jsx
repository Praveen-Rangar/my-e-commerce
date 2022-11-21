import { withFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import Withuser from "./Withuser";
import WithAlert from "./WithAlert";

function callLoginApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.myPassword,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);

      bag.props.setUser(user);
    })
    .catch(() => {
      bag.props.setAlert({ type: "error", message: "invalid credentials" });
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  myPassword: Yup.string().min(6).max(12).required(),
});

const initialValues = {
  email: "",
  myPassword: "",
};

export function LoginPage({
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
        <form onSubmit={handleSubmit} className="px-4 py-">
          <h1 className="text-[25px] text-gray-500 font-semibold">Login</h1>
          <div className="rounded-md w-full h-full border border-gray-50 p-[20px] mt-[30px] ">
            <div className="text-[13.5px] text-gray-500 font-semibold md:leading-[27px]">
              <div className="p-[3px] mb-[6px]">
                <h3>
                  Username or email address{" "}
                  <span className="text-primary-500">*</span>
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
                  placeholder="Email or Username"
                />
              </div>

              <div className="p-[3px] mb-[6px]">
                <h3>
                  Password <span className="text-primary-500">*</span>
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
                  className=" disabled:bg-500  px-[40px] py-[8px] text-[15px] rounded-md text-white font-semibold bg-primary-500"
                >
                  LOG IN
                </button>{" "}
              </div>
              <div className="flex justify-between ">
                <Link
                  to={"/ForgotPassword"}
                  className="hover:underline text-primary-500 text-[15px] font-normal"
                >
                  Lost your password ?{" "}
                </Link>
                <div className="flex">
                  <span className=" text-gray-300 text-[15px] font-normal md:mr-1.5">
                    Don't have an account? please
                  </span>
                  <Link
                    to={"/SignUpPage"}
                    className="hover:underline text-primary-500   text-[18px] font-normal md:mr-20"
                  >
                    {" "}
                    Sign-Up ?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

const formikLogin = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
})(LoginPage);

export default WithAlert(Withuser(formikLogin));
