import React from "react";
import { Navigate } from "react-router-dom";
import Withuser from "./Withuser";

const AuthRoute = ({ user, children }) => {
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default Withuser(AuthRoute);