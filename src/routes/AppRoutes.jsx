import React from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedDoctorRoute from "./ProtectedDoctorRoute";

import Home from "../pages/HomePage";
import DoctorsPage from "../pages/DoctorsPage";
import LoginPage from "../pages/LoginPage";
import SpecializationsPage from "../pages/SpecializationsPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

import Cardiology from "../components/pages/SpecializationsPage/Cardiology";
import Psychiatrist from "../components/pages/SpecializationsPage/Psychiatrist";
import Neurology from "../components/pages/SpecializationsPage/Neurology";
import GeneralPhysician from "../components/pages/SpecializationsPage/GeneralPhysician";
import Peditatrics from "../components/pages/SpecializationsPage/Peditatrics";
import ProfilePage from "../components/pages/LoginPage/ProfilePage";
import DoctorAuthPage from "../components/Doctor/auth/DoctorAuthPage";
import DoctorDashboard from "../components/Doctor/Dashboard/DoctorDashboard";
import ProfileDetails from "../components/Doctor/Dashboard/ProfileDetails";
import DoctorLayout from "../components/layouts/DoctorLayout";
import BasicDetails from "../components/layouts/BasicDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/doctor/auth" element={<DoctorAuthPage />} />
      <Route path="/doctor/dashboard/details" element={<BasicDetails />} />
      <Route path="/doctor/dashboard/profile" element={<ProfileDetails />} />
      <Route
        path="/doctor/dashboard"
        element={
          <ProtectedDoctorRoute>
            <DoctorLayout>
              <DoctorDashboard />
              <ProfileDetails />
            </DoctorLayout>
          </ProtectedDoctorRoute>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/specialization" element={<SpecializationsPage />} />
      <Route path="/cardiology" element={<Cardiology />} />
      <Route path="/psychiatrist" element={<Psychiatrist />} />
      <Route path="/neurology" element={<Neurology />} />
      <Route path="/generalphysician" element={<GeneralPhysician />} />
      <Route path="/peditatrics" element={<Peditatrics />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/basic-details" element={<BasicDetails />} />
    </Routes>
  );
};
export default AppRoutes;
