import React from "react";
import { Navigate } from "react-router-dom";
import { getRole, isLoggedIn } from "../utils/storage";

export default function ProtectedDoctorRoute({ children }) {
  const loggedIn = isLoggedIn();
  const role = getRole();

  if (!loggedIn || role !== "doctor") {
    return <Navigate to="/doctor/auth" replace />;
  }

  return children;
}