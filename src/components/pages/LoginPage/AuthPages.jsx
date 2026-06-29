import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const [activeTab, setActiveTab] = useState("login");
  const [showOTP, setShowOTP] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    emailOrMobile: "",
  });

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (activeTab === "register" && !formData.fullName.trim()) {
      return "Please enter full name.";
    }

    if (!formData.emailOrMobile.trim()) {
      return "Please enter email or mobile number.";
    }

    return "";
  };

  const handleVerify = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setShowOTP(true);
    setTimeout(() => inputRefs.current[0]?.focus(), 0);
  };

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpVerify = () => {
    if (otp.some((digit) => digit === "")) {
      setError("Please enter complete OTP.");
      return;
    }

    const dummyUser = {
      name: activeTab === "register" ? formData.fullName : "Docvillo User",
      contact: formData.emailOrMobile,
      role: activeTab,
    };

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(dummyUser));

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] flex items-center justify-center px-3 sm:px-4 py-6">
      {!showOTP ? (
        <div className="w-full max-w-[560px] bg-white border border-gray-300 rounded-2xl sm:rounded-[28px] px-5 sm:px-8 md:px-14 py-6">
          <div className="flex justify-center mb-8 sm:mb-14">
            <div className="flex w-full max-w-full sm:max-w-[320px] border border-gray-300 rounded-full p-1">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("login");
                  setError("");
                }}
                className={`w-1/2 py-2 sm:py-3 rounded-full text-base sm:text-[18px] font-semibold transition-all duration-300 ${
                  activeTab === "login"
                    ? "bg-[#37B495] text-white"
                    : "text-black"
                }`}
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("register");
                  setError("");
                }}
                className={`w-1/2 py-3 rounded-full text-[18px] font-semibold transition-all duration-300 ${
                  activeTab === "register"
                    ? "bg-[#37B495] text-white"
                    : "text-black"
                }`}
              >
                Register
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {activeTab === "register" && (
              <div>
                <label className="block text-base sm:text-[18px] font-semibold mb-2 sm:mb-3 text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="w-full h-12 sm:h-14 border border-gray-300 rounded-lg px-4 text-sm sm:text-base outline-none focus:border-[#37B495]"
                />
              </div>
            )}

            <div>
              <label className="block text-[18px] font-semibold mb-3 text-black">
                Mobile Number / Email
              </label>
              <input
                type="text"
                name="emailOrMobile"
                value={formData.emailOrMobile}
                onChange={handleInputChange}
                placeholder="Enter email or mobile"
                className="w-full h-12 sm:h-14 border border-gray-300 rounded-lg px-4 text-sm sm:text-base outline-none focus:border-[#37B495]"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            <button
              type="button"
              onClick={handleVerify}
              className="w-full h-[56px] bg-[#0F4C81] hover:bg-[#0c3d68] text-white rounded-lg text-[20px] font-medium transition-all duration-300"
            >
              Verify
            </button>
            <p className="text-center mt-2 text-sm sm:text-lg leading-6">
              Are you a doctor?{" "}
              <button
                type="button"
                onClick={() => navigate("/doctor/auth")}
                className="text-[#37B495] font-medium"
              >
                Register Here
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-[760px] bg-white border border-gray-300 rounded-2xl sm:rounded-[28px] px-5 sm:px-8 md:px-14 py-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-black mb-3 sm:mb-4">
            Verify OTP
          </h2>

          <p className="text-base sm:text-2xl text-black leading-relaxed mb-6 sm:mb-10">
            We sent an OTP to your mobile/email. Enter it below to continue.
          </p>

          <div className="flex justify-center gap-2 sm:gap-4 mb-8 flex-wrap">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                className="w-10 h-10 sm:w-[72px] sm:h-[72px] border border-gray-300 rounded-lg sm:rounded-xl text-center text-lg sm:text-3xl outline-none focus:border-[#39B69A]"
              />
            ))}
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium mb-6">{error}</p>
          )}

          <button
            type="button"
            onClick={handleOtpVerify}
            className="w-full h-12 sm:h-[60px] bg-[#0F4C81] text-white rounded-lg sm:rounded-xl text-base sm:text-lg"
          >
            Verify
          </button>
        </div>
      )}
    </div>
  );
}
