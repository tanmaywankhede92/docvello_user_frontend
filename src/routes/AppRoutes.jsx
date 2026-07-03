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
import DoctorLayout from "../components/layouts/Registration";
import BasicDetails from "../components/layouts/BasicDetails";
import MedicalDetails from "../components/layouts/MedicalDetails";
import EducationQualification from "../components/layouts/EducationQualification";
import ConnectPractice from "../components/layouts/ConnectPractice";
import EstablishmentProof from "../components/layouts/EstablishmentProof";
import Registrationtwo from "../components/layouts/Registrationtwo";
import IdentityProof from "../components/layouts/IdentityProof";
import MedicalProof from "../components/layouts/MedicalProof";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/doctor/auth" element={<DoctorAuthPage />} />
            <Route
        path="/doctor/registration"
        element={
          <ProtectedDoctorRoute>
            <DoctorLayout>
              <DoctorDashboard />      
            </DoctorLayout>
          </ProtectedDoctorRoute>
        }
      />

<Route
  path="/doctor/dashboard/details"
  element={
    <ProtectedDoctorRoute>
      <BasicDetails />
    </ProtectedDoctorRoute>
  }
/>

<Route
  path="/doctor/dashboard/medical"
  element={
    <ProtectedDoctorRoute>
      <MedicalDetails />
    </ProtectedDoctorRoute>
  }
/>

<Route
  path="/doctor/dashboard/education"
  element={
    <ProtectedDoctorRoute>
      <EducationQualification />
    </ProtectedDoctorRoute>
  }
/>

<Route
  path="/doctor/dashboard/practice"
  element={
    <ProtectedDoctorRoute>
      <ConnectPractice />
    </ProtectedDoctorRoute>
  }
/>

<Route
  path="/doctor/dashboard/proof"
  element={
    <ProtectedDoctorRoute>
      <EstablishmentProof />
    </ProtectedDoctorRoute>
  }
/>

<Route
  path="/doctor/dashboard/registrationtwo"
  element={
    <ProtectedDoctorRoute>
      <Registrationtwo />
    </ProtectedDoctorRoute>
  }
/>

<Route
  path="/doctor/dashboard/identity"
  element={
    <ProtectedDoctorRoute>
      <IdentityProof />
    </ProtectedDoctorRoute>
  }
/>

<Route
  path="/doctor/dashboard/medicalproof"
  element={
    <ProtectedDoctorRoute>
      <MedicalProof />
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
