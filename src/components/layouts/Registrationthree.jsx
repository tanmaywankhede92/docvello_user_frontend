import {
  User,
  Calendar,
  Users,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dash1 from "../../assets/Dashboard/dash1.png";

export default function Registrationthreee(){
    const navigate = useNavigate();
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
{/* Main */}
<div className="flex-1 flex flex-col overflow-hidden">

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

{/* Scrollable Content */}
<div className="flex-1 overflow-y-auto">
  <div className="flex px-[52px] pt-[42px] pb-10 gap-12 bg-white min-h-full">

    {/* Left */}
    <div className="w-[52%] pt-0">

      <h1 className="text-[44px] font-bold text-[#202020] leading-[70px]">
        Great Progress!
      </h1>

      <p className="text-[20px] text-[#A5A5A5]  mb-3">
        Your Profile is just few steps away to complete.
      </p>

      {/* Section A */}
      <div className="w-[520px] border border-[#D9D9D9] rounded-[22px] px-6 py-3 mb-5">
        <h2 className="text-[18px] font-semibold text-[#202020]">
          Section A: Profile Details
        </h2>

        <p className="text-[15px] text-[#555555] mt-2 leading-6">
          Doctor's basic details, medical registration, education
          qualification, establishment details etc.
        </p>

        <button
          onClick={() => navigate("/doctor/dashboard/details")}
          className="mt-5 w-[140px] h-[44px] bg-[#009879] rounded-lg text-white font-medium hover:bg-[#00816B]"
        >
          Change
        </button>
      </div>

      {/* Section B */}
      <div className="w-[520px] border border-[#D9D9D9] rounded-[22px] px-6 py-5 mb-5">
        <h2 className="text-[18px] font-semibold text-[#202020]">
          Section B: Profile verification
        </h2>

        <p className="text-[15px] text-[#555555] mt-2 leading-6">
          Doctor identity proof, registration proof,
          establishment ownership proof etc.
        </p>

        <button
          onClick={() => navigate("/doctor/dashboard/identity")}
          className="mt-5 w-[140px] h-[44px] bg-[#009879] rounded-lg text-white font-medium hover:bg-[#00816B]"
        >
          Change
        </button>
      </div>

      {/* Section C */}
      <div className="w-[520px] border border-[#D9D9D9] rounded-[22px] px-6 py-5 bg-[#FCFCFC]">
        <h2 className="text-[18px] font-semibold text-[#202020]">
          Step C: Start getting patients
        </h2>

        <p className="text-[15px] text-[#555555] mt-2">
          Location, Timings, Fees
        </p>

        <button
          onClick={() => navigate("/doctor/dashboard/maplocation")}
          className="mt-5 w-[140px] h-[44px] bg-[#009879] rounded-lg text-white font-medium hover:bg-[#00816B]"
        >
          Continue
        </button>
      </div>
    </div>

    {/* Right */}
    <div className="w-[48%] flex justify-end items-start">
      <img
        src={dash1}
        alt="Dashboard Preview"
        className="w-[470px] h-auto object-contain"
      />
    </div>

  </div>
</div>

</div>

      </div>
  );
}