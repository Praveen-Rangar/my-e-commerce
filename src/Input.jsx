import { useField } from "formik";
import React from "react";

function Input({ name, lable, id, ...rest }) {
  const field = useField(name);
  const [data, meta] = field;

  const { value, onBlur, onChange } = data;
  const { error, touched } = meta;

  return (
    <>
      <div>
        <label htmlFor={id} className="sr-only">
          {lable}
        </label>
        <input
          id={id}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          error={error}
          name={name}
          touched={touched}
          className="outline-none p-[11.5px] md:h-[46px] rounded-sm w-full border border-gray-50"
          {...rest}
        />
        {touched && error && <div className="text-primary-500"> {error} </div>}{" "}
      </div>
    </>
  );
}

export default Input;
