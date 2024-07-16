import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./context";

const ProtectedRoute = ({ element }) => {
  const { user } = useContext(AppContext);

  return user ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
