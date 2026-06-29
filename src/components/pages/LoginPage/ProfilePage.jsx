import React, { useState } from "react";
import Albert from "../../../assets/DoctorsPage/Albert.png";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

function ProfilePage() {

  const [isEditing, setIsEditing] = useState(false);

  const [personalInfo, setPersonalInfo] = useState({
    phone: "+91-xxxx-xxxx",
    email: "info@gmail.com",
    gender: "Male",
    bloodGroup: "AB+",
    dob: "29/08/2002",
  });

  const handleChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
    <Navbar />
    <div className="min-h-screen bg-white px-4 py-6 md:px-8 md:py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-[28px] md:text-[34px] font-semibold text-[#111827] mb-5">
          My Profile
        </h1>

        <div className="space-y-5">
          <div className="bg-white border border-[#E7E3DA] rounded-2xl shadow-sm px-5 py-4 md:px-6 md:py-5">
            <div className="flex items-center gap-4">
              <img
                src={Albert}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border border-gray-200"
              />
              <div>
                <h2 className="text-[18px] md:text-[20px] font-semibold text-[#111827]">
                  Albert Wesker
                </h2>
                <p className="text-sm md:text-[15px] text-gray-500 mt-1">
                  Washington DC, United States
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E7E3DA] rounded-2xl shadow-sm px-5 py-5 md:px-6 md:py-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#111827]">
                Personal Information
              </h2>
             <button
  onClick={() => setIsEditing(!isEditing)}
  className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#E7E3DA] text-xs text-gray-600 hover:bg-gray-50 transition"
>
  {isEditing ? "Save" : "Edit"}
</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              <div>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">
                  Phone Number
                </p>
                {isEditing ? (
  <input
    type="text"
    name="phone"
    value={personalInfo.phone}
    onChange={handleChange}
    className="w-full border rounded-lg px-3 py-2"
  />
) : (
  <p className="text-[14px] md:text-[15px] font-medium text-[#111827]">
    {personalInfo.phone}
  </p>
)}
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">
                  Email Address
                </p>
                {isEditing ? (
  <input
    type="email"
    name="email"
    value={personalInfo.email}
    onChange={handleChange}
    className="w-full border rounded-lg px-3 py-2"
  />
) : (
  <p className="text-[14px] md:text-[15px] font-medium text-[#111827]">
    {personalInfo.email}
  </p>
)}
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">
                  Gender
                </p>
                {isEditing ? (
  <select
    name="gender"
    value={personalInfo.gender}
    onChange={handleChange}
    className="w-full border rounded-lg px-3 py-2"
  >
    <option>Male</option>
    <option>Female</option>
    <option>Other</option>
  </select>
) : (
  <p className="text-[14px] md:text-[15px] font-medium text-[#111827]">
    {personalInfo.gender}
  </p>
)}
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">
                  Blood Group
                </p>
                {isEditing ? (
  <input
    type="text"
    name="bloodGroup"
    value={personalInfo.bloodGroup}
    onChange={handleChange}
    className="w-full border rounded-lg px-3 py-2"
  />
) : (
  <p className="text-[14px] md:text-[15px] font-medium text-[#111827]">
    {personalInfo.bloodGroup}
  </p>
)}
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">
                  Date of Birth
                </p>
                {isEditing ? (
  <input
    type="date"
    name="dob"
    value={personalInfo.dob}
    onChange={handleChange}
    className="w-full border rounded-lg px-3 py-2"
  />
) : (
  <p className="text-[14px] md:text-[15px] font-medium text-[#111827]">
    {personalInfo.dob}
  </p>
)}
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E7E3DA] rounded-2xl shadow-sm px-5 py-5 md:px-6 md:py-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#111827]">
                Address
              </h2>
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#E7E3DA] text-xs text-gray-600 hover:bg-gray-50 transition">
                Edit
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              <div>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">
                  House No./Street Name
                </p>
                <p className="text-[14px] md:text-[15px] font-medium text-[#111827]">
                  Milling Nagar, Nagpur
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">
                  Colony/Street/Location
                </p>
                <p className="text-[14px] md:text-[15px] font-medium text-[#111827]">
                  Near NIT Office
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">
                  State
                </p>
                <p className="text-[14px] md:text-[15px] font-medium text-[#111827]">
                  Maharashtra
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">
                  City
                </p>
                <p className="text-[14px] md:text-[15px] font-medium text-[#111827]">
                  Nagpur
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">
                  Country
                </p>
                <p className="text-[14px] md:text-[15px] font-medium text-[#111827]">
                  India
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">
                  Pincode
                </p>
                <p className="text-[14px] md:text-[15px] font-medium text-[#111827]">
                  440013
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E7E3DA] rounded-2xl shadow-sm px-5 py-5 md:px-6 md:py-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#111827]">
                Other Information
              </h2>
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#E7E3DA] text-xs text-gray-600 hover:bg-gray-50 transition">
                Edit
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              <div>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">
                  Alternate Phone Number
                </p>
                <p className="text-[14px] md:text-[15px] font-medium text-[#111827]">
                  +91-xxxx-xxxx
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">
                  Language
                </p>
                <p className="text-[14px] md:text-[15px] font-medium text-[#111827]">
                  English
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default ProfilePage;
