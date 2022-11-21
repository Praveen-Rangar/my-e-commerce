import React, { useContext } from "react";
import { UserContext } from "./Contexts";


const Withuser = (IncomingComponent) => {
  const OutgoingComponent = (props) => {
    const contextData = useContext(UserContext);
    return <IncomingComponent {...props} {...contextData} />;
  };
  return OutgoingComponent;
};

export default Withuser;
