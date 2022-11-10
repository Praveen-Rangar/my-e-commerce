import React, { useContext } from "react";

import { userContext } from "./Contexts";

const Withuser = (IncomingComponent) => {
  const OutgoingComponent = (props) => {
    const contextData = useContext(userContext);
    return <IncomingComponent {...props} {...contextData} />;
  };
  return OutgoingComponent;
};

export default Withuser;
