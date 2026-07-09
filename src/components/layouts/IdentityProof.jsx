import {
  User,
  CalendarDays,
  Users,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BasicDetails() {
   const navigate = useNavigate();
const location = useLocation();
  return (
    <div className="h-screen flex bg-gray-100 font-sans">
      {/* Sidebar */}
        <aside className="w-[290px] bg-[#009879] text-white flex flex-col justify-between py-8 px-6">
          <div>
            {/* Logo */}
            <h1 className="text-3xl font-bold mb-14 flex items-center gap-2">
              🩺 <span>DocVello</span>
            </h1>

            <nav className="space-y-5">
  {/* Profile */}
  <button
    onClick={() => navigate("/doctor/registration")}
    className={`w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium transition ${
      location.pathname === "/doctor/registration"
        ? "bg-white text-[#009879]"
        : "text-white hover:bg-white/10"
    }`}
  >
    <User size={18} />
    Profile
  </button>

  {/* Appointment */}
 <button
    onClick={() => navigate("/doctor/dashboard/appointments")}
    className={`w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium transition ${
      location.pathname === "/doctor/dashboard/appointments"
        ? "bg-white text-[#009879]"
        : "text-white hover:bg-white/10"
    }`}
  >
    <CalendarDays size={18} />
    Appointment
  </button>

  {/* Patients */}
  <button
    onClick={() => navigate("/doctor/dashboard/patients")}
    className={`w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium transition ${
      location.pathname === "/doctor/dashboard/patients"
        ? "bg-white text-[#009879]"
        : "text-white hover:bg-white/10"
    }`}
  >
    <Users size={18} />
    Patients
  </button>
</nav>
          </div>

          <div className="space-y-4">
  {/* Settings */}
  <button
    onClick={() => navigate("/doctor/dashboard/settings")}
    className={`w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium transition ${
      location.pathname === "/doctor/dashboard/settings"
        ? "bg-white text-[#009879]"
        : "text-white hover:bg-white/10"
    }`}
  >
    <Settings size={18} />
    Settings
  </button>

  {/* Logout */}
  <button
    onClick={() => navigate("/doctor/logout")}
    className={`w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium transition ${
      location.pathname === "/doctor/logout"
        ? "bg-white text-[#009879]"
        : "text-white hover:bg-white/10"
    }`}
  >
    <LogOut size={18} />
    Log out
  </button>
</div>
        </aside>

   
        {/* Main */}
        <div className="flex-1 flex flex-col">

          {/* Header */}
          <header className="h-[86px] border-b border-[#DBDBDB]  flex justify-end  items-center px-10 bg-white">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100?img=32"
                alt=""
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h3 className="font-semibold">Christina Hanks</h3>
                <p className="text-gray-500 text-sm">
                  christina@gmail.com
                </p>
              </div>
            </div>
          </header>

{/* Content */}
<div className="flex-1 bg-[#FAFAFA] flex flex-col items-center justify-center py-6">

  {/* Step */}
  <p className="text-[18px] text-[#9B9B9B] font-medium">
    Step - 1/3
  </p>

  {/* Progress */}
  <div className="flex gap-5 mt-3 mb-6">
    <div className="w-[160px] h-[6px] rounded-full bg-[#009879]" />
    <div className="w-[160px] h-[6px] rounded-full bg-[#D9D9D9]" />
    <div className="w-[160px] h-[6px] rounded-full bg-[#D9D9D9]" />
  </div>

  {/* Card */}
  <div className="w-[540px] bg-white border border-[#D8D8D8] rounded-[30px] px-10 py-4 mb-4">

    <h1 className="text-[34px] font-bold text-center mb-4">
      Identity Proof
    </h1>

    {/* Upload Box */}
    <div className="border border-[#D7D7D7] rounded-xl h-[160px] flex flex-col items-center justify-center cursor-pointer">

      <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 4v12m0-12l-4 4m4-4l4 4"
          />
        </svg>
      </div>

      <p className="font-semibold text-[18px]">
        Click to upload or Drag & drop
      </p>

      <p className="text-gray-400 text-sm mt-2">
        SVG, PNG, JPG & GIF (max. 800x400px)
      </p>

      <input type="file" className="hidden" />
    </div>

    {/* Description */}
    <p className="text-[#8C8C8C] text-[17px] leading-6 mt-6">
      Please upload your identity proof to ensure that the
      ownership of your profile remains with only you.
    </p>

    {/* Documents */}
    <h3 className="font-semibold text-[18px] mt-6 mb-2 ">
      Acceptable documents
    </h3>

    <div className="grid grid-cols-2 text-[17px]">

      <div className="flex items-center gap-2">
        <span className="text-green-500 text-xl">✔</span>
        Aadhaar Card
      </div>

      <div className="flex items-center gap-2">
        <span className="text-green-500 text-xl">✔</span>
        Driving License
      </div>

      <div className="flex items-center gap-2">
        <span className="text-green-500 text-xl">✔</span>
        Voter Card
      </div>

      <div className="flex items-center gap-2">
        <span className="text-green-500 text-xl">✔</span>
        Any other Govt ID
      </div>

    </div>

    {/* Buttons */}
    <div className="flex gap-4 mt-4">

      <button
        onClick={() => navigate("/doctor/dashboard/registrationtwo")}
        className="flex-1 h-[48px] border border-[#009879] rounded-lg text-[#009879] font-medium"
      >
        Back
      </button>

      <button
        onClick={() => navigate("/doctor/dashboard/medicalproof")}
        className="flex-1 h-[48px] rounded-lg bg-[#009879] text-white font-medium"
      >
        Next
      </button>

    </div>

  </div>

</div>

     </div>
    </div>
  );
}