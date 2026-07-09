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
            <button
             onClick={() => navigate("/doctor/registration")}
             className="bg-white text-[#009879] w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium" >
             <User size={18} />
              Profile
             </button>
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

        {/* Content */}
        {/* Content */}
<div className="flex-1 overflow-y-auto bg-[#FAFAFA] px-8 py-6 flex flex-col items-center">

  {/* Step */}
  <p className="text-[18px] text-[#9A9A9A] font-medium mb-2">
    Step - 1/5
  </p>

  {/* Progress */}
  <div className="flex gap-4 mb-8">
    <div className="w-[90px] h-[6px] rounded-full bg-[#009879]" />
    <div className="w-[90px] h-[6px] rounded-full bg-[#D9D9D9]" />
    <div className="w-[90px] h-[6px] rounded-full bg-[#D9D9D9]" />
    <div className="w-[90px] h-[6px] rounded-full bg-[#D9D9D9]" />
    <div className="w-[90px] h-[6px] rounded-full bg-[#D9D9D9]" />
  </div>

  {/* Card */}
  <div className="w-[510px] bg-white border border-[#D8D8D8] rounded-[28px] px-10 py-4 mb-4">

    <h1 className="text-[34px] font-bold text-center mb-4">
      Basic Details
    </h1>

    {/* Name */}
    <div className="mb-6">
      <label className="text-[#8B8B8B] text-[17px] block mb-2">
        Name
      </label>

      <div className="relative">
        <select className="w-full h-[48px] border border-[#D7D7D7] rounded-lg px-4 appearance-none text-[#8B8B8B]">
          <option>Dr</option>
        </select>

        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>

    {/* Specialization */}
    <div className="mb-6">
      <label className="text-[#8B8B8B] text-[17px] block mb-2">
        Specialization
      </label>

      <div className="relative">
        <select className="w-full h-[48px] border border-[#D7D7D7] rounded-lg px-4 appearance-none">
          <option>Cardiologist</option>
        </select>

        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>

    {/* Gender */}
    <div className="mb-6">
      <label className="text-[#8B8B8B] text-[17px] block mb-2">
        Gender
      </label>

      <div className="flex gap-10">
        <label className="flex items-center gap-2 text-[18px]">
          <input
            type="radio"
            name="practice"
            defaultChecked
            className="w-5 h-5 accent-[#009879]"
          />
          Male
        </label>

        <label className="flex items-center gap-2 text-[18px]">
          <input
            type="radio"
             name="practice"
             className="w-5 h-5 accent-[#009879]"
          />
          Female
        </label>
      </div>
    </div>

    {/* City */}
    <div className="mb-10">
      <label className="text-[#8B8B8B] text-[17px] block mb-2">
        City
      </label>

      <div className="relative">
        <select className="w-full h-[48px] border border-[#D7D7D7] rounded-lg px-4 appearance-none">
          <option>Nagpur</option>
        </select>

        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-4">
      <button
  onClick={() => navigate("/doctor/registration")}
  className="flex-1 h-[40px] border border-[#009879] rounded-lg text-[#009879] text-[18px] font-medium"
>
  Back
</button>
       
      <button
       onClick={() => navigate("/doctor/dashboard/medical")}
       className="flex-1 h-[40px] rounded-lg bg-[#009879] text-white text-[18px] font-medium">
        Next
      </button>
    </div>

  </div>
</div>
      </div>
    </div>
  );
}