
import {
  User,
  CalendarDays,
  Users,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MedicalDetails() {
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
             className="bg-white text-[#009879] w-full rounded-lg px-4 py-3 flex items-center gap-3 font-medium">
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
<div className="flex-1 bg-[#FAFAFA] flex flex-col items-center justify-center">

  {/* Step */}
  <p className="text-[18px] text-[#9B9B9B] font-medium mb-3">
    Step - 4/5
  </p>

  {/* Progress */}
  <div className="flex gap-4 mb-8">
    <div className="w-[88px] h-[6px] rounded-full bg-[#009879]" />
    <div className="w-[88px] h-[6px] rounded-full bg-[#009879]" />
    <div className="w-[88px] h-[6px] rounded-full bg-[#009879]" />
    <div className="w-[88px] h-[6px] rounded-full bg-[#009879]" />
    <div className="w-[88px] h-[6px] rounded-full bg-[#D9D9D9]" />
  </div>

  {/* Card */}
  <div className="w-[510px] bg-white border border-[#D8D8D8] rounded-[30px] px-10 py-4 mb-4">

    <h1 className="text-[34px] font-bold text-center mb-4">
      Connect a Practice
    </h1>

    <div className="space-y-7 mb-12">
      <label className="flex items-center gap-3 cursor-pointer text-[22px] font-medium">
        <input
          type="radio"
          name="practice"
          defaultChecked
          className="w-6 h-6 accent-[#009879]"
        />
        I own an establishment
      </label>

      <label className="flex items-center gap-3 cursor-pointer text-[22px] font-medium">
        <input
          type="radio"
          name="practice"
          className="w-6 h-6 accent-[#009879]"
        />
        I visit an establishment
      </label>
    </div>

    <div className="flex gap-4">
      <button
        onClick={() => navigate("/doctor/dashboard/education")}
        className="flex-1 h-[48px] border border-[#009879] rounded-lg text-[#009879] text-[18px] font-semibold"
      >
        Back
      </button>

      <button
        onClick={() => navigate("/doctor/dashboard/proof")}
        className="flex-1 h-[48px] bg-[#009879] rounded-lg text-white text-[18px] font-semibold"
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