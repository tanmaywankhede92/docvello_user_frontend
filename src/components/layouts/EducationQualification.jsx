import {
  User,
  CalendarDays,
  Users,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EducationQualification() {
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
<div className="flex-1 bg-[#FAFAFA] flex flex-col items-center pt-6">

  {/* Step */}
  <p className="text-[18px] text-[#9B9B9B] font-medium">
    Step - 3/5
  </p>

  {/* Progress */}
  <div className="flex gap-4 mt-3 mb-6">
    <div className="w-[88px] h-[6px] rounded-full bg-[#009879]" />
    <div className="w-[88px] h-[6px] rounded-full bg-[#009879]" />
    <div className="w-[88px] h-[6px] rounded-full bg-[#009879]" />
    <div className="w-[88px] h-[6px] rounded-full bg-[#D9D9D9]" />
    <div className="w-[88px] h-[6px] rounded-full bg-[#D9D9D9]" />
  </div>

  {/* Card */}
  <div className="w-[510px] bg-white border border-[#D8D8D8] rounded-[30px] px-9 py-8">

    <h1 className="text-[34px] font-bold text-center mb-8">
      Education Qualification
    </h1>

    {/* Degree */}
    <div className="mb-5">
      <label className="block text-[#8B8B8B] text-[17px] mb-2">
        Degree
      </label>

      <div className="relative">
        <select className="w-full h-[44px] border border-[#D7D7D7] rounded-lg px-4 appearance-none">
          <option>Ayurveda Bhaskar</option>
        </select>

        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>

    {/* College */}
    <div className="mb-5">
      <label className="block text-[#8B8B8B] text-[17px] mb-2">
        College/Institute
      </label>

      <div className="relative">
        <select className="w-full h-[44px] border border-[#D7D7D7] rounded-lg px-4 appearance-none">
          <option>Type and select College</option>
        </select>

        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>

    {/* Year of Completion */}
    <div className="mb-5">
      <label className="block text-[#8B8B8B] text-[17px] mb-2">
        Year of Completion
      </label>

      <div className="relative">
        <select className="w-full h-[44px] border border-[#D7D7D7] rounded-lg px-4 appearance-none">
          <option>2024</option>
        </select>

        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>

    {/* Experience */}
    <div className="mb-8">
      <label className="block text-[#8B8B8B] text-[17px] mb-2">
        Year of Experience
      </label>

      <div className="relative">
        <select className="w-full h-[44px] border border-[#D7D7D7] rounded-lg px-4 appearance-none">
          <option>10</option>
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
        onClick={() => navigate("/doctor/dashboard/medical")}
        className="flex-1 h-[44px] border border-[#009879] rounded-lg text-[#009879] font-medium hover:bg-[#F4FFFC]"
      >
        Back
      </button>

      <button
        onClick={() => navigate("/doctor/dashboard/practice")}
        className="flex-1 h-[44px] rounded-lg bg-[#009879] text-white font-medium hover:bg-[#00816B]"
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