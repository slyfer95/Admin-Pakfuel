import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AppProvider } from "./context/context";
import ProtectedRoute from "./context/ProtectedRoute"; // Import the protected route component

import HomeScreen from "./screens/HomeScreen";
import SignIn from "./screens/Auth/SignInScreen";
import Dashboard from "./screens/DashboadScreen/DashboardScreen";
import PumpScreen from "./screens/PumpScreen/PumpScreen";
import EmployeeScreen from "./screens/EmployeeScreen/EmployeeScreen";
import EmployeeListScreen from "./screens/EmployeeScreen/EmployeeListScreen";
import CustomerListScreen from "./screens/CustomerScreen/CustomerListScreen";
import CustomerScreen from "./screens/CustomerScreen/CustomerScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<SignIn />} />

      <Route path="/" element={<HomeScreen />} />
      <Route
        path="/home"
        element={<ProtectedRoute element={<Dashboard />} />}
      />
      <Route
        path="/pumpscreen"
        element={<ProtectedRoute element={<PumpScreen />} />}
      />
      <Route
        path="/employee-list"
        element={<ProtectedRoute element={<EmployeeListScreen />} />}
      />
      <Route
        path="/employee"
        element={<ProtectedRoute element={<EmployeeScreen />} />}
      />
      <Route
        path="/customer-list"
        element={<ProtectedRoute element={<CustomerListScreen />} />}
      />
      <Route
        path="/customer"
        element={<ProtectedRoute element={<CustomerScreen />} />}
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();
