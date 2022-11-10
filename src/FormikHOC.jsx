import React from "react";
import { useField } from "formik";

function FormikHOC(IncomingComponent) {
  function OutgoingComponent({ name, ...rest }) {
    const field = useField(name);

    const [data, meta] = field;

    const { value, onBlur, onChange } = data;
    const { error, touched } = meta;

    return (
      <IncomingComponent
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        error={error}
        touched={touched}
        name={name}
        {...rest}
      />
    );
  }

  return OutgoingComponent;
}

export default FormikHOC;
