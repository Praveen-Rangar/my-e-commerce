import React, { useContext } from "react";
import { AlertContext } from "./Contexts";

const WithAlert = (IncomingComponent) => {
  const OutgoingComponent = (props) => {
    const contextData = useContext(AlertContext);
    return <IncomingComponent {...props} {...contextData} />;
  };
  return OutgoingComponent;
};

export default WithAlert;
