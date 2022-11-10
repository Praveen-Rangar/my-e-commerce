import React, { useContext } from "react";
import { AlertContext, userContext } from "./Contexts";

const  WithProvider = (provider) =>   (IncomingComponent) =>  (props) => {
      const contextData = useContext(provider);
      return <IncomingComponent {...props} {...contextData} />;
    };
  };


export default WithProvider;

export const withAlert = WithProvider(AlertContext);
export const withUser = WithProvider(userContext);
