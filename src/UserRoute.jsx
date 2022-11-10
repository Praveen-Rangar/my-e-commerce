import React from "react";
import { Navigate } from "react-router-dom";
import Withuser from "./Withuser";

const UserRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/LoginPage" />;
  }

  return children;
};

export default Withuser(UserRoute);
