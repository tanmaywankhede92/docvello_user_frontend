import React from "react";
import Navbar from "../components/layouts/Navbar";
import ContactSection from "../components/pages/ContactPage/ContactSection";
import Footer from "../components/layouts/Footer";


function ContactPage() {
  return (
    <div>
      <Navbar />
    
      <ContactSection />
      <Footer />
    </div>
  );
}

export default ContactPage;