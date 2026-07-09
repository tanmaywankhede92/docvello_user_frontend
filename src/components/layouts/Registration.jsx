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

export default function Dashboard() {
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
    <Calendar size={18} />
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

          {/* Body */}
<div className="flex-1 overflow-y-auto bg-[#FAFAFA] px-[44px] py-[34px]">
  <div className="flex gap-10 min-h-full">

  {/* Left */}
 <div className="w-[52%] pt-4 ">

    <h1 className="text-[50px] font-bold tracking-[-1px] text-[#1D1D1D] leading-none">
      Great Progress!
    </h1>

    <p className="text-[18px] text-[#8E8E8E] mt-2 mb-4">
      Your Profile is just few steps away to complete.
    </p>

    {/* Card 1 */}
    <div className="border border-[#D7D7D7] rounded-[22px] px-6 py-4 w-[610px] shadow-sm">
      <h2 className="text-[18px] font-semibold">
        Section A: Profile Details
      </h2>

      <p className="text-[#6F6F6F] text-[16px] leading-7 text-black mt-2">
        Doctor's basic details, medical registration,
        education qualification, establishment details etc.
      </p>

      <button
  onClick={() => navigate("/doctor/dashboard/details")}
  className="mt-2 bg-[#009879] hover:bg-[#00826A] text-white px-9 py-2 text-base rounded-lg text-xl font-medium"
>
  Continue
</button>
    </div>

    {/* Card 2 */}
    <div className="border border-[#D8D8D8] rounded-[22px] px-6 py-4 w-[610px] mb-4 mt-4 bg-[#FCFCFC]">
      <h2 className="text-[18px] font-semibold text-[#A7A7A7]">
        Section B: Profile verification
      </h2>

      <p className="text-[#A7A7A7] text-[16px] leading-8 mt-2">
        Doctor identity proof, registration proof,
        establishment ownership proof etc.
      </p>
    </div>

    {/* Card 3 */}
    <div className="border border-[#D8D8D8] rounded-[22px] px-6 py-4 w-[610px] bg-[#FCFCFC]">
      <h2 className="text-[18px] font-semibold text-[#A7A7A7]">
        Step C: Start getting patients
      </h2>

      <p className="text-[#A7A7A7] text-lg mt-2">
        Location, Timings, Fees
      </p>
    </div>

  </div>

  {/* Right */}
 <div className="w-[48%] flex justify-end items-center">

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
