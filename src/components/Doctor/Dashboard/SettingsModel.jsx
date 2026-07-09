import {
  User,
  Calendar,
  Users,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dash1 from "../../../assets/Dashboard/dash1.png";

export default function SettingsModel
() {
    const navigate = useNavigate();
    const location = useLocation();
    const [profileImage, setProfileImage] = useState(null);
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
{/* Body */}
<div className="flex-1 overflow-y-auto bg-[#FAFAFA] px-10 py-8">

  <div className="max-w-5xl">

    {/* Personal Details */}
    <h1 className="text-[38px] font-bold text-[#202020]">
      Personal Details
    </h1>

    <p className="text-gray-400 mt-1 mb-8">
      Update your personal details and credentials.
    </p>

    {/* Profile */}
    <div className="flex items-center gap-6 mb-8">

      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        
      </div>

      <div>
        <h2 className="text-2xl font-semibold">
          Christina Hanks
        </h2>

        <p className="text-gray-400">
          christina@gmail.com
        </p>

        <button className="mt-3 border rounded-lg px-5 py-2 hover:bg-gray-50">
          Upload Photo
        </button>
      </div>

    </div>

    {/* Personal Form */}
    <div className="grid grid-cols-2 gap-6 mb-10">

      <div>
        <label className="block mb-2 font-medium">
          First Name
        </label>

        <input
          type="text"
          className="w-full h-12 rounded-lg border border-gray-300 px-4 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Last Name
        </label>

        <input
          type="text"
          className="w-full h-12 rounded-lg border border-gray-300 px-4 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Degree
        </label>

        <input
          type="text"
          className="w-full h-12 rounded-lg border border-gray-300 px-4 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Speciality
        </label>

        <select className="w-full h-12 rounded-lg border border-gray-300 px-4 outline-none">
          <option>Select</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Psychiatry</option>
        </select>
      </div>

    </div>

    {/* Clinic Details */}
    <h2 className="text-[34px] font-bold text-[#202020]">
      Clinic Details
    </h2>

    <p className="text-gray-400 mt-1 mb-8">
      Manage your practice information and contact details.
    </p>

    <div className="space-y-6">

      <div>
        <label className="block mb-2 font-medium">
          Practice Name
        </label>

        <input
          type="text"
          className="w-full h-12 rounded-lg border border-gray-300 px-4 outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Email Address
          </label>

          <input
            type="email"
            className="w-full h-12 rounded-lg border border-gray-300 px-4 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Phone Number
          </label>

          <input
            type="text"
            className="w-full h-12 rounded-lg border border-gray-300 px-4 outline-none"
          />
        </div>

      </div>

      <div>
        <label className="block mb-2 font-medium">
          Address
        </label>

        <textarea
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none resize-none"
        />
      </div>

      <div className="flex justify-end">
        <button className="bg-[#009879] hover:bg-[#00826A] text-white px-8 py-3 rounded-lg font-medium">
          Save Changes
        </button>
      </div>

    </div>

  </div>

</div>

      </div>
      </div>
    

  );
}
