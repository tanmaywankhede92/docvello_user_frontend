import React from "react";
import Navbar from "../components/layouts/Navbar";
import Hero from "../components/pages/AboutPage/Hero";
import MissionVision from "../components/pages/AboutPage/MissionVision";
import Footer from "../components/layouts/Footer";


function AboutPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MissionVision />
      <Footer />
    </div>
  );
}

export default AboutPage;