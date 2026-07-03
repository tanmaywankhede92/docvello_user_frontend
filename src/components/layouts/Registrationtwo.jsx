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

export default function Registrationtwo() {
    const navigate = useNavigate();
  return (
 <div className="min-h-screen bg-[#F4F4F4] p-2">
      <div className="bg-white rounded-[30px] overflow-hidden flex h-[96vh] shadow-xl">

        {/* Sidebar */}
        <aside className="w-[290px] bg-[#009879] text-white flex flex-col justify-between py-8 px-6">
          <div>
            {/* Logo */}
            <h1 className="text-3xl font-bold mb-14 flex items-center gap-2">
              🩺 <span>DocVello</span>
            </h1>

            <nav className="space-y-5">
              <button className="bg-white text-[#009879] w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium">
                <User size={18} />
                Profile
              </button>

              <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg w-full">
                <Calendar size={18} />
                Appointment
              </button>

              <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg w-full">
                <Users size={18} />
                Patients
              </button>
            </nav>
          </div>

          <div className="space-y-4">
            <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg w-full">
              <Settings size={18} />
              Settings
            </button>

            <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg w-full">
              <LogOut size={18} />
              Log out
            </button>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col">

          {/* Header */}
          <header className="h-[86px] border-b border-[#ECECEC] flex justify-end items-center px-10 bg-white">
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
<div className="flex flex-1 px-[44px] pt-[34px] gap-10 bg-white">

{/* Left */}
<div className="w-[52%] pt-2">

  {/* Heading */}
  <h1 className="text-[44px] font-bold text-[#1E1E1E] leading-tight">
    Great Progress!
  </h1>

  <p className="text-[18px] text-[#9B9B9B] mt-2 mb-4">
    Your Profile is just few steps away to complete.
  </p>

  {/* Section A */}
  <div className="w-[520px] border border-[#D9D9D9] rounded-[22px] px-6 py-2 mb-4">

    <h2 className="text-[18px] font-semibold text-[#202020]">
      Section A: Profile Details
    </h2>

    <p className="text-[15px] leading-6 text-[#555555] mt-2">
      Doctor's basic details, medical registration, education
      qualification, establishment details etc.
    </p>

    <button
      onClick={() => navigate("/doctor/dashboard/details")}
      className="mt-4 w-[140px] h-[44px] bg-[#009879] rounded-lg text-white font-medium hover:bg-[#00816B]"
    >
      Change
    </button>

  </div>

  {/* Section B */}
  <div className="w-[520px] border border-[#D9D9D9] rounded-[22px] px-6 py-2 mb-4">

    <h2 className="text-[18px] font-semibold text-[#202020]">
      Section B: Profile verification
    </h2>

    <p className="text-[15px] leading-6 text-[#555555] mt-2">
      Doctor identity proof, registration proof,
      establishment ownership proof etc.
    </p>

    <button
    onClick={() => navigate("/doctor/dashboard/identity")}
      className="mt-5 w-[140px] h-[44px] bg-[#009879] rounded-lg text-white font-medium hover:bg-[#00816B]"
    >
      Continue
    </button>

  </div>

  {/* Section C */}
  <div className="w-[520px] border border-[#D9D9D9] rounded-[22px] px-6 py-2 bg-[#FCFCFC]">

    <h2 className="text-[18px] font-semibold text-[#A5A5A5]">
      Step C: Start getting patients
    </h2>

    <p className="text-[16px] text-[#A5A5A5] mt-2">
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