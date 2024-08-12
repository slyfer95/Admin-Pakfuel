import { Outlet, Navigate } from "react-router-dom";
import { AppContext } from "../context/context";
import { useContext } from "react";

const AuthRoute = () => {
  const { user } = useContext(AppContext);

  return user ? <Navigate to="/home" /> : <Outlet />;
};

export default AuthRoute;
