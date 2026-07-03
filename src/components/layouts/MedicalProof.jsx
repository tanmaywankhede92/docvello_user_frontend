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

export default function MedicalProof() {
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
  <p className="text-[18px] text-[#8B8B8B] font-medium">
    Step - 2/3
  </p>

  {/* Progress */}
  <div className="flex gap-4 mt-3 mb-6">
    <div className="w-[150px] h-[6px] rounded-full bg-[#009879]" />
    <div className="w-[150px] h-[6px] rounded-full bg-[#009879]" />
    <div className="w-[150px] h-[6px] rounded-full bg-[#D9D9D9]" />
  </div>

  {/* Card */}
  <div className="w-[560px] bg-white border border-[#D9D9D9] rounded-[28px] px-9 py-8">

    {/* Success Box */}
    <div className="bg-[#EAF8F3] rounded-xl px-5 py-5 flex gap-3 mb-8">
      <CircleCheckBig
        size={22}
        className="text-[#009879] mt-1 flex-shrink-0"
      />

      <div>
        <h3 className="font-semibold text-[#009879] text-[18px]">
          Upload Successful
        </h3>

        <p className="text-[#009879] text-[16px] leading-7">
          Your Medical Registration Certificate has been
          successfully uploaded and is pending review.
        </p>
      </div>
    </div>

    {/* Heading */}
    <h1 className="text-[42px] font-bold text-center mb-8">
      Medical Registration Proof
    </h1>

    {/* Upload Box */}
    <label className="border border-[#D7D7D7] rounded-xl h-[165px] flex flex-col justify-center items-center cursor-pointer">

      <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center mb-4">
        <Upload size={24} />
      </div>

      <p className="font-semibold text-[22px]">
        Click to upload or Drag & drop
      </p>

      <p className="text-[#A4A4A4] text-[15px] mt-2">
        SVG, PNG, JPG & GIF (max. 800X400px)
      </p>

      <input type="file" className="hidden" />
    </label>

    {/* Description */}
    <p className="text-[#8B8B8B] text-[18px] leading-8 mt-5">
      Please upload your medical registration proof.
      Only licensed and genuine doctors are listed on Medihub.
    </p>

    {/* Acceptable */}
    <h3 className="font-semibold text-[20px] mt-7 mb-4">
      Acceptable documents
    </h3>

    <div className="space-y-3">

      <div className="flex items-center gap-3">
        <CircleCheckBig size={20} className="text-[#38C172]" />
        <span className="text-[17px]">
          Medical Registration Certification
        </span>
      </div>

      <div className="flex items-center gap-3">
        <CircleCheckBig size={20} className="text-[#38C172]" />
        <span className="text-[17px]">
          544457 Maharashtra Medical Council
        </span>
      </div>

    </div>

    {/* Buttons */}
    <div className="flex gap-4 mt-8">

      <button
        onClick={() => navigate("/doctor/dashboard/proof")}
        className="flex-1 h-[50px] rounded-lg border border-[#009879] text-[#009879] text-[18px] font-medium"
      >
        Back
      </button>

      <button
        onClick={() => navigate("/doctor/dashboard/registration")}
        className="flex-1 h-[50px] rounded-lg bg-[#009879] text-white text-[18px] font-medium hover:bg-[#00816B]"
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