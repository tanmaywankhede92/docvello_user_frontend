import React from "react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Hero from "../components/pages/HomePage/Hero";
import QuickBooking from "../components/pages/HomePage/QuickBooking";
import FeaturedDoctors from "../components/pages/HomePage/FeaturedDoctors";
import Specializations from "../components/pages/HomePage/Specializations";
import Testimonials from "../components/pages/HomePage/Testimonials";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <QuickBooking/>
      <FeaturedDoctors />
      <Specializations />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;