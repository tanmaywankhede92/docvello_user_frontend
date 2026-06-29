import React from "react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import AuthPages from "../components/pages/LoginPage/AuthPages";


function LoginPage() {
  return (
    <div>
      <Navbar />
      <AuthPages />
      <Footer />
    </div>
  );
}

export default LoginPage;