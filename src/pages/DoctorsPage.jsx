import React from "react";
import Navbar from "../components/layouts/Navbar";
import FindDoctor from "../components/pages/DoctorsPage/FindDoctor";
import Footer from "../components/layouts/Footer";


function DoctorsPage() {
  return (
    <div>
      <Navbar />
       <FindDoctor />
      <Footer />
    </div>
  );
}

export default DoctorsPage;