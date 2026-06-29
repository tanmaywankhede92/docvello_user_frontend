import React from "react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Symptoms from "../components/pages/SpecializationsPage/Symptoms";
// import Cardiology from "../components/pages/SpecializationsPage/Cardiology";


function SpecializationsPage() {
  return (
    <div>
      <Navbar />
      <Symptoms />
      {/* <Cardiology /> */}
      <Footer />
    </div>
  );
}

export default SpecializationsPage;