import {
  User,
  CalendarDays,
  Users,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BasicDetails() {
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
              <button className="bg-white text-[#009879] w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium">
                <User size={18} />
                Profile
              </button>

              <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg w-full">
                <CalendarDays size={18} />
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
  <div className="w-[540px] bg-white border border-[#D8D8D8] rounded-[30px] px-10 py-8">

    <h1 className="text-[46px] font-bold text-center mb-8">
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
    <p className="text-[#8C8C8C] text-[17px] leading-7 mt-6">
      Please upload your identity proof to ensure that the
      ownership of your profile remains with only you.
    </p>

    {/* Documents */}
    <h3 className="font-semibold text-[18px] mt-6 mb-4">
      Acceptable documents
    </h3>

    <div className="grid grid-cols-2 gap-y-4 text-[17px]">

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
    <div className="flex gap-4 mt-8">

      <button
        onClick={() => navigate("/doctor/dashboard/identity")}
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