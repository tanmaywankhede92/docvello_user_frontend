import {
  User,
  CalendarDays,
  Users,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

export default function MedicalDetails() {
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
<div className="flex-1 bg-[#FAFAFA] flex flex-col items-center pt-4">

  {/* Step */}
  <p className="text-[18px] text-[#9B9B9B] font-medium">
    Step - 2/5
  </p>

  {/* Progress */}
  <div className="flex gap-4 mt-3 mb-8">
    <div className="w-[90px] h-[6px] rounded-full bg-[#009879]" />
    <div className="w-[90px] h-[6px] rounded-full bg-[#009879]" />
    <div className="w-[90px] h-[6px] rounded-full bg-[#D9D9D9]" />
    <div className="w-[90px] h-[6px] rounded-full bg-[#D9D9D9]" />
    <div className="w-[90px] h-[6px] rounded-full bg-[#D9D9D9]" />
  </div>

  {/* Card */}
  <div className="w-[560px] bg-white border border-[#D8D8D8] rounded-[30px] px-10 py-4 mb-4">

    <h1 className="text-[34px] font-bold text-center mb-4">
      Medical Registration
    </h1>

    {/* Registration Number */}
    <div className="mb-7">
      <label className="block text-[17px] text-[#8B8B8B] mb-2">
        Registration Number
      </label>

      <input
        type="text"
        className="w-full h-[52px] border border-[#D7D7D7] rounded-lg px-4 outline-none"
      />
    </div>

    {/* Registration Council */}
    <div className="mb-7">
      <label className="block text-[17px] text-[#8B8B8B] mb-2">
        Registration Council
      </label>

      <div className="relative">
        <select className="w-full h-[52px] border border-[#D7D7D7] rounded-lg px-4 appearance-none">
          <option>Maharashtra Medical Council</option>
        </select>

        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>

    {/* Registration Year */}
    <div className="mb-10">
      <label className="block text-[17px] text-[#8B8B8B] mb-2">
        Registration Year
      </label>

      <div className="relative">
        <select className="w-full h-[52px] border border-[#D7D7D7] rounded-lg px-4 appearance-none">
          <option>2026</option>
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
  onClick={() => navigate("/doctor/dashboard/details")}
  className="flex-1 h-[40px] border border-[#009879] rounded-lg text-[#009879] text-[18px] font-medium"
>
  Back
</button>

      <button
        onClick={() => navigate("/doctor/dashboard/education")}
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