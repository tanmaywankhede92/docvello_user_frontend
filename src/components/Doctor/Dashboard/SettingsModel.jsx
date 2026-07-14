import {
  User,
  Calendar,
  Users,
  Settings,
  LogOut,
  Camera,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dash1 from "../../../assets/Dashboard/dash1.png";

export default function SettingsModel
() {
    const navigate = useNavigate();
    const location = useLocation();
    const [profileImage, setProfileImage] = useState(null);
    const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    setProfileImage(URL.createObjectURL(file));
  }
};
  return (
<div className="min-h-screen flex flex-col lg:flex-row bg-gray-100 font-sans">

        {/* Sidebar */}
        <aside
  className="
    w-full
    lg:w-[290px]
    bg-[#009879]
    text-white
    flex
    flex-col
    justify-between
    px-5
    py-6
    lg:px-6
    lg:py-8
    
  "
>
          <div>
            {/* Logo */}
            <h1 className="text-2xl lg:text-3xl font-bold mb-8 lg:mb-14 flex items-center gap-2">
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
        <div className="flex-1 flex flex-col overflow-x-hidden ">

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

<div
  className="
    flex-1 overflow-y-auto bg-[#FAFAFA] px-4 sm:px-6 md:px-8 lg:px-10 py-6 lg:py-8">

  <div className="max-w-5xl mx-auto">

    {/* Personal Details */}
    <h1 className="text-[38px] font-bold text-[#202020]">
      Personal Details
    </h1>

    <p className="text-gray-400 mt-1 mb-8">
      Update your personal details and credentials.
    </p>

    {/* Profile */}
<div className="flex items-center gap-6 mb-10">

  {/* Profile Image */}
  <div className="relative">

    <div className="w-[120px] h-[120px] rounded-full bg-[#ECECEC] overflow-hidden flex items-center justify-center">

      {profileImage ? (
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      ) : (
        <User size={55} className="text-gray-400" />
      )}

    </div>

    {/* Camera Button */}
    <label
      htmlFor="profileUpload"
      className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-white border border-gray-300 shadow cursor-pointer flex items-center justify-center"
    >
      <Camera size={18} className="text-[#009879]" />
    </label>

    <input
      id="profileUpload"
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleImageChange}
    />

  </div>

  {/* Name */}
  <div>
    <h2 className="text-[26px] font-semibold">
      Christina Hanks
    </h2>

    <p className="text-lg text-gray-400 mb-5">
      christina@gmail.com
    </p>

    <label
      htmlFor="profileUpload"
      className="cursor-pointer border border-gray-300 rounded-xl px-7 py-3 text-lg font-medium hover:bg-gray-50"
    >
      Upload Photo
    </label>
  </div>

</div>
    

    {/* Personal Form */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
    <h2 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-[#202020]">
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
          className="w-full h-12 rounded-lg border border-gray-300 px-4 outline-none text-sm md:text-base"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Email Address
          </label>

          <input
            type="email"
            className="w-full h-12 rounded-lg border border-gray-300 px-4 outline-none text-sm md:text-base"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Phone Number
          </label>

          <input
            type="text"
            className="w-full h-12 rounded-lg border border-gray-300 px-4 outline-none text-sm md:text-base"
          />
        </div>

      </div>

      <div>
        <label className="block mb-2 font-medium">
          Address
        </label>

        <textarea
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none resize-none text-sm md:text-base"
        />
      </div>

      <div className="flex justify-center md:justify-end">
        <button className="w-full md:w-auto bg-[#009879] hover:bg-[#00826A] text-white px-8 py-3 rounded-lg font-medium">
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
