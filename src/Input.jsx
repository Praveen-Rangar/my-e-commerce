import React from "react";
import FormikHOC from "./FormikHOC";

function Input({ name, lable, id, touched, error, ...rest }) {
  return (
    <>
      <div>
        <label htmlFor={id} className="sr-only">
          {lable}
        </label>
        <input
          id={id}
          name={name}
          className="outline-none p-[11.5px] md:h-[46px] rounded-sm w-full border border-gray-50"
          {...rest}
        />
        {touched && error && <div className="text-primary-500"> {error} </div>}{" "}
      </div>
    </>
  );
}

export default FormikHOC(Input);
