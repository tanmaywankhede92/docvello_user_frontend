import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setDoctorSession } from "../../../utils/storage";

export default function DoctorAuthPage() {
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const [activeTab, setActiveTab] = useState("login");
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    emailOrMobile: "",
    password: "",
    medicalId: "",
  });

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (activeTab === "register" && !formData.fullName.trim()) {
      return "Please enter full name.";
    }

    if (!formData.emailOrMobile.trim()) {
      return "Please enter email or mobile number.";
    }

    if (!formData.password.trim()) {
      return "Please enter password.";
    }

    if (activeTab === "register" && !formData.medicalId.trim()) {
      return "Please enter medical ID.";
    }

    return "";
  };

  const handleContinue = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setShowOtp(true);
    setTimeout(() => inputRefs.current[0]?.focus(), 0);
  };

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpVerify = () => {
    if (otp.some((d) => d === "")) {
      setError("Please enter complete OTP.");
      return;
    }

    const doctorUser = {
      name: activeTab === "register" ? formData.fullName : "Doctor",
      contact: formData.emailOrMobile,
      role: "doctor",
      medicalId: formData.medicalId || "DOC-0001",
    };

    setDoctorSession(doctorUser);
    navigate("/doctor/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] flex items-center justify-center px-4 py-8">
      {!showOtp ? (
        <div className="w-full max-w-[560px] bg-white border border-gray-200 rounded-3xl px-6 sm:px-10 py-8 shadow-sm">
          <div className="flex justify-center mb-8">
            <div className="flex w-full max-w-[340px] border border-gray-200 rounded-full p-1">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("login");
                  setError("");
                }}
                className={`w-1/2 py-3 rounded-full font-semibold transition ${
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
                className={`w-1/2 py-3 rounded-full font-semibold transition ${
                  activeTab === "register"
                    ? "bg-[#37B495] text-white"
                    : "text-black"
                }`}
              >
                Register
              </button>
            </div>
          </div>

          <div className="space-y-5">
            {activeTab === "register" && (
              <div>
                <label className="block text-sm font-semibold mb-2 text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full h-12 border border-gray-300 rounded-lg px-4 outline-none focus:border-[#37B495]"
                />
              </div>
            )}

            {activeTab === "register" && (
              <div>
                <label className="block text-sm font-semibold mb-2 text-black">
                  Medical ID
                </label>
                <input
                  type="text"
                  name="medicalId"
                  value={formData.medicalId}
                  onChange={handleChange}
                  placeholder="Enter medical registration ID"
                  className="w-full h-12 border border-gray-300 rounded-lg px-4 outline-none focus:border-[#37B495]"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Mobile Number / Email
              </label>
              <input
                type="text"
                name="emailOrMobile"
                value={formData.emailOrMobile}
                onChange={handleChange}
                placeholder="Enter email or mobile"
                className="w-full h-12 border border-gray-300 rounded-lg px-4 outline-none focus:border-[#37B495]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full h-12 border border-gray-300 rounded-lg px-4 outline-none focus:border-[#37B495]"
              />
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            <button
              type="button"
              onClick={handleContinue}
              className="w-full h-12 bg-[#0F4C81] hover:bg-[#0c3d68] text-white rounded-lg font-semibold transition"
            >
              Continue
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full h-12 border border-gray-300 rounded-lg font-semibold text-gray-700"
            >
              Back to User Login
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-[760px] bg-white border border-gray-200 rounded-3xl px-6 sm:px-10 py-8 shadow-sm">
          <h2 className="text-3xl font-bold text-black mb-3">Verify OTP</h2>
          <p className="text-gray-600 mb-8">
            We sent an OTP to your mobile/email. Enter it below to continue.
          </p>

          <div className="flex justify-center gap-3 sm:gap-4 mb-8 flex-wrap">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                className="w-11 h-11 sm:w-16 sm:h-16 border border-gray-300 rounded-xl text-center text-xl sm:text-3xl outline-none focus:border-[#37B495]"
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm font-medium mb-4">{error}</p>}

          <button
            type="button"
            onClick={handleOtpVerify}
            className="w-full h-12 bg-[#0F4C81] text-white rounded-lg font-semibold"
          >
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
}